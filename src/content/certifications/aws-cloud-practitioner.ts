import type { Certification } from '../types'

export const awsCloudPractitioner: Certification = {
  id: 'aws-cloud-practitioner',
  kind: 'certification',
  code: 'CLF-C02',
  title: 'AWS Certified Cloud Practitioner',
  shortTitle: 'Cloud Practitioner',
  provider: 'AWS',
  level: 'Foundational',
  gradient: 'from-fuchsia-500 to-purple-600',
  icon: '☁️',
  tagline: 'Your first step into AWS',
  description:
    "A friendly, plain-English path to passing the AWS Certified Cloud Practitioner (CLF-C02) exam. You will learn what the cloud actually is, how AWS keeps things secure, the core services for compute, storage, databases and networking, and how AWS billing and support work — all explained with everyday analogies and exam-focused tips. No prior cloud experience needed.",
  examFacts: [
    { label: 'Questions', value: '65' },
    { label: 'Duration', value: '90 minutes' },
    { label: 'Passing score', value: '700 / 1000' },
    { label: 'Cost', value: '$100 USD' },
    { label: 'Format', value: 'Multiple choice / multiple response' },
    { label: 'Validity', value: '3 years' },
  ],
  version: '2024.10',
  lastUpdated: '2025-01-15',
  available: true,
  domains: [
    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 1 — Cloud Concepts (24%)
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd1',
      title: 'Cloud Concepts',
      emoji: '☁️',
      weight: '24%',
      description:
        'What the cloud really is, why businesses love it, the different ways to deploy it, how AWS is spread around the planet, and the frameworks AWS gives you to build and migrate wisely.',
      project: {
        title: '🧁 Bakery in the Cloud — Step 1: Pick Your Ground',
        brief:
          "Meet **Bella's Bakery**, a growing online cake shop. Its website and orders currently run on one dusty PC in the back office. Your job across this course is to move it to AWS.\n\n**This step:** Decide the cloud basics.\n\n- Which **deployment model** fits a small shop with no data centre? (Hint: think all-in cloud.)\n- Pick a **Region** close to Bella's customers to keep the site fast.\n- Decide how many **Availability Zones** to spread across so a single outage does not close the shop.\n- List 3 of the **6 benefits of cloud** that matter most to a small bakery.",
        stretch:
          'Sketch which content (cake photos!) could be pushed to **edge locations** worldwide so overseas fans get fast page loads.',
      },
      chapters: [
        {
          id: 'd1c1',
          title: 'What Is Cloud Computing?',
          emoji: '🌤️',
          description: 'The core idea of renting computing over the internet, and why it beats owning it.',
          sections: [
            {
              id: 'd1c1s1',
              title: 'The Cloud, Explained Simply',
              summary: 'What the cloud is, and the six big benefits of using it.',
              cards: [
                {
                  id: 'd1c1s1-1',
                  kind: 'concept',
                  title: 'What Is Cloud Computing?',
                  emoji: '💡',
                  body:
                    "**Cloud computing** is renting computing power — servers, storage, databases — over the internet, and paying only for what you use.\n\nInstead of buying your own machines and keeping them in a room, you borrow AWS's machines whenever you need them and give them back when you are done. Someone else worries about the wiring, cooling, and broken hardware.",
                  terms: [
                    { term: 'Cloud computing', definition: 'On-demand delivery of IT resources over the internet with pay-as-you-go pricing.' },
                    { term: 'On-demand', definition: 'Getting resources instantly when you need them, without asking or waiting.' },
                    { term: 'Pay-as-you-go', definition: 'Paying only for the resources you actually use, like a utility bill.' },
                  ],
                },
                {
                  id: 'd1c1s1-2',
                  kind: 'analogy',
                  title: 'Owning vs Renting a Car',
                  emoji: '🚗',
                  body:
                    "Owning servers is like **buying a car**: big upfront cost, you pay for insurance, repairs, and parking even when it sits idle.\n\nThe cloud is like **using a taxi or car-share**: you pay only for the trips you take, someone else handles maintenance, and you can grab a bigger vehicle for one busy day and give it back after.",
                },
                {
                  id: 'd1c1s1-3',
                  kind: 'concept',
                  title: 'The Six Benefits of Cloud',
                  emoji: '🎁',
                  body:
                    "AWS highlights **six advantages** of the cloud:\n\n- Trade **capital expense for variable expense** (rent, do not buy).\n- Benefit from **massive economies of scale** (AWS buys in bulk, you pay less).\n- Stop **guessing capacity** (scale up or down as needed).\n- Increase **speed and agility** (spin up servers in minutes).\n- Stop spending money **running data centres**.\n- **Go global in minutes** (deploy worldwide with a few clicks).",
                },
                {
                  id: 'd1c1s1-4',
                  kind: 'example',
                  title: 'A Toy Store Before Christmas',
                  emoji: '🎄',
                  body:
                    "A toy store's website is quiet all year but explodes with traffic in December.\n\n- **Old way:** buy enough servers for December — then let them sit idle 11 months.\n- **Cloud way:** run small servers most of the year, automatically add more for the holiday rush, then shrink back in January.\n\nThat is *stop guessing capacity* and *pay-as-you-go* in action.",
                },
                {
                  id: 'd1c1s1-5',
                  kind: 'tip',
                  title: 'Exam Tip: CapEx vs OpEx',
                  emoji: '💰',
                  body:
                    "The exam loves the phrase **trade capital expense for variable expense**. Capital expense (CapEx) = big upfront purchase of hardware. Variable/operational expense (OpEx) = ongoing pay-as-you-go. Cloud shifts you from CapEx to OpEx.",
                },
                {
                  id: 'd1c1s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Which is a key benefit of cloud computing that AWS specifically calls out?',
                  options: [
                    { id: 'a', text: 'You must buy servers 3 years in advance', correct: false },
                    { id: 'b', text: 'Trade capital expense for variable expense', correct: true },
                    { id: 'c', text: 'You manage the physical data centre yourself', correct: false },
                    { id: 'd', text: 'Fixed monthly cost no matter your usage', correct: false },
                  ],
                  explanation:
                    'A headline cloud benefit is trading a large upfront capital expense for a flexible, pay-as-you-go variable expense. You never touch the physical hardware, and cost follows usage.',
                },
              ],
            },
            {
              id: 'd1c1s2',
              title: 'Cloud Deployment Models',
              summary: 'Cloud, hybrid, and on-premises — three ways to run your systems.',
              cards: [
                {
                  id: 'd1c1s2-1',
                  kind: 'concept',
                  title: 'Three Deployment Models',
                  emoji: '🏗️',
                  body:
                    "Where do your systems actually live?\n\n- **Cloud (all-in):** everything runs on AWS. Simplest and most scalable.\n- **On-premises:** everything runs in your own building. Full control, full responsibility.\n- **Hybrid:** a mix — some on AWS, some in your data centre, connected together. Common while migrating.",
                  terms: [
                    { term: 'Cloud deployment', definition: 'Running all applications and data on cloud infrastructure like AWS.' },
                    { term: 'On-premises', definition: 'Running IT on hardware you own inside your own facility.' },
                    { term: 'Hybrid', definition: 'A blend of cloud and on-premises resources working together.' },
                  ],
                },
                {
                  id: 'd1c1s2-2',
                  kind: 'analogy',
                  title: 'Home, Hotel, or Both',
                  emoji: '🏨',
                  body:
                    "**On-premises** is living in a house you own — total control, but you fix the roof.\n\n**Cloud** is staying in a hotel — walk in, everything works, someone else cleans up.\n\n**Hybrid** is keeping your house but booking a hotel for guests during a big family reunion.",
                },
                {
                  id: 'd1c1s2-3',
                  kind: 'diagram',
                  title: 'The Three Models Side by Side',
                  emoji: '📊',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Cloud', emoji: '☁️', items: ['All on AWS', 'Most scalable', 'Least maintenance'] },
                      { title: 'Hybrid', emoji: '🔗', items: ['Cloud + on-prem', 'Connected together', 'Common in migration'] },
                      { title: 'On-Premises', emoji: '🏢', items: ['All in your building', 'Full control', 'You buy the hardware'] },
                    ],
                  },
                },
                {
                  id: 'd1c1s2-4',
                  kind: 'example',
                  title: 'A Bank Going Hybrid',
                  emoji: '🏦',
                  body:
                    "A bank keeps its ultra-sensitive core records **on-premises** for strict regulatory reasons, but runs its shiny new mobile app on **AWS** for scale and speed. The two talk over a secure connection.\n\nThat mix is a classic **hybrid** deployment.",
                },
                {
                  id: 'd1c1s2-5',
                  kind: 'tip',
                  title: 'Exam Tip: Hybrid Signals',
                  emoji: '🚩',
                  body:
                    "If a question mentions keeping *some* systems in an existing data centre while moving others to AWS — usually for compliance, legacy apps, or a gradual migration — the answer is **hybrid**. Words like AWS Outposts and Storage Gateway often hint at hybrid too.",
                },
                {
                  id: 'd1c1s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'A company keeps sensitive data in its own data centre but runs its public website on AWS. Which model is this?',
                  options: [
                    { id: 'a', text: 'All-in cloud', correct: false },
                    { id: 'b', text: 'On-premises', correct: false },
                    { id: 'c', text: 'Hybrid', correct: true },
                    { id: 'd', text: 'Edge deployment', correct: false },
                  ],
                  explanation:
                    'Mixing on-premises resources with cloud resources that work together is the definition of a hybrid deployment model.',
                },
              ],
            },
          ],
        },
        {
          id: 'd1c2',
          title: 'AWS Global Infrastructure',
          emoji: '🌍',
          description: 'How AWS spreads data centres across the planet so your apps are fast and resilient.',
          sections: [
            {
              id: 'd1c2s1',
              title: 'Regions, AZs & Edge Locations',
              summary: 'The three building blocks of where AWS lives around the world.',
              cards: [
                {
                  id: 'd1c2s1-1',
                  kind: 'concept',
                  title: 'The Three Layers',
                  emoji: '🗺️',
                  body:
                    "AWS is physically organised in nested layers:\n\n- A **Region** is a geographic area (like Ireland or N. Virginia).\n- Inside each Region are multiple **Availability Zones (AZs)** — one or more separate data centres, isolated but close together.\n- **Edge locations** are hundreds of smaller sites worldwide that cache content close to users.",
                  terms: [
                    { term: 'Region', definition: 'A separate geographic area containing multiple Availability Zones.' },
                    { term: 'Availability Zone (AZ)', definition: 'One or more isolated data centres within a Region.' },
                    { term: 'Edge location', definition: 'A site that caches content near users for faster delivery.' },
                  ],
                },
                {
                  id: 'd1c2s1-2',
                  kind: 'diagram',
                  title: 'Region ⊃ AZ ⊃ Data Centre',
                  emoji: '📦',
                  diagram: {
                    type: 'stack',
                    nodes: [
                      { label: 'Region', sublabel: 'A geographic area', emoji: '🌍' },
                      { label: 'Availability Zone', sublabel: 'Isolated group of data centres', emoji: '🏢' },
                      { label: 'Data Centre', sublabel: 'The actual building of servers', emoji: '🖥️' },
                    ],
                  },
                },
                {
                  id: 'd1c2s1-3',
                  kind: 'analogy',
                  title: 'A Country, Cities, and Buildings',
                  emoji: '🏙️',
                  body:
                    "Think of a **Region** as a country. Inside it are several **cities** (Availability Zones), far enough apart that one city's power cut does not darken the others. Each city has **buildings** full of servers (data centres).\n\n**Edge locations** are like corner shops dotted everywhere, holding popular items close to customers.",
                },
                {
                  id: 'd1c2s1-4',
                  kind: 'concept',
                  title: 'Why Use Multiple AZs?',
                  emoji: '🛡️',
                  body:
                    "AZs are isolated so a fire, flood, or power failure in one does not take down the others. If you run your app across **two or more AZs**, your app keeps running even if a whole AZ goes offline.\n\nThis is the foundation of **high availability** on AWS — and a very common exam theme.",
                  terms: [
                    { term: 'High availability', definition: 'Designing systems so they keep running even when parts fail.' },
                    { term: 'Fault tolerance', definition: 'The ability to keep working despite component failures.' },
                  ],
                },
                {
                  id: 'd1c2s1-5',
                  kind: 'tip',
                  title: 'Exam Tip: Choosing a Region',
                  emoji: '📍',
                  body:
                    "To pick a Region, weigh four things: **compliance** (data must stay in a country), **latency** (close to your users = faster), **pricing** (Regions cost different amounts), and **service availability** (not every service is in every Region).",
                },
                {
                  id: 'd1c2s1-6',
                  kind: 'example',
                  title: 'Fast Cakes for a Sydney Fan',
                  emoji: '🍰',
                  body:
                    "Bella's Bakery is hosted in Ireland, but a fan in Sydney loads the homepage. Without help, every image crosses the planet — slow!\n\nWith an **edge location** in Sydney caching the cake photos, they load locally in a blink. The Region stays in Ireland; only copies of popular files sit at the edge.",
                },
                {
                  id: 'd1c2s1-7',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'What is an Availability Zone?',
                  options: [
                    { id: 'a', text: 'A single small cache site near users', correct: false },
                    { id: 'b', text: 'One or more isolated data centres within a Region', correct: true },
                    { id: 'c', text: 'A worldwide network of edge locations', correct: false },
                    { id: 'd', text: 'A billing account grouping', correct: false },
                  ],
                  explanation:
                    'An Availability Zone is one or more discrete, isolated data centres inside a Region. Running across multiple AZs is how you achieve high availability.',
                },
              ],
            },
            {
              id: 'd1c2s2',
              title: 'AWS Frameworks',
              summary: 'The Well-Architected Framework and the Cloud Adoption Framework.',
              cards: [
                {
                  id: 'd1c2s2-1',
                  kind: 'concept',
                  title: 'The Well-Architected Framework',
                  emoji: '🏛️',
                  body:
                    "The **Well-Architected Framework** is AWS's checklist of best practices for building good cloud systems, organised into **six pillars**:\n\n- Operational Excellence\n- Security\n- Reliability\n- Performance Efficiency\n- Cost Optimization\n- Sustainability",
                  terms: [
                    { term: 'Well-Architected Framework', definition: 'AWS best-practice guidance organised into six pillars for building on the cloud.' },
                    { term: 'Pillar', definition: 'One of six focus areas for evaluating a cloud workload.' },
                  ],
                },
                {
                  id: 'd1c2s2-2',
                  kind: 'diagram',
                  title: 'The Six Pillars',
                  emoji: '🏛️',
                  diagram: {
                    type: 'stack',
                    nodes: [
                      { label: 'Operational Excellence', sublabel: 'Run and monitor smoothly', emoji: '⚙️' },
                      { label: 'Security', sublabel: 'Protect data and systems', emoji: '🔐' },
                      { label: 'Reliability', sublabel: 'Recover from failures', emoji: '🛡️' },
                      { label: 'Performance Efficiency', sublabel: 'Use resources wisely', emoji: '⚡' },
                      { label: 'Cost Optimization', sublabel: 'Avoid wasted spend', emoji: '💰' },
                      { label: 'Sustainability', sublabel: 'Minimise environmental impact', emoji: '🌱' },
                    ],
                  },
                },
                {
                  id: 'd1c2s2-3',
                  kind: 'analogy',
                  title: 'A Building Inspector',
                  emoji: '👷',
                  body:
                    "The Well-Architected Framework is like a **building inspector's checklist**. Before you call a house well-built, you check the foundations (reliability), the locks (security), the running costs (cost), the energy use (sustainability), and so on.\n\nIt does not build the house for you — it helps you spot weak spots.",
                },
                {
                  id: 'd1c2s2-4',
                  kind: 'concept',
                  title: 'The Cloud Adoption Framework (CAF)',
                  emoji: '🧭',
                  body:
                    "While Well-Architected is about *building* systems, the **Cloud Adoption Framework (CAF)** is about helping an *organisation* move to the cloud smoothly.\n\nIt groups guidance into six **perspectives**: Business, People, Governance, Platform, Security, and Operations — covering both the tech and the human side of migrating.",
                  terms: [
                    { term: 'Cloud Adoption Framework', definition: 'AWS guidance to help an organisation plan and manage its move to the cloud.' },
                    { term: 'Perspective', definition: 'One of six CAF viewpoints, spanning business and technical concerns.' },
                  ],
                },
                {
                  id: 'd1c2s2-5',
                  kind: 'tip',
                  title: "Exam Tip: Don't Mix Them Up",
                  emoji: '🔀',
                  body:
                    "Keep these two straight:\n\n- **Well-Architected Framework** = how to build a good *workload* (six pillars).\n- **Cloud Adoption Framework (CAF)** = how an *organisation* adopts the cloud (six perspectives).\n\nWorkload vs organisation is the giveaway.",
                },
                {
                  id: 'd1c2s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Which is NOT one of the six Well-Architected Framework pillars?',
                  options: [
                    { id: 'a', text: 'Security', correct: false },
                    { id: 'b', text: 'Cost Optimization', correct: false },
                    { id: 'c', text: 'Marketing Reach', correct: true },
                    { id: 'd', text: 'Sustainability', correct: false },
                  ],
                  explanation:
                    'The six pillars are Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability. Marketing Reach is not one of them.',
                },
              ],
            },
          ],
        },
      ],
    },
    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 2 — Security and Compliance (30%)
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd2',
      title: 'Security and Compliance',
      emoji: '🔐',
      weight: '30%',
      description:
        'The biggest chunk of the exam. Who is responsible for what, how identity and access work, the AWS security toolbox, encryption, and how AWS proves it meets rules and standards.',
      project: {
        title: '🧁 Bakery in the Cloud — Step 2: Lock the Doors',
        brief:
          "Bella's Bakery now has a Region and cloud model chosen. Time to make it secure.\n\n**This step:** Design the security posture.\n\n- Create individual **IAM users** for Bella and her two staff — never share the root user.\n- Turn on **MFA** for the root user and admins.\n- Group staff into an **IAM group** with a policy giving only the access they need.\n- Draw the **shared responsibility split**: what AWS secures vs what Bella secures.",
        buildsOn:
          'Builds on Step 1: now that you know which Region and services will host the bakery, you decide who can touch them and how AWS and Bella divide the security work.',
        stretch:
          'Add an **IAM role** that lets the bakery web server read from storage without any stored passwords, and note which security service would spot a leaked photo of customer data.',
      },
      chapters: [
        {
          id: 'd2c1',
          title: 'Shared Responsibility & IAM',
          emoji: '🤝',
          description: 'Who guards what, and how you control who can do what in your account.',
          sections: [
            {
              id: 'd2c1s1',
              title: 'The Shared Responsibility Model',
              summary: 'AWS secures the cloud; you secure what you put in it.',
              cards: [
                {
                  id: 'd2c1s1-1',
                  kind: 'concept',
                  title: 'Who Is Responsible?',
                  emoji: '🤝',
                  body:
                    "Security on AWS is a **partnership**:\n\n- **AWS** is responsible for security **of the cloud** — the physical data centres, hardware, and the core software running them.\n- **You (the customer)** are responsible for security **in the cloud** — your data, who can access it, your OS patches, and your settings.",
                  terms: [
                    { term: 'Shared Responsibility Model', definition: 'The split of security duties between AWS and the customer.' },
                    { term: 'Security of the cloud', definition: 'AWS protecting the underlying infrastructure.' },
                    { term: 'Security in the cloud', definition: 'The customer protecting their own data, access, and configuration.' },
                  ],
                },
                {
                  id: 'd2c1s1-2',
                  kind: 'analogy',
                  title: 'Renting an Apartment',
                  emoji: '🏢',
                  body:
                    "AWS is like the **building landlord**: they secure the foundations, the outer walls, the front gate, and the lifts.\n\nYou are the **tenant**: you lock your own apartment door, decide who gets a key, and choose what valuables to keep inside. If you leave your door wide open, that is on you, not the landlord.",
                },
                {
                  id: 'd2c1s1-3',
                  kind: 'diagram',
                  title: 'Who Secures What',
                  emoji: '📊',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'AWS (of the cloud)', emoji: '☁️', items: ['Physical data centres', 'Hardware & network', 'Hypervisor / host OS', 'Region & AZ facilities'] },
                      { title: 'Customer (in the cloud)', emoji: '🧑‍💻', items: ['Your data', 'IAM users & permissions', 'Guest OS patches', 'Firewall & app config'] },
                    ],
                  },
                },
                {
                  id: 'd2c1s1-4',
                  kind: 'example',
                  title: 'A Leaky S3 Bucket',
                  emoji: '🪣',
                  body:
                    "A company stores customer files in Amazon S3 but accidentally makes the bucket **public**. Anyone on the internet can read them.\n\nWhose fault? The **customer's**. AWS kept the storage service secure and running, but *configuring access* is the customer's job — squarely in the 'in the cloud' column.",
                },
                {
                  id: 'd2c1s1-5',
                  kind: 'tip',
                  title: 'Exam Tip: The Magic Phrase',
                  emoji: '🪄',
                  body:
                    "Memorise: **AWS secures the cloud; you secure what you put in the cloud.** Patching a guest OS, setting permissions, and encrypting your data are always *your* jobs. Physical security and the hypervisor are always *AWS's*.",
                },
                {
                  id: 'd2c1s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Under the shared responsibility model, which task is the CUSTOMER responsible for?',
                  options: [
                    { id: 'a', text: 'Securing the physical data centre', correct: false },
                    { id: 'b', text: 'Maintaining the hypervisor', correct: false },
                    { id: 'c', text: 'Configuring IAM permissions and access', correct: true },
                    { id: 'd', text: 'Replacing failed hard drives', correct: false },
                  ],
                  explanation:
                    'Managing identities and access (IAM) is security "in the cloud" and is always the customer\'s responsibility. The physical hardware and hypervisor belong to AWS.',
                },
              ],
            },
            {
              id: 'd2c1s2',
              title: 'IAM: Users, Groups, Roles & Policies',
              summary: 'How you control exactly who can do what in your AWS account.',
              cards: [
                {
                  id: 'd2c1s2-1',
                  kind: 'concept',
                  title: 'The IAM Building Blocks',
                  emoji: '🧱',
                  body:
                    "**IAM (Identity and Access Management)** controls access to your AWS account:\n\n- **Users** — individual people or apps.\n- **Groups** — a bucket of users who share permissions (e.g. Developers).\n- **Roles** — temporary permissions that can be *assumed*, great for services and apps.\n- **Policies** — JSON documents that say what is allowed or denied.",
                  terms: [
                    { term: 'IAM user', definition: 'An identity for a single person or application.' },
                    { term: 'IAM group', definition: 'A collection of users that share a set of permissions.' },
                    { term: 'IAM role', definition: 'A set of temporary permissions an identity or service can assume.' },
                    { term: 'IAM policy', definition: 'A JSON document defining allowed or denied actions.' },
                  ],
                },
                {
                  id: 'd2c1s2-2',
                  kind: 'analogy',
                  title: 'Keys, Keyrings & Visitor Badges',
                  emoji: '🔑',
                  body:
                    "An **IAM user** is a person with their own keys. A **group** is a shared keyring — join the group, get all its keys. A **policy** is the list saying which doors each key opens.\n\nA **role** is a temporary visitor badge: a contractor borrows it for the afternoon, uses it, and hands it back — no permanent key needed.",
                },
                {
                  id: 'd2c1s2-3',
                  kind: 'concept',
                  title: 'Roles: No Passwords Needed',
                  emoji: '🎭',
                  body:
                    "**Roles** shine when one AWS service needs to talk to another. Instead of storing a password on your server, you attach a **role** to it. AWS hands the server temporary credentials automatically, and rotates them for you.\n\nThis is far safer than baking secret keys into your code.",
                  terms: [
                    { term: 'Assume a role', definition: "Temporarily taking on a role's permissions to perform actions." },
                    { term: 'Temporary credentials', definition: 'Short-lived access keys that expire automatically.' },
                  ],
                },
                {
                  id: 'd2c1s2-4',
                  kind: 'diagram',
                  title: 'How Access Flows',
                  emoji: '🔁',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'User or Service', emoji: '🧑‍💻' },
                      { label: 'Group / Role', emoji: '👥' },
                      { label: 'Policy', emoji: '📜' },
                      { label: 'Allowed Action', emoji: '✅' },
                    ],
                  },
                },
                {
                  id: 'd2c1s2-5',
                  kind: 'tip',
                  title: 'Exam Tip: Least Privilege',
                  emoji: '🎯',
                  body:
                    "Two phrases to remember: **least privilege** (grant only the permissions someone truly needs) and *use roles for services, not stored keys*. If a question shows an app on EC2 needing to reach S3, the best answer is almost always an **IAM role**.",
                },
                {
                  id: 'd2c1s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'An application on an EC2 instance needs to read files from S3. What is the BEST way to grant access?',
                  options: [
                    { id: 'a', text: 'Store the root user password on the instance', correct: false },
                    { id: 'b', text: 'Attach an IAM role to the EC2 instance', correct: true },
                    { id: 'c', text: 'Make the S3 bucket public', correct: false },
                    { id: 'd', text: 'Email access keys to every developer', correct: false },
                  ],
                  explanation:
                    'Attaching an IAM role gives the instance temporary, automatically-rotated credentials with only the permissions it needs — no secrets stored in code, following least privilege.',
                },
              ],
            },
            {
              id: 'd2c1s3',
              title: 'Root User, MFA & Best Practices',
              summary: 'Protecting the most powerful account and adding a second lock.',
              cards: [
                {
                  id: 'd2c1s3-1',
                  kind: 'concept',
                  title: 'The Root User',
                  emoji: '👑',
                  body:
                    "The **root user** is the email address you signed up with. It can do *anything* — including closing the account and changing billing.\n\nBecause it is so powerful, AWS says: use it only for a few special tasks, then lock it away. Do daily work with regular **IAM users** instead.",
                  terms: [
                    { term: 'Root user', definition: 'The all-powerful account owner identity created at signup.' },
                    { term: 'IAM administrator', definition: 'A day-to-day admin user created instead of using root.' },
                  ],
                },
                {
                  id: 'd2c1s3-2',
                  kind: 'concept',
                  title: 'Multi-Factor Authentication (MFA)',
                  emoji: '📱',
                  body:
                    "**MFA** adds a second lock: after your password, you also enter a one-time code from your phone or a hardware key.\n\nEven if a hacker steals your password, they cannot log in without your device. AWS strongly recommends MFA on the **root user** and all admins.",
                  terms: [
                    { term: 'MFA', definition: 'Multi-Factor Authentication — requiring a second proof of identity beyond a password.' },
                  ],
                },
                {
                  id: 'd2c1s3-3',
                  kind: 'analogy',
                  title: 'A Door With Two Locks',
                  emoji: '🚪',
                  body:
                    "A password alone is one lock — pick it and you are in. **MFA** is a second lock that needs a key only *you* physically carry (your phone).\n\nA thief would need to steal both your secret code *and* your phone at the same time. Much harder.",
                },
                {
                  id: 'd2c1s3-4',
                  kind: 'example',
                  title: 'Bella Sets Up Her Account',
                  emoji: '🧁',
                  body:
                    "Bella signs up (creating the root user), immediately turns on **MFA** for it, then creates an **IAM user** called *bella-admin* for daily work. She locks the root credentials in a safe.\n\nNow even if her admin password leaks, MFA and least privilege limit the damage.",
                },
                {
                  id: 'd2c1s3-5',
                  kind: 'tip',
                  title: 'Exam Tip: Root User Rules',
                  emoji: '⚠️',
                  body:
                    "Golden rules the exam tests: (1) enable **MFA on the root user**, (2) do **not** use root for everyday tasks, (3) do **not** create access keys for root, and (4) create individual IAM users instead of sharing logins.",
                },
                {
                  id: 'd2c1s3-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'What is the AWS best practice for the root user after creating an account?',
                  options: [
                    { id: 'a', text: 'Use it for all daily administrative tasks', correct: false },
                    { id: 'b', text: 'Enable MFA and avoid using it for everyday work', correct: true },
                    { id: 'c', text: 'Create access keys and share them with the team', correct: false },
                    { id: 'd', text: 'Disable it permanently right away', correct: false },
                  ],
                  explanation:
                    'Best practice is to enable MFA on the root user and lock it away, using IAM users for daily work. Root should only be used for the rare tasks that require it.',
                },
              ],
            },
          ],
        },
        {
          id: 'd2c2',
          title: 'Security Services & Compliance',
          emoji: '🛠️',
          description: 'The AWS security toolbox, encryption with KMS, and how AWS proves compliance.',
          sections: [
            {
              id: 'd2c2s1',
              title: 'The Security Toolbox',
              summary: 'WAF, Shield, GuardDuty, Inspector, and Macie — what each one guards.',
              cards: [
                {
                  id: 'd2c2s1-1',
                  kind: 'concept',
                  title: 'Meet the Guardians',
                  emoji: '🛡️',
                  body:
                    "AWS gives you specialised security services:\n\n- **WAF** — a firewall for web apps, blocking bad requests.\n- **Shield** — protects against DDoS (traffic flood) attacks.\n- **GuardDuty** — watches for suspicious activity in your account.\n- **Inspector** — scans EC2 and apps for known vulnerabilities.\n- **Macie** — finds sensitive data (like personal info) in S3.",
                  terms: [
                    { term: 'AWS WAF', definition: 'Web Application Firewall that filters malicious web traffic.' },
                    { term: 'AWS Shield', definition: 'Managed protection against DDoS attacks.' },
                    { term: 'Amazon GuardDuty', definition: 'Threat detection that monitors for malicious activity.' },
                    { term: 'Amazon Macie', definition: 'Service that discovers and protects sensitive data in S3.' },
                  ],
                },
                {
                  id: 'd2c2s1-2',
                  kind: 'analogy',
                  title: 'A Security Team',
                  emoji: '👮',
                  body:
                    "Picture a shop's security staff. **WAF** is the bouncer checking who comes in the door. **Shield** blocks a mob trying to storm the entrance (DDoS). **GuardDuty** is CCTV spotting odd behaviour. **Inspector** is the inspector checking for unlocked windows (vulnerabilities). **Macie** finds sensitive documents left lying around.",
                },
                {
                  id: 'd2c2s1-3',
                  kind: 'diagram',
                  title: 'Which Service, Which Job',
                  emoji: '📊',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Block Attacks', emoji: '🚧', items: ['WAF: bad web requests', 'Shield: DDoS floods'] },
                      { title: 'Detect Threats', emoji: '🔎', items: ['GuardDuty: odd activity', 'Inspector: vulnerabilities'] },
                      { title: 'Protect Data', emoji: '🔒', items: ['Macie: sensitive data in S3', 'KMS: encryption keys'] },
                    ],
                  },
                },
                {
                  id: 'd2c2s1-4',
                  kind: 'example',
                  title: 'Stopping a Flood',
                  emoji: '🌊',
                  body:
                    "Bella's Bakery site suddenly gets millions of fake requests trying to knock it offline — a **DDoS attack**.\n\n**AWS Shield** absorbs and filters that flood so real customers can still order cakes. Meanwhile **WAF** rules block requests that look like SQL injection attempts.",
                },
                {
                  id: 'd2c2s1-5',
                  kind: 'tip',
                  title: 'Exam Tip: Match the Keyword',
                  emoji: '🎯',
                  body:
                    "Learn the trigger words: **DDoS → Shield**, **web request filtering → WAF**, **threat/anomaly detection → GuardDuty**, **vulnerability scan → Inspector**, **sensitive data in S3 → Macie**. The exam often just swaps the scenario around these keywords.",
                },
                {
                  id: 'd2c2s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Which AWS service specifically protects against DDoS attacks?',
                  options: [
                    { id: 'a', text: 'Amazon Macie', correct: false },
                    { id: 'b', text: 'AWS Shield', correct: true },
                    { id: 'c', text: 'Amazon Inspector', correct: false },
                    { id: 'd', text: 'AWS Artifact', correct: false },
                  ],
                  explanation:
                    'AWS Shield is the managed service dedicated to protecting applications against Distributed Denial of Service (DDoS) attacks.',
                },
              ],
            },
            {
              id: 'd2c2s2',
              title: 'Encryption, KMS & Compliance',
              summary: 'Scrambling data with keys, and proving AWS meets the rules.',
              cards: [
                {
                  id: 'd2c2s2-1',
                  kind: 'concept',
                  title: 'Encryption & AWS KMS',
                  emoji: '🔐',
                  body:
                    "**Encryption** scrambles data so only someone with the right key can read it. AWS protects data **at rest** (stored) and **in transit** (moving over the network).\n\n**AWS KMS (Key Management Service)** creates and manages the encryption keys for you, so you do not have to guard them by hand.",
                  terms: [
                    { term: 'Encryption', definition: 'Scrambling data so only holders of the key can read it.' },
                    { term: 'AWS KMS', definition: 'Key Management Service that creates and controls encryption keys.' },
                    { term: 'At rest / in transit', definition: 'Data being stored vs data moving across a network.' },
                  ],
                },
                {
                  id: 'd2c2s2-2',
                  kind: 'analogy',
                  title: 'A Locked Diary',
                  emoji: '📔',
                  body:
                    "Encryption is a **locked diary**: even if someone grabs it, the words are gibberish without the key. **KMS** is the trusted locksmith who cuts, stores, and controls all your keys — so no single lost key spells disaster and you can revoke access instantly.",
                },
                {
                  id: 'd2c2s2-3',
                  kind: 'concept',
                  title: 'Compliance & AWS Artifact',
                  emoji: '📜',
                  body:
                    "Big customers must prove they follow rules like GDPR, HIPAA, or PCI DSS. AWS runs audits and publishes the results.\n\n**AWS Artifact** is a self-service portal where you download AWS's **compliance reports** and agreements — handy proof for your own auditors.",
                  terms: [
                    { term: 'Compliance', definition: 'Meeting legal, regulatory, or industry security standards.' },
                    { term: 'AWS Artifact', definition: 'A portal to download AWS compliance reports and agreements.' },
                  ],
                },
                {
                  id: 'd2c2s2-4',
                  kind: 'concept',
                  title: 'Organizations & SCPs',
                  emoji: '🏢',
                  body:
                    "**AWS Organizations** lets a company manage **many AWS accounts** together, with one consolidated bill.\n\n**Service Control Policies (SCPs)** set guardrails across those accounts — for example, blocking anyone from using a Region you do not allow, no matter their IAM permissions.",
                  terms: [
                    { term: 'AWS Organizations', definition: 'A service for centrally managing multiple AWS accounts.' },
                    { term: 'Service Control Policy (SCP)', definition: 'A guardrail limiting what member accounts can do.' },
                  ],
                },
                {
                  id: 'd2c2s2-5',
                  kind: 'tip',
                  title: 'Exam Tip: Artifact vs the Rest',
                  emoji: '💡',
                  body:
                    "If a question asks *where to download compliance reports*, the answer is **AWS Artifact**. If it asks about *managing many accounts and setting account-wide limits*, think **AWS Organizations** and **SCPs**. KMS is the answer for *managing encryption keys*.",
                },
                {
                  id: 'd2c2s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Where can a customer download AWS compliance reports such as SOC and PCI documents?',
                  options: [
                    { id: 'a', text: 'AWS KMS', correct: false },
                    { id: 'b', text: 'AWS Artifact', correct: true },
                    { id: 'c', text: 'Amazon GuardDuty', correct: false },
                    { id: 'd', text: 'AWS Organizations', correct: false },
                  ],
                  explanation:
                    'AWS Artifact is the self-service portal for downloading AWS compliance reports and agreements to share with auditors.',
                },
                {
                  id: 'd2c2s2-7',
                  kind: 'compare',
                  title: 'Encryption vs Compliance Tools',
                  emoji: '🧩',
                  compare: {
                    headers: ['Need', 'AWS Service'],
                    rows: [
                      ['Manage encryption keys', 'AWS KMS'],
                      ['Download compliance reports', 'AWS Artifact'],
                      ['Manage many accounts', 'AWS Organizations'],
                      ['Restrict actions account-wide', 'Service Control Policies'],
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 3 — Cloud Technology and Services (34%)
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd3',
      title: 'Cloud Technology and Services',
      emoji: '🧰',
      weight: '34%',
      description:
        'The largest domain: the core AWS services. How you interact with AWS, plus compute, storage, databases, networking, integration, and monitoring — the toolbox you build real apps with.',
      project: {
        title: '🧁 Bakery in the Cloud — Step 3: Pick the Tools',
        brief:
          "Bella's Bakery is planned and secured. Now choose the real services to run it.\n\n**This step:** Select concrete AWS services.\n\n- **Website server:** an **EC2** instance (or Lambda for the contact form).\n- **Cake photos & static files:** store in **Amazon S3**.\n- **Orders & customers:** a managed **RDS** database.\n- **Speed worldwide:** put **CloudFront** in front of the site.\n- **Handle traffic spikes:** add an **Elastic Load Balancer** across two AZs.",
        buildsOn:
          'Builds on Step 2: with the security posture designed, you now attach real compute, storage, database, and networking services — and apply the IAM roles from Step 2 to let them talk safely.',
        stretch:
          'Add **SQS** so order confirmations queue up reliably during rushes, and **CloudWatch** alarms to alert Bella if the server gets busy.',
      },
      chapters: [
        {
          id: 'd3c1',
          title: 'Interacting With AWS & Compute',
          emoji: '💻',
          description: 'The three ways to control AWS, and the services that run your code.',
          sections: [
            {
              id: 'd3c1s1',
              title: 'Three Ways to Interact',
              summary: 'Console, CLI, and SDK — the doors into AWS.',
              cards: [
                {
                  id: 'd3c1s1-1',
                  kind: 'concept',
                  title: 'Console, CLI & SDK',
                  emoji: '🚪',
                  body:
                    "There are three ways to use AWS:\n\n- **Management Console** — a point-and-click website. Great for learning and one-off tasks.\n- **CLI (Command Line Interface)** — type commands in a terminal. Great for scripting and automation.\n- **SDK (Software Development Kit)** — call AWS from inside your code (Python, Java, etc.).",
                  terms: [
                    { term: 'Management Console', definition: 'The web-based, point-and-click interface to AWS.' },
                    { term: 'AWS CLI', definition: 'A command-line tool for controlling AWS with typed commands.' },
                    { term: 'AWS SDK', definition: 'Language-specific libraries for calling AWS from your own code.' },
                  ],
                },
                {
                  id: 'd3c1s1-2',
                  kind: 'analogy',
                  title: 'Ordering at a Restaurant',
                  emoji: '🍽️',
                  body:
                    "The **Console** is ordering by pointing at a picture menu — easy, visual. The **CLI** is telling the waiter exactly what you want in precise words — fast once you know the lingo. The **SDK** is having your own robot chef that orders automatically from inside your kitchen app.",
                },
                {
                  id: 'd3c1s1-3',
                  kind: 'diagram',
                  title: 'Ways Into AWS',
                  emoji: '🧭',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Console', emoji: '🖱️', items: ['Point and click', 'Best for learning', 'Visual'] },
                      { title: 'CLI', emoji: '⌨️', items: ['Typed commands', 'Great for scripts', 'Fast & repeatable'] },
                      { title: 'SDK', emoji: '🧑‍💻', items: ['Inside your code', 'Python, Java, etc.', 'For apps'] },
                    ],
                  },
                },
                {
                  id: 'd3c1s1-4',
                  kind: 'tip',
                  title: 'Exam Tip: Automation Clue',
                  emoji: '🤖',
                  body:
                    "If a question mentions **automating** or **scripting** repeated tasks, the answer is usually the **CLI**. If it mentions calling AWS from *within an application*, that is the **SDK**. Beginners doing a one-off click through a website = the **Console**.",
                },
                {
                  id: 'd3c1s1-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'A developer wants to control AWS from within a Python application. What should they use?',
                  options: [
                    { id: 'a', text: 'The Management Console', correct: false },
                    { id: 'b', text: 'The AWS SDK', correct: true },
                    { id: 'c', text: 'AWS Artifact', correct: false },
                    { id: 'd', text: 'The billing dashboard', correct: false },
                  ],
                  explanation:
                    'The AWS SDK provides language-specific libraries (like one for Python) so you can call AWS services directly from inside your application code.',
                },
              ],
            },
            {
              id: 'd3c1s2',
              title: 'Core Compute Services',
              summary: 'EC2, Lambda, Elastic Beanstalk, and containers with ECS/Fargate.',
              cards: [
                {
                  id: 'd3c1s2-1',
                  kind: 'concept',
                  title: 'Amazon EC2',
                  emoji: '🖥️',
                  body:
                    "**Amazon EC2 (Elastic Compute Cloud)** gives you virtual servers in the cloud. You pick the size, the operating system, and how many — then use them like any computer.\n\nEC2 is the flexible, do-anything workhorse. You manage the OS and software on it.",
                  terms: [
                    { term: 'Amazon EC2', definition: 'Resizable virtual servers (instances) you rent in the cloud.' },
                    { term: 'Instance', definition: 'A single virtual server running in EC2.' },
                  ],
                },
                {
                  id: 'd3c1s2-2',
                  kind: 'concept',
                  title: 'AWS Lambda: Serverless',
                  emoji: '⚡',
                  body:
                    "**AWS Lambda** runs your code *without any servers to manage*. You upload a function, and it runs only when triggered — you pay per millisecond of execution, nothing when idle.\n\nThis is **serverless**: no patching, no capacity planning. Perfect for small, event-driven tasks.",
                  terms: [
                    { term: 'AWS Lambda', definition: 'A serverless service that runs code in response to events.' },
                    { term: 'Serverless', definition: 'You run code without provisioning or managing servers.' },
                  ],
                },
                {
                  id: 'd3c1s2-3',
                  kind: 'analogy',
                  title: 'Own Kitchen vs Food Truck Window',
                  emoji: '🍔',
                  body:
                    "**EC2** is renting a full kitchen — you control everything but must keep it running even when no one orders.\n\n**Lambda** is a magic window that appears only when a customer arrives, serves them, then vanishes. You pay solely for the moments it is open.",
                },
                {
                  id: 'd3c1s2-4',
                  kind: 'concept',
                  title: 'Beanstalk & Containers',
                  emoji: '📦',
                  body:
                    "- **Elastic Beanstalk** — you hand it your app code and it sets up the EC2, load balancer, and scaling for you. Easy deployment.\n- **ECS / Fargate** — run **containers** (lightweight packaged apps). ECS orchestrates them; **Fargate** runs them serverless, with no servers for you to manage.",
                  terms: [
                    { term: 'Elastic Beanstalk', definition: "A service that deploys and manages your app's infrastructure for you." },
                    { term: 'Container', definition: 'A lightweight, portable package of an app and its dependencies.' },
                    { term: 'AWS Fargate', definition: 'Serverless compute for running containers without managing servers.' },
                  ],
                },
                {
                  id: 'd3c1s2-5',
                  kind: 'compare',
                  title: 'Which Compute When?',
                  emoji: '🧩',
                  compare: {
                    headers: ['Need', 'Service'],
                    rows: [
                      ['Full control over a server', 'EC2'],
                      ['Run code with no servers', 'Lambda'],
                      ['Easy deploy, AWS handles setup', 'Elastic Beanstalk'],
                      ['Run containers serverlessly', 'ECS + Fargate'],
                    ],
                  },
                },
                {
                  id: 'd3c1s2-6',
                  kind: 'tip',
                  title: 'Exam Tip: Serverless Words',
                  emoji: '💡',
                  body:
                    "**No servers to manage** or **pay only when running** → **Lambda** (or Fargate for containers). **Full OS control** → **EC2**. **Just deploy my code, handle the rest** → **Elastic Beanstalk**. Match the phrasing to the service.",
                },
                {
                  id: 'd3c1s2-7',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'A team wants to run small pieces of code only when triggered, with no servers to manage. Which service fits best?',
                  options: [
                    { id: 'a', text: 'Amazon EC2', correct: false },
                    { id: 'b', text: 'AWS Lambda', correct: true },
                    { id: 'c', text: 'Amazon S3', correct: false },
                    { id: 'd', text: 'Amazon RDS', correct: false },
                  ],
                  explanation:
                    'AWS Lambda is serverless: it runs code in response to events, with no servers to manage, and you pay only for the compute time used.',
                },
              ],
            },
          ],
        },
        {
          id: 'd3c2',
          title: 'Storage & Databases',
          emoji: '🗄️',
          description: 'Where your files and your structured data live on AWS.',
          sections: [
            {
              id: 'd3c2s1',
              title: 'Storage Services',
              summary: 'S3, EBS, EFS, Glacier, and Storage Gateway.',
              cards: [
                {
                  id: 'd3c2s1-1',
                  kind: 'concept',
                  title: 'The Storage Family',
                  emoji: '🗄️',
                  body:
                    "AWS storage comes in flavours for different jobs:\n\n- **S3** — object storage for files, photos, backups. Accessed over the web.\n- **EBS** — a hard drive attached to one EC2 instance.\n- **EFS** — a shared file system many instances can mount at once.\n- **S3 Glacier** — dirt-cheap storage for archives you rarely touch.",
                  terms: [
                    { term: 'Amazon S3', definition: 'Object storage for files, accessible over the internet.' },
                    { term: 'Amazon EBS', definition: 'Block storage (a virtual disk) attached to a single EC2 instance.' },
                    { term: 'Amazon EFS', definition: 'A shared file system multiple instances can use at once.' },
                    { term: 'S3 Glacier', definition: 'Very low-cost storage for long-term archives.' },
                  ],
                },
                {
                  id: 'd3c2s1-2',
                  kind: 'analogy',
                  title: 'Lockers, Drives & Warehouses',
                  emoji: '📦',
                  body:
                    "**S3** is a giant public locker room — drop any file in a bucket and grab it later. **EBS** is the hard drive bolted inside one PC. **EFS** is a shared network drive the whole office uses. **Glacier** is deep cold storage in a distant warehouse — cheap, but slow to retrieve.",
                },
                {
                  id: 'd3c2s1-3',
                  kind: 'diagram',
                  title: 'Storage Classes by Cost & Access',
                  emoji: '📊',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Frequent Access', emoji: '🔥', items: ['S3 Standard', 'Higher cost', 'Instant access'] },
                      { title: 'Infrequent', emoji: '🌙', items: ['S3 Standard-IA', 'Lower storage cost', 'Small retrieval fee'] },
                      { title: 'Archive', emoji: '❄️', items: ['S3 Glacier', 'Cheapest', 'Minutes to hours to restore'] },
                    ],
                  },
                },
                {
                  id: 'd3c2s1-4',
                  kind: 'concept',
                  title: 'Storage Gateway (Hybrid)',
                  emoji: '🌉',
                  body:
                    "**AWS Storage Gateway** connects your **on-premises** systems to AWS storage. Files written locally are backed up to the cloud automatically, giving you cloud capacity without moving everything at once.\n\nIt is a classic **hybrid** tool — a bridge between your data centre and AWS.",
                  terms: [
                    { term: 'AWS Storage Gateway', definition: 'A hybrid service linking on-premises storage to AWS cloud storage.' },
                  ],
                },
                {
                  id: 'd3c2s1-5',
                  kind: 'tip',
                  title: 'Exam Tip: S3 vs EBS vs EFS',
                  emoji: '🎯',
                  body:
                    "Trigger words: **files/photos/backups over the web → S3**. **A disk for one EC2 instance → EBS**. **Shared file system for many instances → EFS**. **Cheap long-term archive → S3 Glacier**. **On-prem to cloud bridge → Storage Gateway**.",
                },
                {
                  id: 'd3c2s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Which service is best for storing website images and backups that are accessed over the internet?',
                  options: [
                    { id: 'a', text: 'Amazon EBS', correct: false },
                    { id: 'b', text: 'Amazon S3', correct: true },
                    { id: 'c', text: 'Amazon RDS', correct: false },
                    { id: 'd', text: 'AWS Lambda', correct: false },
                  ],
                  explanation:
                    'Amazon S3 is object storage designed for files like images and backups, accessible over the web. EBS is a disk for a single EC2 instance, not general web storage.',
                },
              ],
            },
            {
              id: 'd3c2s2',
              title: 'Database Services',
              summary: 'RDS, DynamoDB, Aurora, Redshift, and ElastiCache.',
              cards: [
                {
                  id: 'd3c2s2-1',
                  kind: 'concept',
                  title: 'The Database Lineup',
                  emoji: '🗃️',
                  body:
                    "Pick the database that fits your data:\n\n- **RDS** — managed relational (SQL) databases: MySQL, PostgreSQL, etc.\n- **Aurora** — AWS's own high-performance relational engine, MySQL/PostgreSQL compatible.\n- **DynamoDB** — a fast, serverless NoSQL key-value database.\n- **Redshift** — a data warehouse for big analytics.\n- **ElastiCache** — an in-memory cache for lightning-fast reads.",
                  terms: [
                    { term: 'Amazon RDS', definition: 'Managed relational databases like MySQL and PostgreSQL.' },
                    { term: 'Amazon DynamoDB', definition: 'A serverless NoSQL key-value database with fast, flexible scaling.' },
                    { term: 'Amazon Redshift', definition: 'A data warehouse for analytics on large datasets.' },
                    { term: 'Amazon ElastiCache', definition: 'An in-memory caching service for very fast data access.' },
                  ],
                },
                {
                  id: 'd3c2s2-2',
                  kind: 'analogy',
                  title: 'Filing Cabinet vs Sticky Notes',
                  emoji: '🗂️',
                  body:
                    "**RDS/Aurora** are neat filing cabinets with strict, labelled folders (tables and rows) — great when data is structured.\n\n**DynamoDB** is a wall of flexible sticky notes, each with a key — grab any note instantly, no rigid structure. **Redshift** is the huge archive room for crunching years of records at once.",
                },
                {
                  id: 'd3c2s2-3',
                  kind: 'diagram',
                  title: 'SQL vs NoSQL vs Warehouse',
                  emoji: '📊',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Relational (SQL)', emoji: '🗄️', items: ['RDS, Aurora', 'Structured tables', 'Orders, customers'] },
                      { title: 'NoSQL', emoji: '🔑', items: ['DynamoDB', 'Key-value, flexible', 'Huge scale, fast'] },
                      { title: 'Analytics', emoji: '📈', items: ['Redshift', 'Data warehouse', 'Big reporting'] },
                    ],
                  },
                },
                {
                  id: 'd3c2s2-4',
                  kind: 'example',
                  title: 'Bella Picks a Database',
                  emoji: '🧁',
                  body:
                    "Bella's orders and customers have a clear structure (name, item, date, price) — a great fit for **RDS**.\n\nHer homepage 'best sellers' widget needs to load in a flash, so she caches it with **ElastiCache**. If she later wanted year-end sales analytics, she would reach for **Redshift**.",
                },
                {
                  id: 'd3c2s2-5',
                  kind: 'tip',
                  title: 'Exam Tip: Match the Data',
                  emoji: '💡',
                  body:
                    "Keywords: **relational/SQL → RDS or Aurora**. **NoSQL/key-value/serverless database → DynamoDB**. **Data warehouse/analytics → Redshift**. **In-memory cache/microsecond reads → ElastiCache**. Managed means AWS handles patching and backups for you.",
                },
                {
                  id: 'd3c2s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Which service is a fully managed NoSQL key-value database that scales automatically?',
                  options: [
                    { id: 'a', text: 'Amazon RDS', correct: false },
                    { id: 'b', text: 'Amazon Redshift', correct: false },
                    { id: 'c', text: 'Amazon DynamoDB', correct: true },
                    { id: 'd', text: 'Amazon EFS', correct: false },
                  ],
                  explanation:
                    'Amazon DynamoDB is a fully managed, serverless NoSQL key-value database that scales automatically. RDS is relational, and Redshift is a data warehouse.',
                },
              ],
            },
          ],
        },
        {
          id: 'd3c3',
          title: 'Networking, Integration & Monitoring',
          emoji: '🌐',
          description: 'Connecting services, moving traffic, and keeping an eye on everything.',
          sections: [
            {
              id: 'd3c3s1',
              title: 'Networking & Content Delivery',
              summary: 'VPC, Route 53, CloudFront, and Elastic Load Balancing.',
              cards: [
                {
                  id: 'd3c3s1-1',
                  kind: 'concept',
                  title: 'The Networking Core',
                  emoji: '🌐',
                  body:
                    "- **VPC (Virtual Private Cloud)** — your own private, walled-off network inside AWS.\n- **Route 53** — AWS's DNS: turns names like *bakery.com* into server addresses.\n- **CloudFront** — a global content delivery network (CDN) that caches content at edge locations.\n- **ELB (Elastic Load Balancing)** — spreads incoming traffic across many servers.",
                  terms: [
                    { term: 'Amazon VPC', definition: 'A private, isolated virtual network within AWS.' },
                    { term: 'Amazon Route 53', definition: "AWS's DNS service, translating domain names to addresses." },
                    { term: 'Amazon CloudFront', definition: 'A content delivery network caching content at edge locations.' },
                    { term: 'Elastic Load Balancing', definition: 'Distributes incoming traffic across multiple targets.' },
                  ],
                },
                {
                  id: 'd3c3s1-2',
                  kind: 'analogy',
                  title: 'A Gated Neighbourhood',
                  emoji: '🏘️',
                  body:
                    "A **VPC** is your own gated neighbourhood inside the AWS city — you decide the streets and who gets in. **Route 53** is the address book pointing visitors to the right house. **CloudFront** puts popular items in corner shops nearby. **ELB** is a traffic officer sending cars to whichever gate is least busy.",
                },
                {
                  id: 'd3c3s1-3',
                  kind: 'diagram',
                  title: "A Web Request's Journey",
                  emoji: '🔁',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'User', emoji: '🧑' },
                      { label: 'CloudFront', sublabel: 'Edge cache', emoji: '🌍' },
                      { label: 'Load Balancer', sublabel: 'ELB', emoji: '⚖️' },
                      { label: 'EC2 Servers', sublabel: 'Across AZs', emoji: '🖥️' },
                    ],
                  },
                },
                {
                  id: 'd3c3s1-4',
                  kind: 'example',
                  title: 'Serving a Busy Bakery Site',
                  emoji: '🧁',
                  body:
                    "A customer visits *bella-bakes.com*. **Route 53** finds the address. **CloudFront** serves cached cake photos from a nearby edge. Dynamic order pages hit the **ELB**, which routes to whichever **EC2** server across two AZs is freest.\n\nFast, and it stays up even if one server fails.",
                },
                {
                  id: 'd3c3s1-5',
                  kind: 'tip',
                  title: 'Exam Tip: Networking Keywords',
                  emoji: '🎯',
                  body:
                    "**Private isolated network → VPC**. **DNS / domain names → Route 53**. **CDN / cache content globally / reduce latency → CloudFront**. **Spread traffic across servers → ELB**. These four appear constantly — lock them in.",
                },
                {
                  id: 'd3c3s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Which service caches content at edge locations to reduce latency for global users?',
                  options: [
                    { id: 'a', text: 'Amazon Route 53', correct: false },
                    { id: 'b', text: 'Amazon CloudFront', correct: true },
                    { id: 'c', text: 'Amazon VPC', correct: false },
                    { id: 'd', text: 'Elastic Load Balancing', correct: false },
                  ],
                  explanation:
                    "Amazon CloudFront is AWS's content delivery network (CDN). It caches content at edge locations worldwide so users get faster load times.",
                },
              ],
            },
            {
              id: 'd3c3s2',
              title: 'Integration, Management & Monitoring',
              summary: 'SQS, SNS, CloudWatch, CloudTrail, CloudFormation, and Trusted Advisor.',
              cards: [
                {
                  id: 'd3c3s2-1',
                  kind: 'concept',
                  title: 'Messaging: SQS & SNS',
                  emoji: '📨',
                  body:
                    "These let parts of an app talk without being tightly glued together (**decoupling**):\n\n- **SQS (Simple Queue Service)** — a queue that holds messages until a worker is ready to process them.\n- **SNS (Simple Notification Service)** — publishes a message to many subscribers at once (like a broadcast).",
                  terms: [
                    { term: 'Amazon SQS', definition: 'A message queue that stores messages until they are processed.' },
                    { term: 'Amazon SNS', definition: 'A publish/subscribe service that broadcasts messages to subscribers.' },
                    { term: 'Decoupling', definition: 'Letting app components work independently so one failure does not break the rest.' },
                  ],
                },
                {
                  id: 'd3c3s2-2',
                  kind: 'analogy',
                  title: 'A Ticket Queue vs a Loudspeaker',
                  emoji: '🎟️',
                  body:
                    "**SQS** is a deli ticket queue: orders wait in line, and a worker takes the next one whenever they are free — nothing gets lost during a rush.\n\n**SNS** is a loudspeaker announcement: shout once, and everyone subscribed hears it instantly (email, SMS, other services).",
                },
                {
                  id: 'd3c3s2-3',
                  kind: 'concept',
                  title: 'Monitoring & Management',
                  emoji: '📡',
                  body:
                    "- **CloudWatch** — collects **metrics, logs, and alarms**. Watches *performance* (is my server busy?).\n- **CloudTrail** — records *who did what* (an audit trail of API calls).\n- **CloudFormation** — build infrastructure from a template (infrastructure as code).\n- **Trusted Advisor** — checks your account for cost, security, and best-practice tips.",
                  terms: [
                    { term: 'Amazon CloudWatch', definition: 'Monitoring for metrics, logs, and alarms on your resources.' },
                    { term: 'AWS CloudTrail', definition: 'Records API activity — who did what and when.' },
                    { term: 'AWS CloudFormation', definition: 'Creates AWS resources from a reusable template (infrastructure as code).' },
                    { term: 'AWS Trusted Advisor', definition: 'Gives recommendations on cost, security, and best practices.' },
                  ],
                },
                {
                  id: 'd3c3s2-4',
                  kind: 'compare',
                  title: 'CloudWatch vs CloudTrail',
                  emoji: '🔍',
                  compare: {
                    headers: ['Question', 'Service'],
                    rows: [
                      ['Is my server overloaded?', 'CloudWatch (performance)'],
                      ['Who deleted that bucket?', 'CloudTrail (audit)'],
                      ['Alert me when CPU is high', 'CloudWatch alarm'],
                      ['Track every API call made', 'CloudTrail'],
                    ],
                  },
                },
                {
                  id: 'd3c3s2-5',
                  kind: 'tip',
                  title: 'Exam Tip: Cloud-Twins',
                  emoji: '⚠️',
                  body:
                    "The two most confused services: **CloudWatch = performance/metrics/alarms** (watch = monitor). **CloudTrail = who did what** (trail = audit history). **CloudFormation** builds resources from templates. Do not swap them!",
                },
                {
                  id: 'd3c3s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'You need to find out which user deleted an S3 bucket last week. Which service helps?',
                  options: [
                    { id: 'a', text: 'Amazon CloudWatch', correct: false },
                    { id: 'b', text: 'AWS CloudTrail', correct: true },
                    { id: 'c', text: 'AWS CloudFormation', correct: false },
                    { id: 'd', text: 'Amazon SNS', correct: false },
                  ],
                  explanation:
                    'AWS CloudTrail records API activity — who did what and when — making it the tool to audit who deleted the bucket. CloudWatch tracks performance metrics, not user actions.',
                },
                {
                  id: 'd3c3s2-7',
                  kind: 'quiz',
                  title: 'One More',
                  emoji: '✅',
                  question: 'Which service lets you define and create your AWS infrastructure from a reusable template?',
                  options: [
                    { id: 'a', text: 'AWS Trusted Advisor', correct: false },
                    { id: 'b', text: 'Amazon CloudWatch', correct: false },
                    { id: 'c', text: 'AWS CloudFormation', correct: true },
                    { id: 'd', text: 'Amazon SQS', correct: false },
                  ],
                  explanation:
                    'AWS CloudFormation is infrastructure as code: you describe resources in a template and it creates them for you, repeatably and consistently.',
                },
              ],
            },
          ],
        },
      ],
    },
    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 4 — Billing, Pricing, and Support (12%)
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd4',
      title: 'Billing, Pricing, and Support',
      emoji: '💵',
      weight: '12%',
      description:
        'How AWS charges you, the ways to pay less, the tools to track and control spending, and the support plans available when you need help.',
      project: {
        title: '🧁 Bakery in the Cloud — Step 4: Count the Cash',
        brief:
          "Bella's Bakery is planned, secured, and built. Final step: manage the money.\n\n**This step:** Estimate and control costs.\n\n- Use the **AWS Pricing Calculator** to estimate the monthly bill for the EC2, S3, RDS, and CloudFront chosen in Step 3.\n- Pick **pricing models**: On-Demand for spiky test servers, a **Savings Plan** or **Reserved Instance** for the steady web server.\n- Set an **AWS Budget** that emails Bella if spend exceeds her limit.\n- Choose a **support plan** that fits a small business.",
        buildsOn:
          'Builds on Step 3: with the concrete services selected, you now estimate their cost, choose the cheapest safe pricing model for each, and set guardrails so the bill never surprises Bella.',
        stretch:
          'Model growth: if orders double, use **Cost Explorer** to forecast the new bill, and decide when a **Business** support plan becomes worth it.',
      },
      chapters: [
        {
          id: 'd4c1',
          title: 'Pricing & Cost Management',
          emoji: '🏷️',
          description: 'The pricing models and the tools to see, plan, and cap your spending.',
          sections: [
            {
              id: 'd4c1s1',
              title: 'Pricing Models & Free Tier',
              summary: 'On-Demand, Reserved, Spot, Savings Plans, and the Free Tier.',
              cards: [
                {
                  id: 'd4c1s1-1',
                  kind: 'concept',
                  title: 'Four Ways to Pay for EC2',
                  emoji: '🏷️',
                  body:
                    "- **On-Demand** — pay per second/hour, no commitment. Most flexible, priciest.\n- **Reserved Instances** — commit for 1 or 3 years for a big discount.\n- **Savings Plans** — commit to a steady spend for a discount, more flexible than Reserved.\n- **Spot Instances** — grab spare capacity super-cheap, but AWS can reclaim it anytime.",
                  terms: [
                    { term: 'On-Demand', definition: 'Pay-as-you-go pricing with no long-term commitment.' },
                    { term: 'Reserved Instances', definition: 'A 1 or 3 year commitment for a large discount.' },
                    { term: 'Savings Plans', definition: 'A commitment to consistent usage for a discount, flexibly applied.' },
                    { term: 'Spot Instances', definition: 'Deeply discounted spare capacity that AWS can reclaim at short notice.' },
                  ],
                },
                {
                  id: 'd4c1s1-2',
                  kind: 'analogy',
                  title: 'Ways to Book a Hotel',
                  emoji: '🏨',
                  body:
                    "**On-Demand** is walking up and paying the nightly rate — flexible, dearest. **Reserved** is booking a whole year up front for a big discount. **Savings Plans** are a loyalty deal for regular stays. **Spot** is a last-minute cancellation bargain — cheap, but they might give the room away.",
                },
                {
                  id: 'd4c1s1-3',
                  kind: 'diagram',
                  title: 'Cost vs Commitment',
                  emoji: '📊',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'On-Demand', emoji: '🕒', items: ['No commitment', 'Highest price', 'Spiky / unknown workloads'] },
                      { title: 'Reserved / Savings', emoji: '📅', items: ['1 or 3 year commit', 'Big discount', 'Steady workloads'] },
                      { title: 'Spot', emoji: '⚡', items: ['Up to 90% off', 'Can be interrupted', 'Flexible batch jobs'] },
                    ],
                  },
                },
                {
                  id: 'd4c1s1-4',
                  kind: 'concept',
                  title: 'The AWS Free Tier',
                  emoji: '🆓',
                  body:
                    "The **Free Tier** lets you try AWS at no cost, in three forms:\n\n- **Always free** — e.g. the first 1M Lambda requests each month, forever.\n- **12 months free** — e.g. 750 hours of a small EC2 instance for your first year.\n- **Trials** — short-term free trials of specific services.",
                  terms: [
                    { term: 'AWS Free Tier', definition: 'Free usage of many AWS services within set limits to help you learn.' },
                  ],
                },
                {
                  id: 'd4c1s1-5',
                  kind: 'tip',
                  title: 'Exam Tip: Match Workload to Model',
                  emoji: '🎯',
                  body:
                    "**Steady, predictable, always-on → Reserved or Savings Plans**. **Unpredictable, short-lived, or testing → On-Demand**. **Fault-tolerant batch work that can be interrupted → Spot**. Cheapest for steady = Savings/Reserved; cheapest overall (with risk) = Spot.",
                },
                {
                  id: 'd4c1s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'A workload runs steadily 24/7 for years. Which pricing model gives the best savings?',
                  options: [
                    { id: 'a', text: 'On-Demand', correct: false },
                    { id: 'b', text: 'Spot Instances', correct: false },
                    { id: 'c', text: 'Reserved Instances or Savings Plans', correct: true },
                    { id: 'd', text: 'Free Tier only', correct: false },
                  ],
                  explanation:
                    'For steady, predictable, long-running workloads, a 1 or 3 year commitment via Reserved Instances or Savings Plans gives the biggest discount over On-Demand.',
                },
              ],
            },
            {
              id: 'd4c1s2',
              title: 'Cost Tools & Billing',
              summary: 'TCO, consolidated billing, Cost Explorer, Budgets, CUR, and the Pricing Calculator.',
              cards: [
                {
                  id: 'd4c1s2-1',
                  kind: 'concept',
                  title: 'Planning Costs',
                  emoji: '🧮',
                  body:
                    "- **TCO (Total Cost of Ownership)** — the full cost of running something, including hidden extras like power and staff. Cloud often lowers TCO vs owning hardware.\n- **AWS Pricing Calculator** — estimate your bill *before* you build, by adding up the services you plan to use.",
                  terms: [
                    { term: 'Total Cost of Ownership (TCO)', definition: 'The complete cost of a solution, including indirect and hidden costs.' },
                    { term: 'AWS Pricing Calculator', definition: 'A tool to estimate the cost of AWS services before you deploy.' },
                  ],
                },
                {
                  id: 'd4c1s2-2',
                  kind: 'concept',
                  title: 'Consolidated Billing',
                  emoji: '🧾',
                  body:
                    "With **AWS Organizations**, many accounts roll up into **one consolidated bill**. Two perks:\n\n- **One payment** for the whole company.\n- **Volume discounts** — combined usage across accounts can unlock lower per-unit prices (economies of scale).",
                  terms: [
                    { term: 'Consolidated billing', definition: 'Combining multiple AWS accounts into a single bill via Organizations.' },
                  ],
                },
                {
                  id: 'd4c1s2-3',
                  kind: 'concept',
                  title: 'Tracking & Capping Spend',
                  emoji: '📉',
                  body:
                    "- **Cost Explorer** — visualise and analyse *past* spending trends and forecasts.\n- **AWS Budgets** — set a spending limit and get **alerted** (or take action) when you approach it.\n- **Cost & Usage Report (CUR)** — the most detailed, line-by-line billing data for deep analysis.",
                  terms: [
                    { term: 'AWS Cost Explorer', definition: 'A tool to visualise and analyse spending over time.' },
                    { term: 'AWS Budgets', definition: 'Sets spend limits and alerts you when you near or exceed them.' },
                    { term: 'Cost & Usage Report', definition: 'The most granular billing data AWS provides.' },
                  ],
                },
                {
                  id: 'd4c1s2-4',
                  kind: 'example',
                  title: 'Bella Watches the Bill',
                  emoji: '🧁',
                  body:
                    "Bella uses the **Pricing Calculator** to estimate £40/month before launching. She sets an **AWS Budget** at £60 so she gets an email if costs creep up.\n\nAfter three months she opens **Cost Explorer** to spot that CloudFront is her biggest line — useful for planning next year.",
                },
                {
                  id: 'd4c1s2-5',
                  kind: 'tip',
                  title: 'Exam Tip: Estimate vs Track vs Alert',
                  emoji: '💡',
                  body:
                    "**Estimate before building → Pricing Calculator**. **Analyse past/forecast spend → Cost Explorer**. **Set a limit and get alerted → AWS Budgets**. **Most detailed line-item data → Cost & Usage Report**. Match the verb in the question to the tool.",
                },
                {
                  id: 'd4c1s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Which tool alerts you when your spending is about to exceed a set limit?',
                  options: [
                    { id: 'a', text: 'AWS Pricing Calculator', correct: false },
                    { id: 'b', text: 'AWS Budgets', correct: true },
                    { id: 'c', text: 'AWS Artifact', correct: false },
                    { id: 'd', text: 'AWS CloudTrail', correct: false },
                  ],
                  explanation:
                    'AWS Budgets lets you set custom spending limits and sends alerts when actual or forecast costs approach or exceed them. The Pricing Calculator only estimates costs beforehand.',
                },
              ],
            },
          ],
        },
        {
          id: 'd4c2',
          title: 'AWS Support Plans',
          emoji: '🛟',
          description: 'The four support tiers and how to get help when things go wrong.',
          sections: [
            {
              id: 'd4c2s1',
              title: 'Choosing a Support Plan',
              summary: 'Basic, Developer, Business, and Enterprise — who each is for.',
              cards: [
                {
                  id: 'd4c2s1-1',
                  kind: 'concept',
                  title: 'The Four Support Plans',
                  emoji: '🛟',
                  body:
                    "AWS offers four tiers of support:\n\n- **Basic** — free for everyone: docs, forums, and full Trusted Advisor is limited.\n- **Developer** — email support in business hours; for experimenting.\n- **Business** — 24/7 phone/chat/email, full Trusted Advisor; for production.\n- **Enterprise** — everything, plus a dedicated **Technical Account Manager (TAM)**.",
                  terms: [
                    { term: 'Basic Support', definition: 'The free plan included with every account.' },
                    { term: 'Business Support', definition: 'Paid 24/7 support suited to production workloads.' },
                    { term: 'Technical Account Manager', definition: 'A dedicated AWS contact included with Enterprise support.' },
                  ],
                },
                {
                  id: 'd4c2s1-2',
                  kind: 'analogy',
                  title: 'Warranty Tiers',
                  emoji: '🔧',
                  body:
                    "Support plans are like product warranties. **Basic** is the free manual and online forum. **Developer** is email-a-question support. **Business** is a 24/7 helpline for when your shop is live. **Enterprise** is a VIP concierge (your TAM) who knows your setup personally.",
                },
                {
                  id: 'd4c2s1-3',
                  kind: 'diagram',
                  title: 'Support Plans Compared',
                  emoji: '📊',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Basic / Developer', emoji: '🆓', items: ['Free / low cost', 'Docs & forums', 'Email (Dev)', 'Non-production'] },
                      { title: 'Business', emoji: '🏢', items: ['24/7 phone/chat', 'Full Trusted Advisor', 'For production'] },
                      { title: 'Enterprise', emoji: '👑', items: ['All features', 'Dedicated TAM', 'Fastest response', 'Large orgs'] },
                    ],
                  },
                },
                {
                  id: 'd4c2s1-4',
                  kind: 'concept',
                  title: 'The TAM & Concierge',
                  emoji: '🤵',
                  body:
                    "A **Technical Account Manager (TAM)** comes only with **Enterprise** support. The TAM is your personal AWS guide — proactively reviewing your architecture and costs.\n\nEnterprise also adds a **Concierge** team for billing help. If a question mentions a *dedicated* contact, the answer is Enterprise.",
                  terms: [
                    { term: 'Concierge Support', definition: 'A billing and account support team available with Enterprise support.' },
                  ],
                },
                {
                  id: 'd4c2s1-5',
                  kind: 'tip',
                  title: 'Exam Tip: Plan Triggers',
                  emoji: '🎯',
                  body:
                    "**Free / just starting → Basic**. **Testing, email support → Developer**. **Production, 24/7 support → Business**. **Dedicated TAM / largest orgs → Enterprise**. The word *dedicated Technical Account Manager* almost always means **Enterprise**.",
                },
                {
                  id: 'd4c2s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Which support plan includes a dedicated Technical Account Manager (TAM)?',
                  options: [
                    { id: 'a', text: 'Basic', correct: false },
                    { id: 'b', text: 'Developer', correct: false },
                    { id: 'c', text: 'Business', correct: false },
                    { id: 'd', text: 'Enterprise', correct: true },
                  ],
                  explanation:
                    'A dedicated Technical Account Manager (TAM) is included only with the Enterprise Support plan, which also adds concierge billing support and the fastest response times.',
                },
                {
                  id: 'd4c2s1-7',
                  kind: 'quiz',
                  title: 'One More',
                  emoji: '✅',
                  question: 'A startup running its first production website wants 24/7 phone and chat support at a reasonable cost. Which plan fits best?',
                  options: [
                    { id: 'a', text: 'Basic', correct: false },
                    { id: 'b', text: 'Business', correct: true },
                    { id: 'c', text: 'Developer', correct: false },
                    { id: 'd', text: 'Enterprise', correct: false },
                  ],
                  explanation:
                    'Business Support offers 24/7 access to support via phone, chat, and email plus full Trusted Advisor — the right fit for production workloads without the higher cost of Enterprise.',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
