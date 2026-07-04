import type { Certification } from '../types'

export const docker: Certification = {
  id: 'docker',
  kind: 'path',
  code: 'Docker',
  title: 'Docker: Containers from Scratch',
  shortTitle: 'Docker',
  provider: 'Docker',
  level: 'Beginner',
  gradient: 'from-sky-500 to-blue-600',
  icon: '🐳',
  tagline: 'Package apps that run anywhere',
  description:
    "A friendly, self-paced path into Docker — from what a container actually is, to writing Dockerfiles, persisting data, networking containers together, orchestrating a whole stack with Compose, and hardening images for production. Full of shipping-container analogies, real CLI commands, worked Dockerfiles, and a progressive project that grows from a single container into a production-ready stack.",
  examFacts: [
    { label: 'Level', value: 'Beginner → Intermediate' },
    { label: 'Format', value: 'Self-paced cards' },
    { label: 'Topics', value: '5 domains' },
    { label: 'Tool', value: 'Docker & Compose' },
    { label: 'Prereq', value: 'Basic CLI' },
  ],
  version: '1.0',
  lastUpdated: '2025-01-15',
  available: true,
  domains: [
    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 1 — Containers 101
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd1',
      title: 'Containers 101',
      emoji: '🐳',
      description:
        "What containers are and why they changed how we ship software. Containers vs VMs, images vs containers, the Docker architecture, installing Docker, and running your very first container.",
      project: {
        title: "Run Your First Container 🏃",
        brief:
          "Install Docker, then run an existing web image and reach it in your browser.\n\n- Verify your install with `docker version` and `docker run hello-world`.\n- Run Nginx: `docker run -d -p 8080:80 --name web nginx`.\n- Open `http://localhost:8080` and see the welcome page.\n- Inspect it with `docker ps` and `docker logs web`.",
        stretch:
          "Swap Nginx for `httpd` (Apache) on a different port and run both at once. Notice how each container is fully isolated.",
      },
      chapters: [
        {
          id: 'd1c1',
          title: 'What Is a Container?',
          emoji: '📦',
          description: "The big idea behind containers and how they differ from virtual machines.",
          sections: [
            {
              id: 'd1c1s1',
              title: 'The Container Idea',
              summary: "Why we bother packaging apps into containers at all.",
              cards: [
                {
                  id: 'd1c1s1-1',
                  kind: 'concept',
                  title: 'What Is a Container?',
                  emoji: '📦',
                  body:
                    "A **container** is a lightweight, isolated package that holds your app **and everything it needs to run** — code, runtime, libraries, and settings.\n\nBecause the container carries its own dependencies, it runs the same on your laptop, a teammate's machine, and a server in the cloud. No more \"but it works on my machine\".",
                  terms: [
                    { term: 'Container', definition: "A running, isolated process bundled with its own dependencies." },
                    { term: 'Isolation', definition: "Each container has its own filesystem, processes, and network view." },
                    { term: 'Portability', definition: "The ability to run identically across different machines." },
                  ],
                },
                {
                  id: 'd1c1s1-2',
                  kind: 'analogy',
                  title: 'Shipping Containers',
                  emoji: '🚢',
                  body:
                    "Before shipping containers, cargo was loaded piece by piece — slow and chaotic. The standard steel container changed everything: any crane, ship, or truck can handle it because the *outside* is standard, no matter what is *inside*.\n\nDocker containers are the same for software. The platform does not care what is inside — it just runs the box the same way everywhere.",
                },
                {
                  id: 'd1c1s1-3',
                  kind: 'concept',
                  title: 'Why Developers Love Them',
                  emoji: '💙',
                  body:
                    "Containers give you three big wins:\n\n- **Consistency** — the same image runs in dev, test, and prod.\n- **Speed** — containers start in seconds, not minutes.\n- **Isolation** — one app's messy dependencies cannot break another's.\n\nThey are also easy to share: push an image to a registry and anyone can pull and run it.",
                },
                {
                  id: 'd1c1s1-4',
                  kind: 'tip',
                  title: 'It Is Just a Process',
                  emoji: '💡',
                  body:
                    "A container is **not** a mini-computer. It is really just one (or a few) normal Linux processes that the kernel keeps isolated using **namespaces** and **cgroups**.\n\nThat is why containers are so light: no separate operating system is booting up inside them.",
                },
                {
                  id: 'd1c1s1-5',
                  kind: 'diagram',
                  title: 'The Old Pain vs Containers',
                  emoji: '🔀',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Without Containers', emoji: '😫', items: ['Install deps by hand', 'Version conflicts', 'Works on my machine', 'Slow, fragile setup'] },
                      { title: 'With Containers', emoji: '😎', items: ['Deps baked into image', 'No conflicts', 'Runs the same anywhere', 'One command to start'] },
                    ],
                  },
                },
                {
                  id: 'd1c1s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  question: "What is the main benefit a container provides?",
                  options: [
                    { id: 'a', text: "It replaces your operating system", correct: false },
                    { id: 'b', text: "It bundles an app with its dependencies so it runs the same anywhere", correct: true },
                    { id: 'c', text: "It makes code run faster than native", correct: false },
                    { id: 'd', text: "It compiles your code automatically", correct: false },
                  ],
                  explanation:
                    "A container packages the app plus its runtime, libraries, and settings, giving you consistent, portable execution across machines.",
                },
                {
                  id: 'd1c1s1-7',
                  kind: 'example',
                  title: 'Same Box, Any Machine',
                  emoji: '🌍',
                  body:
                    "The whole promise in three commands:\n\n`docker build -t myapp .`\n`docker push alice/myapp`\n\nThen on any other machine:\n\n`docker run alice/myapp`\n\nSame bytes, same behavior — laptop, CI server, or cloud VM. No manual setup on the target host.",
                },
              ],
            },
            {
              id: 'd1c1s2',
              title: 'Containers vs Virtual Machines',
              summary: "How containers achieve isolation far more cheaply than VMs.",
              cards: [
                {
                  id: 'd1c1s2-1',
                  kind: 'concept',
                  title: 'The Key Difference',
                  emoji: '⚖️',
                  body:
                    "A **virtual machine** virtualizes hardware and runs a full guest **operating system** on top of a hypervisor. A **container** shares the host's kernel and only isolates the app.\n\nSo a VM is gigabytes and boots in minutes; a container is megabytes and starts in seconds.",
                  terms: [
                    { term: 'Hypervisor', definition: "Software that creates and runs virtual machines." },
                    { term: 'Guest OS', definition: "The full operating system running inside a VM." },
                    { term: 'Host kernel', definition: "The OS kernel that containers share, avoiding a guest OS." },
                  ],
                },
                {
                  id: 'd1c1s2-2',
                  kind: 'analogy',
                  title: 'Houses vs Apartments',
                  emoji: '🏢',
                  body:
                    "A VM is like a **standalone house** — its own foundation, plumbing, and electricity (a whole OS). Expensive to build and maintain.\n\nA container is like an **apartment** in a shared building. It has private rooms (isolation) but shares the building's foundation and utilities (the host kernel). Cheaper and faster to move into.",
                },
                {
                  id: 'd1c1s2-3',
                  kind: 'diagram',
                  title: 'VMs vs Containers',
                  emoji: '🆚',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Virtual Machine', emoji: '🖥️', items: ['Full guest OS each', 'Gigabytes in size', 'Boots in minutes', 'Runs on a hypervisor'] },
                      { title: 'Container', emoji: '📦', items: ['Shares host kernel', 'Megabytes in size', 'Starts in seconds', 'Runs on Docker Engine'] },
                    ],
                  },
                },
                {
                  id: 'd1c1s2-4',
                  kind: 'tip',
                  title: 'Not a Security VM',
                  emoji: '🔒',
                  body:
                    "Because containers share the host kernel, isolation is **weaker** than a VM's. That is fine for most workloads, but do not assume a container is a hard security boundary against a malicious tenant.\n\nFor strong multi-tenant isolation, people combine containers with VMs or use sandboxed runtimes.",
                },
                {
                  id: 'd1c1s2-5',
                  kind: 'compare',
                  title: 'Side by Side',
                  compare: {
                    headers: ['Aspect', 'Virtual Machine', 'Container'],
                    rows: [
                      ['Isolates', 'Whole machine', 'A process'],
                      ['Size', 'Gigabytes', 'Megabytes'],
                      ['Startup', 'Minutes', 'Seconds'],
                      ['OS', 'Own guest OS', 'Shares host kernel'],
                    ],
                  },
                },
                {
                  id: 'd1c1s2-6',
                  kind: 'quiz',
                  title: 'Knowledge Check',
                  question: "Why does a container start so much faster than a VM?",
                  options: [
                    { id: 'a', text: "It compiles ahead of time", correct: false },
                    { id: 'b', text: "It boots a smaller guest operating system", correct: false },
                    { id: 'c', text: "It shares the host kernel and does not boot a separate OS", correct: true },
                    { id: 'd', text: "It uses more CPU cores", correct: false },
                  ],
                  explanation:
                    "Containers share the host's kernel and are just isolated processes, so there is no guest OS to boot — they launch in seconds.",
                },
              ],
            },
          ],
        },
        {
          id: 'd1c2',
          title: 'Images, Architecture & First Run',
          emoji: '🏗️',
          description: "Images vs containers, how Docker's pieces fit together, and running something for real.",
          sections: [
            {
              id: 'd1c2s1',
              title: 'Images vs Containers',
              summary: "The blueprint versus the running thing.",
              cards: [
                {
                  id: 'd1c2s1-1',
                  kind: 'concept',
                  title: 'Image vs Container',
                  emoji: '🧱',
                  body:
                    "An **image** is a read-only template — a snapshot of a filesystem plus instructions for what to run. A **container** is a running (or stopped) *instance* of an image.\n\nOne image, many containers: you can start dozens of containers from the same image, each isolated from the others.",
                  terms: [
                    { term: 'Image', definition: "A read-only template used to create containers." },
                    { term: 'Container', definition: "A runnable instance of an image." },
                    { term: 'Instance', definition: "A single running copy created from an image." },
                  ],
                },
                {
                  id: 'd1c2s1-2',
                  kind: 'analogy',
                  title: 'Recipe and the Dish',
                  emoji: '🍜',
                  body:
                    "An image is a **recipe**: fixed instructions and ingredients. A container is a **dish you cooked** from that recipe.\n\nYou can cook the same recipe many times to make many dishes (containers). Eating one does not change the recipe, and the recipe never changes on its own.",
                },
                {
                  id: 'd1c2s1-3',
                  kind: 'diagram',
                  title: 'Image to Container',
                  emoji: '➡️',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'Image', sublabel: 'read-only template', emoji: '🧱' },
                      { label: 'docker run', sublabel: 'creates an instance', emoji: '▶️' },
                      { label: 'Container', sublabel: 'running process', emoji: '📦' },
                    ],
                  },
                },
                {
                  id: 'd1c2s1-4',
                  kind: 'tip',
                  title: 'Images Are Immutable',
                  emoji: '💡',
                  body:
                    "You never edit an image in place. To change it, you build a **new** image (usually a new tag). Changes a container makes to its own filesystem vanish when the container is removed — unless you use a volume.\n\nThis immutability is what makes images reliable to ship.",
                },
                {
                  id: 'd1c2s1-5',
                  kind: 'quiz',
                  title: 'Check Yourself',
                  question: "Which statement is true?",
                  options: [
                    { id: 'a', text: "A container is a template; an image is the running copy", correct: false },
                    { id: 'b', text: "An image is a read-only template; a container is a running instance of it", correct: true },
                    { id: 'c', text: "Images and containers are the same thing", correct: false },
                    { id: 'd', text: "You can only run one container per image", correct: false },
                  ],
                  explanation:
                    "Images are immutable templates; you can spin up many independent containers from a single image.",
                },
                {
                  id: 'd1c2s1-6',
                  kind: 'example',
                  title: 'One Image, Three Containers',
                  emoji: '🔢',
                  body:
                    "Run the same image three times on different ports:\n\n`docker run -d -p 8081:80 --name w1 nginx`\n`docker run -d -p 8082:80 --name w2 nginx`\n`docker run -d -p 8083:80 --name w3 nginx`\n\nThree isolated containers, one shared image on disk. `docker ps` shows all three.",
                },
              ],
            },
            {
              id: 'd1c2s2',
              title: 'The Docker Architecture',
              summary: "Client, daemon, and registry — who does what.",
              cards: [
                {
                  id: 'd1c2s2-1',
                  kind: 'concept',
                  title: 'Client, Daemon, Registry',
                  emoji: '🏛️',
                  body:
                    "Docker has three main pieces:\n\n- **Client** — the `docker` command you type.\n- **Daemon** (`dockerd`) — the background engine that actually builds images and runs containers.\n- **Registry** — a store of images (like **Docker Hub**) that you pull from and push to.\n\nThe client talks to the daemon over an API; the daemon talks to the registry.",
                  terms: [
                    { term: 'Docker daemon', definition: "The background service (dockerd) that manages images and containers." },
                    { term: 'Registry', definition: "A storage and distribution system for Docker images." },
                    { term: 'Docker Hub', definition: "Docker's default public registry of images." },
                  ],
                },
                {
                  id: 'd1c2s2-2',
                  kind: 'analogy',
                  title: 'Waiter, Kitchen, Pantry',
                  emoji: '🍽️',
                  body:
                    "The **client** is the waiter taking your order. The **daemon** is the kitchen that actually cooks. The **registry** is the pantry stocked with ingredients (images).\n\nYou tell the waiter what you want, the kitchen fetches ingredients from the pantry and prepares the meal (your container).",
                },
                {
                  id: 'd1c2s2-3',
                  kind: 'diagram',
                  title: 'How the Pieces Talk',
                  emoji: '🔗',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'CLI Client', sublabel: 'docker ...', emoji: '⌨️' },
                      { label: 'Daemon', sublabel: 'dockerd', emoji: '⚙️' },
                      { label: 'Registry', sublabel: 'Docker Hub', emoji: '🗄️' },
                    ],
                  },
                },
                {
                  id: 'd1c2s2-4',
                  kind: 'example',
                  title: 'What Happens on docker run',
                  emoji: '🔍',
                  body:
                    "When you run:\n\n`docker run nginx`\n\n1. The client sends the request to the daemon.\n2. The daemon checks for the `nginx` image locally.\n3. If missing, it **pulls** it from the registry.\n4. It creates a container from the image and starts it.\n\nOne line, four steps handled for you.",
                },
                {
                  id: 'd1c2s2-5',
                  kind: 'tip',
                  title: 'Daemon Must Be Running',
                  emoji: '⚠️',
                  body:
                    "If you see \"Cannot connect to the Docker daemon\", the engine is not running. On Mac and Windows, start **Docker Desktop**. On Linux, run `sudo systemctl start docker`.\n\nThe client is useless without the daemon behind it.",
                },
                {
                  id: 'd1c2s2-6',
                  kind: 'quiz',
                  title: 'Who Does the Work?',
                  question: "Which component actually builds images and runs containers?",
                  options: [
                    { id: 'a', text: "The Docker client (CLI)", correct: false },
                    { id: 'b', text: "The Docker daemon (dockerd)", correct: true },
                    { id: 'c', text: "The registry", correct: false },
                    { id: 'd', text: "Docker Hub", correct: false },
                  ],
                  explanation:
                    "The client just sends commands; the daemon (dockerd) does the real work of building and running. The registry only stores images.",
                },
              ],
            },
            {
              id: 'd1c2s3',
              title: 'Install & First Run',
              summary: "Verify Docker works, then launch your first container.",
              cards: [
                {
                  id: 'd1c2s3-1',
                  kind: 'concept',
                  title: 'Getting Docker',
                  emoji: '📥',
                  body:
                    "On Mac and Windows, install **Docker Desktop** — it bundles the engine, CLI, and Compose. On Linux, install **Docker Engine** via your package manager.\n\nOnce installed, everything runs through the `docker` command in your terminal.",
                },
                {
                  id: 'd1c2s3-2',
                  kind: 'example',
                  title: 'Verify the Install',
                  emoji: '✅',
                  body:
                    "Check the client and daemon versions:\n\n`docker version`\n\nGet a fuller system overview:\n\n`docker info`\n\nThen run the classic smoke test:\n\n`docker run hello-world`\n\nIf you see a friendly \"Hello from Docker!\" message, everything works.",
                },
                {
                  id: 'd1c2s3-3',
                  kind: 'example',
                  title: 'Run a Real Web Server',
                  emoji: '🌐',
                  body:
                    "Launch Nginx in the background and publish it:\n\n`docker run -d -p 8080:80 --name web nginx`\n\n- `-d` runs detached (in the background).\n- `-p 8080:80` maps host port 8080 to container port 80.\n- `--name web` gives it a friendly name.\n\nOpen `http://localhost:8080` to see it.",
                },
                {
                  id: 'd1c2s3-4',
                  kind: 'concept',
                  title: 'Reading docker run',
                  emoji: '🧭',
                  body:
                    "The shape of the command is:\n\n`docker run [options] IMAGE [command]`\n\nCommon options:\n\n- `-d` detached\n- `-p host:container` publish a port\n- `--name` name the container\n- `-e KEY=value` set an environment variable\n- `--rm` auto-remove when it stops",
                  terms: [
                    { term: 'Detached mode', definition: "Running a container in the background with -d." },
                    { term: 'Port publishing', definition: "Mapping a host port to a container port with -p." },
                  ],
                },
                {
                  id: 'd1c2s3-5',
                  kind: 'tip',
                  title: 'Port Mapping Direction',
                  emoji: '💡',
                  body:
                    "In `-p 8080:80`, the **left** number is the host port you visit, and the **right** is the port inside the container. It is always `HOST:CONTAINER`.\n\nGet these backwards and your browser will show nothing — a very common first-day gotcha.",
                },
                {
                  id: 'd1c2s3-6',
                  kind: 'quiz',
                  title: 'Ports Quiz',
                  question: "You run `docker run -d -p 3000:80 nginx`. Which URL reaches Nginx?",
                  options: [
                    { id: 'a', text: "http://localhost:80", correct: false },
                    { id: 'b', text: "http://localhost:3000", correct: true },
                    { id: 'c', text: "http://localhost:8080", correct: false },
                    { id: 'd', text: "It is not reachable", correct: false },
                  ],
                  explanation:
                    "The host port is on the left of the colon, so you visit port 3000 on the host, which forwards to port 80 inside the container.",
                },
              ],
            },
          ],
        },
      ],
    },
    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 2 — Images & Containers
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd2',
      title: 'Images & Containers',
      emoji: '📦',
      description:
        "Manage the container lifecycle, write your own Dockerfile, build and tag images, understand layers and caching, and push to a registry.",
      project: {
        title: "Containerize a Web App 🐍",
        brief:
          "Write a Dockerfile for a small web app (Node or Python), then build, tag, and push it.\n\n- Create a Dockerfile with `FROM`, `WORKDIR`, `COPY`, `RUN`, `EXPOSE`, and `CMD`.\n- Build it: `docker build -t myapp:1.0 .`\n- Run it: `docker run -d -p 8080:3000 myapp:1.0`\n- Tag and push to Docker Hub: `docker tag myapp:1.0 <user>/myapp:1.0` then `docker push`.",
        buildsOn:
          "In Domain 1 you ran a prebuilt Nginx image. Now you build and publish your OWN image instead of borrowing someone else's.",
        stretch:
          "Add an `.dockerignore` and reorder your Dockerfile so dependency install is cached separately from source copy. Rebuild and watch the cache kick in.",
      },
      chapters: [
        {
          id: 'd2c1',
          title: 'The Container Lifecycle',
          emoji: '♻️',
          description: "Pulling, running, inspecting, stopping, and cleaning up containers.",
          sections: [
            {
              id: 'd2c1s1',
              title: 'Pull & Run',
              summary: "Getting images and starting containers from them.",
              cards: [
                {
                  id: 'd2c1s1-1',
                  kind: 'concept',
                  title: 'Pulling Images',
                  emoji: '⬇️',
                  body:
                    "`docker pull` downloads an image from a registry without running it:\n\n`docker pull python:3.12`\n\nIf you skip the tag, Docker assumes `:latest`. `docker run` pulls automatically if the image is not already local, so you rarely pull by hand.",
                  terms: [
                    { term: 'Pull', definition: "Downloading an image from a registry to your machine." },
                    { term: 'latest tag', definition: "The default tag used when none is specified." },
                  ],
                },
                {
                  id: 'd2c1s1-2',
                  kind: 'example',
                  title: 'Interactive Containers',
                  emoji: '⌨️',
                  body:
                    "Get a shell inside a fresh Ubuntu container:\n\n`docker run -it ubuntu bash`\n\n- `-i` keeps input open.\n- `-t` gives you a terminal.\n\nType `exit` to leave. Add `--rm` so the container is deleted the moment you exit.",
                },
                {
                  id: 'd2c1s1-3',
                  kind: 'diagram',
                  title: 'Lifecycle States',
                  emoji: '🔄',
                  diagram: {
                    type: 'cycle',
                    nodes: [
                      { label: 'Created', emoji: '🆕' },
                      { label: 'Running', emoji: '▶️' },
                      { label: 'Stopped', emoji: '⏸️' },
                      { label: 'Removed', emoji: '🗑️' },
                    ],
                  },
                },
                {
                  id: 'd2c1s1-4',
                  kind: 'tip',
                  title: 'Use --rm for Throwaways',
                  emoji: '💡',
                  body:
                    "Every container you run leaves a stopped shell behind unless you clean up. For quick experiments, add `--rm`:\n\n`docker run --rm -it alpine sh`\n\nWhen you exit, the container disappears — no clutter for `docker ps -a` to collect.",
                },
                {
                  id: 'd2c1s1-5',
                  kind: 'quiz',
                  title: 'Interactive Flags',
                  question: "Which flags give you an interactive terminal inside a container?",
                  options: [
                    { id: 'a', text: "-d", correct: false },
                    { id: 'b', text: "-it", correct: true },
                    { id: 'c', text: "-p", correct: false },
                    { id: 'd', text: "-e", correct: false },
                  ],
                  explanation:
                    "`-i` keeps stdin open and `-t` allocates a pseudo-terminal; together (`-it`) they give you an interactive shell.",
                },
                {
                  id: 'd2c1s1-6',
                  kind: 'tip',
                  title: 'run Creates, start Reuses',
                  emoji: '💡',
                  body:
                    "`docker run` always creates a **brand-new** container from an image. `docker start` re-launches an **existing** stopped one, keeping its name and any data in its writable layer.\n\nRunning `docker run` repeatedly is how you accidentally pile up dozens of stopped containers.",
                },
              ],
            },
            {
              id: 'd2c1s2',
              title: 'Inspect & Manage',
              summary: "ps, logs, exec, stop, start, and rm.",
              cards: [
                {
                  id: 'd2c1s2-1',
                  kind: 'concept',
                  title: 'Listing Containers',
                  emoji: '📋',
                  body:
                    "`docker ps` lists **running** containers. Add `-a` to also see stopped ones:\n\n`docker ps -a`\n\nEach row shows the container ID, image, status, ports, and name — the name or ID is how you target it in other commands.",
                  terms: [
                    { term: 'docker ps', definition: "Lists running containers; -a includes stopped ones." },
                    { term: 'Container ID', definition: "A unique hash identifying a container." },
                  ],
                },
                {
                  id: 'd2c1s2-2',
                  kind: 'example',
                  title: 'Logs and Exec',
                  emoji: '📝',
                  body:
                    "See a container's output:\n\n`docker logs web`\n\nFollow it live with `docker logs -f web`.\n\nRun a command inside a running container — for example, open a shell:\n\n`docker exec -it web sh`\n\n`exec` is your window into a live container.",
                },
                {
                  id: 'd2c1s2-3',
                  kind: 'example',
                  title: 'Stop, Start, Remove',
                  emoji: '🛑',
                  body:
                    "Manage lifecycle by name or ID:\n\n- `docker stop web` — graceful stop.\n- `docker start web` — start it again.\n- `docker rm web` — delete a **stopped** container.\n- `docker rm -f web` — force-remove a running one.\n\nRemove an image with `docker rmi nginx`.",
                },
                {
                  id: 'd2c1s2-4',
                  kind: 'tip',
                  title: 'Stop Before Remove',
                  emoji: '⚠️',
                  body:
                    "`docker rm` refuses to delete a **running** container. Either `docker stop` it first, or use `docker rm -f` to force it.\n\nTo sweep up all stopped containers at once: `docker container prune`. Handy after a day of experiments.",
                },
                {
                  id: 'd2c1s2-5',
                  kind: 'compare',
                  title: 'stop vs kill vs rm',
                  compare: {
                    headers: ['Command', 'What it does'],
                    rows: [
                      ['docker stop', 'Sends SIGTERM, then SIGKILL — graceful'],
                      ['docker kill', 'Sends SIGKILL immediately — abrupt'],
                      ['docker rm', 'Deletes a stopped container'],
                    ],
                  },
                },
                {
                  id: 'd2c1s2-6',
                  kind: 'quiz',
                  title: 'Debugging Live',
                  question: "A container is running but misbehaving. How do you open a shell inside it to look around?",
                  options: [
                    { id: 'a', text: "docker run -it web sh", correct: false },
                    { id: 'b', text: "docker exec -it web sh", correct: true },
                    { id: 'c', text: "docker logs web sh", correct: false },
                    { id: 'd', text: "docker start web sh", correct: false },
                  ],
                  explanation:
                    "`docker exec` runs a new command in an already-running container. `docker run` would start a brand-new container instead.",
                },
              ],
            },
          ],
        },
        {
          id: 'd2c2',
          title: 'Writing a Dockerfile',
          emoji: '📄',
          description: "The instructions that turn your app into an image.",
          sections: [
            {
              id: 'd2c2s1',
              title: 'Dockerfile Basics',
              summary: "FROM, RUN, COPY, WORKDIR, and the run command.",
              cards: [
                {
                  id: 'd2c2s1-1',
                  kind: 'concept',
                  title: 'What Is a Dockerfile?',
                  emoji: '📄',
                  body:
                    "A **Dockerfile** is a plain text recipe with step-by-step instructions Docker follows to build an image. Each instruction is a keyword in CAPS followed by arguments.\n\n`docker build` reads the Dockerfile top to bottom and produces an image you can run.",
                  terms: [
                    { term: 'Dockerfile', definition: "A text file of instructions used to build an image." },
                    { term: 'Instruction', definition: "A single build step, e.g. FROM, RUN, or COPY." },
                    { term: 'Build context', definition: "The folder sent to the daemon, referenced by COPY." },
                  ],
                },
                {
                  id: 'd2c2s1-2',
                  kind: 'example',
                  title: 'A First Dockerfile',
                  emoji: '🐍',
                  body:
                    "A minimal Python web app image:\n\n`FROM python:3.12-slim`\n`WORKDIR /app`\n`COPY requirements.txt .`\n`RUN pip install -r requirements.txt`\n`COPY . .`\n`EXPOSE 8000`\n`CMD [\"python\", \"app.py\"]`\n\nEach line becomes a step in the build.",
                },
                {
                  id: 'd2c2s1-3',
                  kind: 'concept',
                  title: 'The Core Instructions',
                  emoji: '🧩',
                  body:
                    "The essentials:\n\n- **FROM** — the base image to start from.\n- **WORKDIR** — sets the working directory inside the image.\n- **COPY** — copies files from your machine into the image.\n- **RUN** — runs a command at *build* time (e.g. install deps).\n- **CMD** — the default command at *run* time.",
                  terms: [
                    { term: 'FROM', definition: "Declares the base image a build starts from." },
                    { term: 'RUN', definition: "Executes a command while building the image." },
                    { term: 'CMD', definition: "The default command run when a container starts." },
                  ],
                },
                {
                  id: 'd2c2s1-4',
                  kind: 'analogy',
                  title: 'A Cooking Recipe',
                  emoji: '👩‍🍳',
                  body:
                    "A Dockerfile is a recipe. `FROM` is your starter dough. `RUN` steps are prep work done once in the kitchen (building). `CMD` is the final \"serve hot\" instruction that happens every time someone orders (running).\n\nBuild the recipe once; serve the dish many times.",
                },
                {
                  id: 'd2c2s1-5',
                  kind: 'tip',
                  title: 'RUN vs CMD Timing',
                  emoji: '💡',
                  body:
                    "**RUN** happens at **build** time and its result is baked into a layer. **CMD** happens at **run** time, every time a container starts.\n\nInstalling packages? Use RUN. Starting your server? Use CMD. Mixing these up is a classic beginner slip.",
                },
                {
                  id: 'd2c2s1-6',
                  kind: 'quiz',
                  title: 'Build vs Run',
                  question: "Where should `RUN npm install` go in the build, and when does it execute?",
                  options: [
                    { id: 'a', text: "It executes each time the container starts", correct: false },
                    { id: 'b', text: "It executes once at build time and is baked into a layer", correct: true },
                    { id: 'c', text: "It executes only when you run docker pull", correct: false },
                    { id: 'd', text: "It never executes; it is a comment", correct: false },
                  ],
                  explanation:
                    "RUN instructions execute during `docker build` and their output becomes part of the image layer — not at container start.",
                },
              ],
            },
            {
              id: 'd2c2s2',
              title: 'CMD, ENTRYPOINT, EXPOSE & ENV',
              summary: "Configuring how the container starts and behaves.",
              cards: [
                {
                  id: 'd2c2s2-1',
                  kind: 'concept',
                  title: 'CMD vs ENTRYPOINT',
                  emoji: '🎬',
                  body:
                    "**ENTRYPOINT** sets the fixed executable a container runs. **CMD** provides default arguments (or a default command) that are easy to override.\n\nUse ENTRYPOINT when the container should always run one program; use CMD for the default behavior you might override at `docker run`.",
                  terms: [
                    { term: 'ENTRYPOINT', definition: "The fixed executable a container always runs." },
                    { term: 'CMD', definition: "Default arguments or command, easily overridden at run time." },
                  ],
                },
                {
                  id: 'd2c2s2-2',
                  kind: 'example',
                  title: 'Combining Them',
                  emoji: '🔧',
                  body:
                    "Pattern: fixed program + default arg.\n\n`ENTRYPOINT [\"python\", \"app.py\"]`\n`CMD [\"--port=8000\"]`\n\nRunning `docker run myapp` uses `--port=8000`. Running `docker run myapp --port=9000` overrides just the CMD part, keeping the ENTRYPOINT.",
                },
                {
                  id: 'd2c2s2-3',
                  kind: 'compare',
                  title: 'CMD vs ENTRYPOINT',
                  compare: {
                    headers: ['Aspect', 'CMD', 'ENTRYPOINT'],
                    rows: [
                      ['Purpose', 'Default command/args', 'Fixed executable'],
                      ['Overridable', 'Yes, easily at run', 'Only with --entrypoint'],
                      ['Typical use', 'Default behavior', 'Wrapper / always-run program'],
                    ],
                  },
                },
                {
                  id: 'd2c2s2-4',
                  kind: 'concept',
                  title: 'EXPOSE & ENV',
                  emoji: '🌍',
                  body:
                    "**EXPOSE** documents which port the app listens on — it is metadata, not an actual port opening (you still need `-p` at run time).\n\n**ENV** sets environment variables baked into the image:\n\n`ENV NODE_ENV=production`\n\nApps read these at run time to configure themselves.",
                  terms: [
                    { term: 'EXPOSE', definition: "Documents the port the container listens on (metadata only)." },
                    { term: 'ENV', definition: "Sets an environment variable inside the image." },
                  ],
                },
                {
                  id: 'd2c2s2-5',
                  kind: 'tip',
                  title: 'EXPOSE Does Not Publish',
                  emoji: '⚠️',
                  body:
                    "A common myth: `EXPOSE 80` makes the port reachable. It does **not**. It is only documentation.\n\nTo actually reach the port from your host you still need `-p 8080:80` on `docker run`. EXPOSE just tells humans (and Compose) which port matters.",
                },
                {
                  id: 'd2c2s2-6',
                  kind: 'quiz',
                  title: 'EXPOSE Reality',
                  question: "Your Dockerfile has `EXPOSE 5000` but you cannot reach the app from your browser. Why?",
                  options: [
                    { id: 'a', text: "EXPOSE is only metadata; you must also publish with -p", correct: true },
                    { id: 'b', text: "EXPOSE must come before FROM", correct: false },
                    { id: 'c', text: "You need two EXPOSE lines", correct: false },
                    { id: 'd', text: "EXPOSE only works with ENTRYPOINT", correct: false },
                  ],
                  explanation:
                    "EXPOSE documents the port but does not open it. You still need `-p host:5000` at run time to reach it from the host.",
                },
              ],
            },
            {
              id: 'd2c2s3',
              title: 'Build, Layers & Push',
              summary: "Building images, caching layers, tagging, and pushing.",
              cards: [
                {
                  id: 'd2c2s3-1',
                  kind: 'example',
                  title: 'Building an Image',
                  emoji: '🔨',
                  body:
                    "From the folder with your Dockerfile:\n\n`docker build -t myapp:1.0 .`\n\n- `-t myapp:1.0` names and tags the image.\n- `.` is the build context (the current folder).\n\nList your images with `docker images`.",
                },
                {
                  id: 'd2c2s3-2',
                  kind: 'concept',
                  title: 'Image Layers',
                  emoji: '🧅',
                  body:
                    "Each Dockerfile instruction creates a **layer** — a stacked, read-only filesystem diff. Layers are cached and shared between images, so a common base is only stored once.\n\nWhen you run a container, Docker adds a thin writable layer on top.",
                  terms: [
                    { term: 'Layer', definition: "A read-only filesystem diff created by one instruction." },
                    { term: 'Build cache', definition: "Reused layers that skip rebuilding unchanged steps." },
                    { term: 'Writable layer', definition: "The thin top layer where a running container writes changes." },
                  ],
                },
                {
                  id: 'd2c2s3-3',
                  kind: 'diagram',
                  title: 'Stacked Layers',
                  emoji: '🥞',
                  diagram: {
                    type: 'stack',
                    direction: 'vertical',
                    nodes: [
                      { label: 'Writable layer', sublabel: 'container runtime', emoji: '✏️' },
                      { label: 'COPY . .', sublabel: 'app source', emoji: '📁' },
                      { label: 'RUN install deps', sublabel: 'dependencies', emoji: '📦' },
                      { label: 'FROM base image', sublabel: 'OS + runtime', emoji: '🧱' },
                    ],
                  },
                },
                {
                  id: 'd2c2s3-4',
                  kind: 'tip',
                  title: 'Order for Cache Hits',
                  emoji: '💡',
                  body:
                    "Docker caches a layer until an instruction (or its inputs) change — then that layer and **everything after it** rebuild.\n\nCopy dependency files and install *before* copying all your source. Then editing source does not bust the expensive dependency layer.",
                },
                {
                  id: 'd2c2s3-5',
                  kind: 'concept',
                  title: 'Tags & Registries',
                  emoji: '🏷️',
                  body:
                    "A **tag** is a label like `myapp:1.0`. The full name for a registry push is `registry/user/repo:tag`.\n\nRe-tag an image:\n\n`docker tag myapp:1.0 alice/myapp:1.0`\n\nOne image can carry several tags at once (e.g. `1.0` and `latest`).",
                  terms: [
                    { term: 'Tag', definition: "A human-readable label identifying an image version." },
                    { term: 'Repository', definition: "A named collection of related image tags." },
                  ],
                },
                {
                  id: 'd2c2s3-6',
                  kind: 'example',
                  title: 'Push to Docker Hub',
                  emoji: '🚀',
                  body:
                    "Log in, tag, and push:\n\n`docker login`\n`docker tag myapp:1.0 alice/myapp:1.0`\n`docker push alice/myapp:1.0`\n\nNow anyone can `docker pull alice/myapp:1.0` and run it. That is the whole \"build once, run anywhere\" promise.",
                },
                {
                  id: 'd2c2s3-7',
                  kind: 'diagram',
                  title: 'Build to Run Pipeline',
                  emoji: '🛠️',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'build', emoji: '🔨' },
                      { label: 'tag', emoji: '🏷️' },
                      { label: 'push', emoji: '⬆️' },
                      { label: 'pull', emoji: '⬇️' },
                      { label: 'run', emoji: '▶️' },
                    ],
                  },
                },
                {
                  id: 'd2c2s3-8',
                  kind: 'quiz',
                  title: 'Caching Strategy',
                  question: "Why copy `package.json` and run install BEFORE copying the rest of your source?",
                  options: [
                    { id: 'a', text: "It makes the image smaller", correct: false },
                    { id: 'b', text: "So editing source code does not invalidate the cached dependency layer", correct: true },
                    { id: 'c', text: "Because COPY must come first", correct: false },
                    { id: 'd', text: "It is required by the Dockerfile syntax", correct: false },
                  ],
                  explanation:
                    "Layers rebuild when their inputs change. Installing deps in an earlier layer keeps that slow step cached when only your source changes.",
                },
              ],
            },
          ],
        },
      ],
    },
    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 3 — Data & Networking
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd3',
      title: 'Data & Networking',
      emoji: '🔌',
      description:
        "Containers forget everything by default. Learn volumes and bind mounts to persist data, then wire containers together with ports and Docker networks.",
      project: {
        title: "Add a Database & Persist It 🗄️",
        brief:
          "Give your app a database container, connect them on a network, and persist the data.\n\n- Create a network: `docker network create appnet`.\n- Run Postgres on it with a named volume: `docker run -d --name db --network appnet -v pgdata:/var/lib/postgresql/data -e POSTGRES_PASSWORD=secret postgres:16`.\n- Run your app on the same network so it reaches the DB by the hostname `db`.\n- Stop and restart the DB — the data survives.",
        buildsOn:
          "In Domain 2 you built and pushed your app image. Now that app gains a real, persistent database it can talk to.",
        stretch:
          "Prove persistence: write a row, `docker rm -f db`, recreate the container against the same `pgdata` volume, and confirm the row is still there.",
      },
      chapters: [
        {
          id: 'd3c1',
          title: 'Persisting Data',
          emoji: '💾',
          description: "Why data disappears and how volumes and bind mounts keep it.",
          sections: [
            {
              id: 'd3c1s1',
              title: 'The Ephemeral Filesystem',
              summary: "Why a fresh container forgets everything.",
              cards: [
                {
                  id: 'd3c1s1-1',
                  kind: 'concept',
                  title: 'Containers Are Forgetful',
                  emoji: '🧠',
                  body:
                    "A container writes to a thin **writable layer** on top of its image. When you remove the container, that layer — and all its data — is gone.\n\nThis is by design: containers are meant to be disposable. But databases and uploads need to outlive the container.",
                  terms: [
                    { term: 'Ephemeral', definition: "Short-lived; data is lost when the container is removed." },
                    { term: 'Writable layer', definition: "The temporary layer where a container's changes live." },
                  ],
                },
                {
                  id: 'd3c1s1-2',
                  kind: 'analogy',
                  title: 'A Hotel Room',
                  emoji: '🏨',
                  body:
                    "A container is like a hotel room. You can rearrange furniture and leave towels on the floor, but when you check out, housekeeping resets everything.\n\nIf you want to keep something, you take it home — that is what a **volume** does: it stores data outside the disposable room.",
                },
                {
                  id: 'd3c1s1-3',
                  kind: 'diagram',
                  title: 'Where Data Lives',
                  emoji: '🗂️',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Writable Layer', emoji: '🚮', items: ['Inside the container', 'Deleted with it', 'Good for temp files'] },
                      { title: 'Volume', emoji: '💾', items: ['Managed by Docker', 'Outlives the container', 'Good for real data'] },
                    ],
                  },
                },
                {
                  id: 'd3c1s1-4',
                  kind: 'tip',
                  title: 'Never Store DB Data in the Container',
                  emoji: '⚠️',
                  body:
                    "Running a database without a volume is a data-loss trap. The moment the container is recreated — for an upgrade, say — every row vanishes.\n\nAlways mount a volume at the database's data directory (e.g. `/var/lib/postgresql/data`).",
                },
                {
                  id: 'd3c1s1-5',
                  kind: 'quiz',
                  title: 'Data Survival',
                  question: "You save a file inside a running container, then `docker rm` it. What happens to the file?",
                  options: [
                    { id: 'a', text: "It is automatically backed up", correct: false },
                    { id: 'b', text: "It is lost with the container's writable layer", correct: true },
                    { id: 'c', text: "It moves to the image", correct: false },
                    { id: 'd', text: "It is pushed to the registry", correct: false },
                  ],
                  explanation:
                    "Changes live in the container's writable layer, which is destroyed on removal. Use a volume to persist data.",
                },
              ],
            },
            {
              id: 'd3c1s2',
              title: 'Volumes & Bind Mounts',
              summary: "Two ways to persist data — and when to use each.",
              cards: [
                {
                  id: 'd3c1s2-1',
                  kind: 'concept',
                  title: 'Named Volumes',
                  emoji: '💾',
                  body:
                    "A **named volume** is storage that Docker manages for you, living outside any single container.\n\nCreate and use one:\n\n`docker volume create pgdata`\n`docker run -v pgdata:/var/lib/postgresql/data postgres`\n\nInspect with `docker volume ls`. It survives container removal.",
                  terms: [
                    { term: 'Named volume', definition: "Docker-managed persistent storage referenced by name." },
                    { term: 'Mount point', definition: "The path inside the container where the volume appears." },
                  ],
                },
                {
                  id: 'd3c1s2-2',
                  kind: 'concept',
                  title: 'Bind Mounts',
                  emoji: '🔗',
                  body:
                    "A **bind mount** maps a specific folder on your host straight into the container:\n\n`docker run -v $(pwd):/app node`\n\nChanges on either side are instantly visible on the other. It is perfect for live-reloading your code during development.",
                  terms: [
                    { term: 'Bind mount', definition: "Mapping a host directory directly into a container." },
                  ],
                },
                {
                  id: 'd3c1s2-3',
                  kind: 'compare',
                  title: 'Volume vs Bind Mount',
                  compare: {
                    headers: ['Aspect', 'Named Volume', 'Bind Mount'],
                    rows: [
                      ['Managed by', 'Docker', 'You (host path)'],
                      ['Best for', 'Databases, prod data', 'Live dev code'],
                      ['Portable', 'Yes', 'Ties to host path'],
                      ['Location', 'Docker area', 'Any host folder'],
                    ],
                  },
                },
                {
                  id: 'd3c1s2-4',
                  kind: 'diagram',
                  title: 'Two Mount Styles',
                  emoji: '⚖️',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Named Volume', emoji: '💾', items: ['Docker manages location', 'Great for prod data', 'Portable across hosts'] },
                      { title: 'Bind Mount', emoji: '🔗', items: ['You pick host folder', 'Great for dev code', 'Instant file sync'] },
                    ],
                  },
                },
                {
                  id: 'd3c1s2-5',
                  kind: 'tip',
                  title: 'Prefer Volumes in Production',
                  emoji: '💡',
                  body:
                    "Use **bind mounts** for development so code edits show up instantly. Use **named volumes** in production — they are portable, managed, and do not depend on a specific host directory layout.\n\nMixing these up leads to \"works locally, breaks on the server\".",
                },
                {
                  id: 'd3c1s2-6',
                  kind: 'quiz',
                  title: 'Pick the Mount',
                  question: "You want live code reloading while editing files on your laptop. Which do you use?",
                  options: [
                    { id: 'a', text: "A named volume", correct: false },
                    { id: 'b', text: "A bind mount to your project folder", correct: true },
                    { id: 'c', text: "The writable layer", correct: false },
                    { id: 'd', text: "An extra image tag", correct: false },
                  ],
                  explanation:
                    "A bind mount maps your host project folder into the container, so edits are visible immediately — ideal for development.",
                },
              ],
            },
          ],
        },
        {
          id: 'd3c2',
          title: 'Networking Containers',
          emoji: '🌐',
          description: "Publishing ports and letting containers talk to each other.",
          sections: [
            {
              id: 'd3c2s1',
              title: 'Ports & Publishing',
              summary: "Exposing a container's port to the outside world.",
              cards: [
                {
                  id: 'd3c2s1-1',
                  kind: 'concept',
                  title: 'Publishing Ports',
                  emoji: '📢',
                  body:
                    "By default a container's ports are only reachable from inside Docker's network. To reach one from your host, **publish** it:\n\n`docker run -p 8080:80 nginx`\n\nThis maps host port 8080 to container port 80. Without `-p`, your browser sees nothing.",
                  terms: [
                    { term: 'Publish', definition: "Mapping a container port to a host port with -p." },
                    { term: 'Host port', definition: "The port on your machine that forwards into the container." },
                  ],
                },
                {
                  id: 'd3c2s1-2',
                  kind: 'example',
                  title: 'Multiple Ports',
                  emoji: '🔢',
                  body:
                    "Publish several ports by repeating `-p`:\n\n`docker run -p 8080:80 -p 8443:443 nginx`\n\nBind to a specific host interface for safety:\n\n`docker run -p 127.0.0.1:8080:80 nginx`\n\nThat last one is reachable only from the local machine, not the network.",
                },
                {
                  id: 'd3c2s1-3',
                  kind: 'tip',
                  title: 'Port Already in Use',
                  emoji: '⚠️',
                  body:
                    "\"Bind: address already in use\" means another process (or container) already holds that host port.\n\nPick a different host port — `-p 8081:80` — or stop whatever is using it. The container port on the right can stay the same.",
                },
                {
                  id: 'd3c2s1-4',
                  kind: 'quiz',
                  title: 'Localhost Only',
                  question: "What does `-p 127.0.0.1:8080:80` do differently from `-p 8080:80`?",
                  options: [
                    { id: 'a', text: "Nothing, they are identical", correct: false },
                    { id: 'b', text: "It makes the port reachable only from the local machine", correct: true },
                    { id: 'c', text: "It uses UDP instead of TCP", correct: false },
                    { id: 'd', text: "It disables the port", correct: false },
                  ],
                  explanation:
                    "Prefixing the host IP binds the published port to that interface only — here, loopback — so it is not exposed to the wider network.",
                },
                {
                  id: 'd3c2s1-5',
                  kind: 'concept',
                  title: 'Publish vs Internal',
                  emoji: '🚪',
                  body:
                    "You only need `-p` for ports the **outside world** must reach — typically your web server. Backend services like databases usually should *not* be published.\n\nContainers on the same network already reach each other on any port internally, so leaving the DB unpublished keeps it off the host network entirely.",
                },
              ],
            },
            {
              id: 'd3c2s2',
              title: 'Docker Networks & DNS',
              summary: "Bridge, host, none, and container-to-container names.",
              cards: [
                {
                  id: 'd3c2s2-1',
                  kind: 'concept',
                  title: 'Network Drivers',
                  emoji: '🕸️',
                  body:
                    "Docker offers several network drivers:\n\n- **bridge** — the default; containers get a private network and can be published.\n- **host** — shares the host's network directly (Linux); no isolation.\n- **none** — no networking at all.\n\nMost apps use a user-defined bridge network.",
                  terms: [
                    { term: 'Bridge network', definition: "A private virtual network Docker creates for containers." },
                    { term: 'Host network', definition: "Removes network isolation; container shares the host stack." },
                    { term: 'None network', definition: "A container with networking disabled." },
                  ],
                },
                {
                  id: 'd3c2s2-2',
                  kind: 'concept',
                  title: 'Container DNS',
                  emoji: '📇',
                  body:
                    "On a **user-defined bridge network**, Docker runs a built-in DNS so containers can reach each other by **name**.\n\nIf a container is named `db`, another container on the same network connects to it simply as `db:5432` — no IP addresses needed.",
                  terms: [
                    { term: 'Service discovery', definition: "Finding another container by name rather than IP." },
                    { term: 'Embedded DNS', definition: "Docker's built-in name resolution on user networks." },
                  ],
                },
                {
                  id: 'd3c2s2-3',
                  kind: 'example',
                  title: 'Connect Two Containers',
                  emoji: '🔌',
                  body:
                    "Create a network and put both containers on it:\n\n`docker network create appnet`\n`docker run -d --name db --network appnet postgres`\n`docker run -d --name web --network appnet myapp`\n\nInside `web`, the database is reachable at the hostname `db`.",
                },
                {
                  id: 'd3c2s2-4',
                  kind: 'diagram',
                  title: 'Web Talks to DB',
                  emoji: '🗣️',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'web', sublabel: 'app container', emoji: '🌐' },
                      { label: 'appnet', sublabel: 'bridge + DNS', emoji: '🕸️' },
                      { label: 'db', sublabel: 'postgres', emoji: '🗄️' },
                    ],
                  },
                },
                {
                  id: 'd3c2s2-5',
                  kind: 'tip',
                  title: 'Default Bridge Has No DNS by Name',
                  emoji: '💡',
                  body:
                    "The **default** `bridge` network does *not* give you name-based DNS between containers — only user-defined networks do.\n\nSo always create your own network (`docker network create`) when containers need to find each other by name. Compose does this for you automatically.",
                },
                {
                  id: 'd3c2s2-6',
                  kind: 'quiz',
                  title: 'Finding the DB',
                  question: "Two containers share a user-defined network. The DB container is named `db`. How does the web app connect to it?",
                  options: [
                    { id: 'a', text: "By the host's public IP", correct: false },
                    { id: 'b', text: "By the hostname `db`, thanks to Docker's embedded DNS", correct: true },
                    { id: 'c', text: "It cannot; you must publish the DB port", correct: false },
                    { id: 'd', text: "By using localhost", correct: false },
                  ],
                  explanation:
                    "On a user-defined network, Docker's embedded DNS resolves container names, so `web` reaches `db` simply by its name.",
                },
              ],
            },
          ],
        },
      ],
    },
    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 4 — Docker Compose
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd4',
      title: 'Docker Compose',
      emoji: '🎼',
      description:
        "Stop typing long docker run commands. Describe a whole multi-container app in one YAML file and bring it up with a single command.",
      project: {
        title: "One-Command Stack 🎛️",
        brief:
          "Describe your whole app in a docker-compose.yml and start it with one command.\n\n- Define a `web` service (built from your Dockerfile) and a `db` service (Postgres).\n- Wire ports, a named volume for the DB, environment variables, and `depends_on`.\n- Bring it up: `docker compose up -d`.\n- Tear it down: `docker compose down`.",
        buildsOn:
          "In Domain 3 you connected app + DB by hand with `docker network` and `-v` flags. Compose captures all of that in one declarative file.",
        stretch:
          "Move secrets into a `.env` file, add a third service (like Adminer or Redis), and use `docker compose logs -f` to tail everything at once.",
      },
      chapters: [
        {
          id: 'd4c1',
          title: 'Why Compose',
          emoji: '🤔',
          description: "The problem Compose solves and the shape of a compose file.",
          sections: [
            {
              id: 'd4c1s1',
              title: 'The Compose Idea',
              summary: "From many docker run flags to one tidy file.",
              cards: [
                {
                  id: 'd4c1s1-1',
                  kind: 'concept',
                  title: 'What Is Compose?',
                  emoji: '🎼',
                  body:
                    "**Docker Compose** lets you define a multi-container app in a single YAML file (`docker-compose.yml`) and manage it as one unit.\n\nInstead of running each container manually with long flags, you declare the desired state once and run `docker compose up`.",
                  terms: [
                    { term: 'Docker Compose', definition: "A tool for defining and running multi-container apps via YAML." },
                    { term: 'Service', definition: "One container definition within a compose file." },
                  ],
                },
                {
                  id: 'd4c1s1-2',
                  kind: 'analogy',
                  title: 'A Conductor',
                  emoji: '🎻',
                  body:
                    "Running containers by hand is like each musician playing whenever they feel like it. Compose is the **conductor** with a shared score (the YAML): everyone starts together, in the right order, in tune.\n\nOne baton wave — `docker compose up` — and the whole orchestra plays.",
                },
                {
                  id: 'd4c1s1-3',
                  kind: 'compare',
                  title: 'By Hand vs Compose',
                  compare: {
                    headers: ['Task', 'Manual docker run', 'Compose'],
                    rows: [
                      ['Start stack', 'Several long commands', 'docker compose up'],
                      ['Networking', 'Create network, attach each', 'Automatic'],
                      ['Reproducible', 'Lives in your memory', 'Lives in a file'],
                      ['Tear down', 'Remove each container', 'docker compose down'],
                    ],
                  },
                },
                {
                  id: 'd4c1s1-4',
                  kind: 'tip',
                  title: 'compose vs docker-compose',
                  emoji: '💡',
                  body:
                    "Modern Docker ships Compose as a plugin, so you run `docker compose` (a space, v2). The old standalone tool was `docker-compose` (a hyphen, v1).\n\nPrefer `docker compose` — v1 is deprecated. The YAML file itself works with both.",
                },
                {
                  id: 'd4c1s1-5',
                  kind: 'quiz',
                  title: 'Why Compose',
                  question: "What is the main advantage of Docker Compose over manual `docker run` commands?",
                  options: [
                    { id: 'a', text: "It makes images smaller", correct: false },
                    { id: 'b', text: "It defines a whole multi-container app declaratively in one file", correct: true },
                    { id: 'c', text: "It replaces the Docker daemon", correct: false },
                    { id: 'd', text: "It compiles your code", correct: false },
                  ],
                  explanation:
                    "Compose captures services, networks, and volumes in one YAML file you can start and stop as a unit — reproducible and easy to share.",
                },
              ],
            },
            {
              id: 'd4c1s2',
              title: 'Anatomy of a Compose File',
              summary: "Services, build vs image, ports, volumes, and environment.",
              cards: [
                {
                  id: 'd4c1s2-1',
                  kind: 'example',
                  title: 'A Minimal Compose File',
                  emoji: '📄',
                  body:
                    "A one-service file:\n\n`services:`\n`  web:`\n`    image: nginx`\n`    ports:`\n`      - \"8080:80\"`\n\nRun `docker compose up` in that folder and Nginx is live on port 8080.",
                },
                {
                  id: 'd4c1s2-2',
                  kind: 'concept',
                  title: 'image vs build',
                  emoji: '🏗️',
                  body:
                    "Each service either pulls an existing **image** or **build**s from a Dockerfile:\n\n`web:`\n`  build: .`\n\nvs\n\n`db:`\n`  image: postgres:16`\n\nUse `build` for your own app code; use `image` for off-the-shelf services.",
                  terms: [
                    { term: 'image (key)', definition: "Tells a service to use a prebuilt image." },
                    { term: 'build (key)', definition: "Tells Compose to build the service from a Dockerfile." },
                  ],
                },
                {
                  id: 'd4c1s2-3',
                  kind: 'concept',
                  title: 'Ports, Volumes, Environment',
                  emoji: '🔧',
                  body:
                    "Common per-service keys:\n\n- **ports** — publish `\"host:container\"`.\n- **volumes** — mount a named volume or bind path.\n- **environment** — set variables.\n- **networks** — attach to named networks.\n\nThese mirror the `docker run` flags you already know.",
                  terms: [
                    { term: 'ports', definition: "Compose key mapping host ports to container ports." },
                    { term: 'environment', definition: "Compose key for setting container env vars." },
                  ],
                },
                {
                  id: 'd4c1s2-4',
                  kind: 'diagram',
                  title: 'Compose File Layout',
                  emoji: '🗺️',
                  diagram: {
                    type: 'stack',
                    direction: 'vertical',
                    nodes: [
                      { label: 'services', sublabel: 'web, db, ...', emoji: '📦' },
                      { label: 'volumes', sublabel: 'named storage', emoji: '💾' },
                      { label: 'networks', sublabel: 'how they connect', emoji: '🕸️' },
                    ],
                  },
                },
                {
                  id: 'd4c1s2-5',
                  kind: 'tip',
                  title: 'YAML Is Whitespace-Sensitive',
                  emoji: '⚠️',
                  body:
                    "YAML uses **spaces**, never tabs, and indentation defines structure. A single misaligned line breaks the whole file.\n\nWhen Compose complains about a mapping error, check your indentation and quote port strings like `\"8080:80\"` to avoid surprises.",
                },
                {
                  id: 'd4c1s2-6',
                  kind: 'quiz',
                  title: 'build vs image',
                  question: "You wrote your own app with a Dockerfile. Which service key builds it in Compose?",
                  options: [
                    { id: 'a', text: "image: .", correct: false },
                    { id: 'b', text: "build: .", correct: true },
                    { id: 'c', text: "run: .", correct: false },
                    { id: 'd', text: "from: .", correct: false },
                  ],
                  explanation:
                    "`build: .` tells Compose to build the service from the Dockerfile in that directory. `image` is for prebuilt images.",
                },
              ],
            },
          ],
        },
        {
          id: 'd4c2',
          title: 'Running Multi-Container Apps',
          emoji: '🚦',
          description: "Bring a web + db stack up and down, with env files and startup order.",
          sections: [
            {
              id: 'd4c2s1',
              title: 'up, down & depends_on',
              summary: "Starting, stopping, and ordering services.",
              cards: [
                {
                  id: 'd4c2s1-1',
                  kind: 'example',
                  title: 'A Web + DB Stack',
                  emoji: '🧱',
                  body:
                    "`services:`\n`  web:`\n`    build: .`\n`    ports:`\n`      - \"8080:3000\"`\n`    depends_on:`\n`      - db`\n`  db:`\n`    image: postgres:16`\n`    environment:`\n`      POSTGRES_PASSWORD: secret`\n`    volumes:`\n`      - pgdata:/var/lib/postgresql/data`\n`volumes:`\n`  pgdata:`",
                },
                {
                  id: 'd4c2s1-2',
                  kind: 'example',
                  title: 'Up and Down',
                  emoji: '🔼',
                  body:
                    "Start the whole stack in the background:\n\n`docker compose up -d`\n\nWatch logs from all services:\n\n`docker compose logs -f`\n\nStop and remove everything:\n\n`docker compose down`\n\nAdd `-v` to `down` to also delete named volumes.",
                },
                {
                  id: 'd4c2s1-3',
                  kind: 'concept',
                  title: 'depends_on',
                  emoji: '🔗',
                  body:
                    "`depends_on` controls **start order** — Compose starts `db` before `web`.\n\nBut it only waits for the container to *start*, not for the database to be *ready to accept connections*. For that you need a healthcheck or retry logic in your app.",
                  terms: [
                    { term: 'depends_on', definition: "Declares that one service should start after another." },
                    { term: 'Startup order', definition: "The sequence in which Compose launches services." },
                  ],
                },
                {
                  id: 'd4c2s1-4',
                  kind: 'diagram',
                  title: 'Stack Startup Flow',
                  emoji: '🚀',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'compose up', emoji: '▶️' },
                      { label: 'start db', sublabel: 'depends_on', emoji: '🗄️' },
                      { label: 'start web', sublabel: 'talks to db', emoji: '🌐' },
                    ],
                  },
                },
                {
                  id: 'd4c2s1-5',
                  kind: 'tip',
                  title: 'depends_on Is Not "Ready"',
                  emoji: '⚠️',
                  body:
                    "A big gotcha: `depends_on` does **not** guarantee the DB is accepting queries — only that its container started. Your app may connect before Postgres is up and crash.\n\nAdd `condition: service_healthy` with a healthcheck, or make your app retry the connection.",
                },
                {
                  id: 'd4c2s1-6',
                  kind: 'quiz',
                  title: 'Startup Gotcha',
                  question: "Your web service uses `depends_on: db` but still fails on startup with a connection error. Why?",
                  options: [
                    { id: 'a', text: "depends_on only waits for db to start, not to be ready for queries", correct: true },
                    { id: 'b', text: "depends_on is spelled wrong", correct: false },
                    { id: 'c', text: "Compose ignores depends_on entirely", correct: false },
                    { id: 'd', text: "You must publish the db port", correct: false },
                  ],
                  explanation:
                    "depends_on controls start order but not readiness. Use a healthcheck with `condition: service_healthy` or add connection retries.",
                },
              ],
            },
            {
              id: 'd4c2s2',
              title: 'Env Files & Overrides',
              summary: "Keeping config and secrets out of the compose file.",
              cards: [
                {
                  id: 'd4c2s2-1',
                  kind: 'concept',
                  title: 'The .env File',
                  emoji: '🔑',
                  body:
                    "Compose automatically reads a `.env` file next to your compose file and substitutes `${VAR}` references.\n\nSo you can keep secrets and per-environment values out of the YAML and out of version control (add `.env` to `.gitignore`).",
                  terms: [
                    { term: '.env file', definition: "A file of KEY=value pairs auto-loaded by Compose." },
                    { term: 'Variable substitution', definition: "Replacing ${VAR} in the compose file with a value." },
                  ],
                },
                {
                  id: 'd4c2s2-2',
                  kind: 'example',
                  title: 'Using Variables',
                  emoji: '🧬',
                  body:
                    "`.env`:\n\n`DB_PASSWORD=supersecret`\n\n`docker-compose.yml`:\n\n`  db:`\n`    image: postgres:16`\n`    environment:`\n`      POSTGRES_PASSWORD: ${DB_PASSWORD}`\n\nCompose swaps in the value at up time.",
                },
                {
                  id: 'd4c2s2-3',
                  kind: 'concept',
                  title: 'env_file vs environment',
                  emoji: '📑',
                  body:
                    "There are two ways to pass variables **into a container**:\n\n- `environment:` lists them inline in the YAML.\n- `env_file:` points to a file whose variables are all loaded.\n\nNote this is different from the top-level `.env`, which substitutes `${VAR}` in the compose file itself.",
                  terms: [
                    { term: 'env_file', definition: "A Compose key loading a file of variables into a container." },
                  ],
                },
                {
                  id: 'd4c2s2-4',
                  kind: 'tip',
                  title: 'Do Not Commit Secrets',
                  emoji: '⚠️',
                  body:
                    "Never bake passwords or API keys directly into `docker-compose.yml` and commit them. Put them in `.env`, add `.env` to `.gitignore`, and commit a safe `.env.example` template instead.\n\nLeaked compose files are a common source of exposed credentials.",
                },
                {
                  id: 'd4c2s2-5',
                  kind: 'quiz',
                  title: 'Where Secrets Go',
                  question: "What is the recommended place for a database password used by Compose?",
                  options: [
                    { id: 'a', text: "Hardcoded in docker-compose.yml and committed", correct: false },
                    { id: 'b', text: "In a .env file that is git-ignored, referenced as ${VAR}", correct: true },
                    { id: 'c', text: "In the Dockerfile with ENV", correct: false },
                    { id: 'd', text: "In the image name", correct: false },
                  ],
                  explanation:
                    "Keep secrets in a git-ignored `.env` file and reference them via `${VAR}` so they stay out of the committed YAML.",
                },
              ],
            },
          ],
        },
      ],
    },
    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 5 — Optimization & Production
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd5',
      title: 'Optimization & Production',
      emoji: '🚀',
      description:
        "Ship lean, secure, resilient images. Multi-stage builds, small base images, .dockerignore, healthchecks, non-root users, restart policies, and resource limits.",
      project: {
        title: "Production-Harden the Stack 🛡️",
        brief:
          "Optimize your app image and make the stack production-ready.\n\n- Convert your Dockerfile to a multi-stage build so the final image ships only what it needs.\n- Choose a slim or distroless base and add a `.dockerignore`.\n- Add a `HEALTHCHECK` and run the app as a non-root user.\n- In Compose, set `restart: unless-stopped` and CPU/memory limits.",
        buildsOn:
          "In Domain 4 you had a working Compose stack. Now you shrink the image, lock it down, and make it survive crashes and reboots.",
        stretch:
          "Compare image sizes before and after with `docker images`. Aim to cut the final image by more than half using multi-stage plus a distroless runtime.",
      },
      chapters: [
        {
          id: 'd5c1',
          title: 'Lean Images',
          emoji: '🪶',
          description: "Making images small and fast to build and pull.",
          sections: [
            {
              id: 'd5c1s1',
              title: 'Base Images & .dockerignore',
              summary: "Start small and stop shipping junk.",
              cards: [
                {
                  id: 'd5c1s1-1',
                  kind: 'concept',
                  title: 'Choosing a Base Image',
                  emoji: '🧱',
                  body:
                    "Your base image sets the floor for size and attack surface:\n\n- **full** (e.g. `python:3.12`) — big, includes build tools.\n- **slim** — trimmed of extras.\n- **alpine** — tiny, musl-based.\n- **distroless** — just your app and runtime, no shell.\n\nSmaller usually means faster pulls and fewer vulnerabilities.",
                  terms: [
                    { term: 'alpine', definition: "A tiny Linux base image based on musl libc." },
                    { term: 'slim', definition: "A stripped-down variant of an official base image." },
                    { term: 'distroless', definition: "A minimal image with no package manager or shell." },
                  ],
                },
                {
                  id: 'd5c1s1-2',
                  kind: 'compare',
                  title: 'Base Image Trade-offs',
                  compare: {
                    headers: ['Base', 'Size', 'Trade-off'],
                    rows: [
                      ['full', 'Largest', 'Convenient, has everything'],
                      ['slim', 'Smaller', 'Good default balance'],
                      ['alpine', 'Tiny', 'musl quirks, fewer packages'],
                      ['distroless', 'Tiny', 'No shell to debug in'],
                    ],
                  },
                },
                {
                  id: 'd5c1s1-3',
                  kind: 'concept',
                  title: '.dockerignore',
                  emoji: '🚫',
                  body:
                    "A `.dockerignore` file keeps junk out of the build context and image — much like `.gitignore`.\n\nTypical entries:\n\n`node_modules`\n`.git`\n`*.log`\n`.env`\n\nSmaller context means faster builds and no accidental secret leaks.",
                  terms: [
                    { term: '.dockerignore', definition: "A file listing paths to exclude from the build context." },
                  ],
                },
                {
                  id: 'd5c1s1-4',
                  kind: 'tip',
                  title: 'Ignore node_modules',
                  emoji: '💡',
                  body:
                    "Copying local `node_modules` into the image is slow and often wrong — the platform inside the container may differ from your host.\n\nAdd `node_modules` to `.dockerignore` and let `RUN npm install` rebuild them cleanly inside the image.",
                },
                {
                  id: 'd5c1s1-5',
                  kind: 'quiz',
                  title: 'Trim the Build',
                  question: "What is the purpose of a `.dockerignore` file?",
                  options: [
                    { id: 'a', text: "It lists which images to pull", correct: false },
                    { id: 'b', text: "It excludes files from the build context and final image", correct: true },
                    { id: 'c', text: "It sets environment variables", correct: false },
                    { id: 'd', text: "It configures networks", correct: false },
                  ],
                  explanation:
                    "Like `.gitignore`, it keeps unnecessary or sensitive files out of the build context, speeding builds and avoiding leaks.",
                },
              ],
            },
            {
              id: 'd5c1s2',
              title: 'Multi-Stage Builds',
              summary: "Build heavy, ship light.",
              cards: [
                {
                  id: 'd5c1s2-1',
                  kind: 'concept',
                  title: 'What Is a Multi-Stage Build?',
                  emoji: '🏭',
                  body:
                    "A **multi-stage build** uses several `FROM` stages in one Dockerfile. You compile or install in a heavy \"build\" stage, then copy only the finished artifacts into a tiny \"runtime\" stage.\n\nThe build tools never ship — the final image stays lean.",
                  terms: [
                    { term: 'Multi-stage build', definition: "A Dockerfile with multiple FROM stages to shrink the final image." },
                    { term: 'Build stage', definition: "An intermediate stage used only to produce artifacts." },
                  ],
                },
                {
                  id: 'd5c1s2-2',
                  kind: 'analogy',
                  title: 'Cook, Then Plate',
                  emoji: '🍳',
                  body:
                    "You cook in a messy kitchen full of pots, knives, and spills (the build stage). But you serve the customer only the clean, plated dish (the runtime stage).\n\nMulti-stage builds throw away the messy kitchen and keep just the meal.",
                },
                {
                  id: 'd5c1s2-3',
                  kind: 'example',
                  title: 'A Multi-Stage Dockerfile',
                  emoji: '🧱',
                  body:
                    "`FROM node:20 AS build`\n`WORKDIR /app`\n`COPY package*.json ./`\n`RUN npm ci`\n`COPY . .`\n`RUN npm run build`\n\n`FROM node:20-slim`\n`WORKDIR /app`\n`COPY --from=build /app/dist ./dist`\n`CMD [\"node\", \"dist/server.js\"]`",
                },
                {
                  id: 'd5c1s2-4',
                  kind: 'diagram',
                  title: 'Build Stage to Runtime',
                  emoji: '➡️',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'build stage', sublabel: 'compilers, deps', emoji: '🏭' },
                      { label: 'COPY --from', sublabel: 'artifacts only', emoji: '📤' },
                      { label: 'runtime stage', sublabel: 'tiny final image', emoji: '🪶' },
                    ],
                  },
                },
                {
                  id: 'd5c1s2-5',
                  kind: 'tip',
                  title: 'COPY --from',
                  emoji: '💡',
                  body:
                    "The magic is `COPY --from=build /app/dist ./dist` — it pulls files out of an earlier stage into the final image.\n\nName stages with `AS build` so you can reference them. Only what you copy survives; everything else in the build stage is discarded.",
                },
                {
                  id: 'd5c1s2-6',
                  kind: 'quiz',
                  title: 'Why Multi-Stage',
                  question: "What is the main benefit of a multi-stage build?",
                  options: [
                    { id: 'a', text: "It runs the container faster at startup", correct: false },
                    { id: 'b', text: "The final image excludes build tools, staying small and secure", correct: true },
                    { id: 'c', text: "It allows more than one CMD", correct: false },
                    { id: 'd', text: "It removes the need for a base image", correct: false },
                  ],
                  explanation:
                    "You build in a heavy stage but copy only the artifacts into a lean runtime stage, so compilers and dev dependencies never ship.",
                },
              ],
            },
          ],
        },
        {
          id: 'd5c2',
          title: 'Production Hardening',
          emoji: '🛡️',
          description: "Health, security, and resilience for real deployments.",
          sections: [
            {
              id: 'd5c2s1',
              title: 'Health & Security',
              summary: "Healthchecks and running as a non-root user.",
              cards: [
                {
                  id: 'd5c2s1-1',
                  kind: 'concept',
                  title: 'HEALTHCHECK',
                  emoji: '❤️‍🩹',
                  body:
                    "A **HEALTHCHECK** tells Docker how to test whether your app is truly working, not just running.\n\n`HEALTHCHECK --interval=30s --timeout=3s \\`\n`  CMD curl -f http://localhost:3000/health || exit 1`\n\nDocker marks the container `healthy` or `unhealthy` based on the result.",
                  terms: [
                    { term: 'HEALTHCHECK', definition: "A Dockerfile instruction defining how to test container health." },
                    { term: 'unhealthy', definition: "Status when a container's healthcheck keeps failing." },
                  ],
                },
                {
                  id: 'd5c2s1-2',
                  kind: 'concept',
                  title: 'Run as Non-Root',
                  emoji: '🧑‍🔧',
                  body:
                    "By default containers run as **root**, which is risky if the app is compromised. Create and switch to an unprivileged user:\n\n`RUN adduser --system appuser`\n`USER appuser`\n\nNow the process cannot do root-level damage inside the container.",
                  terms: [
                    { term: 'USER', definition: "A Dockerfile instruction setting the user a container runs as." },
                    { term: 'Least privilege', definition: "Granting only the permissions actually needed." },
                  ],
                },
                {
                  id: 'd5c2s1-3',
                  kind: 'analogy',
                  title: 'A Health Monitor',
                  emoji: '🩺',
                  body:
                    "Without a HEALTHCHECK, Docker knows only that your app's *pulse* exists (the process is alive). A HEALTHCHECK is like a nurse actually checking blood pressure — it confirms the app can still *respond*, catching a hung-but-running process.",
                },
                {
                  id: 'd5c2s1-4',
                  kind: 'tip',
                  title: 'Root Is the Default',
                  emoji: '⚠️',
                  body:
                    "Many published images run as root and it is easy to forget. A container breakout as root is far more dangerous than as a limited user.\n\nAdd a `USER` line for any app that faces the network. It is one of the cheapest security wins you can make.",
                },
                {
                  id: 'd5c2s1-5',
                  kind: 'quiz',
                  title: 'Health Check Purpose',
                  question: "What does a HEALTHCHECK add beyond knowing the container process is running?",
                  options: [
                    { id: 'a', text: "It restarts the host", correct: false },
                    { id: 'b', text: "It verifies the app actually responds, catching hung-but-alive states", correct: true },
                    { id: 'c', text: "It shrinks the image", correct: false },
                    { id: 'd', text: "It publishes ports automatically", correct: false },
                  ],
                  explanation:
                    "A HEALTHCHECK actively probes the app (e.g. hits a /health endpoint) so Docker can flag it unhealthy even when the process is still alive.",
                },
                {
                  id: 'd5c2s1-6',
                  kind: 'quiz',
                  title: 'Security Win',
                  question: "Which Dockerfile line reduces risk if the app is compromised?",
                  options: [
                    { id: 'a', text: "EXPOSE 80", correct: false },
                    { id: 'b', text: "USER appuser", correct: true },
                    { id: 'c', text: "CMD [\"npm\", \"start\"]", correct: false },
                    { id: 'd', text: "ENV NODE_ENV=production", correct: false },
                  ],
                  explanation:
                    "`USER appuser` runs the process as an unprivileged account, applying least privilege so a breakout cannot act as root.",
                },
              ],
            },
            {
              id: 'd5c2s2',
              title: 'Resilience & Limits',
              summary: "Restart policies, resource limits, and logging.",
              cards: [
                {
                  id: 'd5c2s2-1',
                  kind: 'concept',
                  title: 'Restart Policies',
                  emoji: '🔁',
                  body:
                    "A **restart policy** tells Docker to bring a container back after it exits or the host reboots:\n\n`docker run --restart unless-stopped myapp`\n\nOptions: `no` (default), `on-failure`, `always`, `unless-stopped`. For production services, `unless-stopped` is a solid choice.",
                  terms: [
                    { term: 'Restart policy', definition: "A rule for automatically restarting a container." },
                    { term: 'unless-stopped', definition: "Restart always, except when you manually stopped it." },
                  ],
                },
                {
                  id: 'd5c2s2-2',
                  kind: 'concept',
                  title: 'Resource Limits',
                  emoji: '📏',
                  body:
                    "Cap what a container can consume so one bad container cannot starve the host:\n\n`docker run --memory 512m --cpus 1.5 myapp`\n\nIn Compose, use `deploy.resources.limits`. Limits keep a memory leak from taking down the whole machine.",
                  terms: [
                    { term: 'Resource limits', definition: "Caps on CPU and memory a container may use." },
                    { term: 'OOM kill', definition: "The kernel killing a container that exceeds its memory limit." },
                  ],
                },
                {
                  id: 'd5c2s2-3',
                  kind: 'concept',
                  title: 'Logging',
                  emoji: '📜',
                  body:
                    "Containers should log to **stdout/stderr** — Docker captures that automatically. View it with `docker logs`.\n\nControl growth with a log driver and rotation:\n\n`docker run --log-opt max-size=10m --log-opt max-file=3 myapp`\n\nDo not write logs to files inside the container.",
                  terms: [
                    { term: 'Log driver', definition: "The mechanism Docker uses to collect container logs." },
                    { term: 'Log rotation', definition: "Capping log file size and count to save disk." },
                  ],
                },
                {
                  id: 'd5c2s2-4',
                  kind: 'diagram',
                  title: 'Production Checklist',
                  emoji: '✅',
                  diagram: {
                    type: 'pyramid',
                    nodes: [
                      { label: 'Restart policy', sublabel: 'survive crashes', emoji: '🔁' },
                      { label: 'Resource limits', sublabel: 'protect the host', emoji: '📏' },
                      { label: 'Healthcheck', sublabel: 'know it works', emoji: '❤️‍🩹' },
                      { label: 'Small, non-root image', sublabel: 'lean + secure base', emoji: '🪶' },
                    ],
                  },
                },
                {
                  id: 'd5c2s2-5',
                  kind: 'tip',
                  title: 'Log to stdout',
                  emoji: '💡',
                  body:
                    "The container convention is: send logs to stdout/stderr and let the platform handle collection. Writing logs to a file inside the container fills its writable layer and makes logs vanish on removal.\n\nIf your framework logs to a file, configure it to log to the console instead.",
                },
                {
                  id: 'd5c2s2-6',
                  kind: 'quiz',
                  title: 'Keep It Running',
                  question: "You want a production container to come back automatically after a crash or host reboot, but stay down if you deliberately stop it. Which policy?",
                  options: [
                    { id: 'a', text: "--restart no", correct: false },
                    { id: 'b', text: "--restart on-failure", correct: false },
                    { id: 'c', text: "--restart unless-stopped", correct: true },
                    { id: 'd', text: "--restart never", correct: false },
                  ],
                  explanation:
                    "`unless-stopped` restarts the container on crashes and reboots but respects a manual stop, making it a good production default.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
