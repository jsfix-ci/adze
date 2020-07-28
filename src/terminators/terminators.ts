import {
  Log, LogFunction,
  CustomLogFunction,
  Defaults, LogLevelDefinition, TerminatedLog,
} from '../_contracts';
import { print } from '../printers';
import { storeExists } from '../shed';
import { env, isBrowser } from '../global';

/**
 * Take a Log and branch from it by providing new copied logs.
 */
export function seal(this: Log):Log {
  // Run the modifier queue to apply their results
  runModifierQueue(this.modifierQueue);
  // Clear the queue as to not repeat the actions when the subsequent logs are terminated.
  this.modifierQueue = [];
  return { ...this };
}

/**
 * Generates a terminating log method the specified log level name.
 */
export function logMethod(cfg: Defaults, levelName: string):LogFunction {
  return function(this: Log, ...args: any[]):TerminatedLog {
    const definition = cfg.log_levels[levelName];
    const def: LogLevelDefinition = { ...definition, levelName };
    if (allowed(cfg, def)) {
      return executionPipeline(this, def, args);
    }
    return { log: this, render: null };
  };
}

/**
 * Generates a terminating log method that enables the user to specify a custom
 * log level by key as the format for the log.
 */
export function customMethod(cfg: Defaults):CustomLogFunction {
  return function(this: Log, levelName: string, ...args: any[]):TerminatedLog {
    const definition = cfg.custom_levels[levelName];
    if (definition) {
      const def = { ...definition, levelName };
      if (allowed(cfg, def)) {
        return executionPipeline(this, def, args);
      }
    }
    return { log: this, render: null };
  };
};

/**
 * The primary execution pipeline for terminating log methods.
 */
function executionPipeline(log: Log, def: LogLevelDefinition, args: any[]):TerminatedLog {

  // Apply modifiers in the proper order.
  runModifierQueue(log.modifierQueue);

  // Check the test modifiers.
  if (evalPasses(log)) {
    // Save the args for recall purposes
    log.args = args;
    const render = print(log, def, args);
    cache(log, args);
    fireListeners(log, args);

    return { log, render }
  }

  return { log, render: null };
}

function runModifierQueue(queue: Function[]) {
  queue.forEach(func => func());
}

/*----------------------------------------*\
 * Terminator Conditions
\*----------------------------------------*/

/**
 * Determine the fate of whether this log will terminate.
 */
function allowed(cfg: Defaults, def: LogLevelDefinition):boolean {
  return levelActive(def, cfg.log_level) && notTestEnv();
}

/**
 * Check if the log level is high enough for the log to terminate.
 */
function levelActive(def: LogLevelDefinition, level: number):boolean {
  return def.level <= level;
}

/**
 * Check if any assertions or expressions pass for this log to terminate.
 */
function evalPasses(log: Log):boolean {
  if (log.assertion !== undefined && log.expression !== undefined) {
    console.warn("You have declared both an assertion and test on the same log. Please only declare one or nefarious results may occur.");
    return true;
  }
  if (log.assertion !== undefined) {
    return log.assertion === false;
  }
  if (log.expression !== undefined) {
    return log.expression === true;
  }
  return true;
}

/**
 * Verify that this log is not in a test environment and prevent
 * termination if it is.
 */
function notTestEnv():boolean {
  if (isBrowser) {
    return true;
  }
  return env?.ADZE_ENV !== 'test';
}

/*----------------------------------------*\
 * Log Events
\*----------------------------------------*/

/**
 * Caches this log to the Shed if it exists.
 */
export function cache(log: Log, args: any[]):void {
  if (storeExists(env.$shed)) {
    env.$shed.addToCache(log, args);
  }
}

/**
 * Fires listeners for this log instance if a Shed exists.
 */
export function fireListeners(log: Log, args: any[]):void {
  if (storeExists(env.$shed)) {
    env.$shed.fireListeners(log, args);
  }
}