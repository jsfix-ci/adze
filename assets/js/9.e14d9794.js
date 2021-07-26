(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{398:function(t,s,a){t.exports=a.p+"assets/img/basic-architecture.e6658e67.svg"},399:function(t,s,a){t.exports=a.p+"assets/img/modifier-example.abf046d6.png"},400:function(t,s,a){t.exports=a.p+"assets/img/common-usage-example.aee5edad.png"},401:function(t,s,a){t.exports=a.p+"assets/img/common-usage-terminal-example.378a3589.png"},494:function(t,s,a){"use strict";a.r(s);var e=a(45),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"adze-concepts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adze-concepts"}},[t._v("#")]),t._v(" Adze Concepts")]),t._v(" "),e("p",[t._v("Adze as a library has a few core goals it attempts to meet. The first goal is to provide an API that wraps, extends, or replicates all of the functionality of the standard "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/console",target:"_blank",rel:"noopener noreferrer"}},[t._v("Console API"),e("OutboundLink")],1),t._v(". The standard console API allows you to create logs based on severity, however other utility logs like table, assert, trace, etc. are all tied to the severity of "),e("code",[t._v("log")]),t._v(". Adze takes a different approach by turning these into "),e("RouterLink",{attrs:{to:"/guide/modifiers.html"}},[t._v("modifiers")]),t._v(" which can be terminated by whichever severity level you prefer.")],1),t._v(" "),e("p",[t._v("The second goal of the Adze project is to give you a natural log writing experience that doesn't feel too different from the standard. To make the experience of using Adze feel natural, Adze provides a chainable API that is similar to the standard "),e("code",[t._v("console.log()")]),t._v(" API.")]),t._v(" "),e("p",[t._v("Lastly, most other libraries "),e("strong",[t._v("do too much")]),t._v(". Adze seeks to separate concerns when it comes to generating logs and transporting them to another source. Other libraries tend to try to solve both problems, but over time what ends up occurring is that the library author isn't able to predict all of the different ways someone might want to transport their log data. This ends up creating a lot of bloat in the library. You end up with support for transports you may never use. The library's configuration also ends up becoming a mess to support all of these different transports.")]),t._v(" "),e("p",[t._v("Adze rejects the idea of coupling the log inputs with transport outputs which is why the core library only offers "),e("RouterLink",{attrs:{to:"/guide/shed-concepts.html#listeners"}},[t._v("listeners")]),t._v(" as a way of collecting log data. With access to the listeners the end user can harvest the desired data and do with it as they please. However, we also understand it's nice to have an out-of-the-box solution for transports. Over time we hope to provide some secondary packages that can be installed along side of Adze to provide some simple transport options.")],1),t._v(" "),e("h2",{attrs:{id:"lifecycle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lifecycle"}},[t._v("#")]),t._v(" Lifecycle")]),t._v(" "),e("p",[t._v("Let's take a look under the hood to see how the Adze architecture enables its API.\n"),e("em",[t._v("Please keep in mind this diagram is not exhaustive.")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(398),alt:"Lifecycle Diagram of Adze Logs"}})]),t._v(" "),e("h2",{attrs:{id:"the-log-chain"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-log-chain"}},[t._v("#")]),t._v(" The Log Chain")]),t._v(" "),e("p",[t._v("As you can see in the diagram, a log chain is made up of three parts:")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/guide/factories.html"}},[t._v("Log Factory")]),t._v(" "),e("ul",[e("li",[t._v("This is a function that generates a log instance and returns it.")])])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/guide/modifiers.html"}},[t._v("Modifiers")]),t._v(" "),e("ul",[e("li",[t._v("These log methods modify the instance and then return it.")])])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/guide/default-terminators.html"}},[t._v("Terminator")]),t._v(" "),e("ul",[e("li",[t._v("These methods end the chain and finalize the log.")])])],1)]),t._v(" "),e("h3",{attrs:{id:"log-factory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#log-factory"}},[t._v("#")]),t._v(" Log Factory")]),t._v(" "),e("p",[t._v("Adze comes with a function named "),e("RouterLink",{attrs:{to:"/guide/factories.html#adze"}},[e("code",[t._v("adze()")])]),t._v(" out of the box. This function is\na "),e("RouterLink",{attrs:{to:"/guide/factories.html"}},[t._v("factory")]),t._v(" that creates a new Adze instance. Most of the time when interacting\nwith this library you will either use this factory directly or assign it to\na variable after calling "),e("RouterLink",{attrs:{to:"/guide/factories.html#seal"}},[t._v("seal")]),t._v(", but we'll come back to that later in the guide.")],1),t._v(" "),e("h3",{attrs:{id:"modifiers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#modifiers"}},[t._v("#")]),t._v(" Modifiers")]),t._v(" "),e("p",[t._v("Once you have an instance of Adze you can immediately "),e("a",{attrs:{href:"terminators"}},[t._v("terminate")]),t._v(" it, or you\ncan call certain methods that this library calls modifiers. Modifiers are\nmethods on an Adze log instance that changes its behavior. For example, if\nyou wanted to add a performance timestamp to your log you would use the\n"),e("code",[t._v("timeNow")]),t._v(" modifier.")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("adze")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timeNow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'This is the time from pageload.'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("And it would output like this:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(399),alt:"Adze log with time now modifier preview"}})]),t._v(" "),e("h3",{attrs:{id:"terminator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#terminator"}},[t._v("#")]),t._v(" Terminator")]),t._v(" "),e("p",[t._v("In our "),e("a",{attrs:{href:"modifiers"}},[t._v("Modifiers")]),t._v(" example code above, you can see we ended our\nchain with "),e("RouterLink",{attrs:{to:"/guide/default-terminators.html#log"}},[e("code",[t._v("log()")])]),t._v(". The log method is one of the eight "),e("RouterLink",{attrs:{to:"/guide/default-terminators.html"}},[t._v("default log terminators")]),t._v(".\nThe library also comes with "),e("RouterLink",{attrs:{to:"/guide/other-terminators.html"}},[t._v("other special terminators")]),t._v(" like\n"),e("RouterLink",{attrs:{to:"/guide/other-terminators.html#custom"}},[t._v("custom")]),t._v(". A log method is considered a terminator when it\nends your log chain and returns a "),e("RouterLink",{attrs:{to:"/guide/data.html#terminated-log-object"}},[t._v("terminated log object")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"common-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#common-usage"}},[t._v("#")]),t._v(" Common Usage")]),t._v(" "),e("p",[t._v("Most of the time when you are using a logging library you will want to configure a logging instance once and then use it throughout your codebase. This is done with the "),e("RouterLink",{attrs:{to:"/guide/factories.html#seal"}},[t._v("seal factory")]),t._v(". When your configuration is sealed a new log factory is returned. All subsequent logs generated from that factory will inherit the configuration you sealed.")],1),t._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ----- setup.js ----- //")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" adze"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" createShed "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'adze'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* We'll create a Shed to enable labels and counting\n   for our example. */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" shed "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShed")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Let's create a log listener to transport our log data\n   to a destination. We'll listen to all log levels. */")]),t._v("\nshed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" render")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If a log does not render then we will ignore transporting it.")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("render"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do transport logic here.")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Let's create an Adze configuration (or import it from an env file).")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cfg "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  logLevel"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Now we'll create a new factory using seal")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" log "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("adze")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cfg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("label")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("seal")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ----- elsewhere.js ----- //")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" log "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'~/setup.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// And now we can create new logs using our new factory")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'An error occurred! Oh no!'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Another error occurred! Quick! Help!'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I won\'t display because my log level is too high."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"output"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[t._v("#")]),t._v(" Output")]),t._v(" "),e("p",[e("img",{attrs:{src:a(400),alt:"common usage example with seal"}})]),t._v(" "),e("p",[e("img",{attrs:{src:a(401),alt:"common usage terminal example with seal"}})]),t._v(" "),e("h2",{attrs:{id:"standard-output-stdout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#standard-output-stdout"}},[t._v("#")]),t._v(" Standard Output (stdout)")]),t._v(" "),e("p",[t._v("When writing adze logs in a Node environment there may be times where logs in stdout need to be unstyled to avoid styling artifacts polluting the log strings. Adze provides a simple "),e("RouterLink",{attrs:{to:"/config/#adze-configuration"}},[t._v("configuration option")]),t._v(" to turn off styling.")],1),t._v(" "),e("h3",{attrs:{id:"example-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ----- setup.js ----- //")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" adze "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'adze'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Let's create a new unstyled log factory using seal")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" stdout "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("adze")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" unstyled"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("seal")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ----- elsewhere.js ----- //")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" stdout "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'~/setup.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// And now we can create new unstyled logs using our unstyled factory")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("stdout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'An error occurred! This log has no styles applied.'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"filtering"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filtering"}},[t._v("#")]),t._v(" Filtering")]),t._v(" "),e("p",[t._v("One of the primary features of Adze is to allow you to filter your logs while developing and debugging. These filters are created within the optional "),e("RouterLink",{attrs:{to:"/config/#adze-configuration"}},[t._v("configuration")]),t._v(" that you provide Adze logs.")],1),t._v(" "),e("h3",{attrs:{id:"example-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-3"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("p",[t._v("In our app's boot file (named "),e("code",[t._v("main.ts")]),t._v(" for our example) we'll create a "),e("RouterLink",{attrs:{to:"/guide/shed-concepts.html"}},[t._v("Shed")]),t._v(" for "),e("RouterLink",{attrs:{to:"/guide/shed-concepts.html#listeners"}},[t._v("listening")]),t._v(" to our logs and we'll configure our adze factory with some "),e("RouterLink",{attrs:{to:"/config/#filters"}},[t._v("filters")]),t._v(" that we'll "),e("RouterLink",{attrs:{to:"/guide/modifiers.html#seal"}},[t._v("seal")]),t._v(" into a new factory named "),e("code",[t._v("log")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Main.ts")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" adze"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" createShed "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'adze'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Generate our shed for listening to our logs")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" shed "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShed")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Let's use the shed instance reference to add a log listener.")]),t._v("\nshed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" render")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Render will be null if the log was never written to the console.")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("render"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do something with data")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Let's create an Adze configuration with some filters. In a real-world environment\n   you would import this configuration from a environment file. */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cfg "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  filters"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    namespace"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      exclude"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'new-feature'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Now we'll seal our configuration into a new factory named log")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" log "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("adze")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cfg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("seal")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Doing some boot stuff...")]),t._v("\n")])])]),e("p",[t._v("Now, elsewhere in our codebase we'll import our "),e("code",[t._v("log")]),t._v(" factory for creating new logs.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ----- MyNewFeature.ts -----")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Import our log factory")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" log "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./main.ts'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("myNewFeature")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ns() is an alias for namespace()")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ns")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'new-feature'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("debug")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Staring to run myNewFeature'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do some logic for our new feature...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ns")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'new-feature'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Dumping a value in our code'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do some more logic...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ns")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'new-feature'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Completed execution of myNewFeature!'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v('The code above will exclude any logs with a namespace of "new-feature" from being written to the console. Also take notice of the listener we created in our '),e("code",[t._v("main.ts")]),t._v(". It watches all log levels (represented by the "),e("code",[t._v("'*'")]),t._v(") and will fire for the logs with a namespace of "),e("code",[t._v("'new-feature'")]),t._v(" even though they are being filtered out. This is done to give you flexibility in how you want to handle your logs in your listeners.")]),t._v(" "),e("p",[t._v("Also notice in our code we are checking if the render value is truthy. We are doing this because any log that was not written to the console will have a "),e("code",[t._v("null")]),t._v(" log render. This is an easy way to ignore logs that are hidden by any of our filters.")])])}),[],!1,null,null,null);s.default=n.exports}}]);