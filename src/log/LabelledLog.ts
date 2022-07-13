import type { Constraints, Configuration } from '../_contracts';
import { Log } from '.';
import { Printer } from '../printers';
import { Label } from '../label';
import { Env } from '../env';
import { captureTimeNow } from '../util';

export class LabelledLog<C extends Constraints> extends Log<C> {
  /**
   * The label instance assigned to this log.
   */
  private _labelVal: Label;

  constructor(printer: typeof Printer, env: Env, user_cfg?: Configuration) {
    super(printer, env, user_cfg);
  }

  /**
   * Following the MDC (Mapped Diagnostic Context) pattern this method enables you to create
   * a thread for adding context from different scopes before finally terminating the log.
   *
   * In order to create a thread, this log must specify a label that will be used to link the
   * context and your environment must have a **shed** created.
   *
   * **Example:**
   * ```typescript
   * import { adze, createShed } from 'adze';
   *
   * const shed = createShed();
   *
   * // Creating a shed listener is a great way to get meta data from your
   * // threaded logs to write to disk or pass to another plugin, library,
   * // or service.
   * shed.addListener([1,2,3,4,5,6,7,8], (log) => {
   *   // Do something with `log.context.added` or `log.context.subtracted`.
   * });
   *
   * function add(a, b) {
   *   const answer = a + b;
   *   adze().label('foo').thread('added', { a, b, answer });
   *   return answer;
   * }
   *
   * function subtract(x, y) {
   *   const answer = x - y;
   *   adze().label('foo').thread('subtracted', { x, y, answer });
   *   return answer;
   * }
   *
   * add(1, 2);
   * subtract(4, 3);
   *
   * adze().label('foo').dump.info('Results from our thread');
   * // Info => Results from our thread, { a: 1, b: 2, answer: 3 }, { x: 4, y: 3, answer: 1 }
   *
   * ```
   *
   * This is a non-standard API.
   */
  public thread<T>(key: string, value: T): void {
    if (this._labelVal) {
      this._labelVal.addContext(key, value);
    } else {
      console.warn('Thread context was not added! Threads must have a label.');
    }
  }

  /**
   * Instructs the log terminator to add the key/value pairs from the
   * thread context to the console output.
   *
   * This is a non-standard API.
   */
  public get dump(): this {
    this.dumpContext = true;
  }

  /**
   * Adds to the log count for log instances that share this log's label.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/count)
   */
  public get count(): this {
    if (this._labelVal) {
      this._labelVal.addCount();
    }
  }

  /**
   * Resets the count for the log instances that share this log's label.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/countReset)
   */
  public get countReset(): this {
    if (this._labelVal) {
      this._labelVal.resetCount();
    }
  }

  /**
   * Unsets the count for the log instances that share this log's label.
   *
   * This is a non-standard method.
   */
  public get countClear(): this {
    if (this._labelVal) {
      this._labelVal.clearCount();
    }
  }

  /**
   * Starts a timer associated with this log's *label*. This will do nothing if
   * this log has no label.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/time).
   */
  public get time(): this {
    if (this._labelVal) {
      this._labelVal.startTime();
    }
  }

  /**
   * Modifies the log render to show the current high-resolution real time.
   *
   * This is a non-standard method.
   */
  public get timeNow(): this {
    this.timeNowVal = captureTimeNow();
  }

  /**
   * Stops a timer that was previously started by calling time() on a *labeled* log. Calculates the
   * difference between the start time and when this method was called. This then
   * modifies the log render to show the time difference. This will do nothing if the *label* does
   * not exist.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/timeEnd).
   */
  public get timeEnd(): this {
    if (this._labelVal) {
      this._labelVal.endTime();
    }
  }
}
