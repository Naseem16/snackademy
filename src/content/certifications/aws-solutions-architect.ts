import type { Certification } from '../types'

export const awsSolutionsArchitect: Certification = {
  id: 'aws-solutions-architect',
  code: 'SAA-C03',
  title: 'AWS Certified Solutions Architect – Associate',
  shortTitle: 'Solutions Architect',
  provider: 'AWS',
  level: 'Associate',
  gradient: 'from-sky-500 to-indigo-600',
  icon: '🏛️',
  tagline: 'Design secure, resilient, fast, and cost-smart cloud architectures.',
  description:
    "The SAA-C03 exam tests your ability to design well-architected solutions on AWS. This course turns dense AWS docs into bite-sized, plain-English cards with analogies, diagrams, and quizzes so the concepts actually stick. Learn IAM, VPCs, scaling, databases, storage, and cost optimization the friendly way.",
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
    // DOMAIN 1 — Design Secure Architectures (30%)
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd1',
      title: 'Design Secure Architectures',
      emoji: '🔐',
      weight: '30%',
      description:
        'Identity, encryption, network security, and the shared responsibility model — the biggest single slice of the exam.',
      chapters: [
        // ─── Chapter 1: Identity & Access Management ──────────────────────
        {
          id: 'd1c1',
          title: 'Identity & Access Management',
          emoji: '🪪',
          description: 'Who can do what in your AWS account — users, groups, roles, and policies.',
          sections: [
            {
              id: 'd1c1s1',
              title: 'IAM Core Building Blocks',
              summary: 'Users, groups, roles, and policies and how they fit together.',
              cards: [
                {
                  id: 'd1c1s1-1',
                  kind: 'concept',
                  title: 'What is IAM? 🪪',
                  emoji: '🪪',
                  body:
                    "**IAM** (Identity and Access Management) controls *who* can do *what* in your AWS account. It is global (not tied to a region) and free.\n\nThe four building blocks are **users**, **groups**, **roles**, and **policies**. Get these straight and a huge chunk of the security domain falls into place.",
                  terms: [
                    { term: 'IAM User', definition: 'A permanent identity for a person or app, with long-term credentials.' },
                    { term: 'IAM Group', definition: 'A collection of users you attach policies to in one place.' },
                    { term: 'IAM Role', definition: 'A temporary identity that can be assumed by users, services, or apps.' },
                    { term: 'IAM Policy', definition: 'A JSON document that allows or denies specific actions on resources.' },
                  ],
                },
                {
                  id: 'd1c1s1-2',
                  kind: 'analogy',
                  title: 'The office building analogy 🏢',
                  emoji: '🏢',
                  body:
                    "Think of your AWS account as an office building.\n\n- **Users** are employees with their own keycards.\n- **Groups** are departments — give the whole Finance team access at once.\n- **Roles** are visitor badges handed out temporarily, then returned.\n- **Policies** are the rules printed on each badge: which doors it opens.",
                },
                {
                  id: 'd1c1s1-3',
                  kind: 'concept',
                  title: 'Policies are just JSON',
                  emoji: '📜',
                  body:
                    "A policy lists **Effect** (Allow/Deny), **Action** (e.g. `s3:GetObject`), and **Resource** (which ARN).\n\nAWS evaluates all policies together. The golden rule: an explicit **Deny** always wins over any Allow. If nothing explicitly allows an action, it is denied by default.",
                  terms: [
                    { term: 'Explicit Deny', definition: 'A Deny statement that overrides every Allow — the strongest rule.' },
                    { term: 'Implicit Deny', definition: 'The default: anything not explicitly allowed is denied.' },
                  ],
                },
                {
                  id: 'd1c1s1-4',
                  kind: 'diagram',
                  title: 'How the pieces connect',
                  emoji: '🧩',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'User', emoji: '🧑' },
                      { label: 'Group', sublabel: 'membership', emoji: '👥' },
                      { label: 'Policy', sublabel: 'JSON rules', emoji: '📜' },
                      { label: 'Permissions', sublabel: 'allowed actions', emoji: '✅' },
                    ],
                  },
                },
                {
                  id: 'd1c1s1-5',
                  kind: 'example',
                  title: 'Roles for EC2',
                  emoji: '🖥️',
                  body:
                    "Your app on EC2 needs to read from S3. **Do not** paste access keys into the code.\n\nInstead, create an **IAM role** with S3 read permission and attach it to the EC2 instance. The instance gets automatic, rotating temporary credentials. No secrets to leak — this is the AWS-preferred pattern.",
                },
                {
                  id: 'd1c1s1-6',
                  kind: 'tip',
                  title: 'Exam gotcha: roles vs keys',
                  emoji: '⚠️',
                  body:
                    "If a question shows an EC2 instance or Lambda needing AWS access and the options include **hard-coded access keys** vs an **IAM role**, the answer is almost always the **role**. Roles give temporary, auto-rotated credentials — keys are a liability.",
                },
                {
                  id: 'd1c1s1-7',
                  kind: 'quiz',
                  title: 'Quick check',
                  question: 'An application running on EC2 must access a DynamoDB table. What is the most secure way to grant access?',
                  options: [
                    { id: 'a', text: 'Store IAM user access keys in the application code', correct: false },
                    { id: 'b', text: 'Attach an IAM role to the EC2 instance with DynamoDB permissions', correct: true },
                    { id: 'c', text: 'Make the DynamoDB table public', correct: false },
                    { id: 'd', text: 'Use the root account credentials', correct: false },
                  ],
                  explanation:
                    "IAM roles provide temporary, automatically rotated credentials to the EC2 instance — no secrets in code. Storing keys, going public, or using root are all insecure.",
                },
              ],
            },
            {
              id: 'd1c1s2',
              title: 'IAM Best Practices & MFA',
              summary: 'Protecting the root user, least privilege, and multi-factor auth.',
              cards: [
                {
                  id: 'd1c1s2-1',
                  kind: 'concept',
                  title: 'Protect the root user 👑',
                  emoji: '👑',
                  body:
                    "The **root user** can do *anything* and cannot be restricted. Best practice: enable **MFA** on root, lock the credentials away, and never use it for daily work.\n\nCreate individual IAM users (or use IAM Identity Center / SSO) for everyday tasks instead.",
                  terms: [
                    { term: 'Root User', definition: 'The all-powerful account owner created with your email — use it almost never.' },
                    { term: 'MFA', definition: 'Multi-Factor Authentication: a second proof of identity beyond a password.' },
                    { term: 'Least Privilege', definition: 'Grant only the permissions needed to do the job — nothing more.' },
                  ],
                },
                {
                  id: 'd1c1s2-2',
                  kind: 'analogy',
                  title: 'MFA is your door + deadbolt 🚪',
                  emoji: '🚪',
                  body:
                    "A password alone is like a single lock — pick it and you are in. **MFA** adds a deadbolt only you can open (a code from your phone or a hardware key).\n\nEven if someone steals your password, they cannot get in without the second factor.",
                },
                {
                  id: 'd1c1s2-3',
                  kind: 'concept',
                  title: 'Least privilege by default',
                  emoji: '🎯',
                  body:
                    "Start with **zero** permissions and add only what is needed. Use **IAM Access Analyzer** to spot overly broad access and the policy simulator to test rules.\n\nFavor groups over per-user policies, and prefer roles over long-lived keys everywhere you can.",
                },
                {
                  id: 'd1c1s2-4',
                  kind: 'tip',
                  title: 'Exam gotcha: root-only tasks',
                  emoji: '⚠️',
                  body:
                    "A few tasks *require* the root user: changing the account name/email, closing the account, changing support plan, and restoring an accidentally deleted IAM admin. Memorize that these are the rare root-only exceptions.",
                },
                {
                  id: 'd1c1s2-5',
                  kind: 'example',
                  title: 'Onboarding a new dev',
                  emoji: '🧑‍💻',
                  body:
                    "New developer joins. Best practice flow: add them to the **Developers** group (which has a scoped policy), require **MFA**, and give them a role to assume for production rather than standing access. Clean, auditable, least-privilege.",
                },
                {
                  id: 'd1c1s2-6',
                  kind: 'quiz',
                  title: 'Quick check',
                  question: 'Which practice best follows AWS security recommendations for the root account?',
                  options: [
                    { id: 'a', text: 'Use root for all daily administration', correct: false },
                    { id: 'b', text: 'Enable MFA on root and use IAM users/roles for daily work', correct: true },
                    { id: 'c', text: 'Share root credentials with the whole team', correct: false },
                    { id: 'd', text: 'Disable MFA to simplify logins', correct: false },
                  ],
                  explanation:
                    "Lock down root with MFA and reserve it for the rare root-only tasks. Everyday work should use least-privilege IAM identities.",
                },
                {
                  id: 'd1c1s2-7',
                  kind: 'concept',
                  title: 'IAM Identity Center (SSO)',
                  emoji: '🔓',
                  body:
                    "For multiple accounts and human users, **IAM Identity Center** (formerly AWS SSO) is the modern choice. Users sign in once and get short-lived role credentials across accounts, often federated from an existing corporate directory like Active Directory.",
                  terms: [
                    { term: 'IAM Identity Center', definition: 'Central sign-on for workforce users across many AWS accounts.' },
                    { term: 'Federation', definition: 'Letting users log in with an external identity provider.' },
                  ],
                },
                {
                  id: 'd1c1s2-8',
                  kind: 'quiz',
                  title: 'Quick check',
                  question: 'A company with 30 AWS accounts wants employees to sign in once using their existing corporate directory. What is the best fit?',
                  options: [
                    { id: 'a', text: 'Create separate IAM users in every account', correct: false },
                    { id: 'b', text: 'Use IAM Identity Center with directory federation', correct: true },
                    { id: 'c', text: 'Share one root user across accounts', correct: false },
                    { id: 'd', text: 'Email access keys to each employee', correct: false },
                  ],
                  explanation:
                    "IAM Identity Center provides centralized single sign-on with short-lived credentials across many accounts and federates from corporate directories — far better than per-account IAM users.",
                },
              ],
            },
          ],
        },
        // ─── Chapter 2: Organizations, Encryption & Secrets ───────────────
        {
          id: 'd1c2',
          title: 'Organizations, Encryption & Secrets',
          emoji: '🔑',
          description: 'Multi-account governance and protecting data with keys and secret stores.',
          sections: [
            {
              id: 'd1c2s1',
              title: 'AWS Organizations & SCPs',
              summary: 'Managing many accounts and setting guardrails.',
              cards: [
                {
                  id: 'd1c2s1-1',
                  kind: 'concept',
                  title: 'AWS Organizations 🏢',
                  emoji: '🏢',
                  body:
                    "**AWS Organizations** lets you manage many AWS accounts centrally. You group accounts into **Organizational Units (OUs)** and get consolidated billing (one bill, volume discounts).\n\nIt is the foundation for governance across a company with dev, test, and prod accounts.",
                  terms: [
                    { term: 'Organization', definition: 'A central management container for multiple AWS accounts.' },
                    { term: 'OU', definition: 'Organizational Unit — a folder grouping accounts for shared policies.' },
                    { term: 'SCP', definition: 'Service Control Policy — a guardrail capping what accounts/OUs may do.' },
                  ],
                },
                {
                  id: 'd1c2s1-2',
                  kind: 'concept',
                  title: 'SCPs are guardrails',
                  emoji: '🚧',
                  body:
                    "A **Service Control Policy** sets the *maximum* permissions for accounts in an OU. It does **not** grant anything — it only limits.\n\nEven an account admin cannot exceed the SCP. Effective permissions = SCP allows AND IAM allows.",
                },
                {
                  id: 'd1c2s1-3',
                  kind: 'analogy',
                  title: "SCP = the building's master rules",
                  emoji: '📋',
                  body:
                    "Think of an SCP as the landlord's master lease. Individual tenants (accounts) can lock their own doors however they like — but they can never do something the master lease forbids, like knocking down a wall. SCPs cap the ceiling; IAM decides the rest.",
                },
                {
                  id: 'd1c2s1-4',
                  kind: 'example',
                  title: 'Blocking a region',
                  emoji: '🌍',
                  body:
                    "Compliance says: no resources outside `eu-west-1`. Attach an SCP at the OU level that **denies** all actions in other regions.\n\nNow no account in that OU — not even its admin — can spin up anything elsewhere. One policy, org-wide enforcement.",
                },
                {
                  id: 'd1c2s1-5',
                  kind: 'tip',
                  title: 'Exam gotcha: SCP never grants',
                  emoji: '⚠️',
                  body:
                    "Remember: an SCP **never grants** permissions — users still need IAM policies. If a question says 'an SCP gave a user access', that is wrong. SCPs only restrict the boundary.",
                },
                {
                  id: 'd1c2s1-6',
                  kind: 'quiz',
                  title: 'Quick check',
                  question: 'A company wants to prevent any account in a dev OU from using regions outside us-east-1. What should they use?',
                  options: [
                    { id: 'a', text: 'An IAM policy on each user', correct: false },
                    { id: 'b', text: 'A Service Control Policy on the OU', correct: true },
                    { id: 'c', text: 'A security group rule', correct: false },
                    { id: 'd', text: 'A NACL', correct: false },
                  ],
                  explanation:
                    "SCPs apply org-wide guardrails to whole OUs/accounts and can deny actions in unwanted regions — far more scalable and tamper-proof than per-user IAM policies.",
                },
              ],
            },
            {
              id: 'd1c2s2',
              title: 'KMS & Encryption',
              summary: 'Encrypting data at rest and in transit with managed keys.',
              cards: [
                {
                  id: 'd1c2s2-1',
                  kind: 'concept',
                  title: 'Encryption at rest vs in transit 🔒',
                  emoji: '🔒',
                  body:
                    "**At rest** means data sitting on a disk (S3, EBS, RDS). **In transit** means data moving over the network (use TLS/HTTPS).\n\nAWS makes both easy: enable encryption on the service for at-rest, and use ACM certificates + HTTPS for in-transit.",
                  terms: [
                    { term: 'At Rest', definition: 'Stored data on disk or in a database.' },
                    { term: 'In Transit', definition: 'Data moving across a network, protected by TLS/SSL.' },
                    { term: 'KMS', definition: 'Key Management Service — creates and controls encryption keys.' },
                  ],
                },
                {
                  id: 'd1c2s2-2',
                  kind: 'concept',
                  title: 'AWS KMS',
                  emoji: '🔑',
                  body:
                    "**KMS** manages encryption keys for you. Most AWS services integrate with it — tick a box and your S3 bucket or EBS volume is encrypted.\n\nKeys can be **AWS-managed** (automatic) or **customer-managed** (you control rotation, policies, and who can use them).",
                },
                {
                  id: 'd1c2s2-3',
                  kind: 'analogy',
                  title: 'KMS is the master keyring 🗝️',
                  emoji: '🗝️',
                  body:
                    "KMS is like a guarded keyring at the front desk. Your data is locked in boxes; the keys never leave the desk. To open a box, services ask KMS, which checks the policy and unlocks it for them. You never handle the raw key yourself.",
                },
                {
                  id: 'd1c2s2-4',
                  kind: 'tip',
                  title: 'Exam gotcha: CloudHSM vs KMS',
                  emoji: '⚠️',
                  body:
                    "If a question demands a **dedicated, single-tenant hardware security module** or **FIPS 140-2 Level 3** with full key custody, the answer is **CloudHSM**. For everyday integrated encryption, it is **KMS**.",
                },
                {
                  id: 'd1c2s2-5',
                  kind: 'example',
                  title: 'Encrypting an existing EBS volume',
                  emoji: '💽',
                  body:
                    "You forgot to encrypt a volume. You cannot toggle encryption in place. The pattern: take a **snapshot**, **copy the snapshot with encryption enabled**, then create a new volume from the encrypted snapshot. Swap it onto the instance.",
                },
                {
                  id: 'd1c2s2-6',
                  kind: 'quiz',
                  title: 'Quick check',
                  question: 'Which service should you choose when you need a dedicated, single-tenant FIPS 140-2 Level 3 hardware module for key management?',
                  options: [
                    { id: 'a', text: 'AWS KMS', correct: false },
                    { id: 'b', text: 'AWS CloudHSM', correct: true },
                    { id: 'c', text: 'AWS Secrets Manager', correct: false },
                    { id: 'd', text: 'SSM Parameter Store', correct: false },
                  ],
                  explanation:
                    "CloudHSM gives you dedicated, single-tenant hardware with full key custody and FIPS 140-2 Level 3 compliance. KMS is multi-tenant and managed.",
                },
                {
                  id: 'd1c2s2-7',
                  kind: 'concept',
                  title: 'Encryption in transit',
                  emoji: '🔐',
                  body:
                    "Protect data **moving** over networks with **TLS/SSL**. Use **HTTPS** on load balancers, CloudFront, and APIs, and request free certificates from **ACM**. Many services (RDS, Redis) also offer in-transit encryption you simply enable — no excuse for plaintext on the wire.",
                  terms: [
                    { term: 'TLS', definition: 'Transport Layer Security — encrypts data as it travels the network.' },
                  ],
                },
                {
                  id: 'd1c2s2-8',
                  kind: 'tip',
                  title: 'Exam gotcha: at rest vs in transit',
                  emoji: '⚠️',
                  body:
                    "Watch the wording. Protecting stored data → **at rest** (KMS-backed encryption on S3/EBS/RDS). Protecting data travelling between client and server → **in transit** (TLS/HTTPS with ACM certificates). Strong designs do both.",
                },
              ],
            },
            {
              id: 'd1c2s3',
              title: 'Secrets Manager vs Parameter Store',
              summary: 'Where to keep passwords, API keys, and config safely.',
              cards: [
                {
                  id: 'd1c2s3-1',
                  kind: 'concept',
                  title: 'Two stores for sensitive config',
                  emoji: '🤫',
                  body:
                    "**Secrets Manager** and **SSM Parameter Store** both hold sensitive values securely. The big difference: **Secrets Manager** can **automatically rotate** credentials (e.g. RDS passwords) for you. Parameter Store is simpler and free for standard parameters.",
                  terms: [
                    { term: 'Secrets Manager', definition: 'Stores secrets with built-in automatic rotation (paid per secret).' },
                    { term: 'Parameter Store', definition: 'Stores config and secrets; free standard tier, no native rotation.' },
                  ],
                },
                {
                  id: 'd1c2s3-2',
                  kind: 'analogy',
                  title: 'Self-changing locks 🔄',
                  emoji: '🔄',
                  body:
                    "Parameter Store is a labeled safe — solid storage, but you change the combination yourself. Secrets Manager is a smart safe that **rotates its own combination** on a schedule and tells the database the new one automatically. Less to forget, less to leak.",
                },
                {
                  id: 'd1c2s3-3',
                  kind: 'compare',
                  title: 'Secrets Manager vs Parameter Store',
                  emoji: '⚖️',
                  compare: {
                    headers: ['Feature', 'Secrets Manager', 'Parameter Store'],
                    rows: [
                      ['Automatic rotation', 'Yes (built-in)', 'No (Lambda DIY)'],
                      ['Cost', 'Per secret / API call', 'Free (standard tier)'],
                      ['Best for', 'DB passwords, API keys', 'Config values, simple secrets'],
                      ['KMS encryption', 'Yes', 'Yes (SecureString)'],
                    ],
                  },
                },
                {
                  id: 'd1c2s3-4',
                  kind: 'tip',
                  title: 'Exam gotcha: rotation = Secrets Manager',
                  emoji: '⚠️',
                  body:
                    "See the words **automatic rotation** of database credentials? Pick **Secrets Manager**. If the question stresses **lowest cost** for simple config or plain strings, **Parameter Store** wins.",
                },
                {
                  id: 'd1c2s3-5',
                  kind: 'quiz',
                  title: 'Quick check',
                  question: 'A team needs to store an RDS password and rotate it automatically every 30 days. Which service fits best?',
                  options: [
                    { id: 'a', text: 'SSM Parameter Store standard tier', correct: false },
                    { id: 'b', text: 'AWS Secrets Manager', correct: true },
                    { id: 'c', text: 'An S3 bucket', correct: false },
                    { id: 'd', text: 'Environment variables in code', correct: false },
                  ],
                  explanation:
                    "Secrets Manager has native, scheduled rotation that integrates directly with RDS — exactly what automatic credential rotation calls for.",
                },
              ],
            },
          ],
        },
        // ─── Chapter 3: Network & Edge Security ───────────────────────────
        {
          id: 'd1c3',
          title: 'Network & Edge Security',
          emoji: '🛜',
          description: 'VPC design, firewalls at two layers, and protecting the edge.',
          sections: [
            {
              id: 'd1c3s1',
              title: 'VPC Design Fundamentals',
              summary: 'Subnets, route tables, gateways, and NAT.',
              cards: [
                {
                  id: 'd1c3s1-1',
                  kind: 'concept',
                  title: 'The VPC 🏙️',
                  emoji: '🏙️',
                  body:
                    "A **VPC** (Virtual Private Cloud) is your private, isolated network in AWS. You carve it into **subnets**, control traffic with **route tables**, and connect to the internet via an **Internet Gateway**.\n\nPublic subnets route to the IGW; private subnets do not.",
                  terms: [
                    { term: 'VPC', definition: 'Your isolated virtual network within a region.' },
                    { term: 'Subnet', definition: 'A slice of the VPC living in one Availability Zone.' },
                    { term: 'Route Table', definition: 'Rules that decide where subnet traffic goes.' },
                    { term: 'Internet Gateway', definition: 'The door that connects a VPC to the public internet.' },
                  ],
                },
                {
                  id: 'd1c3s1-2',
                  kind: 'analogy',
                  title: 'VPC = a gated neighborhood 🏘️',
                  emoji: '🏘️',
                  body:
                    "Your VPC is a gated community. **Subnets** are streets. The **Internet Gateway** is the main gate to the outside world. **Public** streets have a path to the gate; **private** streets are tucked inside with no direct exit. Route tables are the street signs telling traffic where to go.",
                },
                {
                  id: 'd1c3s1-3',
                  kind: 'concept',
                  title: 'NAT Gateway',
                  emoji: '🚪',
                  body:
                    "Servers in a **private subnet** sometimes need outbound internet (e.g. to download updates) but must stay unreachable from outside. A **NAT Gateway** (placed in a public subnet) lets them reach out without letting anyone reach in. It is managed, scalable, and lives in one AZ.",
                  terms: [
                    { term: 'NAT Gateway', definition: 'Lets private subnets make outbound internet connections only.' },
                  ],
                },
                {
                  id: 'd1c3s1-4',
                  kind: 'diagram',
                  title: 'VPC layering',
                  emoji: '🥞',
                  diagram: {
                    type: 'stack',
                    nodes: [
                      { label: 'VPC', sublabel: '10.0.0.0/16', emoji: '🏙️' },
                      { label: 'Public Subnet', sublabel: 'IGW + NAT GW', emoji: '🌐' },
                      { label: 'Private Subnet', sublabel: 'app servers', emoji: '🔒' },
                      { label: 'Private DB Subnet', sublabel: 'no internet', emoji: '🗄️' },
                    ],
                  },
                },
                {
                  id: 'd1c3s1-5',
                  kind: 'tip',
                  title: 'Exam gotcha: NAT GW vs IGW',
                  emoji: '⚠️',
                  body:
                    "**Internet Gateway** = two-way internet for public subnets. **NAT Gateway** = outbound-only for private subnets. For high availability, deploy a NAT Gateway in **each AZ** — it is not multi-AZ on its own.",
                },
                {
                  id: 'd1c3s1-6',
                  kind: 'example',
                  title: 'Classic 3-tier layout',
                  emoji: '🏗️',
                  body:
                    "Web tier in **public** subnets behind a load balancer. App tier in **private** subnets. Database in **isolated private** subnets with no internet route at all. App servers reach out for patches via a **NAT Gateway**. Secure, layered, and exam-favorite.",
                },
                {
                  id: 'd1c3s1-7',
                  kind: 'quiz',
                  title: 'Quick check',
                  question: 'Private EC2 instances must download OS patches from the internet but should not be reachable from outside. What do you add?',
                  options: [
                    { id: 'a', text: 'An Internet Gateway route directly on the private subnet', correct: false },
                    { id: 'b', text: 'A NAT Gateway in a public subnet', correct: true },
                    { id: 'c', text: 'A second VPC', correct: false },
                    { id: 'd', text: 'A public IP on each instance', correct: false },
                  ],
                  explanation:
                    "A NAT Gateway allows outbound-only internet access for private subnets while keeping instances unreachable from the internet.",
                },
              ],
            },
            {
              id: 'd1c3s2',
              title: 'Security Groups vs NACLs',
              summary: 'The two firewall layers and when each applies.',
              cards: [
                {
                  id: 'd1c3s2-1',
                  kind: 'concept',
                  title: 'Two firewalls, two layers',
                  emoji: '🧱',
                  body:
                    "**Security Groups** guard the **instance** (ENI) level and are **stateful** — return traffic is auto-allowed. **NACLs** guard the **subnet** level and are **stateless** — you must allow both directions.\n\nSecurity Groups allow-only; NACLs can allow *and* deny.",
                  terms: [
                    { term: 'Security Group', definition: 'Stateful, instance-level firewall; allow rules only.' },
                    { term: 'NACL', definition: 'Stateless, subnet-level firewall; allow and deny rules.' },
                    { term: 'Stateful', definition: 'Remembers connections, so return traffic is automatically allowed.' },
                  ],
                },
                {
                  id: 'd1c3s2-2',
                  kind: 'analogy',
                  title: 'Bouncer vs neighborhood gate 🕴️',
                  emoji: '🕴️',
                  body:
                    "A **Security Group** is the bouncer at each club door — he remembers who he let in, so they can leave freely (stateful). A **NACL** is the gate guard for the whole street — he checks every car both ways and keeps no memory (stateless), and he can keep a banned list.",
                },
                {
                  id: 'd1c3s2-3',
                  kind: 'diagram',
                  title: 'SG vs NACL',
                  emoji: '⚖️',
                  diagram: {
                    type: 'compare',
                    columns: [
                      {
                        title: 'Security Group',
                        emoji: '🕴️',
                        items: ['Instance / ENI level', 'Stateful', 'Allow rules only', 'Evaluates all rules'],
                      },
                      {
                        title: 'NACL',
                        emoji: '🚧',
                        items: ['Subnet level', 'Stateless', 'Allow + Deny rules', 'Rules in number order'],
                      },
                    ],
                  },
                },
                {
                  id: 'd1c3s2-4',
                  kind: 'tip',
                  title: 'Exam gotcha: block one IP',
                  emoji: '⚠️',
                  body:
                    "Need to **block a specific malicious IP**? Use a **NACL** — Security Groups cannot deny. Need return traffic handled automatically with minimal rules? That is the **Security Group** advantage (stateful).",
                },
                {
                  id: 'd1c3s2-5',
                  kind: 'example',
                  title: 'Letting web traffic in',
                  emoji: '🌐',
                  body:
                    "For a web server: the **Security Group** allows inbound 443 from `0.0.0.0/0`. Because it is stateful, responses flow back automatically — no outbound rule needed. The subnet **NACL** stays at its default allow-all unless you must block a bad actor.",
                },
                {
                  id: 'd1c3s2-6',
                  kind: 'quiz',
                  title: 'Quick check',
                  question: 'You must block traffic from one specific abusive IP address to all instances in a subnet. Which tool fits?',
                  options: [
                    { id: 'a', text: 'Security Group inbound deny rule', correct: false },
                    { id: 'b', text: 'A NACL deny rule on the subnet', correct: true },
                    { id: 'c', text: 'An IAM policy', correct: false },
                    { id: 'd', text: 'A route table entry', correct: false },
                  ],
                  explanation:
                    "Security Groups support only allow rules, so they cannot block an IP. NACLs are stateless and support deny rules at the subnet level — perfect for blocklisting an IP.",
                },
                {
                  id: 'd1c3s2-7',
                  kind: 'concept',
                  title: 'VPC Endpoints',
                  emoji: '🔌',
                  body:
                    "A **VPC Endpoint** lets resources reach AWS services privately, without traversing the internet. **Gateway endpoints** (free) serve S3 and DynamoDB; **Interface endpoints** (powered by PrivateLink) serve most other services via a private IP.",
                  terms: [
                    { term: 'Gateway Endpoint', definition: 'Free private route to S3 and DynamoDB via the route table.' },
                    { term: 'Interface Endpoint', definition: 'PrivateLink ENI giving private access to many AWS services.' },
                  ],
                },
              ],
            },
            {
              id: 'd1c3s3',
              title: 'Edge Protection & Threat Detection',
              summary: 'WAF, Shield, GuardDuty, Cognito, ACM, and shared responsibility.',
              cards: [
                {
                  id: 'd1c3s3-1',
                  kind: 'concept',
                  title: 'WAF, Shield & GuardDuty 🛡️',
                  emoji: '🛡️',
                  body:
                    "**WAF** filters layer-7 web requests (SQL injection, bad bots) on CloudFront/ALB/API Gateway. **Shield** defends against **DDoS** (Standard is free; Advanced is paid). **GuardDuty** is intelligent threat detection that watches logs for suspicious activity.",
                  terms: [
                    { term: 'AWS WAF', definition: 'Web Application Firewall filtering HTTP(S) requests by rules.' },
                    { term: 'AWS Shield', definition: 'DDoS protection — Standard (free) and Advanced (paid).' },
                    { term: 'GuardDuty', definition: 'Continuous threat detection from VPC, DNS, and CloudTrail logs.' },
                  ],
                },
                {
                  id: 'd1c3s3-2',
                  kind: 'analogy',
                  title: "A castle's defenses 🏰",
                  emoji: '🏰',
                  body:
                    "**Shield** is the moat absorbing a flood of attackers (DDoS). **WAF** is the gatekeeper inspecting each visitor's papers (malicious requests). **GuardDuty** is the watchtower scout spotting suspicious movement inside the walls. Layered defense, each with a job.",
                },
                {
                  id: 'd1c3s3-3',
                  kind: 'concept',
                  title: 'Cognito & ACM',
                  emoji: '🪪',
                  body:
                    "**Cognito** handles **end-user** sign-up/sign-in and federated identity for your apps (user pools + identity pools). **ACM** (Certificate Manager) provisions and auto-renews free **TLS certificates** for your domains on ELB, CloudFront, and API Gateway.",
                  terms: [
                    { term: 'Cognito', definition: 'Managed user authentication and identity for web/mobile apps.' },
                    { term: 'ACM', definition: 'Certificate Manager — free, auto-renewing TLS certificates.' },
                  ],
                },
                {
                  id: 'd1c3s3-4',
                  kind: 'concept',
                  title: 'Shared Responsibility Model',
                  emoji: '🤝',
                  body:
                    "AWS secures the cloud (hardware, facilities, managed services) — **security OF the cloud**. You secure what you put *in* it (data, IAM config, patching your EC2 OS) — **security IN the cloud**. The line shifts: more managed services = more on AWS.",
                  terms: [
                    { term: 'Security OF the cloud', definition: "AWS's job: physical infrastructure and managed services." },
                    { term: 'Security IN the cloud', definition: 'Your job: data, access config, and guest OS.' },
                  ],
                },
                {
                  id: 'd1c3s3-5',
                  kind: 'tip',
                  title: 'Exam gotcha: who patches what?',
                  emoji: '⚠️',
                  body:
                    "On **EC2** (IaaS) *you* patch the OS. On **RDS / Lambda / S3** (managed) AWS patches the underlying system. If a question asks who handles OS patches for EC2 — it is **you**, the customer.",
                },
                {
                  id: 'd1c3s3-6',
                  kind: 'quiz',
                  title: 'Quick check',
                  question: 'A web app behind CloudFront is being hit with SQL injection attempts. Which service best filters these requests?',
                  options: [
                    { id: 'a', text: 'AWS Shield Standard', correct: false },
                    { id: 'b', text: 'AWS WAF', correct: true },
                    { id: 'c', text: 'GuardDuty', correct: false },
                    { id: 'd', text: 'A NACL', correct: false },
                  ],
                  explanation:
                    "AWS WAF inspects layer-7 HTTP(S) requests and blocks patterns like SQL injection and XSS. Shield handles DDoS; GuardDuty detects threats but does not filter requests.",
                },
                {
                  id: 'd1c3s3-7',
                  kind: 'quiz',
                  title: 'Quick check',
                  question: 'Under the shared responsibility model, who is responsible for patching the guest OS on an EC2 instance?',
                  options: [
                    { id: 'a', text: 'AWS', correct: false },
                    { id: 'b', text: 'The customer', correct: true },
                    { id: 'c', text: 'Nobody — it is automatic for EC2', correct: false },
                    { id: 'd', text: 'The hardware vendor', correct: false },
                  ],
                  explanation:
                    "EC2 is IaaS: AWS secures the infrastructure, but the customer is responsible for the guest OS, including patching. Managed services like RDS shift that to AWS.",
                },
              ],
            },
          ],
        },
      ],
    },
    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 2 — Design Resilient Architectures (26%)
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd2',
      title: 'Design Resilient Architectures',
      emoji: '🛡️',
      weight: '26%',
      description: 'Building systems that stay up, recover gracefully, and never lose data.',
      chapters: [
        // ─── Chapter 1: HA, Scaling & Load Balancing ──────────────────────
        {
          id: 'd2c1',
          title: 'High Availability, Scaling & Load Balancing',
          emoji: '⚖️',
          description: 'Keeping apps online and elastic under changing load.',
          sections: [
            {
              id: 'd2c1s1',
              title: 'HA vs Fault Tolerance, Multi-AZ vs Multi-Region',
              summary: 'The core resilience vocabulary.',
              cards: [
                {
                  id: 'd2c1s1-1',
                  kind: 'concept',
                  title: 'HA vs Fault Tolerance',
                  emoji: '🟢',
                  body:
                    "**High Availability (HA)** minimizes downtime — a brief blip then recovery. **Fault Tolerance (FT)** means *zero* interruption even when a component fails. FT is harder and pricier.\n\nMost exam answers favor HA via **multiple AZs**.",
                  terms: [
                    { term: 'High Availability', definition: 'Designed to minimize downtime and recover quickly.' },
                    { term: 'Fault Tolerance', definition: 'Keeps running with no interruption despite failures.' },
                    { term: 'Availability Zone', definition: 'An isolated datacenter cluster within a region.' },
                  ],
                },
                {
                  id: 'd2c1s1-2',
                  kind: 'analogy',
                  title: 'Spare tire vs second car 🚗',
                  emoji: '🚗',
                  body:
                    "**HA** is carrying a spare tire — a flat means a short stop, then you continue. **Fault tolerance** is driving with a second car following you, so a flat means you instantly hop over with no pause at all. More resilience, more cost.",
                },
                {
                  id: 'd2c1s1-3',
                  kind: 'concept',
                  title: 'Multi-AZ vs Multi-Region',
                  emoji: '🌎',
                  body:
                    "**Multi-AZ** spreads resources across datacenters in one region — protects against an AZ outage with low latency. **Multi-Region** spans regions — protects against a whole-region disaster and serves global users, but adds cost and complexity.",
                },
                {
                  id: 'd2c1s1-4',
                  kind: 'tip',
                  title: 'Exam gotcha: default to Multi-AZ',
                  emoji: '⚠️',
                  body:
                    "When a question asks for **high availability** without mentioning global users or region-wide disaster, the answer is usually **Multi-AZ**. Reach for **Multi-Region** only when the scenario stresses global reach or surviving a full region failure.",
                },
                {
                  id: 'd2c1s1-5',
                  kind: 'quiz',
                  title: 'Quick check',
                  question: 'An app must survive the failure of a single data center with only a brief recovery. What is the simplest fit?',
                  options: [
                    { id: 'a', text: 'Deploy across multiple Availability Zones', correct: true },
                    { id: 'b', text: 'Deploy in a single AZ with bigger instances', correct: false },
                    { id: 'c', text: 'Deploy across three regions', correct: false },
                    { id: 'd', text: 'Use a single EC2 with an Elastic IP', correct: false },
                  ],
                  explanation:
                    "Multiple AZs protect against a single data-center (AZ) failure with low latency and modest cost — the standard high-availability answer. Multi-region is overkill for a single-DC failure.",
                },
                {
                  id: 'd2c1s1-6',
                  kind: 'concept',
                  title: 'Region, AZ, and edge',
                  emoji: '🗺️',
                  body:
                    "AWS is built in **Regions** (geographic areas), each with multiple **Availability Zones** (isolated datacenters), plus hundreds of **edge locations** for CloudFront. Spreading across AZs is the foundation of nearly every resilient design on AWS.",
                  terms: [
                    { term: 'Region', definition: 'A geographic area containing multiple Availability Zones.' },
                    { term: 'Edge Location', definition: 'A CDN point of presence close to end users.' },
                  ],
                },
                {
                  id: 'd2c1s1-7',
                  kind: 'diagram',
                  title: 'Resilience scope',
                  emoji: '🧱',
                  diagram: {
                    type: 'pyramid',
                    nodes: [
                      { label: 'Single Instance', sublabel: 'no resilience', emoji: '🧊' },
                      { label: 'Multi-AZ', sublabel: 'survives AZ failure', emoji: '🛡️' },
                      { label: 'Multi-Region', sublabel: 'survives region failure', emoji: '🌍' },
                    ],
                  },
                },
              ],
            },
            {
              id: 'd2c1s2',
              title: 'Auto Scaling & Elastic Load Balancing',
              summary: 'Matching capacity to demand and spreading traffic.',
              cards: [
                {
                  id: 'd2c1s2-1',
                  kind: 'concept',
                  title: 'Auto Scaling Groups',
                  emoji: '📈',
                  body:
                    "An **Auto Scaling Group (ASG)** automatically adds or removes EC2 instances to match demand. You set **min**, **max**, and **desired** capacity, plus scaling policies (e.g. target 60% CPU).\n\nSpread the ASG across AZs for both elasticity *and* high availability.",
                  terms: [
                    { term: 'Auto Scaling Group', definition: 'Manages a fleet of EC2s, scaling in/out automatically.' },
                    { term: 'Target Tracking', definition: 'Scaling policy that keeps a metric (like CPU) at a target value.' },
                  ],
                },
                {
                  id: 'd2c1s2-2',
                  kind: 'analogy',
                  title: 'Hiring seasonal staff 🛍️',
                  emoji: '🛍️',
                  body:
                    "Auto Scaling is like a shop hiring extra cashiers when queues grow and sending them home when it is quiet. You never overpay for idle staff, and customers never wait too long. Capacity follows demand automatically.",
                },
                {
                  id: 'd2c1s2-3',
                  kind: 'diagram',
                  title: 'The Auto Scaling cycle',
                  emoji: '🔄',
                  diagram: {
                    type: 'cycle',
                    nodes: [
                      { label: 'Monitor', sublabel: 'CloudWatch metrics', emoji: '📊' },
                      { label: 'Compare', sublabel: 'vs target', emoji: '🎯' },
                      { label: 'Scale', sublabel: 'add/remove EC2', emoji: '⚙️' },
                      { label: 'Stabilize', sublabel: 'cooldown', emoji: '😌' },
                    ],
                  },
                },
                {
                  id: 'd2c1s2-4',
                  kind: 'concept',
                  title: 'The ELB family',
                  emoji: '🔀',
                  body:
                    "**ALB** (layer 7) routes HTTP/HTTPS by path, host, or header — great for web apps and microservices. **NLB** (layer 4) handles raw TCP/UDP at ultra-low latency and millions of requests. **GLB** deploys third-party network appliances (firewalls/IDS).",
                  terms: [
                    { term: 'ALB', definition: 'Application Load Balancer — layer 7, content-based routing.' },
                    { term: 'NLB', definition: 'Network Load Balancer — layer 4, extreme performance + static IP.' },
                    { term: 'GLB', definition: 'Gateway Load Balancer — deploys virtual network appliances.' },
                  ],
                },
                {
                  id: 'd2c1s2-5',
                  kind: 'compare',
                  title: 'ALB vs NLB',
                  emoji: '⚖️',
                  compare: {
                    headers: ['Aspect', 'ALB', 'NLB'],
                    rows: [
                      ['OSI layer', 'Layer 7 (HTTP)', 'Layer 4 (TCP/UDP)'],
                      ['Routing', 'Path / host / header', 'Connection-based'],
                      ['Performance', 'High', 'Ultra-low latency, millions rps'],
                      ['Static IP', 'No', 'Yes (Elastic IP)'],
                    ],
                  },
                },
                {
                  id: 'd2c1s2-6',
                  kind: 'tip',
                  title: 'Exam gotcha: which load balancer?',
                  emoji: '⚠️',
                  body:
                    "HTTP/HTTPS routing by URL path or hostname → **ALB**. Extreme performance, static IP, or non-HTTP protocols (gaming, IoT, TCP) → **NLB**. Deploying a third-party firewall fleet → **GLB**.",
                },
                {
                  id: 'd2c1s2-7',
                  kind: 'quiz',
                  title: 'Quick check',
                  question: 'You need to route requests to different microservices based on the URL path (/api vs /images). Which load balancer?',
                  options: [
                    { id: 'a', text: 'Network Load Balancer', correct: false },
                    { id: 'b', text: 'Application Load Balancer', correct: true },
                    { id: 'c', text: 'Gateway Load Balancer', correct: false },
                    { id: 'd', text: 'Classic Load Balancer only', correct: false },
                  ],
                  explanation:
                    "Path-based (layer 7) routing is an Application Load Balancer feature. NLB works at layer 4 and cannot inspect URL paths.",
                },
              ],
            },
            {
              id: 'd2c1s3',
              title: 'Route 53 Routing & Health Checks',
              summary: 'DNS that steers traffic intelligently.',
              cards: [
                {
                  id: 'd2c1s3-1',
                  kind: 'concept',
                  title: 'Route 53 routing policies',
                  emoji: '🧭',
                  body:
                    "**Route 53** is AWS's DNS service. Its routing policies decide which IP a query returns: **Simple**, **Weighted** (split %), **Latency** (fastest region), **Failover** (active/passive), **Geolocation**, **Geoproximity**, and **Multivalue**.",
                  terms: [
                    { term: 'Weighted', definition: 'Splits traffic by percentage — great for canary releases.' },
                    { term: 'Latency', definition: 'Routes users to the region with the lowest latency.' },
                    { term: 'Failover', definition: 'Sends traffic to a standby when the primary fails a health check.' },
                  ],
                },
                {
                  id: 'd2c1s3-2',
                  kind: 'analogy',
                  title: 'A smart receptionist ☎️',
                  emoji: '☎️',
                  body:
                    "Route 53 is a receptionist directing callers. **Latency** routing sends you to the nearest office. **Failover** reroutes you if the main office is closed. **Weighted** sends 10% of callers to a new branch to test it. Same number dialed, smart routing behind it.",
                },
                {
                  id: 'd2c1s3-3',
                  kind: 'concept',
                  title: 'Health checks',
                  emoji: '❤️‍🩹',
                  body:
                    "Route 53 **health checks** ping your endpoints and pull unhealthy targets out of DNS responses. Pair them with **Failover** routing so users are automatically sent to a healthy standby when the primary goes down.",
                },
                {
                  id: 'd2c1s3-4',
                  kind: 'tip',
                  title: 'Exam gotcha: pick the policy',
                  emoji: '⚠️',
                  body:
                    "Global users + lowest latency → **Latency** routing. Active/passive disaster recovery → **Failover**. Gradual rollout / A-B test → **Weighted**. Compliance by country → **Geolocation**.",
                },
                {
                  id: 'd2c1s3-5',
                  kind: 'example',
                  title: 'Global low-latency app',
                  emoji: '🌐',
                  body:
                    "You run the app in `us-east-1` and `ap-southeast-1`. Use **Latency-based routing** so a user in Singapore hits the Asia stack and a user in New York hits the US stack — each gets the snappiest response automatically.",
                },
                {
                  id: 'd2c1s3-6',
                  kind: 'quiz',
                  title: 'Quick check',
                  question: 'You want users automatically directed to a standby region only when the primary region becomes unhealthy. Which Route 53 policy?',
                  options: [
                    { id: 'a', text: 'Weighted routing', correct: false },
                    { id: 'b', text: 'Failover routing with health checks', correct: true },
                    { id: 'c', text: 'Simple routing', correct: false },
                    { id: 'd', text: 'Geolocation routing', correct: false },
                  ],
                  explanation:
                    "Failover routing combined with health checks gives active/passive DR: traffic shifts to the standby only when the primary fails its health check.",
                },
                {
                  id: 'd2c1s3-7',
                  kind: 'concept',
                  title: 'Alias records',
                  emoji: '🔗',
                  body:
                    "A Route 53 **alias record** points your domain (even the root, like `example.com`) directly at AWS resources such as an ALB, CloudFront, or S3 website — for free, and it updates automatically if the target's IP changes. Prefer alias over CNAME for AWS targets.",
                  terms: [
                    { term: 'Alias Record', definition: 'Route 53 record pointing a domain to an AWS resource, free and auto-updating.' },
                  ],
                },
              ],
            },
          ],
        },
        // ─── Chapter 2: Resilient Data & Storage ──────────────────────────
        {
          id: 'd2c2',
          title: 'Resilient Data & Storage',
          emoji: '🗄️',
          description: 'Durable databases and storage that survive failures.',
          sections: [
            {
              id: 'd2c2s1',
              title: 'RDS, Aurora & DynamoDB Resilience',
              summary: 'Database high availability and global reach.',
              cards: [
                {
                  id: 'd2c2s1-1',
                  kind: 'concept',
                  title: 'RDS Multi-AZ vs Read Replicas',
                  emoji: '🗃️',
                  body:
                    "**Multi-AZ** keeps a synchronous **standby** in another AZ for automatic failover — it is for **availability**, not performance. **Read Replicas** are asynchronous copies that serve **read** traffic to scale performance. They solve different problems.",
                  terms: [
                    { term: 'Multi-AZ', definition: 'Synchronous standby replica for automatic failover (HA).' },
                    { term: 'Read Replica', definition: 'Asynchronous read-only copy to offload read traffic (scaling).' },
                  ],
                },
                {
                  id: 'd2c2s1-2',
                  kind: 'analogy',
                  title: 'Understudy vs extra ticket booths 🎭',
                  emoji: '🎭',
                  body:
                    "**Multi-AZ** is an understudy ready to step on stage the instant the lead actor falls ill — availability. **Read Replicas** are extra ticket booths that share the crowd so no single window is overwhelmed — performance. You may want both.",
                },
                {
                  id: 'd2c2s1-3',
                  kind: 'compare',
                  title: 'Multi-AZ vs Read Replica',
                  emoji: '⚖️',
                  compare: {
                    headers: ['Aspect', 'Multi-AZ', 'Read Replica'],
                    rows: [
                      ['Purpose', 'High availability', 'Read scaling'],
                      ['Replication', 'Synchronous', 'Asynchronous'],
                      ['Failover', 'Automatic', 'Manual promotion'],
                      ['Reads from it?', 'No (standby)', 'Yes'],
                    ],
                  },
                },
                {
                  id: 'd2c2s1-4',
                  kind: 'concept',
                  title: 'Aurora & DynamoDB Global Tables',
                  emoji: '🌍',
                  body:
                    "**Aurora** is AWS's MySQL/PostgreSQL-compatible database with 6 copies of data across 3 AZs and fast failover. **DynamoDB Global Tables** replicate a NoSQL table across regions with multi-region read/write — ideal for low-latency global apps.",
                  terms: [
                    { term: 'Aurora', definition: 'High-performance managed DB, 6-way replication across 3 AZs.' },
                    { term: 'Global Tables', definition: 'Multi-region, multi-active DynamoDB replication.' },
                  ],
                },
                {
                  id: 'd2c2s1-5',
                  kind: 'tip',
                  title: 'Exam gotcha: HA is not scaling',
                  emoji: '⚠️',
                  body:
                    "If the question stresses **automatic failover / availability**, choose **Multi-AZ**. If it stresses **too many reads / read performance**, choose **Read Replicas**. Mixing these up is a classic trap.",
                },
                {
                  id: 'd2c2s1-6',
                  kind: 'quiz',
                  title: 'Quick check',
                  question: 'A reporting workload is overwhelming the primary RDS database with read queries. What is the best fix?',
                  options: [
                    { id: 'a', text: 'Enable Multi-AZ', correct: false },
                    { id: 'b', text: 'Add one or more Read Replicas and send reports to them', correct: true },
                    { id: 'c', text: 'Increase the backup retention period', correct: false },
                    { id: 'd', text: 'Move the database to a single larger AZ', correct: false },
                  ],
                  explanation:
                    "Read Replicas offload read-heavy workloads like reporting. Multi-AZ is for failover/availability and its standby cannot serve reads.",
                },
                {
                  id: 'd2c2s1-7',
                  kind: 'tip',
                  title: 'Exam gotcha: cross-region reads',
                  emoji: '⚠️',
                  body:
                    "RDS read replicas can live in **another region** to serve global readers and act as DR. DynamoDB uses **Global Tables** for multi-region. If a scenario needs disaster recovery *and* read scaling in another region, a cross-region read replica often fits.",
                },
              ],
            },
            {
              id: 'd2c2s2',
              title: 'S3 Durability, Storage Classes & Versioning',
              summary: 'Object storage that practically never loses data.',
              cards: [
                {
                  id: 'd2c2s2-1',
                  kind: 'concept',
                  title: 'S3 durability',
                  emoji: '🪣',
                  body:
                    "**S3** stores objects with **11 nines** (99.999999999%) of durability by replicating across multiple devices and AZs. **Versioning** keeps every version of an object, protecting against accidental overwrites and deletes. **Replication** copies objects to another bucket/region.",
                  terms: [
                    { term: 'Durability', definition: 'The chance data survives — S3 is 99.999999999% (11 nines).' },
                    { term: 'Versioning', definition: 'Keeps multiple versions of an object so you can recover old ones.' },
                    { term: 'Replication', definition: 'Auto-copies objects to another bucket (CRR across regions, SRR same).' },
                  ],
                },
                {
                  id: 'd2c2s2-2',
                  kind: 'analogy',
                  title: 'Photocopies in many vaults 🏦',
                  emoji: '🏦',
                  body:
                    "S3 quietly stores copies of your file in several vaults across the city. Lose one vault and the others have you covered (11 nines durability). Versioning is keeping every draft of a document, so an accidental shred can always be undone.",
                },
                {
                  id: 'd2c2s2-3',
                  kind: 'concept',
                  title: 'Storage classes',
                  emoji: '🧊',
                  body:
                    "**S3 Standard** for hot data. **Standard-IA / One Zone-IA** for infrequent access (cheaper storage, retrieval fee). **Glacier Instant / Flexible / Deep Archive** for archives, cheapest but slower to retrieve. **Intelligent-Tiering** auto-moves data to save money.",
                },
                {
                  id: 'd2c2s2-4',
                  kind: 'diagram',
                  title: 'S3 storage class trade-off',
                  emoji: '📉',
                  diagram: {
                    type: 'quadrant',
                    axes: { x: ['Rarely accessed', 'Frequently accessed'], y: ['Cheap', 'Expensive'] },
                    points: [
                      { label: 'Standard', x: 0.85, y: 0.85 },
                      { label: 'Standard-IA', x: 0.45, y: 0.6 },
                      { label: 'Glacier Flexible', x: 0.2, y: 0.3 },
                      { label: 'Deep Archive', x: 0.1, y: 0.12 },
                    ],
                  },
                },
                {
                  id: 'd2c2s2-5',
                  kind: 'tip',
                  title: 'Exam gotcha: One Zone-IA risk',
                  emoji: '⚠️',
                  body:
                    "**One Zone-IA** stores data in a single AZ — cheaper, but it is lost if that AZ is destroyed. Only choose it for **reproducible** data. For anything important and infrequently accessed, use **Standard-IA**.",
                },
                {
                  id: 'd2c2s2-6',
                  kind: 'example',
                  title: 'Protecting against deletes',
                  emoji: '🛟',
                  body:
                    "Users keep accidentally deleting files. Turn on **versioning** so deletes just add a delete marker — the old version is still recoverable. Add **MFA Delete** for extra protection on permanent removal of versions.",
                },
                {
                  id: 'd2c2s2-7',
                  kind: 'quiz',
                  title: 'Quick check',
                  question: 'A bucket holds easily regenerated thumbnails and cost is the priority. Which storage class is most appropriate?',
                  options: [
                    { id: 'a', text: 'S3 Standard', correct: false },
                    { id: 'b', text: 'S3 One Zone-IA', correct: true },
                    { id: 'c', text: 'S3 Glacier Deep Archive', correct: false },
                    { id: 'd', text: 'S3 Standard-IA', correct: false },
                  ],
                  explanation:
                    "One Zone-IA is cheapest for infrequently accessed data and acceptable here because thumbnails are reproducible if the single AZ is lost. Deep Archive would make access too slow.",
                },
              ],
            },
            {
              id: 'd2c2s3',
              title: 'Block & File Storage: EBS, EFS, Instance Store',
              summary: 'Choosing the right disk for the job.',
              cards: [
                {
                  id: 'd2c2s3-1',
                  kind: 'concept',
                  title: 'EBS vs EFS vs Instance Store',
                  emoji: '💽',
                  body:
                    "**EBS** is a network block volume for one EC2 (like a virtual hard drive), persists independently. **EFS** is a shared file system many EC2s mount at once (NFS), elastic and multi-AZ. **Instance Store** is fast local disk that is **wiped** when the instance stops.",
                  terms: [
                    { term: 'EBS', definition: 'Persistent block storage attached to a single instance (per AZ).' },
                    { term: 'EFS', definition: 'Shared, elastic NFS file system mountable by many instances.' },
                    { term: 'Instance Store', definition: 'Ephemeral local disk; data lost on stop/terminate.' },
                  ],
                },
                {
                  id: 'd2c2s3-2',
                  kind: 'analogy',
                  title: 'USB drive, shared drive, scratchpad 🗂️',
                  emoji: '🗂️',
                  body:
                    "**EBS** is a USB drive you plug into one laptop. **EFS** is a network shared drive the whole team opens at once. **Instance Store** is a sticky note on the desk — handy and fast, but tossed the moment you leave the room.",
                },
                {
                  id: 'd2c2s3-3',
                  kind: 'tip',
                  title: 'Exam gotcha: shared access = EFS',
                  emoji: '⚠️',
                  body:
                    "Many instances need to read/write the **same files at once** → **EFS** (Linux) or FSx (Windows/Lustre). A single instance needs a persistent disk → **EBS**. Need a temporary high-speed cache and do not care if it vanishes → **Instance Store**.",
                },
                {
                  id: 'd2c2s3-4',
                  kind: 'example',
                  title: 'Shared content for a web fleet',
                  emoji: '🌐',
                  body:
                    "A fleet of web servers behind an ALB must all serve the same uploaded media. **EFS** lets every instance mount one shared file system, so a file uploaded on server A is instantly visible on server B. EBS could not be shared across them.",
                },
                {
                  id: 'd2c2s3-5',
                  kind: 'quiz',
                  title: 'Quick check',
                  question: 'Twelve EC2 instances across multiple AZs must concurrently read and write the same set of files. Which storage fits best?',
                  options: [
                    { id: 'a', text: 'One EBS volume attached to all instances', correct: false },
                    { id: 'b', text: 'Amazon EFS', correct: true },
                    { id: 'c', text: 'Instance Store', correct: false },
                    { id: 'd', text: 'A separate EBS volume per instance', correct: false },
                  ],
                  explanation:
                    "EFS is a shared, elastic, multi-AZ NFS file system many instances can mount simultaneously. A standard EBS volume attaches to one instance in one AZ.",
                },
                {
                  id: 'd2c2s3-6',
                  kind: 'compare',
                  title: 'Block vs file vs ephemeral',
                  emoji: '⚖️',
                  compare: {
                    headers: ['Storage', 'Shared?', 'Persists?', 'Best for'],
                    rows: [
                      ['EBS', 'No (one EC2)', 'Yes', 'Boot + single-instance disks'],
                      ['EFS', 'Yes (many)', 'Yes', 'Shared Linux file system'],
                      ['Instance Store', 'No', 'No', 'Temp cache / scratch'],
                    ],
                  },
                },
                {
                  id: 'd2c2s3-7',
                  kind: 'concept',
                  title: 'FSx for Windows & Lustre',
                  emoji: '🪟',
                  body:
                    "Need shared files for **Windows** workloads? Use **FSx for Windows File Server** (SMB). Need a blazing-fast file system for **HPC/ML**? Use **FSx for Lustre**. EFS is Linux/NFS; FSx covers the cases EFS does not.",
                  terms: [
                    { term: 'FSx for Windows', definition: 'Managed SMB file shares for Windows workloads.' },
                    { term: 'FSx for Lustre', definition: 'High-performance file system for HPC and machine learning.' },
                  ],
                },
              ],
            },
          ],
        },
        // ─── Chapter 3: Decoupling & Disaster Recovery ────────────────────
        {
          id: 'd2c3',
          title: 'Decoupling & Disaster Recovery',
          emoji: '🔌',
          description: 'Loose coupling with queues and topics, plus DR strategy.',
          sections: [
            {
              id: 'd2c3s1',
              title: 'Decoupling with SQS & SNS',
              summary: 'Buffering work and broadcasting events.',
              cards: [
                {
                  id: 'd2c3s1-1',
                  kind: 'concept',
                  title: 'SQS vs SNS',
                  emoji: '📬',
                  body:
                    "**SQS** is a **queue** — messages wait until one consumer pulls and processes them (one-to-one, buffering). **SNS** is **pub/sub** — one message is pushed to many subscribers at once (one-to-many, fan-out). Both decouple components so they fail independently.",
                  terms: [
                    { term: 'SQS', definition: 'Managed message queue; consumers poll and process messages.' },
                    { term: 'SNS', definition: 'Pub/sub topic; pushes each message to many subscribers (fan-out).' },
                    { term: 'Decoupling', definition: 'Separating components so one can fail or scale without breaking others.' },
                  ],
                },
                {
                  id: 'd2c3s1-2',
                  kind: 'analogy',
                  title: 'To-do list vs megaphone 📢',
                  emoji: '📢',
                  body:
                    "**SQS** is a shared to-do list — workers grab one task each and check it off when done; tasks wait patiently if everyone is busy. **SNS** is a megaphone — shout once and everyone subscribed hears it immediately. Queue = buffer, topic = broadcast.",
                },
                {
                  id: 'd2c3s1-3',
                  kind: 'diagram',
                  title: 'Decoupled order pipeline',
                  emoji: '🔀',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'Web App', emoji: '🛒' },
                      { label: 'SQS Queue', sublabel: 'buffer', emoji: '📬' },
                      { label: 'Worker Fleet', sublabel: 'auto scales', emoji: '⚙️' },
                      { label: 'Database', emoji: '🗄️' },
                    ],
                  },
                },
                {
                  id: 'd2c3s1-4',
                  kind: 'tip',
                  title: 'Exam gotcha: smooth out spikes',
                  emoji: '⚠️',
                  body:
                    "If a producer floods consumers during traffic spikes, put an **SQS queue** between them as a buffer and let workers scale on queue depth. Need to notify **multiple** systems of one event? That is **SNS fan-out** (often SNS → many SQS queues).",
                },
                {
                  id: 'd2c3s1-5',
                  kind: 'example',
                  title: 'Fan-out pattern',
                  emoji: '🪭',
                  body:
                    "An order is placed. Publish one message to an **SNS** topic. It fans out to three **SQS** queues: one for billing, one for shipping, one for analytics. Each team's workers process at their own pace, fully decoupled. Classic and exam-loved.",
                },
                {
                  id: 'd2c3s1-6',
                  kind: 'quiz',
                  title: 'Quick check',
                  question: 'During flash sales the order service is overwhelmed by sudden request bursts. What decouples and absorbs the spikes?',
                  options: [
                    { id: 'a', text: 'Place an SQS queue between the front end and the workers', correct: true },
                    { id: 'b', text: 'Make the database larger', correct: false },
                    { id: 'c', text: 'Disable Auto Scaling', correct: false },
                    { id: 'd', text: 'Use a single SNS topic with no subscribers', correct: false },
                  ],
                  explanation:
                    "An SQS queue buffers bursts so workers process at a steady pace and can scale on queue depth — the textbook way to decouple and smooth spikes.",
                },
              ],
            },
            {
              id: 'd2c3s2',
              title: 'Backups & Disaster Recovery Strategies',
              summary: 'RTO, RPO, and the four DR patterns.',
              cards: [
                {
                  id: 'd2c3s2-1',
                  kind: 'concept',
                  title: 'RTO & RPO',
                  emoji: '⏱️',
                  body:
                    "**RTO** (Recovery Time Objective) = how long you can be **down**. **RPO** (Recovery Point Objective) = how much **data** you can afford to lose (time since last backup). Lower numbers mean faster recovery and less loss — but higher cost.",
                  terms: [
                    { term: 'RTO', definition: 'Maximum acceptable downtime before recovery.' },
                    { term: 'RPO', definition: 'Maximum acceptable data loss, measured in time.' },
                  ],
                },
                {
                  id: 'd2c3s2-2',
                  kind: 'analogy',
                  title: 'Saving your game 🎮',
                  emoji: '🎮',
                  body:
                    "**RPO** is how often you save your game — save every minute and you barely lose progress on a crash. **RTO** is how fast you can reload and get playing again. Frequent saves and instant reloads cost more effort — same trade-off in DR.",
                },
                {
                  id: 'd2c3s2-3',
                  kind: 'concept',
                  title: 'The four DR strategies',
                  emoji: '🚨',
                  body:
                    "From cheapest/slowest to priciest/fastest:\n\n- **Backup & Restore** — restore from backups after disaster.\n- **Pilot Light** — minimal core always running, scale up on demand.\n- **Warm Standby** — a scaled-down full copy running, ready to grow.\n- **Multi-Site Active/Active** — full duplicate handling live traffic.",
                },
                {
                  id: 'd2c3s2-4',
                  kind: 'diagram',
                  title: 'DR strategies: cost vs recovery speed',
                  emoji: '🧭',
                  diagram: {
                    type: 'quadrant',
                    axes: { x: ['Slow recovery', 'Fast recovery'], y: ['Cheap', 'Expensive'] },
                    points: [
                      { label: 'Backup & Restore', x: 0.15, y: 0.15 },
                      { label: 'Pilot Light', x: 0.4, y: 0.4 },
                      { label: 'Warm Standby', x: 0.65, y: 0.65 },
                      { label: 'Multi-Site', x: 0.9, y: 0.9 },
                    ],
                  },
                },
                {
                  id: 'd2c3s2-5',
                  kind: 'tip',
                  title: 'Exam gotcha: match RTO/RPO to cost',
                  emoji: '⚠️',
                  body:
                    "Near-zero RTO/RPO and budget is no object → **Multi-Site Active/Active**. Tight RTO but cost-conscious → **Warm Standby**. Hours of downtime acceptable and cheapest → **Backup & Restore**. Match the words 'lowest cost' or 'fastest recovery' to the right tier.",
                },
                {
                  id: 'd2c3s2-6',
                  kind: 'example',
                  title: 'Choosing pilot light',
                  emoji: '🔥',
                  body:
                    "A company can tolerate ~30 minutes downtime but wants low cost. **Pilot Light**: keep the database replicating to a second region and core AMIs ready, but no app servers running. On disaster, launch the servers from the AMIs and flip DNS. Cheap to keep, quick enough to recover.",
                },
                {
                  id: 'd2c3s2-7',
                  kind: 'quiz',
                  title: 'Quick check',
                  question: 'A business needs the lowest possible RTO and RPO for a critical app and budget is not a concern. Which DR strategy?',
                  options: [
                    { id: 'a', text: 'Backup & Restore', correct: false },
                    { id: 'b', text: 'Pilot Light', correct: false },
                    { id: 'c', text: 'Multi-Site Active/Active', correct: true },
                    { id: 'd', text: 'Warm Standby', correct: false },
                  ],
                  explanation:
                    "Multi-Site Active/Active runs a full duplicate serving live traffic in another region, giving the lowest RTO/RPO — at the highest cost, which the scenario allows.",
                },
              ],
            },
          ],
        },
      ],
    },
    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 3 — Design High-Performing Architectures (24%)
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd3',
      title: 'Design High-Performing Architectures',
      emoji: '⚡',
      weight: '24%',
      description: 'Picking compute, storage, databases, and caching that are fast and scalable.',
      chapters: [
        // ─── Chapter 1: High-Performing Compute ───────────────────────────
        {
          id: 'd3c1',
          title: 'High-Performing Compute',
          emoji: '🖥️',
          description: 'EC2, serverless, and containers — choosing the right engine.',
          sections: [
            {
              id: 'd3c1s1',
              title: 'EC2, Lambda & Fargate',
              summary: 'Servers, functions, and serverless containers.',
              cards: [
                {
                  id: 'd3c1s1-1',
                  kind: 'concept',
                  title: 'Compute spectrum',
                  emoji: '⚙️',
                  body:
                    "**EC2** = full virtual servers you manage. **Lambda** = run code in response to events with zero servers to manage, billed per ms. **Fargate** = run containers without managing the underlying servers. Less management as you move from EC2 → Fargate → Lambda.",
                  terms: [
                    { term: 'EC2', definition: 'Resizable virtual servers you fully control.' },
                    { term: 'Lambda', definition: 'Serverless functions; event-driven, pay per request/duration.' },
                    { term: 'Fargate', definition: 'Serverless compute engine for ECS/EKS containers.' },
                  ],
                },
                {
                  id: 'd3c1s1-2',
                  kind: 'analogy',
                  title: 'Own, lease, or ride 🚗',
                  emoji: '🚗',
                  body:
                    "**EC2** is owning a car — full control, you maintain it. **Fargate** is leasing — you drive but skip the upkeep. **Lambda** is grabbing a taxi — it shows up only when needed and you pay just for the ride. Pick by how much control vs convenience you want.",
                },
                {
                  id: 'd3c1s1-3',
                  kind: 'concept',
                  title: 'EC2 instance families',
                  emoji: '🧬',
                  body:
                    "EC2 families are tuned for workloads: **T/M** general purpose, **C** compute-optimized (CPU-heavy), **R/X** memory-optimized (in-memory DBs, caching), **I/D** storage-optimized (high IOPS), **P/G** accelerated (GPU/ML). Match the family to the bottleneck.",
                  terms: [
                    { term: 'Compute-optimized (C)', definition: 'High CPU for batch, gaming, media transcoding.' },
                    { term: 'Memory-optimized (R/X)', definition: 'Lots of RAM for in-memory databases and caches.' },
                  ],
                },
                {
                  id: 'd3c1s1-4',
                  kind: 'tip',
                  title: 'Exam gotcha: spiky = serverless',
                  emoji: '⚠️',
                  body:
                    "Short, event-driven, or unpredictable spiky workloads → **Lambda** (no idle cost). Steady, long-running, or needing OS-level control → **EC2**. Containers without server management → **Fargate**. Match workload shape to compute type.",
                },
                {
                  id: 'd3c1s1-5',
                  kind: 'example',
                  title: 'Image-resize on upload',
                  emoji: '🖼️',
                  body:
                    "Users upload images sporadically. Trigger a **Lambda** function on each S3 upload to resize the image. No servers idle between uploads, and it scales instantly to thousands of concurrent uploads. You pay only for the milliseconds it runs.",
                },
                {
                  id: 'd3c1s1-6',
                  kind: 'quiz',
                  title: 'Quick check',
                  question: 'A workload runs a few times an hour for a few seconds and has unpredictable spikes. Which compute minimizes cost and ops?',
                  options: [
                    { id: 'a', text: 'A fleet of always-on EC2 instances', correct: false },
                    { id: 'b', text: 'AWS Lambda', correct: true },
                    { id: 'c', text: 'A single large EC2 reserved instance', correct: false },
                    { id: 'd', text: 'A dedicated host', correct: false },
                  ],
                  explanation:
                    "Lambda is event-driven and bills only while running, so sporadic, spiky workloads incur no idle cost and scale automatically — ideal here.",
                },
              ],
            },
            {
              id: 'd3c1s2',
              title: 'Containers: ECS & EKS',
              summary: 'Orchestrating containers on AWS.',
              cards: [
                {
                  id: 'd3c1s2-1',
                  kind: 'concept',
                  title: 'ECS vs EKS',
                  emoji: '📦',
                  body:
                    "**ECS** is AWS's own container orchestrator — simpler, deeply integrated. **EKS** is managed **Kubernetes** — pick it when you want the Kubernetes ecosystem or portability. Both can run on **EC2** (you manage nodes) or **Fargate** (serverless).",
                  terms: [
                    { term: 'ECS', definition: 'Elastic Container Service — AWS-native container orchestration.' },
                    { term: 'EKS', definition: 'Elastic Kubernetes Service — managed Kubernetes control plane.' },
                  ],
                },
                {
                  id: 'd3c1s2-2',
                  kind: 'analogy',
                  title: 'Shipping containers 🚢',
                  emoji: '🚢',
                  body:
                    "Containers are like standardized shipping crates — your app packed identically anywhere. **ECS/EKS** are the port crane operators deciding which ship (server) each crate goes on. **Fargate** means you do not even own the cranes — the port handles it all.",
                },
                {
                  id: 'd3c1s2-3',
                  kind: 'tip',
                  title: 'Exam gotcha: Kubernetes keyword',
                  emoji: '⚠️',
                  body:
                    "See **Kubernetes** or a need for the Kubernetes API/ecosystem → **EKS**. Want the simplest AWS-native option with least overhead → **ECS**. Do not want to manage servers under either → run on **Fargate**.",
                },
                {
                  id: 'd3c1s2-4',
                  kind: 'compare',
                  title: 'ECS vs EKS',
                  emoji: '⚖️',
                  compare: {
                    headers: ['Aspect', 'ECS', 'EKS'],
                    rows: [
                      ['Engine', 'AWS-native', 'Kubernetes'],
                      ['Complexity', 'Lower', 'Higher'],
                      ['Portability', 'AWS-focused', 'Multi-cloud / on-prem'],
                      ['Launch types', 'EC2 or Fargate', 'EC2 or Fargate'],
                    ],
                  },
                },
                {
                  id: 'd3c1s2-5',
                  kind: 'quiz',
                  title: 'Quick check',
                  question: 'A team already runs Kubernetes on-prem and wants the same tooling and APIs on AWS with a managed control plane. Which service?',
                  options: [
                    { id: 'a', text: 'Amazon ECS', correct: false },
                    { id: 'b', text: 'Amazon EKS', correct: true },
                    { id: 'c', text: 'AWS Lambda', correct: false },
                    { id: 'd', text: 'Elastic Beanstalk', correct: false },
                  ],
                  explanation:
                    "EKS is managed Kubernetes, so existing Kubernetes tooling, manifests, and APIs carry over — ideal for teams standardizing on Kubernetes.",
                },
                {
                  id: 'd3c1s2-6',
                  kind: 'concept',
                  title: 'ECR & Elastic Beanstalk',
                  emoji: '🗃️',
                  body:
                    "**ECR** (Elastic Container Registry) stores your Docker images for ECS/EKS to pull. **Elastic Beanstalk** is a higher-level option: hand it your code and it provisions EC2, load balancing, and scaling for you — great when a team wants simple deployment without designing the stack.",
                  terms: [
                    { term: 'ECR', definition: 'Private registry for storing and pulling container images.' },
                    { term: 'Elastic Beanstalk', definition: 'PaaS that deploys and manages your app stack automatically.' },
                  ],
                },
                {
                  id: 'd3c1s2-7',
                  kind: 'tip',
                  title: 'Exam gotcha: least operational overhead',
                  emoji: '⚠️',
                  body:
                    "When a question stresses **least operational overhead** for running a standard web app, **Elastic Beanstalk** or fully serverless options often win — they hide the infrastructure. If it stresses **fine-grained control**, lean toward EC2/ECS.",
                },
              ],
            },
          ],
        },
        // ─── Chapter 2: Caching & Content Delivery ────────────────────────
        {
          id: 'd3c2',
          title: 'Caching & Content Delivery',
          emoji: '🚀',
          description: 'Serving data faster with caches, CDNs, and acceleration.',
          sections: [
            {
              id: 'd3c2s1',
              title: 'ElastiCache, DAX & CloudFront',
              summary: 'Caching layers from database to edge.',
              cards: [
                {
                  id: 'd3c2s1-1',
                  kind: 'concept',
                  title: 'Caching layers',
                  emoji: '⚡',
                  body:
                    "**ElastiCache** (Redis/Memcached) caches database query results in memory. **DAX** is a microsecond cache built specifically for **DynamoDB**. **CloudFront** is a global **CDN** caching content at edge locations near users. Each removes work from the origin.",
                  terms: [
                    { term: 'ElastiCache', definition: 'In-memory Redis/Memcached cache for DB results and sessions.' },
                    { term: 'DAX', definition: 'DynamoDB Accelerator — microsecond in-memory cache for DynamoDB.' },
                    { term: 'CloudFront', definition: 'Global CDN caching content at edge locations.' },
                  ],
                },
                {
                  id: 'd3c2s1-2',
                  kind: 'analogy',
                  title: 'A coffee thermos ☕',
                  emoji: '☕',
                  body:
                    "Caching is keeping coffee in a thermos on your desk instead of walking to the kitchen every time. **ElastiCache/DAX** keep hot data right next to the app. **CloudFront** stocks little thermoses in cities worldwide, so each user sips from the nearest one — fast and cheap.",
                },
                {
                  id: 'd3c2s1-3',
                  kind: 'diagram',
                  title: 'Edge-to-origin request flow',
                  emoji: '🛰️',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'User', emoji: '🧑' },
                      { label: 'Route 53', sublabel: 'DNS', emoji: '🧭' },
                      { label: 'CloudFront', sublabel: 'edge cache', emoji: '🛰️' },
                      { label: 'ALB', sublabel: 'load balance', emoji: '🔀' },
                      { label: 'EC2 / Origin', emoji: '🖥️' },
                    ],
                  },
                },
                {
                  id: 'd3c2s1-4',
                  kind: 'tip',
                  title: 'Exam gotcha: DAX is DynamoDB-only',
                  emoji: '⚠️',
                  body:
                    "Microsecond reads for **DynamoDB** → **DAX**. Caching relational DB queries or session state → **ElastiCache**. Speeding up **static/dynamic web content** for global users → **CloudFront**. Match the cache to the data source.",
                },
                {
                  id: 'd3c2s1-5',
                  kind: 'example',
                  title: 'Read-heavy product catalog',
                  emoji: '🛍️',
                  body:
                    "A product page hits RDS thousands of times for the same data. Put **ElastiCache** in front: the app checks the cache first and only queries RDS on a miss. Database load drops dramatically and pages load in milliseconds.",
                },
                {
                  id: 'd3c2s1-6',
                  kind: 'quiz',
                  title: 'Quick check',
                  question: 'A DynamoDB-backed app needs single-digit microsecond read latency for hot items. What should you add?',
                  options: [
                    { id: 'a', text: 'Amazon ElastiCache for Redis', correct: false },
                    { id: 'b', text: 'DynamoDB Accelerator (DAX)', correct: true },
                    { id: 'c', text: 'CloudFront', correct: false },
                    { id: 'd', text: 'A read replica', correct: false },
                  ],
                  explanation:
                    "DAX is a purpose-built, in-memory cache for DynamoDB delivering microsecond reads with no application rewrite. ElastiCache would require manual cache management.",
                },
                {
                  id: 'd3c2s1-7',
                  kind: 'concept',
                  title: 'Global Accelerator',
                  emoji: '🌐',
                  body:
                    "**Global Accelerator** uses the AWS global network and anycast IPs to route users to the nearest healthy endpoint over optimized paths. Unlike CloudFront (which caches content), it accelerates **non-HTTP** and dynamic traffic with static entry IPs and fast failover.",
                  terms: [
                    { term: 'Global Accelerator', definition: 'Routes traffic over the AWS backbone to the nearest healthy endpoint.' },
                  ],
                },
              ],
            },
          ],
        },
        // ─── Chapter 3: Performant Data & Databases ───────────────────────
        {
          id: 'd3c3',
          title: 'Performant Data & Databases',
          emoji: '🗃️',
          description: 'Choosing the right database and streaming engine.',
          sections: [
            {
              id: 'd3c3s1',
              title: 'Choosing the Right Database',
              summary: 'RDS vs DynamoDB vs Aurora vs Redshift vs ElastiCache.',
              cards: [
                {
                  id: 'd3c3s1-1',
                  kind: 'concept',
                  title: 'The database menu',
                  emoji: '🗂️',
                  body:
                    "**RDS/Aurora** = relational (SQL, joins, transactions). **DynamoDB** = NoSQL key-value, massive scale, single-digit ms. **Redshift** = data warehouse for analytics on huge datasets. **ElastiCache** = in-memory, sub-ms. Pick by data shape and access pattern.",
                  terms: [
                    { term: 'DynamoDB', definition: 'Serverless NoSQL key-value/document DB with seamless scale.' },
                    { term: 'Redshift', definition: 'Columnar data warehouse for OLAP analytics.' },
                    { term: 'RDS', definition: 'Managed relational databases (MySQL, PostgreSQL, etc.).' },
                  ],
                },
                {
                  id: 'd3c3s1-2',
                  kind: 'analogy',
                  title: 'Right tool, right job 🧰',
                  emoji: '🧰',
                  body:
                    "Databases are tools in a box. **RDS/Aurora** is a wrench for structured nuts and bolts (relationships). **DynamoDB** is a power drill for fast, huge-scale lookups. **Redshift** is a microscope for analyzing mountains of historical data. Using a wrench as a hammer hurts.",
                },
                {
                  id: 'd3c3s1-3',
                  kind: 'compare',
                  title: 'Database selection cheat sheet',
                  emoji: '⚖️',
                  compare: {
                    headers: ['Need', 'Choose'],
                    rows: [
                      ['SQL, joins, transactions', 'RDS / Aurora'],
                      ['Massive scale key-value, ms latency', 'DynamoDB'],
                      ['Analytics / BI over big data', 'Redshift'],
                      ['Microsecond in-memory reads', 'ElastiCache'],
                    ],
                  },
                },
                {
                  id: 'd3c3s1-4',
                  kind: 'tip',
                  title: 'Exam gotcha: keywords to DB',
                  emoji: '⚠️',
                  body:
                    "'Relational / SQL / joins' → **RDS/Aurora**. 'Millions of requests / serverless NoSQL / flexible schema' → **DynamoDB**. 'Data warehouse / complex analytics / petabytes' → **Redshift**. 'Leaderboard / session store / microsecond' → **ElastiCache**.",
                },
                {
                  id: 'd3c3s1-5',
                  kind: 'example',
                  title: 'Gaming leaderboard',
                  emoji: '🎮',
                  body:
                    "A game needs a real-time leaderboard updated constantly with microsecond reads. **ElastiCache for Redis** with sorted sets is the textbook fit — instant ranking without hammering a relational database.",
                },
                {
                  id: 'd3c3s1-6',
                  kind: 'quiz',
                  title: 'Quick check',
                  question: 'A team needs to run complex analytical queries across petabytes of historical sales data for BI dashboards. Which service?',
                  options: [
                    { id: 'a', text: 'Amazon DynamoDB', correct: false },
                    { id: 'b', text: 'Amazon Redshift', correct: true },
                    { id: 'c', text: 'Amazon ElastiCache', correct: false },
                    { id: 'd', text: 'Amazon RDS MySQL', correct: false },
                  ],
                  explanation:
                    "Redshift is a columnar data warehouse purpose-built for OLAP analytics over very large datasets — the right tool for BI over petabytes.",
                },
                {
                  id: 'd3c3s1-7',
                  kind: 'quiz',
                  title: 'Quick check',
                  question: 'A startup needs a serverless database for a flexible-schema app expecting unpredictable, massive scale with millisecond reads. Which fits best?',
                  options: [
                    { id: 'a', text: 'Amazon Redshift', correct: false },
                    { id: 'b', text: 'Amazon DynamoDB', correct: true },
                    { id: 'c', text: 'Amazon RDS PostgreSQL', correct: false },
                    { id: 'd', text: 'Amazon ElastiCache', correct: false },
                  ],
                  explanation:
                    "DynamoDB is serverless, scales seamlessly to massive traffic, supports flexible key-value/document schemas, and delivers single-digit millisecond latency — exactly the requirement.",
                },
              ],
            },
            {
              id: 'd3c3s2',
              title: 'Streaming & Scaling Patterns',
              summary: 'Kinesis, partitioning, and read scaling.',
              cards: [
                {
                  id: 'd3c3s2-1',
                  kind: 'concept',
                  title: 'Kinesis for real-time streams',
                  emoji: '🌊',
                  body:
                    "**Kinesis Data Streams** ingests huge volumes of real-time data (clickstreams, IoT, logs) for processing within milliseconds. Data is split across **shards** for throughput. **Firehose** is the simpler, fully-managed cousin that loads streams into S3/Redshift.",
                  terms: [
                    { term: 'Kinesis Data Streams', definition: 'Real-time streaming ingestion split across shards.' },
                    { term: 'Shard', definition: 'A throughput unit in a Kinesis stream.' },
                    { term: 'Firehose', definition: 'Managed delivery of streaming data to S3, Redshift, and more.' },
                  ],
                },
                {
                  id: 'd3c3s2-2',
                  kind: 'analogy',
                  title: 'Multiple checkout lanes 🛒',
                  emoji: '🛒',
                  body:
                    "**Partitioning/shards** are like opening more checkout lanes. One lane (shard) handles only so many shoppers; add lanes and the crowd flows faster. A good **partition key** spreads shoppers evenly so no single lane backs up — avoiding hot partitions.",
                },
                {
                  id: 'd3c3s2-3',
                  kind: 'tip',
                  title: 'Exam gotcha: hot partitions',
                  emoji: '⚠️',
                  body:
                    "DynamoDB performance tanking? Look for a **poor partition key** causing a **hot partition** — choose a high-cardinality key so traffic spreads evenly. For streaming throughput limits, **add shards** in Kinesis.",
                },
                {
                  id: 'd3c3s2-4',
                  kind: 'example',
                  title: 'Real-time clickstream',
                  emoji: '🖱️',
                  body:
                    "A site captures millions of clicks per minute for live analytics. Ingest with **Kinesis Data Streams**, process with Lambda or Kinesis Analytics, and use **Firehose** to dump raw events into S3 for later. Scales by adding shards.",
                },
                {
                  id: 'd3c3s2-5',
                  kind: 'quiz',
                  title: 'Quick check',
                  question: 'A DynamoDB table sees throttling because most requests hit a single partition key value. What is the best fix?',
                  options: [
                    { id: 'a', text: 'Switch to a higher-cardinality partition key to spread load', correct: true },
                    { id: 'b', text: 'Add a Multi-AZ standby', correct: false },
                    { id: 'c', text: 'Enable versioning', correct: false },
                    { id: 'd', text: 'Move the table to a single AZ', correct: false },
                  ],
                  explanation:
                    "Throttling from a hot partition is solved by choosing a partition key with high cardinality so traffic is distributed evenly across partitions.",
                },
                {
                  id: 'd3c3s2-6',
                  kind: 'compare',
                  title: 'Kinesis vs SQS',
                  emoji: '⚖️',
                  compare: {
                    headers: ['Aspect', 'Kinesis Data Streams', 'SQS'],
                    rows: [
                      ['Model', 'Real-time stream', 'Message queue'],
                      ['Replay', 'Yes (retention window)', 'No (deleted after read)'],
                      ['Consumers', 'Many read same data', 'One consumer per message'],
                      ['Ordering', 'Per shard', 'FIFO queues only'],
                    ],
                  },
                },
                {
                  id: 'd3c3s2-7',
                  kind: 'concept',
                  title: 'DynamoDB capacity modes',
                  emoji: '⚙️',
                  body:
                    "DynamoDB offers **on-demand** capacity (pay per request, auto-scales instantly — great for unpredictable traffic) and **provisioned** capacity (set read/write units, optionally with auto scaling — cheaper for steady, predictable load). Choose by how spiky the workload is.",
                  terms: [
                    { term: 'On-demand capacity', definition: 'Pay-per-request DynamoDB mode for unpredictable traffic.' },
                    { term: 'Provisioned capacity', definition: 'Reserve throughput units — cheaper for predictable load.' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 4 — Design Cost-Optimized Architectures (20%)
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd4',
      title: 'Design Cost-Optimized Architectures',
      emoji: '💰',
      weight: '20%',
      description: 'Paying only for what you need with the right pricing models and tools.',
      chapters: [
        // ─── Chapter 1: Cost-Effective Compute ────────────────────────────
        {
          id: 'd4c1',
          title: 'Cost-Effective Compute',
          emoji: '🧮',
          description: 'EC2 pricing models and serverless for savings.',
          sections: [
            {
              id: 'd4c1s1',
              title: 'EC2 Pricing Models',
              summary: 'On-Demand, Reserved, Savings Plans, and Spot.',
              cards: [
                {
                  id: 'd4c1s1-1',
                  kind: 'concept',
                  title: 'Four ways to pay for EC2',
                  emoji: '💵',
                  body:
                    "**On-Demand** — pay per second, no commitment, most flexible/expensive. **Reserved Instances** — commit 1 or 3 years for big discounts on steady workloads. **Savings Plans** — flexible spend commitment for discounts. **Spot** — up to 90% off spare capacity, but can be reclaimed anytime.",
                  terms: [
                    { term: 'On-Demand', definition: 'Pay-as-you-go, no commitment — flexible but priciest.' },
                    { term: 'Reserved Instance', definition: '1 or 3-year commitment for big discounts on steady use.' },
                    { term: 'Spot', definition: 'Deeply discounted spare capacity that can be interrupted.' },
                  ],
                },
                {
                  id: 'd4c1s1-2',
                  kind: 'analogy',
                  title: 'Hotel booking styles 🏨',
                  emoji: '🏨',
                  body:
                    "**On-Demand** is walking up and paying the rack rate any night. **Reserved** is a yearly contract for a discounted room you will definitely use. **Spot** is a last-minute deal on an unsold room — dirt cheap, but they might give it away if a full-price guest appears.",
                },
                {
                  id: 'd4c1s1-3',
                  kind: 'diagram',
                  title: 'Pricing: commitment vs cost',
                  emoji: '🧭',
                  diagram: {
                    type: 'quadrant',
                    axes: { x: ['No commitment', 'Long commitment'], y: ['Cheap', 'Expensive'] },
                    points: [
                      { label: 'Spot', x: 0.15, y: 0.12 },
                      { label: 'On-Demand', x: 0.2, y: 0.9 },
                      { label: 'Savings Plans', x: 0.7, y: 0.4 },
                      { label: 'Reserved', x: 0.85, y: 0.3 },
                    ],
                  },
                },
                {
                  id: 'd4c1s1-4',
                  kind: 'tip',
                  title: 'Exam gotcha: Spot = interruptible',
                  emoji: '⚠️',
                  body:
                    "**Spot** is perfect for fault-tolerant, flexible work (batch, big-data, CI) that can survive interruption — never for a stateful database that must stay up. Steady 24/7 baseline → **Reserved/Savings Plans**. Unpredictable short bursts → **On-Demand**.",
                },
                {
                  id: 'd4c1s1-5',
                  kind: 'example',
                  title: 'Batch rendering farm',
                  emoji: '🎬',
                  body:
                    "An animation studio renders frames in huge nightly batches that can pause and resume. Use a **Spot** fleet for up to 90% savings — if instances are reclaimed, the job just continues on new ones later. Massive cost win for interruptible work.",
                },
                {
                  id: 'd4c1s1-6',
                  kind: 'quiz',
                  title: 'Quick check',
                  question: 'A fault-tolerant batch job runs at night, can be interrupted, and resumed later. Which pricing model is cheapest?',
                  options: [
                    { id: 'a', text: 'On-Demand Instances', correct: false },
                    { id: 'b', text: 'Spot Instances', correct: true },
                    { id: 'c', text: 'Reserved Instances', correct: false },
                    { id: 'd', text: 'Dedicated Hosts', correct: false },
                  ],
                  explanation:
                    "Spot Instances offer up to 90% savings for interruptible, fault-tolerant workloads. Batch jobs that can resume are the classic Spot use case.",
                },
                {
                  id: 'd4c1s1-7',
                  kind: 'quiz',
                  title: 'Quick check',
                  question: 'A database server must run 24/7 for the next three years at a predictable baseline. What gives the best price?',
                  options: [
                    { id: 'a', text: 'Spot Instances', correct: false },
                    { id: 'b', text: 'On-Demand Instances', correct: false },
                    { id: 'c', text: 'Reserved Instances or a Savings Plan', correct: true },
                    { id: 'd', text: 'Per-second On-Demand only', correct: false },
                  ],
                  explanation:
                    "Steady, always-on workloads with a known baseline benefit most from a 1 or 3-year Reserved Instance or Savings Plan commitment. Spot risks interruption for a database.",
                },
              ],
            },
            {
              id: 'd4c1s2',
              title: 'Serverless & Right-Sizing',
              summary: 'Cutting idle cost with serverless and matching size to need.',
              cards: [
                {
                  id: 'd4c1s2-1',
                  kind: 'concept',
                  title: 'Serverless saves on idle',
                  emoji: '🪶',
                  body:
                    "Serverless services (**Lambda**, **Fargate**, **DynamoDB on-demand**, **Aurora Serverless**) charge only when used. For spiky or low-traffic workloads, you avoid paying for idle servers entirely — often the cheapest design for variable demand.",
                  terms: [
                    { term: 'Right-sizing', definition: 'Matching instance type/size to actual usage to avoid waste.' },
                    { term: 'Aurora Serverless', definition: 'Aurora that auto-scales capacity and bills per use.' },
                  ],
                },
                {
                  id: 'd4c1s2-2',
                  kind: 'analogy',
                  title: 'Pay per ride, not per car 🚕',
                  emoji: '🚕',
                  body:
                    "Owning a car (always-on EC2) costs even while parked. Serverless is paying per taxi ride — when no one is travelling, you pay nothing. For occasional trips, the taxi wins big on cost.",
                },
                {
                  id: 'd4c1s2-3',
                  kind: 'concept',
                  title: 'Right-sizing with Compute Optimizer',
                  emoji: '📐',
                  body:
                    "Over-provisioned instances quietly waste money. **AWS Compute Optimizer** analyzes usage and recommends better instance types/sizes. Combine with **Auto Scaling** so you never run more capacity than current demand requires.",
                  terms: [
                    { term: 'Compute Optimizer', definition: 'ML-driven recommendations to right-size EC2, EBS, Lambda.' },
                  ],
                },
                {
                  id: 'd4c1s2-4',
                  kind: 'tip',
                  title: 'Exam gotcha: idle cost',
                  emoji: '⚠️',
                  body:
                    "If a workload is **low or unpredictable** and the question stresses **cost** with **no servers to manage**, lean toward **serverless** (Lambda/Fargate/DynamoDB on-demand). For chronically under-used EC2, the answer is often **right-size** via Compute Optimizer.",
                },
                {
                  id: 'd4c1s2-5',
                  kind: 'quiz',
                  title: 'Quick check',
                  question: 'An internal tool gets occasional, unpredictable traffic and the team wants minimal cost and no server management. What fits best?',
                  options: [
                    { id: 'a', text: 'A fleet of Reserved EC2 instances', correct: false },
                    { id: 'b', text: 'AWS Lambda behind API Gateway', correct: true },
                    { id: 'c', text: 'A large always-on EC2 instance', correct: false },
                    { id: 'd', text: 'Dedicated Hosts', correct: false },
                  ],
                  explanation:
                    "Serverless Lambda charges only per request, so occasional unpredictable traffic incurs near-zero idle cost and no servers to manage.",
                },
                {
                  id: 'd4c1s2-6',
                  kind: 'concept',
                  title: 'Savings Plans flavors',
                  emoji: '🏷️',
                  body:
                    "**Compute Savings Plans** are the most flexible — discounts apply across EC2, Fargate, and Lambda regardless of family or region. **EC2 Instance Savings Plans** give bigger discounts but lock you to a family in a region. Trade flexibility for a little extra saving.",
                  terms: [
                    { term: 'Compute Savings Plan', definition: 'Flexible commitment covering EC2, Fargate, and Lambda.' },
                  ],
                },
                {
                  id: 'd4c1s2-7',
                  kind: 'example',
                  title: 'Stopping waste at night',
                  emoji: '🌙',
                  body:
                    "Dev and test environments sit idle every night and weekend. Schedule them to **stop** off-hours (e.g. with Instance Scheduler) — you pay nothing for stopped EC2 compute. An easy, big cost cut with zero architecture change.",
                },
              ],
            },
          ],
        },
        // ─── Chapter 2: Storage, Data Transfer & Cost Tools ───────────────
        {
          id: 'd4c2',
          title: 'Storage, Data Transfer & Cost Governance',
          emoji: '📊',
          description: 'Lifecycle policies, transfer costs, and the cost-management toolset.',
          sections: [
            {
              id: 'd4c2s1',
              title: 'S3 Lifecycle & Intelligent-Tiering',
              summary: 'Automatically moving data to cheaper tiers.',
              cards: [
                {
                  id: 'd4c2s1-1',
                  kind: 'concept',
                  title: 'Lifecycle policies',
                  emoji: '♻️',
                  body:
                    "An **S3 Lifecycle policy** automatically transitions objects to cheaper classes (e.g. Standard → IA after 30 days → Glacier after 90) and can expire/delete old data. Set it once and savings happen on autopilot.",
                  terms: [
                    { term: 'Lifecycle Policy', definition: 'Rules that transition or expire S3 objects over time.' },
                    { term: 'Intelligent-Tiering', definition: 'Auto-moves objects between tiers based on access, no retrieval fees.' },
                  ],
                },
                {
                  id: 'd4c2s1-2',
                  kind: 'analogy',
                  title: 'Cleaning out the garage 🧹',
                  emoji: '🧹',
                  body:
                    "Lifecycle policies are like a tidy housemate: things you use daily stay on the shelf (Standard), monthly items go to the closet (IA), and yearly keepsakes go to the basement (Glacier). Old junk gets tossed (expiration). All automatic.",
                },
                {
                  id: 'd4c2s1-3',
                  kind: 'tip',
                  title: 'Exam gotcha: unknown access pattern',
                  emoji: '⚠️',
                  body:
                    "Predictable access pattern → **Lifecycle rules** to specific classes (cheapest, you choose). **Unknown or changing** access pattern → **S3 Intelligent-Tiering**, which auto-optimizes with no retrieval charges and a tiny monitoring fee.",
                },
                {
                  id: 'd4c2s1-4',
                  kind: 'example',
                  title: 'Compliance log retention',
                  emoji: '📁',
                  body:
                    "Logs must be kept 7 years but are rarely read after a month. Lifecycle rule: keep in Standard 30 days, transition to **Glacier Deep Archive**, then **expire** at 7 years. Cheapest long-term retention with zero manual effort.",
                },
                {
                  id: 'd4c2s1-5',
                  kind: 'quiz',
                  title: 'Quick check',
                  question: 'A bucket has objects with unpredictable, changing access patterns and the team wants automatic cost savings without retrieval fees. What fits?',
                  options: [
                    { id: 'a', text: 'S3 Glacier Deep Archive', correct: false },
                    { id: 'b', text: 'S3 Intelligent-Tiering', correct: true },
                    { id: 'c', text: 'S3 One Zone-IA', correct: false },
                    { id: 'd', text: 'A manual monthly migration script', correct: false },
                  ],
                  explanation:
                    "Intelligent-Tiering automatically moves objects between access tiers based on usage with no retrieval fees — ideal when access patterns are unknown or shifting.",
                },
                {
                  id: 'd4c2s1-6',
                  kind: 'diagram',
                  title: 'A typical lifecycle journey',
                  emoji: '➡️',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'Standard', sublabel: 'day 0', emoji: '🔥' },
                      { label: 'Standard-IA', sublabel: 'day 30', emoji: '🧊' },
                      { label: 'Glacier', sublabel: 'day 90', emoji: '🏔️' },
                      { label: 'Expire', sublabel: 'day 2555', emoji: '🗑️' },
                    ],
                  },
                },
                {
                  id: 'd4c2s1-7',
                  kind: 'tip',
                  title: 'Exam gotcha: retrieval times',
                  emoji: '⚠️',
                  body:
                    "Glacier tiers trade speed for price. **Glacier Instant** retrieves in milliseconds; **Glacier Flexible** in minutes to hours; **Deep Archive** in up to 12 hours. If a scenario needs occasional fast access to archives, do not pick Deep Archive.",
                },
              ],
            },
            {
              id: 'd4c2s2',
              title: 'Data Transfer Costs & Cost Tools',
              summary: 'Understanding egress charges and managing spend.',
              cards: [
                {
                  id: 'd4c2s2-1',
                  kind: 'concept',
                  title: 'Data transfer pricing',
                  emoji: '📡',
                  body:
                    "Inbound data is usually **free**, but **outbound** (egress) to the internet and **cross-region/cross-AZ** transfer costs money. Keep chatty components in the **same AZ**, use **VPC endpoints** to avoid NAT/egress fees, and serve content via **CloudFront** to cut origin egress.",
                  terms: [
                    { term: 'Egress', definition: 'Data leaving AWS to the internet — typically billed.' },
                    { term: 'Cross-AZ transfer', definition: 'Data moving between AZs, which incurs a per-GB charge.' },
                  ],
                },
                {
                  id: 'd4c2s2-2',
                  kind: 'analogy',
                  title: 'Free to enter, pay to leave 🅿️',
                  emoji: '🅿️',
                  body:
                    "AWS data transfer is like a parking garage: driving in is free, but you pay on the way out. Keep your errands close (same AZ) and use shortcuts (VPC endpoints, CloudFront) so you are not constantly paying exit tolls.",
                },
                {
                  id: 'd4c2s2-3',
                  kind: 'concept',
                  title: 'The cost-management toolkit',
                  emoji: '🧰',
                  body:
                    "**Cost Explorer** visualizes and forecasts spend. **AWS Budgets** alerts you when costs cross thresholds. **Trusted Advisor** flags idle resources and savings opportunities. **Compute Optimizer** recommends right-sizing. Together they keep the bill honest.",
                  terms: [
                    { term: 'Cost Explorer', definition: 'Visualize, analyze, and forecast AWS spending over time.' },
                    { term: 'AWS Budgets', definition: 'Set spend/usage thresholds and get alerts when exceeded.' },
                    { term: 'Trusted Advisor', definition: 'Checks for cost, security, performance, and fault-tolerance wins.' },
                  ],
                },
                {
                  id: 'd4c2s2-4',
                  kind: 'compare',
                  title: 'Cost tools at a glance',
                  emoji: '⚖️',
                  compare: {
                    headers: ['Tool', 'Use it to'],
                    rows: [
                      ['Cost Explorer', 'Analyze and forecast past/future spend'],
                      ['AWS Budgets', 'Get alerts when spend hits a threshold'],
                      ['Trusted Advisor', 'Find idle resources and savings checks'],
                      ['Compute Optimizer', 'Right-size EC2/EBS/Lambda'],
                    ],
                  },
                },
                {
                  id: 'd4c2s2-5',
                  kind: 'tip',
                  title: 'Exam gotcha: alert vs analyze',
                  emoji: '⚠️',
                  body:
                    "Want a **proactive alert** when spend exceeds an amount → **AWS Budgets**. Want to **analyze/forecast** where money went → **Cost Explorer**. Want **recommendations** to cut waste → **Trusted Advisor / Compute Optimizer**.",
                },
                {
                  id: 'd4c2s2-6',
                  kind: 'example',
                  title: 'Avoiding NAT egress fees',
                  emoji: '🔌',
                  body:
                    "Private instances pulling large files from **S3** through a NAT Gateway rack up data-processing charges. Add an **S3 Gateway VPC Endpoint** — traffic goes directly to S3, privately and **for free**, bypassing the NAT entirely. Tidy cost win.",
                },
                {
                  id: 'd4c2s2-7',
                  kind: 'quiz',
                  title: 'Quick check',
                  question: 'A finance team wants an email alert the moment monthly AWS spend is forecast to exceed $10,000. Which tool?',
                  options: [
                    { id: 'a', text: 'Cost Explorer', correct: false },
                    { id: 'b', text: 'AWS Budgets', correct: true },
                    { id: 'c', text: 'Trusted Advisor', correct: false },
                    { id: 'd', text: 'CloudTrail', correct: false },
                  ],
                  explanation:
                    "AWS Budgets sends proactive alerts when actual or forecast spend crosses a threshold. Cost Explorer analyzes spend but does not send threshold alerts.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
