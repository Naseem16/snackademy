import type { ProjectIdea } from './types'
// ProjectIdea = { title: string; brief: string; buildsOn?: string; stretch?: string }

// ─────────────────────────────────────────────────────────────────────────
// Progressive, build-along project ideas — one per domain, per course.
// Each course's per-domain projects form ONE cohesive project that grows as
// the learner advances. `buildsOn` is present on every domain except the
// first of each course.
// NOTE: any string containing an apostrophe uses DOUBLE quotes.
// ─────────────────────────────────────────────────────────────────────────

export const projectIdeas: Record<string, Record<string, ProjectIdea>> = {
  'aws-ai-practitioner': {
    d1: {
      title: "🛍️ Frame the Support Assistant",
      brief:
        "Kick off your **AI-powered customer support assistant** for an online store. Decide what is a classic **ML** job (e.g. `intent classification`, churn prediction) versus a broader **AI** task. Then frame it end-to-end:\n- the **problem** (auto-draft replies to tickets)\n- the **data** you have (past tickets, order history)\n- a **success metric** (deflection rate, CSAT, response time)\nWrite a one-page problem statement you can defend.",
      stretch: "Sketch a simple confusion-matrix idea for how you would measure a classifier that routes tickets.",
    },
    d2: {
      title: "✍️ Draft Replies with a Foundation Model",
      brief:
        "Give your assistant a voice. Pick a **foundation model** approach and design the prompts that draft support replies. Experiment with:\n- **temperature** (low for factual, higher for friendly tone)\n- **few-shot** examples that model your store's ideal reply style\n- a system prompt that sets persona and guardrail hints\nCollect 3-5 sample tickets and hand-craft the prompt that produces the best draft.",
      buildsOn:
        "Takes the problem, data, and success metric you framed in d1 and now generates the actual reply text with a foundation model.",
      stretch: "Compare zero-shot vs few-shot outputs on the same ticket and note the quality difference.",
    },
    d3: {
      title: "📚 Ground It in Your Store's Docs (RAG)",
      brief:
        "Stop the model from guessing policy. Ground answers in your store's **FAQ and policy docs** using **RAG** backed by a **Bedrock knowledge base**. Design the flow:\n- chunk & embed your docs, store them for retrieval\n- retrieve the top passages, then feed them into the prompt\n- pick the **AWS AI services** (Bedrock, OpenSearch/vector store, Lambda)\nSo a returns question is answered from *your* policy, not the model's memory.",
      buildsOn:
        "Feeds the few-shot prompts from d2 with retrieved, store-specific context so drafted replies are grounded in real policy.",
      stretch: "Add citations to the retrieved source doc so agents can verify each answer.",
    },
    d4: {
      title: "🛡️ Add Responsible-AI Guardrails",
      brief:
        "Make the assistant safe to trust. Layer in responsible-AI controls:\n- **guardrails** that block off-topic or unsafe requests\n- **bias and toxicity checks** on both input and generated output\n- a **human-in-the-loop** review step for low-confidence or sensitive replies\nDefine when a draft auto-sends versus when a human must approve, and log every override.",
      buildsOn:
        "Wraps the RAG-grounded replies from d3 in guardrails and review so grounded answers are also responsible ones.",
      stretch: "Draft an escalation policy: which categories (refunds, complaints) always route to a person.",
    },
    d5: {
      title: "🔐 Secure, Govern & Audit the Assistant",
      brief:
        "Ship it responsibly for production. Add security, compliance, and governance:\n- **IAM** least-privilege roles and **encryption** at rest & in transit for ticket data\n- **audit logging** (CloudTrail) and a model/data governance record\n- **privacy controls** — redact PII before it hits the model, define retention\nProduce a short governance checklist proving who can access what and how it is tracked.",
      buildsOn:
        "Puts the guardrailed assistant from d4 behind proper IAM, encryption, privacy, and audit controls for real customer data.",
      stretch: "Map your controls to a compliance framework (e.g. GDPR data-subject rights) in a one-page matrix.",
    },
  },

  'aws-solutions-architect': {
    d1: {
      title: "📸 Lay a Secure Foundation",
      brief:
        "Start architecting a **photo-sharing web app** on AWS, security-first. Design the secure base:\n- a **VPC** with public and private subnets\n- **IAM roles** for the app tier (no hard-coded keys)\n- **security groups** that only open what is needed\n- **encryption** for photos in **S3** and metadata in the database\nDraw the architecture diagram and label every trust boundary.",
      stretch: "Add an S3 bucket policy that blocks public access and forces HTTPS-only requests.",
    },
    d2: {
      title: "🏗️ Make It Resilient",
      brief:
        "Survive a failure. Harden the app for availability:\n- go **multi-AZ** across at least two Availability Zones\n- front it with an **Application Load Balancer** + **Auto Scaling** group\n- run a **Multi-AZ** database with automatic failover\n- add **backups** and a documented **DR** approach (RPO/RTO)\nShow how one AZ can die without taking the site down.",
      buildsOn:
        "Takes the secure VPC and IAM foundation from d1 and spreads it across AZs with load balancing, scaling, and failover.",
      stretch: "Define your recovery objectives and pick a DR pattern (backup-restore vs pilot light).",
    },
    d3: {
      title: "⚡ Tune for High Performance",
      brief:
        "Make it fast at scale. Add performance layers:\n- **CloudFront** to cache and serve photos at the edge\n- **ElastiCache** for hot metadata / session data\n- the right **compute and storage** choices for the workload\n- **decouple** uploads and thumbnail processing with **SQS**\nDescribe how a viral photo now stays snappy under load.",
      buildsOn:
        "Adds caching, edge delivery, and async decoupling on top of the resilient multi-AZ architecture from d2.",
      stretch: "Add a Lambda worker that consumes the SQS queue to generate thumbnails asynchronously.",
    },
    d4: {
      title: "💰 Optimize the Bill",
      brief:
        "Keep it lean. Cost-optimize without breaking resilience or speed:\n- **right-size** instances and storage classes\n- choose **pricing models** — **Spot** for workers, **Savings Plans** for baseline\n- add **S3 lifecycle** rules to tier old photos to cheaper storage\n- set **AWS Budgets** and alerts so surprises never happen\nProduce a before/after cost estimate for the whole stack.",
      buildsOn:
        "Right-sizes and re-prices the high-performing architecture from d3 while preserving its resilience and speed.",
      stretch: "Model the savings from moving thumbnail workers to Spot and archiving 1-year-old photos to Glacier.",
    },
  },

  javascript: {
    d1: {
      title: "🧮 Model the Expenses",
      brief:
        "Begin a vanilla-JS **Expense Tracker**. Using core language basics, model a single expense with **variables** and the right **types** (`amount`, `category`, `date`). Then use **operators** and **control flow** to:\n- add a few expenses\n- compute a running **total**\n- flag any expense over a threshold with an `if`\nLog it all to the console — no UI yet, just clean logic.",
      stretch: "Add a simple loop that prints each expense as a formatted line.",
    },
    d2: {
      title: "🔧 Refactor into Functions",
      brief:
        "Clean up the logic. Extract behavior into **reusable functions** like `addExpense()` and `formatMoney()`. Then use a **closure** to create a running-total (or ID counter) that remembers its state between calls:\n- `makeTotaler()` returns a function that keeps summing\n- no global variables leaking everywhere\nNotice how **scope** protects your data.",
      buildsOn:
        "Wraps the loose variables and inline math from d1 inside functions and a stateful closure.",
      stretch: "Write a higher-order function that takes a formatter and returns a customized printer.",
    },
    d3: {
      title: "📊 Objects, Arrays & Summaries",
      brief:
        "Give expenses real shape. Store each as an **object** inside an **array**, then summarize with array methods:\n- **map** to reshape (e.g. amounts only)\n- **filter** to pick a category\n- **reduce** to total spending and build a per-category breakdown\nReturn a tidy summary object like `{ food: 42, travel: 88 }`.",
      buildsOn:
        "Feeds the functions and closure from d2 with a proper array of expense objects instead of loose values.",
      stretch: "Sort categories by spend and find your single most expensive purchase.",
    },
    d4: {
      title: "🌐 Go Async",
      brief:
        "Bring in the outside world. Use **async/await** to `fetch` live **currency rates** and convert totals to another currency. Handle the real-world messiness:\n- show a **loading** state while the request is in flight\n- **catch** errors and fall back gracefully\n- (conceptually) persist the fetched rates so you do not re-fetch\nWrap the call in a try/catch and think in **Promises**.",
      buildsOn:
        "Takes the summaries from d3 and converts them using live rates pulled asynchronously from an API.",
      stretch: "Cache the rates with a timestamp and only re-fetch when they are older than an hour.",
    },
    d5: {
      title: "🖼️ Wire Up the DOM",
      brief:
        "Make it real in the browser. Use the **DOM** and **events** to turn logic into an app:\n- **render** the expense list to the page\n- add a **form** with a `submit` event that adds a new expense\n- update the total live on each change\n- save and reload the list from **localStorage**\nYour tracker now survives a page refresh.",
      buildsOn:
        "Puts the object array and async totals from d4 onto an actual page with form input and persistence.",
      stretch: "Add a delete button per row using event delegation on the list container.",
    },
    d6: {
      title: "🧩 Modernize with Modules",
      brief:
        "Level up the codebase. Refactor into **ES modules** and modern patterns:\n- split logic into `import`/`export` files (`store.js`, `ui.js`, `api.js`)\n- introduce a **class** like `ExpenseStore` to own the data\n- clean up with **destructuring**, template literals, spread, and optional chaining\nSame app, dramatically cleaner and easier to extend.",
      buildsOn:
        "Reorganizes the single-file DOM app from d5 into modules and a class using modern syntax.",
      stretch: "Add a tiny pub/sub so the UI auto-updates whenever the store changes.",
    },
    d7: {
      title: "🎯 Interview Prep Drill",
      brief:
        "**Prep challenge — not a build.** Mine your Expense Tracker journey for the toughest concepts (closures, `this`, event loop, `map/filter/reduce`, hoisting) and assemble your own **timed flashcard drill**:\n- write a card per concept with a crisp answer\n- shuffle, set a 60-second timer per card\n- **explain each aloud** as if to an interviewer\nScore yourself and re-drill the ones you fumbled.",
      buildsOn:
        "Turns the concepts you applied across d1-d6 into a self-quiz instead of adding more app features.",
      stretch: "Record yourself explaining closures and the event loop, then critique your own clarity.",
    },
  },

  reactjs: {
    d1: {
      title: "⚛️ Componentize the Tracker",
      brief:
        "Rebuild the **Expense Tracker in React**. Break the UI into **components** — `App`, `ExpenseList`, `ExpenseItem` — and render a **static list from props**. Focus on:\n- clean component boundaries\n- passing data down via **props**\n- JSX that maps an array to elements with proper structure\nNo state yet — just a well-composed, static render.",
      stretch: "Extract a reusable presentational `Money` component for consistent currency formatting.",
    },
    d2: {
      title: "🎛️ Add State & Events",
      brief:
        "Make it interactive. Add a **controlled form** using **useState** to capture and add new expenses. Then:\n- **lift state up** so the parent owns the expense array\n- pass an `onAdd` handler down to the form\n- show a **live total** that recomputes on every change\nUnidirectional data flow, done right.",
      buildsOn:
        "Turns the static prop-driven components from d1 into a stateful app that can add expenses.",
      stretch: "Add basic form validation and disable submit until the input is valid.",
    },
    d3: {
      title: "🪝 Hooks In Depth",
      brief:
        "Go deeper with hooks. Fetch **exchange rates** inside **useEffect** (with a proper dependency array and cleanup), then refactor for reuse:\n- extract a **custom hook** `useExchangeRates()`\n- persist state with a **useLocalStorage** hook so data survives refresh\nSeparate side effects from rendering cleanly.",
      buildsOn:
        "Adds data fetching and persistence to the stateful form app from d2 via reusable custom hooks.",
      stretch: "Handle loading and error states inside the hook and expose them to the UI.",
    },
    d4: {
      title: "🚀 Rendering & Performance",
      brief:
        "Make it fast. Tune rendering:\n- **memoize** the summary with `useMemo` / `React.memo`\n- fix **unnecessary re-renders** (stable callbacks via `useCallback`)\n- give every list row a correct, stable **key**\nUse the React DevTools profiler to prove the wasted renders are gone.",
      buildsOn:
        "Optimizes the hook-powered app from d3 so fetching and state updates no longer trigger needless re-renders.",
      stretch: "Add a deliberately expensive derived calc and show useMemo eliminating the lag.",
    },
    d5: {
      title: "🏛️ Patterns & Real-App Structure",
      brief:
        "Grow into a real app. Add production patterns:\n- **Context** for global state (theme, currency, expense store)\n- a couple of **routes** (list view + details/settings) with React Router\n- an **error boundary** so one broken component does not crash the app\nStructure it the way a shippable React app should look.",
      buildsOn:
        "Wraps the performant app from d4 in global Context, routing, and error handling for a full app shell.",
      stretch: "Add a route-level loading fallback with Suspense-style UX.",
    },
    d6: {
      title: "🎤 React Interview Prep",
      brief:
        "**Prep challenge — not a build.** Turn everything you built into interview ammo. Create your own set of **React Q&A cards** covering hooks, reconciliation, keys, Context vs props, and performance. Then run a **mock interview**:\n- answer each card aloud\n- explain the **tradeoffs** (Context vs Redux, useMemo cost/benefit)\n- have a friend or timer keep you honest\nRefine the answers you stumble on.",
      buildsOn:
        "Converts the concepts you applied across d1-d5 into a self-quiz and mock interview rather than new features.",
      stretch: "Prepare a 2-minute whiteboard explanation of how React re-renders and diffs the tree.",
    },
  },
}
