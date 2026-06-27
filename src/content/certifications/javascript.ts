import type { Certification } from '../types'

export const javascript: Certification = {
  id: 'javascript',
  kind: 'path',
  code: 'JS',
  title: 'JavaScript Mastery',
  shortTitle: 'JavaScript',
  provider: 'JavaScript',
  level: 'Beginner',
  gradient: 'from-yellow-400 to-amber-500',
  icon: '🟨',
  tagline: 'From zero to fluent in JS.',
  description:
    "A friendly, self-paced path through JavaScript — from variables and functions to closures, the event loop, the DOM, and modern patterns. Plenty of plain-English explanations, relatable analogies, worked code examples, and a full Interview Prep section to get you ready for the real questions.",
  examFacts: [
    { label: 'Level', value: 'Beginner → Advanced' },
    { label: 'Format', value: 'Self-paced cards' },
    { label: 'Topics', value: '7 domains' },
    { label: 'Includes', value: 'Interview prep 🎤' },
    { label: 'Best for', value: 'Web & Node devs' },
  ],
  version: '1.0',
  lastUpdated: '2025-01-15',
  available: true,
  domains: [
    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 1 — JavaScript Foundations
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd1',
      title: 'JavaScript Foundations',
      emoji: '🧱',
      description:
        "The bedrock: variables, data types, type coercion, operators, template literals, control flow, and the truthy/falsy rules that trip everyone up.",
      chapters: [
        {
          id: 'd1c1',
          title: 'Variables & Data Types',
          emoji: '📦',
          description: "How JavaScript stores values and the building-block types you will use every day.",
          sections: [
            {
              id: 'd1c1s1',
              title: 'Declaring Variables',
              summary: "var, let, and const — what they mean and which to reach for.",
              cards: [
                {
                  id: 'd1c1s1-1',
                  kind: 'concept',
                  title: 'A Box for Values',
                  emoji: '🏷️',
                  body:
                    "A **variable** is a named box that holds a value. You create one with `let`, `const`, or the older `var`. `let x = 5` makes a box called `x` and puts `5` inside.\n\nUse `const` by default (the box cannot be re-pointed), `let` when you truly need to reassign, and avoid `var` in modern code.",
                  terms: [
                    { term: 'Variable', definition: 'A named reference that stores a value.' },
                    { term: 'let', definition: 'Declares a block-scoped variable that can be reassigned.' },
                    { term: 'const', definition: 'Declares a block-scoped variable that cannot be reassigned.' },
                  ],
                },
                {
                  id: 'd1c1s1-2',
                  kind: 'analogy',
                  title: 'Labelled Jars',
                  emoji: '🫙',
                  body:
                    "Think of variables as jars on a shelf with labels. `let` is a jar you can empty and refill. `const` is a sealed jar — the label always points to the same jar, so you cannot swap it for another.\n\nNote: with `const` objects you can still stir what is *inside* the jar; you just cannot replace the whole jar.",
                },
                {
                  id: 'd1c1s1-3',
                  kind: 'example',
                  title: 'const Does Not Mean Frozen',
                  emoji: '🧊',
                  body:
                    "`const` blocks reassignment, not mutation:\n\n- `const n = 1; n = 2` throws an error.\n- `const arr = [1]; arr.push(2)` works fine — `arr` is now `[1, 2]`.\n\nThe binding is constant; the contents of an object or array can still change.",
                },
                {
                  id: 'd1c1s1-4',
                  kind: 'compare',
                  title: 'var vs let vs const',
                  emoji: '⚖️',
                  compare: {
                    headers: ['Feature', 'var', 'let', 'const'],
                    rows: [
                      ['Scope', 'Function', 'Block', 'Block'],
                      ['Reassign?', 'Yes', 'Yes', 'No'],
                      ['Redeclare?', 'Yes', 'No', 'No'],
                      ['Hoisted value', 'undefined', 'TDZ', 'TDZ'],
                    ],
                  },
                },
                {
                  id: 'd1c1s1-5',
                  kind: 'diagram',
                  title: 'Choosing a Declaration',
                  emoji: '🧭',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'const', emoji: '🔒', items: ['Default choice', 'Never reassigned', 'Clear intent'] },
                      { title: 'let', emoji: '🔁', items: ['Counters & loops', 'Reassigned later', 'Block scoped'] },
                      { title: 'var', emoji: '🚫', items: ['Legacy code', 'Function scoped', 'Avoid in new code'] },
                    ],
                  },
                },
                {
                  id: 'd1c1s1-6',
                  kind: 'tip',
                  title: 'Gotcha: Leaking Globals',
                  emoji: '⚠️',
                  body:
                    "If you assign to a variable you never declared — like `count = 5` with no `let`/`const` — JavaScript creates a sneaky **global** variable. In strict mode (`'use strict'` or any module) this throws an error instead. Always declare your variables.",
                },
                {
                  id: 'd1c1s1-7',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'What happens when you run `const arr = [1, 2]; arr.push(3)`?',
                  options: [
                    { id: 'a', text: 'It throws because arr is const.', correct: false },
                    { id: 'b', text: 'arr becomes [1, 2, 3]; const blocks reassignment, not mutation.', correct: true },
                    { id: 'c', text: 'It silently does nothing.', correct: false },
                    { id: 'd', text: 'arr is reset to [3].', correct: false },
                  ],
                  explanation:
                    "`const` only prevents re-pointing the binding. The array object can still be mutated, so `push` works and `arr` becomes `[1, 2, 3]`.",
                },
              ],
            },
            {
              id: 'd1c1s2',
              title: 'Data Types',
              summary: "The seven primitives plus objects — the raw materials of JS.",
              cards: [
                {
                  id: 'd1c1s2-1',
                  kind: 'concept',
                  title: 'Primitives vs Objects',
                  emoji: '🧩',
                  body:
                    "JavaScript has **primitive** types: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, and `bigint`. Everything else — arrays, functions, dates — is an **object**.\n\nPrimitives are immutable and compared by value. Objects are compared by reference (more on that later).",
                  terms: [
                    { term: 'Primitive', definition: 'An immutable value compared by its content (string, number, etc.).' },
                    { term: 'Object', definition: 'A collection of key/value pairs, compared by reference.' },
                    { term: 'typeof', definition: 'An operator that returns a string naming a value type.' },
                  ],
                },
                {
                  id: 'd1c1s2-2',
                  kind: 'example',
                  title: 'Checking Types with typeof',
                  emoji: '🔍',
                  body:
                    "- `typeof \"hi\"` is `\"string\"`\n- `typeof 42` is `\"number\"`\n- `typeof true` is `\"boolean\"`\n- `typeof undefined` is `\"undefined\"`\n- `typeof {}` is `\"object\"`\n- `typeof null` is `\"object\"` (a famous, ancient bug!)\n- `typeof function(){}` is `\"function\"`",
                },
                {
                  id: 'd1c1s2-3',
                  kind: 'analogy',
                  title: 'Ingredients vs Recipes',
                  emoji: '🥕',
                  body:
                    "Primitives are like single ingredients — a carrot, a pinch of salt. Each one is simple and self-contained. Objects are like recipes that combine many ingredients (and even other recipes) into a structured whole. You build complex programs by assembling primitives into objects.",
                },
                {
                  id: 'd1c1s2-4',
                  kind: 'tip',
                  title: 'Gotcha: NaN Is a Number',
                  emoji: '😵',
                  body:
                    "`NaN` means \"Not a Number\", yet `typeof NaN` is `\"number\"`. It appears when math fails, like `0 / 0` or `Number(\"abc\")`. Weirdest of all, `NaN === NaN` is `false`. To test for it use `Number.isNaN(value)`.",
                },
                {
                  id: 'd1c1s2-5',
                  kind: 'diagram',
                  title: 'The Type Map',
                  emoji: '🗺️',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Primitives', emoji: '🔹', items: ['string', 'number', 'boolean', 'null / undefined', 'symbol / bigint'] },
                      { title: 'Objects', emoji: '🔸', items: ['object', 'array', 'function', 'Date / Map / Set'] },
                    ],
                  },
                },
                {
                  id: 'd1c1s2-6',
                  kind: 'concept',
                  title: 'null vs undefined',
                  emoji: '🕳️',
                  body:
                    "`undefined` means \"this has no value yet\" — it is the default for uninitialized variables and missing properties. `null` means \"intentionally empty\" — a developer set it on purpose.\n\nRule of thumb: JavaScript gives you `undefined`; you give yourself `null`.",
                  terms: [
                    { term: 'undefined', definition: 'A value that has not been assigned; the default empty state.' },
                    { term: 'null', definition: 'An intentional absence of any value, set deliberately.' },
                  ],
                },
                {
                  id: 'd1c1s2-7',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'What does `typeof null` return?',
                  options: [
                    { id: 'a', text: '"null"', correct: false },
                    { id: 'b', text: '"object"', correct: true },
                    { id: 'c', text: '"undefined"', correct: false },
                    { id: 'd', text: 'It throws an error.', correct: false },
                  ],
                  explanation:
                    "`typeof null` returns `\"object\"` — a long-standing bug kept for backward compatibility. Use `value === null` to check for null directly.",
                },
              ],
            },
          ],
        },
        {
          id: 'd1c2',
          title: 'Coercion, Operators & Strings',
          emoji: '➕',
          description: "How JS converts types, the operators you will lean on, and template literals.",
          sections: [
            {
              id: 'd1c2s1',
              title: 'Type Coercion',
              summary: "When JavaScript quietly converts one type into another.",
              cards: [
                {
                  id: 'd1c2s1-1',
                  kind: 'concept',
                  title: 'Implicit Conversion',
                  emoji: '🔄',
                  body:
                    "**Coercion** is JavaScript automatically converting a value from one type to another. It happens with `+`, `==`, `if` conditions, and more.\n\n`\"5\" + 1` gives `\"51\"` (number coerced to string), but `\"5\" - 1` gives `4` (string coerced to number). The `+` operator prefers strings; other math operators prefer numbers.",
                  terms: [
                    { term: 'Coercion', definition: 'Automatic conversion of a value from one type to another.' },
                    { term: 'Casting', definition: 'Explicit, deliberate conversion using functions like Number() or String().' },
                  ],
                },
                {
                  id: 'd1c2s1-2',
                  kind: 'example',
                  title: 'Coercion Surprises',
                  emoji: '🎢',
                  body:
                    "- `\"5\" + 1` is `\"51\"`\n- `\"5\" - 1` is `4`\n- `1 + true` is `2` (true becomes 1)\n- `[] + []` is `\"\"` (empty string)\n- `[] + {}` is `\"[object Object]\"`\n\nThis is why explicit conversion — `Number(x)`, `String(x)` — is safer.",
                },
                {
                  id: 'd1c2s1-3',
                  kind: 'analogy',
                  title: 'An Over-Eager Translator',
                  emoji: '🗣️',
                  body:
                    "Coercion is like a translator who never asks permission. You hand over a number and a string; rather than refuse, they guess what you meant and translate one into the other. Helpful sometimes, baffling other times. Explicit casting is telling the translator exactly which language you want.",
                },
                {
                  id: 'd1c2s1-4',
                  kind: 'tip',
                  title: 'Gotcha: + With Strings',
                  emoji: '⚠️',
                  body:
                    "The `+` operator is overloaded: it adds numbers but concatenates strings. If *either* side is a string, you get string concatenation. `1 + 2 + \"3\"` is `\"33\"` (1+2 first, then string), while `\"1\" + 2 + 3` is `\"123\"`. Order matters!",
                },
                {
                  id: 'd1c2s1-5',
                  kind: 'diagram',
                  title: 'Explicit Conversion',
                  emoji: '🔧',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'Raw value', emoji: '📥' },
                      { label: 'Number(x)', sublabel: 'to number', emoji: '🔢' },
                      { label: 'String(x)', sublabel: 'to text', emoji: '🔤' },
                      { label: 'Boolean(x)', sublabel: 'to true/false', emoji: '✅' },
                    ],
                  },
                },
                {
                  id: 'd1c2s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'What is the result of `"5" - 1`?',
                  options: [
                    { id: 'a', text: '"51"', correct: false },
                    { id: 'b', text: '4', correct: true },
                    { id: 'c', text: '"4"', correct: false },
                    { id: 'd', text: 'NaN', correct: false },
                  ],
                  explanation:
                    "The `-` operator has no string meaning, so JS coerces `\"5\"` to the number `5`, then `5 - 1` gives `4`.",
                },
              ],
            },
            {
              id: 'd1c2s2',
              title: 'Operators & Template Literals',
              summary: "Math, comparison, logical operators, and string interpolation.",
              cards: [
                {
                  id: 'd1c2s2-1',
                  kind: 'concept',
                  title: 'Operator Families',
                  emoji: '🧮',
                  body:
                    "Key operator groups:\n\n- **Arithmetic:** `+ - * / % **`\n- **Comparison:** `< > <= >= == === != !==`\n- **Logical:** `&& || !`\n- **Assignment:** `= += -= *=`\n\nLogical `&&` and `||` are special: they return one of their operands, not just `true`/`false`.",
                  terms: [
                    { term: 'Operand', definition: 'A value an operator acts on, e.g. the 2 and 3 in 2 + 3.' },
                    { term: 'Modulo (%)', definition: 'Returns the remainder of a division, e.g. 7 % 3 is 1.' },
                  ],
                },
                {
                  id: 'd1c2s2-2',
                  kind: 'example',
                  title: 'Short-Circuit Logic',
                  emoji: '⚡',
                  body:
                    "`&&` and `||` short-circuit:\n\n- `a && b` returns `a` if `a` is falsy, otherwise `b`.\n- `a || b` returns `a` if `a` is truthy, otherwise `b`.\n\nSo `name || \"Guest\"` gives a default, and `user && user.email` safely reads only if `user` exists.",
                },
                {
                  id: 'd1c2s2-3',
                  kind: 'concept',
                  title: 'Template Literals',
                  emoji: '🧵',
                  body:
                    "Template literals use backticks instead of quotes and let you embed expressions with `${ }`. They also span multiple lines.\n\nInstead of `\"Hi \" + name + \"!\"`, write a backtick string with `${name}` inside. Cleaner, and no more `+` soup.",
                  terms: [
                    { term: 'Template literal', definition: 'A backtick-delimited string supporting ${} interpolation and multiline text.' },
                    { term: 'Interpolation', definition: 'Embedding the result of an expression inside a string.' },
                  ],
                },
                {
                  id: 'd1c2s2-4',
                  kind: 'analogy',
                  title: 'Fill-in-the-Blanks',
                  emoji: '📝',
                  body:
                    "A template literal is like a fill-in-the-blank form letter: \"Dear ___, your order ___ shipped.\" The blanks are the `${ }` slots, and JavaScript drops the right values in. Much friendlier than gluing fragments together with `+`.",
                },
                {
                  id: 'd1c2s2-5',
                  kind: 'tip',
                  title: 'Gotcha: ++ Placement',
                  emoji: '⚠️',
                  body:
                    "`x++` (postfix) returns the value *before* incrementing; `++x` (prefix) returns it *after*. So if `x = 5`, then `y = x++` leaves `y = 5` and `x = 6`, while `y = ++x` leaves both `y` and `x` equal to `6`. When in doubt, increment on its own line.",
                },
                {
                  id: 'd1c2s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'What does `0 || "fallback"` evaluate to?',
                  options: [
                    { id: 'a', text: '0', correct: false },
                    { id: 'b', text: '"fallback"', correct: true },
                    { id: 'c', text: 'true', correct: false },
                    { id: 'd', text: 'undefined', correct: false },
                  ],
                  explanation:
                    "`0` is falsy, so `||` returns the second operand, `\"fallback\"`. The `||` operator returns the first truthy operand (or the last one).",
                },
              ],
            },
          ],
        },
        {
          id: 'd1c3',
          title: 'Control Flow & Truthiness',
          emoji: '🚦',
          description: "Making decisions, looping, and the truthy/falsy rules behind every condition.",
          sections: [
            {
              id: 'd1c3s1',
              title: 'Conditions & Loops',
              summary: "if/else, switch, ternary, and the loop family.",
              cards: [
                {
                  id: 'd1c3s1-1',
                  kind: 'concept',
                  title: 'Branching',
                  emoji: '🔀',
                  body:
                    "**if / else if / else** run code based on conditions. **switch** compares one value against many cases. The **ternary** `cond ? a : b` is a one-line if/else that returns a value.\n\nUse `if` for logic with side effects, ternary when you need a value, and `switch` for many discrete cases.",
                  terms: [
                    { term: 'Conditional', definition: 'Code that runs only when a condition is true.' },
                    { term: 'Ternary', definition: 'The cond ? a : b expression that returns one of two values.' },
                  ],
                },
                {
                  id: 'd1c3s1-2',
                  kind: 'example',
                  title: 'The Loop Family',
                  emoji: '🔁',
                  body:
                    "- `for (let i = 0; i < 3; i++)` — classic counted loop.\n- `for (const item of array)` — iterate values.\n- `for (const key in object)` — iterate keys.\n- `while (cond)` — loop while true.\n\nPrefer `for...of` for arrays and array methods like `forEach` when you do not need to break early.",
                },
                {
                  id: 'd1c3s1-3',
                  kind: 'analogy',
                  title: 'A Fork in the Road',
                  emoji: '🛣️',
                  body:
                    "An `if` statement is a fork in the road: the condition is the signpost, and you take one path or the other. A `switch` is a roundabout with many exits — you pick the exit that matches your value. A loop is driving around the same block until your task is done.",
                },
                {
                  id: 'd1c3s1-4',
                  kind: 'tip',
                  title: 'Gotcha: Forgetting break',
                  emoji: '⚠️',
                  body:
                    "In a `switch`, each `case` falls through to the next unless you add `break`. Forget it and several cases run together — usually a bug. Always `break` (or `return`) at the end of each case, unless you intend the fall-through.",
                },
                {
                  id: 'd1c3s1-5',
                  kind: 'diagram',
                  title: 'if / else Flow',
                  emoji: '🧭',
                  diagram: {
                    type: 'flow',
                    direction: 'vertical',
                    nodes: [
                      { label: 'Check condition', emoji: '❓' },
                      { label: 'True branch', sublabel: 'run this', emoji: '✅' },
                      { label: 'False branch', sublabel: 'else this', emoji: '❌' },
                      { label: 'Continue', emoji: '➡️' },
                    ],
                  },
                },
                {
                  id: 'd1c3s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Which loop is best for iterating the values of an array?',
                  options: [
                    { id: 'a', text: 'for...in', correct: false },
                    { id: 'b', text: 'for...of', correct: true },
                    { id: 'c', text: 'while with no condition', correct: false },
                    { id: 'd', text: 'do...while only', correct: false },
                  ],
                  explanation:
                    "`for...of` iterates the values of an iterable like an array. `for...in` iterates keys/indices and is meant for object properties.",
                },
              ],
            },
            {
              id: 'd1c3s2',
              title: 'Truthy & Falsy',
              summary: "What counts as true or false inside a condition.",
              cards: [
                {
                  id: 'd1c3s2-1',
                  kind: 'concept',
                  title: 'The Falsy Eight',
                  emoji: '🎱',
                  body:
                    "When a value sits in a condition, JS coerces it to a boolean. Only these are **falsy**: `false`, `0`, `-0`, `0n`, `\"\"` (empty string), `null`, `undefined`, and `NaN`.\n\nEverything else is **truthy** — including `\"0\"`, `\"false\"`, `[]`, and `{}`.",
                  terms: [
                    { term: 'Falsy', definition: 'A value that coerces to false in a boolean context.' },
                    { term: 'Truthy', definition: 'Any value that is not falsy; coerces to true.' },
                  ],
                },
                {
                  id: 'd1c3s2-2',
                  kind: 'tip',
                  title: 'Gotcha: Empty Array Is Truthy',
                  emoji: '⚠️',
                  body:
                    "`if ([]) { }` runs, because an empty array is an object and all objects are truthy. To check for emptiness, test `arr.length === 0`. Same with `{}` — to check an empty object, look at `Object.keys(obj).length`.",
                },
                {
                  id: 'd1c3s2-3',
                  kind: 'example',
                  title: 'Truthy in Action',
                  emoji: '🧪',
                  body:
                    "- `if (\"0\")` runs — non-empty string is truthy.\n- `if (0)` skips — zero is falsy.\n- `if ([])` runs — arrays are truthy.\n- `Boolean(\"\")` is `false`.\n- `!!\"hi\"` is `true` (double-bang converts to boolean).",
                },
                {
                  id: 'd1c3s2-4',
                  kind: 'analogy',
                  title: 'The Bouncer',
                  emoji: '🛂',
                  body:
                    "A condition is a bouncer at a club. Falsy values — empty, zero, nothing — get turned away. Everyone else, even a string that *says* \"false\", walks right in. The bouncer judges presence, not meaning, so a non-empty string always gets through.",
                },
                {
                  id: 'd1c3s2-5',
                  kind: 'diagram',
                  title: 'Truthy vs Falsy',
                  emoji: '⚖️',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Falsy', emoji: '❌', items: ['false', '0 / -0 / 0n', '"" (empty)', 'null / undefined', 'NaN'] },
                      { title: 'Truthy', emoji: '✅', items: ['"0" / "false"', '[] (empty array)', '{} (empty object)', 'any number ≠ 0', 'functions'] },
                    ],
                  },
                },
                {
                  id: 'd1c3s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Which of these is FALSY?',
                  options: [
                    { id: 'a', text: '"0"', correct: false },
                    { id: 'b', text: '[]', correct: false },
                    { id: 'c', text: '""', correct: true },
                    { id: 'd', text: '{}', correct: false },
                  ],
                  explanation:
                    "The empty string `\"\"` is falsy. The string `\"0\"`, empty arrays, and empty objects are all truthy.",
                },
              ],
            },
          ],
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 2 — Functions, Scope & Closures
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd2',
      title: 'Functions, Scope & Closures',
      emoji: '🔁',
      description:
        "Functions in depth: declarations vs expressions, arrow functions, parameters, scope, hoisting, closures, `this`, and call/apply/bind.",
      chapters: [
        {
          id: 'd2c1',
          title: 'Defining Functions',
          emoji: '🛠️',
          description: "The many ways to make a function and how parameters work.",
          sections: [
            {
              id: 'd2c1s1',
              title: 'Declarations, Expressions & Arrows',
              summary: "Three ways to create functions and how they differ.",
              cards: [
                {
                  id: 'd2c1s1-1',
                  kind: 'concept',
                  title: 'Three Ways to Define',
                  emoji: '🧰',
                  body:
                    "- **Declaration:** `function add(a, b) { return a + b }` — hoisted, usable before its line.\n- **Expression:** `const add = function(a, b) { ... }` — assigned to a variable.\n- **Arrow:** `const add = (a, b) => a + b` — concise, no own `this`.\n\nAll three produce callable functions; the differences are hoisting and `this` binding.",
                  terms: [
                    { term: 'Function declaration', definition: 'A named function statement that is hoisted to the top of its scope.' },
                    { term: 'Function expression', definition: 'A function assigned to a variable, not hoisted as a value.' },
                    { term: 'Arrow function', definition: 'A concise function with no own this, arguments, or prototype.' },
                  ],
                },
                {
                  id: 'd2c1s1-2',
                  kind: 'example',
                  title: 'Arrow Shorthands',
                  emoji: '🏹',
                  body:
                    "Arrows get shorter as you simplify:\n\n- `(a, b) => { return a + b }`\n- `(a, b) => a + b` (implicit return)\n- `x => x * 2` (one param, no parens)\n- `() => 42` (no params)\n\nTo return an object literal, wrap it in parentheses: `() => ({ ok: true })`.",
                },
                {
                  id: 'd2c1s1-3',
                  kind: 'compare',
                  title: 'Arrow vs Regular Function',
                  emoji: '⚖️',
                  compare: {
                    headers: ['Feature', 'Regular', 'Arrow'],
                    rows: [
                      ['Own `this`', 'Yes', 'No (inherits)'],
                      ['arguments object', 'Yes', 'No'],
                      ['Hoisted (declaration)', 'Yes', 'No'],
                      ['Usable as constructor', 'Yes', 'No'],
                    ],
                  },
                },
                {
                  id: 'd2c1s1-4',
                  kind: 'tip',
                  title: 'Gotcha: Arrows as Methods',
                  emoji: '⚠️',
                  body:
                    "Do not use an arrow function as an object method if you need `this` to be the object. Arrows inherit `this` from the surrounding scope, so `this` will not point at your object. Use a regular function (or shorthand method syntax) for methods.",
                },
                {
                  id: 'd2c1s1-5',
                  kind: 'analogy',
                  title: 'Recipes vs Sticky Notes',
                  emoji: '📒',
                  body:
                    "A function declaration is like a recipe in your cookbook — always there, you can flip to it anytime (hoisting). A function expression is a sticky note you write mid-cooking; it only exists once you have written it. An arrow is a quick shorthand scribble that borrows the kitchen it is written in (its `this`).",
                },
                {
                  id: 'd2c1s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Why might an arrow function be a poor choice for an object method?',
                  options: [
                    { id: 'a', text: 'Arrows cannot return values.', correct: false },
                    { id: 'b', text: 'Arrows do not have their own `this`, so it will not point at the object.', correct: true },
                    { id: 'c', text: 'Arrows run slower.', correct: false },
                    { id: 'd', text: 'Arrows cannot take parameters.', correct: false },
                  ],
                  explanation:
                    "Arrow functions inherit `this` from where they were defined, not from the caller, so `this` will not refer to the object whose method it is.",
                },
              ],
            },
            {
              id: 'd2c1s2',
              title: 'Parameters & Arguments',
              summary: "Defaults, rest parameters, and the arguments object.",
              cards: [
                {
                  id: 'd2c1s2-1',
                  kind: 'concept',
                  title: 'Defaults & Rest',
                  emoji: '🎚️',
                  body:
                    "**Default parameters** supply a value when an argument is missing: `function greet(name = \"friend\") {}`.\n\n**Rest parameters** gather extra arguments into an array: `function sum(...nums) {}` lets you call `sum(1, 2, 3)` and get `nums = [1, 2, 3]`.",
                  terms: [
                    { term: 'Default parameter', definition: 'A value used when the matching argument is undefined.' },
                    { term: 'Rest parameter', definition: '...name syntax that collects remaining arguments into an array.' },
                  ],
                },
                {
                  id: 'd2c1s2-2',
                  kind: 'example',
                  title: 'Rest in Action',
                  emoji: '🧺',
                  body:
                    "`function sum(...nums) { return nums.reduce((a, b) => a + b, 0) }`\n\n- `sum(1, 2, 3)` is `6`\n- `sum()` is `0`\n\nRest must be the **last** parameter. It is a real array, so array methods like `reduce` work directly.",
                },
                {
                  id: 'd2c1s2-3',
                  kind: 'tip',
                  title: 'Gotcha: arguments Is Not an Array',
                  emoji: '⚠️',
                  body:
                    "The old `arguments` object is array-*like* — it has a length and indices but no `map` or `reduce`. It also does not exist inside arrow functions. Prefer rest parameters (`...args`), which give you a real array everywhere.",
                },
                {
                  id: 'd2c1s2-4',
                  kind: 'analogy',
                  title: 'A Catch-All Basket',
                  emoji: '🧺',
                  body:
                    "Rest parameters are a catch-all basket at the end of a buffet line. You take your named dishes first, and whatever is left over all drops into the one basket. That basket is a tidy, real array you can sort, filter, and map.",
                },
                {
                  id: 'd2c1s2-5',
                  kind: 'diagram',
                  title: 'Param to Argument Flow',
                  emoji: '➡️',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'Call site', sublabel: 'add(2, 3)', emoji: '📞' },
                      { label: 'Arguments', sublabel: '2 and 3', emoji: '📦' },
                      { label: 'Parameters', sublabel: 'a, b', emoji: '🏷️' },
                      { label: 'Return', sublabel: '5', emoji: '🎯' },
                    ],
                  },
                },
                {
                  id: 'd2c1s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Where must a rest parameter appear in a function signature?',
                  options: [
                    { id: 'a', text: 'First', correct: false },
                    { id: 'b', text: 'Anywhere', correct: false },
                    { id: 'c', text: 'Last', correct: true },
                    { id: 'd', text: 'It cannot be combined with other parameters.', correct: false },
                  ],
                  explanation:
                    "A rest parameter must be last, since it collects all remaining arguments. Only one is allowed per function.",
                },
              ],
            },
          ],
        },
        {
          id: 'd2c2',
          title: 'Scope & Hoisting',
          emoji: '🪜',
          description: "Where variables live and the surprising order JS reads your code.",
          sections: [
            {
              id: 'd2c2s1',
              title: 'Scope',
              summary: "Global, function, and block scope, plus the scope chain.",
              cards: [
                {
                  id: 'd2c2s1-1',
                  kind: 'concept',
                  title: 'Levels of Scope',
                  emoji: '🪜',
                  body:
                    "**Scope** is where a variable is visible. **Global** scope is everywhere. **Function** scope means a variable lives only inside its function. **Block** scope (with `let`/`const`) means it lives only inside `{ }`.\n\nInner scopes can read outer variables via the **scope chain**, but not the reverse.",
                  terms: [
                    { term: 'Scope', definition: 'The region of code where a variable can be accessed.' },
                    { term: 'Scope chain', definition: 'The lookup path from inner scopes outward to global.' },
                    { term: 'Lexical scope', definition: 'Scope determined by where code is written, not how it is called.' },
                  ],
                },
                {
                  id: 'd2c2s1-2',
                  kind: 'analogy',
                  title: 'Nested Rooms',
                  emoji: '🏠',
                  body:
                    "Picture rooms inside rooms. Someone in the innermost room can see items in their own room and any outer room (the scope chain), all the way out to the house (global). But people in the outer rooms cannot peek into the inner room. Variables work the same way.",
                },
                {
                  id: 'd2c2s1-3',
                  kind: 'example',
                  title: 'Block Scope Matters',
                  emoji: '🧱',
                  body:
                    "```\nif (true) {\n  let a = 1\n  var b = 2\n}\n```\n\nAfter this block, `b` is still accessible (var is function-scoped) but `a` is gone (let is block-scoped). This is one big reason to prefer `let`/`const`.",
                },
                {
                  id: 'd2c2s1-4',
                  kind: 'diagram',
                  title: 'The Scope Chain',
                  emoji: '🔗',
                  diagram: {
                    type: 'stack',
                    nodes: [
                      { label: 'Global scope', sublabel: 'visible everywhere', emoji: '🌍' },
                      { label: 'Function scope', sublabel: 'inside the function', emoji: '🧩' },
                      { label: 'Block scope', sublabel: 'inside { }', emoji: '🧱' },
                    ],
                  },
                },
                {
                  id: 'd2c2s1-5',
                  kind: 'tip',
                  title: 'Gotcha: Loop Variables',
                  emoji: '⚠️',
                  body:
                    "Using `var` in a loop that schedules callbacks (like `setTimeout`) shares ONE variable across iterations, so they all log the final value. `let` creates a fresh binding per iteration, fixing it. Always loop with `let`.",
                },
                {
                  id: 'd2c2s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'A variable declared with `let` inside an `if` block is accessible where?',
                  options: [
                    { id: 'a', text: 'Everywhere (global).', correct: false },
                    { id: 'b', text: 'Only inside that block.', correct: true },
                    { id: 'c', text: 'Throughout the enclosing function.', correct: false },
                    { id: 'd', text: 'Nowhere — it errors.', correct: false },
                  ],
                  explanation:
                    "`let` is block-scoped, so the variable only exists inside the `{ }` of the `if` block. `var` would have leaked to the whole function.",
                },
              ],
            },
            {
              id: 'd2c2s2',
              title: 'Hoisting',
              summary: "How declarations are moved to the top — and the Temporal Dead Zone.",
              cards: [
                {
                  id: 'd2c2s2-1',
                  kind: 'concept',
                  title: 'What Hoisting Means',
                  emoji: '🎈',
                  body:
                    "**Hoisting** is JavaScript moving declarations to the top of their scope before running code. Function declarations are fully hoisted (callable early). `var` is hoisted but initialized to `undefined`. `let`/`const` are hoisted but sit in the **Temporal Dead Zone** until their line runs.",
                  terms: [
                    { term: 'Hoisting', definition: 'Moving declarations to the top of their scope at compile time.' },
                    { term: 'Temporal Dead Zone', definition: 'The period where a let/const exists but cannot be accessed yet.' },
                  ],
                },
                {
                  id: 'd2c2s2-2',
                  kind: 'example',
                  title: 'var vs let Hoisting',
                  emoji: '🧪',
                  body:
                    "```\nconsole.log(a) // undefined\nvar a = 1\n\nconsole.log(b) // ReferenceError\nlet b = 2\n```\n\n`var a` is hoisted as `undefined`. `let b` is hoisted too, but accessing it in the TDZ throws.",
                },
                {
                  id: 'd2c2s2-3',
                  kind: 'analogy',
                  title: 'Reserved Seats',
                  emoji: '🪑',
                  body:
                    "Hoisting reserves a seat for every variable before the show starts. With `var`, the seat is there with an empty cup (undefined). With `let`/`const`, the seat exists but is roped off (TDZ) until the guest officially arrives — try to sit early and you are stopped.",
                },
                {
                  id: 'd2c2s2-4',
                  kind: 'tip',
                  title: 'Gotcha: Function Expressions',
                  emoji: '⚠️',
                  body:
                    "Only function *declarations* are hoisted as callable. A function *expression* assigned to `const fn = () => {}` is not — calling `fn()` before its line throws. Declare helpers before you use them to stay safe.",
                },
                {
                  id: 'd2c2s2-5',
                  kind: 'diagram',
                  title: 'Hoisting Outcomes',
                  emoji: '📊',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'var', emoji: '🫙', items: ['Hoisted', 'Set to undefined', 'No error if early'] },
                      { title: 'let / const', emoji: '🚧', items: ['Hoisted', 'In TDZ', 'ReferenceError if early'] },
                      { title: 'function decl', emoji: '🎯', items: ['Fully hoisted', 'Callable early', 'Whole body ready'] },
                    ],
                  },
                },
                {
                  id: 'd2c2s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'What does accessing a `let` variable before its declaration cause?',
                  options: [
                    { id: 'a', text: 'It returns undefined.', correct: false },
                    { id: 'b', text: 'A ReferenceError (Temporal Dead Zone).', correct: true },
                    { id: 'c', text: 'It returns null.', correct: false },
                    { id: 'd', text: 'It silently creates a global.', correct: false },
                  ],
                  explanation:
                    "`let` and `const` are hoisted but uninitialized; accessing them before their line is in the Temporal Dead Zone and throws a ReferenceError.",
                },
              ],
            },
          ],
        },
        {
          id: 'd2c3',
          title: 'Closures & this',
          emoji: '🔒',
          description: "Two of JavaScript's most-asked topics: closures and the dynamic `this`.",
          sections: [
            {
              id: 'd2c3s1',
              title: 'Closures',
              summary: "Functions that remember the scope where they were born.",
              cards: [
                {
                  id: 'd2c3s1-1',
                  kind: 'concept',
                  title: 'What Is a Closure?',
                  emoji: '🔒',
                  body:
                    "A **closure** is a function bundled with the variables from the scope where it was created. Even after the outer function returns, the inner function still \"remembers\" those variables.\n\nClosures power data privacy, function factories, and callbacks that carry state.",
                  terms: [
                    { term: 'Closure', definition: 'A function plus the lexical environment it captured at creation.' },
                    { term: 'Lexical environment', definition: 'The set of variables in scope where a function was defined.' },
                  ],
                },
                {
                  id: 'd2c3s1-2',
                  kind: 'example',
                  title: 'A Counter Factory',
                  emoji: '🏭',
                  body:
                    "```\nfunction makeCounter() {\n  let count = 0\n  return () => ++count\n}\nconst next = makeCounter()\nnext() // 1\nnext() // 2\n```\n\n`count` lives on inside the returned function — it is private and persistent.",
                },
                {
                  id: 'd2c3s1-3',
                  kind: 'analogy',
                  title: 'A Backpack of Variables',
                  emoji: '🎒',
                  body:
                    "When a function is born, it packs a backpack with the variables it can see. Wherever the function travels later, it keeps that backpack. So even after the outer function ends, the inner one still reaches into its backpack for `count`. That backpack is the closure.",
                },
                {
                  id: 'd2c3s1-4',
                  kind: 'tip',
                  title: 'Gotcha: Loops & Closures',
                  emoji: '⚠️',
                  body:
                    "A classic interview trap: a `for (var i...)` loop creating closures captures the *same* `i`, so all closures see the final value. Switching to `let i` gives each iteration its own `i`, and the closures capture the expected values.",
                },
                {
                  id: 'd2c3s1-5',
                  kind: 'diagram',
                  title: 'Closure Capture',
                  emoji: '🔗',
                  diagram: {
                    type: 'flow',
                    direction: 'vertical',
                    nodes: [
                      { label: 'Outer function runs', sublabel: 'creates count', emoji: '🏗️' },
                      { label: 'Returns inner function', sublabel: 'captures count', emoji: '🎁' },
                      { label: 'Outer returns', sublabel: 'count survives', emoji: '🔒' },
                      { label: 'Call inner', sublabel: 'reads/updates count', emoji: '🔁' },
                    ],
                  },
                },
                {
                  id: 'd2c3s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'What does a closure "remember"?',
                  options: [
                    { id: 'a', text: 'The variables from the scope where it was defined.', correct: true },
                    { id: 'b', text: 'Only its own parameters.', correct: false },
                    { id: 'c', text: 'The variables of whoever calls it.', correct: false },
                    { id: 'd', text: 'Nothing — functions are stateless.', correct: false },
                  ],
                  explanation:
                    "A closure captures the lexical environment — the variables in scope where it was created — and keeps access to them even after the outer function returns.",
                },
              ],
            },
            {
              id: 'd2c3s2',
              title: 'this, call/apply/bind & IIFE',
              summary: "The shifting `this` keyword and how to control it.",
              cards: [
                {
                  id: 'd2c3s2-1',
                  kind: 'concept',
                  title: 'What Is this?',
                  emoji: '👉',
                  body:
                    "`this` refers to the object a function is called *on*. In a method call `obj.fn()`, `this` is `obj`. Called plain, `this` is `undefined` (strict mode) or the global object. Arrow functions have no own `this` — they inherit it from the enclosing scope.",
                  terms: [
                    { term: 'this', definition: 'A reference to the execution context, usually the calling object.' },
                    { term: 'Method', definition: 'A function stored as a property of an object.' },
                  ],
                },
                {
                  id: 'd2c3s2-2',
                  kind: 'example',
                  title: 'call, apply, bind',
                  emoji: '🎯',
                  body:
                    "All three set `this` explicitly:\n\n- `fn.call(obj, a, b)` — calls now with args listed.\n- `fn.apply(obj, [a, b])` — calls now with args as an array.\n- `fn.bind(obj)` — returns a NEW function permanently bound to `obj`.\n\nMnemonic: **a** for apply = **a**rray.",
                },
                {
                  id: 'd2c3s2-3',
                  kind: 'analogy',
                  title: 'Who Is Speaking?',
                  emoji: '🗣️',
                  body:
                    "`this` is like the word \"I\" — its meaning depends on who is speaking. When Alice says \"I\", it means Alice; when Bob says it, it means Bob. A function's `this` depends on who calls it. `bind` is like permanently putting a name tag on so \"I\" always means the same person.",
                },
                {
                  id: 'd2c3s2-4',
                  kind: 'tip',
                  title: 'Gotcha: Lost this',
                  emoji: '⚠️',
                  body:
                    "Passing a method as a callback — `setTimeout(obj.fn, 100)` — loses its `this`, because it is called plain. Fix it with `obj.fn.bind(obj)` or wrap it in an arrow: `() => obj.fn()`.",
                },
                {
                  id: 'd2c3s2-5',
                  kind: 'concept',
                  title: 'IIFE',
                  emoji: '🎬',
                  body:
                    "An **IIFE** (Immediately Invoked Function Expression) runs the moment it is defined: `(function(){ ... })()`. Before modules and `let`, it was the main way to create a private scope and avoid polluting globals. You still see it in older bundles and libraries.",
                  terms: [
                    { term: 'IIFE', definition: 'A function expression that is called immediately to create a private scope.' },
                  ],
                },
                {
                  id: 'd2c3s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'What is the difference between `bind` and `call`?',
                  options: [
                    { id: 'a', text: 'There is none.', correct: false },
                    { id: 'b', text: '`call` invokes immediately; `bind` returns a new bound function to call later.', correct: true },
                    { id: 'c', text: '`bind` takes an array of args; `call` does not.', correct: false },
                    { id: 'd', text: '`call` only works on arrow functions.', correct: false },
                  ],
                  explanation:
                    "`call` runs the function right away with a given `this`. `bind` returns a new function with `this` permanently set, to be invoked later.",
                },
              ],
            },
          ],
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 3 — Objects, Arrays & Iteration
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd3',
      title: 'Objects, Arrays & Iteration',
      emoji: '📦',
      description:
        "Working with data: objects, references, destructuring, spread/rest, the essential array methods, JSON, optional chaining, and nullish coalescing.",
      chapters: [
        {
          id: 'd3c1',
          title: 'Objects & References',
          emoji: '🧱',
          description: "How objects work and why copying them is trickier than copying numbers.",
          sections: [
            {
              id: 'd3c1s1',
              title: 'Objects Basics',
              summary: "Creating, reading, and updating object properties.",
              cards: [
                {
                  id: 'd3c1s1-1',
                  kind: 'concept',
                  title: 'Key/Value Pairs',
                  emoji: '🗂️',
                  body:
                    "An **object** stores data as **key/value** pairs: `{ name: \"Sam\", age: 30 }`. Read with dot notation `obj.name` or brackets `obj[\"name\"]`. Brackets let you use dynamic keys: `obj[someVariable]`.\n\nAdd or update by assigning: `obj.email = \"a@b.com\"`.",
                  terms: [
                    { term: 'Property', definition: 'A key/value pair stored on an object.' },
                    { term: 'Dot notation', definition: 'Accessing a property by name, like obj.name.' },
                    { term: 'Bracket notation', definition: 'Accessing a property via a key expression, like obj["name"].' },
                  ],
                },
                {
                  id: 'd3c1s1-2',
                  kind: 'example',
                  title: 'Shorthand & Methods',
                  emoji: '✂️',
                  body:
                    "Shorthands make objects compact:\n\n```\nconst name = \"Sam\"\nconst user = {\n  name,            // shorthand for name: name\n  greet() {        // method shorthand\n    return \"Hi \" + this.name\n  }\n}\n```",
                },
                {
                  id: 'd3c1s1-3',
                  kind: 'tip',
                  title: 'Gotcha: Iterating Object Keys',
                  emoji: '⚠️',
                  body:
                    "To loop an object's own keys, use `Object.keys(obj)`, `Object.values(obj)`, or `Object.entries(obj)`. The old `for...in` also walks *inherited* keys, which can surprise you. Prefer the `Object.*` helpers for clarity.",
                },
                {
                  id: 'd3c1s1-4',
                  kind: 'diagram',
                  title: 'Object Helpers',
                  emoji: '🧰',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Object.keys', emoji: '🔑', items: ['Array of keys', '["name", "age"]'] },
                      { title: 'Object.values', emoji: '📋', items: ['Array of values', '["Sam", 30]'] },
                      { title: 'Object.entries', emoji: '🔗', items: ['Array of pairs', '[["name","Sam"], ...]'] },
                    ],
                  },
                },
                {
                  id: 'd3c1s1-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'How do you access a property using a key stored in a variable `k`?',
                  options: [
                    { id: 'a', text: 'obj.k', correct: false },
                    { id: 'b', text: 'obj[k]', correct: true },
                    { id: 'c', text: 'obj->k', correct: false },
                    { id: 'd', text: 'obj::k', correct: false },
                  ],
                  explanation:
                    "Bracket notation `obj[k]` evaluates `k` first, so it uses the variable's value as the key. `obj.k` would look for a literal property named \"k\".",
                },
              ],
            },
            {
              id: 'd3c1s2',
              title: 'References vs Values',
              summary: "Why mutating a copied object can change the original.",
              cards: [
                {
                  id: 'd3c1s2-1',
                  kind: 'concept',
                  title: 'Copied How?',
                  emoji: '🪞',
                  body:
                    "Primitives are copied **by value** — you get an independent copy. Objects and arrays are copied **by reference** — the variable holds a pointer, so two variables can point at the *same* object. Change it through one, and the other sees the change.",
                  terms: [
                    { term: 'Pass by value', definition: 'Copying the actual value, producing an independent duplicate.' },
                    { term: 'Pass by reference', definition: 'Copying a pointer to the same underlying object.' },
                  ],
                },
                {
                  id: 'd3c1s2-2',
                  kind: 'example',
                  title: 'Shared Reference',
                  emoji: '🔗',
                  body:
                    "```\nconst a = { n: 1 }\nconst b = a\nb.n = 99\nconsole.log(a.n) // 99\n```\n\n`a` and `b` point at the same object. With primitives, `let x = 1; let y = x; y = 99` leaves `x` at `1`.",
                },
                {
                  id: 'd3c1s2-3',
                  kind: 'analogy',
                  title: 'Shared Doc vs Photocopy',
                  emoji: '📄',
                  body:
                    "Assigning an object is like sharing a link to one Google Doc — edits show up for everyone. Copying a primitive is like handing someone a photocopy — they can scribble on it without touching your original. Knowing which you have prevents nasty surprises.",
                },
                {
                  id: 'd3c1s2-4',
                  kind: 'tip',
                  title: 'Shallow vs Deep Copy',
                  emoji: '⚠️',
                  body:
                    "`{ ...obj }` and `Object.assign({}, obj)` make a **shallow** copy: top-level is fresh, but nested objects are still shared. For a **deep** copy use `structuredClone(obj)` (modern) or a library. Beware `JSON.parse(JSON.stringify(obj))` — it drops functions, dates become strings, and it chokes on cycles.",
                },
                {
                  id: 'd3c1s2-5',
                  kind: 'diagram',
                  title: 'Value vs Reference',
                  emoji: '⚖️',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'By value', emoji: '🧾', items: ['Primitives', 'Independent copy', 'string, number, boolean'] },
                      { title: 'By reference', emoji: '🔗', items: ['Objects & arrays', 'Shared pointer', 'mutation is visible'] },
                    ],
                  },
                },
                {
                  id: 'd3c1s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'After `const b = a` (a is an object) and `b.x = 5`, what is `a.x`?',
                  options: [
                    { id: 'a', text: 'undefined — they are separate.', correct: false },
                    { id: 'b', text: '5 — they share one reference.', correct: true },
                    { id: 'c', text: 'It throws an error.', correct: false },
                    { id: 'd', text: '0', correct: false },
                  ],
                  explanation:
                    "Objects are assigned by reference, so `a` and `b` point at the same object. Setting `b.x` also changes `a.x` to `5`.",
                },
              ],
            },
          ],
        },
        {
          id: 'd3c2',
          title: 'Destructuring & Spread',
          emoji: '✨',
          description: "Modern syntax for pulling values out and gluing them together.",
          sections: [
            {
              id: 'd3c2s1',
              title: 'Destructuring',
              summary: "Unpacking arrays and objects into variables.",
              cards: [
                {
                  id: 'd3c2s1-1',
                  kind: 'concept',
                  title: 'Unpacking Values',
                  emoji: '📤',
                  body:
                    "**Destructuring** pulls values out of arrays/objects into variables in one line.\n\n- Array: `const [first, second] = [10, 20]`\n- Object: `const { name, age } = user`\n\nYou can rename (`{ name: n }`), set defaults (`{ age = 0 }`), and skip array slots with commas.",
                  terms: [
                    { term: 'Destructuring', definition: 'Syntax for unpacking array/object values into distinct variables.' },
                  ],
                },
                {
                  id: 'd3c2s1-2',
                  kind: 'example',
                  title: 'Practical Destructuring',
                  emoji: '🧪',
                  body:
                    "```\nconst { name, age = 18 } = { name: \"Sam\" }\n// name = \"Sam\", age = 18 (default)\n\nfunction draw({ x, y }) { /* ... */ }\ndraw({ x: 1, y: 2 })\n```\n\nDestructuring in parameters keeps function signatures self-documenting.",
                },
                {
                  id: 'd3c2s1-3',
                  kind: 'analogy',
                  title: 'Unpacking Groceries',
                  emoji: '🛍️',
                  body:
                    "Destructuring is like unpacking a grocery bag straight onto labeled shelves: milk goes to `milk`, eggs to `eggs`. Instead of rummaging in the bag each time (`bag.milk`), you take everything out once and put it where it belongs.",
                },
                {
                  id: 'd3c2s1-4',
                  kind: 'tip',
                  title: 'Gotcha: Swapping Variables',
                  emoji: '💡',
                  body:
                    "Destructuring gives you a one-liner swap with no temp variable: `[a, b] = [b, a]`. Handy and readable. Just remember the array brackets — `a, b = b, a` does something completely different.",
                },
                {
                  id: 'd3c2s1-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'What does `const { a = 5 } = {}` set `a` to?',
                  options: [
                    { id: 'a', text: 'undefined', correct: false },
                    { id: 'b', text: '5 (the default)', correct: true },
                    { id: 'c', text: 'null', correct: false },
                    { id: 'd', text: 'It throws.', correct: false },
                  ],
                  explanation:
                    "The object has no `a`, so the destructuring default kicks in and `a` becomes `5`. Defaults apply only when the value is `undefined`.",
                },
              ],
            },
            {
              id: 'd3c2s2',
              title: 'Spread & Rest, Optional Chaining',
              summary: "The ... operator, optional chaining, and nullish coalescing.",
              cards: [
                {
                  id: 'd3c2s2-1',
                  kind: 'concept',
                  title: 'Spread vs Rest',
                  emoji: '🌬️',
                  body:
                    "Same `...` syntax, opposite jobs. **Spread** expands an iterable into pieces: `[...a, ...b]` merges arrays; `{ ...obj, x: 1 }` clones and overrides. **Rest** collects pieces into one: `const [first, ...others] = arr`.\n\nSpread = spread out. Rest = gather up.",
                  terms: [
                    { term: 'Spread', definition: 'Expanding an iterable or object into individual elements.' },
                    { term: 'Rest', definition: 'Collecting multiple elements into a single array or object.' },
                  ],
                },
                {
                  id: 'd3c2s2-2',
                  kind: 'example',
                  title: 'Spread Patterns',
                  emoji: '🧩',
                  body:
                    "```\nconst merged = [...[1, 2], ...[3, 4]] // [1,2,3,4]\nconst clone = { ...user, active: true }\nMath.max(...[3, 7, 1])                 // 7\n```\n\nSpread is the cleanest way to copy or merge without mutating the originals.",
                },
                {
                  id: 'd3c2s2-3',
                  kind: 'concept',
                  title: 'Optional Chaining & Nullish',
                  emoji: '🪝',
                  body:
                    "`?.` safely reads deep properties: `user?.address?.city` returns `undefined` instead of throwing if something is missing.\n\n`??` (nullish coalescing) supplies a default only for `null`/`undefined`: `count ?? 10`. Unlike `||`, it keeps `0` and `\"\"` as valid values.",
                  terms: [
                    { term: 'Optional chaining', definition: '?. short-circuits to undefined if a reference is null or undefined.' },
                    { term: 'Nullish coalescing', definition: '?? returns the right side only when the left is null or undefined.' },
                  ],
                },
                {
                  id: 'd3c2s2-4',
                  kind: 'tip',
                  title: 'Gotcha: ?? vs ||',
                  emoji: '⚠️',
                  body:
                    "Use `??` when `0` or `\"\"` are valid values. `count || 10` turns a real `0` into `10` (because `0` is falsy), but `count ?? 10` keeps the `0`. Reach for `??` for numeric and string defaults.",
                },
                {
                  id: 'd3c2s2-5',
                  kind: 'diagram',
                  title: 'Spread vs Rest',
                  emoji: '↔️',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Spread', emoji: '🌬️', items: ['Expands', '[...arr]', 'Merge / clone'] },
                      { title: 'Rest', emoji: '🧺', items: ['Collects', '[a, ...rest]', 'Gather extras'] },
                    ],
                  },
                },
                {
                  id: 'd3c2s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'What does `0 ?? 10` return?',
                  options: [
                    { id: 'a', text: '10', correct: false },
                    { id: 'b', text: '0', correct: true },
                    { id: 'c', text: 'true', correct: false },
                    { id: 'd', text: 'undefined', correct: false },
                  ],
                  explanation:
                    "`??` only falls back for `null`/`undefined`. `0` is neither, so it is kept. (`0 || 10` would give `10`.)",
                },
              ],
            },
          ],
        },
        {
          id: 'd3c3',
          title: 'Array Methods & JSON',
          emoji: '🔧',
          description: "The functional array toolkit and turning data into text.",
          sections: [
            {
              id: 'd3c3s1',
              title: 'Transforming Arrays',
              summary: "map, filter, reduce, find, some, every.",
              cards: [
                {
                  id: 'd3c3s1-1',
                  kind: 'concept',
                  title: 'The Big Three',
                  emoji: '🎯',
                  body:
                    "- **map** transforms each item, returning a new same-length array.\n- **filter** keeps items that pass a test, returning a shorter array.\n- **reduce** boils an array down to a single value.\n\nAll three return new values and do not mutate the original — the heart of functional JS.",
                  terms: [
                    { term: 'map', definition: 'Returns a new array with each element transformed.' },
                    { term: 'filter', definition: 'Returns a new array of elements that pass a predicate.' },
                    { term: 'reduce', definition: 'Accumulates array elements into a single result.' },
                  ],
                },
                {
                  id: 'd3c3s1-2',
                  kind: 'example',
                  title: 'Chaining Them',
                  emoji: '⛓️',
                  body:
                    "```\nconst nums = [1, 2, 3, 4]\nconst result = nums\n  .filter(n => n % 2 === 0) // [2, 4]\n  .map(n => n * 10)         // [20, 40]\n  .reduce((a, b) => a + b, 0) // 60\n```\n\nReadable, declarative, no manual loop.",
                },
                {
                  id: 'd3c3s1-3',
                  kind: 'concept',
                  title: 'find, some, every',
                  emoji: '🔎',
                  body:
                    "- **find** returns the first matching element (or `undefined`).\n- **some** returns `true` if at least one element passes.\n- **every** returns `true` only if all elements pass.\n\nThese stop early once they have their answer, so they are efficient for searches.",
                  terms: [
                    { term: 'find', definition: 'Returns the first element matching a predicate, else undefined.' },
                    { term: 'some', definition: 'True if any element passes the test.' },
                    { term: 'every', definition: 'True only if every element passes the test.' },
                  ],
                },
                {
                  id: 'd3c3s1-4',
                  kind: 'tip',
                  title: 'Gotcha: map vs forEach',
                  emoji: '⚠️',
                  body:
                    "`map` returns a new array — use it when you want a transformed result. `forEach` returns `undefined` — use it only for side effects (like logging). Using `map` and ignoring the result wastes memory and confuses readers.",
                },
                {
                  id: 'd3c3s1-5',
                  kind: 'analogy',
                  title: 'A Factory Line',
                  emoji: '🏭',
                  body:
                    "Picture a conveyor belt. `filter` is a quality inspector tossing rejects off the line. `map` is a station that reshapes each item. `reduce` is the packing box at the end that combines everything into one shipment. Chain the stations and raw data rolls out finished.",
                },
                {
                  id: 'd3c3s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Which method returns a NEW array of the same length with each element transformed?',
                  options: [
                    { id: 'a', text: 'filter', correct: false },
                    { id: 'b', text: 'map', correct: true },
                    { id: 'c', text: 'forEach', correct: false },
                    { id: 'd', text: 'reduce', correct: false },
                  ],
                  explanation:
                    "`map` applies a function to each element and returns a new array of the same length. `filter` may shorten it; `forEach` returns `undefined`.",
                },
              ],
            },
            {
              id: 'd3c3s2',
              title: 'Iteration & JSON',
              summary: "Looping techniques and serializing data.",
              cards: [
                {
                  id: 'd3c3s2-1',
                  kind: 'concept',
                  title: 'Ways to Iterate',
                  emoji: '🔁',
                  body:
                    "For arrays you can use `for`, `for...of`, `forEach`, or the transforming methods. Use `for...of` when you need `break`/`continue`, `forEach` for simple side effects, and `map`/`filter`/`reduce` when producing a new value.\n\nFor objects, iterate `Object.entries(obj)` with `for...of`.",
                  terms: [
                    { term: 'Iterable', definition: 'An object you can loop with for...of, like arrays, strings, Maps.' },
                  ],
                },
                {
                  id: 'd3c3s2-2',
                  kind: 'concept',
                  title: 'JSON',
                  emoji: '🧾',
                  body:
                    "**JSON** is a text format for data exchange. `JSON.stringify(obj)` turns an object into a string (for storage or network). `JSON.parse(str)` turns a JSON string back into an object.\n\nJSON supports strings, numbers, booleans, null, arrays, and objects — but not functions, `undefined`, or dates (as dates).",
                  terms: [
                    { term: 'JSON', definition: 'JavaScript Object Notation, a text format for structured data.' },
                    { term: 'Serialize', definition: 'Convert an in-memory value to a transmittable string.' },
                  ],
                },
                {
                  id: 'd3c3s2-3',
                  kind: 'example',
                  title: 'Round-Trip',
                  emoji: '🔄',
                  body:
                    "```\nconst obj = { id: 1, tags: [\"a\", \"b\"] }\nconst str = JSON.stringify(obj)\n// '{\"id\":1,\"tags\":[\"a\",\"b\"]}'\nconst back = JSON.parse(str)\nback.id // 1\n```\n\nGreat for `localStorage` and API payloads.",
                },
                {
                  id: 'd3c3s2-4',
                  kind: 'tip',
                  title: 'Gotcha: JSON Drops Things',
                  emoji: '⚠️',
                  body:
                    "`JSON.stringify` silently drops `undefined` values and functions, and converts `Date` objects to ISO strings (which do not turn back into dates on parse). Do not rely on it for deep-cloning complex objects.",
                },
                {
                  id: 'd3c3s2-5',
                  kind: 'diagram',
                  title: 'Serialize Cycle',
                  emoji: '🔁',
                  diagram: {
                    type: 'cycle',
                    nodes: [
                      { label: 'JS object', emoji: '🧱' },
                      { label: 'JSON.stringify', sublabel: 'to text', emoji: '📤' },
                      { label: 'String / network', emoji: '🌐' },
                      { label: 'JSON.parse', sublabel: 'to object', emoji: '📥' },
                    ],
                  },
                },
                {
                  id: 'd3c3s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'What does `JSON.stringify({ a: undefined, b: 1 })` produce?',
                  options: [
                    { id: 'a', text: '\'{"a":undefined,"b":1}\'', correct: false },
                    { id: 'b', text: '\'{"b":1}\' — undefined keys are dropped.', correct: true },
                    { id: 'c', text: 'It throws an error.', correct: false },
                    { id: 'd', text: '\'{"a":null,"b":1}\'', correct: false },
                  ],
                  explanation:
                    "`JSON.stringify` omits properties whose value is `undefined` (and functions), so only `b` survives: `{\"b\":1}`.",
                },
              ],
            },
          ],
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 4 — Asynchronous JavaScript
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd4',
      title: 'Asynchronous JavaScript',
      emoji: '⏳',
      description:
        "How JS stays responsive: the call stack and event loop, callbacks, Promises, async/await, error handling, fetch, and the micro/macrotask queues.",
      chapters: [
        {
          id: 'd4c1',
          title: 'The Event Loop',
          emoji: '🔄',
          description: "Why single-threaded JavaScript can do many things at once.",
          sections: [
            {
              id: 'd4c1s1',
              title: 'Call Stack & Event Loop',
              summary: "The engine behind asynchronous behavior.",
              cards: [
                {
                  id: 'd4c1s1-1',
                  kind: 'concept',
                  title: 'Single Thread, Many Tasks',
                  emoji: '🧵',
                  body:
                    "JavaScript runs on **one thread** with a **call stack**. Long tasks would freeze it, so slow work (timers, network) is handed to **Web APIs**. When done, their callbacks wait in a **queue**. The **event loop** moves a queued callback onto the stack whenever the stack is empty.",
                  terms: [
                    { term: 'Call stack', definition: 'The list of functions currently running, last-in first-out.' },
                    { term: 'Event loop', definition: 'The mechanism that moves queued callbacks onto the empty stack.' },
                    { term: 'Callback queue', definition: 'Where finished async callbacks wait their turn.' },
                  ],
                },
                {
                  id: 'd4c1s1-2',
                  kind: 'analogy',
                  title: 'A Solo Chef',
                  emoji: '👨‍🍳',
                  body:
                    "Picture one chef (the thread). Boiling pasta takes time, so the chef sets a timer (a Web API) and keeps chopping veggies instead of standing idle. When the timer dings, the task joins a list (the queue). The chef finishes the current job, then picks up the next — that scheduling is the event loop.",
                },
                {
                  id: 'd4c1s1-3',
                  kind: 'diagram',
                  title: 'Event Loop Flow',
                  emoji: '🔁',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'Call Stack', emoji: '🥞' },
                      { label: 'Web APIs', sublabel: 'timers, fetch', emoji: '🌐' },
                      { label: 'Callback Queue', emoji: '📋' },
                      { label: 'Event Loop', sublabel: 'stack empty?', emoji: '🔄' },
                      { label: 'Back to Stack', emoji: '↩️' },
                    ],
                  },
                },
                {
                  id: 'd4c1s1-4',
                  kind: 'tip',
                  title: 'Gotcha: setTimeout(fn, 0)',
                  emoji: '⚠️',
                  body:
                    "`setTimeout(fn, 0)` does not run immediately. It queues `fn` to run *after* the current synchronous code finishes and the stack clears. The `0` is a minimum delay, not a guarantee.",
                },
                {
                  id: 'd4c1s1-5',
                  kind: 'example',
                  title: 'Order of Output',
                  emoji: '🔢',
                  body:
                    "```\nconsole.log(\"A\")\nsetTimeout(() => console.log(\"B\"), 0)\nconsole.log(\"C\")\n```\n\nPrints `A`, `C`, then `B`. The timer callback waits in the queue until the synchronous lines finish.",
                },
                {
                  id: 'd4c1s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'What does the event loop do?',
                  options: [
                    { id: 'a', text: 'Runs multiple threads in parallel.', correct: false },
                    { id: 'b', text: 'Moves queued callbacks onto the stack when it is empty.', correct: true },
                    { id: 'c', text: 'Speeds up synchronous code.', correct: false },
                    { id: 'd', text: 'Cancels pending timers.', correct: false },
                  ],
                  explanation:
                    "The event loop constantly checks: if the call stack is empty, it takes the next callback from the queue and pushes it onto the stack to run.",
                },
              ],
            },
            {
              id: 'd4c1s2',
              title: 'Microtasks vs Macrotasks',
              summary: "Why Promises jump the queue ahead of timers.",
              cards: [
                {
                  id: 'd4c1s2-1',
                  kind: 'concept',
                  title: 'Two Queues',
                  emoji: '🚦',
                  body:
                    "There are two queues. **Microtasks** (resolved Promises, `queueMicrotask`) run first and drain completely after each synchronous chunk. **Macrotasks** (`setTimeout`, `setInterval`, I/O) run one at a time, after all microtasks are done.\n\nSo a resolved Promise always beats a `setTimeout(0)`.",
                  terms: [
                    { term: 'Microtask', definition: 'A high-priority task like a Promise callback, drained before macrotasks.' },
                    { term: 'Macrotask', definition: 'A task like setTimeout or I/O, run one per loop iteration.' },
                  ],
                },
                {
                  id: 'd4c1s2-2',
                  kind: 'example',
                  title: 'Promise Beats Timeout',
                  emoji: '🏁',
                  body:
                    "```\nconsole.log(1)\nsetTimeout(() => console.log(2), 0)\nPromise.resolve().then(() => console.log(3))\nconsole.log(4)\n```\n\nPrints `1`, `4`, `3`, `2`. Sync first, then the microtask (`3`), then the macrotask (`2`).",
                },
                {
                  id: 'd4c1s2-3',
                  kind: 'diagram',
                  title: 'Queue Priority',
                  emoji: '📊',
                  diagram: {
                    type: 'flow',
                    direction: 'vertical',
                    nodes: [
                      { label: 'Run sync code', emoji: '⚡' },
                      { label: 'Drain ALL microtasks', sublabel: 'promises', emoji: '🥇' },
                      { label: 'Run ONE macrotask', sublabel: 'setTimeout', emoji: '🥈' },
                      { label: 'Repeat', emoji: '🔁' },
                    ],
                  },
                },
                {
                  id: 'd4c1s2-4',
                  kind: 'tip',
                  title: 'Gotcha: Starving the Loop',
                  emoji: '⚠️',
                  body:
                    "If a microtask keeps scheduling more microtasks, they all drain before any timer or render runs — you can starve the macrotask queue and freeze the UI. Keep microtask chains finite.",
                },
                {
                  id: 'd4c1s2-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Between a resolved Promise callback and a setTimeout(0), which runs first?',
                  options: [
                    { id: 'a', text: 'The setTimeout callback.', correct: false },
                    { id: 'b', text: 'The Promise callback (microtask).', correct: true },
                    { id: 'c', text: 'They run at the same time.', correct: false },
                    { id: 'd', text: 'Whichever was written first.', correct: false },
                  ],
                  explanation:
                    "Microtasks (Promise callbacks) drain completely before any macrotask (setTimeout) runs, so the Promise callback goes first.",
                },
              ],
            },
          ],
        },
        {
          id: 'd4c2',
          title: 'Callbacks & Promises',
          emoji: '🤝',
          description: "From nested callbacks to clean Promise chains.",
          sections: [
            {
              id: 'd4c2s1',
              title: 'Callbacks',
              summary: "The original async pattern and its pain points.",
              cards: [
                {
                  id: 'd4c2s1-1',
                  kind: 'concept',
                  title: 'What Is a Callback?',
                  emoji: '📞',
                  body:
                    "A **callback** is a function you pass to another function to be called later — often when an async task finishes. `setTimeout(() => {}, 100)` and `arr.map(fn)` both take callbacks.\n\nCallbacks are simple but stack up badly when you chain many async steps.",
                  terms: [
                    { term: 'Callback', definition: 'A function passed to be invoked later, often after an async task.' },
                    { term: 'Higher-order function', definition: 'A function that takes or returns another function.' },
                  ],
                },
                {
                  id: 'd4c2s1-2',
                  kind: 'example',
                  title: 'Callback Hell',
                  emoji: '🌋',
                  body:
                    "```\ngetUser(id, user => {\n  getOrders(user, orders => {\n    getDetails(orders, details => {\n      // deeply nested!\n    })\n  })\n})\n```\n\nThis rightward drift — the \"pyramid of doom\" — is hard to read and error-handle. Promises fix it.",
                },
                {
                  id: 'd4c2s1-3',
                  kind: 'analogy',
                  title: 'Leave Your Number',
                  emoji: '☎️',
                  body:
                    "A callback is like leaving your phone number at a busy restaurant. Instead of standing at the counter (blocking), you go sit down. When the table is ready, they call you back. The trouble starts when every step needs another callback — and you are juggling a stack of phone numbers.",
                },
                {
                  id: 'd4c2s1-4',
                  kind: 'tip',
                  title: 'Gotcha: Error-First Callbacks',
                  emoji: '⚠️',
                  body:
                    "Node-style callbacks put the error first: `(err, data) => {}`. Always check `if (err)` before using `data`. Forgetting this means errors silently slip through. Promises and async/await make this far cleaner.",
                },
                {
                  id: 'd4c2s1-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'What problem does "callback hell" describe?',
                  options: [
                    { id: 'a', text: 'Callbacks are slower than loops.', correct: false },
                    { id: 'b', text: 'Deeply nested callbacks that are hard to read and maintain.', correct: true },
                    { id: 'c', text: 'Callbacks cannot return values.', correct: false },
                    { id: 'd', text: 'Callbacks always run twice.', correct: false },
                  ],
                  explanation:
                    "Callback hell (the pyramid of doom) is the deeply nested, hard-to-follow structure that arises when chaining many async callbacks.",
                },
              ],
            },
            {
              id: 'd4c2s2',
              title: 'Promises',
              summary: "An object representing a future value.",
              cards: [
                {
                  id: 'd4c2s2-1',
                  kind: 'concept',
                  title: 'A Promise of a Value',
                  emoji: '🎟️',
                  body:
                    "A **Promise** represents a value that is not ready yet. It has three states: **pending**, **fulfilled** (resolved), or **rejected**. Attach `.then(onSuccess)` and `.catch(onError)`, and `.finally()` to run regardless.\n\nPromises chain flatly, replacing the callback pyramid.",
                  terms: [
                    { term: 'Promise', definition: 'An object representing the eventual result of an async operation.' },
                    { term: 'Pending', definition: 'The initial state before a Promise settles.' },
                    { term: 'Settled', definition: 'A Promise that is either fulfilled or rejected.' },
                  ],
                },
                {
                  id: 'd4c2s2-2',
                  kind: 'example',
                  title: 'Chaining .then',
                  emoji: '⛓️',
                  body:
                    "```\ngetUser(id)\n  .then(user => getOrders(user))\n  .then(orders => render(orders))\n  .catch(err => showError(err))\n```\n\nEach `.then` returns a new Promise, so the chain stays flat. One `.catch` handles errors from any step.",
                },
                {
                  id: 'd4c2s2-3',
                  kind: 'concept',
                  title: 'Promise Combinators',
                  emoji: '🎛️',
                  body:
                    "- `Promise.all([...])` waits for all; rejects if any fails.\n- `Promise.allSettled([...])` waits for all; never rejects, reports each outcome.\n- `Promise.race([...])` settles with the first to finish.\n- `Promise.any([...])` resolves with the first success.",
                  terms: [
                    { term: 'Promise.all', definition: 'Resolves when all promises resolve; rejects on the first rejection.' },
                    { term: 'Promise.race', definition: 'Settles as soon as the first promise settles.' },
                  ],
                },
                {
                  id: 'd4c2s2-4',
                  kind: 'diagram',
                  title: 'Promise States',
                  emoji: '🚦',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'Pending', sublabel: 'waiting', emoji: '⏳' },
                      { label: 'Fulfilled', sublabel: '.then runs', emoji: '✅' },
                      { label: 'Rejected', sublabel: '.catch runs', emoji: '❌' },
                    ],
                  },
                },
                {
                  id: 'd4c2s2-5',
                  kind: 'tip',
                  title: 'Gotcha: Forgetting return',
                  emoji: '⚠️',
                  body:
                    "Inside a `.then`, if you call an async function but forget to `return` its Promise, the chain does not wait for it — and errors escape your `.catch`. Always `return` the inner Promise from a `.then` callback.",
                },
                {
                  id: 'd4c2s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'What does `Promise.all` do if one of its promises rejects?',
                  options: [
                    { id: 'a', text: 'Ignores it and resolves with the rest.', correct: false },
                    { id: 'b', text: 'Rejects immediately with that error.', correct: true },
                    { id: 'c', text: 'Retries the failed promise.', correct: false },
                    { id: 'd', text: 'Resolves with undefined.', correct: false },
                  ],
                  explanation:
                    "`Promise.all` rejects as soon as any promise rejects. Use `Promise.allSettled` if you want every outcome regardless of failures.",
                },
              ],
            },
          ],
        },
        {
          id: 'd4c3',
          title: 'async/await & fetch',
          emoji: '✍️',
          description: "Write asynchronous code that reads like synchronous code.",
          sections: [
            {
              id: 'd4c3s1',
              title: 'async / await',
              summary: "Syntactic sugar over Promises.",
              cards: [
                {
                  id: 'd4c3s1-1',
                  kind: 'concept',
                  title: 'Awaiting Promises',
                  emoji: '⏸️',
                  body:
                    "An `async` function always returns a Promise. Inside it, `await` pauses until a Promise settles and gives you the resolved value — without blocking the main thread.\n\nIt makes async code read top-to-bottom, like synchronous code, while still being non-blocking under the hood.",
                  terms: [
                    { term: 'async', definition: 'A keyword marking a function that returns a Promise and may use await.' },
                    { term: 'await', definition: 'Pauses an async function until a Promise settles, yielding its value.' },
                  ],
                },
                {
                  id: 'd4c3s1-2',
                  kind: 'example',
                  title: 'Same Logic, Cleaner',
                  emoji: '🧼',
                  body:
                    "```\nasync function load(id) {\n  const user = await getUser(id)\n  const orders = await getOrders(user)\n  return orders\n}\n```\n\nNo `.then` nesting — just await each step. Returns a Promise you can await or `.then` elsewhere.",
                },
                {
                  id: 'd4c3s1-3',
                  kind: 'concept',
                  title: 'Error Handling',
                  emoji: '🛡️',
                  body:
                    "With async/await, wrap awaits in `try/catch`:\n\n```\ntry {\n  const data = await fetchData()\n} catch (err) {\n  console.error(err)\n}\n```\n\nA rejected Promise throws inside the `await`, so `catch` handles it just like a synchronous error.",
                  terms: [
                    { term: 'try/catch', definition: 'A block that runs code and catches any thrown error.' },
                  ],
                },
                {
                  id: 'd4c3s1-4',
                  kind: 'tip',
                  title: 'Gotcha: Sequential vs Parallel',
                  emoji: '⚠️',
                  body:
                    "Awaiting in a loop runs requests one after another (slow). If they are independent, start them together and `await Promise.all([...])` to run in parallel. Do not serialize work that could overlap.",
                },
                {
                  id: 'd4c3s1-5',
                  kind: 'diagram',
                  title: 'Sync vs Async Quadrant',
                  emoji: '🧭',
                  diagram: {
                    type: 'quadrant',
                    axes: { x: ['Synchronous', 'Asynchronous'], y: ['Blocking', 'Non-blocking'] },
                    points: [
                      { label: 'Big loop', x: 0.2, y: 0.2 },
                      { label: 'alert()', x: 0.25, y: 0.25 },
                      { label: 'await fetch', x: 0.8, y: 0.8 },
                      { label: 'setTimeout', x: 0.75, y: 0.85 },
                    ],
                  },
                },
                {
                  id: 'd4c3s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'What does an `async` function always return?',
                  options: [
                    { id: 'a', text: 'Whatever value you return, raw.', correct: false },
                    { id: 'b', text: 'A Promise.', correct: true },
                    { id: 'c', text: 'undefined.', correct: false },
                    { id: 'd', text: 'A callback.', correct: false },
                  ],
                  explanation:
                    "An `async` function always wraps its return value in a Promise, so callers can `await` it or attach `.then`.",
                },
              ],
            },
            {
              id: 'd4c3s2',
              title: 'fetch & Timers',
              summary: "Talking to the network and scheduling work.",
              cards: [
                {
                  id: 'd4c3s2-1',
                  kind: 'concept',
                  title: 'fetch Basics',
                  emoji: '🌐',
                  body:
                    "`fetch(url)` returns a Promise of a `Response`. Call `await res.json()` to read the body. Important: `fetch` only rejects on network failure — a 404 or 500 still resolves, so check `res.ok` yourself.",
                  terms: [
                    { term: 'fetch', definition: 'A browser API returning a Promise for a network Response.' },
                    { term: 'Response.ok', definition: 'True when the HTTP status is in the 200–299 range.' },
                  ],
                },
                {
                  id: 'd4c3s2-2',
                  kind: 'example',
                  title: 'A Real Request',
                  emoji: '📡',
                  body:
                    "```\nasync function getJSON(url) {\n  const res = await fetch(url)\n  if (!res.ok) throw new Error(res.status)\n  return res.json()\n}\n```\n\nAlways check `res.ok`, since `fetch` does not throw on HTTP errors.",
                },
                {
                  id: 'd4c3s2-3',
                  kind: 'concept',
                  title: 'Timers',
                  emoji: '⏰',
                  body:
                    "`setTimeout(fn, ms)` runs `fn` once after a delay. `setInterval(fn, ms)` repeats every interval. Both return an id you can pass to `clearTimeout`/`clearInterval` to cancel. Delays are minimums, not exact — the event loop must be free first.",
                  terms: [
                    { term: 'setTimeout', definition: 'Schedules a function to run once after a minimum delay.' },
                    { term: 'setInterval', definition: 'Schedules a function to repeat at an interval.' },
                  ],
                },
                {
                  id: 'd4c3s2-4',
                  kind: 'tip',
                  title: 'Gotcha: Uncleared Intervals',
                  emoji: '⚠️',
                  body:
                    "Forgetting to `clearInterval` leaves a timer running forever — a common memory leak in single-page apps. Always clear intervals when a component unmounts or the work is done.",
                },
                {
                  id: 'd4c3s2-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Does `fetch` reject the Promise when the server returns a 404?',
                  options: [
                    { id: 'a', text: 'Yes, any non-200 rejects.', correct: false },
                    { id: 'b', text: 'No — it resolves; you must check res.ok.', correct: true },
                    { id: 'c', text: 'Only for 500 errors.', correct: false },
                    { id: 'd', text: 'It returns null.', correct: false },
                  ],
                  explanation:
                    "`fetch` only rejects on network errors. HTTP error statuses like 404 still resolve, so you must inspect `res.ok` or `res.status`.",
                },
              ],
            },
          ],
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 5 — The DOM & Events
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd5',
      title: 'The DOM & Events',
      emoji: '🖱️',
      description:
        "Bringing pages to life: selecting, creating, and updating elements; events and listeners; bubbling, capturing, and delegation; forms; and localStorage.",
      chapters: [
        {
          id: 'd5c1',
          title: 'Working with the DOM',
          emoji: '🌲',
          description: "Reading and changing the page from JavaScript.",
          sections: [
            {
              id: 'd5c1s1',
              title: 'Selecting & Updating',
              summary: "Finding elements and changing their content.",
              cards: [
                {
                  id: 'd5c1s1-1',
                  kind: 'concept',
                  title: 'What Is the DOM?',
                  emoji: '🌲',
                  body:
                    "The **DOM** (Document Object Model) is a live, tree-shaped representation of your HTML that JavaScript can read and change. Each tag becomes a **node**. Update a node and the page updates instantly.",
                  terms: [
                    { term: 'DOM', definition: 'A tree of objects representing the page that scripts can manipulate.' },
                    { term: 'Node', definition: 'A single point in the DOM tree, such as an element or text.' },
                  ],
                },
                {
                  id: 'd5c1s1-2',
                  kind: 'example',
                  title: 'Selecting Elements',
                  emoji: '🎯',
                  body:
                    "```\ndocument.getElementById(\"title\")\ndocument.querySelector(\".card\")     // first match\ndocument.querySelectorAll(\"li\")      // all matches\n```\n\n`querySelector` takes any CSS selector — the most flexible and most-used.",
                },
                {
                  id: 'd5c1s1-3',
                  kind: 'concept',
                  title: 'Changing Content',
                  emoji: '✏️',
                  body:
                    "- `el.textContent = \"Hi\"` sets plain text (safe).\n- `el.innerHTML = \"<b>Hi</b>\"` sets HTML (risky with user input).\n- `el.classList.add(\"active\")` toggles classes.\n- `el.setAttribute(\"href\", url)` sets attributes.",
                  terms: [
                    { term: 'textContent', definition: 'The plain text inside an element, with no HTML parsing.' },
                    { term: 'innerHTML', definition: 'The HTML markup inside an element; parsed as HTML.' },
                  ],
                },
                {
                  id: 'd5c1s1-4',
                  kind: 'analogy',
                  title: 'A Live Blueprint',
                  emoji: '📐',
                  body:
                    "The DOM is a live blueprint of the building (your page) that updates the building as you edit it. Move a wall on the blueprint and the real wall moves. JavaScript is the architect editing that blueprint in real time.",
                },
                {
                  id: 'd5c1s1-5',
                  kind: 'tip',
                  title: 'Gotcha: innerHTML & XSS',
                  emoji: '⚠️',
                  body:
                    "Setting `innerHTML` with untrusted user input opens an **XSS** hole — attackers can inject scripts. Prefer `textContent` for user data, and only use `innerHTML` with content you control or have sanitized.",
                },
                {
                  id: 'd5c1s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Which is safer for inserting untrusted user text?',
                  options: [
                    { id: 'a', text: 'innerHTML', correct: false },
                    { id: 'b', text: 'textContent', correct: true },
                    { id: 'c', text: 'document.write', correct: false },
                    { id: 'd', text: 'eval', correct: false },
                  ],
                  explanation:
                    "`textContent` inserts text without parsing HTML, avoiding XSS. `innerHTML` would interpret tags and scripts in the input.",
                },
              ],
            },
            {
              id: 'd5c1s2',
              title: 'Creating & Removing',
              summary: "Building new elements and inserting them into the tree.",
              cards: [
                {
                  id: 'd5c1s2-1',
                  kind: 'concept',
                  title: 'Create, Append, Remove',
                  emoji: '🏗️',
                  body:
                    "- `document.createElement(\"li\")` makes a detached element.\n- `parent.append(child)` adds it to the tree.\n- `el.remove()` deletes it.\n- `parent.replaceChildren(...)` swaps all children.\n\nBuild elements in memory, then attach once.",
                  terms: [
                    { term: 'createElement', definition: 'Creates a new, detached DOM element.' },
                    { term: 'append', definition: 'Inserts nodes as the last children of an element.' },
                  ],
                },
                {
                  id: 'd5c1s2-2',
                  kind: 'example',
                  title: 'Add a List Item',
                  emoji: '📝',
                  body:
                    "```\nconst li = document.createElement(\"li\")\nli.textContent = \"New task\"\ndocument.querySelector(\"ul\").append(li)\n```\n\nThe item appears at the end of the list immediately.",
                },
                {
                  id: 'd5c1s2-3',
                  kind: 'tip',
                  title: 'Gotcha: Reflow in Loops',
                  emoji: '⚠️',
                  body:
                    "Appending elements one-by-one inside a big loop forces the browser to recalculate layout (reflow) repeatedly — slow. Build everything in a `DocumentFragment` or array, then append once to minimize reflows.",
                },
                {
                  id: 'd5c1s2-4',
                  kind: 'diagram',
                  title: 'DOM Tree',
                  emoji: '🌳',
                  diagram: {
                    type: 'stack',
                    nodes: [
                      { label: 'document', emoji: '📄' },
                      { label: 'html', emoji: '🏠' },
                      { label: 'body', emoji: '📦' },
                      { label: 'div / ul / li', sublabel: 'your elements', emoji: '🧱' },
                    ],
                  },
                },
                {
                  id: 'd5c1s2-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'What does `document.createElement("div")` return?',
                  options: [
                    { id: 'a', text: 'A div already on the page.', correct: false },
                    { id: 'b', text: 'A new, detached div not yet in the DOM.', correct: true },
                    { id: 'c', text: 'A string of HTML.', correct: false },
                    { id: 'd', text: 'null until appended.', correct: false },
                  ],
                  explanation:
                    "It creates a fresh element in memory that is not attached to the page until you `append` it somewhere.",
                },
              ],
            },
          ],
        },
        {
          id: 'd5c2',
          title: 'Events',
          emoji: '👆',
          description: "Responding to clicks, input, and more — efficiently.",
          sections: [
            {
              id: 'd5c2s1',
              title: 'Listeners & the Event Object',
              summary: "Reacting to user actions.",
              cards: [
                {
                  id: 'd5c2s1-1',
                  kind: 'concept',
                  title: 'addEventListener',
                  emoji: '👂',
                  body:
                    "`el.addEventListener(\"click\", handler)` runs `handler` when the event fires. The handler receives an **event object** with details like `event.target` (what was clicked) and methods like `event.preventDefault()`.\n\nRemove with `removeEventListener` (using the same function reference).",
                  terms: [
                    { term: 'Event listener', definition: 'A function registered to run when a specific event fires.' },
                    { term: 'event.target', definition: 'The element that originally triggered the event.' },
                  ],
                },
                {
                  id: 'd5c2s1-2',
                  kind: 'example',
                  title: 'A Click Handler',
                  emoji: '🖱️',
                  body:
                    "```\nbutton.addEventListener(\"click\", (e) => {\n  e.preventDefault()\n  console.log(\"Clicked\", e.target)\n})\n```\n\n`preventDefault` stops the default action (like a form submitting or a link navigating).",
                },
                {
                  id: 'd5c2s1-3',
                  kind: 'tip',
                  title: 'Gotcha: Anonymous Handlers',
                  emoji: '⚠️',
                  body:
                    "You cannot remove a listener added with an inline anonymous function — `removeEventListener` needs the exact same reference. Save the handler in a named variable if you plan to remove it later.",
                },
                {
                  id: 'd5c2s1-4',
                  kind: 'concept',
                  title: 'preventDefault vs stopPropagation',
                  emoji: '🛑',
                  body:
                    "`preventDefault()` cancels the browser's default behavior (form submit, link click). `stopPropagation()` stops the event from bubbling to parent elements. They are different tools — you often want one without the other.",
                  terms: [
                    { term: 'preventDefault', definition: 'Cancels the default browser action for an event.' },
                    { term: 'stopPropagation', definition: 'Stops an event from continuing to bubble up the DOM.' },
                  ],
                },
                {
                  id: 'd5c2s1-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'What does `event.preventDefault()` do?',
                  options: [
                    { id: 'a', text: 'Stops the event bubbling to parents.', correct: false },
                    { id: 'b', text: 'Cancels the default browser action for that event.', correct: true },
                    { id: 'c', text: 'Removes the listener.', correct: false },
                    { id: 'd', text: 'Reloads the page.', correct: false },
                  ],
                  explanation:
                    "`preventDefault` stops the default action (like submitting a form). To stop bubbling you would use `stopPropagation`.",
                },
              ],
            },
            {
              id: 'd5c2s2',
              title: 'Bubbling, Capturing & Delegation',
              summary: "How events travel and how to listen smartly.",
              cards: [
                {
                  id: 'd5c2s2-1',
                  kind: 'concept',
                  title: 'The Event Journey',
                  emoji: '🌊',
                  body:
                    "An event travels in phases: **capturing** (down from the root to the target), then **bubbling** (back up to the root). By default listeners fire on the bubbling phase. This bubbling is what makes delegation possible.",
                  terms: [
                    { term: 'Bubbling', definition: 'Phase where an event rises from the target up through ancestors.' },
                    { term: 'Capturing', definition: 'Phase where an event descends from the root down to the target.' },
                  ],
                },
                {
                  id: 'd5c2s2-2',
                  kind: 'concept',
                  title: 'Event Delegation',
                  emoji: '🎟️',
                  body:
                    "**Event delegation** means putting one listener on a parent instead of many on each child. Because events bubble, the parent hears clicks from any child; check `event.target` to see which one.\n\nGreat for lists and dynamically added items.",
                  terms: [
                    { term: 'Event delegation', definition: 'Handling child events with a single listener on a shared parent.' },
                  ],
                },
                {
                  id: 'd5c2s2-3',
                  kind: 'example',
                  title: 'One Listener, Many Items',
                  emoji: '📋',
                  body:
                    "```\nlist.addEventListener(\"click\", (e) => {\n  if (e.target.matches(\"li\")) {\n    console.log(\"Clicked\", e.target.textContent)\n  }\n})\n```\n\nNew `li` items added later are handled too — no need to re-bind.",
                },
                {
                  id: 'd5c2s2-4',
                  kind: 'analogy',
                  title: 'One Receptionist',
                  emoji: '💁',
                  body:
                    "Instead of stationing a guard at every office door (a listener per element), you put one receptionist at the building entrance (the parent). Everyone passes by, so the receptionist handles all visitors — and even handles offices added later. That is delegation.",
                },
                {
                  id: 'd5c2s2-5',
                  kind: 'diagram',
                  title: 'Capture then Bubble',
                  emoji: '🔁',
                  diagram: {
                    type: 'flow',
                    direction: 'vertical',
                    nodes: [
                      { label: 'Document (capture)', sublabel: 'going down', emoji: '⬇️' },
                      { label: 'Target element', sublabel: 'the click', emoji: '🎯' },
                      { label: 'Parents (bubble)', sublabel: 'going up', emoji: '⬆️' },
                    ],
                  },
                },
                {
                  id: 'd5c2s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Why is event delegation efficient for a long, dynamic list?',
                  options: [
                    { id: 'a', text: 'It disables bubbling.', correct: false },
                    { id: 'b', text: 'One parent listener handles all children, including new ones.', correct: true },
                    { id: 'c', text: 'It caches the DOM.', correct: false },
                    { id: 'd', text: 'It runs handlers in parallel.', correct: false },
                  ],
                  explanation:
                    "Because events bubble up, a single listener on the parent catches clicks from any child — current or added later — instead of binding one listener per item.",
                },
              ],
            },
          ],
        },
        {
          id: 'd5c3',
          title: 'Forms & Storage',
          emoji: '🗄️',
          description: "Reading form input and persisting data in the browser.",
          sections: [
            {
              id: 'd5c3s1',
              title: 'Forms',
              summary: "Capturing and validating user input.",
              cards: [
                {
                  id: 'd5c3s1-1',
                  kind: 'concept',
                  title: 'Reading Form Values',
                  emoji: '⌨️',
                  body:
                    "Read an input with `input.value`. Listen for `\"input\"` (every keystroke) or `\"change\"` (when it loses focus). On the form, listen for `\"submit\"` and call `e.preventDefault()` to handle it with JavaScript instead of a page reload.",
                  terms: [
                    { term: 'input.value', definition: 'The current text/value of a form control.' },
                    { term: 'submit event', definition: 'Fires when a form is submitted; often prevented to handle in JS.' },
                  ],
                },
                {
                  id: 'd5c3s1-2',
                  kind: 'example',
                  title: 'Handling Submit',
                  emoji: '📨',
                  body:
                    "```\nform.addEventListener(\"submit\", (e) => {\n  e.preventDefault()\n  const data = new FormData(form)\n  console.log(data.get(\"email\"))\n})\n```\n\n`FormData` collects all fields at once — handy for many inputs.",
                },
                {
                  id: 'd5c3s1-3',
                  kind: 'tip',
                  title: 'Gotcha: Always Re-validate',
                  emoji: '⚠️',
                  body:
                    "Client-side validation improves UX but is never security. Users can bypass it. Always re-validate on the server. Treat browser validation as a convenience, not a guarantee.",
                },
                {
                  id: 'd5c3s1-4',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Why call `e.preventDefault()` in a submit handler?',
                  options: [
                    { id: 'a', text: 'To clear the form.', correct: false },
                    { id: 'b', text: 'To stop the default page reload so JS can handle the data.', correct: true },
                    { id: 'c', text: 'To validate automatically.', correct: false },
                    { id: 'd', text: 'To submit faster.', correct: false },
                  ],
                  explanation:
                    "Forms reload the page by default on submit. `preventDefault` stops that so you can process the data with JavaScript (e.g. send a fetch request).",
                },
              ],
            },
            {
              id: 'd5c3s2',
              title: 'localStorage',
              summary: "Saving data that survives a refresh.",
              cards: [
                {
                  id: 'd5c3s2-1',
                  kind: 'concept',
                  title: 'Persistent Key/Value',
                  emoji: '💾',
                  body:
                    "`localStorage` stores string key/value pairs that persist across reloads and browser restarts. Use `setItem(key, value)`, `getItem(key)`, `removeItem(key)`, and `clear()`. `sessionStorage` is the same but cleared when the tab closes.",
                  terms: [
                    { term: 'localStorage', definition: 'Browser storage for string data that persists across sessions.' },
                    { term: 'sessionStorage', definition: 'Like localStorage but cleared when the tab closes.' },
                  ],
                },
                {
                  id: 'd5c3s2-2',
                  kind: 'example',
                  title: 'Store an Object',
                  emoji: '📦',
                  body:
                    "```\nlocalStorage.setItem(\"user\", JSON.stringify({ id: 1 }))\nconst user = JSON.parse(localStorage.getItem(\"user\"))\n```\n\nValues are strings only, so stringify objects going in and parse them coming out.",
                },
                {
                  id: 'd5c3s2-3',
                  kind: 'tip',
                  title: 'Gotcha: Strings Only & Limits',
                  emoji: '⚠️',
                  body:
                    "`localStorage` holds only strings (numbers become `\"5\"`), is synchronous (can block on big writes), caps around 5MB, and is readable by any script on the page — never store secrets or tokens there.",
                },
                {
                  id: 'd5c3s2-4',
                  kind: 'diagram',
                  title: 'Storage Compared',
                  emoji: '📊',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'localStorage', emoji: '💾', items: ['Persists', 'Across sessions', '~5MB strings'] },
                      { title: 'sessionStorage', emoji: '🗂️', items: ['Per tab', 'Cleared on close', '~5MB strings'] },
                      { title: 'Cookies', emoji: '🍪', items: ['Sent to server', 'Small (~4KB)', 'Has expiry'] },
                    ],
                  },
                },
                {
                  id: 'd5c3s2-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'What type of data can `localStorage` store directly?',
                  options: [
                    { id: 'a', text: 'Any JavaScript object.', correct: false },
                    { id: 'b', text: 'Strings only.', correct: true },
                    { id: 'c', text: 'Numbers only.', correct: false },
                    { id: 'd', text: 'Functions.', correct: false },
                  ],
                  explanation:
                    "`localStorage` stores strings. To save objects, `JSON.stringify` them when writing and `JSON.parse` when reading.",
                },
              ],
            },
          ],
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 6 — Modern JS & Patterns
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd6',
      title: 'Modern JS & Patterns',
      emoji: '✨',
      description:
        "Level up: ES modules, classes and prototypes, prototypal inheritance, immutability, pure functions, error objects, newer language features, and tooling.",
      chapters: [
        {
          id: 'd6c1',
          title: 'Modules & Classes',
          emoji: '🧩',
          description: "Organizing code and modeling things with classes.",
          sections: [
            {
              id: 'd6c1s1',
              title: 'ES Modules',
              summary: "Splitting code with import and export.",
              cards: [
                {
                  id: 'd6c1s1-1',
                  kind: 'concept',
                  title: 'import / export',
                  emoji: '📦',
                  body:
                    "**Modules** let each file expose values with `export` and pull them in with `import`. A **named export** can have many per file: `export function add() {}`. A **default export** is one per file: `export default App`.\n\nModules have their own scope — no more global pollution.",
                  terms: [
                    { term: 'Named export', definition: 'An export referenced by its exact name; many allowed per module.' },
                    { term: 'Default export', definition: 'A single primary export per module, imported under any name.' },
                  ],
                },
                {
                  id: 'd6c1s1-2',
                  kind: 'example',
                  title: 'Importing',
                  emoji: '📥',
                  body:
                    "```\n// math.js\nexport const add = (a, b) => a + b\nexport default function mul(a, b) { return a * b }\n\n// app.js\nimport mul, { add } from \"./math.js\"\n```\n\nNamed imports use braces; the default import does not.",
                },
                {
                  id: 'd6c1s1-3',
                  kind: 'compare',
                  title: 'ESM vs CommonJS',
                  emoji: '⚖️',
                  compare: {
                    headers: ['Aspect', 'ES Modules', 'CommonJS'],
                    rows: [
                      ['Syntax', 'import / export', 'require / module.exports'],
                      ['Loading', 'Static, async', 'Dynamic, sync'],
                      ['Environment', 'Browsers & Node', 'Mostly Node (legacy)'],
                      ['Tree-shaking', 'Yes', 'Harder'],
                    ],
                  },
                },
                {
                  id: 'd6c1s1-4',
                  kind: 'tip',
                  title: 'Gotcha: File Extensions',
                  emoji: '⚠️',
                  body:
                    "In native browser ESM and modern Node, import paths often need the file extension (`./math.js`). Bundlers may let you omit it, but relying on that can break in other environments. Be explicit when in doubt.",
                },
                {
                  id: 'd6c1s1-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'How many default exports can a single module have?',
                  options: [
                    { id: 'a', text: 'As many as you like.', correct: false },
                    { id: 'b', text: 'Exactly one.', correct: true },
                    { id: 'c', text: 'Zero — only named exports exist.', correct: false },
                    { id: 'd', text: 'Two.', correct: false },
                  ],
                  explanation:
                    "A module can have at most one default export, but any number of named exports.",
                },
              ],
            },
            {
              id: 'd6c1s2',
              title: 'Classes & Prototypes',
              summary: "Modeling objects and how inheritance really works.",
              cards: [
                {
                  id: 'd6c1s2-1',
                  kind: 'concept',
                  title: 'Classes',
                  emoji: '🏛️',
                  body:
                    "A **class** is a template for objects. The `constructor` runs on `new`, methods are shared, and `extends` plus `super` set up inheritance. Under the hood, classes are syntactic sugar over JavaScript's prototype system.",
                  terms: [
                    { term: 'Class', definition: 'A template defining the shape and behavior of objects.' },
                    { term: 'constructor', definition: 'The method that initializes a new instance when called with new.' },
                  ],
                },
                {
                  id: 'd6c1s2-2',
                  kind: 'example',
                  title: 'A Class with Inheritance',
                  emoji: '🐶',
                  body:
                    "```\nclass Animal {\n  constructor(name) { this.name = name }\n  speak() { return this.name + \" makes a sound\" }\n}\nclass Dog extends Animal {\n  speak() { return this.name + \" barks\" }\n}\nnew Dog(\"Rex\").speak() // \"Rex barks\"\n```",
                },
                {
                  id: 'd6c1s2-3',
                  kind: 'concept',
                  title: 'The Prototype Chain',
                  emoji: '🔗',
                  body:
                    "Every object has a hidden link to a **prototype** object. When you read a property, JS checks the object, then its prototype, then *that* prototype — the **prototype chain** — until it finds it or hits `null`. This is how shared methods work without copying them.",
                  terms: [
                    { term: 'Prototype', definition: 'An object that another object delegates to for missing properties.' },
                    { term: 'Prototype chain', definition: 'The linked series of prototypes searched during property lookup.' },
                  ],
                },
                {
                  id: 'd6c1s2-4',
                  kind: 'analogy',
                  title: 'Ask Your Parents',
                  emoji: '👪',
                  body:
                    "Looking up a property is like a kid asking for something. If they do not have it, they ask their parent (the prototype). Still nothing? Ask the grandparent. The search climbs the family tree (the chain) until someone has it — or you reach the top with no answer (`null`).",
                },
                {
                  id: 'd6c1s2-5',
                  kind: 'diagram',
                  title: 'Prototype Chain',
                  emoji: '🪜',
                  diagram: {
                    type: 'stack',
                    nodes: [
                      { label: 'dog instance', sublabel: 'own props', emoji: '🐶' },
                      { label: 'Dog.prototype', sublabel: 'bark()', emoji: '🦴' },
                      { label: 'Animal.prototype', sublabel: 'speak()', emoji: '🐾' },
                      { label: 'Object.prototype', sublabel: 'toString()', emoji: '🧱' },
                    ],
                  },
                },
                {
                  id: 'd6c1s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'When you read a property missing on an object, what does JS do?',
                  options: [
                    { id: 'a', text: 'Immediately returns undefined.', correct: false },
                    { id: 'b', text: 'Walks up the prototype chain looking for it.', correct: true },
                    { id: 'c', text: 'Throws a ReferenceError.', correct: false },
                    { id: 'd', text: 'Copies it from the parent class.', correct: false },
                  ],
                  explanation:
                    "JavaScript searches the object, then each prototype up the chain, until it finds the property or reaches `null` (then returns `undefined`).",
                },
              ],
            },
          ],
        },
        {
          id: 'd6c2',
          title: 'Functional & Defensive Patterns',
          emoji: '🧪',
          description: "Immutability, pure functions, and handling errors well.",
          sections: [
            {
              id: 'd6c2s1',
              title: 'Pure Functions & Immutability',
              summary: "Predictable code that is easy to test.",
              cards: [
                {
                  id: 'd6c2s1-1',
                  kind: 'concept',
                  title: 'Pure Functions',
                  emoji: '💧',
                  body:
                    "A **pure function** always returns the same output for the same input and has no **side effects** (no mutating outside state, no I/O). Pure functions are easy to test, cache, and reason about.\n\n`(a, b) => a + b` is pure; a function that logs or edits a global is not.",
                  terms: [
                    { term: 'Pure function', definition: 'A function with no side effects that returns the same output for the same input.' },
                    { term: 'Side effect', definition: 'Any observable change outside the function, like mutating state or I/O.' },
                  ],
                },
                {
                  id: 'd6c2s1-2',
                  kind: 'concept',
                  title: 'Immutability',
                  emoji: '🧊',
                  body:
                    "**Immutability** means not changing data in place; instead you create new copies with updates. Use spread (`{ ...obj, x: 1 }`) or array methods that return new arrays (`map`, `filter`, `concat`) rather than mutating ones (`push`, `splice`, `sort`).",
                  terms: [
                    { term: 'Immutability', definition: 'Treating data as unchangeable, producing new copies for updates.' },
                  ],
                },
                {
                  id: 'd6c2s1-3',
                  kind: 'example',
                  title: 'Pure vs Impure',
                  emoji: '⚖️',
                  body:
                    "```\n// pure\nconst addItem = (arr, x) => [...arr, x]\n\n// impure (mutates input)\nconst addItemBad = (arr, x) => { arr.push(x); return arr }\n```\n\nThe pure version leaves the original `arr` untouched.",
                },
                {
                  id: 'd6c2s1-4',
                  kind: 'analogy',
                  title: 'A Vending Machine',
                  emoji: '🥤',
                  body:
                    "A pure function is a vending machine: put in the same coins and code, get the same snack every time, with nothing else changing. An impure one is a machine that also occasionally re-arranges the whole store — unpredictable and hard to trust.",
                },
                {
                  id: 'd6c2s1-5',
                  kind: 'tip',
                  title: 'Gotcha: Sort Mutates',
                  emoji: '⚠️',
                  body:
                    "`arr.sort()` and `arr.reverse()` mutate the original array in place and return it. If you need to keep the original, copy first: `[...arr].sort()`. Modern JS also offers non-mutating `toSorted` and `toReversed`.",
                },
                {
                  id: 'd6c2s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Which of these makes a function impure?',
                  options: [
                    { id: 'a', text: 'Returning a computed value.', correct: false },
                    { id: 'b', text: 'Mutating a global variable inside it.', correct: true },
                    { id: 'c', text: 'Taking two arguments.', correct: false },
                    { id: 'd', text: 'Using a local variable.', correct: false },
                  ],
                  explanation:
                    "A side effect like mutating external state makes a function impure. Pure functions only compute and return, touching nothing outside.",
                },
              ],
            },
            {
              id: 'd6c2s2',
              title: 'Errors & New Features',
              summary: "Error objects, throwing, and ES2020+ goodies.",
              cards: [
                {
                  id: 'd6c2s2-1',
                  kind: 'concept',
                  title: 'Error Objects',
                  emoji: '🚨',
                  body:
                    "Throw errors with `throw new Error(\"message\")`. Catch them in `try/catch`. An `Error` has `.name`, `.message`, and `.stack`. You can create custom errors by extending `Error`, useful for distinguishing failure types.",
                  terms: [
                    { term: 'Error', definition: 'A built-in object describing a runtime problem, with a message and stack.' },
                    { term: 'throw', definition: 'The statement that raises an exception to be caught upstream.' },
                  ],
                },
                {
                  id: 'd6c2s2-2',
                  kind: 'example',
                  title: 'Throw & Catch',
                  emoji: '🪤',
                  body:
                    "```\nfunction divide(a, b) {\n  if (b === 0) throw new Error(\"Cannot divide by zero\")\n  return a / b\n}\ntry {\n  divide(1, 0)\n} catch (e) {\n  console.log(e.message) // Cannot divide by zero\n}\n```",
                },
                {
                  id: 'd6c2s2-3',
                  kind: 'concept',
                  title: 'ES2020+ Highlights',
                  emoji: '🆕',
                  body:
                    "Recent JS adds:\n\n- Optional chaining `?.` and nullish coalescing `??`.\n- `Array.prototype.at(-1)` for the last element.\n- `Object.hasOwn(obj, key)` (safer than `hasOwnProperty`).\n- Logical assignment `??=`, `||=`, `&&=`.\n- Top-level `await` in modules.",
                  terms: [
                    { term: 'Logical assignment', definition: 'Operators like ??= that assign only under a logical condition.' },
                  ],
                },
                {
                  id: 'd6c2s2-4',
                  kind: 'tip',
                  title: 'Gotcha: Swallowing Errors',
                  emoji: '⚠️',
                  body:
                    "An empty `catch {}` hides bugs — errors vanish with no trace. At minimum log the error, and only catch what you can actually handle. Let unexpected errors bubble up rather than silencing them.",
                },
                {
                  id: 'd6c2s2-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'What property of an Error holds the human-readable description?',
                  options: [
                    { id: 'a', text: 'error.code', correct: false },
                    { id: 'b', text: 'error.message', correct: true },
                    { id: 'c', text: 'error.text', correct: false },
                    { id: 'd', text: 'error.detail', correct: false },
                  ],
                  explanation:
                    "`error.message` holds the description you passed to `new Error(...)`. `error.name` holds the type and `error.stack` the trace.",
                },
              ],
            },
          ],
        },
        {
          id: 'd6c3',
          title: 'Tooling Overview',
          emoji: '🧰',
          description: "A quick tour of the tools around modern JavaScript.",
          sections: [
            {
              id: 'd6c3s1',
              title: 'The Ecosystem',
              summary: "Package managers, bundlers, transpilers, and types.",
              cards: [
                {
                  id: 'd6c3s1-1',
                  kind: 'concept',
                  title: 'npm & package.json',
                  emoji: '📚',
                  body:
                    "**npm** (or pnpm/yarn) installs third-party packages into `node_modules`. `package.json` lists your dependencies and scripts (`npm run build`). A lockfile pins exact versions so installs are reproducible.",
                  terms: [
                    { term: 'npm', definition: 'The default Node package manager for installing libraries.' },
                    { term: 'package.json', definition: 'The manifest listing a project dependencies and scripts.' },
                  ],
                },
                {
                  id: 'd6c3s1-2',
                  kind: 'concept',
                  title: 'Bundlers & Transpilers',
                  emoji: '🏗️',
                  body:
                    "A **bundler** (Vite, webpack, esbuild) combines many modules into optimized files for the browser. A **transpiler** (Babel, TypeScript) converts newer or typed syntax into widely supported JavaScript. Together they let you write modern code that runs everywhere.",
                  terms: [
                    { term: 'Bundler', definition: 'A tool that combines and optimizes modules into deployable files.' },
                    { term: 'Transpiler', definition: 'A tool that converts one form of source code into another, like TS to JS.' },
                  ],
                },
                {
                  id: 'd6c3s1-3',
                  kind: 'compare',
                  title: 'JavaScript vs TypeScript',
                  emoji: '⚖️',
                  compare: {
                    headers: ['Aspect', 'JavaScript', 'TypeScript'],
                    rows: [
                      ['Types', 'Dynamic', 'Static, checked'],
                      ['Runs directly', 'Yes', 'Compiles to JS first'],
                      ['Catches type bugs', 'At runtime', 'At build time'],
                      ['Tooling/autocomplete', 'Good', 'Excellent'],
                    ],
                  },
                },
                {
                  id: 'd6c3s1-4',
                  kind: 'tip',
                  title: 'Tip: Linters & Formatters',
                  emoji: '💡',
                  body:
                    "A **linter** (ESLint) flags likely bugs and bad patterns; a **formatter** (Prettier) auto-styles your code so the team stops arguing about spacing. Set both up early — they catch mistakes before they reach review.",
                },
                {
                  id: 'd6c3s1-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'What does a bundler primarily do?',
                  options: [
                    { id: 'a', text: 'Run unit tests.', correct: false },
                    { id: 'b', text: 'Combine and optimize modules into files for the browser.', correct: true },
                    { id: 'c', text: 'Install packages.', correct: false },
                    { id: 'd', text: 'Add type checking.', correct: false },
                  ],
                  explanation:
                    "A bundler merges your many module files into optimized bundles the browser can load efficiently. Installing packages is npm's job; type checking is TypeScript's.",
                },
              ],
            },
          ],
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 7 — Interview Prep
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd7',
      title: 'Interview Prep',
      emoji: '🎤',
      description:
        "The questions interviewers actually ask — with model answers, likely follow-ups, and a rapid-fire quiz to test your reflexes.",
      chapters: [
        {
          id: 'd7c1',
          title: 'Core Concept Questions',
          emoji: '💬',
          description: "The classics: closures, hoisting, this, the event loop, and more.",
          sections: [
            {
              id: 'd7c1s1',
              title: 'Functions & Scope Questions',
              summary: "Closures, hoisting, this, and var/let/const.",
              cards: [
                {
                  id: 'd7c1s1-1',
                  kind: 'qa',
                  title: 'Closures',
                  emoji: '🔒',
                  question: 'What is a closure and why is it useful?',
                  body:
                    "A **closure** is a function bundled with the variables from the scope where it was created, which it keeps access to even after that outer scope has returned. This happens because JavaScript uses lexical scoping. Closures are useful for **data privacy** (variables hidden from outside but usable by the inner function), **factory functions** that pre-configure behavior, and **stateful callbacks** like event handlers or a counter. For example, a `makeCounter` returns a function that keeps incrementing a private `count` that nothing else can touch.",
                  terms: [
                    { term: 'Closure', definition: 'A function plus the captured variables from its defining scope.' },
                    { term: 'Lexical scope', definition: 'Scope determined by where code is written.' },
                  ],
                  followUps: [
                    'Can you write a counter using a closure?',
                    'How do closures cause memory leaks?',
                    'How does the var-in-a-loop bug relate to closures?',
                  ],
                },
                {
                  id: 'd7c1s1-2',
                  kind: 'qa',
                  title: 'Hoisting',
                  emoji: '🎈',
                  question: 'Explain hoisting in JavaScript.',
                  body:
                    "**Hoisting** is JavaScript moving declarations to the top of their scope before executing code. Function *declarations* are hoisted fully, so you can call them before their line. `var` is hoisted but initialized to `undefined`, so reading it early gives `undefined`, not an error. `let` and `const` are also hoisted, but they sit in the **Temporal Dead Zone** until their declaration runs — accessing them early throws a `ReferenceError`. Note that only declarations move; assignments stay put.",
                  terms: [
                    { term: 'Hoisting', definition: 'Moving declarations to the top of their scope at compile time.' },
                    { term: 'Temporal Dead Zone', definition: 'Where a let/const exists but cannot yet be accessed.' },
                  ],
                  followUps: [
                    'Why does a `let` access before declaration throw but `var` does not?',
                    'Are function expressions hoisted?',
                  ],
                },
                {
                  id: 'd7c1s1-3',
                  kind: 'qa',
                  title: 'The this Keyword',
                  emoji: '👉',
                  question: 'How is the value of `this` determined?',
                  body:
                    "`this` depends on **how a function is called**, not where it is defined (except arrows). In a method call `obj.fn()`, `this` is `obj`. Called as a plain function, `this` is `undefined` in strict mode or the global object otherwise. With `new`, `this` is the brand-new instance. `call`, `apply`, and `bind` set `this` explicitly. **Arrow functions** are the exception: they have no own `this` and inherit it from the enclosing lexical scope, which is why they are great for callbacks but poor as object methods.",
                  terms: [
                    { term: 'this', definition: 'A reference to the function execution context.' },
                    { term: 'bind', definition: 'Returns a new function with this permanently set.' },
                  ],
                  followUps: [
                    'What is `this` inside an arrow function?',
                    'How do call, apply, and bind differ?',
                    'Why might a callback lose its `this`?',
                  ],
                },
                {
                  id: 'd7c1s1-4',
                  kind: 'qa',
                  title: 'var, let, const',
                  emoji: '📦',
                  question: 'What are the differences between var, let, and const?',
                  body:
                    "`var` is **function-scoped**, hoisted as `undefined`, and can be redeclared — it is legacy and best avoided. `let` is **block-scoped**, can be reassigned but not redeclared, and lives in the Temporal Dead Zone until declared. `const` is also block-scoped but **cannot be reassigned**. Crucially, `const` does not freeze objects: you can still mutate an array or object held by a `const`, you just cannot point it at a new value. The modern guideline is `const` by default, `let` when you must reassign, and never `var`.",
                  terms: [
                    { term: 'Block scope', definition: 'Visibility limited to the enclosing { } block.' },
                  ],
                  followUps: [
                    'Does `const` make an object immutable?',
                    'Why does `let` fix the classic loop-closure bug?',
                  ],
                },
                {
                  id: 'd7c1s1-5',
                  kind: 'qa',
                  title: 'Currying',
                  emoji: '🍛',
                  question: 'What is currying?',
                  body:
                    "**Currying** transforms a function that takes multiple arguments into a sequence of functions each taking one argument. Instead of `add(1, 2, 3)`, you call `add(1)(2)(3)`. Each call returns a new function (a closure) that remembers the earlier arguments until all are supplied. Currying enables **partial application** — pre-filling some arguments to create specialized functions, like `const add5 = add(5)`. It is common in functional libraries and makes building reusable, configurable helpers clean and composable.",
                  terms: [
                    { term: 'Currying', definition: 'Turning an n-argument function into nested single-argument functions.' },
                    { term: 'Partial application', definition: 'Fixing some arguments to produce a more specific function.' },
                  ],
                  followUps: [
                    'How is currying different from partial application?',
                    'How would you implement a generic curry function?',
                  ],
                },
              ],
            },
            {
              id: 'd7c1s2',
              title: 'Async & Object Questions',
              summary: "Event loop, promises vs callbacks, prototypal inheritance, and copies.",
              cards: [
                {
                  id: 'd7c1s2-1',
                  kind: 'qa',
                  title: 'The Event Loop',
                  emoji: '🔄',
                  question: 'How does the JavaScript event loop work?',
                  body:
                    "JavaScript is single-threaded with one **call stack**. When it hits async work (timers, fetch), it hands that to the **Web APIs**, which keep running while the stack continues. When an async task finishes, its callback is placed in a **queue**. The **event loop** repeatedly checks: if the call stack is empty, it moves the next callback onto the stack to run. There are two queues — **microtasks** (Promises) drain fully before each **macrotask** (setTimeout). This is how single-threaded JS stays responsive without blocking.",
                  terms: [
                    { term: 'Event loop', definition: 'Moves queued callbacks onto the stack when it is empty.' },
                    { term: 'Microtask', definition: 'A high-priority Promise callback drained before macrotasks.' },
                  ],
                  followUps: [
                    'What is the difference between a microtask and a macrotask?',
                    'Why does a resolved Promise run before setTimeout(0)?',
                    'Is JavaScript truly single-threaded?',
                  ],
                },
                {
                  id: 'd7c1s2-2',
                  kind: 'qa',
                  title: 'Promises vs Callbacks',
                  emoji: '🤝',
                  question: 'What advantages do Promises have over callbacks?',
                  body:
                    "Callbacks lead to deeply nested **callback hell** and scattered error handling. **Promises** flatten async flows into readable `.then` chains, where a single `.catch` handles errors from any step. They also have well-defined states (pending, fulfilled, rejected) and combinators like `Promise.all` and `race` for coordinating multiple async tasks. Building on Promises, `async/await` lets you write async code that reads top-to-bottom with normal `try/catch`. In short: Promises bring composability, cleaner error handling, and avoid the pyramid of doom.",
                  terms: [
                    { term: 'Promise', definition: 'An object representing a future async result.' },
                    { term: 'Callback hell', definition: 'Deeply nested callbacks that are hard to read.' },
                  ],
                  followUps: [
                    'What does Promise.all do if one promise rejects?',
                    'How does async/await relate to Promises?',
                  ],
                },
                {
                  id: 'd7c1s2-3',
                  kind: 'qa',
                  title: 'Prototypal Inheritance',
                  emoji: '🔗',
                  question: 'Explain prototypal inheritance.',
                  body:
                    "In JavaScript, objects inherit directly from other objects through a hidden link to a **prototype**. When you access a property, the engine checks the object itself, then its prototype, then that prototype's prototype — the **prototype chain** — until it finds the property or hits `null`. Shared methods live on the prototype, so all instances reuse them without copies. `class` syntax is just sugar over this: `extends` sets up the chain and `super` calls the parent. It differs from classical inheritance because there are no real classes underneath — only objects linking to objects.",
                  terms: [
                    { term: 'Prototype chain', definition: 'The linked prototypes searched during property lookup.' },
                  ],
                  followUps: [
                    'How do ES6 classes relate to prototypes?',
                    'What is the difference between `__proto__` and `prototype`?',
                  ],
                },
                {
                  id: 'd7c1s2-4',
                  kind: 'qa',
                  title: 'Deep vs Shallow Copy',
                  emoji: '🪞',
                  question: 'What is the difference between a deep copy and a shallow copy?',
                  body:
                    "A **shallow copy** duplicates only the top level; nested objects are still shared by reference, so mutating a nested value affects both copies. `{ ...obj }` and `Object.assign({}, obj)` make shallow copies. A **deep copy** recursively duplicates everything, so the copy is fully independent. Use `structuredClone(obj)` for a robust deep copy. The old `JSON.parse(JSON.stringify(obj))` trick works for plain data but drops functions and `undefined`, mangles dates, and throws on circular references. Reach for shallow copies when nesting does not matter, deep when it does.",
                  terms: [
                    { term: 'Shallow copy', definition: 'Top-level copy that still shares nested references.' },
                    { term: 'Deep copy', definition: 'A fully independent recursive duplicate.' },
                  ],
                  followUps: [
                    'What are the downsides of JSON.parse(JSON.stringify(...))?',
                    'How does structuredClone handle circular references?',
                  ],
                },
                {
                  id: 'd7c1s2-5',
                  kind: 'qa',
                  title: 'null vs undefined',
                  emoji: '🕳️',
                  question: 'What is the difference between null and undefined?',
                  body:
                    "`undefined` means a value has **not been assigned** — it is the default for uninitialized variables, missing object properties, and functions with no return. `null` is an **intentional empty value** that a developer sets deliberately. Both are falsy. `typeof undefined` is `\"undefined\"`, but `typeof null` is `\"object\"` (a historic bug). They are loosely equal (`null == undefined` is `true`) but strictly unequal (`null === undefined` is `false`). Rule of thumb: the engine gives you `undefined`; you assign `null` yourself.",
                  terms: [
                    { term: 'undefined', definition: 'A value not yet assigned; the default empty state.' },
                    { term: 'null', definition: 'An intentional absence of value.' },
                  ],
                  followUps: [
                    'What does `null == undefined` evaluate to?',
                    'When would you deliberately assign null?',
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'd7c2',
          title: 'Tricky / Gotcha Questions',
          emoji: '🃏',
          description: "Equality, copies, performance tricks, and the subtle stuff.",
          sections: [
            {
              id: 'd7c2s1',
              title: 'Equality & Comparison',
              summary: "== vs ===, pure functions, map vs forEach.",
              cards: [
                {
                  id: 'd7c2s1-1',
                  kind: 'qa',
                  title: '== vs ===',
                  emoji: '🟰',
                  question: 'What is the difference between == and ===?',
                  body:
                    "`===` is **strict equality**: it compares value *and* type with no conversion, so `1 === \"1\"` is `false`. `==` is **loose equality**: it coerces operands to a common type before comparing, so `1 == \"1\"` is `true`. Loose equality has surprising rules — `0 == \"\"` is `true`, `null == undefined` is `true`. Because of these gotchas, the strong convention is to **always use `===`** (and `!==`) and convert types explicitly when needed. The one common exception is `x == null` to check for both `null` and `undefined` at once.",
                  terms: [
                    { term: 'Strict equality', definition: '=== comparing value and type with no coercion.' },
                    { term: 'Loose equality', definition: '== comparing after type coercion.' },
                  ],
                  followUps: [
                    'When is `==` actually acceptable?',
                    'What does `NaN === NaN` return and why?',
                    'What is Object.is and how does it differ?',
                  ],
                },
                {
                  id: 'd7c2s1-2',
                  kind: 'qa',
                  title: 'Pure Functions',
                  emoji: '💧',
                  question: 'What is a pure function?',
                  body:
                    "A **pure function** satisfies two rules: given the same inputs it always returns the same output, and it produces **no side effects** — it does not mutate external state, perform I/O, or rely on anything outside its arguments. `(a, b) => a + b` is pure. A function that logs to the console, edits a global, or reads the current time is impure. Purity makes code **predictable, testable, cacheable (memoizable), and safe to parallelize**, which is why functional programming and frameworks like React lean on it heavily.",
                  terms: [
                    { term: 'Pure function', definition: 'Deterministic, side-effect-free function.' },
                    { term: 'Side effect', definition: 'An observable change outside the function.' },
                  ],
                  followUps: [
                    'Why are pure functions easier to test?',
                    'How does immutability support purity?',
                  ],
                },
                {
                  id: 'd7c2s1-3',
                  kind: 'qa',
                  title: 'map vs forEach',
                  emoji: '🔁',
                  question: 'What is the difference between map and forEach?',
                  body:
                    "Both iterate an array, but **`map` returns a new array** of the same length with each element transformed, while **`forEach` returns `undefined`** and is used only for side effects like logging or updating the DOM. Use `map` when you want a transformed result you will keep; use `forEach` when you just need to do something per item. Also, `map` is chainable (`.map().filter()`), and neither can `break` early — for that, use a `for...of` loop or `some`/`every`. Using `map` and ignoring its return value is a code smell.",
                  terms: [
                    { term: 'map', definition: 'Returns a new transformed array.' },
                    { term: 'forEach', definition: 'Runs a function per element, returns undefined.' },
                  ],
                  followUps: [
                    'Can you break out of a forEach loop early?',
                    'Which is better for transforming data into a new array?',
                  ],
                },
                {
                  id: 'd7c2s1-4',
                  kind: 'qa',
                  title: 'Microtask vs Macrotask',
                  emoji: '🚦',
                  question: 'What is the difference between a microtask and a macrotask?',
                  body:
                    "Both are queues the event loop pulls from, but with different priority. **Microtasks** — Promise callbacks (`.then`) and `queueMicrotask` — are high priority: after each chunk of synchronous code, the loop drains the *entire* microtask queue before doing anything else. **Macrotasks** — `setTimeout`, `setInterval`, I/O, UI events — run **one per loop iteration**, only after microtasks are empty. That is why a resolved Promise callback always runs before a `setTimeout(0)`. Watch out: an endless microtask chain can starve macrotasks and freeze rendering.",
                  terms: [
                    { term: 'Microtask', definition: 'Promise callback, drained fully each loop turn.' },
                    { term: 'Macrotask', definition: 'Timer or I/O callback, one per loop iteration.' },
                  ],
                  followUps: [
                    'Predict the output: console.log, setTimeout, Promise.then.',
                    'How could microtasks starve the event loop?',
                  ],
                },
              ],
            },
            {
              id: 'd7c2s2',
              title: 'Performance Patterns',
              summary: "Debounce, throttle, and event delegation conceptually.",
              cards: [
                {
                  id: 'd7c2s2-1',
                  kind: 'qa',
                  title: 'Debounce',
                  emoji: '⏱️',
                  question: 'What is debouncing and when would you use it?',
                  body:
                    "**Debouncing** delays running a function until a burst of events has stopped for a set quiet period. Every new event resets the timer, so the function fires only once after activity ends. Conceptually: \"wait until the user stops typing for 300ms, then search.\" It is ideal for search-as-you-type inputs, window-resize handlers, and autosave — anywhere you want to act on the *final* state rather than every intermediate event. Implementation uses a closure holding a timer id that you `clearTimeout` and reset on each call.",
                  terms: [
                    { term: 'Debounce', definition: 'Run a function only after events stop for a quiet period.' },
                  ],
                  followUps: [
                    'How does debounce differ from throttle?',
                    'How would you implement debounce with a closure?',
                  ],
                },
                {
                  id: 'd7c2s2-2',
                  kind: 'qa',
                  title: 'Throttle',
                  emoji: '🚰',
                  question: 'What is throttling and how does it differ from debouncing?',
                  body:
                    "**Throttling** guarantees a function runs at most once per fixed interval, no matter how often the event fires — for example, \"run this scroll handler at most every 100ms.\" Unlike **debouncing**, which waits for events to *stop* and then fires once, throttling fires **regularly during** a continuous stream of events. Use throttle for things that must update steadily — scroll position, drag tracking, analytics pings; use debounce when you only care about the final value — search input, resize end. Both rely on closures and timers to limit how often work happens.",
                  terms: [
                    { term: 'Throttle', definition: 'Run a function at most once per fixed interval.' },
                  ],
                  followUps: [
                    'Give a real use case for throttle vs debounce.',
                    'Can you combine leading and trailing calls?',
                  ],
                },
                {
                  id: 'd7c2s2-3',
                  kind: 'qa',
                  title: 'Event Delegation',
                  emoji: '🎟️',
                  question: 'What is event delegation and why use it?',
                  body:
                    "**Event delegation** attaches a single listener to a common parent instead of one listener per child. It works because events **bubble** up the DOM, so the parent receives events from any descendant; you inspect `event.target` to know which child was clicked. Benefits: fewer listeners (less memory), simpler cleanup, and — most importantly — it automatically handles **dynamically added** children without re-binding. It is the standard pattern for lists, tables, and menus where items come and go. The main caveat is making sure you match the right target, often with `target.closest(selector)`.",
                  terms: [
                    { term: 'Event delegation', definition: 'One parent listener handling many children via bubbling.' },
                    { term: 'Bubbling', definition: 'Events rising from target up through ancestors.' },
                  ],
                  followUps: [
                    'How does bubbling make delegation possible?',
                    'How do you identify which child triggered the event?',
                  ],
                },
                {
                  id: 'd7c2s2-4',
                  kind: 'qa',
                  title: 'Memoization',
                  emoji: '🧠',
                  question: 'What is memoization?',
                  body:
                    "**Memoization** is caching a function's results by its inputs so repeated calls with the same arguments return instantly instead of recomputing. You wrap the function with a cache (often a `Map`) keyed by the arguments; on a hit you return the stored result, on a miss you compute, store, then return. It only works safely for **pure functions**, since impure ones could return different results for the same inputs. It is a classic time-for-space trade-off, great for expensive calculations like recursive Fibonacci or heavy data transforms.",
                  terms: [
                    { term: 'Memoization', definition: 'Caching results by input to avoid recomputation.' },
                  ],
                  followUps: [
                    'Why must a memoized function be pure?',
                    'What data structure works well as the cache?',
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'd7c3',
          title: 'Rapid-fire Quiz',
          emoji: '⚡',
          description: "Quick multiple-choice questions to sharpen your instincts.",
          sections: [
            {
              id: 'd7c3s1',
              title: 'Rapid-fire Round',
              summary: "Test your reflexes across the whole path.",
              cards: [
                {
                  id: 'd7c3s1-1',
                  kind: 'quiz',
                  title: 'Output Order',
                  emoji: '🔢',
                  question: 'What is the output order of `console.log(1); setTimeout(()=>console.log(2),0); Promise.resolve().then(()=>console.log(3)); console.log(4);`?',
                  options: [
                    { id: 'a', text: '1, 2, 3, 4', correct: false },
                    { id: 'b', text: '1, 4, 3, 2', correct: true },
                    { id: 'c', text: '1, 4, 2, 3', correct: false },
                    { id: 'd', text: '1, 3, 4, 2', correct: false },
                  ],
                  explanation:
                    "Synchronous logs run first (1, 4). Then the microtask (Promise) prints 3. Finally the macrotask (setTimeout) prints 2.",
                },
                {
                  id: 'd7c3s1-2',
                  kind: 'quiz',
                  title: 'Coercion',
                  emoji: '🎢',
                  question: 'What is `[] + []`?',
                  options: [
                    { id: 'a', text: '"" (empty string)', correct: true },
                    { id: 'b', text: '0', correct: false },
                    { id: 'c', text: '"[object Object]"', correct: false },
                    { id: 'd', text: 'undefined', correct: false },
                  ],
                  explanation:
                    "With `+`, arrays are coerced to strings. An empty array becomes `\"\"`, so `\"\" + \"\"` is the empty string.",
                },
                {
                  id: 'd7c3s1-3',
                  kind: 'quiz',
                  title: 'typeof',
                  emoji: '🔍',
                  question: 'What is `typeof NaN`?',
                  options: [
                    { id: 'a', text: '"NaN"', correct: false },
                    { id: 'b', text: '"number"', correct: true },
                    { id: 'c', text: '"undefined"', correct: false },
                    { id: 'd', text: '"object"', correct: false },
                  ],
                  explanation:
                    "`NaN` (Not a Number) is ironically of type `\"number\"`. Use `Number.isNaN()` to test for it, since `NaN === NaN` is false.",
                },
                {
                  id: 'd7c3s1-4',
                  kind: 'quiz',
                  title: 'Scope',
                  emoji: '🪜',
                  question: 'Inside a `for (let i...)` loop, each setTimeout callback logs which value of i?',
                  options: [
                    { id: 'a', text: 'The final value after the loop ends.', correct: false },
                    { id: 'b', text: 'Its own per-iteration value.', correct: true },
                    { id: 'c', text: 'Always 0.', correct: false },
                    { id: 'd', text: 'undefined.', correct: false },
                  ],
                  explanation:
                    "`let` creates a fresh binding of `i` each iteration, so each callback captures its own value. With `var`, they would all share one and log the final value.",
                },
                {
                  id: 'd7c3s1-5',
                  kind: 'quiz',
                  title: 'Equality',
                  emoji: '🟰',
                  question: 'What does `null == undefined` evaluate to?',
                  options: [
                    { id: 'a', text: 'false', correct: false },
                    { id: 'b', text: 'true', correct: true },
                    { id: 'c', text: 'It throws.', correct: false },
                    { id: 'd', text: 'undefined', correct: false },
                  ],
                  explanation:
                    "Under loose equality, `null` and `undefined` are equal to each other (and only each other). With `===`, `null === undefined` is `false`.",
                },
                {
                  id: 'd7c3s1-6',
                  kind: 'quiz',
                  title: 'Arrays',
                  emoji: '📋',
                  question: 'Which array method mutates the original array?',
                  options: [
                    { id: 'a', text: 'map', correct: false },
                    { id: 'b', text: 'filter', correct: false },
                    { id: 'c', text: 'sort', correct: true },
                    { id: 'd', text: 'slice', correct: false },
                  ],
                  explanation:
                    "`sort` (and `reverse`, `push`, `splice`) mutates in place. `map`, `filter`, and `slice` all return new arrays without changing the original.",
                },
                {
                  id: 'd7c3s1-7',
                  kind: 'quiz',
                  title: 'Const',
                  emoji: '🔒',
                  question: 'Which statement about `const` is TRUE?',
                  options: [
                    { id: 'a', text: 'It deep-freezes objects.', correct: false },
                    { id: 'b', text: 'It prevents reassignment but allows mutation of the value.', correct: true },
                    { id: 'c', text: 'It is function-scoped like var.', correct: false },
                    { id: 'd', text: 'It can be redeclared in the same scope.', correct: false },
                  ],
                  explanation:
                    "`const` blocks reassigning the binding but does not freeze the object it points to — you can still mutate its contents. It is block-scoped.",
                },
                {
                  id: 'd7c3s1-8',
                  kind: 'quiz',
                  title: 'Functions',
                  emoji: '🏹',
                  question: 'What does an arrow function NOT have its own of?',
                  options: [
                    { id: 'a', text: 'Parameters', correct: false },
                    { id: 'b', text: 'A return value', correct: false },
                    { id: 'c', text: 'Its own `this`', correct: true },
                    { id: 'd', text: 'A function body', correct: false },
                  ],
                  explanation:
                    "Arrow functions have no own `this` (nor `arguments` or `prototype`); they inherit `this` from the enclosing scope, which makes them unsuitable as object methods.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
