import type { Certification } from '../types'

export const reactjs: Certification = {
  id: 'reactjs',
  kind: 'path',
  code: 'React',
  title: 'React with Hooks',
  shortTitle: 'React',
  provider: 'React',
  level: 'Intermediate',
  gradient: 'from-cyan-400 to-sky-500',
  icon: '⚛️',
  tagline: 'Build modern UIs with confidence.',
  description:
    "A friendly, hands-on path to modern React. This path assumes you are comfortable with JavaScript basics (variables, functions, arrays, objects, and arrow functions) and teaches React the way it is written today: function components and Hooks. You will learn JSX, props, state, the full Hooks toolkit, rendering and performance, real-app patterns, and finish with a focused interview-prep section.",
  examFacts: [
    { label: 'Level', value: 'Intermediate' },
    { label: 'Format', value: 'Self-paced cards' },
    { label: 'Topics', value: '6 domains' },
    { label: 'Includes', value: 'Interview prep 🎤' },
    { label: 'Prereq', value: 'JavaScript basics' },
  ],
  version: '1.0',
  lastUpdated: '2025-01-15',
  available: true,
  domains: [
    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 1 — React Fundamentals
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd1',
      title: 'React Fundamentals',
      emoji: '⚛️',
      description:
        "What React is and why it exists, the virtual DOM, JSX, components, props, composition, and rendering lists with keys.",
      chapters: [
        {
          id: 'd1c1',
          title: 'Why React & The Virtual DOM',
          emoji: '🌱',
          description: 'The mental model behind React and what makes it fast.',
          sections: [
            {
              id: 'd1c1s1',
              title: 'What & Why React',
              summary: 'The problem React solves and how it thinks about UI.',
              cards: [
                {
                  id: 'd1c1s1-1',
                  kind: 'concept',
                  title: 'What Is React?',
                  emoji: '⚛️',
                  body:
                    "**React** is a JavaScript library for building user interfaces out of small, reusable pieces called **components**. Instead of manually poking at the DOM, you describe what the UI should look like for a given **state**, and React figures out how to update the screen.\n\nThe core idea: **UI is a function of state**. Change the state, and React re-renders the parts that need to change.",
                  terms: [
                    { term: 'React', definition: 'A JavaScript library for building UIs from reusable components.' },
                    { term: 'Component', definition: 'A reusable, self-contained piece of UI, usually a function that returns JSX.' },
                    { term: 'State', definition: 'Data that can change over time and drives what the UI shows.' },
                  ],
                },
                {
                  id: 'd1c1s1-2',
                  kind: 'analogy',
                  title: 'A Smart To-Do List',
                  emoji: '📝',
                  body:
                    "Imagine a whiteboard where you only write the *final* list you want. A tireless assistant compares it to what is already on the board and erases or adds only the lines that differ — never rewriting the whole thing.\n\nThat assistant is React. You declare the result you want; React makes the smallest set of changes to get there.",
                },
                {
                  id: 'd1c1s1-3',
                  kind: 'concept',
                  title: 'Declarative vs Imperative',
                  emoji: '🧭',
                  body:
                    "With plain JavaScript you write **imperative** code: step-by-step DOM instructions like \"find this node, change its text, add a class.\"\n\nReact is **declarative**: you describe the end state (\"show these items, this button is disabled\") and let React handle the how. Declarative code is easier to read and reason about as apps grow.",
                  terms: [
                    { term: 'Declarative', definition: 'You describe what the UI should be; the library figures out how.' },
                    { term: 'Imperative', definition: 'You write explicit step-by-step instructions to mutate the DOM.' },
                  ],
                },
                {
                  id: 'd1c1s1-4',
                  kind: 'compare',
                  title: 'Imperative vs Declarative',
                  emoji: '⚖️',
                  compare: {
                    headers: ['Aspect', 'Imperative (vanilla JS)', 'Declarative (React)'],
                    rows: [
                      ['You write', 'How to change the DOM', 'What the UI should look like'],
                      ['Updates', 'Manual, error-prone', 'Automatic from state'],
                      ['Scales', 'Hard as UI grows', 'Stays readable'],
                    ],
                  },
                },
                {
                  id: 'd1c1s1-5',
                  kind: 'tip',
                  title: 'Library, Not Framework',
                  emoji: '💡',
                  body:
                    "React itself only handles the **view** layer. Routing, data fetching, and global state are add-ons you choose. That is why people pair React with libraries like React Router or tools like Vite. Do not expect React to do everything out of the box.",
                },
                {
                  id: 'd1c1s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'React is best described as which of the following?',
                  options: [
                    { id: 'a', text: 'A full backend framework with a database.', correct: false },
                    { id: 'b', text: 'A declarative library for building UIs from components.', correct: true },
                    { id: 'c', text: 'A CSS preprocessor.', correct: false },
                    { id: 'd', text: 'A language that replaces JavaScript.', correct: false },
                  ],
                  explanation:
                    "React is a declarative JavaScript library focused on the view layer. You build UIs from components, and React updates the DOM for you.",
                },
              ],
            },
            {
              id: 'd1c1s2',
              title: 'The Virtual DOM',
              summary: 'How React updates the screen efficiently.',
              cards: [
                {
                  id: 'd1c1s2-1',
                  kind: 'concept',
                  title: 'What Is the Virtual DOM?',
                  emoji: '🌳',
                  body:
                    "The **virtual DOM** is a lightweight JavaScript copy of the real DOM. When state changes, React builds a fresh virtual tree, **diffs** it against the previous one, and applies only the differences to the real DOM.\n\nTouching the real DOM is slow; comparing plain objects in memory is fast. This diff-then-patch approach is why React feels snappy.",
                  terms: [
                    { term: 'Virtual DOM', definition: 'An in-memory JS representation of the UI used to compute minimal real-DOM updates.' },
                    { term: 'Diffing', definition: 'Comparing the new virtual tree to the old one to find what changed.' },
                  ],
                },
                {
                  id: 'd1c1s2-2',
                  kind: 'analogy',
                  title: 'Editing a Draft',
                  emoji: '✏️',
                  body:
                    "Rewriting the real DOM for every change is like reprinting a whole book to fix one typo. The virtual DOM is like editing the draft in your word processor, then only printing the pages that actually changed. Same result, far less work.",
                },
                {
                  id: 'd1c1s2-3',
                  kind: 'diagram',
                  title: 'Render → Diff → Commit',
                  emoji: '🔁',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'State changes', emoji: '⚡' },
                      { label: 'Render new VDOM', emoji: '🌳' },
                      { label: 'Diff vs old', emoji: '🔍' },
                      { label: 'Commit to DOM', emoji: '🖥️' },
                    ],
                  },
                },
                {
                  id: 'd1c1s2-4',
                  kind: 'tip',
                  title: 'It Is Not Magic',
                  emoji: '🪄',
                  body:
                    "The virtual DOM is not always faster than hand-tuned DOM code; its real win is letting you write **declarative** code without sacrificing acceptable performance. Do not over-index on \"virtual DOM = fast\" in interviews — explain the diff-and-patch idea instead.",
                },
                {
                  id: 'd1c1s2-5',
                  kind: 'concept',
                  title: 'Render vs Commit',
                  emoji: '🧱',
                  body:
                    "React works in two phases. The **render phase** calls your components to build the virtual tree (no DOM changes yet). The **commit phase** applies the computed changes to the real DOM and runs effects.\n\nKnowing this split helps later: render must be pure, while side effects belong in the commit phase via `useEffect`.",
                  terms: [
                    { term: 'Render phase', definition: 'React calls components to build the virtual tree; must be pure.' },
                    { term: 'Commit phase', definition: 'React applies changes to the real DOM and runs effects.' },
                  ],
                },
                {
                  id: 'd1c1s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Why does React use a virtual DOM?',
                  options: [
                    { id: 'a', text: 'To avoid using JavaScript entirely.', correct: false },
                    { id: 'b', text: 'To compute the minimal set of real-DOM updates from a diff.', correct: true },
                    { id: 'c', text: 'To store data on the server.', correct: false },
                    { id: 'd', text: 'To make every update slower but safer.', correct: false },
                  ],
                  explanation:
                    "React diffs the new virtual tree against the old one and patches only what changed, avoiding expensive full-DOM rewrites.",
                },
              ],
            },
          ],
        },
        {
          id: 'd1c2',
          title: 'JSX & Components',
          emoji: '🧩',
          description: 'The syntax you write and the building blocks you compose.',
          sections: [
            {
              id: 'd1c2s1',
              title: 'JSX Basics',
              summary: 'HTML-like syntax that compiles to JavaScript.',
              cards: [
                {
                  id: 'd1c2s1-1',
                  kind: 'concept',
                  title: 'What Is JSX?',
                  emoji: '🧬',
                  body:
                    "**JSX** lets you write HTML-like markup inside JavaScript. It is not HTML and not a string — a build tool compiles it into `React.createElement` calls that return plain objects describing the UI.\n\nSo `<h1>Hi</h1>` becomes a function call. JSX is just syntax sugar that keeps markup and logic close together.",
                  terms: [
                    { term: 'JSX', definition: 'A syntax extension that lets you write markup inside JavaScript.' },
                    { term: 'React element', definition: 'A plain object describing what to render, produced from JSX.' },
                  ],
                },
                {
                  id: 'd1c2s1-2',
                  kind: 'example',
                  title: 'Embedding Expressions',
                  emoji: '💻',
                  body:
                    "Use curly braces to drop any JavaScript expression into JSX:\n\n`const name = \"Ada\"`\n\n`return <h1>Hello, {name}!</h1>`\n\nYou can put variables, function calls, and math inside `{}` — but statements like `if` or `for` are not allowed there. Use expressions instead.",
                },
                {
                  id: 'd1c2s1-3',
                  kind: 'tip',
                  title: 'JSX Gotchas',
                  emoji: '⚠️',
                  body:
                    "A few rules trip up newcomers:\n\n- Use `className` instead of `class`.\n- Use `htmlFor` instead of `for`.\n- Every component must return a **single** root element (or a Fragment).\n- Close every tag, even `<img />` and `<br />`.\n- Attributes are camelCase: `onClick`, `tabIndex`.",
                },
                {
                  id: 'd1c2s1-4',
                  kind: 'example',
                  title: 'A Tiny Component',
                  emoji: '🧱',
                  body:
                    "A component is just a function that returns JSX:\n\n`function Welcome() {`\n`  return <h1>Welcome!</h1>`\n`}`\n\nComponent names must start with a **capital letter** so React treats them as components, not as built-in HTML tags like `<div>`.",
                },
                {
                  id: 'd1c2s1-5',
                  kind: 'tip',
                  title: 'Capitalize Components',
                  emoji: '🔠',
                  body:
                    "If you write `<welcome />` (lowercase), React renders an unknown HTML tag and your component never runs. Always capitalize: `<Welcome />`. This is one of the most common beginner bugs.",
                },
                {
                  id: 'd1c2s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Which JSX attribute correctly sets a CSS class?',
                  options: [
                    { id: 'a', text: 'class="btn"', correct: false },
                    { id: 'b', text: 'className="btn"', correct: true },
                    { id: 'c', text: 'css="btn"', correct: false },
                    { id: 'd', text: 'style-class="btn"', correct: false },
                  ],
                  explanation:
                    "JSX uses `className` because `class` is a reserved word in JavaScript. Similarly, `for` becomes `htmlFor`.",
                },
              ],
            },
            {
              id: 'd1c2s2',
              title: 'Components & Props',
              summary: 'Passing data into components and composing them.',
              cards: [
                {
                  id: 'd1c2s2-1',
                  kind: 'concept',
                  title: 'Props: Inputs to Components',
                  emoji: '📦',
                  body:
                    "**Props** (short for properties) are the inputs you pass to a component, just like function arguments. They flow **down** from parent to child and are **read-only** — a component must never modify its own props.\n\n`function Greeting(props) {`\n`  return <p>Hi, {props.name}</p>`\n`}`",
                  terms: [
                    { term: 'Props', definition: 'Read-only inputs passed from a parent component to a child.' },
                    { term: 'One-way data flow', definition: 'Data flows down from parent to child via props.' },
                  ],
                },
                {
                  id: 'd1c2s2-2',
                  kind: 'example',
                  title: 'Destructuring Props',
                  emoji: '💻',
                  body:
                    "Most code destructures props for readability:\n\n`function Greeting({ name, role }) {`\n`  return <p>{name} — {role}</p>`\n`}`\n\nUsage: `<Greeting name=\"Ada\" role=\"Engineer\" />`. Strings use quotes; any other value uses braces, like `count={3}`.",
                },
                {
                  id: 'd1c2s2-3',
                  kind: 'concept',
                  title: 'Composition with children',
                  emoji: '🪆',
                  body:
                    "Anything you nest between a component's tags arrives as the special `children` prop. This is how you build flexible wrappers:\n\n`function Card({ children }) {`\n`  return <div className=\"card\">{children}</div>`\n`}`\n\nThen `<Card><h2>Title</h2></Card>` slots the heading inside. Composition beats deep configuration.",
                  terms: [
                    { term: 'children', definition: 'A special prop holding whatever is nested inside a component.' },
                    { term: 'Composition', definition: 'Building complex UIs by nesting and combining smaller components.' },
                  ],
                },
                {
                  id: 'd1c2s2-4',
                  kind: 'diagram',
                  title: 'Data Down, Events Up',
                  emoji: '🔃',
                  diagram: {
                    type: 'flow',
                    direction: 'vertical',
                    nodes: [
                      { label: 'Parent', sublabel: 'owns the data', emoji: '👆' },
                      { label: 'Props flow down', sublabel: 'parent → child', emoji: '⬇️' },
                      { label: 'Child', sublabel: 'renders + raises events', emoji: '🧩' },
                      { label: 'Callbacks flow up', sublabel: 'child → parent', emoji: '⬆️' },
                    ],
                  },
                },
                {
                  id: 'd1c2s2-5',
                  kind: 'tip',
                  title: 'Props Are Read-Only',
                  emoji: '🚫',
                  body:
                    "Never write `props.name = \"new\"`. Components must be **pure** with respect to props: given the same props, they render the same output. To change data, the owner of that data updates its state and passes new props down.",
                },
                {
                  id: 'd1c2s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'What can a component do with its props?',
                  options: [
                    { id: 'a', text: 'Read them, but not modify them.', correct: true },
                    { id: 'b', text: 'Freely reassign them to update the parent.', correct: false },
                    { id: 'c', text: 'Delete them to save memory.', correct: false },
                    { id: 'd', text: 'Nothing; props are server-only.', correct: false },
                  ],
                  explanation:
                    "Props are read-only inputs. A component reads them to render but must never mutate them; the parent owns and updates that data.",
                },
              ],
            },
          ],
        },
        {
          id: 'd1c3',
          title: 'Rendering UI',
          emoji: '🎨',
          description: 'Conditionals, lists, keys, and fragments.',
          sections: [
            {
              id: 'd1c3s1',
              title: 'Conditional Rendering',
              summary: 'Showing different UI based on state or props.',
              cards: [
                {
                  id: 'd1c3s1-1',
                  kind: 'concept',
                  title: 'Three Common Patterns',
                  emoji: '🔀',
                  body:
                    "You render conditionally with plain JavaScript inside JSX:\n\n- **Ternary** for either/or: `{isOn ? <On /> : <Off />}`\n- **Logical &&** to show or hide: `{hasError && <Error />}`\n- **Early return** when a whole component should not render.\n\nThere is no special `if` directive — it is just JavaScript expressions.",
                  terms: [
                    { term: 'Conditional rendering', definition: 'Choosing what to render based on state or props.' },
                    { term: 'Short-circuit', definition: 'Using && so the right side renders only when the left is truthy.' },
                  ],
                },
                {
                  id: 'd1c3s1-2',
                  kind: 'example',
                  title: 'Ternary in Action',
                  emoji: '💻',
                  body:
                    "`function Status({ online }) {`\n`  return <span>{online ? \"🟢 Online\" : \"⚪ Offline\"}</span>`\n`}`\n\nThe ternary returns one of two JSX values. Keep ternaries shallow — nesting them quickly becomes unreadable.",
                },
                {
                  id: 'd1c3s1-3',
                  kind: 'tip',
                  title: 'The 0 Trap',
                  emoji: '⚠️',
                  body:
                    "Beware `{count && <Badge />}`. If `count` is `0`, React renders the number `0` on screen instead of nothing! Guard with a real boolean: `{count > 0 && <Badge />}`. This is a classic and sneaky bug.",
                },
                {
                  id: 'd1c3s1-4',
                  kind: 'example',
                  title: 'Early Return',
                  emoji: '🚪',
                  body:
                    "When loading, you can bail out early:\n\n`function Profile({ user }) {`\n`  if (!user) return <Spinner />`\n`  return <h1>{user.name}</h1>`\n`}`\n\nEarly returns keep the main JSX clean and avoid deeply nested ternaries.",
                },
                {
                  id: 'd1c3s1-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Why can `{count && <Badge />}` render an unexpected `0`?',
                  options: [
                    { id: 'a', text: 'Because && returns the left value when it is falsy, and 0 is renderable.', correct: true },
                    { id: 'b', text: 'Because React converts numbers to strings randomly.', correct: false },
                    { id: 'c', text: 'Because Badge always renders 0.', correct: false },
                    { id: 'd', text: 'Because JSX cannot contain numbers.', correct: false },
                  ],
                  explanation:
                    "With &&, JavaScript returns the left operand when it is falsy. `0` is falsy but still a valid React child, so it prints. Use `count > 0 && ...`.",
                },
              ],
            },
            {
              id: 'd1c3s2',
              title: 'Lists, Keys & Fragments',
              summary: 'Rendering arrays correctly and grouping without extra nodes.',
              cards: [
                {
                  id: 'd1c3s2-1',
                  kind: 'concept',
                  title: 'Rendering Lists with map',
                  emoji: '📋',
                  body:
                    "To render a list, map an array to JSX elements:\n\n`{items.map((item) => (`\n`  <li key={item.id}>{item.label}</li>`\n`))}`\n\nEach element needs a **key** — a stable, unique identifier among siblings. Keys help React match items across renders.",
                  terms: [
                    { term: 'key', definition: 'A stable, unique identifier React uses to track list items across renders.' },
                    { term: 'map', definition: 'Array method used to transform data into a list of JSX elements.' },
                  ],
                },
                {
                  id: 'd1c3s2-2',
                  kind: 'concept',
                  title: 'Why Keys Matter',
                  emoji: '🔑',
                  body:
                    "Keys let React tell items apart between renders. With good keys, React can reorder, add, or remove items while preserving each one's state. Without stable keys it may re-create elements or mix up their state — causing flickers and lost input values.",
                  terms: [
                    { term: 'Reconciliation', definition: 'How React matches new elements to existing ones to decide what to update.' },
                  ],
                },
                {
                  id: 'd1c3s2-3',
                  kind: 'tip',
                  title: "Don't Use Index as Key",
                  emoji: '⚠️',
                  body:
                    "Using the array index as a key is fine only for static lists that never reorder. If items can be added, removed, or sorted, the index shifts and React mis-associates state. Prefer a stable id from your data, like `item.id`.",
                },
                {
                  id: 'd1c3s2-4',
                  kind: 'concept',
                  title: 'Fragments',
                  emoji: '🧷',
                  body:
                    "A component returns one root element. When you do not want an extra wrapper `<div>`, use a **Fragment**:\n\n`<>` and `</>`\n\nFragments group children without adding a node to the DOM. Use the full `<React.Fragment key={...}>` form when you need a key in a list.",
                  terms: [
                    { term: 'Fragment', definition: 'A wrapper that groups elements without rendering an extra DOM node.' },
                  ],
                },
                {
                  id: 'd1c3s2-5',
                  kind: 'example',
                  title: 'List + Fragment Together',
                  emoji: '💻',
                  body:
                    "`{users.map((u) => (`\n`  <li key={u.id}>{u.name}</li>`\n`))}`\n\nWrap the whole list in a parent (a `<ul>` or `<>...</>`). Keys go on the element directly inside `map`, not on the wrapper.",
                },
                {
                  id: 'd1c3s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'What is the safest choice for a list key?',
                  options: [
                    { id: 'a', text: 'The array index, always.', correct: false },
                    { id: 'b', text: 'A stable unique id from the data, like item.id.', correct: true },
                    { id: 'c', text: 'A random number generated each render.', correct: false },
                    { id: 'd', text: 'The item text, even if duplicates exist.', correct: false },
                  ],
                  explanation:
                    "A stable, unique id keeps each element matched across renders. Random keys re-create elements every render; indexes break when lists reorder.",
                },
              ],
            },
          ],
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 2 — State & Events
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd2',
      title: 'State & Events',
      emoji: '🎛️',
      description:
        "Making components interactive: useState, event handling, controlled forms, lifting state up, and immutable updates.",
      chapters: [
        {
          id: 'd2c1',
          title: 'useState & Events',
          emoji: '⚡',
          description: 'Adding memory and interactivity to components.',
          sections: [
            {
              id: 'd2c1s1',
              title: 'useState Basics',
              summary: 'Giving a component memory that triggers re-renders.',
              cards: [
                {
                  id: 'd2c1s1-1',
                  kind: 'concept',
                  title: 'What State Is',
                  emoji: '🧠',
                  body:
                    "**State** is data a component remembers between renders. When state changes, React re-renders the component to reflect it.\n\n`const [count, setCount] = useState(0)`\n\n`useState` returns the current value and a setter. Calling the setter schedules a re-render with the new value.",
                  terms: [
                    { term: 'useState', definition: 'A Hook that adds local state to a function component.' },
                    { term: 'Setter', definition: 'The function from useState used to update state and trigger a re-render.' },
                  ],
                },
                {
                  id: 'd2c1s1-2',
                  kind: 'analogy',
                  title: 'A Sticky Note',
                  emoji: '🗒️',
                  body:
                    "State is like a sticky note the component keeps on its monitor. Each render it reads the note. When you call the setter, you write a new note and ask React to redraw the screen. The component does not change the old note in place — it gets a fresh one next render.",
                },
                {
                  id: 'd2c1s1-3',
                  kind: 'example',
                  title: 'A Counter',
                  emoji: '💻',
                  body:
                    "`function Counter() {`\n`  const [count, setCount] = useState(0)`\n`  return <button onClick={() => setCount(count + 1)}>{count}</button>`\n`}`\n\nClicking updates state, React re-renders, and the button shows the new count.",
                },
                {
                  id: 'd2c1s1-4',
                  kind: 'tip',
                  title: 'Use the Updater Function',
                  emoji: '🔁',
                  body:
                    "When new state depends on old state, pass a function: `setCount((c) => c + 1)`. This avoids bugs from stale values when multiple updates batch together. Prefer the updater form whenever you compute from the previous value.",
                },
                {
                  id: 'd2c1s1-5',
                  kind: 'tip',
                  title: 'State Updates Are Not Instant',
                  emoji: '⏳',
                  body:
                    "After `setCount(count + 1)`, the `count` variable in that render does **not** change immediately. State updates are scheduled and applied on the next render. Reading `count` right after setting it gives the old value.",
                },
                {
                  id: 'd2c1s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Why prefer `setCount((c) => c + 1)` over `setCount(count + 1)`?',
                  options: [
                    { id: 'a', text: 'It is shorter to type.', correct: false },
                    { id: 'b', text: 'It uses the latest state, avoiding stale values when updates batch.', correct: true },
                    { id: 'c', text: 'It skips the re-render entirely.', correct: false },
                    { id: 'd', text: 'It mutates state directly.', correct: false },
                  ],
                  explanation:
                    "The updater form receives the most recent pending state, so chained or batched updates compute correctly instead of using a stale snapshot.",
                },
              ],
            },
            {
              id: 'd2c1s2',
              title: 'Handling Events',
              summary: 'Responding to clicks, typing, and submits.',
              cards: [
                {
                  id: 'd2c1s2-1',
                  kind: 'concept',
                  title: 'Event Handlers',
                  emoji: '🖱️',
                  body:
                    "You attach handlers with camelCase props that take a function:\n\n`<button onClick={handleClick}>Go</button>`\n\nPass the function, do not call it. `onClick={handleClick}` is right; `onClick={handleClick()}` runs it immediately during render, which is a common mistake.",
                  terms: [
                    { term: 'Event handler', definition: 'A function React calls when an event like a click fires.' },
                    { term: 'Synthetic event', definition: "React's cross-browser wrapper around the native DOM event." },
                  ],
                },
                {
                  id: 'd2c1s2-2',
                  kind: 'example',
                  title: 'Passing Arguments',
                  emoji: '💻',
                  body:
                    "To pass arguments, wrap in an arrow function:\n\n`<button onClick={() => removeItem(id)}>Delete</button>`\n\nThe arrow defers the call until the click happens. Writing `onClick={removeItem(id)}` would call it during render instead.",
                },
                {
                  id: 'd2c1s2-3',
                  kind: 'concept',
                  title: 'The Event Object',
                  emoji: '📨',
                  body:
                    "Handlers receive a **synthetic event** — a cross-browser wrapper around the native event. Use `e.preventDefault()` to stop default behavior (like a form reloading the page) and `e.target.value` to read input values.",
                  terms: [
                    { term: 'preventDefault', definition: "Stops the browser's default action for an event, like form submission reload." },
                  ],
                },
                {
                  id: 'd2c1s2-4',
                  kind: 'tip',
                  title: "Pass, Don't Call",
                  emoji: '⚠️',
                  body:
                    "The single most common event bug: `onClick={doThing()}` calls `doThing` during render and sets the result as the handler. Use `onClick={doThing}` or `onClick={() => doThing()}`. If your handler fires on load instead of on click, this is why.",
                },
                {
                  id: 'd2c1s2-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Which correctly passes an argument to a click handler?',
                  options: [
                    { id: 'a', text: 'onClick={remove(id)}', correct: false },
                    { id: 'b', text: 'onClick={() => remove(id)}', correct: true },
                    { id: 'c', text: 'onClick=remove(id)', correct: false },
                    { id: 'd', text: 'onClick={remove, id}', correct: false },
                  ],
                  explanation:
                    "Wrapping in an arrow defers the call until the click. Calling directly with `remove(id)` runs during render and stores the return value as the handler.",
                },
              ],
            },
          ],
        },
        {
          id: 'd2c2',
          title: 'Forms & Shared State',
          emoji: '📝',
          description: 'Controlled inputs, lifting state, immutability, and derived state.',
          sections: [
            {
              id: 'd2c2s1',
              title: 'Controlled Inputs & Forms',
              summary: 'Letting React state drive form fields.',
              cards: [
                {
                  id: 'd2c2s1-1',
                  kind: 'concept',
                  title: 'Controlled Components',
                  emoji: '🎚️',
                  body:
                    "A **controlled** input gets its value from state and updates state on every change:\n\n`<input value={name} onChange={(e) => setName(e.target.value)} />`\n\nState is the single source of truth. The input always shows exactly what state says.",
                  terms: [
                    { term: 'Controlled input', definition: 'A form field whose value is driven by React state.' },
                    { term: 'Source of truth', definition: 'The single place that holds the authoritative value.' },
                  ],
                },
                {
                  id: 'd2c2s1-2',
                  kind: 'compare',
                  title: 'Controlled vs Uncontrolled',
                  emoji: '⚖️',
                  compare: {
                    headers: ['Aspect', 'Controlled', 'Uncontrolled'],
                    rows: [
                      ['Value lives in', 'React state', 'The DOM'],
                      ['Read value via', 'state variable', 'a ref'],
                      ['Validation', 'Easy, on every keystroke', 'On submit / manual'],
                      ['Best for', 'Most forms', 'Simple or file inputs'],
                    ],
                  },
                },
                {
                  id: 'd2c2s1-3',
                  kind: 'concept',
                  title: 'Uncontrolled Inputs',
                  emoji: '🗂️',
                  body:
                    "An **uncontrolled** input keeps its value in the DOM; you read it with a `ref` when needed, often on submit. Use `defaultValue` for the initial value. File inputs are always uncontrolled. Controlled is the default choice; reach for uncontrolled to reduce re-renders or for `<input type=\"file\">`.",
                  terms: [
                    { term: 'Uncontrolled input', definition: 'A form field that stores its own value in the DOM, read via a ref.' },
                  ],
                },
                {
                  id: 'd2c2s1-4',
                  kind: 'example',
                  title: 'Handling Submit',
                  emoji: '💻',
                  body:
                    "`function Form() {`\n`  const [email, setEmail] = useState(\"\")`\n`  const onSubmit = (e) => { e.preventDefault(); send(email) }`\n`  return <form onSubmit={onSubmit}>...</form>`\n`}`\n\nCall `e.preventDefault()` so the browser does not reload the page.",
                },
                {
                  id: 'd2c2s1-5',
                  kind: 'tip',
                  title: 'Avoid the Read-Only Warning',
                  emoji: '⚠️',
                  body:
                    "If you set `value={name}` but forget `onChange`, React warns the field is read-only and typing does nothing. Always pair `value` with `onChange` for controlled inputs, or use `defaultValue` if you meant it to be uncontrolled.",
                },
                {
                  id: 'd2c2s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'In a controlled input, where does the value live?',
                  options: [
                    { id: 'a', text: 'In React state.', correct: true },
                    { id: 'b', text: 'Only in the DOM.', correct: false },
                    { id: 'c', text: 'In a cookie.', correct: false },
                    { id: 'd', text: 'It has no value.', correct: false },
                  ],
                  explanation:
                    "A controlled input reads its value from state and updates state on change, making React the single source of truth.",
                },
              ],
            },
            {
              id: 'd2c2s2',
              title: 'Lifting State, Immutability & Derived State',
              summary: 'Sharing state and updating it safely.',
              cards: [
                {
                  id: 'd2c2s2-1',
                  kind: 'concept',
                  title: 'Lifting State Up',
                  emoji: '⬆️',
                  body:
                    "When two components need the same data, move that state to their closest common parent and pass it down as props. This is **lifting state up**. The parent owns the data; children receive values and callbacks to request changes.",
                  terms: [
                    { term: 'Lifting state up', definition: 'Moving shared state to the closest common parent of the components that need it.' },
                  ],
                },
                {
                  id: 'd2c2s2-2',
                  kind: 'diagram',
                  title: 'Shared State in the Parent',
                  emoji: '🌲',
                  diagram: {
                    type: 'stack',
                    nodes: [
                      { label: 'Parent', sublabel: 'holds shared state', emoji: '🎛️' },
                      { label: 'Child A', sublabel: 'reads via props', emoji: '🧩' },
                      { label: 'Child B', sublabel: 'updates via callback', emoji: '🧩' },
                    ],
                  },
                },
                {
                  id: 'd2c2s2-3',
                  kind: 'concept',
                  title: 'Treat State as Immutable',
                  emoji: '🧊',
                  body:
                    "Never mutate state directly. Create a **new** object or array instead:\n\n`setItems([...items, newItem])`\n`setUser({ ...user, name: \"Ada\" })`\n\nReact decides whether to re-render by comparing references. Mutating in place keeps the same reference, so React may skip the update.",
                  terms: [
                    { term: 'Immutability', definition: 'Updating state by creating new values rather than mutating existing ones.' },
                    { term: 'Reference equality', definition: 'React compares object references to detect changes.' },
                  ],
                },
                {
                  id: 'd2c2s2-4',
                  kind: 'tip',
                  title: 'Spread to Update',
                  emoji: '⚠️',
                  body:
                    "Avoid `items.push(x)` then `setItems(items)` — same array reference, possibly no re-render. Use spreads or array methods that return new arrays: `[...items, x]`, `items.filter(...)`, `items.map(...)`. For nested objects, copy each level you change.",
                },
                {
                  id: 'd2c2s2-5',
                  kind: 'concept',
                  title: 'Derived State',
                  emoji: '🧮',
                  body:
                    "If a value can be **computed** from existing state or props, do not store it in its own state. Calculate it during render:\n\n`const total = items.reduce((s, i) => s + i.price, 0)`\n\nExtra state for derived values causes bugs when the two drift out of sync. Compute, don't duplicate.",
                  terms: [
                    { term: 'Derived state', definition: 'A value computed from existing state or props during render, not stored separately.' },
                  ],
                },
                {
                  id: 'd2c2s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Which is the correct way to add an item to a state array?',
                  options: [
                    { id: 'a', text: 'items.push(newItem); setItems(items)', correct: false },
                    { id: 'b', text: 'setItems([...items, newItem])', correct: true },
                    { id: 'c', text: 'items[items.length] = newItem', correct: false },
                    { id: 'd', text: 'setItems(items.push(newItem))', correct: false },
                  ],
                  explanation:
                    "Spreading into a new array gives React a new reference so it knows to re-render. push mutates in place and returns the new length, not the array.",
                },
              ],
            },
          ],
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 3 — Hooks In Depth (biggest: 3 chapters)
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd3',
      title: 'Hooks In Depth',
      emoji: '🪝',
      description:
        "The full Hooks toolkit: rules of Hooks, useEffect, useRef, useMemo, useCallback, useContext, useReducer, and writing your own custom Hooks.",
      chapters: [
        {
          id: 'd3c1',
          title: 'Rules & useEffect',
          emoji: '📏',
          description: 'How Hooks work and how to run side effects.',
          sections: [
            {
              id: 'd3c1s1',
              title: 'Rules of Hooks',
              summary: 'The two rules that keep Hooks working.',
              cards: [
                {
                  id: 'd3c1s1-1',
                  kind: 'concept',
                  title: 'What Is a Hook?',
                  emoji: '🪝',
                  body:
                    "A **Hook** is a special function (named `use...`) that lets function components tap into React features like state and lifecycle. `useState`, `useEffect`, and `useContext` are built-in Hooks. You can also write **custom Hooks** to reuse logic.",
                  terms: [
                    { term: 'Hook', definition: 'A use-prefixed function that lets components use React features.' },
                  ],
                },
                {
                  id: 'd3c1s1-2',
                  kind: 'concept',
                  title: 'The Two Rules',
                  emoji: '📏',
                  body:
                    "**1. Only call Hooks at the top level** — never inside loops, conditions, or nested functions.\n\n**2. Only call Hooks from React functions** — components or other Hooks, not regular JavaScript functions.\n\nReact relies on Hooks being called in the **same order** every render to match each one to its state.",
                  terms: [
                    { term: 'Rules of Hooks', definition: 'Call Hooks at the top level and only from React functions.' },
                  ],
                },
                {
                  id: 'd3c1s1-3',
                  kind: 'analogy',
                  title: 'Numbered Lockers',
                  emoji: '🔢',
                  body:
                    "React stores Hook state in numbered lockers, handing them out in call order. If you skip a Hook one render (say, behind an `if`), the locker numbers shift and React opens the wrong locker. That is why order must stay constant — same Hooks, same order, every time.",
                },
                {
                  id: 'd3c1s1-4',
                  kind: 'tip',
                  title: 'Conditional Hooks Break Things',
                  emoji: '⚠️',
                  body:
                    "Do not wrap a Hook in an `if`. Instead, call the Hook unconditionally and put the condition **inside** it: `useEffect(() => { if (ready) doThing() }, [ready])`. The ESLint plugin `react-hooks` catches most violations for you.",
                },
                {
                  id: 'd3c1s1-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Which is a valid place to call a Hook?',
                  options: [
                    { id: 'a', text: 'Inside an if statement.', correct: false },
                    { id: 'b', text: 'At the top level of a component or custom Hook.', correct: true },
                    { id: 'c', text: 'Inside a for loop.', correct: false },
                    { id: 'd', text: 'In a plain non-React utility function.', correct: false },
                  ],
                  explanation:
                    "Hooks must be called at the top level of a component or another Hook, in the same order every render, so React can track them.",
                },
              ],
            },
            {
              id: 'd3c1s2',
              title: 'useEffect Essentials',
              summary: 'Running side effects after render.',
              cards: [
                {
                  id: 'd3c1s2-1',
                  kind: 'concept',
                  title: 'What useEffect Does',
                  emoji: '🌊',
                  body:
                    "`useEffect` runs **side effects** after the render is committed to the screen — things like data fetching, subscriptions, timers, or manual DOM tweaks. It keeps render pure by moving these out of the render path.\n\n`useEffect(() => { /* effect */ }, [deps])`",
                  terms: [
                    { term: 'useEffect', definition: 'A Hook that runs side effects after render.' },
                    { term: 'Side effect', definition: 'Work that reaches outside React, like fetching or subscriptions.' },
                  ],
                },
                {
                  id: 'd3c1s2-2',
                  kind: 'concept',
                  title: 'The Dependency Array',
                  emoji: '📦',
                  body:
                    "The second argument controls when the effect re-runs:\n\n- `[]` → runs once after mount.\n- `[a, b]` → runs when `a` or `b` change.\n- omitted → runs after **every** render.\n\nList every value from the component that the effect uses, or you get stale data.",
                  terms: [
                    { term: 'Dependency array', definition: 'Values that, when changed, cause the effect to re-run.' },
                  ],
                },
                {
                  id: 'd3c1s2-3',
                  kind: 'concept',
                  title: 'Cleanup Functions',
                  emoji: '🧹',
                  body:
                    "Return a function from your effect to **clean up**. React runs it before the next effect and on unmount:\n\n`useEffect(() => {`\n`  const id = setInterval(tick, 1000)`\n`  return () => clearInterval(id)`\n`}, [])`\n\nCleanup prevents leaks from timers, subscriptions, and listeners.",
                  terms: [
                    { term: 'Cleanup function', definition: 'The function returned from an effect to undo subscriptions or timers.' },
                  ],
                },
                {
                  id: 'd3c1s2-4',
                  kind: 'diagram',
                  title: 'Effect Lifecycle',
                  emoji: '🔄',
                  diagram: {
                    type: 'cycle',
                    nodes: [
                      { label: 'Mount', sublabel: 'first render', emoji: '🌱' },
                      { label: 'Render', sublabel: 'compute UI', emoji: '🎨' },
                      { label: 'Run effect', sublabel: 'after commit', emoji: '🌊' },
                      { label: 'Cleanup', sublabel: 'before next / unmount', emoji: '🧹' },
                    ],
                  },
                },
                {
                  id: 'd3c1s2-5',
                  kind: 'tip',
                  title: 'Common useEffect Mistakes',
                  emoji: '⚠️',
                  body:
                    "Watch out for:\n\n- Missing dependencies → stale values.\n- Forgetting cleanup → leaks and duplicate listeners.\n- Putting an object/array literal in deps → new reference every render → infinite loop.\n- Using effects for things you could compute during render (derived state).",
                },
                {
                  id: 'd3c1s2-6',
                  kind: 'example',
                  title: 'Fetch on Mount',
                  emoji: '💻',
                  body:
                    "`useEffect(() => {`\n`  let active = true`\n`  fetch(url).then((r) => r.json()).then((d) => { if (active) setData(d) })`\n`  return () => { active = false }`\n`}, [url])`\n\nThe `active` flag avoids setting state after unmount; the effect re-runs when `url` changes.",
                },
                {
                  id: 'd3c1s2-7',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'An effect with `[]` as its dependency array runs when?',
                  options: [
                    { id: 'a', text: 'After every render.', correct: false },
                    { id: 'b', text: 'Once, after the first render (mount).', correct: true },
                    { id: 'c', text: 'Never.', correct: false },
                    { id: 'd', text: 'Only on unmount.', correct: false },
                  ],
                  explanation:
                    "An empty dependency array means no values change to retrigger it, so it runs once after mount; its cleanup runs on unmount.",
                },
              ],
            },
          ],
        },
        {
          id: 'd3c2',
          title: 'Refs & Memoization',
          emoji: '🎯',
          description: 'useRef, useMemo, and useCallback.',
          sections: [
            {
              id: 'd3c2s1',
              title: 'useRef',
              summary: 'Mutable values and DOM access that survive renders.',
              cards: [
                {
                  id: 'd3c2s1-1',
                  kind: 'concept',
                  title: 'What useRef Is',
                  emoji: '🎯',
                  body:
                    "`useRef` returns a mutable object whose `.current` persists across renders **without** triggering a re-render when it changes. Two main uses: pointing to a DOM node, and storing a mutable value (like a timer id or previous value) that should not cause renders.",
                  terms: [
                    { term: 'useRef', definition: 'A Hook returning a persistent mutable .current that does not trigger re-renders.' },
                    { term: 'ref', definition: 'An object with a .current property used for DOM access or mutable values.' },
                  ],
                },
                {
                  id: 'd3c2s1-2',
                  kind: 'example',
                  title: 'Focusing an Input',
                  emoji: '💻',
                  body:
                    "`const inputRef = useRef(null)`\n`useEffect(() => { inputRef.current.focus() }, [])`\n`return <input ref={inputRef} />`\n\nAttach the ref via the `ref` attribute; React sets `.current` to the DOM node after mount.",
                },
                {
                  id: 'd3c2s1-3',
                  kind: 'compare',
                  title: 'useState vs useRef',
                  emoji: '⚖️',
                  compare: {
                    headers: ['Aspect', 'useState', 'useRef'],
                    rows: [
                      ['Triggers re-render', 'Yes', 'No'],
                      ['Holds', 'UI-facing data', 'DOM nodes / mutable values'],
                      ['Update via', 'setter', 'assign .current'],
                      ['Read in render', 'Yes', 'Avoid relying on it for UI'],
                    ],
                  },
                },
                {
                  id: 'd3c2s1-4',
                  kind: 'tip',
                  title: 'Refs Are an Escape Hatch',
                  emoji: '⚠️',
                  body:
                    "Do not use refs for data that should appear in the UI — changing `.current` will not re-render. Use state for anything the user should see. Reach for refs only for DOM access or values that intentionally bypass rendering, like interval ids.",
                },
                {
                  id: 'd3c2s1-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'What happens when you change `ref.current`?',
                  options: [
                    { id: 'a', text: 'The component re-renders immediately.', correct: false },
                    { id: 'b', text: 'The value persists across renders with no re-render.', correct: true },
                    { id: 'c', text: 'React throws an error.', correct: false },
                    { id: 'd', text: 'It resets to the initial value.', correct: false },
                  ],
                  explanation:
                    "A ref persists its .current across renders but never triggers a re-render when changed, unlike state.",
                },
              ],
            },
            {
              id: 'd3c2s2',
              title: 'useMemo & useCallback',
              summary: 'Caching values and functions between renders.',
              cards: [
                {
                  id: 'd3c2s2-1',
                  kind: 'concept',
                  title: 'useMemo Caches Values',
                  emoji: '🧮',
                  body:
                    "`useMemo` remembers the **result** of a calculation and only recomputes when its dependencies change:\n\n`const total = useMemo(() => expensive(items), [items])`\n\nUse it for genuinely costly computations or to keep a referenced value stable between renders.",
                  terms: [
                    { term: 'useMemo', definition: 'Caches a computed value, recomputing only when dependencies change.' },
                    { term: 'Memoization', definition: 'Caching a result to avoid recomputing it.' },
                  ],
                },
                {
                  id: 'd3c2s2-2',
                  kind: 'concept',
                  title: 'useCallback Caches Functions',
                  emoji: '🔧',
                  body:
                    "`useCallback` returns the **same function reference** between renders unless its dependencies change:\n\n`const onClick = useCallback(() => doThing(id), [id])`\n\nUseful when passing callbacks to memoized children, so they do not see a new function every render.",
                  terms: [
                    { term: 'useCallback', definition: 'Memoizes a function so its reference stays stable across renders.' },
                  ],
                },
                {
                  id: 'd3c2s2-3',
                  kind: 'diagram',
                  title: 'useMemo vs useCallback',
                  emoji: '⚖️',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'useMemo', emoji: '🧮', items: ['Caches a value', 'Returns the computed result', 'For costly calculations'] },
                      { title: 'useCallback', emoji: '🔧', items: ['Caches a function', 'Returns the function itself', 'For stable callback props'] },
                    ],
                  },
                },
                {
                  id: 'd3c2s2-4',
                  kind: 'tip',
                  title: "Don't Over-Memoize",
                  emoji: '⚠️',
                  body:
                    "Memoization is not free — it costs memory and comparison work. For cheap calculations or callbacks not passed to memoized children, plain code is faster and clearer. Measure before reaching for `useMemo`/`useCallback`; do not sprinkle them everywhere.",
                },
                {
                  id: 'd3c2s2-5',
                  kind: 'example',
                  title: 'A Useful Memo',
                  emoji: '💻',
                  body:
                    "`const visible = useMemo(`\n`  () => items.filter((i) => i.active),`\n`  [items]`\n`)`\n\nThe filter only re-runs when `items` changes. If a parent re-renders for unrelated reasons, the cached array is reused.",
                },
                {
                  id: 'd3c2s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'What is the key difference between useMemo and useCallback?',
                  options: [
                    { id: 'a', text: 'useMemo caches a value; useCallback caches a function.', correct: true },
                    { id: 'b', text: 'They are identical.', correct: false },
                    { id: 'c', text: 'useCallback triggers re-renders.', correct: false },
                    { id: 'd', text: 'useMemo only works with strings.', correct: false },
                  ],
                  explanation:
                    "`useMemo` returns a memoized value; `useCallback` returns a memoized function. In fact useCallback(fn, deps) equals useMemo(() => fn, deps).",
                },
              ],
            },
          ],
        },
        {
          id: 'd3c3',
          title: 'Context, Reducers & Custom Hooks',
          emoji: '🧰',
          description: 'useContext, useReducer, and reusing logic with custom Hooks.',
          sections: [
            {
              id: 'd3c3s1',
              title: 'useContext & useReducer',
              summary: 'Sharing data without prop drilling and managing complex state.',
              cards: [
                {
                  id: 'd3c3s1-1',
                  kind: 'concept',
                  title: 'useContext',
                  emoji: '📡',
                  body:
                    "**Context** shares values across the tree without passing props at every level. Create it, wrap part of the tree in a `Provider`, and read it with `useContext`:\n\n`const theme = useContext(ThemeContext)`\n\nGreat for app-wide data like theme, current user, or locale.",
                  terms: [
                    { term: 'Context', definition: 'A way to share values across the component tree without prop drilling.' },
                    { term: 'Provider', definition: 'A component that supplies a context value to everything below it.' },
                  ],
                },
                {
                  id: 'd3c3s1-2',
                  kind: 'analogy',
                  title: 'Building Intercom',
                  emoji: '🔊',
                  body:
                    "Prop drilling is like passing a note hand-to-hand down a hallway of people. Context is the building intercom: announce once at the top (the Provider) and anyone in range can listen (with `useContext`) — no relay chain needed.",
                },
                {
                  id: 'd3c3s1-3',
                  kind: 'concept',
                  title: 'useReducer',
                  emoji: '🎮',
                  body:
                    "`useReducer` manages state with a **reducer** function `(state, action) => newState`. You `dispatch` actions to update:\n\n`const [state, dispatch] = useReducer(reducer, initial)`\n\nIt shines when state is complex, has many sub-values, or the next state depends heavily on the previous one.",
                  terms: [
                    { term: 'useReducer', definition: 'A Hook for complex state managed by a reducer and dispatched actions.' },
                    { term: 'Reducer', definition: 'A pure function (state, action) => newState.' },
                    { term: 'dispatch', definition: 'The function used to send an action to the reducer.' },
                  ],
                },
                {
                  id: 'd3c3s1-4',
                  kind: 'compare',
                  title: 'useState vs useReducer',
                  emoji: '⚖️',
                  compare: {
                    headers: ['Aspect', 'useState', 'useReducer'],
                    rows: [
                      ['Best for', 'Simple, independent values', 'Complex or related state'],
                      ['Updates via', 'setter calls', 'dispatched actions'],
                      ['Logic lives in', 'the component', 'a central reducer'],
                      ['Testing', 'Inline', 'Reducer is easy to unit test'],
                    ],
                  },
                },
                {
                  id: 'd3c3s1-5',
                  kind: 'tip',
                  title: 'Context Re-render Pitfall',
                  emoji: '⚠️',
                  body:
                    "Every consumer re-renders when the context **value** changes. If you pass a fresh object literal as the value each render, all consumers re-render unnecessarily. Memoize the value with `useMemo`, and split unrelated data into separate contexts.",
                },
                {
                  id: 'd3c3s1-6',
                  kind: 'example',
                  title: 'A Reducer',
                  emoji: '💻',
                  body:
                    "`function reducer(state, action) {`\n`  switch (action.type) {`\n`    case \"inc\": return { count: state.count + 1 }`\n`    default: return state`\n`  }`\n`}`\n\nDispatch with `dispatch({ type: \"inc\" })`.",
                },
                {
                  id: 'd3c3s1-7',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'When is useReducer usually a better fit than useState?',
                  options: [
                    { id: 'a', text: 'For a single boolean toggle.', correct: false },
                    { id: 'b', text: 'When state is complex with many related transitions.', correct: true },
                    { id: 'c', text: 'When you want to avoid re-renders entirely.', correct: false },
                    { id: 'd', text: 'Only on the server.', correct: false },
                  ],
                  explanation:
                    "useReducer centralizes complex, interrelated state transitions in a testable reducer, which is clearer than many separate useState calls.",
                },
              ],
            },
            {
              id: 'd3c3s2',
              title: 'Custom Hooks',
              summary: 'Extracting and reusing stateful logic.',
              cards: [
                {
                  id: 'd3c3s2-1',
                  kind: 'concept',
                  title: 'What Is a Custom Hook?',
                  emoji: '🧪',
                  body:
                    "A **custom Hook** is a function starting with `use` that calls other Hooks to package reusable logic. It lets you share stateful behavior between components without copy-paste:\n\n`function useToggle(initial) { ... return [on, toggle] }`\n\nIt is a pattern, not a new API.",
                  terms: [
                    { term: 'Custom Hook', definition: 'A use-prefixed function that composes Hooks to reuse stateful logic.' },
                  ],
                },
                {
                  id: 'd3c3s2-2',
                  kind: 'example',
                  title: 'useToggle',
                  emoji: '💻',
                  body:
                    "`function useToggle(initial = false) {`\n`  const [on, setOn] = useState(initial)`\n`  const toggle = useCallback(() => setOn((v) => !v), [])`\n`  return [on, toggle]`\n`}`\n\nUse it: `const [open, toggleOpen] = useToggle()`.",
                },
                {
                  id: 'd3c3s2-3',
                  kind: 'tip',
                  title: 'Each Call Is Independent',
                  emoji: '💡',
                  body:
                    "Calling a custom Hook in two components does **not** share state between them — each call gets its own state. Custom Hooks share **logic**, not **data**. To share data, use Context or lift state up.",
                },
                {
                  id: 'd3c3s2-4',
                  kind: 'example',
                  title: 'useLocalStorage',
                  emoji: '💻',
                  body:
                    "`function useLocalStorage(key, initial) {`\n`  const [value, setValue] = useState(() => {`\n`    const saved = localStorage.getItem(key)`\n`    return saved ? JSON.parse(saved) : initial`\n`  })`\n`  // sync to storage in an effect...`\n`  return [value, setValue]`\n`}`",
                },
                {
                  id: 'd3c3s2-5',
                  kind: 'tip',
                  title: 'Name It use…',
                  emoji: '🔤',
                  body:
                    "Custom Hooks must start with `use` so the linter and React know they follow the rules of Hooks. `getToggle` would not be checked; `useToggle` will be. The prefix is a contract, not just a convention.",
                },
                {
                  id: 'd3c3s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Two components both call `useCounter()`. What is true?',
                  options: [
                    { id: 'a', text: 'They share the same counter value.', correct: false },
                    { id: 'b', text: 'Each gets its own independent state.', correct: true },
                    { id: 'c', text: 'Only one is allowed to call it.', correct: false },
                    { id: 'd', text: 'The Hook runs once globally.', correct: false },
                  ],
                  explanation:
                    "Custom Hooks share logic, not state. Each call creates separate state. To share data, use Context or lift state up.",
                },
              ],
            },
          ],
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 4 — Rendering & Performance
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd4',
      title: 'Rendering & Performance',
      emoji: '🚀',
      description:
        "How and why components re-render, reconciliation, React.memo, memoization pitfalls, keys, and lazy loading with Suspense.",
      chapters: [
        {
          id: 'd4c1',
          title: 'How Rendering Works',
          emoji: '⚙️',
          description: 'What triggers re-renders and how React reconciles.',
          sections: [
            {
              id: 'd4c1s1',
              title: 'What Causes Re-renders',
              summary: 'The three triggers and how renders cascade.',
              cards: [
                {
                  id: 'd4c1s1-1',
                  kind: 'concept',
                  title: 'Three Triggers',
                  emoji: '⚡',
                  body:
                    "A component re-renders when:\n\n- Its **state** changes.\n- Its **props** change (because a parent re-rendered).\n- A **context** it consumes changes.\n\nA re-render means React calls the function again to produce new JSX — it does not necessarily touch the DOM.",
                  terms: [
                    { term: 'Re-render', definition: 'React calling a component again to compute new JSX.' },
                  ],
                },
                {
                  id: 'd4c1s1-2',
                  kind: 'concept',
                  title: 'Renders Cascade Down',
                  emoji: '🌊',
                  body:
                    "When a component re-renders, React re-renders **all** of its children by default — even if their props did not change. This is usually cheap, but in heavy trees it can add up. That is where `React.memo` and stable props help.",
                },
                {
                  id: 'd4c1s1-3',
                  kind: 'analogy',
                  title: 'Recalculating a Spreadsheet',
                  emoji: '📊',
                  body:
                    "Think of a spreadsheet: change one cell and dependent cells recalculate. React is similar — a state change recalculates that component and everything below it. The recalculation (render) is cheap; only writing the final values to the page (the DOM commit) is the expensive part React tries to minimize.",
                },
                {
                  id: 'd4c1s1-4',
                  kind: 'tip',
                  title: 'Render ≠ DOM Update',
                  emoji: '💡',
                  body:
                    "A re-render is just React calling your function and diffing. If the output is unchanged, no DOM update happens. So \"too many renders\" is rarely a real problem — measure with the React DevTools Profiler before optimizing.",
                },
                {
                  id: 'd4c1s1-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Which of these does NOT directly trigger a re-render?',
                  options: [
                    { id: 'a', text: 'Calling a state setter with a new value.', correct: false },
                    { id: 'b', text: 'A consumed context value changing.', correct: false },
                    { id: 'c', text: 'Mutating ref.current.', correct: true },
                    { id: 'd', text: 'A parent re-rendering and passing new props.', correct: false },
                  ],
                  explanation:
                    "Changing a ref's .current never triggers a re-render. State changes, new props, and context changes do.",
                },
              ],
            },
            {
              id: 'd4c1s2',
              title: 'Reconciliation & Keys',
              summary: 'How React matches old and new trees.',
              cards: [
                {
                  id: 'd4c1s2-1',
                  kind: 'concept',
                  title: 'Reconciliation',
                  emoji: '🧩',
                  body:
                    "**Reconciliation** is how React decides what changed. It compares element **type** and position. Same type at the same spot → React updates that node and recurses. Different type → it throws the old subtree away and builds fresh. Keys guide matching within lists.",
                  terms: [
                    { term: 'Reconciliation', definition: 'The diffing process React uses to decide what to update.' },
                  ],
                },
                {
                  id: 'd4c1s2-2',
                  kind: 'concept',
                  title: 'Keys Guide Matching',
                  emoji: '🔑',
                  body:
                    "In lists, keys tell React which item is which across renders. Stable keys let React move an element and keep its state. Index keys break this when items reorder — state can attach to the wrong item, producing wrong values in inputs and lost focus.",
                },
                {
                  id: 'd4c1s2-3',
                  kind: 'diagram',
                  title: 'Same Type vs New Type',
                  emoji: '🔁',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Same type, same spot', emoji: '♻️', items: ['Reuse the DOM node', 'Update changed props', 'Keep component state'] },
                      { title: 'Different type', emoji: '🗑️', items: ['Unmount old subtree', 'Mount a fresh one', 'State is reset'] },
                    ],
                  },
                },
                {
                  id: 'd4c1s2-4',
                  kind: 'tip',
                  title: 'Changing key Resets State',
                  emoji: '💡',
                  body:
                    "A handy trick: give a component a `key` that changes when you want React to **reset** it (remount with fresh state). For example, key a form by the selected record id to clear it when switching records.",
                },
                {
                  id: 'd4c1s2-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'During reconciliation, what happens if an element changes type?',
                  options: [
                    { id: 'a', text: 'React updates props in place.', correct: false },
                    { id: 'b', text: 'React unmounts the old subtree and mounts a new one, resetting state.', correct: true },
                    { id: 'c', text: 'React ignores the change.', correct: false },
                    { id: 'd', text: 'React merges both components.', correct: false },
                  ],
                  explanation:
                    "Different element types cannot be reused, so React tears down the old subtree and builds a new one, discarding its state.",
                },
              ],
            },
          ],
        },
        {
          id: 'd4c2',
          title: 'Optimizing Renders',
          emoji: '🏎️',
          description: 'React.memo, memoization pitfalls, and lazy loading.',
          sections: [
            {
              id: 'd4c2s1',
              title: 'React.memo & Pitfalls',
              summary: 'Skipping renders and the traps that defeat it.',
              cards: [
                {
                  id: 'd4c2s1-1',
                  kind: 'concept',
                  title: 'React.memo',
                  emoji: '🧠',
                  body:
                    "`React.memo` wraps a component so it **skips re-rendering** when its props are unchanged (shallow comparison):\n\n`const Row = React.memo(function Row(props) { ... })`\n\nIt only helps if the parent re-renders often and this component is comparatively expensive.",
                  terms: [
                    { term: 'React.memo', definition: 'A HOC that skips re-rendering when props are shallow-equal.' },
                  ],
                },
                {
                  id: 'd4c2s1-2',
                  kind: 'tip',
                  title: 'Memo Defeated by New References',
                  emoji: '⚠️',
                  body:
                    "`React.memo` compares props **shallowly**. If you pass an inline object, array, or arrow function, it is a new reference every render, so memo never skips. Stabilize those props with `useMemo`/`useCallback`, or memo is pointless.",
                },
                {
                  id: 'd4c2s1-3',
                  kind: 'example',
                  title: 'Stable Callback + memo',
                  emoji: '💻',
                  body:
                    "`const onSelect = useCallback((id) => pick(id), [])`\n`<Row item={item} onSelect={onSelect} />`\n\nNow `onSelect` keeps the same reference, so a `React.memo` wrapped `Row` can actually skip re-rendering when only unrelated state changes.",
                },
                {
                  id: 'd4c2s1-4',
                  kind: 'tip',
                  title: 'Measure First',
                  emoji: '📏',
                  body:
                    "Do not wrap everything in `React.memo`. The shallow comparison itself has a cost, and most components are cheap. Profile with React DevTools, find the actual bottleneck, then memoize surgically. Premature optimization adds complexity for no gain.",
                },
                {
                  id: 'd4c2s1-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Why might a `React.memo` component still re-render every time?',
                  options: [
                    { id: 'a', text: 'It received a new inline object or function prop each render.', correct: true },
                    { id: 'b', text: 'React.memo is disabled in production.', correct: false },
                    { id: 'c', text: 'Memo only works on class components.', correct: false },
                    { id: 'd', text: 'It has no props at all.', correct: false },
                  ],
                  explanation:
                    "memo does a shallow prop comparison. A fresh object/array/function reference each render looks different, so it never skips. Stabilize with useMemo/useCallback.",
                },
              ],
            },
            {
              id: 'd4c2s2',
              title: 'Code Splitting with lazy & Suspense',
              summary: 'Loading components only when needed.',
              cards: [
                {
                  id: 'd4c2s2-1',
                  kind: 'concept',
                  title: 'lazy & Suspense',
                  emoji: '🪂',
                  body:
                    "`React.lazy` lets you load a component on demand, splitting it into its own bundle chunk. `Suspense` shows a fallback while it loads:\n\n`const Chart = React.lazy(() => import(\"./Chart\"))`\n\nWrap it: `<Suspense fallback={<Spinner />}><Chart /></Suspense>`.",
                  terms: [
                    { term: 'React.lazy', definition: 'Loads a component lazily as a separate bundle chunk.' },
                    { term: 'Suspense', definition: 'Shows a fallback UI while lazy content loads.' },
                    { term: 'Code splitting', definition: 'Breaking the bundle into chunks loaded on demand.' },
                  ],
                },
                {
                  id: 'd4c2s2-2',
                  kind: 'analogy',
                  title: 'Loading the Room You Enter',
                  emoji: '🚪',
                  body:
                    "Shipping your whole app up front is like turning on every light in a mansion before anyone arrives. Lazy loading turns on the lights room by room as guests walk in. Suspense is the polite \"one moment\" sign while a room's lights warm up.",
                },
                {
                  id: 'd4c2s2-3',
                  kind: 'diagram',
                  title: 'Lazy Load Flow',
                  emoji: '🔄',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'Render lazy component', emoji: '🧩' },
                      { label: 'Suspense shows fallback', emoji: '⏳' },
                      { label: 'Chunk downloads', emoji: '📦' },
                      { label: 'Real component appears', emoji: '✨' },
                    ],
                  },
                },
                {
                  id: 'd4c2s2-4',
                  kind: 'tip',
                  title: 'Split at Routes',
                  emoji: '💡',
                  body:
                    "The biggest wins come from lazy-loading **route-level** components, so users only download the page they visit. Splitting tiny components adds many small chunks and HTTP requests for little benefit. Start at routes and heavy widgets.",
                },
                {
                  id: 'd4c2s2-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'What does Suspense provide for a lazy-loaded component?',
                  options: [
                    { id: 'a', text: 'It caches API responses.', correct: false },
                    { id: 'b', text: 'It shows a fallback UI while the component loads.', correct: true },
                    { id: 'c', text: 'It prevents the component from ever loading.', correct: false },
                    { id: 'd', text: 'It replaces useState.', correct: false },
                  ],
                  explanation:
                    "Suspense renders its fallback prop while the lazy chunk downloads, then swaps in the real component when ready.",
                },
              ],
            },
          ],
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 5 — Patterns & Real Apps
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd5',
      title: 'Patterns & Real Apps',
      emoji: '🧩',
      description:
        "Putting it together: Context for global state, data fetching, error boundaries, routing concepts, composition patterns, state management, and folder structure.",
      chapters: [
        {
          id: 'd5c1',
          title: 'Global State & Data',
          emoji: '🌐',
          description: 'Context, data fetching, and error boundaries.',
          sections: [
            {
              id: 'd5c1s1',
              title: 'Context for Global State',
              summary: 'App-wide data without prop drilling.',
              cards: [
                {
                  id: 'd5c1s1-1',
                  kind: 'concept',
                  title: 'When to Use Context',
                  emoji: '🌍',
                  body:
                    "Context fits **app-wide, slow-changing** data: theme, current user, language, feature flags. Create a context, wrap the app in its Provider, and read it anywhere with `useContext`. For fast-changing or large state, Context alone can cause many re-renders.",
                  terms: [
                    { term: 'Global state', definition: 'Data many parts of the app need, like the current user or theme.' },
                  ],
                },
                {
                  id: 'd5c1s1-2',
                  kind: 'diagram',
                  title: 'Provider Wrapping the Tree',
                  emoji: '🌳',
                  diagram: {
                    type: 'stack',
                    nodes: [
                      { label: 'ThemeProvider', sublabel: 'supplies value', emoji: '📡' },
                      { label: 'Layout', sublabel: 'passes through', emoji: '🧱' },
                      { label: 'Page', sublabel: 'reads with useContext', emoji: '📄' },
                      { label: 'Button', sublabel: 'reads with useContext', emoji: '🔘' },
                    ],
                  },
                },
                {
                  id: 'd5c1s1-3',
                  kind: 'tip',
                  title: 'Split & Memoize Context',
                  emoji: '⚠️',
                  body:
                    "Keep unrelated data in separate contexts so a change in one does not re-render consumers of the other. Memoize the provider `value` with `useMemo` so it is not a new object every render. These two habits prevent most Context performance complaints.",
                },
                {
                  id: 'd5c1s1-4',
                  kind: 'compare',
                  title: 'Context vs Redux (concept)',
                  emoji: '⚖️',
                  compare: {
                    headers: ['Aspect', 'Context + useReducer', 'Redux'],
                    rows: [
                      ['Setup', 'Built in, minimal', 'Library + boilerplate'],
                      ['Best for', 'Modest shared state', 'Large, complex app state'],
                      ['DevTools', 'Basic', 'Powerful time-travel'],
                      ['Middleware', 'Roll your own', 'Rich ecosystem'],
                    ],
                  },
                },
                {
                  id: 'd5c1s1-5',
                  kind: 'concept',
                  title: 'State Management Overview',
                  emoji: '🗃️',
                  body:
                    "Start local with `useState`. Lift state up when siblings share it. Use Context for app-wide values. Reach for a library (Redux Toolkit, Zustand) only when state is large, deeply shared, or needs advanced tooling. Server data often belongs in a fetching library like React Query rather than global UI state.",
                },
                {
                  id: 'd5c1s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Which is a good first use for Context?',
                  options: [
                    { id: 'a', text: 'High-frequency mouse position updates.', correct: false },
                    { id: 'b', text: 'App-wide theme or current user.', correct: true },
                    { id: 'c', text: 'A single counter inside one component.', correct: false },
                    { id: 'd', text: 'Temporary input value of one form field.', correct: false },
                  ],
                  explanation:
                    "Context suits app-wide, slow-changing values like theme or user. Local or high-frequency state is better kept in component state.",
                },
              ],
            },
            {
              id: 'd5c1s2',
              title: 'Data Fetching & Error Boundaries',
              summary: 'Loading remote data and catching render errors.',
              cards: [
                {
                  id: 'd5c1s2-1',
                  kind: 'concept',
                  title: 'Fetching in Effects',
                  emoji: '🌐',
                  body:
                    "A simple pattern: fetch in `useEffect`, track loading and error, and store the result in state. Re-fetch when inputs change via the dependency array. In real apps, a library like React Query handles caching, retries, and dedup so you write far less of this by hand.",
                  terms: [
                    { term: 'Loading state', definition: 'A flag indicating a request is in flight, used to show spinners.' },
                  ],
                },
                {
                  id: 'd5c1s2-2',
                  kind: 'example',
                  title: 'Three-State Fetch',
                  emoji: '💻',
                  body:
                    "`const [data, setData] = useState(null)`\n`const [error, setError] = useState(null)`\n`const [loading, setLoading] = useState(true)`\n\nIn the effect: set loading true, fetch, on success set data, on failure set error, finally set loading false. Render handles all three states.",
                },
                {
                  id: 'd5c1s2-3',
                  kind: 'tip',
                  title: 'Avoid setState After Unmount',
                  emoji: '⚠️',
                  body:
                    "If a fetch resolves after the component unmounts, calling `setState` is wasted work and historically warned. Guard with a flag or an `AbortController` in cleanup. Returning a cleanup that flips an `active` flag is the simplest fix.",
                },
                {
                  id: 'd5c1s2-4',
                  kind: 'concept',
                  title: 'Error Boundaries',
                  emoji: '🛡️',
                  body:
                    "An **error boundary** is a component that catches render errors in its child tree and shows a fallback instead of crashing the whole app. They are still written as class components with `componentDidCatch` / `getDerivedStateFromError`, and wrap risky subtrees.",
                  terms: [
                    { term: 'Error boundary', definition: 'A component that catches errors in its subtree and renders a fallback.' },
                  ],
                },
                {
                  id: 'd5c1s2-5',
                  kind: 'tip',
                  title: "What Boundaries Don't Catch",
                  emoji: '⚠️',
                  body:
                    "Error boundaries catch errors during **rendering**, in lifecycle methods, and in constructors below them. They do **not** catch errors in event handlers, async code, or the boundary itself. Handle those with regular `try/catch`.",
                },
                {
                  id: 'd5c1s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Which error does an error boundary catch?',
                  options: [
                    { id: 'a', text: 'An error thrown while rendering a child component.', correct: true },
                    { id: 'b', text: 'An error inside a button onClick handler.', correct: false },
                    { id: 'c', text: 'A rejected promise in setTimeout.', correct: false },
                    { id: 'd', text: 'A syntax error in your build.', correct: false },
                  ],
                  explanation:
                    "Boundaries catch render-time errors in their subtree. Event handler and async errors need try/catch; they are outside the render path.",
                },
              ],
            },
          ],
        },
        {
          id: 'd5c2',
          title: 'Routing, Composition & Structure',
          emoji: '🗂️',
          description: 'Routing concepts, composition patterns, and organizing code.',
          sections: [
            {
              id: 'd5c2s1',
              title: 'Routing & Composition Patterns',
              summary: 'Multiple pages and flexible component design.',
              cards: [
                {
                  id: 'd5c2s1-1',
                  kind: 'concept',
                  title: 'Client-Side Routing',
                  emoji: '🧭',
                  body:
                    "React itself has no router. A library like **React Router** maps URLs to components and swaps them without a full page reload. You define routes (`/`, `/users/:id`) and use `<Link>` instead of `<a>` to navigate while keeping app state.",
                  terms: [
                    { term: 'Client-side routing', definition: 'Changing views based on the URL without full page reloads.' },
                    { term: 'Route', definition: 'A mapping from a URL path to a component to render.' },
                  ],
                },
                {
                  id: 'd5c2s1-2',
                  kind: 'concept',
                  title: 'Composition over Configuration',
                  emoji: '🧱',
                  body:
                    "Prefer building flexible components via `children` and small focused pieces over giant components with dozens of boolean props. A `<Modal>` that accepts `children` is more reusable than one with `showHeader`, `showFooter`, `headerText`, and so on.",
                  terms: [
                    { term: 'Composition', definition: 'Combining small components and children instead of configuring one big component.' },
                  ],
                },
                {
                  id: 'd5c2s1-3',
                  kind: 'example',
                  title: 'Slots via Props',
                  emoji: '💻',
                  body:
                    "Pass JSX as named props for flexible layouts:\n\n`<Layout sidebar={<Nav />} main={<Content />} />`\n\nInside `Layout`, place `{sidebar}` and `{main}` where they belong. This \"slots\" pattern keeps the layout reusable across pages.",
                },
                {
                  id: 'd5c2s1-4',
                  kind: 'tip',
                  title: 'Beware Prop Explosion',
                  emoji: '⚠️',
                  body:
                    "If a component grows ten boolean flags to tweak its look, that is a signal to split it or use composition. Lots of mutually exclusive booleans (`isPrimary`, `isDanger`, `isGhost`) often want a single `variant` prop instead.",
                },
                {
                  id: 'd5c2s1-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Why use `<Link>` instead of `<a>` with React Router?',
                  options: [
                    { id: 'a', text: 'It navigates without a full page reload, preserving app state.', correct: true },
                    { id: 'b', text: 'It is required by HTML.', correct: false },
                    { id: 'c', text: 'It disables the URL bar.', correct: false },
                    { id: 'd', text: 'It only works on the server.', correct: false },
                  ],
                  explanation:
                    "`<Link>` performs client-side navigation, swapping components without reloading the page, so state and scroll position are preserved.",
                },
              ],
            },
            {
              id: 'd5c2s2',
              title: 'Folder Structure',
              summary: 'Organizing a growing React codebase.',
              cards: [
                {
                  id: 'd5c2s2-1',
                  kind: 'concept',
                  title: 'Feature-Based Folders',
                  emoji: '🗂️',
                  body:
                    "As apps grow, group files by **feature** rather than by type. Instead of one big `components/` and `hooks/`, keep a feature's components, hooks, and tests together in `features/cart/`. Related code changes together, so colocating it reduces hunting.",
                  terms: [
                    { term: 'Colocation', definition: 'Keeping related files near each other rather than split by file type.' },
                  ],
                },
                {
                  id: 'd5c2s2-2',
                  kind: 'example',
                  title: 'A Simple Layout',
                  emoji: '💻',
                  body:
                    "A common starting structure:\n\n- `src/components/` — shared UI\n- `src/features/<feature>/` — feature code\n- `src/hooks/` — shared custom Hooks\n- `src/lib/` — utilities and API clients\n- `src/App.tsx` — routes and providers",
                },
                {
                  id: 'd5c2s2-3',
                  kind: 'tip',
                  title: 'Let Structure Emerge',
                  emoji: '💡',
                  body:
                    "Do not over-architect a tiny app. Start flat, and split into folders when a directory gets noisy. Premature structure is as costly as none. Refactor toward features when you feel the pain, not before.",
                },
                {
                  id: 'd5c2s2-4',
                  kind: 'concept',
                  title: 'Presentational vs Container',
                  emoji: '🎭',
                  body:
                    "A classic split: **presentational** components focus on how things look (props in, JSX out), while **container** components handle data and state. With Hooks this is softer than it once was, but separating \"fetch and decide\" from \"display\" still keeps components testable.",
                  terms: [
                    { term: 'Presentational component', definition: 'A component focused on rendering UI from props.' },
                    { term: 'Container component', definition: 'A component that manages data/state and passes it down.' },
                  ],
                },
                {
                  id: 'd5c2s2-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'What is the main benefit of feature-based folders?',
                  options: [
                    { id: 'a', text: 'Related code that changes together lives together.', correct: true },
                    { id: 'b', text: 'It makes the bundle smaller automatically.', correct: false },
                    { id: 'c', text: 'It removes the need for components.', correct: false },
                    { id: 'd', text: 'It is required by React.', correct: false },
                  ],
                  explanation:
                    "Grouping by feature colocates components, hooks, and tests that evolve together, reducing cross-folder hunting as the app grows.",
                },
              ],
            },
          ],
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 6 — Interview Prep 🎤
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd6',
      title: 'Interview Prep',
      emoji: '🎤',
      description:
        "Practice the classics. Reveal-able model answers to common React questions, gotcha drills, and a rapid-fire quiz round.",
      chapters: [
        {
          id: 'd6c1',
          title: 'Core Concept Questions',
          emoji: '💬',
          description: 'The fundamentals interviewers love to ask.',
          sections: [
            {
              id: 'd6c1s1',
              title: 'Fundamentals',
              summary: 'Virtual DOM, keys, props vs state, lifting state.',
              cards: [
                {
                  id: 'd6c1s1-1',
                  kind: 'qa',
                  title: 'Virtual DOM',
                  emoji: '🌳',
                  question: 'What is the virtual DOM and how does reconciliation work?',
                  body:
                    "The virtual DOM is an in-memory JavaScript tree describing the UI. On a state change, React builds a new tree and **reconciles** it against the previous one: comparing element type and position. Matching types are updated in place and recursed into; differing types cause the old subtree to be torn down and rebuilt. React then commits only the necessary changes to the real DOM. The benefit is declarative code with minimal, batched DOM writes.",
                  terms: [
                    { term: 'Reconciliation', definition: 'Diffing the new tree against the old to compute minimal updates.' },
                  ],
                  followUps: [
                    'Is the virtual DOM always faster than direct DOM manipulation?',
                    'How do keys influence reconciliation?',
                  ],
                },
                {
                  id: 'd6c1s1-2',
                  kind: 'qa',
                  title: 'Why Keys Matter',
                  emoji: '🔑',
                  question: 'Why does React need keys in lists, and why avoid using the index?',
                  body:
                    "Keys give each list item a stable identity so React can match items across renders — reusing DOM nodes and preserving component state when items move, are added, or removed. The index is unstable: when a list reorders or an item is inserted, indexes shift, so React associates state with the wrong item, causing wrong input values or lost focus. Use a unique id from your data. Index keys are acceptable only for static lists that never reorder.",
                  followUps: [
                    'What bug appears if you use the index as a key in a reorderable list?',
                    'How can changing a key intentionally reset a component?',
                  ],
                },
                {
                  id: 'd6c1s1-3',
                  kind: 'qa',
                  title: 'Props vs State',
                  emoji: '📦',
                  question: 'What is the difference between props and state?',
                  body:
                    "**Props** are inputs passed from a parent; they are read-only from the child's perspective and flow downward. **State** is data a component owns and manages internally, and changing it triggers a re-render. Props let a parent configure a child; state lets a component remember and react to changes over time. A value should be props if a parent owns it, and state if the component itself owns and updates it.",
                  terms: [
                    { term: 'Props', definition: 'Read-only inputs passed from parent to child.' },
                    { term: 'State', definition: 'Internally owned data that triggers re-renders when changed.' },
                  ],
                  followUps: [
                    'Can a child change its props directly?',
                    'How do you let a child update data owned by the parent?',
                  ],
                },
                {
                  id: 'd6c1s1-4',
                  kind: 'qa',
                  title: 'Lifting State Up',
                  emoji: '⬆️',
                  question: 'What does "lifting state up" mean and when do you do it?',
                  body:
                    "When two or more components need to share or stay in sync with the same data, you move that state to their closest common ancestor and pass it down via props, along with callbacks to update it. This keeps a single source of truth. You lift state when siblings must coordinate — for example, a filter input and a results list that both depend on the search term. If lifting goes too far up and props get threaded through many layers, consider Context.",
                  followUps: [
                    'What is prop drilling and how does Context help?',
                    'Where should shared state live for two sibling components?',
                  ],
                },
                {
                  id: 'd6c1s1-5',
                  kind: 'qa',
                  title: 'Why Not Mutate State',
                  emoji: '🧊',
                  question: 'Why must you not mutate state directly?',
                  body:
                    "React decides whether to re-render by comparing references. If you mutate an object or array in place, the reference stays the same, so React may skip the update and the UI goes stale. Mutation also breaks features that rely on previous snapshots, like time-travel debugging. Always create new values: `setItems([...items, x])` or `setUser({ ...user, name })`. Treating state as immutable keeps renders predictable and reference comparisons meaningful.",
                  terms: [
                    { term: 'Immutability', definition: 'Updating by creating new values instead of mutating existing ones.' },
                  ],
                  followUps: [
                    'How do you update one field of a nested object in state?',
                    'Why does React compare references rather than deep-equal values?',
                  ],
                },
                {
                  id: 'd6c1s1-6',
                  kind: 'qa',
                  title: 'Controlled vs Uncontrolled',
                  emoji: '🎚️',
                  question: 'Explain controlled versus uncontrolled components.',
                  body:
                    "A **controlled** input has its value driven by React state and updates state on every change, making React the single source of truth — ideal for validation and conditional logic. An **uncontrolled** input keeps its value in the DOM and you read it via a `ref`, usually on submit, with `defaultValue` for the initial value. Controlled is the default choice; uncontrolled suits simple forms, performance-sensitive inputs, or file inputs, which are always uncontrolled.",
                  followUps: [
                    'Which one are file inputs, and why?',
                    'What warning appears if you set value without onChange?',
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'd6c2',
          title: 'Hooks & Gotchas',
          emoji: '🪝',
          description: 'The Hook questions and traps that separate juniors from seniors.',
          sections: [
            {
              id: 'd6c2s1',
              title: 'Hooks Deep Cuts',
              summary: 'useEffect, memoization, reducers, refs, and re-renders.',
              cards: [
                {
                  id: 'd6c2s1-1',
                  kind: 'qa',
                  title: 'useEffect Deps & Cleanup',
                  emoji: '🌊',
                  question: 'How does the useEffect dependency array work, and when is cleanup called?',
                  body:
                    "The dependency array tells React when to re-run the effect: `[]` runs once after mount, `[a, b]` re-runs when `a` or `b` change, and omitting it runs after every render. List every reactive value the effect uses, or you risk stale data. The **cleanup** function you return runs before the next effect execution and on unmount — used to clear timers, unsubscribe, or abort requests. So an effect with subscriptions cleans up old ones before setting up new.",
                  terms: [
                    { term: 'Dependency array', definition: 'Values that retrigger an effect when they change.' },
                  ],
                  followUps: [
                    'What happens if you omit a dependency the effect uses?',
                    'Why might putting an object literal in deps cause an infinite loop?',
                  ],
                },
                {
                  id: 'd6c2s1-2',
                  kind: 'qa',
                  title: 'useMemo vs useCallback',
                  emoji: '⚖️',
                  question: 'What is the difference between useMemo and useCallback?',
                  body:
                    "Both memoize based on a dependency array, but `useMemo` caches a **computed value** and `useCallback` caches a **function reference**. In fact `useCallback(fn, deps)` is equivalent to `useMemo(() => fn, deps)`. Use `useMemo` for expensive calculations or to keep a derived object stable; use `useCallback` for callbacks passed to memoized children so they do not get a new reference each render. Neither should be sprinkled everywhere — they cost memory and comparisons, so apply them where profiling shows benefit.",
                  followUps: [
                    'Why might useCallback not actually prevent a child re-render?',
                    'When is plain inline code preferable to memoization?',
                  ],
                },
                {
                  id: 'd6c2s1-3',
                  kind: 'qa',
                  title: 'When to Use useReducer',
                  emoji: '🎮',
                  question: 'When would you choose useReducer over useState?',
                  body:
                    "Reach for `useReducer` when state is complex — multiple related sub-values, or where the next state depends heavily on the previous one and on the type of action. It centralizes update logic in a pure reducer `(state, action) => newState`, which is easy to test and reason about, and lets you dispatch semantic actions instead of scattering setters. For a single simple value, `useState` is lighter. Reducers also pair well with Context to share dispatch across a subtree.",
                  terms: [
                    { term: 'Reducer', definition: 'A pure function (state, action) => newState.' },
                  ],
                  followUps: [
                    'How do useReducer and Context combine for global state?',
                    'Why are reducers easy to unit test?',
                  ],
                },
                {
                  id: 'd6c2s1-4',
                  kind: 'qa',
                  title: 'What Causes Re-renders',
                  emoji: '⚡',
                  question: 'What causes a component to re-render?',
                  body:
                    "Three things: its own **state** changes, its **props** change because a parent re-rendered, or a **context** it consumes updates. By default, when a component re-renders, all of its children re-render too, regardless of whether their props changed. A re-render is just React calling the function and diffing the output — it only touches the DOM if the result differs. Mutating a ref does not cause a re-render. Use `React.memo` and stable props to skip unnecessary child renders when profiling justifies it.",
                  followUps: [
                    'Does a re-render always mean a DOM update?',
                    'How does React.memo reduce re-renders, and what defeats it?',
                  ],
                },
                {
                  id: 'd6c2s1-5',
                  kind: 'qa',
                  title: 'Stale Closures',
                  emoji: '🕰️',
                  question: 'What is a stale closure in an effect, and how do you fix it?',
                  body:
                    "Each render creates fresh functions that close over that render's variables. If an effect or callback captures a value but does not list it in dependencies — or a long-lived callback like a setInterval handler captures the first render's state — it keeps seeing the **old** value. Fixes: include all used values in the dependency array, use the functional updater `setX(prev => ...)` so you do not depend on the captured value, or store the latest value in a ref. The ESLint rules-of-hooks plugin flags most cases.",
                  terms: [
                    { term: 'Stale closure', definition: 'A function capturing outdated values from an earlier render.' },
                  ],
                  followUps: [
                    'How does the functional updater avoid stale state?',
                    'When would you store the latest value in a ref?',
                  ],
                },
                {
                  id: 'd6c2s1-6',
                  kind: 'qa',
                  title: 'useRef Use-Cases',
                  emoji: '🎯',
                  question: 'What are the main use-cases for useRef?',
                  body:
                    "Two big ones. First, accessing a **DOM node** — attach via the `ref` attribute to focus an input, measure size, or integrate a non-React library. Second, holding a **mutable value** that persists across renders without triggering one: timer or interval ids, the previous value of a prop, or a flag like \"is mounted.\" The key trait is that updating `ref.current` does not re-render, so never use a ref for data the UI must display — that belongs in state.",
                  terms: [
                    { term: 'ref', definition: 'A persistent .current container for DOM nodes or mutable values.' },
                  ],
                  followUps: [
                    'Why should a ref not hold UI-facing data?',
                    'How would you track the previous value of a prop?',
                  ],
                },
                {
                  id: 'd6c2s1-7',
                  kind: 'qa',
                  title: 'Custom Hooks',
                  emoji: '🧪',
                  question: 'What is a custom Hook and what does it share between components?',
                  body:
                    "A custom Hook is a `use`-prefixed function that calls other Hooks to package reusable **stateful logic** — for example `useToggle`, `useFetch`, or `useLocalStorage`. It follows the rules of Hooks and can be composed. Crucially, each component that calls a custom Hook gets its **own independent state**; custom Hooks share logic, not data. To share data across components, use Context or lift state up. The `use` prefix is required so tooling can enforce Hook rules.",
                  terms: [
                    { term: 'Custom Hook', definition: 'A use-prefixed function composing Hooks to reuse logic.' },
                  ],
                  followUps: [
                    'If two components call the same custom Hook, do they share state?',
                    'Why must a custom Hook start with "use"?',
                  ],
                },
                {
                  id: 'd6c2s1-8',
                  kind: 'qa',
                  title: 'Context vs Prop Drilling',
                  emoji: '📡',
                  question: 'What is prop drilling and how does Context solve it?',
                  body:
                    "**Prop drilling** is passing data through many intermediate components that do not use it, just to reach a deep child. It is noisy and brittle. **Context** lets you provide a value at the top and read it directly anywhere below with `useContext`, skipping the relay. Use it for app-wide, slow-changing data like theme or user. The trade-off: all consumers re-render when the context value changes, so memoize the value and split unrelated data into separate contexts.",
                  followUps: [
                    'What performance pitfall comes with Context?',
                    'When is prop drilling actually fine to leave alone?',
                  ],
                },
                {
                  id: 'd6c2s1-9',
                  kind: 'qa',
                  title: 'Suspense & lazy',
                  emoji: '🪂',
                  question: 'How do React.lazy and Suspense work together?',
                  body:
                    "`React.lazy(() => import(\"./X\"))` defers loading a component into its own bundle chunk until it renders, enabling code splitting. While that chunk downloads, `<Suspense fallback={...}>` shows a fallback UI, then swaps in the real component when ready. The biggest wins come from splitting at the route level so users only download the page they visit. This shrinks the initial bundle and speeds first load without you wiring up manual loading state.",
                  terms: [
                    { term: 'Code splitting', definition: 'Breaking the bundle into chunks loaded on demand.' },
                  ],
                  followUps: [
                    'Where in an app gives the biggest code-splitting win?',
                    'What does the Suspense fallback prop do?',
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'd6c3',
          title: 'Rapid-fire Quiz',
          emoji: '⚡',
          description: 'Quick checks to test your reflexes.',
          sections: [
            {
              id: 'd6c3s1',
              title: 'Lightning Round',
              summary: 'Six fast questions across the whole path.',
              cards: [
                {
                  id: 'd6c3s1-1',
                  kind: 'quiz',
                  title: 'Hooks Rule',
                  emoji: '📏',
                  question: 'Which statement about the rules of Hooks is correct?',
                  options: [
                    { id: 'a', text: 'Hooks may be called inside conditions for flexibility.', correct: false },
                    { id: 'b', text: 'Hooks must be called at the top level, in the same order each render.', correct: true },
                    { id: 'c', text: 'Hooks can be called from any plain function.', correct: false },
                    { id: 'd', text: 'Hooks only work in class components.', correct: false },
                  ],
                  explanation:
                    "React tracks Hooks by call order, so they must run at the top level of a component or custom Hook, unconditionally, every render.",
                },
                {
                  id: 'd6c3s1-2',
                  kind: 'quiz',
                  title: 'Ref Behavior',
                  emoji: '🎯',
                  question: 'Updating `ref.current` will…',
                  options: [
                    { id: 'a', text: 'trigger a re-render.', correct: false },
                    { id: 'b', text: 'persist the value without re-rendering.', correct: true },
                    { id: 'c', text: 'throw an error.', correct: false },
                    { id: 'd', text: 'reset all state.', correct: false },
                  ],
                  explanation:
                    "Refs persist across renders but never trigger one when changed — the key difference from state.",
                },
                {
                  id: 'd6c3s1-3',
                  kind: 'quiz',
                  title: 'memo Defeated',
                  emoji: '🧠',
                  question: 'A React.memo child re-renders every time. Likely cause?',
                  options: [
                    { id: 'a', text: 'A new inline function or object prop each render.', correct: true },
                    { id: 'b', text: 'memo is broken in React.', correct: false },
                    { id: 'c', text: 'The child uses useState.', correct: false },
                    { id: 'd', text: 'The parent never renders.', correct: false },
                  ],
                  explanation:
                    "memo compares props shallowly; a fresh reference each render looks changed. Stabilize with useMemo/useCallback.",
                },
                {
                  id: 'd6c3s1-4',
                  kind: 'quiz',
                  title: 'Effect Once',
                  emoji: '🌊',
                  question: 'An effect with `[]` deps runs…',
                  options: [
                    { id: 'a', text: 'after every render.', correct: false },
                    { id: 'b', text: 'once after mount; cleanup on unmount.', correct: true },
                    { id: 'c', text: 'never.', correct: false },
                    { id: 'd', text: 'only when props change.', correct: false },
                  ],
                  explanation:
                    "Empty deps mean nothing changes to retrigger it, so it runs once after mount and cleans up on unmount.",
                },
                {
                  id: 'd6c3s1-5',
                  kind: 'quiz',
                  title: 'Immutable Update',
                  emoji: '🧊',
                  question: 'Correct way to update one field of a state object?',
                  options: [
                    { id: 'a', text: 'user.name = "Ada"; setUser(user)', correct: false },
                    { id: 'b', text: 'setUser({ ...user, name: "Ada" })', correct: true },
                    { id: 'c', text: 'setUser(user.name = "Ada")', correct: false },
                    { id: 'd', text: 'delete user.name', correct: false },
                  ],
                  explanation:
                    "Spread into a new object so React sees a new reference and re-renders; mutating in place keeps the same reference.",
                },
                {
                  id: 'd6c3s1-6',
                  kind: 'quiz',
                  title: 'The 0 Trap',
                  emoji: '⚠️',
                  question: 'Why can `{count && <Badge />}` render a stray `0`?',
                  options: [
                    { id: 'a', text: '&& returns the falsy left value, and 0 is a renderable child.', correct: true },
                    { id: 'b', text: 'Badge always returns 0.', correct: false },
                    { id: 'c', text: 'JSX cannot render components.', correct: false },
                    { id: 'd', text: 'count is always a string.', correct: false },
                  ],
                  explanation:
                    "With &&, JS returns the left operand when falsy; 0 is falsy but still renders. Use `count > 0 && <Badge />`.",
                },
                {
                  id: 'd6c3s1-7',
                  kind: 'quiz',
                  title: 'List Keys',
                  emoji: '🔑',
                  question: 'Best key for a reorderable list?',
                  options: [
                    { id: 'a', text: 'The array index.', correct: false },
                    { id: 'b', text: 'A stable unique id from the data.', correct: true },
                    { id: 'c', text: 'Math.random() each render.', correct: false },
                    { id: 'd', text: 'No key at all.', correct: false },
                  ],
                  explanation:
                    "A stable id keeps each item matched across reorders. Indexes shift on reorder; random keys remount every render.",
                },
                {
                  id: 'd6c3s1-8',
                  kind: 'quiz',
                  title: 'Re-render Triggers',
                  emoji: '⚡',
                  question: 'Which does NOT trigger a re-render?',
                  options: [
                    { id: 'a', text: 'State change.', correct: false },
                    { id: 'b', text: 'New props from a parent.', correct: false },
                    { id: 'c', text: 'Mutating ref.current.', correct: true },
                    { id: 'd', text: 'Consumed context changing.', correct: false },
                  ],
                  explanation:
                    "Refs never cause re-renders. State, new props, and context changes all do.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
