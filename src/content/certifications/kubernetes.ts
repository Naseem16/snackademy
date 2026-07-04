import type { Certification } from '../types'

export const kubernetes: Certification = {
  id: 'kubernetes',
  kind: 'path',
  code: 'K8s',
  title: 'Kubernetes: Orchestration Essentials',
  shortTitle: 'Kubernetes',
  provider: 'CNCF',
  level: 'Intermediate',
  gradient: 'from-blue-500 to-indigo-600',
  icon: '☸️',
  tagline: 'Run containers at scale',
  description:
    "A friendly, hands-on path into Kubernetes — the system that runs containers at scale so you do not have to babysit them. We start with why orchestration exists and cluster architecture, then walk through Pods and Deployments, networking and Services, config and storage, and finally scaling, health checks, and day-two operations. Real kubectl commands, real YAML, playful analogies, and a project that grows from one Pod to a self-healing, autoscaling app.",
  examFacts: [
    { label: 'Level', value: 'Intermediate' },
    { label: 'Format', value: 'Self-paced cards' },
    { label: 'Topics', value: '5 domains' },
    { label: 'Tool', value: 'kubectl & YAML' },
    { label: 'Prereq', value: 'Docker basics' },
  ],
  version: '1.0',
  lastUpdated: '2025-01-15',
  available: true,
  domains: [
    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 1 — Kubernetes Fundamentals
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd1',
      title: 'Kubernetes Fundamentals',
      emoji: '☸️',
      description:
        "Why orchestration exists, what Kubernetes actually does, how a cluster is put together, and how to talk to it with kubectl and declarative YAML.",
      project: {
        title: 'Spin Up a Cluster & Run Your First Pod',
        brief:
          "Install a local cluster with minikube or kind, then confirm it is alive with `kubectl get nodes`. Run a single Pod (`kubectl run web --image=nginx`), inspect it with `kubectl get pods` and `kubectl describe pod web`, and peek at what it serves via `kubectl port-forward`.",
        stretch:
          "Delete the Pod and watch it stay gone (a bare Pod has nobody to recreate it) — a preview of why Deployments matter next.",
      },
      chapters: [
        {
          id: 'd1c1',
          title: 'Why Kubernetes?',
          emoji: '🤔',
          description: "The problem orchestration solves and what Kubernetes gives you out of the box.",
          sections: [
            {
              id: 'd1c1s1',
              title: 'The Orchestration Problem',
              summary: "Containers are great — until you have hundreds of them across many machines.",
              cards: [
                {
                  id: 'd1c1s1-1',
                  kind: 'concept',
                  title: 'What Kubernetes Is',
                  emoji: '☸️',
                  body:
                    "**Kubernetes** (K8s) is a container **orchestrator**: it decides where your containers run, keeps the right number alive, restarts failures, and scales them up or down — all from a description of the state you want.\n\nYou tell it *what* you want (\"5 copies of my app\"); it figures out *how* to make that true and keeps it true.",
                  terms: [
                    { term: 'Orchestrator', definition: "Software that schedules, scales, and heals containers across many machines." },
                    { term: 'Desired state', definition: "The state you declare you want; Kubernetes works to match it." },
                    { term: 'K8s', definition: "Nickname for Kubernetes — K, then 8 letters, then s." },
                  ],
                },
                {
                  id: 'd1c1s1-2',
                  kind: 'analogy',
                  title: 'The Shipping Port',
                  emoji: '🚢',
                  body:
                    "Picture a busy shipping port. Containers arrive; the port decides which berth each one goes to, moves them when a crane breaks, and adds more cranes when traffic spikes.\n\nKubernetes is that port operator for software containers. You drop off containers; it handles placement, recovery, and traffic — you never manually assign a berth.",
                },
                {
                  id: 'd1c1s1-3',
                  kind: 'concept',
                  title: 'What You Get For Free',
                  emoji: '🎁',
                  body:
                    "Once your app runs on Kubernetes you inherit:\n\n- **Self-healing** — crashed containers are restarted, dead nodes drained.\n- **Scaling** — add or remove copies with one command or automatically.\n- **Rollouts & rollbacks** — ship new versions gradually, undo safely.\n- **Service discovery & load balancing** — a stable name and even traffic across copies.",
                },
                {
                  id: 'd1c1s1-4',
                  kind: 'tip',
                  title: "K8s Is Not Magic",
                  emoji: '⚠️',
                  body:
                    "Kubernetes does **not** build your image, write your app, or make a bad architecture good. It runs *containers* — you still need a working container image first.\n\nStart with Docker basics; Kubernetes takes over from where your image is built and ready to run.",
                },
                {
                  id: 'd1c1s1-5',
                  kind: 'diagram',
                  title: 'Declared vs Actual',
                  emoji: '🔁',
                  diagram: {
                    type: 'cycle',
                    nodes: [
                      { label: 'You declare desired state', emoji: '📝' },
                      { label: 'K8s observes actual state', emoji: '👀' },
                      { label: 'It reconciles the difference', emoji: '🛠️' },
                      { label: 'Actual matches desired', emoji: '✅' },
                    ],
                  },
                },
                {
                  id: 'd1c1s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '❓',
                  question: "What is the core job of Kubernetes?",
                  options: [
                    { id: 'a', text: "Build container images from source code", correct: false },
                    { id: 'b', text: "Keep the actual state of containers matching the desired state you declare", correct: true },
                    { id: 'c', text: "Replace the need for a container runtime", correct: false },
                    { id: 'd', text: "Write your application code for you", correct: false },
                  ],
                  explanation:
                    "Kubernetes is a reconciler: you declare a desired state and it continuously works to make reality match. It does not build images or write code.",
                },
              ],
            },
            {
              id: 'd1c1s2',
              title: 'Declarative Thinking',
              summary: "Why you describe outcomes instead of issuing step-by-step commands.",
              cards: [
                {
                  id: 'd1c1s2-1',
                  kind: 'concept',
                  title: 'Declarative vs Imperative',
                  emoji: '🗺️',
                  body:
                    "**Imperative** = a list of steps (\"start this, then that\"). **Declarative** = a description of the end result (\"there should be 3 replicas\").\n\nKubernetes prefers declarative: you write YAML describing what you want and apply it. The system figures out the steps and repeats them forever if something drifts.",
                  terms: [
                    { term: 'Imperative', definition: "Telling the system the exact steps to perform." },
                    { term: 'Declarative', definition: "Describing the desired outcome and letting the system reach it." },
                    { term: 'Reconciliation', definition: "The ongoing loop that drives actual state toward desired state." },
                  ],
                },
                {
                  id: 'd1c1s2-2',
                  kind: 'analogy',
                  title: 'GPS, Not Turn-by-Turn Notes',
                  emoji: '🧭',
                  body:
                    "Imperative is scribbling turn-by-turn notes: \"left, then right, then straight.\" Miss a turn and you are lost.\n\nDeclarative is typing a destination into GPS. If you take a wrong turn, it just re-routes. Kubernetes is GPS: you give it the destination (desired state) and it keeps re-routing you there.",
                },
                {
                  id: 'd1c1s2-3',
                  kind: 'example',
                  title: 'kubectl apply in Action',
                  emoji: '⌨️',
                  body:
                    "You keep your desired state in a file and apply it:\n\n`kubectl apply -f app.yaml`\n\nChange the file, run the same command again, and Kubernetes computes the diff and applies only what changed. The file is the source of truth — great for version control.",
                },
                {
                  id: 'd1c1s2-4',
                  kind: 'tip',
                  title: "Prefer apply Over Ad-Hoc Commands",
                  emoji: '💡',
                  body:
                    "Imperative commands like `kubectl run` and `kubectl create` are handy for learning, but for real work keep everything in YAML and use `kubectl apply`.\n\nThat way your cluster state lives in Git, is reviewable, and can be recreated anywhere. Ad-hoc changes get lost and cause \"works on my cluster\" surprises.",
                },
                {
                  id: 'd1c1s2-5',
                  kind: 'diagram',
                  title: 'Two Ways to Drive',
                  emoji: '⚖️',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Imperative', emoji: '📋', items: ['kubectl run / create', 'Step-by-step', 'Fast for one-offs', 'Hard to reproduce'] },
                      { title: 'Declarative', emoji: '📄', items: ['kubectl apply -f', 'Describe end state', 'Version-controlled', 'Repeatable & reviewable'] },
                    ],
                  },
                },
                {
                  id: 'd1c1s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '❓',
                  question: "Which command applies a declarative manifest and only changes what differs?",
                  options: [
                    { id: 'a', text: "kubectl run app --image=nginx", correct: false },
                    { id: 'b', text: "kubectl apply -f app.yaml", correct: true },
                    { id: 'c', text: "kubectl delete pod app", correct: false },
                    { id: 'd', text: "kubectl exec app -- bash", correct: false },
                  ],
                  explanation:
                    "`kubectl apply -f` is the declarative workhorse: it compares your manifest to the cluster and applies only the differences.",
                },
              ],
            },
          ],
        },
        {
          id: 'd1c2',
          title: 'Cluster Architecture',
          emoji: '🏛️',
          description: "The parts of a cluster: the brain (control plane) and the muscle (worker nodes).",
          sections: [
            {
              id: 'd1c2s1',
              title: 'The Control Plane',
              summary: "The brain that makes global decisions about the cluster.",
              cards: [
                {
                  id: 'd1c2s1-1',
                  kind: 'concept',
                  title: 'Control Plane Components',
                  emoji: '🧠',
                  body:
                    "The **control plane** runs the cluster's brain:\n\n- **API server** — the front door; everything talks to it.\n- **etcd** — the cluster's database, storing all state.\n- **Scheduler** — decides which node each Pod runs on.\n- **Controller manager** — runs reconciliation loops that keep desired state true.",
                  terms: [
                    { term: 'API server', definition: "The central endpoint all components and users communicate through." },
                    { term: 'etcd', definition: "A consistent key-value store holding the entire cluster state." },
                    { term: 'Scheduler', definition: "Assigns Pods to suitable worker nodes." },
                    { term: 'Controller manager', definition: "Runs the loops that reconcile actual state to desired state." },
                  ],
                },
                {
                  id: 'd1c2s1-2',
                  kind: 'analogy',
                  title: 'The Orchestra Conductor',
                  emoji: '🎼',
                  body:
                    "The control plane is the conductor of an orchestra. It never plays an instrument itself — it reads the score (etcd), signals who plays when (scheduler), and keeps everyone in time (controllers).\n\nThe musicians (worker nodes) make the actual sound. Silence the conductor and the music drifts out of sync.",
                },
                {
                  id: 'd1c2s1-3',
                  kind: 'concept',
                  title: 'etcd: The Single Source of Truth',
                  emoji: '💾',
                  body:
                    "**etcd** stores every object in your cluster — Pods, Deployments, Secrets, everything. When you run `kubectl get pods`, the API server is really reading from etcd.\n\nBecause it is the source of truth, etcd is precious: losing it means losing your cluster's memory. Production clusters back it up and run it with multiple replicas.",
                },
                {
                  id: 'd1c2s1-4',
                  kind: 'tip',
                  title: "Everything Goes Through the API Server",
                  emoji: '🚪',
                  body:
                    "No component talks to etcd directly except the API server. kubectl, the scheduler, the kubelet — all go through the API server.\n\nThat single front door is why authentication, authorization, and audit logging all live there. If the API server is down, you cannot change anything (though running Pods keep running).",
                },
                {
                  id: 'd1c2s1-5',
                  kind: 'diagram',
                  title: 'Control Plane Pieces',
                  emoji: '🧩',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'API server', sublabel: 'front door', emoji: '🚪' },
                      { label: 'etcd', sublabel: 'state store', emoji: '💾' },
                      { label: 'Scheduler', sublabel: 'placement', emoji: '📍' },
                      { label: 'Controllers', sublabel: 'reconcile', emoji: '🔁' },
                    ],
                  },
                },
                {
                  id: 'd1c2s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '❓',
                  question: "Which control-plane component stores the entire cluster state?",
                  options: [
                    { id: 'a', text: "The scheduler", correct: false },
                    { id: 'b', text: "etcd", correct: true },
                    { id: 'c', text: "kube-proxy", correct: false },
                    { id: 'd', text: "The kubelet", correct: false },
                  ],
                  explanation:
                    "etcd is the consistent key-value store that holds all cluster objects. The scheduler places Pods; kube-proxy and kubelet run on worker nodes.",
                },
              ],
            },
            {
              id: 'd1c2s2',
              title: 'Worker Nodes',
              summary: "Where your containers actually run.",
              cards: [
                {
                  id: 'd1c2s2-1',
                  kind: 'concept',
                  title: 'What a Node Does',
                  emoji: '💪',
                  body:
                    "A **node** is a machine (VM or physical) that runs your workloads. Each node runs three things:\n\n- **kubelet** — the agent that starts/stops containers and reports health.\n- **kube-proxy** — programs networking rules so Services work.\n- **container runtime** — the software (e.g. containerd) that actually runs containers.",
                  terms: [
                    { term: 'Node', definition: "A worker machine in the cluster that runs Pods." },
                    { term: 'kubelet', definition: "The per-node agent that manages Pods and talks to the API server." },
                    { term: 'kube-proxy', definition: "Maintains network rules on nodes to route Service traffic." },
                    { term: 'Container runtime', definition: "The engine (e.g. containerd) that runs containers on a node." },
                  ],
                },
                {
                  id: 'd1c2s2-2',
                  kind: 'analogy',
                  title: 'Musicians in the Orchestra',
                  emoji: '🎻',
                  body:
                    "If the control plane is the conductor, worker nodes are the musicians. Each has a section leader (kubelet) who reads the conductor's cues and makes sure their players (containers) perform on time.\n\nThey do the real work of producing sound; the conductor just coordinates.",
                },
                {
                  id: 'd1c2s2-3',
                  kind: 'example',
                  title: 'Inspecting Your Nodes',
                  emoji: '⌨️',
                  body:
                    "See the machines in your cluster:\n\n`kubectl get nodes`\n\nGet the gory details of one:\n\n`kubectl describe node minikube`\n\nThis shows capacity (CPU/memory), which Pods are scheduled there, and any conditions like `MemoryPressure`.",
                },
                {
                  id: 'd1c2s2-4',
                  kind: 'tip',
                  title: "kubelet Restarts, It Does Not Reschedule",
                  emoji: '💡',
                  body:
                    "The kubelet restarts crashed containers on *its own* node. But if a whole node dies, the kubelet cannot help — a controller on the control plane notices and reschedules those Pods onto healthy nodes.\n\nSelf-healing is a team effort: kubelet for containers, controllers for nodes.",
                },
                {
                  id: 'd1c2s2-5',
                  kind: 'diagram',
                  title: 'Cluster Layers',
                  emoji: '🗂️',
                  diagram: {
                    type: 'stack',
                    nodes: [
                      { label: 'Cluster', sublabel: 'the whole system', emoji: '☸️' },
                      { label: 'Node', sublabel: 'a worker machine', emoji: '🖥️' },
                      { label: 'Pod', sublabel: 'smallest unit', emoji: '📦' },
                      { label: 'Container', sublabel: 'your app', emoji: '📥' },
                    ],
                  },
                },
                {
                  id: 'd1c2s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '❓',
                  question: "Which node component actually starts and monitors containers?",
                  options: [
                    { id: 'a', text: "kube-proxy", correct: false },
                    { id: 'b', text: "The scheduler", correct: false },
                    { id: 'c', text: "kubelet", correct: true },
                    { id: 'd', text: "etcd", correct: false },
                  ],
                  explanation:
                    "The kubelet is the node agent that manages containers and reports their health. kube-proxy handles networking; the scheduler and etcd live on the control plane.",
                },
              ],
            },
            {
              id: 'd1c2s3',
              title: 'Talking to the Cluster',
              summary: "kubectl basics and the anatomy of a manifest.",
              cards: [
                {
                  id: 'd1c2s3-1',
                  kind: 'concept',
                  title: 'kubectl, Your Remote Control',
                  emoji: '🎮',
                  body:
                    "**kubectl** is the command-line client for the API server. The pattern is almost always:\n\n`kubectl <verb> <resource> [name] [flags]`\n\nCommon verbs: `get`, `describe`, `apply`, `delete`, `logs`, `exec`. Common resources: `pods`, `deployments`, `services`, `nodes`.",
                  terms: [
                    { term: 'kubectl', definition: "The CLI tool used to send commands to the Kubernetes API server." },
                    { term: 'Resource', definition: "A type of object such as pod, deployment, or service." },
                    { term: 'Verb', definition: "The action taken on a resource, e.g. get or apply." },
                  ],
                },
                {
                  id: 'd1c2s3-2',
                  kind: 'example',
                  title: 'Everyday kubectl',
                  emoji: '⌨️',
                  body:
                    "A quick tour:\n\n`kubectl get pods` — list Pods\n`kubectl get pods -o wide` — include node & IP\n`kubectl get all` — a broad overview\n`kubectl describe pod web` — deep detail & events\n`kubectl delete pod web` — remove a Pod\n\nAdd `-n <namespace>` to target a namespace, or `-A` for all namespaces.",
                },
                {
                  id: 'd1c2s3-3',
                  kind: 'example',
                  title: 'Anatomy of a Manifest',
                  emoji: '📄',
                  body:
                    "Every object shares four top-level fields:\n\n`apiVersion: v1`\n`kind: Pod`\n`metadata:`\n`  name: web`\n`spec:`\n`  containers:`\n`  - name: web`\n`    image: nginx`\n\n`apiVersion` + `kind` say *what*; `metadata` names it; `spec` describes the desired state.",
                },
                {
                  id: 'd1c2s3-4',
                  kind: 'tip',
                  title: "Let kubectl Write YAML For You",
                  emoji: '💡',
                  body:
                    "Do not memorize YAML — generate it. Use `--dry-run=client -o yaml` to print a manifest without creating anything:\n\n`kubectl create deployment web --image=nginx --dry-run=client -o yaml > web.yaml`\n\nEdit the file, then `kubectl apply -f web.yaml`. Fast, correct scaffolding every time.",
                },
                {
                  id: 'd1c2s3-5',
                  kind: 'diagram',
                  title: 'How apply Reaches a Running Pod',
                  emoji: '🔄',
                  diagram: {
                    type: 'flow',
                    direction: 'vertical',
                    nodes: [
                      { label: 'kubectl apply -f', emoji: '⌨️' },
                      { label: 'API server stores it in etcd', emoji: '🚪' },
                      { label: 'Scheduler picks a node', emoji: '📍' },
                      { label: 'kubelet pulls image & runs it', emoji: '💪' },
                      { label: 'Pod is Running', emoji: '✅' },
                    ],
                  },
                },
                {
                  id: 'd1c2s3-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '❓',
                  question: "Which two fields tell Kubernetes what kind of object a manifest describes?",
                  options: [
                    { id: 'a', text: "metadata and spec", correct: false },
                    { id: 'b', text: "apiVersion and kind", correct: true },
                    { id: 'c', text: "name and labels", correct: false },
                    { id: 'd', text: "spec and status", correct: false },
                  ],
                  explanation:
                    "`apiVersion` and `kind` identify the object type. `metadata` names it and `spec` describes the desired state.",
                },
                {
                  id: 'd1c2s3-7',
                  kind: 'qa',
                  title: 'Interview: Cluster Overview',
                  emoji: '🎤',
                  question: "Walk me through what happens when you run kubectl apply for a new Pod.",
                  body:
                    "kubectl sends the manifest to the **API server**, which validates it and writes it to **etcd**. The **scheduler** notices an unscheduled Pod and picks a suitable node. The **kubelet** on that node sees the assignment, tells the **container runtime** to pull the image and start the container, then reports status back to the API server, which updates etcd. `kubectl get pod` then shows it as Running.",
                  followUps: [
                    "Who reschedules Pods if a node dies?",
                    "What is stored in etcd versus computed on the fly?",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 2 — Pods & Workloads
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd2',
      title: 'Pods & Workloads',
      emoji: '📦',
      description:
        "The smallest unit (Pods), why you rarely run them directly, and the controllers — ReplicaSets, Deployments, DaemonSets, Jobs — that manage them.",
      project: {
        title: 'From Pod to Scalable Deployment',
        brief:
          "Rewrite your first Pod as a **Deployment** manifest, apply it, then scale to 3 replicas with `kubectl scale deployment web --replicas=3`. Ship a new image version and watch the rolling update with `kubectl rollout status`, then practice `kubectl rollout undo`.",
        buildsOn:
          "Takes the single Pod from Domain 1 and wraps it in a Deployment so it can scale and self-heal.",
        stretch:
          "Add labels and use `kubectl get pods -l app=web` to select just your app's Pods.",
      },
      chapters: [
        {
          id: 'd2c1',
          title: 'Pods & Labels',
          emoji: '📦',
          description: "The atom of Kubernetes and how you organize and find things.",
          sections: [
            {
              id: 'd2c1s1',
              title: 'Understanding Pods',
              summary: "What a Pod is and why it is the smallest deployable unit.",
              cards: [
                {
                  id: 'd2c1s1-1',
                  kind: 'concept',
                  title: 'What Is a Pod?',
                  emoji: '📦',
                  body:
                    "A **Pod** is the smallest thing Kubernetes runs. It wraps one (usually) or a few tightly-coupled containers that share a network address and storage.\n\nContainers in a Pod are always scheduled together on the same node and can reach each other on `localhost`. You scale by adding *Pods*, not containers.",
                  terms: [
                    { term: 'Pod', definition: "The smallest deployable unit; one or more containers sharing network and storage." },
                    { term: 'Sidecar', definition: "A helper container in the same Pod, e.g. a log shipper." },
                    { term: 'localhost sharing', definition: "Containers in a Pod share one IP and can talk over localhost." },
                  ],
                },
                {
                  id: 'd2c1s1-2',
                  kind: 'analogy',
                  title: 'A Pod Is a Logical Host',
                  emoji: '🏠',
                  body:
                    "Think of a Pod as one little logical host — like a tiny VM shared by roommates (containers). They share the same address (IP), the same phone line (localhost), and the same fridge (volumes).\n\nBecause they cohabit, they are always moved together. A sidecar container is just a helpful roommate.",
                },
                {
                  id: 'd2c1s1-3',
                  kind: 'example',
                  title: 'A Minimal Pod Manifest',
                  emoji: '📄',
                  body:
                    "`apiVersion: v1`\n`kind: Pod`\n`metadata:`\n`  name: web`\n`  labels:`\n`    app: web`\n`spec:`\n`  containers:`\n`  - name: web`\n`    image: nginx:1.27`\n`    ports:`\n`    - containerPort: 80`\n\nApply with `kubectl apply -f pod.yaml`, then `kubectl get pods`.",
                },
                {
                  id: 'd2c1s1-4',
                  kind: 'tip',
                  title: "Do Not Run Bare Pods in Production",
                  emoji: '⚠️',
                  body:
                    "A standalone Pod has nobody watching it. If it crashes or its node dies, it is gone — not recreated.\n\nAlways manage Pods through a controller (usually a **Deployment**). Bare Pods are fine for quick experiments only. This is the single most common beginner mistake.",
                },
                {
                  id: 'd2c1s1-5',
                  kind: 'diagram',
                  title: 'Inside a Pod',
                  emoji: '🔍',
                  diagram: {
                    type: 'stack',
                    nodes: [
                      { label: 'Pod', sublabel: 'shared IP + volumes', emoji: '📦' },
                      { label: 'App container', sublabel: 'main workload', emoji: '📥' },
                      { label: 'Sidecar container', sublabel: 'optional helper', emoji: '🚗' },
                    ],
                  },
                },
                {
                  id: 'd2c1s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '❓',
                  question: "Why should you avoid running standalone Pods directly?",
                  options: [
                    { id: 'a', text: "Pods cannot hold containers", correct: false },
                    { id: 'b', text: "Nothing recreates a bare Pod if it dies", correct: true },
                    { id: 'c', text: "Pods are slower than Deployments", correct: false },
                    { id: 'd', text: "Pods cannot have labels", correct: false },
                  ],
                  explanation:
                    "A bare Pod has no controller supervising it, so a crash or node failure means it stays gone. Deployments recreate Pods automatically.",
                },
              ],
            },
            {
              id: 'd2c1s2',
              title: 'Labels, Selectors & Namespaces',
              summary: "How Kubernetes tags, finds, and isolates objects.",
              cards: [
                {
                  id: 'd2c1s2-1',
                  kind: 'concept',
                  title: 'Labels & Selectors',
                  emoji: '🏷️',
                  body:
                    "**Labels** are key/value tags on objects (`app: web`, `env: prod`). **Selectors** query them. Deployments and Services use selectors to find the Pods they manage or route to.\n\nLabels are the glue of Kubernetes: nothing is connected by name, everything by matching labels.",
                  terms: [
                    { term: 'Label', definition: "A key/value pair attached to an object for identification." },
                    { term: 'Selector', definition: "A query that matches objects by their labels." },
                    { term: 'Namespace', definition: "A virtual cluster used to isolate and group resources." },
                  ],
                },
                {
                  id: 'd2c1s2-2',
                  kind: 'analogy',
                  title: 'Sticky Notes on Boxes',
                  emoji: '🗒️',
                  body:
                    "Labels are colored sticky notes on moving boxes. A selector is you shouting \"grab everything with a blue note!\" You do not care which box is which — you grab by tag.\n\nNamespaces are the different rooms the boxes live in, so \"kitchen\" and \"garage\" stuff never gets mixed up.",
                },
                {
                  id: 'd2c1s2-3',
                  kind: 'example',
                  title: 'Selecting by Label',
                  emoji: '⌨️',
                  body:
                    "List only Pods tagged `app=web`:\n\n`kubectl get pods -l app=web`\n\nCombine selectors:\n\n`kubectl get pods -l app=web,env=prod`\n\nAdd a label on the fly:\n\n`kubectl label pod web tier=frontend`",
                },
                {
                  id: 'd2c1s2-4',
                  kind: 'example',
                  title: 'Working with Namespaces',
                  emoji: '🗂️',
                  body:
                    "Create and use a namespace:\n\n`kubectl create namespace dev`\n`kubectl get pods -n dev`\n`kubectl apply -f app.yaml -n dev`\n\nSet a default so you stop typing `-n`:\n\n`kubectl config set-context --current --namespace=dev`",
                },
                {
                  id: 'd2c1s2-5',
                  kind: 'tip',
                  title: "Selectors Are Immutable on Deployments",
                  emoji: '💡',
                  body:
                    "A Deployment's `spec.selector` cannot be changed after creation. Pick your labels carefully up front.\n\nAlso: the selector must match the Pod template's labels, or Kubernetes rejects the manifest. Keeping `app: web` consistent across selector and template avoids a very common error.",
                },
                {
                  id: 'd2c1s2-6',
                  kind: 'diagram',
                  title: 'Selector Matches Pods',
                  emoji: '🔗',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'Selector app=web', emoji: '🔎' },
                      { label: 'Matches labeled Pods', emoji: '🏷️' },
                      { label: 'Controller/Service acts on them', emoji: '🎯' },
                    ],
                  },
                },
                {
                  id: 'd2c1s2-7',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '❓',
                  question: "How do Services and Deployments know which Pods belong to them?",
                  options: [
                    { id: 'a', text: "By Pod name", correct: false },
                    { id: 'b', text: "By matching label selectors", correct: true },
                    { id: 'c', text: "By the node they run on", correct: false },
                    { id: 'd', text: "By creation timestamp", correct: false },
                  ],
                  explanation:
                    "Kubernetes wires objects together through label selectors, not names. A Service routes to any Pod whose labels match its selector.",
                },
              ],
            },
          ],
        },
        {
          id: 'd2c2',
          title: 'Deployments & ReplicaSets',
          emoji: '🚀',
          description: "The workhorse controllers for stateless apps: keeping replicas alive and rolling out changes.",
          sections: [
            {
              id: 'd2c2s1',
              title: 'ReplicaSets & Deployments',
              summary: "The controllers that keep the right number of Pods running.",
              cards: [
                {
                  id: 'd2c2s1-1',
                  kind: 'concept',
                  title: 'ReplicaSet: Keep N Copies',
                  emoji: '👥',
                  body:
                    "A **ReplicaSet** ensures a specified number of identical Pods are always running. If one dies, it creates a replacement; if there are too many, it deletes extras.\n\nYou rarely create ReplicaSets by hand — a **Deployment** creates and manages them for you, adding rollout superpowers on top.",
                  terms: [
                    { term: 'ReplicaSet', definition: "A controller that maintains a stable set of replica Pods." },
                    { term: 'Deployment', definition: "A higher-level controller that manages ReplicaSets and enables rollouts." },
                    { term: 'Replica', definition: "One running copy of a Pod." },
                  ],
                },
                {
                  id: 'd2c2s1-2',
                  kind: 'analogy',
                  title: 'A Thermostat for Pods',
                  emoji: '🌡️',
                  body:
                    "A ReplicaSet is a thermostat. You set it to \"3 replicas.\" If a Pod dies (temperature drops), it turns on the heat and creates one. If somehow there are 4, it cools down and removes one.\n\nIt never stops watching — that constant nudging toward your setpoint is self-healing in action.",
                },
                {
                  id: 'd2c2s1-3',
                  kind: 'example',
                  title: 'A Deployment Manifest',
                  emoji: '📄',
                  body:
                    "`apiVersion: apps/v1`\n`kind: Deployment`\n`metadata:`\n`  name: web`\n`spec:`\n`  replicas: 3`\n`  selector:`\n`    matchLabels: { app: web }`\n`  template:`\n`    metadata:`\n`      labels: { app: web }`\n`    spec:`\n`      containers:`\n`      - name: web`\n`        image: nginx:1.27`\n\nApply it and you get a ReplicaSet plus 3 Pods.",
                },
                {
                  id: 'd2c2s1-4',
                  kind: 'example',
                  title: 'Scaling a Deployment',
                  emoji: '⌨️',
                  body:
                    "Scale on the fly:\n\n`kubectl scale deployment web --replicas=5`\n\nOr edit `replicas` in the YAML and re-apply. Watch it happen:\n\n`kubectl get pods -l app=web -w`\n\nThe `-w` flag streams changes as new Pods appear.",
                },
                {
                  id: 'd2c2s1-5',
                  kind: 'tip',
                  title: "Deployment, Not ReplicaSet",
                  emoji: '💡',
                  body:
                    "You almost never create a ReplicaSet directly. The Deployment manages ReplicaSets for you and adds versioned rollouts and rollbacks.\n\nRule of thumb: stateless app? Use a **Deployment**. It gives you everything a ReplicaSet does, plus safe upgrades.",
                },
                {
                  id: 'd2c2s1-6',
                  kind: 'diagram',
                  title: 'The Ownership Chain',
                  emoji: '🔗',
                  diagram: {
                    type: 'stack',
                    nodes: [
                      { label: 'Deployment', sublabel: 'manages rollouts', emoji: '🚀' },
                      { label: 'ReplicaSet', sublabel: 'keeps N Pods', emoji: '👥' },
                      { label: 'Pod', sublabel: 'runs container', emoji: '📦' },
                    ],
                  },
                },
                {
                  id: 'd2c2s1-7',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '❓',
                  question: "What does a Deployment add on top of a ReplicaSet?",
                  options: [
                    { id: 'a', text: "The ability to run containers", correct: false },
                    { id: 'b', text: "Versioned rolling updates and rollbacks", correct: true },
                    { id: 'c', text: "Network routing to Pods", correct: false },
                    { id: 'd', text: "Persistent storage", correct: false },
                  ],
                  explanation:
                    "A ReplicaSet only keeps N Pods running. A Deployment manages ReplicaSets and layers on rollout history, rolling updates, and rollbacks.",
                },
              ],
            },
            {
              id: 'd2c2s2',
              title: 'Rolling Updates & Rollbacks',
              summary: "Shipping new versions with zero downtime — and undoing mistakes.",
              cards: [
                {
                  id: 'd2c2s2-1',
                  kind: 'concept',
                  title: 'How Rolling Updates Work',
                  emoji: '🎢',
                  body:
                    "When you change a Deployment's image, it creates a **new ReplicaSet** and shifts Pods over gradually: spin up new Pods, wait for them to be ready, then retire old ones. Traffic keeps flowing the whole time.\n\nIf something breaks, the old ReplicaSet is still there — you can roll back instantly.",
                  terms: [
                    { term: 'Rolling update', definition: "Gradually replacing old Pods with new ones to avoid downtime." },
                    { term: 'Rollout', definition: "A single versioned change to a Deployment." },
                    { term: 'Rollback', definition: "Reverting a Deployment to a previous working revision." },
                  ],
                },
                {
                  id: 'd2c2s2-2',
                  kind: 'analogy',
                  title: 'Replacing Tires While Driving',
                  emoji: '🏎️',
                  body:
                    "A rolling update is a pit crew swapping tires one at a time while the car keeps moving. Never are all four off at once — there is always enough rubber on the road.\n\nBad tire? The crew still has the old ones ready to slap back on. That is your rollback.",
                },
                {
                  id: 'd2c2s2-3',
                  kind: 'example',
                  title: 'Update and Watch',
                  emoji: '⌨️',
                  body:
                    "Change the image:\n\n`kubectl set image deployment/web web=nginx:1.27.1`\n\nWatch the rollout:\n\n`kubectl rollout status deployment/web`\n\nSee the history of revisions:\n\n`kubectl rollout history deployment/web`",
                },
                {
                  id: 'd2c2s2-4',
                  kind: 'example',
                  title: 'Rolling Back',
                  emoji: '↩️',
                  body:
                    "Undo the last rollout:\n\n`kubectl rollout undo deployment/web`\n\nOr target a specific revision:\n\n`kubectl rollout undo deployment/web --to-revision=2`\n\nBecause old ReplicaSets stick around, rollback is near-instant — no rebuild needed.",
                },
                {
                  id: 'd2c2s2-5',
                  kind: 'tip',
                  title: "Never Use the latest Tag",
                  emoji: '⚠️',
                  body:
                    "Tag images with a real version (`nginx:1.27.1`), not `latest`. With `latest`, two Pods might silently run different builds, and rollbacks become meaningless because the tag still points \"forward.\"\n\nPin versions so rollouts and rollbacks are deterministic.",
                },
                {
                  id: 'd2c2s2-6',
                  kind: 'diagram',
                  title: 'The Rollout Loop',
                  emoji: '🔁',
                  diagram: {
                    type: 'cycle',
                    nodes: [
                      { label: 'Start a new Pod (v2)', emoji: '🆕' },
                      { label: 'Wait until it is Ready', emoji: '⏳' },
                      { label: 'Retire an old Pod (v1)', emoji: '👋' },
                      { label: 'Repeat until fully migrated', emoji: '🔁' },
                    ],
                  },
                },
                {
                  id: 'd2c2s2-7',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '❓',
                  question: "Why can you roll back a Deployment almost instantly?",
                  options: [
                    { id: 'a', text: "Kubernetes rebuilds the old image from cache", correct: false },
                    { id: 'b', text: "The previous ReplicaSet is kept and can be scaled back up", correct: true },
                    { id: 'c', text: "etcd snapshots every container", correct: false },
                    { id: 'd', text: "The scheduler reverses time", correct: false },
                  ],
                  explanation:
                    "A Deployment keeps prior ReplicaSets. Rolling back just scales the old ReplicaSet up and the new one down — no image rebuild required.",
                },
              ],
            },
            {
              id: 'd2c2s3',
              title: 'Other Workload Types',
              summary: "DaemonSets, Jobs, and CronJobs at a glance.",
              cards: [
                {
                  id: 'd2c2s3-1',
                  kind: 'concept',
                  title: 'DaemonSets',
                  emoji: '🛰️',
                  body:
                    "A **DaemonSet** runs exactly one Pod on every node (or a subset). As nodes join the cluster, they automatically get the Pod; as nodes leave, the Pod goes with them.\n\nPerfect for per-node agents: log collectors, monitoring agents, network plugins.",
                  terms: [
                    { term: 'DaemonSet', definition: "Ensures a copy of a Pod runs on every (or selected) node." },
                    { term: 'Node agent', definition: "A per-node helper such as a log or metrics collector." },
                  ],
                },
                {
                  id: 'd2c2s3-2',
                  kind: 'concept',
                  title: 'Jobs & CronJobs',
                  emoji: '⏰',
                  body:
                    "A **Job** runs a Pod to completion — for a task that finishes, like a data migration. Kubernetes tracks success and can retry failures.\n\nA **CronJob** creates Jobs on a schedule (cron syntax), e.g. a nightly backup at `0 2 * * *`.",
                  terms: [
                    { term: 'Job', definition: "Runs one or more Pods until a task completes successfully." },
                    { term: 'CronJob', definition: "Creates Jobs on a repeating time schedule." },
                  ],
                },
                {
                  id: 'd2c2s3-3',
                  kind: 'example',
                  title: 'A CronJob Manifest',
                  emoji: '📄',
                  body:
                    "`apiVersion: batch/v1`\n`kind: CronJob`\n`metadata:`\n`  name: backup`\n`spec:`\n`  schedule: \"0 2 * * *\"`\n`  jobTemplate:`\n`    spec:`\n`      template:`\n`        spec:`\n`          restartPolicy: OnFailure`\n`          containers:`\n`          - name: backup`\n`            image: my-backup:1.0`\n\nRuns every night at 2am.",
                },
                {
                  id: 'd2c2s3-4',
                  kind: 'compare',
                  title: 'Picking a Workload Type',
                  emoji: '🧭',
                  compare: {
                    headers: ['Need', 'Use'],
                    rows: [
                      ['Long-running stateless app', 'Deployment'],
                      ['One Pod per node', 'DaemonSet'],
                      ['Run once until done', 'Job'],
                      ['Run on a schedule', 'CronJob'],
                      ['Stable identity + storage', 'StatefulSet'],
                    ],
                  },
                },
                {
                  id: 'd2c2s3-5',
                  kind: 'diagram',
                  title: 'Workload Controllers',
                  emoji: '🗂️',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Deployment', emoji: '🚀', items: ['Stateless apps', 'Scales & rolls out'] },
                      { title: 'DaemonSet', emoji: '🛰️', items: ['One per node', 'Agents & plugins'] },
                      { title: 'Job / CronJob', emoji: '⏰', items: ['Run to completion', 'Batch & scheduled'] },
                    ],
                  },
                },
                {
                  id: 'd2c2s3-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '❓',
                  question: "Which workload type runs one Pod on every node?",
                  options: [
                    { id: 'a', text: "Deployment", correct: false },
                    { id: 'b', text: "Job", correct: false },
                    { id: 'c', text: "DaemonSet", correct: true },
                    { id: 'd', text: "CronJob", correct: false },
                  ],
                  explanation:
                    "A DaemonSet places one Pod on each node, ideal for per-node agents like log collectors. Deployments manage a pool of interchangeable Pods.",
                },
              ],
            },
          ],
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 3 — Networking & Services
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd3',
      title: 'Networking & Services',
      emoji: '🔌',
      description:
        "How Pods talk to each other, how Services give them a stable address, and how Ingress exposes apps to the outside world.",
      project: {
        title: 'Expose Your App with a Service & Ingress',
        brief:
          "Put a **Service** in front of your 3-replica Deployment (`kubectl expose deployment web --port=80 --type=ClusterIP`) and reach it from another Pod by DNS name. Then switch to NodePort or run `minikube service web` to hit it from your browser, and finally add an **Ingress** route so `/` maps to your app.",
        buildsOn:
          "Takes the scaled Deployment from Domain 2 and makes it reachable with a stable name and an Ingress route.",
        stretch:
          "Add a second Deployment and route `/api` to it through the same Ingress.",
      },
      chapters: [
        {
          id: 'd3c1',
          title: 'Pods, Services & Discovery',
          emoji: '🌐',
          description: "The Pod network model and the Services that make ephemeral Pods addressable.",
          sections: [
            {
              id: 'd3c1s1',
              title: 'The Pod Networking Model',
              summary: "Every Pod gets its own IP — and why that IP is not enough.",
              cards: [
                {
                  id: 'd3c1s1-1',
                  kind: 'concept',
                  title: 'Flat Pod Networking',
                  emoji: '🌐',
                  body:
                    "In Kubernetes, **every Pod gets its own IP** and can reach every other Pod directly, no NAT, across all nodes. It is one big flat network.\n\nThe catch: Pod IPs are **ephemeral**. A Pod that restarts or reschedules gets a new IP, so you cannot hardcode them.",
                  terms: [
                    { term: 'Pod IP', definition: "A unique, ephemeral IP address assigned to each Pod." },
                    { term: 'Flat network', definition: "Every Pod can reach every other Pod directly without NAT." },
                    { term: 'CNI', definition: "The plugin standard that wires up Pod networking." },
                  ],
                },
                {
                  id: 'd3c1s1-2',
                  kind: 'analogy',
                  title: 'Hotel Rooms with Changing Numbers',
                  emoji: '🏨',
                  body:
                    "Each Pod is a hotel room with its own phone number (IP). Fine — until the guest checks out and a new room opens with a *different* number.\n\nYou would never print a specific room number on your business card. You would print the front desk's number (a Service) and let them transfer you.",
                },
                {
                  id: 'd3c1s1-3',
                  kind: 'tip',
                  title: "Never Hardcode a Pod IP",
                  emoji: '⚠️',
                  body:
                    "Because Pod IPs change on every restart, hardcoding one is a guaranteed future outage.\n\nAlways talk to a **Service** name instead. The Service provides a stable virtual IP and DNS name that survives Pod churn.",
                },
                {
                  id: 'd3c1s1-4',
                  kind: 'diagram',
                  title: 'Pods on the Flat Network',
                  emoji: '🕸️',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'Pod A (10.1.0.5)', emoji: '📦' },
                      { label: 'Direct, no NAT', emoji: '↔️' },
                      { label: 'Pod B (10.1.2.9)', emoji: '📦' },
                    ],
                  },
                },
                {
                  id: 'd3c1s1-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '❓',
                  question: "Why should you not connect to a Pod by its IP address?",
                  options: [
                    { id: 'a', text: "Pod IPs are blocked by firewalls", correct: false },
                    { id: 'b', text: "Pod IPs are ephemeral and change when Pods restart", correct: true },
                    { id: 'c', text: "Pods do not have IP addresses", correct: false },
                    { id: 'd', text: "Only the API server can see Pod IPs", correct: false },
                  ],
                  explanation:
                    "Each Pod has an IP, but it is ephemeral — a restart or reschedule assigns a new one. Use a Service for a stable address.",
                },
              ],
            },
            {
              id: 'd3c1s2',
              title: 'Services & Types',
              summary: "A stable front for a shifting set of Pods.",
              cards: [
                {
                  id: 'd3c1s2-1',
                  kind: 'concept',
                  title: 'What a Service Does',
                  emoji: '🎯',
                  body:
                    "A **Service** gives a set of Pods a single, stable virtual IP and DNS name, and load-balances requests across them. It finds its Pods by **label selector**, so as Pods come and go the Service just keeps working.\n\nThink of it as a stable doorway to a changing group of Pods.",
                  terms: [
                    { term: 'Service', definition: "A stable network endpoint that load-balances to a set of Pods." },
                    { term: 'ClusterIP', definition: "A virtual IP reachable only inside the cluster." },
                    { term: 'Endpoints', definition: "The current set of Pod IPs a Service routes to." },
                  ],
                },
                {
                  id: 'd3c1s2-2',
                  kind: 'concept',
                  title: 'The Three Service Types',
                  emoji: '🚦',
                  body:
                    "- **ClusterIP** (default) — reachable only inside the cluster.\n- **NodePort** — opens a port on every node so you can reach it from outside.\n- **LoadBalancer** — asks the cloud for an external load balancer with a public IP.\n\nEach type builds on the one before it.",
                },
                {
                  id: 'd3c1s2-3',
                  kind: 'example',
                  title: 'Exposing a Deployment',
                  emoji: '⌨️',
                  body:
                    "Quick way:\n\n`kubectl expose deployment web --port=80 --target-port=80 --type=ClusterIP`\n\nOr in YAML:\n\n`apiVersion: v1`\n`kind: Service`\n`metadata: { name: web }`\n`spec:`\n`  selector: { app: web }`\n`  ports:`\n`  - port: 80`\n`    targetPort: 80`",
                },
                {
                  id: 'd3c1s2-4',
                  kind: 'compare',
                  title: 'ClusterIP vs NodePort vs LoadBalancer',
                  emoji: '⚖️',
                  compare: {
                    headers: ['Type', 'Reachable from', 'Typical use'],
                    rows: [
                      ['ClusterIP', 'Inside cluster only', 'Service-to-service calls'],
                      ['NodePort', 'Any node IP + port', 'Dev / on-prem access'],
                      ['LoadBalancer', 'Public internet', 'Production cloud entry'],
                    ],
                  },
                },
                {
                  id: 'd3c1s2-5',
                  kind: 'diagram',
                  title: 'Layered Service Types',
                  emoji: '🧅',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'ClusterIP', emoji: '🏠', items: ['Internal only', 'Default'] },
                      { title: 'NodePort', emoji: '🚪', items: ['Adds node port', 'External-ish'] },
                      { title: 'LoadBalancer', emoji: '🌍', items: ['Adds cloud LB', 'Public IP'] },
                    ],
                  },
                },
                {
                  id: 'd3c1s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '❓',
                  question: "Which Service type is reachable only from inside the cluster?",
                  options: [
                    { id: 'a', text: "LoadBalancer", correct: false },
                    { id: 'b', text: "NodePort", correct: false },
                    { id: 'c', text: "ClusterIP", correct: true },
                    { id: 'd', text: "Ingress", correct: false },
                  ],
                  explanation:
                    "ClusterIP is the default and is internal-only. NodePort and LoadBalancer add external reachability on top of it.",
                },
              ],
            },
            {
              id: 'd3c1s3',
              title: 'Service Discovery & DNS',
              summary: "Finding Services by name inside the cluster.",
              cards: [
                {
                  id: 'd3c1s3-1',
                  kind: 'concept',
                  title: 'DNS for Services',
                  emoji: '📇',
                  body:
                    "Kubernetes runs an internal DNS server (CoreDNS). Every Service gets a DNS name: `<service>.<namespace>.svc.cluster.local`.\n\nInside the same namespace you can just use the short name — `web` resolves to the `web` Service. No IPs to remember.",
                  terms: [
                    { term: 'CoreDNS', definition: "The in-cluster DNS server that resolves Service names." },
                    { term: 'FQDN', definition: "The full Service name: service.namespace.svc.cluster.local." },
                  ],
                },
                {
                  id: 'd3c1s3-2',
                  kind: 'analogy',
                  title: 'The Company Phone Directory',
                  emoji: '☎️',
                  body:
                    "Service discovery is the office directory. You do not memorize desk phone numbers (Pod IPs); you look up \"Sales\" (a Service name) and get connected to whoever is on the desk right now.\n\nPeople change desks constantly; the directory entry stays the same.",
                },
                {
                  id: 'd3c1s3-3',
                  kind: 'example',
                  title: 'Calling a Service by Name',
                  emoji: '⌨️',
                  body:
                    "From inside a Pod, reach the `web` Service in the same namespace:\n\n`curl http://web`\n\nAcross namespaces, use the longer name:\n\n`curl http://web.dev.svc.cluster.local`\n\nTest quickly from a throwaway Pod:\n\n`kubectl run tmp --rm -it --image=busybox -- wget -qO- web`",
                },
                {
                  id: 'd3c1s3-4',
                  kind: 'tip',
                  title: "Same Namespace? Use the Short Name",
                  emoji: '💡',
                  body:
                    "Within one namespace, the bare Service name works and reads cleanly (`http://payments`). Reach across namespaces with `service.namespace`.\n\nHardcoding the full `.svc.cluster.local` suffix everywhere is unnecessary noise for same-namespace calls.",
                },
                {
                  id: 'd3c1s3-5',
                  kind: 'diagram',
                  title: 'Name to Pods',
                  emoji: '🧭',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'curl http://web', emoji: '📞' },
                      { label: 'CoreDNS resolves it', emoji: '📇' },
                      { label: 'Service load-balances', emoji: '⚖️' },
                      { label: 'A ready Pod answers', emoji: '📦' },
                    ],
                  },
                },
                {
                  id: 'd3c1s3-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '❓',
                  question: "What is the fully-qualified DNS name of a Service named orders in namespace shop?",
                  options: [
                    { id: 'a', text: "orders.shop.svc.cluster.local", correct: true },
                    { id: 'b', text: "shop.orders.pod.local", correct: false },
                    { id: 'c', text: "cluster.local.orders.shop", correct: false },
                    { id: 'd', text: "orders@shop.cluster", correct: false },
                  ],
                  explanation:
                    "The pattern is service.namespace.svc.cluster.local, so it is orders.shop.svc.cluster.local. Within the shop namespace, just `orders` also works.",
                },
              ],
            },
          ],
        },
        {
          id: 'd3c2',
          title: 'Ingress & Network Policies',
          emoji: '🚪',
          description: "Routing HTTP from the outside world and controlling who can talk to whom.",
          sections: [
            {
              id: 'd3c2s1',
              title: 'Ingress',
              summary: "One entry point that routes HTTP by host and path.",
              cards: [
                {
                  id: 'd3c2s1-1',
                  kind: 'concept',
                  title: 'What Ingress Solves',
                  emoji: '🚪',
                  body:
                    "Giving every app its own LoadBalancer gets expensive fast. **Ingress** is a single HTTP(S) entry point that routes to many Services by hostname and URL path.\n\nAn Ingress is just rules; you need an **ingress controller** (like NGINX or Traefik) running to enforce them.",
                  terms: [
                    { term: 'Ingress', definition: "HTTP routing rules mapping hosts/paths to Services." },
                    { term: 'Ingress controller', definition: "The running proxy that implements Ingress rules." },
                    { term: 'Host-based routing', definition: "Routing by domain name, e.g. api.example.com." },
                  ],
                },
                {
                  id: 'd3c2s1-2',
                  kind: 'analogy',
                  title: 'The Building Receptionist',
                  emoji: '🛎️',
                  body:
                    "An ingress controller is the receptionist at a shared office building. Visitors arrive at one lobby (one IP). The receptionist reads who they want (`/api`, `shop.example.com`) and directs them to the right floor (Service).\n\nWithout a receptionist (controller), the routing rules on paper mean nothing.",
                },
                {
                  id: 'd3c2s1-3',
                  kind: 'example',
                  title: 'An Ingress Manifest',
                  emoji: '📄',
                  body:
                    "`apiVersion: networking.k8s.io/v1`\n`kind: Ingress`\n`metadata: { name: web }`\n`spec:`\n`  rules:`\n`  - http:`\n`      paths:`\n`      - path: /`\n`        pathType: Prefix`\n`        backend:`\n`          service:`\n`            name: web`\n`            port: { number: 80 }`\n\nEnable it on minikube: `minikube addons enable ingress`.",
                },
                {
                  id: 'd3c2s1-4',
                  kind: 'tip',
                  title: "No Controller, No Routing",
                  emoji: '⚠️',
                  body:
                    "Applying an Ingress with no ingress controller installed does nothing — the rules just sit there. Beginners often wonder why their Ingress \"is not working.\"\n\nInstall a controller first (NGINX Ingress is common). On minikube, `minikube addons enable ingress` does it in one line.",
                },
                {
                  id: 'd3c2s1-5',
                  kind: 'diagram',
                  title: 'Ingress Routing',
                  emoji: '🗺️',
                  diagram: {
                    type: 'flow',
                    direction: 'vertical',
                    nodes: [
                      { label: 'Internet request', emoji: '🌍' },
                      { label: 'Ingress controller', emoji: '🛎️' },
                      { label: 'Match host + path rule', emoji: '🧭' },
                      { label: 'Forward to a Service', emoji: '🎯' },
                    ],
                  },
                },
                {
                  id: 'd3c2s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '❓',
                  question: "You applied an Ingress manifest but nothing routes. What is the most likely cause?",
                  options: [
                    { id: 'a', text: "Ingress needs a LoadBalancer Service type", correct: false },
                    { id: 'b', text: "No ingress controller is installed to enforce the rules", correct: true },
                    { id: 'c', text: "Ingress only works in the default namespace", correct: false },
                    { id: 'd', text: "Pods must have public IPs", correct: false },
                  ],
                  explanation:
                    "An Ingress is just rules. Without a running ingress controller (e.g. NGINX) to implement them, nothing happens.",
                },
              ],
            },
            {
              id: 'd3c2s2',
              title: 'Network Policies',
              summary: "Firewalls between Pods — deny by default, allow on purpose.",
              cards: [
                {
                  id: 'd3c2s2-1',
                  kind: 'concept',
                  title: 'Locking Down Pod Traffic',
                  emoji: '🔒',
                  body:
                    "By default, **all Pods can talk to all Pods**. A **NetworkPolicy** restricts that: it selects Pods and defines which ingress/egress traffic is allowed.\n\nOnce a Pod is selected by any policy, everything not explicitly allowed is denied — a whitelist model.",
                  terms: [
                    { term: 'NetworkPolicy', definition: "Rules that control allowed traffic to/from selected Pods." },
                    { term: 'Ingress rule', definition: "Allowed incoming traffic in a NetworkPolicy." },
                    { term: 'Egress rule', definition: "Allowed outgoing traffic in a NetworkPolicy." },
                  ],
                },
                {
                  id: 'd3c2s2-2',
                  kind: 'analogy',
                  title: 'Guest List at the Door',
                  emoji: '📋',
                  body:
                    "Default Kubernetes is a party where anyone can walk into any room. A NetworkPolicy puts a bouncer with a guest list on a room's door: if you are not on the list, you do not get in.\n\nAdd a bouncer and suddenly \"everyone welcome\" becomes \"invited only.\"",
                },
                {
                  id: 'd3c2s2-3',
                  kind: 'tip',
                  title: "Policies Need a Capable CNI",
                  emoji: '💡',
                  body:
                    "NetworkPolicies only work if your network plugin (CNI) enforces them — Calico and Cilium do, some simpler setups do not.\n\nOn a plain minikube, a policy may be silently ignored. Verify your CNI supports policies before relying on them for security.",
                },
                {
                  id: 'd3c2s2-4',
                  kind: 'diagram',
                  title: 'Default vs Restricted',
                  emoji: '⚖️',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'No policy', emoji: '🚪', items: ['All Pods reachable', 'Open by default'] },
                      { title: 'With policy', emoji: '🔒', items: ['Whitelist only', 'Default deny for selected Pods'] },
                    ],
                  },
                },
                {
                  id: 'd3c2s2-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '❓',
                  question: "What is the default Pod-to-Pod traffic behavior before any NetworkPolicy exists?",
                  options: [
                    { id: 'a', text: "All traffic is denied", correct: false },
                    { id: 'b', text: "All Pods can communicate freely", correct: true },
                    { id: 'c', text: "Only same-namespace traffic is allowed", correct: false },
                    { id: 'd', text: "Traffic requires an Ingress", correct: false },
                  ],
                  explanation:
                    "Kubernetes is open by default — every Pod can reach every other Pod. A NetworkPolicy switches selected Pods to a whitelist model.",
                },
              ],
            },
          ],
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 4 — Configuration & Storage
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd4',
      title: 'Configuration & Storage',
      emoji: '⚙️',
      description:
        "Keeping config and secrets out of your image, and giving Pods storage that survives restarts.",
      project: {
        title: 'Externalize Config & Add Persistent Storage',
        brief:
          "Move your app's settings into a **ConfigMap** and its credentials into a **Secret**, then mount them as env vars or files. Add a **PersistentVolumeClaim** and mount it so data written by the Pod survives a restart. Verify by deleting the Pod and confirming the data is still there.",
        buildsOn:
          "Takes the exposed app from Domain 3 and makes it configurable and stateful.",
        stretch:
          "Change a ConfigMap value and roll the Deployment so Pods pick up the new config.",
      },
      chapters: [
        {
          id: 'd4c1',
          title: 'ConfigMaps & Secrets',
          emoji: '🗝️',
          description: "Separating configuration and sensitive data from your container image.",
          sections: [
            {
              id: 'd4c1s1',
              title: 'ConfigMaps',
              summary: "Non-secret configuration, decoupled from the image.",
              cards: [
                {
                  id: 'd4c1s1-1',
                  kind: 'concept',
                  title: 'Config Outside the Image',
                  emoji: '⚙️',
                  body:
                    "A **ConfigMap** stores non-sensitive configuration as key/value pairs, separate from your image. The same image can then run in dev, staging, and prod just by swapping the ConfigMap.\n\nConsume it as environment variables or as mounted files inside the Pod.",
                  terms: [
                    { term: 'ConfigMap', definition: "An object holding non-secret configuration as key/value data." },
                    { term: 'Externalized config', definition: "Keeping settings out of the image so it stays portable." },
                  ],
                },
                {
                  id: 'd4c1s1-2',
                  kind: 'analogy',
                  title: 'Settings Menu, Not Hardcoded',
                  emoji: '🎛️',
                  body:
                    "Baking config into an image is like building a TV with the volume welded at level 7. A ConfigMap is the settings menu — same TV, adjustable per room.\n\nOne image, many environments, just by pointing at a different ConfigMap.",
                },
                {
                  id: 'd4c1s1-3',
                  kind: 'example',
                  title: 'Create & Use a ConfigMap',
                  emoji: '⌨️',
                  body:
                    "Create it:\n\n`kubectl create configmap app-config --from-literal=LOG_LEVEL=info`\n\nInject as an env var in a Pod spec:\n\n`env:`\n`- name: LOG_LEVEL`\n`  valueFrom:`\n`    configMapKeyRef:`\n`      name: app-config`\n`      key: LOG_LEVEL`",
                },
                {
                  id: 'd4c1s1-4',
                  kind: 'tip',
                  title: "Env Vars Do Not Auto-Refresh",
                  emoji: '⚠️',
                  body:
                    "If you inject a ConfigMap as **environment variables**, changing the ConfigMap does not update running Pods — env vars are set at container start. You must restart/roll the Pods.\n\nMounted as a **volume**, ConfigMap files do update in place (after a short delay). Choose accordingly.",
                },
                {
                  id: 'd4c1s1-5',
                  kind: 'diagram',
                  title: 'ConfigMap into a Pod',
                  emoji: '🔌',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'ConfigMap', emoji: '⚙️' },
                      { label: 'As env var or file', emoji: '🔀' },
                      { label: 'Pod reads config', emoji: '📦' },
                    ],
                  },
                },
                {
                  id: 'd4c1s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '❓',
                  question: "You updated a ConfigMap but the app still uses old values. Why?",
                  options: [
                    { id: 'a', text: "ConfigMaps are read-only", correct: false },
                    { id: 'b', text: "It was injected as env vars, which are fixed at container start", correct: true },
                    { id: 'c', text: "ConfigMaps only work in prod", correct: false },
                    { id: 'd', text: "The Secret overrode it", correct: false },
                  ],
                  explanation:
                    "Env vars are set when the container starts and do not refresh. Restart the Pods, or mount the ConfigMap as a volume so files update in place.",
                },
              ],
            },
            {
              id: 'd4c1s2',
              title: 'Secrets',
              summary: "The same idea as ConfigMaps, but for sensitive data.",
              cards: [
                {
                  id: 'd4c1s2-1',
                  kind: 'concept',
                  title: 'What a Secret Is',
                  emoji: '🔐',
                  body:
                    "A **Secret** holds sensitive data — passwords, tokens, keys. It looks like a ConfigMap but is treated more carefully: values are base64-encoded and can be restricted with RBAC.\n\nUse Secrets for anything you would not want printed in a log or committed to Git.",
                  terms: [
                    { term: 'Secret', definition: "An object for sensitive key/value data like passwords and tokens." },
                    { term: 'base64', definition: "An encoding (not encryption) used to store Secret values." },
                  ],
                },
                {
                  id: 'd4c1s2-2',
                  kind: 'tip',
                  title: "base64 Is Not Encryption",
                  emoji: '⚠️',
                  body:
                    "Secret values are base64-**encoded**, which anyone can decode instantly. That is not security.\n\nFor real protection, enable **encryption at rest** for etcd and lock down access with RBAC. And never commit a Secret manifest with real values to Git.",
                },
                {
                  id: 'd4c1s2-3',
                  kind: 'example',
                  title: 'Create & Mount a Secret',
                  emoji: '⌨️',
                  body:
                    "Create it:\n\n`kubectl create secret generic db-cred --from-literal=PASSWORD=s3cr3t`\n\nUse as an env var:\n\n`env:`\n`- name: DB_PASSWORD`\n`  valueFrom:`\n`    secretKeyRef:`\n`      name: db-cred`\n`      key: PASSWORD`",
                },
                {
                  id: 'd4c1s2-4',
                  kind: 'compare',
                  title: 'ConfigMap vs Secret',
                  emoji: '⚖️',
                  compare: {
                    headers: ['Aspect', 'ConfigMap', 'Secret'],
                    rows: [
                      ['Data type', 'Non-sensitive', 'Sensitive'],
                      ['Stored as', 'Plain text', 'base64-encoded'],
                      ['Typical use', 'Log level, URLs', 'Passwords, tokens'],
                      ['Extra care', 'None', 'RBAC + encryption at rest'],
                    ],
                  },
                },
                {
                  id: 'd4c1s2-5',
                  kind: 'diagram',
                  title: 'Two Kinds of Config',
                  emoji: '🗝️',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'ConfigMap', emoji: '⚙️', items: ['Non-secret', 'Plain text', 'Settings'] },
                      { title: 'Secret', emoji: '🔐', items: ['Sensitive', 'base64', 'Credentials'] },
                    ],
                  },
                },
                {
                  id: 'd4c1s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '❓',
                  question: "Is base64 encoding of a Secret a security measure?",
                  options: [
                    { id: 'a', text: "Yes, it strongly encrypts the data", correct: false },
                    { id: 'b', text: "No, it is just encoding; anyone can decode it", correct: true },
                    { id: 'c', text: "Yes, only the API server can decode it", correct: false },
                    { id: 'd', text: "No, Secrets are stored in plain text", correct: false },
                  ],
                  explanation:
                    "base64 is encoding, not encryption — trivially reversible. Real protection comes from RBAC and encryption at rest for etcd.",
                },
              ],
            },
          ],
        },
        {
          id: 'd4c2',
          title: 'Volumes & Persistent Storage',
          emoji: '💽',
          description: "Storage that outlives a container restart, and how Pods claim it.",
          sections: [
            {
              id: 'd4c2s1',
              title: 'Ephemeral vs Persistent',
              summary: "Why container filesystems vanish and how volumes fix it.",
              cards: [
                {
                  id: 'd4c2s1-1',
                  kind: 'concept',
                  title: 'Containers Forget',
                  emoji: '🧽',
                  body:
                    "A container's filesystem is **ephemeral** — restart the container and anything it wrote is gone. A **volume** is storage attached to a Pod that outlives individual container restarts.\n\nSome volumes (like `emptyDir`) still die with the Pod; persistent ones survive even the Pod.",
                  terms: [
                    { term: 'Ephemeral storage', definition: "Container-local storage lost on restart." },
                    { term: 'Volume', definition: "Storage mounted into a Pod that survives container restarts." },
                    { term: 'emptyDir', definition: "A temporary volume that lives and dies with the Pod." },
                  ],
                },
                {
                  id: 'd4c2s1-2',
                  kind: 'analogy',
                  title: 'Whiteboard vs Filing Cabinet',
                  emoji: '🗄️',
                  body:
                    "A container's own filesystem is a whiteboard — wiped clean each restart. An `emptyDir` volume is a shared whiteboard for roommates in one Pod, erased when everyone moves out.\n\nA PersistentVolume is a filing cabinet in the building basement: it stays even after tenants (Pods) leave.",
                },
                {
                  id: 'd4c2s1-3',
                  kind: 'tip',
                  title: "Databases Need Persistent Volumes",
                  emoji: '⚠️',
                  body:
                    "Never store a database's data on the container filesystem or an `emptyDir` — one restart and it is gone.\n\nStateful workloads need a **PersistentVolumeClaim**. And for databases specifically, prefer a **StatefulSet** over a Deployment for stable identity and per-Pod storage.",
                },
                {
                  id: 'd4c2s1-4',
                  kind: 'diagram',
                  title: 'Storage Lifetimes',
                  emoji: '⏳',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Container FS', emoji: '🧽', items: ['Dies on restart', 'Never for data'] },
                      { title: 'emptyDir', emoji: '📋', items: ['Lives with Pod', 'Scratch space'] },
                      { title: 'PersistentVolume', emoji: '🗄️', items: ['Outlives Pod', 'Real data'] },
                    ],
                  },
                },
                {
                  id: 'd4c2s1-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '❓',
                  question: "Where should a database store its data files?",
                  options: [
                    { id: 'a', text: "On the container filesystem", correct: false },
                    { id: 'b', text: "In an emptyDir volume", correct: false },
                    { id: 'c', text: "On a PersistentVolume via a PersistentVolumeClaim", correct: true },
                    { id: 'd', text: "In a ConfigMap", correct: false },
                  ],
                  explanation:
                    "Only a PersistentVolume survives Pod deletion. The container filesystem and emptyDir are both lost when the Pod goes away.",
                },
              ],
            },
            {
              id: 'd4c2s2',
              title: 'PersistentVolumes & Claims',
              summary: "The supply-and-demand model for durable storage.",
              cards: [
                {
                  id: 'd4c2s2-1',
                  kind: 'concept',
                  title: 'PV, PVC & StorageClass',
                  emoji: '💽',
                  body:
                    "A **PersistentVolume (PV)** is a piece of storage in the cluster. A **PersistentVolumeClaim (PVC)** is a Pod's request for storage (\"I need 1Gi\"). Kubernetes binds a matching PV to the claim.\n\nA **StorageClass** enables *dynamic* provisioning — the PV is created on demand when a PVC appears.",
                  terms: [
                    { term: 'PersistentVolume', definition: "A cluster storage resource, provisioned statically or dynamically." },
                    { term: 'PersistentVolumeClaim', definition: "A request for storage that binds to a PV." },
                    { term: 'StorageClass', definition: "A template that dynamically provisions PVs on demand." },
                  ],
                },
                {
                  id: 'd4c2s2-2',
                  kind: 'analogy',
                  title: 'Renting Storage Units',
                  emoji: '🏬',
                  body:
                    "A PV is a storage unit that exists in the facility. A PVC is your rental request: \"I want a 10x10 unit.\" The facility matches you to one.\n\nA StorageClass is a facility that builds a new unit to order the moment you ask — you never wait for one to be free.",
                },
                {
                  id: 'd4c2s2-3',
                  kind: 'example',
                  title: 'A PVC and Its Mount',
                  emoji: '📄',
                  body:
                    "Claim:\n\n`apiVersion: v1`\n`kind: PersistentVolumeClaim`\n`metadata: { name: data }`\n`spec:`\n`  accessModes: [ReadWriteOnce]`\n`  resources: { requests: { storage: 1Gi } }`\n\nMount in a Pod:\n\n`volumes:`\n`- name: data`\n`  persistentVolumeClaim: { claimName: data }`",
                },
                {
                  id: 'd4c2s2-4',
                  kind: 'tip',
                  title: "Mind the accessModes",
                  emoji: '💡',
                  body:
                    "`ReadWriteOnce` (RWO) means the volume mounts read-write on **one node** at a time — fine for a single Pod, awkward for scaling across nodes.\n\nNeed many Pods writing shared storage? You need `ReadWriteMany` (RWX), which not every storage backend supports. Check before you design around it.",
                },
                {
                  id: 'd4c2s2-5',
                  kind: 'diagram',
                  title: 'Claim Binds to Storage',
                  emoji: '🔗',
                  diagram: {
                    type: 'flow',
                    direction: 'vertical',
                    nodes: [
                      { label: 'Pod requests storage (PVC)', emoji: '📦' },
                      { label: 'StorageClass provisions a PV', emoji: '🏭' },
                      { label: 'PVC binds to the PV', emoji: '🔗' },
                      { label: 'Data survives Pod restarts', emoji: '💾' },
                    ],
                  },
                },
                {
                  id: 'd4c2s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '❓',
                  question: "What does a StorageClass enable?",
                  options: [
                    { id: 'a', text: "Encryption of Secrets", correct: false },
                    { id: 'b', text: "Dynamic provisioning of PersistentVolumes on demand", correct: true },
                    { id: 'c', text: "Routing HTTP traffic to Pods", correct: false },
                    { id: 'd', text: "Scaling Deployments automatically", correct: false },
                  ],
                  explanation:
                    "A StorageClass lets Kubernetes create a matching PersistentVolume automatically when a PVC is submitted — no manual PV creation needed.",
                },
                {
                  id: 'd4c2s2-7',
                  kind: 'qa',
                  title: 'Interview: Config & State',
                  emoji: '🎤',
                  question: "How would you make a stateless image configurable and give it durable storage?",
                  body:
                    "Externalize settings into a **ConfigMap** and credentials into a **Secret**, then inject them as env vars or mounted files — keeping the image portable across environments. For durable data, define a **PersistentVolumeClaim** (backed by a StorageClass for dynamic provisioning) and mount it into the Pod. Because a PVC-backed volume outlives the Pod, data written there survives restarts and rescheduling. For a true database, use a StatefulSet so each replica gets stable identity and its own volume.",
                  followUps: [
                    "When would you mount config as a volume instead of env vars?",
                    "Why prefer a StatefulSet over a Deployment for a database?",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 5 — Scaling, Health & Operations
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd5',
      title: 'Scaling, Health & Operations',
      emoji: '🚀',
      description:
        "Probes that keep traffic away from sick Pods, resource limits, autoscaling, and the everyday commands for debugging.",
      project: {
        title: 'Add Probes, Limits & Autoscaling',
        brief:
          "Give your Deployment **liveness** and **readiness** probes, set **resource requests and limits**, and attach a **HorizontalPodAutoscaler** (`kubectl autoscale deployment web --cpu-percent=50 --min=2 --max=10`). Then kill a Pod with `kubectl delete pod` and watch Kubernetes self-heal, and generate load to watch the HPA scale up.",
        buildsOn:
          "Takes the configurable, stateful app from Domain 4 and makes it resilient and self-scaling.",
        stretch:
          "Tune maxSurge/maxUnavailable and observe how it changes the speed of a rolling update.",
      },
      chapters: [
        {
          id: 'd5c1',
          title: 'Health & Resources',
          emoji: '❤️',
          description: "Telling Kubernetes when a Pod is alive, ready, and how much it may consume.",
          sections: [
            {
              id: 'd5c1s1',
              title: 'Probes',
              summary: "Liveness, readiness, and startup checks.",
              cards: [
                {
                  id: 'd5c1s1-1',
                  kind: 'concept',
                  title: 'Three Kinds of Probe',
                  emoji: '❤️',
                  body:
                    "- **Liveness** — is the container alive? If it fails, Kubernetes restarts the container.\n- **Readiness** — is it ready for traffic? If it fails, the Pod is removed from Service endpoints but not restarted.\n- **Startup** — is a slow-starting app finished booting? It gates the other probes until then.",
                  terms: [
                    { term: 'Liveness probe', definition: "Checks if a container is alive; failure triggers a restart." },
                    { term: 'Readiness probe', definition: "Checks if a container can serve traffic; failure removes it from a Service." },
                    { term: 'Startup probe', definition: "Delays liveness/readiness until a slow app has started." },
                  ],
                },
                {
                  id: 'd5c1s1-2',
                  kind: 'analogy',
                  title: 'Pulse vs Open Sign',
                  emoji: '🏪',
                  body:
                    "Liveness is a **pulse check**: no pulse, call the paramedics (restart). Readiness is the shop's **Open sign**: the staff might be alive but still setting up, so keep customers out until the sign flips to Open.\n\nA Pod can be alive (liveness OK) yet not ready (still warming caches).",
                },
                {
                  id: 'd5c1s1-3',
                  kind: 'example',
                  title: 'Defining Probes',
                  emoji: '📄',
                  body:
                    "`livenessProbe:`\n`  httpGet: { path: /healthz, port: 8080 }`\n`  initialDelaySeconds: 10`\n`  periodSeconds: 5`\n`readinessProbe:`\n`  httpGet: { path: /ready, port: 8080 }`\n`  periodSeconds: 5`\n\nLiveness restarts; readiness gates traffic.",
                },
                {
                  id: 'd5c1s1-4',
                  kind: 'tip',
                  title: "Do Not Confuse Liveness and Readiness",
                  emoji: '⚠️',
                  body:
                    "A too-aggressive **liveness** probe restarts a Pod that was merely busy — a restart loop. If a Pod just needs a moment before serving, that is a **readiness** concern, not liveness.\n\nRule: liveness = \"restart me if I am wedged.\" Readiness = \"do not send traffic yet.\"",
                },
                {
                  id: 'd5c1s1-5',
                  kind: 'diagram',
                  title: 'Liveness vs Readiness',
                  emoji: '⚖️',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Liveness', emoji: '💓', items: ['Fail = restart container', 'Detects deadlocks'] },
                      { title: 'Readiness', emoji: '🚦', items: ['Fail = no traffic', 'No restart'] },
                    ],
                  },
                },
                {
                  id: 'd5c1s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '❓',
                  question: "A readiness probe fails. What does Kubernetes do?",
                  options: [
                    { id: 'a', text: "Restarts the container immediately", correct: false },
                    { id: 'b', text: "Removes the Pod from Service endpoints until it passes again", correct: true },
                    { id: 'c', text: "Deletes the Pod permanently", correct: false },
                    { id: 'd', text: "Scales up a replacement", correct: false },
                  ],
                  explanation:
                    "A failed readiness probe stops traffic to that Pod but does not restart it. A failed liveness probe is what triggers a restart.",
                },
              ],
            },
            {
              id: 'd5c1s2',
              title: 'Requests & Limits',
              summary: "Telling the scheduler and kernel how much a Pod may use.",
              cards: [
                {
                  id: 'd5c1s2-1',
                  kind: 'concept',
                  title: 'Requests vs Limits',
                  emoji: '📏',
                  body:
                    "A **request** is what a container is guaranteed — the scheduler uses it to place the Pod. A **limit** is the hard ceiling it may not exceed.\n\nExceed a CPU limit and you get throttled; exceed a memory limit and the container is **OOMKilled** (out-of-memory killed) and restarted.",
                  terms: [
                    { term: 'Request', definition: "The guaranteed minimum resource used for scheduling." },
                    { term: 'Limit', definition: "The maximum resource a container may consume." },
                    { term: 'OOMKilled', definition: "Termination of a container that exceeds its memory limit." },
                  ],
                },
                {
                  id: 'd5c1s2-2',
                  kind: 'analogy',
                  title: 'Hotel Booking vs Ceiling',
                  emoji: '🛏️',
                  body:
                    "A request is a reservation: \"hold me a room\" — the hotel (scheduler) will not overbook that space. A limit is the max occupancy sign on the door: cross it and you get thrown out.\n\nRequests decide *where* you fit; limits decide *how far* you can push before consequences.",
                },
                {
                  id: 'd5c1s2-3',
                  kind: 'example',
                  title: 'Setting Resources',
                  emoji: '📄',
                  body:
                    "`resources:`\n`  requests:`\n`    cpu: \"250m\"`\n`    memory: \"128Mi\"`\n`  limits:`\n`    cpu: \"500m\"`\n`    memory: \"256Mi\"`\n\n`250m` = a quarter CPU core. `128Mi` = 128 mebibytes of memory.",
                },
                {
                  id: 'd5c1s2-4',
                  kind: 'tip',
                  title: "Always Set Requests",
                  emoji: '💡',
                  body:
                    "Without a request, the scheduler assumes near-zero and can pack a node until it is starved. Always set at least memory and CPU **requests**.\n\nAlso: the HorizontalPodAutoscaler needs CPU requests to compute utilization percentages. No request, no CPU-based autoscaling.",
                },
                {
                  id: 'd5c1s2-5',
                  kind: 'diagram',
                  title: 'Request Reserves, Limit Caps',
                  emoji: '📊',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'Request', sublabel: 'guaranteed', emoji: '✅' },
                      { label: 'Usage room', sublabel: 'burst allowed', emoji: '↔️' },
                      { label: 'Limit', sublabel: 'hard ceiling', emoji: '🚧' },
                    ],
                  },
                },
                {
                  id: 'd5c1s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '❓',
                  question: "What happens when a container exceeds its memory limit?",
                  options: [
                    { id: 'a', text: "It is throttled but keeps running", correct: false },
                    { id: 'b', text: "It is OOMKilled and restarted", correct: true },
                    { id: 'c', text: "The node reboots", correct: false },
                    { id: 'd', text: "Nothing; limits are advisory", correct: false },
                  ],
                  explanation:
                    "Exceeding a memory limit gets the container OOMKilled and restarted. CPU is different — exceeding a CPU limit throttles rather than kills.",
                },
              ],
            },
          ],
        },
        {
          id: 'd5c2',
          title: 'Autoscaling & Self-Healing',
          emoji: '📈',
          description: "Growing and shrinking automatically, and recovering from failure without you.",
          sections: [
            {
              id: 'd5c2s1',
              title: 'Horizontal Pod Autoscaler',
              summary: "Adding and removing replicas based on load.",
              cards: [
                {
                  id: 'd5c2s1-1',
                  kind: 'concept',
                  title: 'What the HPA Does',
                  emoji: '📈',
                  body:
                    "The **HorizontalPodAutoscaler (HPA)** watches a metric (usually CPU) and adjusts a Deployment's replica count to keep it near a target. Load rises, it adds Pods; load falls, it removes them.\n\nHorizontal = more Pods. It does not resize existing Pods (that is the vertical autoscaler).",
                  terms: [
                    { term: 'HorizontalPodAutoscaler', definition: "Scales replica count up/down based on observed metrics." },
                    { term: 'Target utilization', definition: "The metric level the HPA tries to maintain, e.g. 50% CPU." },
                    { term: 'Metrics server', definition: "The component that supplies CPU/memory metrics to the HPA." },
                  ],
                },
                {
                  id: 'd5c2s1-2',
                  kind: 'analogy',
                  title: 'Opening More Checkout Lanes',
                  emoji: '🛒',
                  body:
                    "The HPA is a store manager watching the queues. When lines get long (CPU high), they open more checkout lanes (Pods). When the rush ends, they close lanes to save staff.\n\nMore lanes for more shoppers — that is horizontal scaling.",
                },
                {
                  id: 'd5c2s1-3',
                  kind: 'example',
                  title: 'Creating an HPA',
                  emoji: '⌨️',
                  body:
                    "`kubectl autoscale deployment web --cpu-percent=50 --min=2 --max=10`\n\nKeeps average CPU near 50%, between 2 and 10 replicas. Watch it react:\n\n`kubectl get hpa -w`\n\nRequires the metrics server (on minikube: `minikube addons enable metrics-server`).",
                },
                {
                  id: 'd5c2s1-4',
                  kind: 'tip',
                  title: "No Metrics Server, No HPA",
                  emoji: '⚠️',
                  body:
                    "The HPA reads from the **metrics server**. If it is not installed, `kubectl get hpa` shows `<unknown>` for utilization and never scales.\n\nAnd remember: CPU-based scaling needs CPU **requests** set on the Pods, or there is no baseline to compute a percentage against.",
                },
                {
                  id: 'd5c2s1-5',
                  kind: 'diagram',
                  title: 'The Autoscaling Loop',
                  emoji: '🔁',
                  diagram: {
                    type: 'cycle',
                    nodes: [
                      { label: 'Measure CPU across Pods', emoji: '📏' },
                      { label: 'Compare to target (50%)', emoji: '🎯' },
                      { label: 'Adjust replica count', emoji: '➕' },
                      { label: 'Wait, then measure again', emoji: '⏳' },
                    ],
                  },
                },
                {
                  id: 'd5c2s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '❓',
                  question: "What does the HorizontalPodAutoscaler change?",
                  options: [
                    { id: 'a', text: "The CPU/memory of existing Pods", correct: false },
                    { id: 'b', text: "The number of Pod replicas", correct: true },
                    { id: 'c', text: "The number of nodes", correct: false },
                    { id: 'd', text: "The container image version", correct: false },
                  ],
                  explanation:
                    "The HPA scales the replica count horizontally. Resizing existing Pods is the vertical autoscaler; adding nodes is the cluster autoscaler.",
                },
              ],
            },
            {
              id: 'd5c2s2',
              title: 'Rollout Strategy & Self-Healing',
              summary: "Tuning update pace and trusting the reconciliation loop.",
              cards: [
                {
                  id: 'd5c2s2-1',
                  kind: 'concept',
                  title: 'maxSurge & maxUnavailable',
                  emoji: '🎚️',
                  body:
                    "A RollingUpdate strategy has two knobs:\n\n- **maxSurge** — how many *extra* Pods may exist above the desired count during a rollout.\n- **maxUnavailable** — how many Pods may be *missing* below desired during a rollout.\n\nHigher surge = faster but more resources; lower unavailable = safer but slower.",
                  terms: [
                    { term: 'maxSurge', definition: "Extra Pods allowed above desired count during a rollout." },
                    { term: 'maxUnavailable', definition: "Pods allowed below desired count during a rollout." },
                    { term: 'RollingUpdate', definition: "The default Deployment strategy that replaces Pods gradually." },
                  ],
                },
                {
                  id: 'd5c2s2-2',
                  kind: 'example',
                  title: 'Tuning the Strategy',
                  emoji: '📄',
                  body:
                    "`strategy:`\n`  type: RollingUpdate`\n`  rollingUpdate:`\n`    maxSurge: 1`\n`    maxUnavailable: 0`\n\n`maxUnavailable: 0` keeps full capacity throughout — zero-downtime, but needs room for the extra surge Pod.",
                },
                {
                  id: 'd5c2s2-3',
                  kind: 'concept',
                  title: 'Self-Healing in Action',
                  emoji: '🩹',
                  body:
                    "Self-healing is just reconciliation. Delete a Pod from a Deployment and the ReplicaSet notices the count is short and creates a replacement — usually within seconds.\n\nA node dies? Controllers reschedule its Pods onto healthy nodes. You declared the desired state; Kubernetes keeps restoring it.",
                },
                {
                  id: 'd5c2s2-4',
                  kind: 'diagram',
                  title: 'Self-Healing Loop',
                  emoji: '🔁',
                  diagram: {
                    type: 'cycle',
                    nodes: [
                      { label: 'A Pod dies', emoji: '💥' },
                      { label: 'ReplicaSet sees count < desired', emoji: '👀' },
                      { label: 'It creates a replacement', emoji: '🐣' },
                      { label: 'Desired count restored', emoji: '✅' },
                    ],
                  },
                },
                {
                  id: 'd5c2s2-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '❓',
                  question: "You delete a Pod managed by a Deployment. What happens?",
                  options: [
                    { id: 'a', text: "It stays gone until you recreate it", correct: false },
                    { id: 'b', text: "The ReplicaSet creates a replacement to restore the desired count", correct: true },
                    { id: 'c', text: "The whole Deployment is deleted", correct: false },
                    { id: 'd', text: "The node reboots", correct: false },
                  ],
                  explanation:
                    "The ReplicaSet continuously reconciles: seeing fewer Pods than desired, it spins up a replacement. That is self-healing.",
                },
              ],
            },
            {
              id: 'd5c2s3',
              title: 'Troubleshooting Toolkit',
              summary: "logs, describe, and exec — your day-two survival kit.",
              cards: [
                {
                  id: 'd5c2s3-1',
                  kind: 'concept',
                  title: 'The Big Three Commands',
                  emoji: '🔧',
                  body:
                    "When something breaks, reach for:\n\n- `kubectl logs` — what the app printed.\n- `kubectl describe` — events and status of an object.\n- `kubectl exec` — a shell inside a running container.\n\nMost incidents are solved by reading events in `describe` and errors in `logs`.",
                  terms: [
                    { term: 'kubectl logs', definition: "Prints a container's stdout/stderr logs." },
                    { term: 'kubectl describe', definition: "Shows detailed status and recent events for an object." },
                    { term: 'kubectl exec', definition: "Runs a command or shell inside a running container." },
                  ],
                },
                {
                  id: 'd5c2s3-2',
                  kind: 'example',
                  title: 'Reading Logs',
                  emoji: '⌨️',
                  body:
                    "Tail logs live:\n\n`kubectl logs -f web`\n\nA crashed container's *previous* logs:\n\n`kubectl logs web --previous`\n\nA specific container in a multi-container Pod:\n\n`kubectl logs web -c sidecar`",
                },
                {
                  id: 'd5c2s3-3',
                  kind: 'example',
                  title: 'Describe & Exec',
                  emoji: '⌨️',
                  body:
                    "See why a Pod is stuck (check the Events at the bottom):\n\n`kubectl describe pod web`\n\nOpen a shell to poke around:\n\n`kubectl exec -it web -- sh`\n\n`describe` almost always reveals scheduling, image-pull, or probe failures.",
                },
                {
                  id: 'd5c2s3-4',
                  kind: 'tip',
                  title: "Decode a CrashLoopBackOff",
                  emoji: '💡',
                  body:
                    "`CrashLoopBackOff` means the container keeps crashing and Kubernetes is waiting longer between restarts. It is a **symptom**, not a cause.\n\nFind the cause: `kubectl logs web --previous` for the crash output, and `kubectl describe pod web` for events. Usually a bad command, missing config, or failing liveness probe.",
                },
                {
                  id: 'd5c2s3-5',
                  kind: 'diagram',
                  title: 'A Debugging Flow',
                  emoji: '🧭',
                  diagram: {
                    type: 'flow',
                    direction: 'vertical',
                    nodes: [
                      { label: 'Pod not healthy', emoji: '🤒' },
                      { label: 'kubectl describe pod (events)', emoji: '📋' },
                      { label: 'kubectl logs (--previous if crashed)', emoji: '📜' },
                      { label: 'kubectl exec to inspect live', emoji: '🔍' },
                      { label: 'Fix manifest & re-apply', emoji: '🛠️' },
                    ],
                  },
                },
                {
                  id: 'd5c2s3-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '❓',
                  question: "A Pod is in CrashLoopBackOff. Which command best reveals why it crashed?",
                  options: [
                    { id: 'a', text: "kubectl scale", correct: false },
                    { id: 'b', text: "kubectl logs web --previous", correct: true },
                    { id: 'c', text: "kubectl get nodes", correct: false },
                    { id: 'd', text: "kubectl apply -f web.yaml", correct: false },
                  ],
                  explanation:
                    "`--previous` shows logs from the crashed instance before the current restart — usually where the actual error is. Pair it with `kubectl describe` for events.",
                },
                {
                  id: 'd5c2s3-7',
                  kind: 'qa',
                  title: 'Interview: Debugging a Failing Pod',
                  emoji: '🎤',
                  question: "A Deployment's Pods keep restarting in production. Walk me through your triage.",
                  body:
                    "Start with `kubectl get pods` to see status and restart counts. Run `kubectl describe pod <name>` and read the Events — that surfaces image-pull errors, failed scheduling, or probe failures. If it is crashing, `kubectl logs <name> --previous` shows the last crash output. Check whether a **liveness** probe is too aggressive (restarting a merely-busy Pod) or a **memory limit** is causing OOMKills (visible as `OOMKilled` in describe). If needed, `kubectl exec -it` into a running replica to inspect config and connectivity. Fix the manifest and re-apply, then watch `kubectl rollout status`.",
                  followUps: [
                    "How do you tell an OOMKill from a probe-induced restart?",
                    "What would make you suspect the readiness probe instead?",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
