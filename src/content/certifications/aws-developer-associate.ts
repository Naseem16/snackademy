import type { Certification } from '../types'

export const awsDeveloperAssociate: Certification = {
  id: 'aws-developer-associate',
  kind: 'certification',
  code: 'DVA-C02',
  title: 'AWS Certified Developer – Associate',
  shortTitle: 'Developer',
  provider: 'AWS',
  level: 'Associate',
  gradient: 'from-emerald-500 to-teal-600',
  icon: '🧑‍💻',
  tagline: 'Build & ship on AWS',
  description:
    "The DVA-C02 exam is all about writing, deploying, and debugging real applications on AWS. This course turns the dense docs into friendly, bite-sized cards — Lambda, DynamoDB, API Gateway, SQS, Cognito, CloudFormation, CodePipeline, X-Ray and more — with analogies, worked examples, diagrams, and quizzes so it actually sticks.",
  examFacts: [
    { label: 'Questions', value: '65' },
    { label: 'Duration', value: '130 minutes' },
    { label: 'Passing score', value: '720 / 1000' },
    { label: 'Cost', value: '$150 USD' },
    { label: 'Format', value: 'Multiple choice / multiple response' },
    { label: 'Validity', value: '3 years' },
  ],
  version: '2024.10',
  lastUpdated: '2025-01-15',
  available: true,
  domains: [
    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 1 — Development with AWS Services (32%)
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd1',
      title: 'Development with AWS Services',
      emoji: '🛠️',
      weight: '32%',
      description:
        "The biggest slice. Write serverless code with Lambda, store data in DynamoDB, expose APIs, and wire services together with SQS, SNS, EventBridge and more.",
      project: {
        title: 'Serverless Notes API 📝',
        brief:
          "Build a serverless REST API for a simple **notes / tasks** app. Users can create, read, update and delete notes.\n\n- **API Gateway** exposes the REST endpoints.\n- **Lambda** functions hold the business logic (one per operation, or a single router).\n- **DynamoDB** stores notes with `userId` as the partition key and `noteId` as the sort key.\n\nUse the AWS SDK inside Lambda, handle errors gracefully, and make writes idempotent.",
        stretch:
          "Add a **Global Secondary Index** to query notes by tag, and push new-note events to an **SNS** topic that fans out to an SQS queue for async processing.",
      },
      chapters: [
        // ─── Chapter 1: Lambda ───────────────────────────────────────────
        {
          id: 'd1c1',
          title: 'AWS Lambda',
          emoji: '⚡',
          description: 'Run code without managing servers — the heart of serverless on AWS.',
          sections: [
            {
              id: 'd1c1s1',
              title: 'Lambda Fundamentals',
              summary: 'What Lambda is, how it runs, and how you pay for it.',
              cards: [
                {
                  id: 'd1c1s1-1',
                  kind: 'concept',
                  title: 'What is AWS Lambda? ⚡',
                  emoji: '⚡',
                  body:
                    "**Lambda** runs your code in response to events without you provisioning or managing servers. You upload a function, pick a runtime (Node.js, Python, Java, Go, etc.), and AWS runs it on demand.\n\nYou are billed only for the time your code runs, measured in **milliseconds**, plus the memory you allocate. Idle costs nothing.",
                  terms: [
                    { term: 'Function', definition: 'The unit of code Lambda runs, with a handler as its entry point.' },
                    { term: 'Runtime', definition: 'The language environment (e.g. Node.js 20) that executes your handler.' },
                    { term: 'Handler', definition: 'The method Lambda calls, receiving the event and context objects.' },
                    { term: 'Invocation', definition: 'A single run of your function triggered by an event.' },
                  ],
                },
                {
                  id: 'd1c1s1-2',
                  kind: 'analogy',
                  title: 'The vending machine 🥤',
                  emoji: '🥤',
                  body:
                    "Lambda is like a vending machine. It sits there costing nothing until someone presses a button (an event). Then it springs to life, delivers exactly one snack (runs your code), and goes quiet again.\n\nYou never pay to keep the machine warm — only for each snack dispensed. Traditional servers are like hiring a chef who is paid all day even when nobody orders.",
                },
                {
                  id: 'd1c1s1-3',
                  kind: 'concept',
                  title: 'Memory, timeout & the CPU trick 🧠',
                  emoji: '🧠',
                  body:
                    "You set **memory** (128 MB up to 10,240 MB) and a **timeout** (max **15 minutes**).\n\nHere is the exam gotcha: **CPU scales with memory**. There is no separate CPU dial. Giving a function more memory also gives it more CPU, so a CPU-bound function can run *faster and cheaper* with more memory.",
                  terms: [
                    { term: 'Timeout', definition: 'Max seconds a function may run before Lambda kills it; up to 900s (15 min).' },
                    { term: 'Memory allocation', definition: 'RAM assigned to a function; also proportionally controls CPU.' },
                  ],
                },
                {
                  id: 'd1c1s1-4',
                  kind: 'diagram',
                  title: 'Lambda invocation lifecycle',
                  emoji: '🔄',
                  diagram: {
                    type: 'cycle',
                    nodes: [
                      { label: 'Event', emoji: '📨', sublabel: 'trigger arrives' },
                      { label: 'Init', emoji: '🚀', sublabel: 'cold start: load code' },
                      { label: 'Invoke', emoji: '⚙️', sublabel: 'run handler' },
                      { label: 'Freeze', emoji: '🧊', sublabel: 'keep warm' },
                      { label: 'Shutdown', emoji: '💤', sublabel: 'reclaim env' },
                    ],
                  },
                },
                {
                  id: 'd1c1s1-5',
                  kind: 'concept',
                  title: 'Cold starts explained ❄️',
                  emoji: '❄️',
                  body:
                    "A **cold start** happens when Lambda must create a fresh execution environment: download your code, start the runtime, and run any init code *outside* the handler.\n\nAfter that first run the environment is **frozen and reused** (a warm start), which is fast. To cut cold starts, use **Provisioned Concurrency** or keep dependencies lean.",
                  terms: [
                    { term: 'Cold start', definition: 'The extra latency of setting up a brand-new execution environment.' },
                    { term: 'Execution environment', definition: 'The reusable micro-VM that runs your function code.' },
                  ],
                },
                {
                  id: 'd1c1s1-6',
                  kind: 'tip',
                  title: 'Exam gotcha: init code runs once ⚠️',
                  emoji: '⚠️',
                  body:
                    "Put expensive setup — SDK clients, DB connections, config — **outside** the handler. It runs during init and is reused across warm invocations.\n\nCode *inside* the handler runs every single invocation. Reusing a database connection object outside the handler is a classic optimization the exam loves to test.",
                },
                {
                  id: 'd1c1s1-7',
                  kind: 'quiz',
                  title: 'Quick check: Lambda basics',
                  question: 'A CPU-bound Lambda function runs slowly. What is the simplest way to speed it up?',
                  options: [
                    { id: 'a', text: 'Increase the function timeout', correct: false },
                    { id: 'b', text: 'Increase the allocated memory', correct: true },
                    { id: 'c', text: 'Switch the runtime to Java', correct: false },
                    { id: 'd', text: 'Add more environment variables', correct: false },
                  ],
                  explanation:
                    "CPU power scales with memory in Lambda. Allocating more memory also gives more CPU, so a CPU-bound function finishes faster. Timeout only sets the maximum run time, it does not add power.",
                },
              ],
            },
            {
              id: 'd1c1s2',
              title: 'Configuring & Versioning Lambda',
              summary: 'Environment variables, layers, versions, aliases, and concurrency.',
              cards: [
                {
                  id: 'd1c1s2-1',
                  kind: 'concept',
                  title: 'Environment variables 🔧',
                  emoji: '🔧',
                  body:
                    "**Environment variables** are key-value pairs available to your function code at runtime — great for config like table names or feature flags.\n\nThey can be encrypted with **KMS**. For anything sensitive (API keys, passwords), do not hard-code — fetch from **Secrets Manager** or **Parameter Store** instead.",
                  terms: [
                    { term: 'Environment variable', definition: 'A runtime config value injected into the function, separate from code.' },
                  ],
                },
                {
                  id: 'd1c1s2-2',
                  kind: 'concept',
                  title: 'Lambda Layers 📚',
                  emoji: '📚',
                  body:
                    "A **layer** is a ZIP of libraries or shared code you attach to functions. Instead of bundling the same dependencies into every function, package them once as a layer and reuse it.\n\nA function can use up to **5 layers**, and the total unzipped size (function + layers) must stay under **250 MB**.",
                  terms: [
                    { term: 'Layer', definition: 'Reusable package of dependencies or code shared across functions.' },
                  ],
                },
                {
                  id: 'd1c1s2-3',
                  kind: 'concept',
                  title: 'Versions & aliases 🏷️',
                  emoji: '🏷️',
                  body:
                    "Publishing a **version** creates an immutable snapshot of your code and config with a number (1, 2, 3...). `$LATEST` is the mutable draft.\n\nAn **alias** is a friendly pointer (like `prod` or `dev`) to a version. Aliases can split traffic between two versions by weight — the basis of Lambda canary deployments.",
                  terms: [
                    { term: 'Version', definition: 'An immutable, numbered snapshot of a function you can invoke directly.' },
                    { term: 'Alias', definition: 'A named, movable pointer to a version, supporting weighted traffic splits.' },
                  ],
                },
                {
                  id: 'd1c1s2-4',
                  kind: 'analogy',
                  title: 'Aliases are like DNS 🌐',
                  emoji: '🌐',
                  body:
                    "Think of versions as specific servers with fixed IP addresses — permanent and unchanging. An alias is like a DNS name (`prod.myapp.com`) that you can repoint to whichever server you want.\n\nDeploying becomes as simple as moving the alias to a new version. Rollback? Point it back. No code changes needed.",
                },
                {
                  id: 'd1c1s2-5',
                  kind: 'concept',
                  title: 'Concurrency controls 🚦',
                  emoji: '🚦',
                  body:
                    "**Concurrency** is how many invocations run at once. The account default limit is **1,000** across all functions in a region.\n\n- **Reserved concurrency** guarantees (and caps) capacity for one function so it cannot starve others.\n- **Provisioned concurrency** pre-warms environments to eliminate cold starts for latency-sensitive functions.",
                  terms: [
                    { term: 'Reserved concurrency', definition: 'A guaranteed, capped slice of concurrency for a single function.' },
                    { term: 'Provisioned concurrency', definition: 'Pre-initialized environments kept warm to avoid cold starts.' },
                  ],
                },
                {
                  id: 'd1c1s2-6',
                  kind: 'tip',
                  title: 'Throttling = 429 ⚠️',
                  emoji: '⚠️',
                  body:
                    "When concurrency limits are hit, Lambda **throttles**. Synchronous callers get a **429 TooManyRequests** error. Asynchronous invocations are retried automatically (twice), then sent to a **DLQ** or on-failure destination if configured.\n\nIf one function is being throttled by another hogging capacity, set reserved concurrency to protect it.",
                },
                {
                  id: 'd1c1s2-7',
                  kind: 'quiz',
                  title: 'Quick check: versions & aliases',
                  question: 'You want to send 10% of production traffic to a new function version. What do you use?',
                  options: [
                    { id: 'a', text: 'Two separate functions and a load balancer', correct: false },
                    { id: 'b', text: 'A weighted alias pointing at both versions', correct: true },
                    { id: 'c', text: 'Reserved concurrency on the new version', correct: false },
                    { id: 'd', text: 'A new environment variable per version', correct: false },
                  ],
                  explanation:
                    "An alias can point at two versions with a weighted split (e.g. 90/10), routing a percentage of traffic to the new version — the foundation of a canary release for Lambda.",
                },
              ],
            },
            {
              id: 'd1c1s3',
              title: 'Event Sources & Triggers',
              summary: 'Synchronous vs asynchronous invocation and event source mappings.',
              cards: [
                {
                  id: 'd1c1s3-1',
                  kind: 'concept',
                  title: 'Three invocation types 🎬',
                  emoji: '🎬',
                  body:
                    "Lambda can be invoked in three ways:\n\n- **Synchronous** — caller waits for the result (API Gateway, direct SDK call).\n- **Asynchronous** — event is queued, caller does not wait (S3, SNS, EventBridge). Lambda retries failures twice.\n- **Event source mapping (poll-based)** — Lambda polls a source and pulls batches (SQS, Kinesis, DynamoDB Streams).",
                  terms: [
                    { term: 'Synchronous invocation', definition: 'The caller waits for and receives the function response.' },
                    { term: 'Asynchronous invocation', definition: 'Lambda queues the event and returns immediately; it retries on failure.' },
                    { term: 'Event source mapping', definition: 'A poller that reads records from a stream/queue and invokes Lambda in batches.' },
                  ],
                },
                {
                  id: 'd1c1s3-2',
                  kind: 'diagram',
                  title: 'Who triggers Lambda?',
                  emoji: '🧲',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Synchronous', emoji: '⏱️', items: ['API Gateway', 'Application Load Balancer', 'Direct SDK Invoke', 'Step Functions'] },
                      { title: 'Asynchronous', emoji: '📨', items: ['S3 events', 'SNS', 'EventBridge', 'CloudWatch Logs'] },
                      { title: 'Poll-based', emoji: '🎣', items: ['SQS', 'Kinesis Data Streams', 'DynamoDB Streams'] },
                    ],
                  },
                },
                {
                  id: 'd1c1s3-3',
                  kind: 'example',
                  title: 'Worked example: S3 image resize 🖼️',
                  emoji: '🖼️',
                  body:
                    "A user uploads a photo to an S3 bucket. This is an **asynchronous** event.\n\n- S3 emits an `ObjectCreated` event.\n- Lambda is invoked with the bucket and key in the event payload.\n- The function downloads the object, creates a thumbnail, and writes it to a second bucket.\n\nIf the function errors, Lambda retries twice before optionally sending the event to a DLQ.",
                },
                {
                  id: 'd1c1s3-4',
                  kind: 'concept',
                  title: 'Batching from SQS & Kinesis 📦',
                  emoji: '📦',
                  body:
                    "For poll-based sources, an event source mapping reads records and hands Lambda a **batch**. You tune `BatchSize` and `MaximumBatchingWindow`.\n\nWith SQS, a successful batch deletes those messages. With streams (Kinesis, DynamoDB), records are read **in order per shard**, and a failure can block the shard unless you enable bisect-on-error or report partial batch failures.",
                  terms: [
                    { term: 'Batch size', definition: 'Max number of records delivered to the function in one invocation.' },
                    { term: 'Partial batch response', definition: 'Reporting only failed record IDs so successful ones are not reprocessed.' },
                  ],
                },
                {
                  id: 'd1c1s3-5',
                  kind: 'tip',
                  title: 'Gotcha: stream ordering blocks 🚧',
                  emoji: '🚧',
                  body:
                    "With Kinesis and DynamoDB Streams, records in a shard are processed **in order**. A single poison-pill record can retry forever and block the whole shard.\n\nFix it with **ReportBatchItemFailures** (partial batch response), a max retry age, or an on-failure destination so bad records get parked instead of stalling the pipeline.",
                },
                {
                  id: 'd1c1s3-6',
                  kind: 'quiz',
                  title: 'Quick check: event sources',
                  question: 'Which invocation type does an S3 ObjectCreated notification use?',
                  options: [
                    { id: 'a', text: 'Synchronous', correct: false },
                    { id: 'b', text: 'Asynchronous', correct: true },
                    { id: 'c', text: 'Poll-based event source mapping', correct: false },
                    { id: 'd', text: 'Scheduled cron', correct: false },
                  ],
                  explanation:
                    "S3 invokes Lambda asynchronously — S3 hands off the event and does not wait for a result. Lambda queues it and retries twice on failure.",
                },
              ],
            },
          ],
        },
        // ─── Chapter 2: DynamoDB ─────────────────────────────────────────
        {
          id: 'd1c2',
          title: 'DynamoDB',
          emoji: '🗄️',
          description: 'The serverless NoSQL database — fast, scalable key-value and document store.',
          sections: [
            {
              id: 'd1c2s1',
              title: 'Tables, Keys & Items',
              summary: 'Partition keys, sort keys, and how data is stored and found.',
              cards: [
                {
                  id: 'd1c2s1-1',
                  kind: 'concept',
                  title: 'What is DynamoDB? 🗄️',
                  emoji: '🗄️',
                  body:
                    "**DynamoDB** is a fully managed NoSQL database with single-digit millisecond latency at any scale. No servers to run.\n\nData lives in **tables** made of **items** (rows), and each item has **attributes** (fields). Unlike SQL, items in a table need not share the same attributes — only the key.",
                  terms: [
                    { term: 'Table', definition: 'A collection of items; the top-level container in DynamoDB.' },
                    { term: 'Item', definition: 'A single record (like a row), uniquely identified by its primary key.' },
                    { term: 'Attribute', definition: 'A field within an item; items can have different attributes.' },
                  ],
                },
                {
                  id: 'd1c2s1-2',
                  kind: 'concept',
                  title: 'Partition key & sort key 🔑',
                  emoji: '🔑',
                  body:
                    "The **primary key** identifies each item. Two options:\n\n- **Partition key only** (simple key) — must be unique per item, decides which physical partition stores it.\n- **Partition key + sort key** (composite key) — items sharing a partition key are stored together, sorted by the sort key. Great for one-to-many patterns.",
                  terms: [
                    { term: 'Partition key', definition: 'The hash key that determines which partition stores an item.' },
                    { term: 'Sort key', definition: 'An optional second key that orders items within a partition.' },
                  ],
                },
                {
                  id: 'd1c2s1-3',
                  kind: 'analogy',
                  title: 'A library with shelves 📚',
                  emoji: '📚',
                  body:
                    "The **partition key** is the shelf number — it tells you exactly which shelf a book lives on. The **sort key** is the position on that shelf, keeping books in order (say, by title).\n\nAsk for a shelf and you instantly get all its books, already sorted. That is why a query on partition key + sort key range is lightning fast.",
                },
                {
                  id: 'd1c2s1-4',
                  kind: 'compare',
                  title: 'Query vs Scan',
                  emoji: '🔍',
                  compare: {
                    headers: ['Aspect', 'Query', 'Scan'],
                    rows: [
                      ['Reads', 'Only items with a given partition key', 'Every item in the table'],
                      ['Speed', 'Fast & efficient', 'Slow on big tables'],
                      ['Cost', 'Low — reads a slice', 'High — reads everything'],
                      ['Use when', 'You know the partition key', 'Last resort / small tables'],
                    ],
                  },
                },
                {
                  id: 'd1c2s1-5',
                  kind: 'tip',
                  title: 'Gotcha: avoid Scan 🐌',
                  emoji: '🐌',
                  body:
                    "The exam repeatedly rewards **Query** over **Scan**. Scan reads the entire table and burns read capacity even for filtered results — the filter is applied *after* reading.\n\nIf you find yourself scanning, you probably need a better key design or a **Global Secondary Index** to query by that attribute directly.",
                },
                {
                  id: 'd1c2s1-6',
                  kind: 'quiz',
                  title: 'Quick check: keys',
                  question: 'You need to store many orders per customer and fetch them sorted by date. Best key design?',
                  options: [
                    { id: 'a', text: 'Partition key = orderId only', correct: false },
                    { id: 'b', text: 'Partition key = customerId, sort key = orderDate', correct: true },
                    { id: 'c', text: 'Partition key = orderDate only', correct: false },
                    { id: 'd', text: 'Scan the table and filter by customer', correct: false },
                  ],
                  explanation:
                    "A composite key (customerId partition + orderDate sort) groups a customer's orders together and keeps them sorted by date, so one Query returns them efficiently.",
                },
              ],
            },
            {
              id: 'd1c2s2',
              title: 'Indexes & Capacity',
              summary: 'GSIs, LSIs, read/write capacity modes, and DAX caching.',
              cards: [
                {
                  id: 'd1c2s2-1',
                  kind: 'concept',
                  title: 'GSI vs LSI 🗂️',
                  emoji: '🗂️',
                  body:
                    "Indexes let you query by attributes other than the table key.\n\n- **GSI (Global Secondary Index)** — different partition and sort key; can be added anytime; has its own capacity.\n- **LSI (Local Secondary Index)** — same partition key, different sort key; must be created at table creation; shares the table capacity.",
                  terms: [
                    { term: 'GSI', definition: 'Index with its own keys and capacity; add any time, eventually consistent.' },
                    { term: 'LSI', definition: 'Alternate sort key on the same partition; created only at table creation.' },
                  ],
                },
                {
                  id: 'd1c2s2-2',
                  kind: 'compare',
                  title: 'GSI vs LSI at a glance',
                  emoji: '⚖️',
                  compare: {
                    headers: ['Feature', 'GSI', 'LSI'],
                    rows: [
                      ['Partition key', 'Can differ from table', 'Same as table'],
                      ['When created', 'Any time', 'Only at table creation'],
                      ['Capacity', 'Its own', 'Shares table capacity'],
                      ['Consistency', 'Eventual only', 'Strong or eventual'],
                    ],
                  },
                },
                {
                  id: 'd1c2s2-3',
                  kind: 'concept',
                  title: 'Capacity: on-demand vs provisioned 📊',
                  emoji: '📊',
                  body:
                    "Two billing modes:\n\n- **On-demand** — pay per request, auto-scales instantly. Great for spiky or unknown traffic.\n- **Provisioned** — you set **RCUs** and **WCUs**; cheaper for steady, predictable load. Add auto-scaling to adjust within bounds.\n\nOne **RCU** = one strongly consistent read/sec of up to 4 KB. One **WCU** = one write/sec of up to 1 KB.",
                  terms: [
                    { term: 'RCU', definition: 'Read Capacity Unit: one strongly consistent 4 KB read per second.' },
                    { term: 'WCU', definition: 'Write Capacity Unit: one 1 KB write per second.' },
                  ],
                },
                {
                  id: 'd1c2s2-4',
                  kind: 'tip',
                  title: 'Gotcha: ProvisionedThroughputExceeded ⚠️',
                  emoji: '⚠️',
                  body:
                    "Exceed your provisioned capacity and DynamoDB throws **ProvisionedThroughputExceededException** (a 400). The SDK retries with **exponential backoff** automatically.\n\nCauses: a **hot partition** (uneven key distribution) or a traffic spike. Fixes: better key design, switch to on-demand, or enable auto-scaling.",
                },
                {
                  id: 'd1c2s2-5',
                  kind: 'concept',
                  title: 'DAX: microsecond caching ⚡',
                  emoji: '⚡',
                  body:
                    "**DAX** (DynamoDB Accelerator) is a fully managed, in-memory cache that sits in front of DynamoDB, cutting read latency from milliseconds to **microseconds** for read-heavy workloads.\n\nIt is write-through and API-compatible, so minimal code changes. Note: DAX is for DynamoDB only — use **ElastiCache** for general-purpose caching.",
                  terms: [
                    { term: 'DAX', definition: 'An in-memory, write-through cache purpose-built for DynamoDB reads.' },
                  ],
                },
                {
                  id: 'd1c2s2-6',
                  kind: 'quiz',
                  title: 'Quick check: indexes',
                  question: 'You need to query an existing table by a new attribute, and the table is already live. What fits?',
                  options: [
                    { id: 'a', text: 'Add a Local Secondary Index', correct: false },
                    { id: 'b', text: 'Add a Global Secondary Index', correct: true },
                    { id: 'c', text: 'Recreate the table with an LSI', correct: false },
                    { id: 'd', text: 'Enable DAX', correct: false },
                  ],
                  explanation:
                    "A GSI can be added to a live table at any time and can use a completely different key. An LSI can only be defined when the table is first created.",
                },
              ],
            },
            {
              id: 'd1c2s3',
              title: 'Streams, TTL & Advanced Ops',
              summary: 'DynamoDB Streams, TTL, transactions, and consistency.',
              cards: [
                {
                  id: 'd1c2s3-1',
                  kind: 'concept',
                  title: 'DynamoDB Streams 🌊',
                  emoji: '🌊',
                  body:
                    "A **Stream** is an ordered log of item-level changes (inserts, updates, deletes) in a table, kept for **24 hours**.\n\nA Lambda event source mapping can consume the stream to react to changes — replicate data, trigger notifications, or build aggregations. You choose what the record contains: keys only, new image, old image, or both.",
                  terms: [
                    { term: 'DynamoDB Stream', definition: 'A 24-hour, time-ordered change log of a table for event-driven processing.' },
                    { term: 'Stream view type', definition: 'What each record includes: KEYS_ONLY, NEW_IMAGE, OLD_IMAGE, or NEW_AND_OLD_IMAGES.' },
                  ],
                },
                {
                  id: 'd1c2s3-2',
                  kind: 'concept',
                  title: 'Consistency: eventual vs strong 🎯',
                  emoji: '🎯',
                  body:
                    "By default reads are **eventually consistent** — cheaper and may briefly return stale data just after a write.\n\nAsk for a **strongly consistent** read to always get the latest write, but it costs twice the RCUs and cannot be used on a GSI. Writes are always immediately durable across replicas.",
                  terms: [
                    { term: 'Eventually consistent read', definition: 'May return slightly stale data; costs 0.5 RCU per 4 KB.' },
                    { term: 'Strongly consistent read', definition: 'Always returns the latest data; costs 1 RCU per 4 KB, not on GSIs.' },
                  ],
                },
                {
                  id: 'd1c2s3-3',
                  kind: 'concept',
                  title: 'TTL & transactions ⏳',
                  emoji: '⏳',
                  body:
                    "**TTL (Time To Live)** auto-deletes items after a timestamp you store in an attribute — perfect for sessions or ephemeral data. Deletion is free but not instant (within ~48h).\n\n**Transactions** (`TransactWriteItems` / `TransactGetItems`) give all-or-nothing writes/reads across multiple items — use for money transfers or booking-style logic.",
                  terms: [
                    { term: 'TTL', definition: 'An expiry timestamp attribute that lets DynamoDB auto-delete stale items.' },
                    { term: 'Transaction', definition: 'An all-or-nothing group of reads or writes across multiple items.' },
                  ],
                },
                {
                  id: 'd1c2s3-4',
                  kind: 'diagram',
                  title: 'Streams-driven pipeline',
                  emoji: '🔗',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'Write to table', emoji: '✍️' },
                      { label: 'DynamoDB Stream', emoji: '🌊' },
                      { label: 'Lambda', emoji: '⚡' },
                      { label: 'Downstream action', emoji: '📤' },
                    ],
                  },
                },
                {
                  id: 'd1c2s3-5',
                  kind: 'tip',
                  title: 'Optimistic locking 🔒',
                  emoji: '🔒',
                  body:
                    "Prevent lost updates with a **version number** attribute and a **conditional write** (`ConditionExpression`). The write only succeeds if the version matches what you read.\n\nIf someone else updated first, the condition fails and you retry. This is **optimistic locking** — a common exam answer for concurrent update safety.",
                },
                {
                  id: 'd1c2s3-6',
                  kind: 'quiz',
                  title: 'Quick check: streams & TTL',
                  question: 'You want session records to disappear automatically after they expire, at no extra write cost. Use?',
                  options: [
                    { id: 'a', text: 'A scheduled Lambda scanning and deleting items', correct: false },
                    { id: 'b', text: 'DynamoDB TTL on an expiry timestamp attribute', correct: true },
                    { id: 'c', text: 'A DynamoDB transaction', correct: false },
                    { id: 'd', text: 'A Global Secondary Index', correct: false },
                  ],
                  explanation:
                    "TTL lets DynamoDB automatically delete items once their expiry timestamp passes, with no consumed write capacity — ideal for expiring sessions.",
                },
              ],
            },
          ],
        },
        // ─── Chapter 3: APIs & Integration ───────────────────────────────
        {
          id: 'd1c3',
          title: 'APIs & Integration Services',
          emoji: '🔌',
          description: 'Expose APIs and connect services with messaging, events, and orchestration.',
          sections: [
            {
              id: 'd1c3s1',
              title: 'API Gateway',
              summary: 'The front door for your APIs — routing, throttling, and caching.',
              cards: [
                {
                  id: 'd1c3s1-1',
                  kind: 'concept',
                  title: 'What is API Gateway? 🚪',
                  emoji: '🚪',
                  body:
                    "**API Gateway** is a managed front door for APIs. It handles routing, authorization, throttling, caching, and request/response transformation.\n\nIt offers **REST APIs** (feature-rich), **HTTP APIs** (cheaper, lower-latency, simpler), and **WebSocket APIs** (two-way real-time). It commonly sits in front of Lambda.",
                  terms: [
                    { term: 'REST API', definition: 'Full-featured API type with request validation, caching, and API keys.' },
                    { term: 'HTTP API', definition: 'A leaner, cheaper, faster API type for basic Lambda/HTTP proxying.' },
                    { term: 'Stage', definition: 'A named deployment of an API, like dev or prod, with its own settings.' },
                  ],
                },
                {
                  id: 'd1c3s1-2',
                  kind: 'diagram',
                  title: 'Request flow: the classic trio',
                  emoji: '➡️',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'Client', emoji: '📱' },
                      { label: 'API Gateway', emoji: '🚪', sublabel: 'auth, throttle' },
                      { label: 'Lambda', emoji: '⚡', sublabel: 'business logic' },
                      { label: 'DynamoDB', emoji: '🗄️', sublabel: 'store data' },
                    ],
                  },
                },
                {
                  id: 'd1c3s1-3',
                  kind: 'concept',
                  title: 'Throttling & caching 🚦',
                  emoji: '🚦',
                  body:
                    "API Gateway protects your backend with **throttling** — a steady-state rate and a burst limit. Exceed it and clients get **429 Too Many Requests**.\n\n**Stage-level caching** stores responses for a TTL so repeat requests skip the backend, cutting latency and cost. **Usage plans + API keys** let you throttle per customer.",
                  terms: [
                    { term: 'Throttling', definition: 'Rate and burst limits that shield the backend from overload.' },
                    { term: 'Usage plan', definition: 'Per-key quotas and throttle limits assigned to API consumers.' },
                  ],
                },
                {
                  id: 'd1c3s1-4',
                  kind: 'tip',
                  title: 'Gotcha: enable CORS ⚠️',
                  emoji: '⚠️',
                  body:
                    "Browser calls from a different origin fail unless you enable **CORS** on the API. That means responding to the preflight `OPTIONS` request with the right `Access-Control-Allow-*` headers.\n\nA classic exam symptom: the API works from Postman but the browser shows a CORS error. Fix it on API Gateway, not in Lambda.",
                },
                {
                  id: 'd1c3s1-5',
                  kind: 'example',
                  title: 'Lambda proxy integration 🧩',
                  emoji: '🧩',
                  body:
                    "With **Lambda proxy integration**, API Gateway passes the whole request (headers, path, query, body) to Lambda as one event, and expects a response shaped like `{ statusCode, headers, body }`.\n\nSimple to set up, but your function must build the full HTTP response itself. Non-proxy integrations use mapping templates instead.",
                },
                {
                  id: 'd1c3s1-6',
                  kind: 'quiz',
                  title: 'Quick check: API Gateway',
                  question: 'Your browser SPA gets a CORS error calling your API, but curl works. Where do you fix it?',
                  options: [
                    { id: 'a', text: 'Inside the Lambda business logic only', correct: false },
                    { id: 'b', text: 'Enable CORS on API Gateway (handle OPTIONS + headers)', correct: true },
                    { id: 'c', text: 'Increase the API Gateway throttle limit', correct: false },
                    { id: 'd', text: 'Switch DynamoDB to on-demand mode', correct: false },
                  ],
                  explanation:
                    "CORS is a browser-side protection. You enable it on API Gateway so it answers the preflight OPTIONS request and returns Access-Control-Allow-* headers.",
                },
              ],
            },
            {
              id: 'd1c3s2',
              title: 'Messaging: SQS & SNS',
              summary: 'Decouple systems with queues and pub/sub topics.',
              cards: [
                {
                  id: 'd1c3s2-1',
                  kind: 'concept',
                  title: 'SQS: the queue 📮',
                  emoji: '📮',
                  body:
                    "**SQS (Simple Queue Service)** is a managed message queue that decouples producers from consumers. Producers send messages; consumers poll and process them at their own pace.\n\nIf a consumer is slow or down, messages wait safely in the queue. This buffering makes systems resilient to spikes and failures.",
                  terms: [
                    { term: 'Queue', definition: 'A buffer that holds messages until a consumer processes and deletes them.' },
                    { term: 'Producer', definition: 'A component that sends messages to the queue.' },
                    { term: 'Consumer', definition: 'A component that polls, processes, then deletes messages.' },
                  ],
                },
                {
                  id: 'd1c3s2-2',
                  kind: 'compare',
                  title: 'SQS Standard vs FIFO',
                  emoji: '⚖️',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Standard', emoji: '📬', items: ['Nearly unlimited throughput', 'Best-effort ordering', 'At-least-once delivery', 'Possible duplicates'] },
                      { title: 'FIFO', emoji: '🔢', items: ['Strict ordering', 'Exactly-once processing', 'Up to 300 msg/s (3000 batched)', 'Dedup by group ID'] },
                    ],
                  },
                },
                {
                  id: 'd1c3s2-3',
                  kind: 'concept',
                  title: 'Visibility timeout 👁️',
                  emoji: '👁️',
                  body:
                    "When a consumer receives a message, SQS hides it for the **visibility timeout** (default 30s, max 12h). During this window others cannot see it.\n\nThe consumer must **delete** the message before the timeout expires; otherwise it reappears and may be processed again. Long jobs should extend the timeout with `ChangeMessageVisibility`.",
                  terms: [
                    { term: 'Visibility timeout', definition: 'How long a received message stays hidden from other consumers.' },
                  ],
                },
                {
                  id: 'd1c3s2-4',
                  kind: 'concept',
                  title: 'Dead-letter queues ☠️',
                  emoji: '☠️',
                  body:
                    "A **DLQ** is a separate queue that receives messages a consumer failed to process after a set number of tries (the **maxReceiveCount** in the redrive policy).\n\nInstead of poison messages looping forever, they land in the DLQ where you can inspect and reprocess them. A must-have for reliable processing.",
                  terms: [
                    { term: 'Dead-letter queue', definition: 'A queue capturing messages that repeatedly fail processing.' },
                    { term: 'maxReceiveCount', definition: 'The number of failed receives before a message moves to the DLQ.' },
                  ],
                },
                {
                  id: 'd1c3s2-5',
                  kind: 'concept',
                  title: 'SNS: pub/sub fan-out 📣',
                  emoji: '📣',
                  body:
                    "**SNS (Simple Notification Service)** is push-based pub/sub. Publishers send a message to a **topic**, and SNS pushes copies to all **subscribers** — Lambda, SQS, HTTP, email, SMS.\n\nThe **fan-out** pattern pairs SNS with multiple SQS queues so one event triggers many parallel workflows.",
                  terms: [
                    { term: 'Topic', definition: 'A named channel publishers send to and subscribers receive from.' },
                    { term: 'Fan-out', definition: 'One SNS message delivered to many subscribers (often SQS queues).' },
                  ],
                },
                {
                  id: 'd1c3s2-6',
                  kind: 'analogy',
                  title: 'Post office vs megaphone 📢',
                  emoji: '📢',
                  body:
                    "**SQS** is a post office: each letter waits in a box until exactly one recipient collects it. Work gets done one message at a time.\n\n**SNS** is a megaphone: shout once and everyone subscribed hears it at the same moment. No storing, no polling — instant push to all.",
                },
                {
                  id: 'd1c3s2-7',
                  kind: 'quiz',
                  title: 'Quick check: messaging',
                  question: 'You must process financial events in exact order with no duplicates. Which SQS type?',
                  options: [
                    { id: 'a', text: 'Standard queue', correct: false },
                    { id: 'b', text: 'FIFO queue', correct: true },
                    { id: 'c', text: 'SNS standard topic', correct: false },
                    { id: 'd', text: 'A DLQ', correct: false },
                  ],
                  explanation:
                    "FIFO queues guarantee strict ordering and exactly-once processing, which is exactly what ordered, duplicate-sensitive financial events require.",
                },
              ],
            },
            {
              id: 'd1c3s3',
              title: 'Events & Orchestration',
              summary: 'EventBridge, Step Functions, Kinesis, and ElastiCache.',
              cards: [
                {
                  id: 'd1c3s3-1',
                  kind: 'concept',
                  title: 'EventBridge: the event bus 🚌',
                  emoji: '🚌',
                  body:
                    "**EventBridge** is a serverless event bus. Sources publish events; **rules** match them by pattern and route to targets (Lambda, SQS, Step Functions, etc.).\n\nIt supports AWS service events, custom app events, and SaaS partner events, plus a **schema registry** and **scheduler**. Think SNS with smart content-based filtering and many integrations.",
                  terms: [
                    { term: 'Event bus', definition: 'A pipeline that receives events and routes them by rules to targets.' },
                    { term: 'Rule', definition: 'A pattern that matches events and forwards them to one or more targets.' },
                  ],
                },
                {
                  id: 'd1c3s3-2',
                  kind: 'concept',
                  title: 'Step Functions: workflows 🪜',
                  emoji: '🪜',
                  body:
                    "**Step Functions** orchestrates multiple services into a visual **state machine** defined in Amazon States Language (JSON). It handles sequencing, branching, parallelism, retries, and error handling for you.\n\n- **Standard** workflows: long-running (up to 1 year), exactly-once.\n- **Express** workflows: high-volume, short (up to 5 min), cheaper.",
                  terms: [
                    { term: 'State machine', definition: 'A workflow of states (tasks, choices, waits) that Step Functions runs.' },
                    { term: 'ASL', definition: 'Amazon States Language, the JSON DSL that defines a state machine.' },
                  ],
                },
                {
                  id: 'd1c3s3-3',
                  kind: 'concept',
                  title: 'Kinesis: streaming data 🌊',
                  emoji: '🌊',
                  body:
                    "**Kinesis Data Streams** ingests large, ordered, real-time data streams (clickstreams, logs, IoT). Data is split into **shards**; each shard has fixed read/write throughput.\n\nRecords stay for 24 hours (up to 365 days) so multiple consumers can replay them. Unlike SQS, records are **not deleted** on read — they expire by retention.",
                  terms: [
                    { term: 'Shard', definition: 'A throughput unit in a stream; scale by adding shards.' },
                    { term: 'Partition key', definition: 'Determines which shard a record goes to, preserving per-key order.' },
                  ],
                },
                {
                  id: 'd1c3s3-4',
                  kind: 'compare',
                  title: 'SQS vs Kinesis',
                  emoji: '🔀',
                  compare: {
                    headers: ['Aspect', 'SQS', 'Kinesis Data Streams'],
                    rows: [
                      ['Model', 'Queue (decouple)', 'Stream (real-time analytics)'],
                      ['On read', 'Message deleted after processing', 'Record stays until retention ends'],
                      ['Consumers', 'One per message', 'Many can replay the same data'],
                      ['Ordering', 'FIFO type only', 'Ordered per shard'],
                    ],
                  },
                },
                {
                  id: 'd1c3s3-5',
                  kind: 'concept',
                  title: 'ElastiCache: in-memory speed ⚡',
                  emoji: '⚡',
                  body:
                    "**ElastiCache** runs managed **Redis** or **Memcached** to cache data in memory, slashing database load and latency.\n\nA common pattern is **lazy loading (cache-aside)**: check the cache first, on a miss read the DB and populate the cache. Use a **TTL** to keep data fresh. Great for session stores and read-heavy apps.",
                  terms: [
                    { term: 'Cache-aside', definition: 'App reads cache first; on a miss, loads from DB and fills the cache.' },
                    { term: 'Write-through', definition: 'Every write updates the cache and DB together to stay in sync.' },
                  ],
                },
                {
                  id: 'd1c3s3-6',
                  kind: 'quiz',
                  title: 'Quick check: orchestration',
                  question: 'You need to coordinate a multi-step order workflow with retries, branching, and a wait step. Best fit?',
                  options: [
                    { id: 'a', text: 'A single giant Lambda function', correct: false },
                    { id: 'b', text: 'Step Functions state machine', correct: true },
                    { id: 'c', text: 'An SNS topic', correct: false },
                    { id: 'd', text: 'A Kinesis stream', correct: false },
                  ],
                  explanation:
                    "Step Functions is purpose-built to orchestrate multi-step workflows with built-in sequencing, branching, wait states, retries, and error handling — no glue code needed.",
                },
              ],
            },
          ],
        },
      ],
    },
    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 2 — Security (26%)
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd2',
      title: 'Security',
      emoji: '🔐',
      weight: '26%',
      description:
        "Authenticate users, authorize access with IAM, encrypt data with KMS, and manage secrets — securing your app end to end.",
      project: {
        title: 'Secure the Notes API 🔐',
        brief:
          "Lock down your notes app. Add **Amazon Cognito** so users sign up and sign in, and protect the API with a Cognito authorizer so each request is tied to a real user.\n\n- Store per-user notes keyed by the Cognito `sub`.\n- Encrypt sensitive config using **KMS**.\n- Move any API keys or DB credentials into **Secrets Manager** and fetch them at runtime.",
        buildsOn:
          "Extends the Domain 1 Serverless Notes API by adding authentication, authorization, and encryption on top of the existing API Gateway + Lambda + DynamoDB stack.",
        stretch:
          "Add a Cognito **identity pool** to grant the browser temporary, scoped AWS credentials for direct, per-user S3 uploads of note attachments.",
      },
      chapters: [
        // ─── Chapter 1: IAM & STS ────────────────────────────────────────
        {
          id: 'd2c1',
          title: 'IAM, Roles & STS',
          emoji: '🪪',
          description: 'Grant least-privilege access to your code with roles and temporary credentials.',
          sections: [
            {
              id: 'd2c1s1',
              title: 'Policies & Roles for Developers',
              summary: 'How your Lambda and services get permission to act.',
              cards: [
                {
                  id: 'd2c1s1-1',
                  kind: 'concept',
                  title: 'IAM policies are JSON 📜',
                  emoji: '📜',
                  body:
                    "An IAM policy lists statements with **Effect** (Allow/Deny), **Action** (e.g. `dynamodb:PutItem`), and **Resource** (an ARN).\n\nAWS combines all policies. The golden rules: an explicit **Deny** always beats an Allow, and anything not explicitly allowed is **implicitly denied**. Aim for **least privilege** — only the actions the code truly needs.",
                  terms: [
                    { term: 'Managed policy', definition: 'A reusable, standalone policy you attach to many identities.' },
                    { term: 'Inline policy', definition: 'A policy embedded directly in a single user, group, or role.' },
                    { term: 'Least privilege', definition: 'Granting only the minimum permissions required to do the job.' },
                  ],
                },
                {
                  id: 'd2c1s1-2',
                  kind: 'concept',
                  title: 'Execution roles > access keys 🔑',
                  emoji: '🔑',
                  body:
                    "Lambda, EC2, and ECS should get permissions via an **IAM role**, not hard-coded access keys. The service assumes the role and the SDK gets **temporary credentials** automatically.\n\nFor Lambda this is the **execution role**. Never bake long-term keys into code or environment variables — it is the number-one security anti-pattern the exam flags.",
                  terms: [
                    { term: 'Execution role', definition: "The IAM role Lambda assumes to get permissions at runtime." },
                    { term: 'Instance profile', definition: 'The wrapper that delivers a role to an EC2 instance.' },
                  ],
                },
                {
                  id: 'd2c1s1-3',
                  kind: 'analogy',
                  title: 'Roles are visitor badges 🎫',
                  emoji: '🎫',
                  body:
                    "Access keys are like giving someone a permanent master key — dangerous if lost. A **role** is a visitor badge issued at the front desk: it works only for a short time, only for certain doors, and expires on its own.\n\nServices assuming roles get fresh, short-lived badges continuously, so there is nothing long-lived to steal.",
                },
                {
                  id: 'd2c1s1-4',
                  kind: 'concept',
                  title: 'STS & AssumeRole ⏲️',
                  emoji: '⏲️',
                  body:
                    "**STS (Security Token Service)** issues **temporary credentials**. `AssumeRole` lets an identity take on a role — for cross-account access, or a service acting on your behalf.\n\nThe returned credentials (access key, secret, **session token**) expire after a set duration. All three must be sent with each signed request.",
                  terms: [
                    { term: 'STS', definition: 'The service that mints short-lived AWS credentials.' },
                    { term: 'Session token', definition: 'The extra token that must accompany temporary STS credentials.' },
                  ],
                },
                {
                  id: 'd2c1s1-5',
                  kind: 'tip',
                  title: 'Gotcha: resource-based vs identity-based ⚠️',
                  emoji: '⚠️',
                  body:
                    "**Identity-based** policies attach to a user/role and say what *it* can do. **Resource-based** policies attach to a resource (S3 bucket, SQS queue, Lambda) and say *who* can access it.\n\nCross-account access often needs a resource-based policy (e.g. a Lambda **resource policy** letting another account or service invoke it).",
                },
                {
                  id: 'd2c1s1-6',
                  kind: 'quiz',
                  title: 'Quick check: permissions',
                  question: 'How should a Lambda function get permission to write to DynamoDB?',
                  options: [
                    { id: 'a', text: 'Store IAM access keys in environment variables', correct: false },
                    { id: 'b', text: 'Attach an execution role with a dynamodb:PutItem policy', correct: true },
                    { id: 'c', text: 'Hard-code credentials in the deployment package', correct: false },
                    { id: 'd', text: 'Make the DynamoDB table public', correct: false },
                  ],
                  explanation:
                    "Lambda gets permissions from its execution role. Grant a least-privilege policy allowing the needed DynamoDB actions — never embed long-term access keys.",
                },
              ],
            },
            {
              id: 'd2c1s2',
              title: 'Signing Requests',
              summary: 'How AWS verifies your API calls with Signature Version 4.',
              cards: [
                {
                  id: 'd2c1s2-1',
                  kind: 'concept',
                  title: 'Signature Version 4 ✍️',
                  emoji: '✍️',
                  body:
                    "Every AWS API request must be **signed** so AWS can verify who sent it and that it was not tampered with. The current scheme is **SigV4**.\n\nGood news: the AWS SDK and CLI sign requests for you automatically using your credentials. You only sign manually when crafting raw HTTP requests (e.g. calling an IAM-authorized API Gateway from custom code).",
                  terms: [
                    { term: 'SigV4', definition: 'AWS Signature Version 4, the algorithm used to sign API requests.' },
                    { term: 'Canonical request', definition: 'A normalized form of the request that gets hashed and signed.' },
                  ],
                },
                {
                  id: 'd2c1s2-2',
                  kind: 'diagram',
                  title: 'How signing proves identity',
                  emoji: '🔏',
                  diagram: {
                    type: 'flow',
                    direction: 'vertical',
                    nodes: [
                      { label: 'Build canonical request', emoji: '📝' },
                      { label: 'Derive signing key from secret', emoji: '🔑' },
                      { label: 'Compute signature (HMAC)', emoji: '🔏' },
                      { label: 'Send in Authorization header', emoji: '📤' },
                      { label: 'AWS recomputes & compares', emoji: '✅' },
                    ],
                  },
                },
                {
                  id: 'd2c1s2-3',
                  kind: 'concept',
                  title: 'Presigned URLs 🔗',
                  emoji: '🔗',
                  body:
                    "A **presigned URL** grants temporary access to an S3 object using *your* credentials, embedded in the URL and time-limited.\n\nGenerate one with the SDK so a user can upload or download an object directly to/from S3 without AWS credentials of their own. Perfect for letting clients upload files securely.",
                  terms: [
                    { term: 'Presigned URL', definition: 'A time-limited URL granting temporary S3 access without sharing credentials.' },
                  ],
                },
                {
                  id: 'd2c1s2-4',
                  kind: 'tip',
                  title: 'Gotcha: clock skew ⏰',
                  emoji: '⏰',
                  body:
                    "SigV4 embeds a timestamp. If the client clock is off by more than a few minutes, AWS rejects the request with **RequestTimeTooSkewed** or a `SignatureDoesNotMatch` error.\n\nIf signing suddenly fails on one machine, check the system clock and NTP sync before blaming the credentials.",
                },
                {
                  id: 'd2c1s2-5',
                  kind: 'quiz',
                  title: 'Quick check: signing',
                  question: 'You want a browser to upload a file straight to S3 without giving it AWS credentials. Use?',
                  options: [
                    { id: 'a', text: 'A presigned URL generated by your backend', correct: true },
                    { id: 'b', text: 'Hard-code an IAM access key in the page', correct: false },
                    { id: 'c', text: 'Make the bucket fully public', correct: false },
                    { id: 'd', text: 'Disable SigV4 signing', correct: false },
                  ],
                  explanation:
                    "A presigned URL embeds your temporary, time-limited authorization so the client can PUT the object directly to S3 without holding any AWS credentials.",
                },
              ],
            },
          ],
        },
        // ─── Chapter 2: Cognito ──────────────────────────────────────────
        {
          id: 'd2c2',
          title: 'Authentication with Cognito',
          emoji: '👤',
          description: 'Sign users up and in, and give apps scoped access to AWS resources.',
          sections: [
            {
              id: 'd2c2s1',
              title: 'User Pools vs Identity Pools',
              summary: 'The two halves of Cognito and when to use each.',
              cards: [
                {
                  id: 'd2c2s1-1',
                  kind: 'concept',
                  title: 'What is Cognito? 👤',
                  emoji: '👤',
                  body:
                    "**Cognito** handles user identity for web and mobile apps. It has two parts that people constantly mix up:\n\n- **User Pools** — a user directory: sign-up, sign-in, MFA, password policies, and issuing tokens.\n- **Identity Pools** — hand out temporary **AWS credentials** so authenticated (or guest) users can call AWS services directly.",
                  terms: [
                    { term: 'User Pool', definition: 'A managed user directory that authenticates users and returns JWT tokens.' },
                    { term: 'Identity Pool', definition: 'A federated identity broker that exchanges tokens for temporary AWS credentials.' },
                  ],
                },
                {
                  id: 'd2c2s1-2',
                  kind: 'compare',
                  title: 'User Pool vs Identity Pool',
                  emoji: '⚖️',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'User Pool', emoji: '📇', items: ['Authentication (who are you)', 'Sign-up / sign-in UI', 'Returns JWT tokens', 'MFA & password policies'] },
                      { title: 'Identity Pool', emoji: '🎟️', items: ['Authorization to AWS', 'Returns AWS credentials via STS', 'Supports guest access', 'Maps identities to IAM roles'] },
                    ],
                  },
                },
                {
                  id: 'd2c2s1-3',
                  kind: 'analogy',
                  title: 'Nightclub door & wristband 🎶',
                  emoji: '🎶',
                  body:
                    "A **User Pool** is the bouncer checking your ID at the door — it confirms *who you are* and lets you in.\n\nAn **Identity Pool** is the wristband you get inside that unlocks specific areas (the VIP lounge, the bar) — it decides *what you can access* in the AWS world by handing you temporary credentials.",
                },
                {
                  id: 'd2c2s1-4',
                  kind: 'concept',
                  title: 'The three tokens 🎫',
                  emoji: '🎫',
                  body:
                    "After sign-in, a User Pool returns three JWTs:\n\n- **ID token** — who the user is (identity claims); use it to authorize API calls.\n- **Access token** — what the user can do (scopes) within the User Pool.\n- **Refresh token** — used to get new ID/access tokens without re-login.",
                  terms: [
                    { term: 'ID token', definition: 'A JWT of user identity claims, used to authorize requests.' },
                    { term: 'Refresh token', definition: 'A long-lived token used to obtain fresh ID and access tokens.' },
                  ],
                },
                {
                  id: 'd2c2s1-5',
                  kind: 'example',
                  title: 'Protecting API Gateway with Cognito 🛡️',
                  emoji: '🛡️',
                  body:
                    "Attach a **Cognito authorizer** to your API Gateway route. The client sends the **ID token** in the `Authorization` header.\n\nAPI Gateway validates the token against the User Pool before ever invoking Lambda. Invalid or missing token? The caller gets a **401 Unauthorized** and your function never runs — saving cost and blocking bad traffic.",
                },
                {
                  id: 'd2c2s1-6',
                  kind: 'quiz',
                  title: 'Quick check: Cognito',
                  question: 'Your app needs users to sign in AND then upload files directly to S3 with temporary AWS credentials. What do you use?',
                  options: [
                    { id: 'a', text: 'User Pool only', correct: false },
                    { id: 'b', text: 'Identity Pool only', correct: false },
                    { id: 'c', text: 'User Pool for sign-in, then Identity Pool for AWS credentials', correct: true },
                    { id: 'd', text: 'IAM users, one per app user', correct: false },
                  ],
                  explanation:
                    "The User Pool authenticates the user and returns tokens; the Identity Pool exchanges those tokens for temporary AWS credentials so the client can call S3 directly.",
                },
              ],
            },
          ],
        },
        // ─── Chapter 3: Encryption & Secrets ─────────────────────────────
        {
          id: 'd2c3',
          title: 'Encryption & Secrets',
          emoji: '🔒',
          description: 'Protect data at rest and in transit, and store secrets safely.',
          sections: [
            {
              id: 'd2c3s1',
              title: 'KMS & Envelope Encryption',
              summary: 'Managed keys and how large data gets encrypted efficiently.',
              cards: [
                {
                  id: 'd2c3s1-1',
                  kind: 'concept',
                  title: 'What is KMS? 🗝️',
                  emoji: '🗝️',
                  body:
                    "**KMS (Key Management Service)** creates and controls encryption keys called **CMKs / KMS keys**. Most AWS services integrate with it (S3, EBS, DynamoDB, Lambda env vars).\n\nKMS keys never leave AWS unencrypted. You call `Encrypt`/`Decrypt` and KMS does the crypto, logging every use in CloudTrail. Direct KMS encryption is limited to **4 KB** of data.",
                  terms: [
                    { term: 'KMS key', definition: 'A managed encryption key used to encrypt/decrypt data or other keys.' },
                    { term: 'AWS managed key', definition: 'A key AWS creates and manages for a service on your behalf.' },
                    { term: 'Customer managed key', definition: 'A key you create and control, with your own rotation and policy.' },
                  ],
                },
                {
                  id: 'd2c3s1-2',
                  kind: 'concept',
                  title: 'Envelope encryption ✉️',
                  emoji: '✉️',
                  body:
                    "Since KMS only encrypts up to 4 KB directly, large data uses **envelope encryption**:\n\n- Ask KMS for a **data key**. It returns the key in **plaintext** and **encrypted** form.\n- Encrypt your data locally with the plaintext data key, then discard it.\n- Store the encrypted data key beside the data. To decrypt, KMS unwraps the data key first.",
                  terms: [
                    { term: 'Data key', definition: 'A key generated by KMS to encrypt bulk data locally (via GenerateDataKey).' },
                    { term: 'Envelope encryption', definition: 'Encrypting data with a data key, then encrypting that data key with a KMS key.' },
                  ],
                },
                {
                  id: 'd2c3s1-3',
                  kind: 'diagram',
                  title: 'Envelope encryption flow',
                  emoji: '📦',
                  diagram: {
                    type: 'flow',
                    direction: 'vertical',
                    nodes: [
                      { label: 'GenerateDataKey', emoji: '🗝️', sublabel: 'KMS returns plaintext + encrypted key' },
                      { label: 'Encrypt data locally', emoji: '🔒', sublabel: 'use plaintext data key' },
                      { label: 'Discard plaintext key', emoji: '🗑️' },
                      { label: 'Store encrypted data + encrypted key', emoji: '💾' },
                    ],
                  },
                },
                {
                  id: 'd2c3s1-4',
                  kind: 'tip',
                  title: 'Gotcha: key policy + IAM ⚠️',
                  emoji: '⚠️',
                  body:
                    "Using a KMS key needs permission in **two** places: the IAM policy on the caller *and* the **key policy** on the key. If either denies, the call fails with `AccessDenied`.\n\nAlso remember rotation: AWS managed keys rotate automatically; customer managed keys need you to enable annual rotation.",
                },
                {
                  id: 'd2c3s1-5',
                  kind: 'quiz',
                  title: 'Quick check: KMS',
                  question: 'You need to encrypt a 500 MB file using KMS. What is the right approach?',
                  options: [
                    { id: 'a', text: 'Call KMS Encrypt directly on the whole file', correct: false },
                    { id: 'b', text: 'Use envelope encryption with a generated data key', correct: true },
                    { id: 'c', text: 'Store the file in a public bucket', correct: false },
                    { id: 'd', text: 'Base64-encode the file', correct: false },
                  ],
                  explanation:
                    "KMS Encrypt handles at most 4 KB. For large data, use envelope encryption: GenerateDataKey, encrypt the file locally with the data key, and store the encrypted data key alongside it.",
                },
              ],
            },
            {
              id: 'd2c3s2',
              title: 'Secrets Manager vs Parameter Store',
              summary: 'Where to keep credentials, keys, and config.',
              cards: [
                {
                  id: 'd2c3s2-1',
                  kind: 'concept',
                  title: 'Secrets Manager 🕵️',
                  emoji: '🕵️',
                  body:
                    "**Secrets Manager** stores secrets (DB passwords, API keys) encrypted with KMS, and — its headline feature — can **automatically rotate** them using a Lambda function.\n\nIt integrates natively with RDS, Redshift, and DocumentDB for hands-off rotation. It costs per secret per month, so it is the choice when rotation matters.",
                  terms: [
                    { term: 'Secret rotation', definition: 'Automatically changing a secret on a schedule via a Lambda function.' },
                  ],
                },
                {
                  id: 'd2c3s2-2',
                  kind: 'concept',
                  title: 'SSM Parameter Store 🗃️',
                  emoji: '🗃️',
                  body:
                    "**Systems Manager Parameter Store** holds config and secrets as parameters. **Standard** parameters are **free**; **SecureString** parameters are KMS-encrypted.\n\nIt is ideal for plain config (feature flags, endpoints) and secrets that do not need automatic rotation. It has no built-in rotation, but it is cheaper.",
                  terms: [
                    { term: 'SecureString', definition: 'A Parameter Store parameter encrypted at rest with KMS.' },
                    { term: 'Parameter hierarchy', definition: 'Path-like names (/app/prod/db) for organizing parameters.' },
                  ],
                },
                {
                  id: 'd2c3s2-3',
                  kind: 'compare',
                  title: 'Secrets Manager vs Parameter Store',
                  emoji: '⚖️',
                  compare: {
                    headers: ['Feature', 'Secrets Manager', 'Parameter Store'],
                    rows: [
                      ['Auto rotation', 'Built-in (Lambda)', 'None built-in'],
                      ['Cost', 'Per secret + API calls', 'Standard is free'],
                      ['Encryption', 'Always (KMS)', 'SecureString via KMS'],
                      ['Best for', 'Rotating credentials', 'Config & simple secrets'],
                    ],
                  },
                },
                {
                  id: 'd2c3s2-4',
                  kind: 'tip',
                  title: 'Gotcha: do not log secrets ⚠️',
                  emoji: '⚠️',
                  body:
                    "Fetch secrets at runtime from Secrets Manager or Parameter Store — never hard-code them in code or plain env vars, and never print them to **CloudWatch Logs**.\n\nCache the fetched value (outside the handler) to avoid an API call on every invocation, but refresh periodically so rotation takes effect.",
                },
                {
                  id: 'd2c3s2-5',
                  kind: 'quiz',
                  title: 'Quick check: secrets',
                  question: 'You store an RDS database password and want it rotated automatically every 30 days. Best service?',
                  options: [
                    { id: 'a', text: 'Parameter Store standard parameter', correct: false },
                    { id: 'b', text: 'Secrets Manager', correct: true },
                    { id: 'c', text: 'A Lambda environment variable', correct: false },
                    { id: 'd', text: 'An S3 object', correct: false },
                  ],
                  explanation:
                    "Secrets Manager has built-in automatic rotation with native RDS integration, making it the right choice when scheduled credential rotation is required.",
                },
              ],
            },
          ],
        },
      ],
    },
    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 3 — Deployment (24%)
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd3',
      title: 'Deployment',
      emoji: '🚀',
      weight: '24%',
      description:
        "Package, deploy, and release your code with CloudFormation, SAM, Elastic Beanstalk, and the AWS CodeSuite CI/CD pipeline.",
      project: {
        title: 'CI/CD for the Notes API 🚀',
        brief:
          "Automate shipping. Build a **CodePipeline** that goes from commit to production:\n\n- **CodeCommit** (or GitHub) holds the source.\n- **CodeBuild** installs deps, runs tests, and packages a **SAM** app.\n- **CodeDeploy** performs a **blue/green** (canary) release of the Lambda functions using weighted aliases, with automatic rollback on alarm.",
        buildsOn:
          "Takes the Cognito-secured Notes API from Domain 2 and puts it under automated, safe, repeatable deployments instead of manual uploads.",
        stretch:
          "Add a manual approval action before production and a CloudFormation change set preview so reviewers see exactly what will change.",
      },
      chapters: [
        // ─── Chapter 1: IaC ──────────────────────────────────────────────
        {
          id: 'd3c1',
          title: 'Infrastructure as Code',
          emoji: '📜',
          description: 'Define and deploy infrastructure with CloudFormation and SAM.',
          sections: [
            {
              id: 'd3c1s1',
              title: 'CloudFormation Basics',
              summary: 'Templates, stacks, and repeatable infrastructure.',
              cards: [
                {
                  id: 'd3c1s1-1',
                  kind: 'concept',
                  title: 'What is CloudFormation? 📜',
                  emoji: '📜',
                  body:
                    "**CloudFormation** lets you define AWS infrastructure as a **template** (YAML or JSON). Deploy the template and it creates a **stack** — all the resources, in the right order, managed as one unit.\n\nChange the template and CloudFormation figures out what to add, modify, or delete. Delete the stack and it cleans everything up. Infrastructure becomes repeatable and version-controlled.",
                  terms: [
                    { term: 'Template', definition: 'A YAML/JSON file describing the resources to create.' },
                    { term: 'Stack', definition: 'A deployed collection of resources managed together from a template.' },
                    { term: 'Change set', definition: 'A preview of what a template update will alter before you apply it.' },
                  ],
                },
                {
                  id: 'd3c1s1-2',
                  kind: 'concept',
                  title: 'Template anatomy 🧬',
                  emoji: '🧬',
                  body:
                    "Key template sections:\n\n- **Resources** (the only required section) — what to create.\n- **Parameters** — inputs you pass at deploy time.\n- **Mappings** — static lookup tables (e.g. AMI per region).\n- **Outputs** — values to export or show, like an endpoint URL.\n- Functions like `!Ref` and `!GetAtt` wire resources together.",
                  terms: [
                    { term: 'Parameter', definition: 'A deploy-time input value for a template.' },
                    { term: 'Output', definition: 'A returned value from a stack, optionally exported to other stacks.' },
                    { term: 'Intrinsic function', definition: 'Helpers like Ref and GetAtt that reference values in a template.' },
                  ],
                },
                {
                  id: 'd3c1s1-3',
                  kind: 'analogy',
                  title: 'A recipe you can re-cook 🍳',
                  emoji: '🍳',
                  body:
                    "A template is a recipe. Follow it once and you get a meal (a stack). Follow it in another kitchen (region/account) and you get the exact same meal.\n\nChange one ingredient and re-cook — CloudFormation only redoes what changed. Throw the meal away (delete the stack) and the kitchen is spotless again.",
                },
                {
                  id: 'd3c1s1-4',
                  kind: 'tip',
                  title: 'Gotcha: rollback & DeletionPolicy ⚠️',
                  emoji: '⚠️',
                  body:
                    "If a stack update fails, CloudFormation **rolls back** to the last good state by default. Handy, but a failed create can leave a `ROLLBACK_COMPLETE` stack you must delete before retrying.\n\nProtect data with **DeletionPolicy: Retain** on databases/buckets so deleting the stack does not wipe them.",
                },
                {
                  id: 'd3c1s1-5',
                  kind: 'quiz',
                  title: 'Quick check: CloudFormation',
                  question: 'Which template section is the only one that is required?',
                  options: [
                    { id: 'a', text: 'Parameters', correct: false },
                    { id: 'b', text: 'Outputs', correct: false },
                    { id: 'c', text: 'Resources', correct: true },
                    { id: 'd', text: 'Mappings', correct: false },
                  ],
                  explanation:
                    "Resources is the only mandatory section — it declares what AWS resources the stack creates. Parameters, Mappings, and Outputs are all optional.",
                },
              ],
            },
            {
              id: 'd3c1s2',
              title: 'SAM for Serverless',
              summary: 'The Serverless Application Model shorthand for CloudFormation.',
              cards: [
                {
                  id: 'd3c1s2-1',
                  kind: 'concept',
                  title: 'What is AWS SAM? 🐿️',
                  emoji: '🐿️',
                  body:
                    "**SAM (Serverless Application Model)** is a shorthand on top of CloudFormation for serverless apps. Add `Transform: AWS::Serverless-2016-10-31` and you get compact resource types like `AWS::Serverless::Function` and `AWS::Serverless::Api`.\n\nSAM expands these into full CloudFormation at deploy time, so you write far less YAML.",
                  terms: [
                    { term: 'Transform', definition: 'The macro directive that tells CloudFormation to expand SAM syntax.' },
                    { term: 'AWS::Serverless::Function', definition: 'The SAM resource for a Lambda function plus its triggers and role.' },
                  ],
                },
                {
                  id: 'd3c1s2-2',
                  kind: 'concept',
                  title: 'The SAM CLI 🛠️',
                  emoji: '🛠️',
                  body:
                    "The **SAM CLI** streamlines the serverless loop:\n\n- `sam build` — compile and gather dependencies.\n- `sam local invoke` / `sam local start-api` — run functions locally in Docker.\n- `sam deploy --guided` — package artifacts to S3 and deploy the stack.\n\nIt turns a multi-step CloudFormation packaging chore into a couple of commands.",
                  terms: [
                    { term: 'sam build', definition: 'Builds the function code and dependencies for deployment.' },
                    { term: 'sam deploy', definition: 'Packages artifacts and deploys the SAM stack via CloudFormation.' },
                  ],
                },
                {
                  id: 'd3c1s2-3',
                  kind: 'concept',
                  title: 'Built-in safe deployments 🛟',
                  emoji: '🛟',
                  body:
                    "SAM makes gradual Lambda deployments trivial. Add `DeploymentPreference` with a type like `Canary10Percent5Minutes` or `Linear10PercentEvery1Minute`.\n\nBehind the scenes SAM uses **CodeDeploy** and weighted **aliases** to shift traffic gradually, and can auto-rollback if a CloudWatch alarm fires.",
                  terms: [
                    { term: 'DeploymentPreference', definition: 'SAM setting that drives gradual, CodeDeploy-managed Lambda traffic shifting.' },
                  ],
                },
                {
                  id: 'd3c1s2-4',
                  kind: 'diagram',
                  title: 'SAM deploy flow',
                  emoji: '📦',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'sam build', emoji: '🔨' },
                      { label: 'sam package', emoji: '📦', sublabel: 'upload to S3' },
                      { label: 'sam deploy', emoji: '🚀', sublabel: 'CloudFormation stack' },
                      { label: 'CodeDeploy shifts traffic', emoji: '🚦' },
                    ],
                  },
                },
                {
                  id: 'd3c1s2-5',
                  kind: 'quiz',
                  title: 'Quick check: SAM',
                  question: 'What line at the top of a template tells CloudFormation to expand SAM syntax?',
                  options: [
                    { id: 'a', text: 'Type: AWS::Serverless', correct: false },
                    { id: 'b', text: 'Transform: AWS::Serverless-2016-10-31', correct: true },
                    { id: 'c', text: 'Runtime: sam', correct: false },
                    { id: 'd', text: 'DeploymentPreference: Canary', correct: false },
                  ],
                  explanation:
                    "The Transform: AWS::Serverless-2016-10-31 directive activates the SAM macro, which expands the concise serverless resources into full CloudFormation.",
                },
              ],
            },
          ],
        },
        // ─── Chapter 2: CI/CD Pipeline ───────────────────────────────────
        {
          id: 'd3c2',
          title: 'The CodeSuite CI/CD Pipeline',
          emoji: '🔁',
          description: 'Automate build, test, and release with the AWS developer tools.',
          sections: [
            {
              id: 'd3c2s1',
              title: 'CodeCommit, CodeBuild & CodePipeline',
              summary: 'Source, build, and orchestration of the pipeline.',
              cards: [
                {
                  id: 'd3c2s1-1',
                  kind: 'concept',
                  title: 'Meet the CodeSuite 🧰',
                  emoji: '🧰',
                  body:
                    "AWS offers a full CI/CD toolchain:\n\n- **CodeCommit** — managed Git repositories.\n- **CodeBuild** — build and test in the cloud.\n- **CodeDeploy** — automate deployments to EC2, Lambda, or ECS.\n- **CodePipeline** — orchestrate the whole flow, stage by stage.",
                  terms: [
                    { term: 'CodeCommit', definition: 'A fully managed, private Git repository service.' },
                    { term: 'CodeBuild', definition: 'A managed service that compiles, tests, and packages code.' },
                    { term: 'CodePipeline', definition: 'A workflow engine that chains source, build, and deploy stages.' },
                  ],
                },
                {
                  id: 'd3c2s1-2',
                  kind: 'diagram',
                  title: 'The CI/CD pipeline',
                  emoji: '🔗',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'CodeCommit', emoji: '📚', sublabel: 'source' },
                      { label: 'CodeBuild', emoji: '🔨', sublabel: 'build & test' },
                      { label: 'CodeDeploy', emoji: '🚀', sublabel: 'deploy' },
                      { label: 'CodePipeline', emoji: '🔁', sublabel: 'orchestrates all' },
                    ],
                  },
                },
                {
                  id: 'd3c2s1-3',
                  kind: 'concept',
                  title: 'buildspec.yml 📄',
                  emoji: '📄',
                  body:
                    "CodeBuild reads a **buildspec.yml** in your repo root. Its **phases** are `install`, `pre_build`, `build`, and `post_build`, plus **artifacts** to declare outputs.\n\nUse it to install dependencies, run unit tests, and package your app. If any command exits non-zero, the build fails and the pipeline stops.",
                  terms: [
                    { term: 'buildspec', definition: 'The YAML file defining CodeBuild phases and output artifacts.' },
                    { term: 'Artifact', definition: 'A build output passed between pipeline stages, stored in S3.' },
                  ],
                },
                {
                  id: 'd3c2s1-4',
                  kind: 'concept',
                  title: 'Stages, actions & artifacts 🎬',
                  emoji: '🎬',
                  body:
                    "A **pipeline** is a series of **stages** (Source, Build, Deploy). Each stage has **actions**. Between stages, **artifacts** flow through an S3 bucket.\n\nStages run in order; a failing stage halts the pipeline. You can add **manual approval** actions and parallel actions within a stage.",
                  terms: [
                    { term: 'Stage', definition: 'A phase of the pipeline containing one or more actions.' },
                    { term: 'Manual approval', definition: 'An action that pauses the pipeline until a human approves.' },
                  ],
                },
                {
                  id: 'd3c2s1-5',
                  kind: 'tip',
                  title: 'Gotcha: artifact bucket & roles ⚠️',
                  emoji: '⚠️',
                  body:
                    "CodePipeline stores artifacts in an **S3 bucket**; each service needs an IAM **service role** with access to it and to KMS if artifacts are encrypted.\n\nA common failure: CodeBuild cannot read the source artifact or write output because its role lacks S3/KMS permissions. Check the service roles first when a stage fails with AccessDenied.",
                },
                {
                  id: 'd3c2s1-6',
                  kind: 'quiz',
                  title: 'Quick check: CI/CD',
                  question: 'Where does CodeBuild look for its build instructions by default?',
                  options: [
                    { id: 'a', text: 'appspec.yml', correct: false },
                    { id: 'b', text: 'buildspec.yml in the repo root', correct: true },
                    { id: 'c', text: 'template.yaml', correct: false },
                    { id: 'd', text: 'pipeline.json', correct: false },
                  ],
                  explanation:
                    "CodeBuild reads buildspec.yml from the source root by default. It defines the install/pre_build/build/post_build phases and the artifacts to output.",
                },
              ],
            },
            {
              id: 'd3c2s2',
              title: 'CodeDeploy & Deployment Strategies',
              summary: 'In-place, blue/green, canary, and linear releases.',
              cards: [
                {
                  id: 'd3c2s2-1',
                  kind: 'concept',
                  title: 'CodeDeploy & appspec 🚀',
                  emoji: '🚀',
                  body:
                    "**CodeDeploy** automates releases to EC2/on-prem, Lambda, and ECS. It reads an **appspec.yml** describing what to deploy and lifecycle **hooks** (scripts to run before/after each step).\n\nFor EC2 the appspec maps files and hook scripts; for Lambda and ECS it points to versions/task definitions and validation hooks.",
                  terms: [
                    { term: 'appspec', definition: 'The file CodeDeploy uses to define deployment steps and lifecycle hooks.' },
                    { term: 'Lifecycle hook', definition: 'A script run at a specific deployment phase, e.g. BeforeAllowTraffic.' },
                  ],
                },
                {
                  id: 'd3c2s2-2',
                  kind: 'compare',
                  title: 'In-place vs Blue/Green',
                  emoji: '⚖️',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'In-place', emoji: '🔧', items: ['Updates existing instances', 'Brief downtime possible', 'No extra infra cost', 'Rollback = redeploy old'] },
                      { title: 'Blue/Green', emoji: '🟦🟩', items: ['New environment alongside old', 'Instant switch, easy rollback', 'Costs double briefly', 'Zero-downtime releases'] },
                    ],
                  },
                },
                {
                  id: 'd3c2s2-3',
                  kind: 'concept',
                  title: 'Canary vs Linear vs All-at-once 📈',
                  emoji: '📈',
                  body:
                    "Traffic-shifting configs (used by Lambda/ECS blue-green):\n\n- **Canary** — shift a small % first, wait, then the rest (e.g. `Canary10Percent5Minutes`).\n- **Linear** — shift equal chunks at intervals (e.g. `Linear10PercentEvery1Minute`).\n- **All-at-once** — flip 100% instantly. Fastest, riskiest.",
                  terms: [
                    { term: 'Canary deployment', definition: 'Send a small slice of traffic to the new version, then the rest.' },
                    { term: 'Linear deployment', definition: 'Shift traffic in equal increments on a fixed schedule.' },
                  ],
                },
                {
                  id: 'd3c2s2-4',
                  kind: 'analogy',
                  title: 'Testing bathwater 🛁',
                  emoji: '🛁',
                  body:
                    "**All-at-once** is jumping straight into the tub — could be scalding. **Canary** is dipping one toe first: if it burns, you pull back before diving in. **Linear** is easing in slowly, inch by inch.\n\nBlue/green keeps the *old* tub full and ready, so if the new one is bad you hop right back — instant rollback.",
                },
                {
                  id: 'd3c2s2-5',
                  kind: 'tip',
                  title: 'Gotcha: rollback needs alarms 🔔',
                  emoji: '🔔',
                  body:
                    "Automatic rollback only works if CodeDeploy has something to detect failure — usually a **CloudWatch alarm** on error rate or latency. No alarm, no auto-rollback.\n\nWire an alarm into the deployment group so a spike in 5xx errors during the canary window rolls traffic back to the previous version.",
                },
                {
                  id: 'd3c2s2-6',
                  kind: 'quiz',
                  title: 'Quick check: strategies',
                  question: 'You want zero-downtime releases with instant rollback by keeping the old version fully running. Which strategy?',
                  options: [
                    { id: 'a', text: 'In-place deployment', correct: false },
                    { id: 'b', text: 'Blue/green deployment', correct: true },
                    { id: 'c', text: 'All-at-once with no old version', correct: false },
                    { id: 'd', text: 'Manual SSH updates', correct: false },
                  ],
                  explanation:
                    "Blue/green spins up a new environment beside the old one and switches traffic over. The old environment stays ready, enabling instant rollback with no downtime.",
                },
              ],
            },
          ],
        },
        // ─── Chapter 3: Beanstalk & Containers ───────────────────────────
        {
          id: 'd3c3',
          title: 'Beanstalk & Containers',
          emoji: '📦',
          description: 'Higher-level deployment with Elastic Beanstalk and containers on ECS/ECR/Fargate.',
          sections: [
            {
              id: 'd3c3s1',
              title: 'Elastic Beanstalk',
              summary: 'Deploy apps without managing the underlying infrastructure.',
              cards: [
                {
                  id: 'd3c3s1-1',
                  kind: 'concept',
                  title: 'What is Elastic Beanstalk? 🌱',
                  emoji: '🌱',
                  body:
                    "**Elastic Beanstalk** is a **PaaS**: upload your code and it provisions and manages the EC2, load balancer, auto scaling, and health monitoring for you.\n\nYou keep full control of the underlying resources if you want, but day-to-day you just deploy code. It is free — you pay only for the resources it creates.",
                  terms: [
                    { term: 'Environment', definition: 'A running version of your app plus its AWS resources.' },
                    { term: 'Platform', definition: 'The preconfigured runtime stack (e.g. Node.js, Java, Docker).' },
                  ],
                },
                {
                  id: 'd3c3s1-2',
                  kind: 'concept',
                  title: 'Beanstalk deployment policies 🔀',
                  emoji: '🔀',
                  body:
                    "Beanstalk offers several deployment policies:\n\n- **All at once** — fast, but downtime.\n- **Rolling** — update instances in batches.\n- **Rolling with additional batch** — keeps full capacity during rollout.\n- **Immutable** — launch all new instances, then swap. Safest.\n- **Blue/green** via URL swap using environment cloning.",
                  terms: [
                    { term: 'Immutable deployment', definition: 'Deploy to brand-new instances, then switch, for safe rollback.' },
                    { term: 'Rolling deployment', definition: 'Update instances in batches to limit blast radius.' },
                  ],
                },
                {
                  id: 'd3c3s1-3',
                  kind: 'tip',
                  title: 'Gotcha: .ebextensions & env vars ⚠️',
                  emoji: '⚠️',
                  body:
                    "Customize a Beanstalk environment with config files in an **.ebextensions/** folder (packages, files, commands, options).\n\nStore configuration as **environment properties**, not in code, so the same artifact runs across environments. A `Procfile` or `Dockerrun.aws.json` controls how your app or container starts.",
                },
                {
                  id: 'd3c3s1-4',
                  kind: 'quiz',
                  title: 'Quick check: Beanstalk',
                  question: 'Which Beanstalk deployment policy launches an entirely new set of instances before switching, for safest rollback?',
                  options: [
                    { id: 'a', text: 'All at once', correct: false },
                    { id: 'b', text: 'Rolling', correct: false },
                    { id: 'c', text: 'Immutable', correct: true },
                    { id: 'd', text: 'In-place patch', correct: false },
                  ],
                  explanation:
                    "The Immutable policy provisions a fresh set of instances and only swaps traffic once they are healthy, so rollback is simply terminating the new instances.",
                },
              ],
            },
            {
              id: 'd3c3s2',
              title: 'Containers: ECS, ECR & Fargate',
              summary: 'Run Docker containers on AWS the managed way.',
              cards: [
                {
                  id: 'd3c3s2-1',
                  kind: 'concept',
                  title: 'ECS, ECR & Fargate 🐳',
                  emoji: '🐳',
                  body:
                    "- **ECR (Elastic Container Registry)** — a private Docker image registry.\n- **ECS (Elastic Container Service)** — orchestrates running containers.\n- **Fargate** — a serverless launch type: no EC2 to manage; AWS runs the containers for you.\n\nWith the **EC2 launch type** you manage the instances; with **Fargate** you do not.",
                  terms: [
                    { term: 'Task definition', definition: 'A blueprint describing containers, images, CPU/memory, and ports.' },
                    { term: 'Task', definition: 'A running instance of a task definition.' },
                    { term: 'Fargate', definition: 'A serverless compute engine for containers, no servers to manage.' },
                  ],
                },
                {
                  id: 'd3c3s2-2',
                  kind: 'concept',
                  title: 'Task role vs execution role 🎭',
                  emoji: '🎭',
                  body:
                    "Two roles you must not confuse:\n\n- **Task execution role** — lets ECS/Fargate pull images from ECR and write logs to CloudWatch (the platform's needs).\n- **Task role** — grants permissions to *your application code* running in the container (e.g. read a DynamoDB table).",
                  terms: [
                    { term: 'Task execution role', definition: 'Permissions ECS needs to start the task (pull image, send logs).' },
                    { term: 'Task role', definition: 'Permissions your container app uses to call AWS services.' },
                  ],
                },
                {
                  id: 'd3c3s2-3',
                  kind: 'example',
                  title: 'Pushing an image to ECR 📤',
                  emoji: '📤',
                  body:
                    "To publish a container image:\n\n- `aws ecr get-login-password | docker login ...` to authenticate.\n- `docker build -t myapp .`\n- `docker tag myapp <account>.dkr.ecr.<region>.amazonaws.com/myapp:latest`\n- `docker push <account>.dkr.ecr.<region>.amazonaws.com/myapp:latest`\n\nThen reference that image URI in your ECS task definition.",
                },
                {
                  id: 'd3c3s2-4',
                  kind: 'tip',
                  title: 'Gotcha: Fargate has no host access ⚠️',
                  emoji: '⚠️',
                  body:
                    "With Fargate you cannot SSH into a host or use the Docker daemon directly — there is no host to reach. To debug a running container, use **ECS Exec** (`aws ecs execute-command`).\n\nAlso, Fargate tasks need networking via **awsvpc** mode, giving each task its own ENI and security group.",
                },
                {
                  id: 'd3c3s2-5',
                  kind: 'quiz',
                  title: 'Quick check: containers',
                  question: 'Which IAM role grants your application code inside a container access to a DynamoDB table?',
                  options: [
                    { id: 'a', text: 'Task execution role', correct: false },
                    { id: 'b', text: 'Task role', correct: true },
                    { id: 'c', text: 'Instance profile only', correct: false },
                    { id: 'd', text: 'The ECR pull role', correct: false },
                  ],
                  explanation:
                    "The task role grants permissions to the application running in the container. The task execution role is for ECS platform actions like pulling images and shipping logs.",
                },
              ],
            },
          ],
        },
      ],
    },
    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 4 — Troubleshooting and Optimization (18%)
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd4',
      title: 'Troubleshooting and Optimization',
      emoji: '🔎',
      weight: '18%',
      description:
        "Observe, debug, and tune your app with CloudWatch, X-Ray, caching, and service-specific performance tricks.",
      project: {
        title: 'Observe & Tune the Notes API 🔎',
        brief:
          "Make your app observable and fast. Add:\n\n- **CloudWatch** dashboards, metric filters on logs, and **alarms** on Lambda errors, throttles, and API 5xx rates.\n- **X-Ray** tracing across API Gateway → Lambda → DynamoDB to find slow segments.\n- Then troubleshoot a real issue: a Lambda **cold-start** latency spike and DynamoDB **throttling** under load.",
        buildsOn:
          "Adds observability and performance tuning to the CI/CD-deployed Notes API from Domain 3, closing the build-secure-ship-operate loop.",
        stretch:
          "Feed the CloudWatch error alarm into the CodeDeploy blue/green rollback from Domain 3, so a bad release automatically reverts.",
      },
      chapters: [
        // ─── Chapter 1: Observability ────────────────────────────────────
        {
          id: 'd4c1',
          title: 'Observability',
          emoji: '👀',
          description: 'See what your app is doing with logs, metrics, alarms, and traces.',
          sections: [
            {
              id: 'd4c1s1',
              title: 'CloudWatch: Logs, Metrics & Alarms',
              summary: 'The core monitoring service for everything on AWS.',
              cards: [
                {
                  id: 'd4c1s1-1',
                  kind: 'concept',
                  title: 'What is CloudWatch? 👀',
                  emoji: '👀',
                  body:
                    "**CloudWatch** is the observability hub. It collects **metrics** (numbers over time), **logs** (text output), sets **alarms**, and shows **dashboards**.\n\nLambda automatically sends logs (anything you print) to a **log group** and reports metrics like invocations, errors, duration, and throttles. No agent needed for Lambda.",
                  terms: [
                    { term: 'Metric', definition: 'A time-ordered set of data points, e.g. Lambda Duration.' },
                    { term: 'Log group', definition: 'A container for log streams from one source, e.g. a function.' },
                    { term: 'Namespace', definition: 'A container that groups related metrics, e.g. AWS/Lambda.' },
                  ],
                },
                {
                  id: 'd4c1s1-2',
                  kind: 'concept',
                  title: 'Custom metrics & metric filters 📊',
                  emoji: '📊',
                  body:
                    "Publish your own numbers with **PutMetricData** (custom metrics). Standard resolution is 1-minute; **high-resolution** metrics go down to 1 second.\n\nA **metric filter** turns matching log text (e.g. the word `ERROR`) into a metric you can alarm on — a cheap way to alert on log patterns without extra code.",
                  terms: [
                    { term: 'Custom metric', definition: 'A metric you publish yourself via the PutMetricData API.' },
                    { term: 'Metric filter', definition: 'A pattern that extracts a metric from matching log events.' },
                  ],
                },
                {
                  id: 'd4c1s1-3',
                  kind: 'concept',
                  title: 'Alarms & their states 🔔',
                  emoji: '🔔',
                  body:
                    "An **alarm** watches a metric against a threshold over a period. States: **OK**, **ALARM**, and **INSUFFICIENT_DATA**.\n\nWhen it enters ALARM it can notify an **SNS topic**, trigger auto scaling, or drive a CodeDeploy rollback. Use them for error rates, throttles, latency, and DLQ depth.",
                  terms: [
                    { term: 'Alarm', definition: 'A rule that changes state when a metric crosses a threshold.' },
                    { term: 'INSUFFICIENT_DATA', definition: 'The alarm state when there is not enough data to evaluate.' },
                  ],
                },
                {
                  id: 'd4c1s1-4',
                  kind: 'diagram',
                  title: 'From log line to alert',
                  emoji: '🚨',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'App logs', emoji: '📝' },
                      { label: 'Metric filter', emoji: '🔍' },
                      { label: 'CloudWatch alarm', emoji: '🔔' },
                      { label: 'SNS notify', emoji: '📣' },
                    ],
                  },
                },
                {
                  id: 'd4c1s1-5',
                  kind: 'tip',
                  title: 'Gotcha: Lambda logging permissions ⚠️',
                  emoji: '⚠️',
                  body:
                    "If a Lambda function's logs never appear in CloudWatch, its **execution role** is probably missing `logs:CreateLogGroup`, `logs:CreateLogStream`, and `logs:PutLogEvents`.\n\nThe managed **AWSLambdaBasicExecutionRole** policy grants exactly these — attach it and logs start flowing.",
                },
                {
                  id: 'd4c1s1-6',
                  kind: 'quiz',
                  title: 'Quick check: CloudWatch',
                  question: 'You want to alert whenever the word ERROR appears in your Lambda logs. What do you set up?',
                  options: [
                    { id: 'a', text: 'A metric filter on the log group feeding an alarm', correct: true },
                    { id: 'b', text: 'A DynamoDB stream', correct: false },
                    { id: 'c', text: 'An X-Ray subsegment', correct: false },
                    { id: 'd', text: 'A Kinesis shard', correct: false },
                  ],
                  explanation:
                    "A metric filter matches the ERROR pattern in log events and emits a metric; a CloudWatch alarm on that metric then notifies you (e.g. via SNS) when it spikes.",
                },
              ],
            },
            {
              id: 'd4c1s2',
              title: 'X-Ray Tracing',
              summary: 'Follow a request across services to find bottlenecks.',
              cards: [
                {
                  id: 'd4c1s2-1',
                  kind: 'concept',
                  title: 'What is AWS X-Ray? 🔬',
                  emoji: '🔬',
                  body:
                    "**X-Ray** traces requests as they travel across your services, producing a **service map** and a timeline of **segments**. You see where time is spent and which calls errored.\n\nInstrument your code with the X-Ray SDK; enable **active tracing** on Lambda and API Gateway. Traces reveal that, say, a slow DynamoDB call is the real culprit.",
                  terms: [
                    { term: 'Segment', definition: 'Data about work done by one service for a request.' },
                    { term: 'Subsegment', definition: 'A finer breakdown inside a segment, e.g. a single AWS SDK call.' },
                    { term: 'Trace', definition: 'The end-to-end path of one request across all services.' },
                  ],
                },
                {
                  id: 'd4c1s2-2',
                  kind: 'analogy',
                  title: 'A parcel tracking page 📦',
                  emoji: '📦',
                  body:
                    "X-Ray is like the tracking page for a package. You see every stop — warehouse, truck, sorting center — with a timestamp at each.\n\nWhen delivery is late, the timeline shows exactly where it got stuck. A trace does the same for a request, pinpointing the slow or failing hop instead of guessing.",
                },
                {
                  id: 'd4c1s2-3',
                  kind: 'concept',
                  title: 'The X-Ray daemon & sampling 🧪',
                  emoji: '🧪',
                  body:
                    "The **X-Ray daemon** buffers segments and sends them to the service — Lambda and Fargate run it for you; on EC2 you install it.\n\n**Sampling** records only a portion of requests to control cost and overhead (e.g. 1 request/sec plus 5% of the rest). You can customize sampling rules.",
                  terms: [
                    { term: 'X-Ray daemon', definition: 'An agent that gathers trace segments and forwards them to X-Ray.' },
                    { term: 'Sampling rule', definition: 'A policy deciding what fraction of requests get traced.' },
                  ],
                },
                {
                  id: 'd4c1s2-4',
                  kind: 'tip',
                  title: 'Gotcha: X-Ray needs permissions & tracing on ⚠️',
                  emoji: '⚠️',
                  body:
                    "No traces showing? Two usual causes: **active tracing** is not enabled on the Lambda/API Gateway, or the execution role lacks the **AWSXRayDaemonWriteAccess** permissions (`xray:PutTraceSegments`, `xray:PutTelemetryRecords`).\n\nEnable tracing in the function config and attach the X-Ray write policy.",
                },
                {
                  id: 'd4c1s2-5',
                  kind: 'quiz',
                  title: 'Quick check: X-Ray',
                  question: 'A request through API Gateway → Lambda → DynamoDB is slow, but you cannot tell which hop. Best tool?',
                  options: [
                    { id: 'a', text: 'CloudWatch billing alarm', correct: false },
                    { id: 'b', text: 'AWS X-Ray tracing', correct: true },
                    { id: 'c', text: 'A DynamoDB LSI', correct: false },
                    { id: 'd', text: 'S3 access logs', correct: false },
                  ],
                  explanation:
                    "X-Ray produces a service map and per-segment timeline across the whole request, revealing exactly which hop (e.g. the DynamoDB call) is causing the latency.",
                },
              ],
            },
          ],
        },
        // ─── Chapter 2: Optimization ─────────────────────────────────────
        {
          id: 'd4c2',
          title: 'Performance & Optimization',
          emoji: '⚡',
          description: 'Tune Lambda, DynamoDB, and add caching to make apps fast and cheap.',
          sections: [
            {
              id: 'd4c2s1',
              title: 'Resilient SDK Calls',
              summary: 'Retries, backoff, and idempotency for reliable code.',
              cards: [
                {
                  id: 'd4c2s1-1',
                  kind: 'concept',
                  title: 'Retries & exponential backoff 🔁',
                  emoji: '🔁',
                  body:
                    "Transient failures (throttling, brief network blips) happen. The fix is **retry with exponential backoff**: wait 1s, then 2s, 4s, 8s... doubling each time, plus a little random **jitter** to avoid a thundering herd.\n\nThe AWS SDKs do this automatically for retryable errors like `ThrottlingException` and 5xx responses.",
                  terms: [
                    { term: 'Exponential backoff', definition: 'Increasing the wait between retries exponentially to ease load.' },
                    { term: 'Jitter', definition: 'Random variation added to backoff so clients do not retry in sync.' },
                  ],
                },
                {
                  id: 'd4c2s1-2',
                  kind: 'concept',
                  title: 'Idempotency 🎯',
                  emoji: '🎯',
                  body:
                    "An operation is **idempotent** if doing it twice has the same effect as doing it once. Crucial because retries and at-least-once delivery (SQS, async Lambda) can cause **duplicates**.\n\nAchieve it with an **idempotency key**: record processed request IDs (e.g. in DynamoDB with a conditional write) and skip anything you have already handled.",
                  terms: [
                    { term: 'Idempotency', definition: 'A property where repeating an operation yields the same result.' },
                    { term: 'Idempotency key', definition: 'A unique ID used to detect and ignore duplicate requests.' },
                  ],
                },
                {
                  id: 'd4c2s1-3',
                  kind: 'example',
                  title: 'Deduplicating with DynamoDB 🗄️',
                  emoji: '🗄️',
                  body:
                    "Before processing a message, do a conditional `PutItem` with the message ID as the key and `attribute_not_exists(id)` as the condition.\n\n- If it succeeds, this is the first time — process it.\n- If it throws **ConditionalCheckFailedException**, you have seen it before — skip it.\n\nThis turns at-least-once delivery into effectively exactly-once processing.",
                },
                {
                  id: 'd4c2s1-4',
                  kind: 'tip',
                  title: 'Gotcha: SDK retry limits ⚠️',
                  emoji: '⚠️',
                  body:
                    "The SDK retries only so many times (configurable). For a persistent throttle, retries alone will not save you — you must address capacity (on-demand mode, higher limits, better keys).\n\nAlso, wrap non-idempotent writes carefully: blind SDK retries on a payment call could double-charge without an idempotency key.",
                },
                {
                  id: 'd4c2s1-5',
                  kind: 'quiz',
                  title: 'Quick check: reliability',
                  question: 'SQS may deliver a message more than once. How do you avoid processing it twice?',
                  options: [
                    { id: 'a', text: 'Increase the visibility timeout only', correct: false },
                    { id: 'b', text: 'Make processing idempotent with a dedup key', correct: true },
                    { id: 'c', text: 'Disable retries in the SDK', correct: false },
                    { id: 'd', text: 'Use a larger Lambda memory setting', correct: false },
                  ],
                  explanation:
                    "Standard SQS is at-least-once, so duplicates are possible. Making processing idempotent — e.g. recording handled message IDs and skipping repeats — ensures a duplicate has no extra effect.",
                },
              ],
            },
            {
              id: 'd4c2s2',
              title: 'Tuning & Caching',
              summary: 'Speed up Lambda cold starts, DynamoDB, and add caches.',
              cards: [
                {
                  id: 'd4c2s2-1',
                  kind: 'concept',
                  title: 'Beating cold starts ❄️',
                  emoji: '❄️',
                  body:
                    "Cut Lambda cold-start latency by:\n\n- Using **Provisioned Concurrency** to keep environments pre-warmed.\n- Trimming the deployment package and dependencies.\n- Moving heavy init (SDK clients, connections) **outside** the handler so it is reused.\n- Choosing a lighter runtime; VPC-attached functions have improved but still add setup.",
                  terms: [
                    { term: 'Provisioned Concurrency', definition: 'Pre-initialized Lambda environments that eliminate cold starts.' },
                  ],
                },
                {
                  id: 'd4c2s2-2',
                  kind: 'concept',
                  title: 'Fixing DynamoDB throttling 🐢',
                  emoji: '🐢',
                  body:
                    "**ProvisionedThroughputExceededException** means you exceeded capacity, often due to a **hot partition** (one key getting all the traffic).\n\nFixes: distribute the partition key (add a suffix / write sharding), switch to **on-demand** capacity, enable **auto scaling**, or add **DAX** to absorb hot reads.",
                  terms: [
                    { term: 'Hot partition', definition: 'A partition receiving disproportionate traffic, causing throttling.' },
                    { term: 'Write sharding', definition: 'Spreading writes across many key values to avoid a hot partition.' },
                  ],
                },
                {
                  id: 'd4c2s2-3',
                  kind: 'diagram',
                  title: 'Where to add caching',
                  emoji: '⚡',
                  diagram: {
                    type: 'stack',
                    nodes: [
                      { label: 'Client', emoji: '📱' },
                      { label: 'API Gateway cache', emoji: '🚪', sublabel: 'cache responses' },
                      { label: 'ElastiCache / DAX', emoji: '⚡', sublabel: 'cache data reads' },
                      { label: 'DynamoDB', emoji: '🗄️', sublabel: 'source of truth' },
                    ],
                  },
                },
                {
                  id: 'd4c2s2-4',
                  kind: 'compare',
                  title: 'DAX vs ElastiCache',
                  emoji: '⚖️',
                  compare: {
                    headers: ['Aspect', 'DAX', 'ElastiCache'],
                    rows: [
                      ['Scope', 'DynamoDB only', 'Any data / general purpose'],
                      ['Setup', 'Drop-in, API-compatible', 'App-managed cache logic'],
                      ['Pattern', 'Write-through', 'Cache-aside or write-through'],
                      ['Engines', 'Purpose-built', 'Redis or Memcached'],
                    ],
                  },
                },
                {
                  id: 'd4c2s2-5',
                  kind: 'tip',
                  title: 'Gotcha: cache invalidation 🧹',
                  emoji: '🧹',
                  body:
                    "Caching speeds reads but risks **stale data**. Always set a sensible **TTL** and think about how updates invalidate the cache.\n\nAPI Gateway caching is per-stage — remember you can bypass it for specific requests during testing with the right header, or flush the entire cache from the console.",
                },
                {
                  id: 'd4c2s2-6',
                  kind: 'quiz',
                  title: 'Quick check: optimization',
                  question: 'A latency-sensitive Lambda suffers frequent cold starts. What most directly eliminates them?',
                  options: [
                    { id: 'a', text: 'Reserved concurrency', correct: false },
                    { id: 'b', text: 'Provisioned Concurrency', correct: true },
                    { id: 'c', text: 'A larger timeout', correct: false },
                    { id: 'd', text: 'Switching to Scan queries', correct: false },
                  ],
                  explanation:
                    "Provisioned Concurrency keeps a set number of execution environments initialized and warm, so requests skip the cold-start init entirely. Reserved concurrency only caps/guarantees count, not warmth.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
