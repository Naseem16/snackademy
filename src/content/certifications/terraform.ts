import type { Certification } from '../types'

export const terraform: Certification = {
  id: 'terraform',
  kind: 'path',
  code: 'Terraform',
  title: 'Terraform: Infrastructure as Code',
  shortTitle: 'Terraform',
  provider: 'HashiCorp',
  level: 'Intermediate',
  gradient: 'from-violet-500 to-purple-600',
  icon: '🏗️',
  tagline: 'Provision infra with code',
  description:
    "A hands-on, self-paced path through Terraform — HashiCorp's tool for building, changing, and versioning infrastructure with code. You will learn what Infrastructure as Code means, the HCL language, state management, reusable modules, and the workflows real teams use. Full of relatable analogies, real HCL snippets, and a progressive project that grows with every domain.",
  examFacts: [
    { label: 'Level', value: 'Beginner → Advanced' },
    { label: 'Format', value: 'Self-paced cards' },
    { label: 'Topics', value: '5 domains' },
    { label: 'Tool', value: 'Terraform (HCL)' },
    { label: 'Aligns with', value: 'Terraform Associate' },
  ],
  version: '1.0',
  lastUpdated: '2025-01-15',
  available: true,
  domains: [
    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 1 — IaC & Terraform Basics
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd1',
      title: 'IaC & Terraform Basics',
      emoji: '🌍',
      description:
        "What Infrastructure as Code is and why it matters, declarative vs imperative thinking, providers, the core Terraform workflow, and your first .tf files.",
      project: {
        title: "Provision Your First Resource",
        brief:
          "Create a folder with a single `main.tf`. Configure the AWS provider (or use the `local` provider if you have no cloud account) and declare one resource — an S3 bucket, or a `local_file` written to disk.\n\nRun the full loop: `terraform init`, then `terraform plan`, then `terraform apply`. Confirm the resource exists, then `terraform destroy` to clean up. You have now done the whole lifecycle end to end.",
        stretch:
          "Add a second `local_file` and re-run `plan` to see Terraform report exactly one resource to add. Notice how it only changes what is needed.",
      },
      chapters: [
        {
          id: 'd1c1',
          title: 'What Is Infrastructure as Code?',
          emoji: '📜',
          description: "The idea behind IaC and why writing infrastructure as code beats clicking around a console.",
          sections: [
            {
              id: 'd1c1s1',
              title: 'The Big Idea',
              summary: "Managing servers, networks, and services with versioned code instead of manual clicks.",
              cards: [
                {
                  id: 'd1c1s1-1',
                  kind: 'concept',
                  title: 'Infrastructure as Code',
                  emoji: '🌍',
                  body:
                    "**Infrastructure as Code (IaC)** means describing your servers, databases, networks, and cloud resources in text files instead of setting them up by hand.\n\nYou write *what you want*, commit it to git, and a tool builds it for you — the same way every time. No more forgetting a checkbox in a web console.",
                  terms: [
                    { term: 'IaC', definition: 'Managing infrastructure through machine-readable definition files rather than manual configuration.' },
                    { term: 'Provisioning', definition: 'The act of creating and configuring infrastructure resources.' },
                    { term: 'Terraform', definition: "HashiCorp's open-source IaC tool that provisions resources across many providers." },
                  ],
                },
                {
                  id: 'd1c1s1-2',
                  kind: 'analogy',
                  title: 'IKEA Instructions for Infra',
                  emoji: '🪑',
                  body:
                    "Clicking around a cloud console is like building furniture from memory — it works once, but nobody can repeat it exactly.\n\nTerraform is the **IKEA instruction booklet**: a written, step-free recipe anyone can follow to build the identical wardrobe every time. Hand the booklet to a teammate and they get the same result.",
                },
                {
                  id: 'd1c1s1-3',
                  kind: 'concept',
                  title: 'Why Teams Love It',
                  emoji: '❤️',
                  body:
                    "IaC gives you superpowers:\n\n- **Repeatable** — spin up an identical environment in seconds.\n- **Versioned** — infra lives in git, so you can review, diff, and roll back.\n- **Reviewable** — changes go through pull requests like any code.\n- **Documented** — the config *is* the documentation of what exists.",
                },
                {
                  id: 'd1c1s1-4',
                  kind: 'tip',
                  title: "Don't Click, Commit",
                  emoji: '🖱️',
                  body:
                    "Once you manage a resource with Terraform, stop editing it in the console. Manual changes create **drift** — the real world no longer matches your code — and Terraform may try to undo your clicks on the next apply. Change everything through the code.",
                },
                {
                  id: 'd1c1s1-5',
                  kind: 'diagram',
                  title: 'From Code to Cloud',
                  emoji: '☁️',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'Write .tf', emoji: '✍️' },
                      { label: 'Terraform', emoji: '🏗️' },
                      { label: 'Provider API', emoji: '🔌' },
                      { label: 'Real Infra', emoji: '☁️' },
                    ],
                  },
                },
                {
                  id: 'd1c1s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  question: "What is the main benefit of Infrastructure as Code?",
                  options: [
                    { id: 'a', text: "It makes cloud resources run faster", correct: false },
                    { id: 'b', text: "Infrastructure becomes repeatable, versioned, and reviewable", correct: true },
                    { id: 'c', text: "It removes the need for any cloud provider", correct: false },
                    { id: 'd', text: "It only works with AWS", correct: false },
                  ],
                  explanation:
                    "IaC turns infrastructure into code you can version in git, review in pull requests, and recreate identically. It does not speed up the resources themselves or replace the provider.",
                },
              ],
            },
            {
              id: 'd1c1s2',
              title: 'Declarative vs Imperative',
              summary: "You describe the destination; Terraform figures out the route.",
              cards: [
                {
                  id: 'd1c1s2-1',
                  kind: 'concept',
                  title: 'Declare the End State',
                  emoji: '🎯',
                  body:
                    "Terraform is **declarative**: you describe the *end state* you want (\"one bucket named my-logs\") and Terraform works out the steps to get there.\n\nAn **imperative** approach instead lists the exact commands to run, in order. With declarative code, you never write \"create if missing, else update\" — Terraform decides.",
                  terms: [
                    { term: 'Declarative', definition: 'You specify the desired end state; the tool determines how to reach it.' },
                    { term: 'Imperative', definition: 'You specify the exact sequence of commands to execute.' },
                    { term: 'Desired state', definition: 'The configuration you have declared in your .tf files.' },
                  ],
                },
                {
                  id: 'd1c1s2-2',
                  kind: 'analogy',
                  title: 'GPS vs Turn-by-Turn',
                  emoji: '🗺️',
                  body:
                    "Imperative is reading turn-by-turn directions aloud: \"go 200m, turn left, then right.\" If you start somewhere else, the directions break.\n\nDeclarative is typing the **destination into a GPS**. From wherever you are now, it computes the route. Terraform is the GPS — you give the address, it plans the path.",
                },
                {
                  id: 'd1c1s2-3',
                  kind: 'compare',
                  title: 'Two Mindsets',
                  emoji: '⚖️',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Declarative', emoji: '🎯', items: ['Describe end state', 'Tool plans the steps', 'Idempotent by design', 'Terraform, Kubernetes'] },
                      { title: 'Imperative', emoji: '📋', items: ['List exact commands', 'You plan the steps', 'Re-runs may double up', 'Bash scripts, manual clicks'] },
                    ],
                  },
                },
                {
                  id: 'd1c1s2-4',
                  kind: 'concept',
                  title: 'Idempotent Applies',
                  emoji: '🔁',
                  body:
                    "Because Terraform compares desired state to reality, running `apply` twice is safe. If nothing changed, it does nothing. This property is called **idempotency** — the same command yields the same result no matter how often you run it.",
                  terms: [
                    { term: 'Idempotency', definition: 'Applying the same configuration repeatedly produces the same end state.' },
                  ],
                },
                {
                  id: 'd1c1s2-5',
                  kind: 'tip',
                  title: 'Stop Thinking in Steps',
                  emoji: '🧠',
                  body:
                    "New Terraform users often write config as if it were a script. Resist it. Just declare what should exist. Terraform reads all your resources together and figures out ordering and changes on its own.",
                },
                {
                  id: 'd1c1s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  question: "Terraform is declarative. What does that mean?",
                  options: [
                    { id: 'a', text: "You write the exact commands to run in order", correct: false },
                    { id: 'b', text: "You describe the desired end state and Terraform figures out how to reach it", correct: true },
                    { id: 'c', text: "It only runs once and then stops working", correct: false },
                    { id: 'd', text: "It requires a script for every change", correct: false },
                  ],
                  explanation:
                    "Declarative means you state the desired end result. Terraform compares it to reality and computes the steps. Listing exact commands in order is the imperative style.",
                },
              ],
            },
          ],
        },
        {
          id: 'd1c2',
          title: 'Providers & Setup',
          emoji: '🔌',
          description: "How Terraform talks to clouds through providers, and how to configure the terraform and provider blocks.",
          sections: [
            {
              id: 'd1c2s1',
              title: 'Meet Providers',
              summary: "Plugins that let Terraform manage AWS, Azure, GitHub, and hundreds more.",
              cards: [
                {
                  id: 'd1c2s1-1',
                  kind: 'concept',
                  title: 'What Is a Provider?',
                  emoji: '🔌',
                  body:
                    "A **provider** is a plugin that teaches Terraform how to talk to a specific platform — AWS, Azure, Google Cloud, GitHub, Cloudflare, even your local filesystem.\n\nEach provider exposes **resources** (things you can create) and **data sources** (things you can read). You pick providers in the `terraform` block.",
                  terms: [
                    { term: 'Provider', definition: 'A plugin that lets Terraform manage a specific platform or service.' },
                    { term: 'Registry', definition: 'HashiCorp’s public catalog of providers and modules.' },
                    { term: 'Resource', definition: 'A single piece of infrastructure a provider can manage.' },
                  ],
                },
                {
                  id: 'd1c2s1-2',
                  kind: 'analogy',
                  title: 'Universal Remote',
                  emoji: '📺',
                  body:
                    "Terraform is a universal remote. On its own it does nothing — but load the right **provider** and it can control your TV (AWS), your soundbar (Azure), or your lights (Cloudflare). Each provider is a code chip that speaks that device's language.",
                },
                {
                  id: 'd1c2s1-3',
                  kind: 'example',
                  title: 'Declaring the AWS Provider',
                  emoji: '📄',
                  body:
                    "The `terraform` block pins versions; the `provider` block configures credentials and region:\n\n`terraform {`\n`  required_providers {`\n`    aws = { source = \"hashicorp/aws\", version = \"~> 5.0\" }`\n`  }`\n`}`\n\n`provider \"aws\" {`\n`  region = \"us-east-1\"`\n`}`\n\nThe `~> 5.0` constraint allows 5.x updates but not 6.0.",
                },
                {
                  id: 'd1c2s1-4',
                  kind: 'tip',
                  title: 'Never Hardcode Keys',
                  emoji: '🔐',
                  body:
                    "Do not put AWS access keys in the provider block. Use environment variables (`AWS_ACCESS_KEY_ID`), a shared credentials file, or an IAM role. Hardcoded secrets end up committed to git — a classic and costly mistake.",
                },
                {
                  id: 'd1c2s1-5',
                  kind: 'diagram',
                  title: 'Core to Provider to Cloud',
                  emoji: '🧩',
                  diagram: {
                    type: 'stack',
                    nodes: [
                      { label: 'Your Config', sublabel: '.tf files', emoji: '📄' },
                      { label: 'Terraform Core', sublabel: 'planning engine', emoji: '⚙️' },
                      { label: 'Provider Plugin', sublabel: 'aws, azurerm...', emoji: '🔌' },
                      { label: 'Cloud API', sublabel: 'real resources', emoji: '☁️' },
                    ],
                  },
                },
                {
                  id: 'd1c2s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  question: "What does a Terraform provider do?",
                  options: [
                    { id: 'a', text: "Stores your infrastructure state", correct: false },
                    { id: 'b', text: "Acts as a plugin that lets Terraform manage a specific platform like AWS", correct: true },
                    { id: 'c', text: "Runs your CI/CD pipeline", correct: false },
                    { id: 'd', text: "Replaces the need for credentials", correct: false },
                  ],
                  explanation:
                    "A provider is a plugin translating Terraform operations into API calls for a specific platform. State is a separate concept, and providers still need credentials.",
                },
              ],
            },
            {
              id: 'd1c2s2',
              title: 'Anatomy of a .tf File',
              summary: "The terraform block, provider block, and your first resource.",
              cards: [
                {
                  id: 'd1c2s2-1',
                  kind: 'concept',
                  title: 'Files & Blocks',
                  emoji: '📁',
                  body:
                    "Terraform reads every `.tf` file in a directory and merges them. There is no required filename, but conventions help:\n\n- `main.tf` — core resources\n- `variables.tf` — inputs\n- `outputs.tf` — outputs\n\nInside them you write **blocks** like `resource`, `provider`, and `variable`.",
                  terms: [
                    { term: 'Block', definition: 'A named container of configuration, e.g. resource, provider, variable.' },
                    { term: 'Argument', definition: 'A name = value setting inside a block.' },
                    { term: 'Configuration', definition: 'The full set of .tf files in a working directory.' },
                  ],
                },
                {
                  id: 'd1c2s2-2',
                  kind: 'example',
                  title: 'Your First Resource',
                  emoji: '🪣',
                  body:
                    "A `resource` block has a type, a local name, and arguments:\n\n`resource \"aws_s3_bucket\" \"logs\" {`\n`  bucket = \"my-app-logs-2025\"`\n`  tags = {`\n`    Environment = \"dev\"`\n`  }`\n`}`\n\nHere `aws_s3_bucket` is the type and `logs` is the name you refer to it by — `aws_s3_bucket.logs`.",
                },
                {
                  id: 'd1c2s2-3',
                  kind: 'example',
                  title: 'No Cloud? Use local_file',
                  emoji: '🗒️',
                  body:
                    "You can learn the whole workflow with zero cloud account using the `local` provider:\n\n`resource \"local_file\" \"hello\" {`\n`  filename = \"${path.module}/hello.txt\"`\n`  content  = \"Hello from Terraform!\"`\n`}`\n\n`apply` writes the file; `destroy` deletes it. Perfect for practice.",
                },
                {
                  id: 'd1c2s2-4',
                  kind: 'tip',
                  title: 'Resource Addresses',
                  emoji: '📍',
                  body:
                    "Every resource has a unique **address**: `<type>.<name>`, like `aws_s3_bucket.logs`. You use this address to reference it elsewhere and in `terraform state` commands. Two resources can share a type but never the same name in one module.",
                },
                {
                  id: 'd1c2s2-5',
                  kind: 'diagram',
                  title: 'Resource Block Shape',
                  emoji: '🧱',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'resource', emoji: '🔑' },
                      { label: '"aws_s3_bucket"', sublabel: 'type', emoji: '🏷️' },
                      { label: '"logs"', sublabel: 'local name', emoji: '📛' },
                      { label: '{ arguments }', emoji: '⚙️' },
                    ],
                  },
                },
                {
                  id: 'd1c2s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  question: "In `resource \"aws_s3_bucket\" \"logs\" {}`, what is `logs`?",
                  options: [
                    { id: 'a', text: "The resource type", correct: false },
                    { id: 'b', text: "The local name used to reference the resource", correct: true },
                    { id: 'c', text: "The actual bucket name in AWS", correct: false },
                    { id: 'd', text: "A provider", correct: false },
                  ],
                  explanation:
                    "`aws_s3_bucket` is the type and `logs` is the local name, giving the address `aws_s3_bucket.logs`. The real bucket name comes from the `bucket` argument.",
                },
              ],
            },
          ],
        },
        {
          id: 'd1c3',
          title: 'The Core Workflow',
          emoji: '🔄',
          description: "The write → init → plan → apply → destroy loop that you will run every day.",
          sections: [
            {
              id: 'd1c3s1',
              title: 'Init, Plan, Apply',
              summary: "The three commands at the heart of Terraform.",
              cards: [
                {
                  id: 'd1c3s1-1',
                  kind: 'concept',
                  title: 'The Four Verbs',
                  emoji: '🔄',
                  body:
                    "After you **write** config, the loop is:\n\n- `terraform init` — download providers, set up the working directory.\n- `terraform plan` — preview what will change.\n- `terraform apply` — make the changes real.\n- `terraform destroy` — tear it all down.",
                  terms: [
                    { term: 'init', definition: 'Prepares a working directory by installing providers and modules.' },
                    { term: 'plan', definition: 'Shows the actions Terraform will take without making changes.' },
                    { term: 'apply', definition: 'Executes the planned changes against real infrastructure.' },
                  ],
                },
                {
                  id: 'd1c3s1-2',
                  kind: 'analogy',
                  title: 'Cook, Taste, Serve',
                  emoji: '🍳',
                  body:
                    "Think of a kitchen: `init` gathers your ingredients and tools. `plan` is tasting the sauce before serving — a safe preview. `apply` plates the dish for the customer. `destroy` clears the table.\n\nAlways taste (`plan`) before you serve (`apply`).",
                },
                {
                  id: 'd1c3s1-3',
                  kind: 'example',
                  title: 'A Full Loop',
                  emoji: '⌨️',
                  body:
                    "A typical first session in the terminal:\n\n`terraform init`\n`terraform plan`\n`terraform apply`\n\nTerraform prints a summary like `Plan: 1 to add, 0 to change, 0 to destroy` and asks you to type `yes` before applying.",
                },
                {
                  id: 'd1c3s1-4',
                  kind: 'diagram',
                  title: 'The Core Workflow',
                  emoji: '🔁',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'Write', emoji: '✍️' },
                      { label: 'Init', emoji: '⚙️' },
                      { label: 'Plan', emoji: '🔍' },
                      { label: 'Apply', emoji: '🚀' },
                      { label: 'Destroy', emoji: '💥' },
                    ],
                  },
                },
                {
                  id: 'd1c3s1-5',
                  kind: 'tip',
                  title: 'Run init After Adding Providers',
                  emoji: '⚠️',
                  body:
                    "You must re-run `terraform init` whenever you add a new provider or module, or change version constraints. If you see \"provider not installed\" errors, `init` is almost always the fix.",
                },
                {
                  id: 'd1c3s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  question: "Which command previews changes WITHOUT modifying real infrastructure?",
                  options: [
                    { id: 'a', text: "terraform apply", correct: false },
                    { id: 'b', text: "terraform plan", correct: true },
                    { id: 'c', text: "terraform destroy", correct: false },
                    { id: 'd', text: "terraform init", correct: false },
                  ],
                  explanation:
                    "`terraform plan` shows the actions Terraform intends to take, safely and without applying them. `apply` and `destroy` change real infrastructure.",
                },
              ],
            },
            {
              id: 'd1c3s2',
              title: 'Reading a Plan',
              summary: "The + - ~ symbols and what a safe apply looks like.",
              cards: [
                {
                  id: 'd1c3s2-1',
                  kind: 'concept',
                  title: 'Plan Symbols',
                  emoji: '➕',
                  body:
                    "A plan uses symbols to show intent:\n\n- `+` create a new resource\n- `-` destroy a resource\n- `~` update in place\n- `-/+` replace (destroy then recreate)\n\nAlways scan for `-` and `-/+` on important resources before typing `yes`.",
                  terms: [
                    { term: 'In-place update', definition: 'Changing an existing resource without recreating it (shown as ~).' },
                    { term: 'Replacement', definition: 'Destroying and recreating a resource, shown as -/+.' },
                  ],
                },
                {
                  id: 'd1c3s2-2',
                  kind: 'example',
                  title: 'Saving a Plan',
                  emoji: '💾',
                  body:
                    "In automation you save a plan then apply exactly it:\n\n`terraform plan -out=tfplan`\n`terraform apply tfplan`\n\nApplying a saved plan skips the confirmation prompt and guarantees you apply precisely what you reviewed — nothing sneaks in between.",
                },
                {
                  id: 'd1c3s2-3',
                  kind: 'tip',
                  title: 'Beware Replacement',
                  emoji: '🚨',
                  body:
                    "A `-/+` replace on a database or storage bucket can mean **data loss**. Changing certain arguments (like a bucket name) forces recreation. Read plans carefully, and use `lifecycle` rules (later domain) to protect critical resources.",
                },
                {
                  id: 'd1c3s2-4',
                  kind: 'diagram',
                  title: 'Plan then Apply',
                  emoji: '🔍',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'plan', sublabel: 'preview diff', emoji: '🔍' },
                      { label: 'review', sublabel: 'check + - ~', emoji: '👀' },
                      { label: 'apply', sublabel: 'confirm yes', emoji: '✅' },
                    ],
                  },
                },
                {
                  id: 'd1c3s2-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  question: "In a plan, what does `-/+` mean?",
                  options: [
                    { id: 'a', text: "The resource will be updated in place", correct: false },
                    { id: 'b', text: "The resource will be destroyed and recreated (replaced)", correct: true },
                    { id: 'c', text: "The resource will be created only", correct: false },
                    { id: 'd', text: "Nothing will happen", correct: false },
                  ],
                  explanation:
                    "`-/+` signals a replacement: Terraform destroys the existing resource then creates a new one. This can cause data loss, so review it carefully.",
                },
              ],
            },
          ],
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 2 — Configuration Language (HCL)
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd2',
      title: 'Configuration Language (HCL)',
      emoji: '📝',
      description:
        "The HashiCorp Configuration Language: variables, outputs, locals, data sources, expressions, functions, count and for_each, conditionals, dynamic blocks, and meta-arguments.",
      project: {
        title: "Parameterize & Expand",
        brief:
          "Take your D1 config and make it flexible. Add a `variables.tf` with an input variable for the resource name and environment. Create a `terraform.tfvars` to set values. Add an `output` that prints the created resource's id or path.\n\nThen use `for_each` over a set of names to create several resources at once from one block.",
        buildsOn: "Builds on D1's single hardcoded resource by extracting values into variables, outputs, and a for_each loop.",
        stretch:
          "Add a `local` value that composes a name prefix (like `${var.env}-${var.project}`) and use it across all resources. Add a conditional so a resource only appears when `var.env == \"prod\"`.",
      },
      chapters: [
        {
          id: 'd2c1',
          title: 'Variables, Outputs & Locals',
          emoji: '🎛️',
          description: "Making configuration reusable with inputs, computed values, and reported outputs.",
          sections: [
            {
              id: 'd2c1s1',
              title: 'Input Variables',
              summary: "Parameters that let one config serve many situations.",
              cards: [
                {
                  id: 'd2c1s1-1',
                  kind: 'concept',
                  title: 'Variables Are Inputs',
                  emoji: '🎛️',
                  body:
                    "An **input variable** is a parameter for your configuration. Declare it with a `variable` block, give it a `type` and optional `default`, then reference it as `var.name`.\n\nThis lets one config produce a dev bucket or a prod bucket just by changing an input.",
                  terms: [
                    { term: 'Input variable', definition: 'A named parameter that customizes a configuration, referenced as var.name.' },
                    { term: 'Type constraint', definition: 'The expected type of a variable, e.g. string, number, list, map.' },
                    { term: 'Default', definition: 'A fallback value used when no value is supplied.' },
                  ],
                },
                {
                  id: 'd2c1s1-2',
                  kind: 'example',
                  title: 'Declaring a Variable',
                  emoji: '📥',
                  body:
                    "`variable \"env\" {`\n`  type        = string`\n`  description = \"Deployment environment\"`\n`  default     = \"dev\"`\n`}`\n\nUse it: `bucket = \"logs-${var.env}\"`. If no value is given, it falls back to `dev`.",
                },
                {
                  id: 'd2c1s1-3',
                  kind: 'concept',
                  title: 'Setting Values with .tfvars',
                  emoji: '🗂️',
                  body:
                    "You supply variable values in several ways (highest priority last):\n\n- `default` in the block\n- a `terraform.tfvars` file\n- `-var` flags on the command line\n- environment variables like `TF_VAR_env`\n\nTerraform auto-loads any file named `terraform.tfvars` or `*.auto.tfvars`.",
                  terms: [
                    { term: '.tfvars file', definition: 'A file holding variable assignments, auto-loaded if named terraform.tfvars.' },
                    { term: 'TF_VAR_', definition: 'Prefix for environment variables that set Terraform inputs.' },
                  ],
                },
                {
                  id: 'd2c1s1-4',
                  kind: 'example',
                  title: 'A terraform.tfvars',
                  emoji: '📝',
                  body:
                    "Keep values separate from logic:\n\n`env         = \"prod\"`\n`region      = \"eu-west-1\"`\n`bucket_name = \"acme-prod-logs\"`\n\nThen: `terraform apply` picks these up automatically. For a custom file: `terraform apply -var-file=prod.tfvars`.",
                },
                {
                  id: 'd2c1s1-5',
                  kind: 'tip',
                  title: 'Validate Your Inputs',
                  emoji: '✅',
                  body:
                    "Add a `validation` block to catch bad input early:\n\n`validation {`\n`  condition     = contains([\"dev\",\"prod\"], var.env)`\n`  error_message = \"env must be dev or prod.\"`\n`}`\n\nThis fails fast with a clear message instead of a confusing downstream error.",
                },
                {
                  id: 'd2c1s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  question: "Which file does Terraform load automatically for variable values?",
                  options: [
                    { id: 'a', text: "values.json", correct: false },
                    { id: 'b', text: "terraform.tfvars", correct: true },
                    { id: 'c', text: "config.yaml", correct: false },
                    { id: 'd', text: "settings.tf", correct: false },
                  ],
                  explanation:
                    "Terraform automatically loads `terraform.tfvars` and any `*.auto.tfvars` file. Other files must be passed explicitly with `-var-file`.",
                },
              ],
            },
            {
              id: 'd2c1s2',
              title: 'Outputs & Locals',
              summary: "Reporting values back and naming reusable expressions.",
              cards: [
                {
                  id: 'd2c1s2-1',
                  kind: 'concept',
                  title: 'Outputs Report Results',
                  emoji: '📤',
                  body:
                    "An **output** exposes a value after apply — a bucket ARN, an IP address, a URL. They print in the terminal and can be consumed by other configs or modules.\n\n`output \"bucket_arn\" {`\n`  value = aws_s3_bucket.logs.arn`\n`}`",
                  terms: [
                    { term: 'Output value', definition: 'A named value a configuration exposes after apply.' },
                    { term: 'sensitive', definition: 'An output flag that hides the value from CLI display.' },
                  ],
                },
                {
                  id: 'd2c1s2-2',
                  kind: 'concept',
                  title: 'Locals Name Expressions',
                  emoji: '🧮',
                  body:
                    "A **local value** names an expression so you can reuse it and stay DRY. Unlike variables, locals are computed inside the config and cannot be set from outside.\n\n`locals {`\n`  name_prefix = \"${var.env}-${var.project}\"`\n`}`\n\nReference as `local.name_prefix`.",
                  terms: [
                    { term: 'Local value', definition: 'A named expression computed within a module, referenced as local.name.' },
                    { term: 'DRY', definition: "Don’t Repeat Yourself — avoid duplicating the same expression." },
                  ],
                },
                {
                  id: 'd2c1s2-3',
                  kind: 'example',
                  title: 'Locals in Action',
                  emoji: '🔧',
                  body:
                    "`locals {`\n`  common_tags = {`\n`    Project = var.project`\n`    Env     = var.env`\n`  }`\n`}`\n\nThen apply everywhere: `tags = local.common_tags`. Change the tags in one place and every resource updates.",
                },
                {
                  id: 'd2c1s2-4',
                  kind: 'compare',
                  title: 'Variable vs Local',
                  emoji: '⚖️',
                  compare: {
                    headers: ['Aspect', 'Variable', 'Local'],
                    rows: [
                      ['Set from outside?', 'Yes (tfvars, CLI)', 'No, internal only'],
                      ['Purpose', 'Parameterize input', 'Name a reused expression'],
                      ['Referenced as', 'var.name', 'local.name'],
                      ['Can use other vars?', 'No', 'Yes'],
                    ],
                  },
                },
                {
                  id: 'd2c1s2-5',
                  kind: 'tip',
                  title: 'Mark Secrets Sensitive',
                  emoji: '🕶️',
                  body:
                    "Add `sensitive = true` to an output holding a password or token so it does not print in the console. Note this only hides CLI display — the value is still stored in state, which you must also protect.",
                },
                {
                  id: 'd2c1s2-6',
                  kind: 'diagram',
                  title: 'Inputs, Logic, Outputs',
                  emoji: '🔀',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'Variables', sublabel: 'inputs', emoji: '📥' },
                      { label: 'Locals + Resources', sublabel: 'logic', emoji: '⚙️' },
                      { label: 'Outputs', sublabel: 'results', emoji: '📤' },
                    ],
                  },
                },
                {
                  id: 'd2c1s2-7',
                  kind: 'quiz',
                  title: 'Quick Check',
                  question: "What is the key difference between a variable and a local?",
                  options: [
                    { id: 'a', text: "Locals can be set from outside; variables cannot", correct: false },
                    { id: 'b', text: "Variables can be set from outside; locals are computed internally", correct: true },
                    { id: 'c', text: "They are identical", correct: false },
                    { id: 'd', text: "Locals only hold numbers", correct: false },
                  ],
                  explanation:
                    "Input variables accept values from tfvars, CLI, or env. Locals are named expressions computed inside the config and cannot be set externally.",
                },
              ],
            },
          ],
        },
        {
          id: 'd2c2',
          title: 'Expressions & Functions',
          emoji: '🧠',
          description: "Interpolation, built-in functions, conditionals, and data sources that read the outside world.",
          sections: [
            {
              id: 'd2c2s1',
              title: 'Interpolation & Functions',
              summary: "Weaving values into strings and transforming them with built-in functions.",
              cards: [
                {
                  id: 'd2c2s1-1',
                  kind: 'concept',
                  title: 'Interpolation',
                  emoji: '🧵',
                  body:
                    "**Interpolation** embeds an expression inside a string using `${ }`. For example `\"logs-${var.env}\"` becomes `\"logs-prod\"`.\n\nOutside strings you write expressions directly — no `${ }` needed. Use interpolation only when weaving a value into text.",
                  terms: [
                    { term: 'Interpolation', definition: 'Embedding an expression inside a string with ${ } syntax.' },
                    { term: 'Expression', definition: 'Any value or computation, e.g. a reference, function call, or math.' },
                  ],
                },
                {
                  id: 'd2c2s1-2',
                  kind: 'example',
                  title: 'Built-in Functions',
                  emoji: '🔨',
                  body:
                    "Terraform ships hundreds of functions:\n\n`upper(\"dev\")` gives `DEV`\n`length([\"a\",\"b\"])` gives `2`\n`join(\"-\", [\"a\",\"b\"])` gives `a-b`\n`lookup(var.map, \"key\", \"fallback\")`\n\nTest them interactively with `terraform console`.",
                },
                {
                  id: 'd2c2s1-3',
                  kind: 'concept',
                  title: 'Conditionals',
                  emoji: '🔀',
                  body:
                    "The conditional expression is `condition ? true_value : false_value`.\n\n`instance_type = var.env == \"prod\" ? \"t3.large\" : \"t3.micro\"`\n\nProd gets a bigger box; everything else gets the small one. Great for cost-aware environments.",
                  terms: [
                    { term: 'Conditional expression', definition: 'A ternary of the form cond ? a : b that picks one of two values.' },
                  ],
                },
                {
                  id: 'd2c2s1-4',
                  kind: 'tip',
                  title: 'Use terraform console',
                  emoji: '🧪',
                  body:
                    "Stuck on an expression? Run `terraform console` and type it live. It evaluates against your current variables and state, so you can test `join`, `lookup`, or a tricky `for` expression before wiring it in.",
                },
                {
                  id: 'd2c2s1-5',
                  kind: 'diagram',
                  title: 'Expression Toolkit',
                  emoji: '🧰',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'String', emoji: '🔤', items: ['upper / lower', 'join / split', 'format', 'replace'] },
                      { title: 'Collection', emoji: '📚', items: ['length', 'lookup', 'merge', 'flatten'] },
                      { title: 'Numeric / Logic', emoji: '🔢', items: ['max / min', 'ceil / floor', 'coalesce', 'ternary ? :'] },
                    ],
                  },
                },
                {
                  id: 'd2c2s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  question: "How do you embed a variable inside a string in HCL?",
                  options: [
                    { id: 'a', text: "{{ var.env }}", correct: false },
                    { id: 'b', text: "${var.env}", correct: true },
                    { id: 'c', text: "%var.env%", correct: false },
                    { id: 'd', text: "<var.env>", correct: false },
                  ],
                  explanation:
                    "String interpolation uses `${ }`, so `\"logs-${var.env}\"` weaves the variable into the string. Outside of strings you reference `var.env` directly.",
                },
              ],
            },
            {
              id: 'd2c2s2',
              title: 'Data Sources',
              summary: "Reading existing infrastructure and information into your config.",
              cards: [
                {
                  id: 'd2c2s2-1',
                  kind: 'concept',
                  title: 'What Is a Data Source?',
                  emoji: '🔎',
                  body:
                    "A **data source** reads information rather than creating it. Use it to look up an existing AMI, VPC, or account id and feed that into your resources.\n\nData sources are declared with `data` blocks and referenced as `data.<type>.<name>`.",
                  terms: [
                    { term: 'Data source', definition: 'A read-only lookup of existing information, declared with a data block.' },
                    { term: 'Read-only', definition: 'Data sources never create or modify infrastructure.' },
                  ],
                },
                {
                  id: 'd2c2s2-2',
                  kind: 'analogy',
                  title: 'Looking Something Up',
                  emoji: '📖',
                  body:
                    "A resource is *writing* an entry in a notebook. A data source is *reading* one that already exists. You are not changing anything — just fetching a fact (the latest AMI id, your account number) to use in a decision.",
                },
                {
                  id: 'd2c2s2-3',
                  kind: 'example',
                  title: 'Latest Ubuntu AMI',
                  emoji: '🐧',
                  body:
                    "`data \"aws_ami\" \"ubuntu\" {`\n`  most_recent = true`\n`  owners      = [\"099720109477\"]`\n`  filter {`\n`    name   = \"name\"`\n`    values = [\"ubuntu/images/*22.04*\"]`\n`  }`\n`}`\n\nUse it: `ami = data.aws_ami.ubuntu.id`.",
                },
                {
                  id: 'd2c2s2-4',
                  kind: 'tip',
                  title: 'Data Sources Refresh Each Plan',
                  emoji: '🔄',
                  body:
                    "Data sources are re-read on every `plan`. If the looked-up value changes (a newer AMI appears), dependent resources may show a change. Pin values when you need stability, or accept that \"latest\" means it can move.",
                },
                {
                  id: 'd2c2s2-5',
                  kind: 'diagram',
                  title: 'Data vs Resource',
                  emoji: '⚖️',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'data (read)', emoji: '🔎', items: ['Looks up existing info', 'Never creates', 'data.type.name', 'Refreshes each plan'] },
                      { title: 'resource (write)', emoji: '🛠️', items: ['Creates & manages', 'Tracked in state', 'type.name', 'Changes real infra'] },
                    ],
                  },
                },
                {
                  id: 'd2c2s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  question: "What does a data source do?",
                  options: [
                    { id: 'a', text: "Creates a new resource", correct: false },
                    { id: 'b', text: "Reads existing information without modifying anything", correct: true },
                    { id: 'c', text: "Stores Terraform state", correct: false },
                    { id: 'd', text: "Destroys resources", correct: false },
                  ],
                  explanation:
                    "A data source is a read-only lookup. It fetches information about existing infrastructure so you can use it, but never creates or changes anything.",
                },
              ],
            },
          ],
        },
        {
          id: 'd2c3',
          title: 'Loops & Meta-Arguments',
          emoji: '🔁',
          description: "Creating many resources at once with count and for_each, dynamic blocks, and ordering with depends_on.",
          sections: [
            {
              id: 'd2c3s1',
              title: 'count vs for_each',
              summary: "Two ways to make multiple copies of a resource.",
              cards: [
                {
                  id: 'd2c3s1-1',
                  kind: 'concept',
                  title: 'count: Make N Copies',
                  emoji: '🔢',
                  body:
                    "The `count` meta-argument creates a numbered list of a resource. Reference the index with `count.index`.\n\n`resource \"aws_instance\" \"web\" {`\n`  count         = 3`\n`  instance_type = \"t3.micro\"`\n`}`\n\nThis makes `web[0]`, `web[1]`, `web[2]`.",
                  terms: [
                    { term: 'count', definition: 'A meta-argument creating a numbered set of resource instances.' },
                    { term: 'count.index', definition: 'The zero-based index of the current instance in a count.' },
                  ],
                },
                {
                  id: 'd2c3s1-2',
                  kind: 'concept',
                  title: 'for_each: Key Each One',
                  emoji: '🗝️',
                  body:
                    "`for_each` iterates over a map or set, giving each instance a stable **key** instead of a fragile index. Reference `each.key` and `each.value`.\n\n`for_each = toset([\"logs\",\"assets\",\"backups\"])`\n`bucket   = \"acme-${each.key}\"`",
                  terms: [
                    { term: 'for_each', definition: 'A meta-argument that creates one instance per item in a map or set, keyed by item.' },
                    { term: 'each.key / each.value', definition: 'The current key and value inside a for_each block.' },
                  ],
                },
                {
                  id: 'd2c3s1-3',
                  kind: 'tip',
                  title: 'Prefer for_each',
                  emoji: '⭐',
                  body:
                    "With `count`, removing the middle item shifts every index after it — Terraform may destroy and recreate the wrong resources. `for_each` keys by name, so removing one item only touches that one. Use `for_each` unless you truly just need N identical copies.",
                },
                {
                  id: 'd2c3s1-4',
                  kind: 'compare',
                  title: 'count vs for_each',
                  emoji: '⚖️',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'count', emoji: '🔢', items: ['Iterates a number', 'Indexed [0],[1]', 'Fragile on removal', 'Good for N identical'] },
                      { title: 'for_each', emoji: '🗝️', items: ['Iterates map/set', 'Keyed by name', 'Stable on removal', 'Good for distinct items'] },
                    ],
                  },
                },
                {
                  id: 'd2c3s1-5',
                  kind: 'example',
                  title: 'for_each Over a Map',
                  emoji: '🗺️',
                  body:
                    "`resource \"aws_s3_bucket\" \"b\" {`\n`  for_each = {`\n`    logs   = \"private\"`\n`    assets = \"public-read\"`\n`  }`\n`  bucket = \"acme-${each.key}\"`\n`}`\n\nAddress them as `aws_s3_bucket.b[\"logs\"]` — stable and readable.",
                },
                {
                  id: 'd2c3s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  question: "Why is `for_each` usually safer than `count` for a list of named resources?",
                  options: [
                    { id: 'a', text: "It runs faster", correct: false },
                    { id: 'b', text: "It keys instances by name, so removing one does not shift the others", correct: true },
                    { id: 'c', text: "It uses less state", correct: false },
                    { id: 'd', text: "It does not need a provider", correct: false },
                  ],
                  explanation:
                    "`for_each` keys each instance by its map/set key. Removing an item affects only that instance, whereas `count` reindexes and can recreate the wrong resources.",
                },
              ],
            },
            {
              id: 'd2c3s2',
              title: 'Dynamic Blocks & depends_on',
              summary: "Generating repeated nested blocks and forcing explicit ordering.",
              cards: [
                {
                  id: 'd2c3s2-1',
                  kind: 'concept',
                  title: 'Dynamic Blocks',
                  emoji: '🧬',
                  body:
                    "Some resources have repeatable nested blocks (like security-group `ingress` rules). A **dynamic block** generates them from a collection so you do not copy-paste.\n\nIt pairs a `for_each` with a `content` block that describes each generated block.",
                  terms: [
                    { term: 'Dynamic block', definition: 'A construct that generates repeated nested blocks from a collection.' },
                    { term: 'Nested block', definition: 'A block that lives inside a resource, e.g. ingress inside a security group.' },
                  ],
                },
                {
                  id: 'd2c3s2-2',
                  kind: 'example',
                  title: 'Dynamic Ingress Rules',
                  emoji: '🚪',
                  body:
                    "`dynamic \"ingress\" {`\n`  for_each = var.ports`\n`  content {`\n`    from_port = ingress.value`\n`    to_port   = ingress.value`\n`    protocol  = \"tcp\"`\n`  }`\n`}`\n\nOne rule per port in `var.ports`, no repetition.",
                },
                {
                  id: 'd2c3s2-3',
                  kind: 'concept',
                  title: 'depends_on',
                  emoji: '🔗',
                  body:
                    "Terraform usually infers order from references. When there is a hidden dependency it cannot see, use the `depends_on` meta-argument to force one resource to wait for another.\n\n`depends_on = [aws_iam_role_policy.example]`",
                  terms: [
                    { term: 'depends_on', definition: 'A meta-argument forcing an explicit ordering dependency between resources.' },
                    { term: 'Implicit dependency', definition: 'Ordering Terraform infers automatically from references.' },
                  ],
                },
                {
                  id: 'd2c3s2-4',
                  kind: 'tip',
                  title: 'depends_on Is a Last Resort',
                  emoji: '⚠️',
                  body:
                    "Prefer implicit dependencies — reference an attribute of the other resource and Terraform orders them for you. Reach for `depends_on` only when there is no reference to express the link, such as IAM permissions taking effect.",
                },
                {
                  id: 'd2c3s2-5',
                  kind: 'diagram',
                  title: 'Implicit vs Explicit Order',
                  emoji: '🔗',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Implicit', emoji: '🪄', items: ['From a reference', 'Automatic', 'Preferred', 'a.id used in b'] },
                      { title: 'Explicit', emoji: '📌', items: ['depends_on = [...]', 'Manual', 'Last resort', 'Hidden dependency'] },
                    ],
                  },
                },
                {
                  id: 'd2c3s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  question: "When should you use `depends_on`?",
                  options: [
                    { id: 'a', text: "For every resource, always", correct: false },
                    { id: 'b', text: "Only when a dependency cannot be expressed through a reference", correct: true },
                    { id: 'c', text: "To speed up applies", correct: false },
                    { id: 'd', text: "To store state remotely", correct: false },
                  ],
                  explanation:
                    "Terraform infers order from references automatically. Use `depends_on` only for hidden dependencies it cannot see, such as IAM policies needing to exist first.",
                },
              ],
            },
          ],
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 3 — State Management
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd3',
      title: 'State Management',
      emoji: '🗄️',
      description:
        "What Terraform state is and why it exists, the tfstate file, remote backends with locking, state commands, sensitive data, and workspaces.",
      project: {
        title: "Move State to a Remote Backend",
        brief:
          "Your project so far keeps state locally in `terraform.tfstate`. Now configure a remote backend: an S3 bucket for the state file plus a DynamoDB table for locking (or use Terraform Cloud).\n\nRun `terraform init` to migrate the existing state. Confirm the local file is gone and state now lives remotely, shared and locked.",
        buildsOn: "Builds on D2's parameterized config by relocating its state from your laptop to a shared, locked remote backend.",
        stretch:
          "Enable versioning on the S3 state bucket so you can recover a prior state. Add a second workspace and observe how it gets its own state key.",
      },
      chapters: [
        {
          id: 'd3c1',
          title: 'Understanding State',
          emoji: '🗄️',
          description: "The mapping between your code and the real world, and why Terraform needs it.",
          sections: [
            {
              id: 'd3c1s1',
              title: 'What State Is',
              summary: "The record that ties your configuration to real resources.",
              cards: [
                {
                  id: 'd3c1s1-1',
                  kind: 'concept',
                  title: 'The State File',
                  emoji: '🗄️',
                  body:
                    "**State** is Terraform's record of what it manages. Stored by default in `terraform.tfstate`, it maps each resource in your code to the real resource's id and attributes.\n\nWithout state, Terraform would not know that `aws_s3_bucket.logs` maps to a specific real bucket.",
                  terms: [
                    { term: 'State', definition: "Terraform’s stored mapping from configuration to real-world resources." },
                    { term: 'terraform.tfstate', definition: 'The default local JSON file holding state.' },
                    { term: 'Refresh', definition: 'Updating state to match the real infrastructure before planning.' },
                  ],
                },
                {
                  id: 'd3c1s1-2',
                  kind: 'analogy',
                  title: 'A Seating Chart',
                  emoji: '🪑',
                  body:
                    "State is like a wedding **seating chart**. Your config says \"Alice sits at table 3.\" State remembers which physical chair that actually is. Lose the chart and you no longer know who owns which seat — chaos when you try to rearrange.",
                },
                {
                  id: 'd3c1s1-3',
                  kind: 'concept',
                  title: 'Why It Exists',
                  emoji: '🤔',
                  body:
                    "State lets Terraform:\n\n- **Map** config to real resource ids.\n- **Track metadata** like dependencies.\n- **Detect drift** by comparing state to reality.\n- **Plan fast** by caching attributes instead of querying everything.",
                },
                {
                  id: 'd3c1s1-4',
                  kind: 'tip',
                  title: 'Never Edit State by Hand',
                  emoji: '🚫',
                  body:
                    "The tfstate file is JSON, but do not hand-edit it. One typo can corrupt the mapping and make Terraform destroy or duplicate resources. Use `terraform state` subcommands for any surgery — they update it safely.",
                },
                {
                  id: 'd3c1s1-5',
                  kind: 'diagram',
                  title: 'State in the Middle',
                  emoji: '🔗',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'Config', sublabel: '.tf files', emoji: '📄' },
                      { label: 'State', sublabel: 'tfstate', emoji: '🗄️' },
                      { label: 'Real Infra', sublabel: 'cloud', emoji: '☁️' },
                    ],
                  },
                },
                {
                  id: 'd3c1s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  question: "What is the primary purpose of Terraform state?",
                  options: [
                    { id: 'a', text: "To store your provider credentials", correct: false },
                    { id: 'b', text: "To map your configuration to real-world resources and track them", correct: true },
                    { id: 'c', text: "To run your CI pipeline", correct: false },
                    { id: 'd', text: "To replace the need for a provider", correct: false },
                  ],
                  explanation:
                    "State records which real resource each configuration item maps to, plus metadata. It is how Terraform knows what it already manages.",
                },
              ],
            },
            {
              id: 'd3c1s2',
              title: 'State Commands & Sensitivity',
              summary: "Inspecting and manipulating state safely, and the secrets it contains.",
              cards: [
                {
                  id: 'd3c1s2-1',
                  kind: 'concept',
                  title: 'The state Subcommands',
                  emoji: '🛠️',
                  body:
                    "Use `terraform state` to inspect and edit safely:\n\n- `state list` — list managed resources.\n- `state show <addr>` — show one resource's attributes.\n- `state mv` — rename/move a resource.\n- `state rm` — forget a resource (without destroying it).",
                  terms: [
                    { term: 'state mv', definition: 'Moves or renames a resource within state without recreating it.' },
                    { term: 'state rm', definition: 'Removes a resource from state so Terraform stops managing it (leaves it real).' },
                  ],
                },
                {
                  id: 'd3c1s2-2',
                  kind: 'example',
                  title: 'Inspecting State',
                  emoji: '🔍',
                  body:
                    "`terraform state list`\n`terraform state show aws_s3_bucket.logs`\n\nRename after refactoring code:\n`terraform state mv aws_s3_bucket.logs aws_s3_bucket.archive`\n\nThis keeps the real bucket and just updates the address in state.",
                },
                {
                  id: 'd3c1s2-3',
                  kind: 'tip',
                  title: 'State Holds Secrets',
                  emoji: '🔓',
                  body:
                    "State can contain **plaintext secrets** — database passwords, generated keys, even values you marked `sensitive` in outputs. Treat the state file as confidential: encrypt it, restrict access, and never commit it to git.",
                },
                {
                  id: 'd3c1s2-4',
                  kind: 'concept',
                  title: 'Refresh & Drift',
                  emoji: '🌊',
                  body:
                    "Before planning, Terraform refreshes state against reality. If someone changed a resource in the console, that is **drift** — the plan will show Terraform's intent to bring it back in line with your code.",
                  terms: [
                    { term: 'Drift', definition: 'A mismatch between real infrastructure and recorded state/config.' },
                  ],
                },
                {
                  id: 'd3c1s2-5',
                  kind: 'diagram',
                  title: 'Drift Cycle',
                  emoji: '🔄',
                  diagram: {
                    type: 'cycle',
                    nodes: [
                      { label: 'plan', emoji: '🔍' },
                      { label: 'apply', emoji: '🚀' },
                      { label: 'drift?', emoji: '🌊' },
                      { label: 'plan again', emoji: '🔁' },
                    ],
                  },
                },
                {
                  id: 'd3c1s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  question: "You refactored a resource's name in code. How do you keep the real resource without recreating it?",
                  options: [
                    { id: 'a', text: "Edit terraform.tfstate by hand", correct: false },
                    { id: 'b', text: "Run terraform state mv to update its address in state", correct: true },
                    { id: 'c', text: "Run terraform destroy then apply", correct: false },
                    { id: 'd', text: "Delete the state file", correct: false },
                  ],
                  explanation:
                    "`terraform state mv` updates the resource address in state safely, so Terraform recognizes the existing resource rather than destroying and recreating it.",
                },
              ],
            },
          ],
        },
        {
          id: 'd3c2',
          title: 'Remote Backends & Workspaces',
          emoji: '☁️',
          description: "Sharing state across a team with locking, and isolating environments with workspaces.",
          sections: [
            {
              id: 'd3c2s1',
              title: 'Remote Backends & Locking',
              summary: "Moving state off your laptop and preventing two people from clashing.",
              cards: [
                {
                  id: 'd3c2s1-1',
                  kind: 'concept',
                  title: 'Why Remote State?',
                  emoji: '☁️',
                  body:
                    "Local state lives on one laptop — useless for teams. A **remote backend** stores state in a shared location like S3, Azure Blob, GCS, or Terraform Cloud, so everyone works from the same source of truth.",
                  terms: [
                    { term: 'Backend', definition: 'Where Terraform stores state and runs operations.' },
                    { term: 'Remote state', definition: 'State stored in a shared remote location rather than locally.' },
                  ],
                },
                {
                  id: 'd3c2s1-2',
                  kind: 'concept',
                  title: 'State Locking',
                  emoji: '🔒',
                  body:
                    "**State locking** stops two people from running `apply` at the same time and corrupting state. When you apply, Terraform grabs a lock; others wait. S3 backends use a DynamoDB table for the lock; Terraform Cloud locks automatically.",
                  terms: [
                    { term: 'State locking', definition: 'A mechanism preventing concurrent state writes.' },
                    { term: 'DynamoDB lock', definition: 'A DynamoDB table used by the S3 backend to hold a lock.' },
                  ],
                },
                {
                  id: 'd3c2s1-3',
                  kind: 'example',
                  title: 'S3 Backend with Lock',
                  emoji: '🪣',
                  body:
                    "`terraform {`\n`  backend \"s3\" {`\n`    bucket         = \"acme-tf-state\"`\n`    key            = \"prod/terraform.tfstate\"`\n`    region         = \"us-east-1\"`\n`    dynamodb_table = \"tf-locks\"`\n`    encrypt        = true`\n`  }`\n`}`\n\nRun `terraform init` to migrate.",
                },
                {
                  id: 'd3c2s1-4',
                  kind: 'analogy',
                  title: 'The Bathroom Key',
                  emoji: '🚻',
                  body:
                    "State locking is the single **bathroom key** at a cafe. Only one person can hold it at a time; everyone else waits their turn. This prevents two people trying to \"use the room\" — write state — simultaneously and making a mess.",
                },
                {
                  id: 'd3c2s1-5',
                  kind: 'compare',
                  title: 'Local vs Remote State',
                  emoji: '⚖️',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Local', emoji: '💻', items: ['On one laptop', 'No locking', 'Hard to share', 'Fine for solo practice'] },
                      { title: 'Remote', emoji: '☁️', items: ['Shared bucket', 'Locking + encryption', 'Team friendly', 'Required for real teams'] },
                    ],
                  },
                },
                {
                  id: 'd3c2s1-6',
                  kind: 'tip',
                  title: 'Chicken-and-Egg Bucket',
                  emoji: '🐔',
                  body:
                    "The S3 bucket and DynamoDB table that hold your state cannot be created by the same config that uses them as a backend. Create them once with a small bootstrap config (or the console), then point your backend at them.",
                },
                {
                  id: 'd3c2s1-7',
                  kind: 'quiz',
                  title: 'Quick Check',
                  question: "In an S3 backend, what commonly provides state locking?",
                  options: [
                    { id: 'a', text: "A second S3 bucket", correct: false },
                    { id: 'b', text: "A DynamoDB table", correct: true },
                    { id: 'c', text: "An IAM role", correct: false },
                    { id: 'd', text: "A local file", correct: false },
                  ],
                  explanation:
                    "The S3 backend uses a DynamoDB table to hold a lock, preventing concurrent applies from corrupting shared state. Terraform Cloud handles locking on its own.",
                },
              ],
            },
            {
              id: 'd3c2s2',
              title: 'Workspaces',
              summary: "Multiple state instances from one configuration.",
              cards: [
                {
                  id: 'd3c2s2-1',
                  kind: 'concept',
                  title: 'What Are Workspaces?',
                  emoji: '🗂️',
                  body:
                    "A **workspace** is a named, separate state instance for the same configuration. The default workspace is `default`. Create more to keep, say, `dev` and `staging` state apart without copying code.\n\n`terraform workspace new dev`\n`terraform workspace select dev`",
                  terms: [
                    { term: 'Workspace', definition: 'A named separate state instance for the same configuration.' },
                    { term: 'terraform.workspace', definition: 'An expression giving the current workspace name.' },
                  ],
                },
                {
                  id: 'd3c2s2-2',
                  kind: 'example',
                  title: 'Using the Workspace Name',
                  emoji: '🏷️',
                  body:
                    "Branch behavior on the active workspace:\n\n`bucket = \"acme-${terraform.workspace}-logs\"`\n\nIn workspace `dev` this is `acme-dev-logs`; in `prod` it becomes `acme-prod-logs`. One config, isolated state per workspace.",
                },
                {
                  id: 'd3c2s2-3',
                  kind: 'tip',
                  title: 'Workspaces Are Not Always Enough',
                  emoji: '⚠️',
                  body:
                    "Workspaces share the same code and backend, so they suit lightweight variations. For meaningfully different environments (different accounts, different settings), many teams prefer separate directories or a module per environment. Do not overload workspaces.",
                },
                {
                  id: 'd3c2s2-4',
                  kind: 'diagram',
                  title: 'One Config, Many States',
                  emoji: '🗂️',
                  diagram: {
                    type: 'stack',
                    nodes: [
                      { label: 'Configuration', sublabel: 'same .tf files', emoji: '📄' },
                      { label: 'Workspace: dev', sublabel: 'own state', emoji: '🟢' },
                      { label: 'Workspace: staging', sublabel: 'own state', emoji: '🟡' },
                      { label: 'Workspace: prod', sublabel: 'own state', emoji: '🔴' },
                    ],
                  },
                },
                {
                  id: 'd3c2s2-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  question: "What does a Terraform workspace give you?",
                  options: [
                    { id: 'a', text: "A separate state instance for the same configuration", correct: true },
                    { id: 'b', text: "A separate provider plugin", correct: false },
                    { id: 'c', text: "A faster apply", correct: false },
                    { id: 'd', text: "Automatic secrets management", correct: false },
                  ],
                  explanation:
                    "A workspace is a named, isolated state instance for one configuration. It lets you keep separate state (e.g. dev vs prod) without duplicating code.",
                },
              ],
            },
          ],
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 4 — Modules & Reuse
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd4',
      title: 'Modules & Reuse',
      emoji: '📦',
      description:
        "Packaging configuration into reusable modules: structure, root vs child modules, inputs and outputs, calling modules, the public Registry, versioning, and composition.",
      project: {
        title: "Refactor Into a Module",
        brief:
          "Extract the resources from your project into a child module under `modules/storage/`. Give it `variables.tf` for inputs (name, environment, tags) and `outputs.tf` for the created ids.\n\nIn the root config, call the module with a `module` block and pass values in. Run `plan` to confirm the infrastructure is unchanged — only the code is reorganized.",
        buildsOn: "Builds on D3's remote-state setup by reorganizing the same resources into a clean, reusable child module.",
        stretch:
          "Publish the module to a private git repo and source it with a version tag (`source = \"git::...?ref=v1.0.0\"`). Call it twice with different inputs.",
      },
      chapters: [
        {
          id: 'd4c1',
          title: 'Module Basics',
          emoji: '📦',
          description: "What a module is, root vs child, and passing data in and out.",
          sections: [
            {
              id: 'd4c1s1',
              title: 'What Is a Module?',
              summary: "A reusable container of Terraform configuration.",
              cards: [
                {
                  id: 'd4c1s1-1',
                  kind: 'concept',
                  title: 'Modules Package Config',
                  emoji: '📦',
                  body:
                    "A **module** is a folder of `.tf` files you can call and reuse. Every Terraform config is already a module — the **root module**. When one module calls another, the called one is a **child module**.\n\nModules let you write a pattern once and reuse it everywhere.",
                  terms: [
                    { term: 'Module', definition: 'A reusable container of Terraform configuration (a folder of .tf files).' },
                    { term: 'Root module', definition: 'The top-level configuration in your working directory.' },
                    { term: 'Child module', definition: 'A module called by another module.' },
                  ],
                },
                {
                  id: 'd4c1s1-2',
                  kind: 'analogy',
                  title: 'A Recipe You Reuse',
                  emoji: '🍜',
                  body:
                    "A module is a **recipe card**: \"make a web server\" with slots for the size and name. You keep the card in a drawer and cook it whenever you need that dish, tweaking the ingredients (inputs) each time — no rewriting the method from scratch.",
                },
                {
                  id: 'd4c1s1-3',
                  kind: 'concept',
                  title: 'Standard Structure',
                  emoji: '🗂️',
                  body:
                    "A tidy module has three files:\n\n- `main.tf` — the resources.\n- `variables.tf` — inputs the caller sets.\n- `outputs.tf` — values the module returns.\n\nThis convention makes any module instantly familiar to other engineers.",
                },
                {
                  id: 'd4c1s1-4',
                  kind: 'diagram',
                  title: 'Root Wraps Children',
                  emoji: '🪆',
                  diagram: {
                    type: 'stack',
                    nodes: [
                      { label: 'Root Module', sublabel: 'your config', emoji: '🌳' },
                      { label: 'module "network"', sublabel: 'child', emoji: '🌐' },
                      { label: 'module "storage"', sublabel: 'child', emoji: '🪣' },
                      { label: 'module "compute"', sublabel: 'child', emoji: '🖥️' },
                    ],
                  },
                },
                {
                  id: 'd4c1s1-5',
                  kind: 'tip',
                  title: 'Start Simple',
                  emoji: '🌱',
                  body:
                    "Do not modularize on day one. Write flat config first; extract a module once you notice the same pattern repeating. Premature modules with dozens of inputs are harder to use than a bit of duplication.",
                },
                {
                  id: 'd4c1s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  question: "Which statement about modules is correct?",
                  options: [
                    { id: 'a', text: "Only child modules count as modules; the root is not one", correct: false },
                    { id: 'b', text: "Every configuration is a module; the top-level one is the root module", correct: true },
                    { id: 'c', text: "Modules cannot have inputs", correct: false },
                    { id: 'd', text: "A module must live in the Terraform Registry", correct: false },
                  ],
                  explanation:
                    "Every Terraform configuration is a module. The top-level one is the root module, and modules it calls are child modules. Modules can define inputs and outputs and live anywhere.",
                },
              ],
            },
            {
              id: 'd4c1s2',
              title: 'Calling Modules',
              summary: "The module block, inputs, and consuming outputs.",
              cards: [
                {
                  id: 'd4c1s2-1',
                  kind: 'concept',
                  title: 'The module Block',
                  emoji: '📞',
                  body:
                    "You call a child module with a `module` block. `source` points to it (a local path, git URL, or Registry name); the other arguments set its input variables.\n\n`module \"storage\" {`\n`  source = \"./modules/storage\"`\n`  name   = \"acme-logs\"`\n`}`",
                  terms: [
                    { term: 'source', definition: 'Where the module code lives: a path, git URL, or Registry address.' },
                    { term: 'Module call', definition: 'A module block that instantiates a child module.' },
                  ],
                },
                {
                  id: 'd4c1s2-2',
                  kind: 'example',
                  title: 'Passing In & Reading Out',
                  emoji: '🔄',
                  body:
                    "Pass inputs, then read the module's outputs as `module.<name>.<output>`:\n\n`module \"storage\" {`\n`  source = \"./modules/storage\"`\n`  env    = var.env`\n`}`\n\n`output \"bucket_arn\" {`\n`  value = module.storage.bucket_arn`\n`}`",
                },
                {
                  id: 'd4c1s2-3',
                  kind: 'concept',
                  title: 'Inputs & Outputs Are the API',
                  emoji: '🔌',
                  body:
                    "A module's `variable` blocks are its inputs and its `output` blocks are its returns — together they form the module's **public API**. The caller sees only these, never the internal resources. Keep the API small and clear.",
                  terms: [
                    { term: 'Module API', definition: 'The set of input variables and outputs a module exposes to callers.' },
                  ],
                },
                {
                  id: 'd4c1s2-4',
                  kind: 'tip',
                  title: 'init After Adding Modules',
                  emoji: '⚙️',
                  body:
                    "Just like providers, new or changed module sources require `terraform init` to fetch and install them into `.terraform/modules`. If Terraform complains it cannot find a module, run `init`.",
                },
                {
                  id: 'd4c1s2-5',
                  kind: 'diagram',
                  title: 'Data Through a Module',
                  emoji: '🔀',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'Caller', sublabel: 'sets inputs', emoji: '📞' },
                      { label: 'Variables', sublabel: 'module in', emoji: '📥' },
                      { label: 'Resources', sublabel: 'inside', emoji: '⚙️' },
                      { label: 'Outputs', sublabel: 'module out', emoji: '📤' },
                    ],
                  },
                },
                {
                  id: 'd4c1s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  question: "How do you reference an output named `bucket_arn` from a module called `storage`?",
                  options: [
                    { id: 'a', text: "var.storage.bucket_arn", correct: false },
                    { id: 'b', text: "module.storage.bucket_arn", correct: true },
                    { id: 'c', text: "storage.bucket_arn", correct: false },
                    { id: 'd', text: "output.storage.bucket_arn", correct: false },
                  ],
                  explanation:
                    "Module outputs are referenced as `module.<name>.<output>`, so it is `module.storage.bucket_arn`. Inputs are set as arguments in the module block.",
                },
              ],
            },
          ],
        },
        {
          id: 'd4c2',
          title: 'Registry, Versioning & Composition',
          emoji: '🌐',
          description: "Reusing community modules, pinning versions, and composing small modules into systems.",
          sections: [
            {
              id: 'd4c2s1',
              title: 'The Public Registry',
              summary: "Battle-tested modules you can pull off the shelf.",
              cards: [
                {
                  id: 'd4c2s1-1',
                  kind: 'concept',
                  title: 'The Terraform Registry',
                  emoji: '🌐',
                  body:
                    "The **public Registry** at registry.terraform.io hosts thousands of community and verified modules — VPCs, EKS clusters, databases. Reference one by its `namespace/name/provider` address and a version constraint.",
                  terms: [
                    { term: 'Registry', definition: 'A catalog of publishable, versioned modules and providers.' },
                    { term: 'Verified module', definition: 'A module reviewed and badged by HashiCorp partners.' },
                  ],
                },
                {
                  id: 'd4c2s1-2',
                  kind: 'example',
                  title: 'Using a Registry Module',
                  emoji: '📥',
                  body:
                    "`module \"vpc\" {`\n`  source  = \"terraform-aws-modules/vpc/aws\"`\n`  version = \"5.1.2\"`\n`  name    = \"acme-vpc\"`\n`  cidr    = \"10.0.0.0/16\"`\n`}`\n\nRun `terraform init` to download it. You get a production-grade VPC in a few lines.",
                },
                {
                  id: 'd4c2s1-3',
                  kind: 'concept',
                  title: 'Version Constraints',
                  emoji: '📌',
                  body:
                    "Always pin a `version`. Constraints:\n\n- `= 5.1.2` exact\n- `~> 5.1` allows 5.1.x, not 5.2\n- `>= 5.0, < 6.0` a range\n\nPinning protects you from a surprise breaking change on the next `init`.",
                  terms: [
                    { term: 'Version constraint', definition: 'A rule limiting which module or provider versions Terraform may use.' },
                    { term: 'Pessimistic operator', definition: 'The ~> operator allowing patch/minor bumps but not the next major.' },
                  ],
                },
                {
                  id: 'd4c2s1-4',
                  kind: 'tip',
                  title: 'Read the Code First',
                  emoji: '🔍',
                  body:
                    "A Registry module runs with your credentials and can create real, billable infrastructure. Skim its source and inputs before trusting it, and always pin a specific version so it cannot change under you.",
                },
                {
                  id: 'd4c2s1-5',
                  kind: 'diagram',
                  title: 'Where Modules Come From',
                  emoji: '🗺️',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Local', emoji: '📁', items: ['./modules/x', 'In your repo', 'No version arg', 'Fast to edit'] },
                      { title: 'Git', emoji: '🐙', items: ['git::https://...', 'Ref a tag', 'Shared across repos', 'Private-friendly'] },
                      { title: 'Registry', emoji: '🌐', items: ['ns/name/provider', 'version = "x.y.z"', 'Community/verified', 'Off-the-shelf'] },
                    ],
                  },
                },
                {
                  id: 'd4c2s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  question: "Why should you pin a module `version`?",
                  options: [
                    { id: 'a', text: "It makes apply run faster", correct: false },
                    { id: 'b', text: "It prevents a surprise breaking change when the module updates", correct: true },
                    { id: 'c', text: "It is required for local modules", correct: false },
                    { id: 'd', text: "It encrypts the state file", correct: false },
                  ],
                  explanation:
                    "Pinning a version means `terraform init` always pulls the exact code you tested. Without it, a new release could introduce breaking changes unexpectedly.",
                },
              ],
            },
            {
              id: 'd4c2s2',
              title: 'Composition & DRY',
              summary: "Building larger systems from small, focused modules.",
              cards: [
                {
                  id: 'd4c2s2-1',
                  kind: 'concept',
                  title: 'Compose Small Modules',
                  emoji: '🧩',
                  body:
                    "**Composition** means a root module wires together several small, single-purpose child modules — network, storage, compute — passing outputs of one as inputs to another. Small modules are easier to test, reuse, and reason about than one giant module.",
                  terms: [
                    { term: 'Composition', definition: 'Assembling small focused modules into a larger system.' },
                    { term: 'Single responsibility', definition: 'A module should do one thing well.' },
                  ],
                },
                {
                  id: 'd4c2s2-2',
                  kind: 'example',
                  title: 'Wiring Modules Together',
                  emoji: '🔗',
                  body:
                    "Pass one module's output into another's input:\n\n`module \"network\" { source = \"./modules/network\" }`\n\n`module \"app\" {`\n`  source    = \"./modules/app\"`\n`  subnet_id = module.network.subnet_id`\n`}`",
                },
                {
                  id: 'd4c2s2-3',
                  kind: 'analogy',
                  title: 'Lego Bricks',
                  emoji: '🧱',
                  body:
                    "Modules are **Lego bricks**. Each brick is simple and does one job, but snapped together they build a castle. You would not mould one giant custom brick — you would compose standard ones. Same with infrastructure.",
                },
                {
                  id: 'd4c2s2-4',
                  kind: 'tip',
                  title: 'DRY, But Not Too Dry',
                  emoji: '💧',
                  body:
                    "Modules kill duplication (DRY), but a module abstracting two barely-similar things becomes a tangle of flags. If keeping code DRY forces ugly conditionals, a little duplication is healthier. Extract when the pattern is truly shared.",
                },
                {
                  id: 'd4c2s2-5',
                  kind: 'diagram',
                  title: 'System from Modules',
                  emoji: '🏗️',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'network', sublabel: 'vpc, subnets', emoji: '🌐' },
                      { label: 'storage', sublabel: 'buckets, db', emoji: '🪣' },
                      { label: 'compute', sublabel: 'servers', emoji: '🖥️' },
                    ],
                  },
                },
                {
                  id: 'd4c2s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  question: "What is module composition?",
                  options: [
                    { id: 'a', text: "Putting all resources in one huge module", correct: false },
                    { id: 'b', text: "Wiring several small, focused modules together into a larger system", correct: true },
                    { id: 'c', text: "Editing state by hand", correct: false },
                    { id: 'd', text: "Running plan twice", correct: false },
                  ],
                  explanation:
                    "Composition assembles small single-purpose modules (network, storage, compute) into a bigger system, passing outputs into inputs. It beats one monolithic module.",
                },
              ],
            },
          ],
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 5 — Workflows & Best Practices
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd5',
      title: 'Workflows & Best Practices',
      emoji: '🚀',
      description:
        "Dependencies, lifecycle rules, provisioners, importing existing infra, drift review, secrets, formatting and validation, CI/CD, and multi-environment structure.",
      project: {
        title: "Multi-Env with a CI Workflow",
        brief:
          "Give your module a `dev` and a `prod` environment — separate directories or tfvars, each with its own backend key. Add `lifecycle` rules: `prevent_destroy` on the prod bucket and `create_before_destroy` where it matters.\n\nWrite a simple CI workflow (GitHub Actions) that runs `terraform fmt -check`, `validate`, and `plan` on pull requests, and `apply` on merge to main.",
        buildsOn: "Builds on D4's module by deploying it to multiple environments and wrapping it in an automated plan/apply pipeline.",
        stretch:
          "Add `ignore_changes` for a tag managed by another system, and gate the prod `apply` behind a manual approval step in CI.",
      },
      chapters: [
        {
          id: 'd5c1',
          title: 'Lifecycle & Dependencies',
          emoji: '♻️',
          description: "Controlling how resources are created, replaced, and ordered.",
          sections: [
            {
              id: 'd5c1s1',
              title: 'Dependencies Revisited',
              summary: "How Terraform orders work, implicitly and explicitly.",
              cards: [
                {
                  id: 'd5c1s1-1',
                  kind: 'concept',
                  title: 'The Dependency Graph',
                  emoji: '🕸️',
                  body:
                    "Terraform builds a **dependency graph** from your references and walks it to decide order and what can run in parallel. If resource B uses `a.id`, B waits for A automatically — an **implicit dependency**.",
                  terms: [
                    { term: 'Dependency graph', definition: 'The graph Terraform builds to order resource operations.' },
                    { term: 'Implicit dependency', definition: 'Ordering inferred from one resource referencing another.' },
                  ],
                },
                {
                  id: 'd5c1s1-2',
                  kind: 'example',
                  title: 'Implicit by Reference',
                  emoji: '🔗',
                  body:
                    "`resource \"aws_instance\" \"web\" {`\n`  subnet_id = aws_subnet.main.id`\n`}`\n\nBecause `web` references `aws_subnet.main.id`, Terraform creates the subnet first. No `depends_on` needed — the reference is the dependency.",
                },
                {
                  id: 'd5c1s1-3',
                  kind: 'tip',
                  title: 'Explicit Only When Hidden',
                  emoji: '📌',
                  body:
                    "Use `depends_on` only for links Terraform cannot infer — like an app that needs an IAM policy attached before it will start, where no attribute is referenced. Overusing it serializes work that could run in parallel and slows applies.",
                },
                {
                  id: 'd5c1s1-4',
                  kind: 'diagram',
                  title: 'Graph Ordering',
                  emoji: '🕸️',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'VPC', emoji: '🌐' },
                      { label: 'Subnet', emoji: '🔲' },
                      { label: 'Instance', emoji: '🖥️' },
                    ],
                  },
                },
                {
                  id: 'd5c1s1-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  question: "How does Terraform usually know resource A must be created before B?",
                  options: [
                    { id: 'a', text: "Alphabetical order of names", correct: false },
                    { id: 'b', text: "Because B references an attribute of A, creating an implicit dependency", correct: true },
                    { id: 'c', text: "The order they appear in the file", correct: false },
                    { id: 'd', text: "It always creates everything at once", correct: false },
                  ],
                  explanation:
                    "Terraform infers order from references. If B uses A's attribute, that is an implicit dependency and A is created first. File order and names do not matter.",
                },
              ],
            },
            {
              id: 'd5c1s2',
              title: 'The lifecycle Block',
              summary: "create_before_destroy, prevent_destroy, and ignore_changes.",
              cards: [
                {
                  id: 'd5c1s2-1',
                  kind: 'concept',
                  title: 'Three Lifecycle Rules',
                  emoji: '♻️',
                  body:
                    "The `lifecycle` block tweaks how a resource is handled:\n\n- `create_before_destroy` — make the new one before killing the old (avoids downtime).\n- `prevent_destroy` — refuse to destroy this resource.\n- `ignore_changes` — stop reacting to changes in listed attributes.",
                  terms: [
                    { term: 'lifecycle', definition: 'A meta-argument block controlling create/destroy behavior.' },
                    { term: 'create_before_destroy', definition: 'Creates the replacement before destroying the original.' },
                    { term: 'prevent_destroy', definition: 'Blocks any plan that would destroy the resource.' },
                  ],
                },
                {
                  id: 'd5c1s2-2',
                  kind: 'example',
                  title: 'Protecting Prod',
                  emoji: '🛡️',
                  body:
                    "`resource \"aws_s3_bucket\" \"prod\" {`\n`  bucket = \"acme-prod-data\"`\n`  lifecycle {`\n`    prevent_destroy = true`\n`  }`\n`}`\n\nNow any plan that would destroy this bucket errors out — a safety net against accidents.",
                },
                {
                  id: 'd5c1s2-3',
                  kind: 'example',
                  title: 'Ignoring Drift',
                  emoji: '🙈',
                  body:
                    "When another system manages a tag, tell Terraform to leave it alone:\n\n`lifecycle {`\n`  ignore_changes = [tags[\"LastScanned\"]]`\n`}`\n\nTerraform will no longer try to \"correct\" that tag on every plan.",
                },
                {
                  id: 'd5c1s2-4',
                  kind: 'tip',
                  title: 'prevent_destroy Blocks destroy Too',
                  emoji: '⚠️',
                  body:
                    "`prevent_destroy = true` also blocks `terraform destroy` for the whole config while it is set. To intentionally tear something down, remove the flag first, then destroy. It is a guardrail, not a permanent lock.",
                },
                {
                  id: 'd5c1s2-5',
                  kind: 'diagram',
                  title: 'create_before_destroy',
                  emoji: '🔄',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'Create new', emoji: '🆕' },
                      { label: 'Switch over', emoji: '🔀' },
                      { label: 'Destroy old', emoji: '💥' },
                    ],
                  },
                },
                {
                  id: 'd5c1s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  question: "Which lifecycle setting avoids downtime by making the replacement before removing the original?",
                  options: [
                    { id: 'a', text: "prevent_destroy", correct: false },
                    { id: 'b', text: "create_before_destroy", correct: true },
                    { id: 'c', text: "ignore_changes", correct: false },
                    { id: 'd', text: "depends_on", correct: false },
                  ],
                  explanation:
                    "`create_before_destroy` provisions the new resource first and only then destroys the old one, avoiding a gap. `prevent_destroy` blocks destruction; `ignore_changes` silences attribute drift.",
                },
              ],
            },
          ],
        },
        {
          id: 'd5c2',
          title: 'Provisioners, Import & Drift',
          emoji: '🧰',
          description: "Escape hatches, adopting existing resources, and keeping reality in sync.",
          sections: [
            {
              id: 'd5c2s1',
              title: 'Provisioners & Import',
              summary: "Last-resort scripting, and bringing existing infra under management.",
              cards: [
                {
                  id: 'd5c2s1-1',
                  kind: 'concept',
                  title: 'What Provisioners Do',
                  emoji: '🧰',
                  body:
                    "A **provisioner** runs a script on a resource after creation — `local-exec` on your machine or `remote-exec` on the new server. They are an escape hatch for things no provider covers.",
                  terms: [
                    { term: 'Provisioner', definition: 'A block that runs scripts as part of create or destroy.' },
                    { term: 'local-exec', definition: 'Runs a command on the machine running Terraform.' },
                    { term: 'remote-exec', definition: 'Runs a command on the remote resource over SSH/WinRM.' },
                  ],
                },
                {
                  id: 'd5c2s1-2',
                  kind: 'tip',
                  title: 'Avoid Provisioners',
                  emoji: '🚧',
                  body:
                    "HashiCorp calls provisioners a **last resort**. They break the declarative model, are not tracked in state, and fail unpredictably. Prefer cloud-init/user_data, config-management tools, or purpose-built resources. Reach for provisioners only when nothing else works.",
                },
                {
                  id: 'd5c2s1-3',
                  kind: 'concept',
                  title: 'Importing Existing Infra',
                  emoji: '📥',
                  body:
                    "Have resources created by hand? **Import** brings them under Terraform without recreating them. You write the matching `resource` block, then run `terraform import <address> <real-id>` to bind it in state.",
                  terms: [
                    { term: 'import', definition: 'Associates an existing real resource with a resource block in state.' },
                    { term: 'import block', definition: 'A config-driven way (Terraform 1.5+) to declare imports in code.' },
                  ],
                },
                {
                  id: 'd5c2s1-4',
                  kind: 'example',
                  title: 'Importing a Bucket',
                  emoji: '🪣',
                  body:
                    "First write an empty matching resource, then:\n\n`terraform import aws_s3_bucket.logs acme-existing-logs`\n\nRun `terraform plan` afterward: it should show no changes if your config matches the real resource. Adjust the config until the plan is clean.",
                },
                {
                  id: 'd5c2s1-5',
                  kind: 'diagram',
                  title: 'Import Flow',
                  emoji: '📥',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'Write block', emoji: '✍️' },
                      { label: 'import', sublabel: 'bind to state', emoji: '🔗' },
                      { label: 'plan', sublabel: 'expect no change', emoji: '🔍' },
                    ],
                  },
                },
                {
                  id: 'd5c2s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  question: "What does `terraform import` do?",
                  options: [
                    { id: 'a', text: "Creates a brand-new resource from scratch", correct: false },
                    { id: 'b', text: "Brings an existing real resource under Terraform management by binding it in state", correct: true },
                    { id: 'c', text: "Deletes a resource", correct: false },
                    { id: 'd', text: "Downloads a provider", correct: false },
                  ],
                  explanation:
                    "Import associates an already-existing resource with a resource block in state, so Terraform manages it going forward without recreating it. You still write the matching config yourself.",
                },
              ],
            },
            {
              id: 'd5c2s2',
              title: 'Drift & Plan Review',
              summary: "Spotting and reconciling out-of-band changes.",
              cards: [
                {
                  id: 'd5c2s2-1',
                  kind: 'concept',
                  title: 'Detecting Drift',
                  emoji: '🌊',
                  body:
                    "**Drift** happens when infrastructure changes outside Terraform — a colleague tweaks a setting in the console. Running `terraform plan` refreshes state and surfaces the difference, showing what Terraform would do to restore your declared config.",
                  terms: [
                    { term: 'Drift', definition: 'Divergence between real infrastructure and Terraform config/state.' },
                    { term: 'terraform plan -refresh-only', definition: 'A plan that only reconciles state with reality, proposing no config-driven changes.' },
                  ],
                },
                {
                  id: 'd5c2s2-2',
                  kind: 'analogy',
                  title: 'The Untidy Roommate',
                  emoji: '🧹',
                  body:
                    "You arrange the living room (apply). A roommate moves the couch (console change). Next time you tidy up (plan), you notice the couch is out of place and move it back. Drift is the roommate; `plan` is you spotting the mess.",
                },
                {
                  id: 'd5c2s2-3',
                  kind: 'tip',
                  title: 'Review Every Plan',
                  emoji: '👀',
                  body:
                    "Never rubber-stamp `yes`. Read the plan for unexpected `-` (destroy) or `-/+` (replace) lines, especially on stateful resources. In CI, post the plan on the pull request so a human reviews the diff before merge.",
                },
                {
                  id: 'd5c2s2-4',
                  kind: 'diagram',
                  title: 'Reconcile Loop',
                  emoji: '🔄',
                  diagram: {
                    type: 'cycle',
                    nodes: [
                      { label: 'apply', emoji: '🚀' },
                      { label: 'someone edits', emoji: '✋' },
                      { label: 'drift', emoji: '🌊' },
                      { label: 'plan detects', emoji: '🔍' },
                    ],
                  },
                },
                {
                  id: 'd5c2s2-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  question: "A teammate changed a resource in the console. How does Terraform surface this?",
                  options: [
                    { id: 'a', text: "It emails you automatically", correct: false },
                    { id: 'b', text: "The next `terraform plan` refreshes state and shows the drift", correct: true },
                    { id: 'c', text: "It ignores console changes forever", correct: false },
                    { id: 'd', text: "Only `terraform destroy` reveals it", correct: false },
                  ],
                  explanation:
                    "`terraform plan` refreshes state against reality and shows the difference, revealing drift and what it would do to bring things back to your declared config.",
                },
              ],
            },
          ],
        },
        {
          id: 'd5c3',
          title: 'Quality & CI/CD',
          emoji: '🚀',
          description: "Formatting, validation, secrets, and automating Terraform in pipelines across environments.",
          sections: [
            {
              id: 'd5c3s1',
              title: 'Format, Validate & Secrets',
              summary: "Keeping config clean, correct, and free of leaked secrets.",
              cards: [
                {
                  id: 'd5c3s1-1',
                  kind: 'concept',
                  title: 'fmt and validate',
                  emoji: '🧼',
                  body:
                    "Two everyday hygiene commands:\n\n- `terraform fmt` — rewrites files to canonical style.\n- `terraform validate` — checks syntax and internal consistency without touching real infra.\n\nRun both before every commit; wire them into CI as a gate.",
                  terms: [
                    { term: 'fmt', definition: 'Formats configuration to a canonical, consistent style.' },
                    { term: 'validate', definition: 'Checks a configuration for syntax and internal errors offline.' },
                  ],
                },
                {
                  id: 'd5c3s1-2',
                  kind: 'example',
                  title: 'Hygiene Commands',
                  emoji: '⌨️',
                  body:
                    "`terraform fmt -recursive`\n`terraform validate`\n\nIn CI, fail the build if formatting drifts:\n`terraform fmt -check`\n\nThis keeps every diff clean and free of noisy whitespace changes.",
                },
                {
                  id: 'd5c3s1-3',
                  kind: 'concept',
                  title: 'Handling Secrets',
                  emoji: '🔐',
                  body:
                    "Never hardcode secrets. Inject them at runtime via environment variables (`TF_VAR_db_password`) or a secrets manager (Vault, AWS Secrets Manager) read through a data source. Remember secrets still land in **state**, so protect state with encryption and access controls.",
                  terms: [
                    { term: 'Secrets manager', definition: 'A service that stores and serves secrets securely, e.g. Vault or AWS Secrets Manager.' },
                    { term: 'sensitive variable', definition: 'A variable marked sensitive so its value is not shown in output.' },
                  ],
                },
                {
                  id: 'd5c3s1-4',
                  kind: 'tip',
                  title: 'Gitignore the Right Things',
                  emoji: '🙈',
                  body:
                    "Add `*.tfstate`, `*.tfstate.backup`, `.terraform/`, and any `*.tfvars` holding secrets to `.gitignore`. Committing state or secret tfvars is a common leak. Commit `.tf` and `.terraform.lock.hcl`; keep state remote.",
                },
                {
                  id: 'd5c3s1-5',
                  kind: 'diagram',
                  title: 'Pre-Commit Checks',
                  emoji: '✅',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'fmt', sublabel: 'style', emoji: '🧼' },
                      { label: 'validate', sublabel: 'syntax', emoji: '🔎' },
                      { label: 'plan', sublabel: 'preview', emoji: '🔍' },
                    ],
                  },
                },
                {
                  id: 'd5c3s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  question: "Which command checks syntax and internal consistency WITHOUT contacting real infrastructure?",
                  options: [
                    { id: 'a', text: "terraform apply", correct: false },
                    { id: 'b', text: "terraform validate", correct: true },
                    { id: 'c', text: "terraform destroy", correct: false },
                    { id: 'd', text: "terraform import", correct: false },
                  ],
                  explanation:
                    "`terraform validate` checks the configuration offline for syntax and internal errors. `fmt` handles style; `plan` and `apply` contact providers and real infra.",
                },
              ],
            },
            {
              id: 'd5c3s2',
              title: 'CI/CD & Multi-Environment',
              summary: "Automating plan/apply and structuring dev, staging, and prod.",
              cards: [
                {
                  id: 'd5c3s2-1',
                  kind: 'concept',
                  title: 'Terraform in CI/CD',
                  emoji: '🤖',
                  body:
                    "A typical pipeline runs `fmt -check`, `validate`, and `plan` on every pull request, posting the plan for review. On merge to main, it runs `apply` — often gated by a manual approval. This turns infra changes into reviewed, auditable code changes.",
                  terms: [
                    { term: 'CI/CD', definition: 'Continuous integration / delivery: automated pipelines for testing and deploying.' },
                    { term: 'Plan gate', definition: 'A pipeline step that requires review of a plan before apply.' },
                  ],
                },
                {
                  id: 'd5c3s2-2',
                  kind: 'example',
                  title: 'A CI Step Sketch',
                  emoji: '📝',
                  body:
                    "A GitHub Actions job body might run:\n\n`terraform init`\n`terraform fmt -check`\n`terraform validate`\n`terraform plan -out=tfplan`\n\nThen a separate approved job runs `terraform apply tfplan` on merge to main.",
                },
                {
                  id: 'd5c3s2-3',
                  kind: 'concept',
                  title: 'Structuring Environments',
                  emoji: '🏢',
                  body:
                    "Common patterns for dev/staging/prod:\n\n- **Directory per env** — `environments/dev`, `environments/prod`, each calling shared modules with its own tfvars and backend key.\n- **Workspaces** — one config, state per workspace (lighter, but less isolation).",
                  terms: [
                    { term: 'Environment', definition: 'An isolated deployment target such as dev, staging, or prod.' },
                    { term: 'Backend key', definition: 'The state path within a backend, distinct per environment.' },
                  ],
                },
                {
                  id: 'd5c3s2-4',
                  kind: 'compare',
                  title: 'Dir-per-Env vs Workspaces',
                  emoji: '⚖️',
                  compare: {
                    headers: ['Aspect', 'Directory per env', 'Workspaces'],
                    rows: [
                      ['Isolation', 'Strong', 'Weaker'],
                      ['Different providers/accounts', 'Easy', 'Harder'],
                      ['Duplication', 'More', 'Less'],
                      ['Best for', 'Prod-grade separation', 'Light variations'],
                    ],
                  },
                },
                {
                  id: 'd5c3s2-5',
                  kind: 'tip',
                  title: 'Prod Needs a Human',
                  emoji: '🖐️',
                  body:
                    "Auto-applying to dev is fine; auto-applying to prod is risky. Gate the prod `apply` behind a manual approval and require the plan to be reviewed. Combine with `prevent_destroy` on critical resources for defense in depth.",
                },
                {
                  id: 'd5c3s2-6',
                  kind: 'diagram',
                  title: 'PR to Prod Pipeline',
                  emoji: '🚀',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'PR', sublabel: 'fmt, validate, plan', emoji: '🔀' },
                      { label: 'Review', sublabel: 'read the plan', emoji: '👀' },
                      { label: 'Merge', sublabel: 'apply dev', emoji: '✅' },
                      { label: 'Approve', sublabel: 'apply prod', emoji: '🖐️' },
                    ],
                  },
                },
                {
                  id: 'd5c3s2-7',
                  kind: 'quiz',
                  title: 'Quick Check',
                  question: "What is a safe CI/CD pattern for Terraform?",
                  options: [
                    { id: 'a', text: "Auto-apply every change straight to prod with no review", correct: false },
                    { id: 'b', text: "Run fmt/validate/plan on PRs and gate prod apply behind manual approval", correct: true },
                    { id: 'c', text: "Never run plan, only apply", correct: false },
                    { id: 'd', text: "Commit state to git so everyone can edit it", correct: false },
                  ],
                  explanation:
                    "Running fmt, validate, and plan on pull requests lets humans review the diff, and gating the prod apply behind approval prevents unreviewed, risky changes. State should stay remote, never committed.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
