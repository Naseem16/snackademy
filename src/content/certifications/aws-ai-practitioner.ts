import type { Certification } from '../types'

export const awsAiPractitioner: Certification = {
  id: 'aws-ai-practitioner',
  code: 'AIF-C01',
  title: 'AWS Certified AI Practitioner',
  shortTitle: 'AI Practitioner',
  provider: 'AWS',
  level: 'Foundational',
  gradient: 'from-orange-500 to-amber-600',
  icon: '🤖',
  tagline: 'Master AI, ML, and Generative AI on AWS — one bite-sized card at a time.',
  description:
    "A friendly, plain-English path to passing the AWS Certified AI Practitioner (AIF-C01) exam. You'll learn AI/ML fundamentals, generative AI, foundation models, the AWS AI service family, responsible AI, and security & governance — all explained with relatable analogies and exam-focused tips.",
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
    // DOMAIN 1 — Fundamentals of AI and ML (20%)
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd1',
      title: 'Fundamentals of AI and ML',
      emoji: '🧠',
      weight: '20%',
      description:
        'The bedrock. What AI, ML, and deep learning actually are, the types of machine learning, the ML lifecycle, and how we measure if a model is any good.',
      chapters: [
        {
          id: 'd1c1',
          title: 'What Is AI, ML & Deep Learning?',
          emoji: '🌱',
          description: 'Untangling the buzzwords and seeing how they nest inside one another.',
          sections: [
            {
              id: 'd1c1s1',
              title: 'The AI Family Tree',
              summary: 'AI, ML, deep learning, and generative AI — who contains whom.',
              cards: [
                {
                  id: 'd1c1s1-1',
                  kind: 'concept',
                  title: 'The Big Picture',
                  emoji: '🌳',
                  body:
                    "**Artificial Intelligence (AI)** is the broad goal of making machines do things that normally need human smarts. **Machine Learning (ML)** is a way to reach that goal by learning patterns from data instead of being hand-coded with rules. **Deep Learning** is a powerful flavor of ML using layered neural networks. **Generative AI** sits inside deep learning and creates brand-new content.\n\nThink of them as nested boxes: each one fits inside the bigger one.",
                  terms: [
                    { term: 'Artificial Intelligence', definition: 'Machines performing tasks that typically require human intelligence.' },
                    { term: 'Machine Learning', definition: 'A subset of AI where systems learn patterns from data rather than explicit rules.' },
                    { term: 'Deep Learning', definition: 'ML using multi-layered neural networks to learn complex patterns.' },
                    { term: 'Generative AI', definition: 'Deep learning models that create new content like text, images, or code.' },
                  ],
                },
                {
                  id: 'd1c1s1-2',
                  kind: 'analogy',
                  title: 'Russian Nesting Dolls',
                  emoji: '🪆',
                  body:
                    "Picture a set of nesting dolls. The biggest doll is **AI**. Open it and you find **Machine Learning** inside. Open that and there's **Deep Learning**. Crack that open and out pops **Generative AI**, the newest, shiniest doll.\n\nEach smaller doll is a more specialized version of the bigger one — but they all live inside the AI family.",
                },
                {
                  id: 'd1c1s1-3',
                  kind: 'diagram',
                  title: 'Nested Layers',
                  emoji: '📦',
                  diagram: {
                    type: 'stack',
                    nodes: [
                      { label: 'Artificial Intelligence', sublabel: 'The whole field', emoji: '🤖' },
                      { label: 'Machine Learning', sublabel: 'Learns from data', emoji: '📊' },
                      { label: 'Deep Learning', sublabel: 'Neural networks', emoji: '🧠' },
                      { label: 'Generative AI', sublabel: 'Creates new content', emoji: '✨' },
                    ],
                  },
                },
                {
                  id: 'd1c1s1-4',
                  kind: 'example',
                  title: 'Spotting Each in the Wild',
                  emoji: '🔍',
                  body:
                    "- **AI:** a chess program that follows expert rules.\n- **ML:** an email filter that learns what spam looks like from examples.\n- **Deep Learning:** an app that recognizes your face to unlock your phone.\n- **Generative AI:** a chatbot that writes you a poem on demand.\n\nSame family, increasing specialization.",
                },
                {
                  id: 'd1c1s1-5',
                  kind: 'tip',
                  title: 'Exam Tip',
                  emoji: '💡',
                  body:
                    "Remember the containment order: **AI ⊃ ML ⊃ Deep Learning ⊃ Generative AI**. If a question asks which is the *broadest* term, the answer is AI. If it asks what *creates new content*, the answer is generative AI.",
                },
                {
                  id: 'd1c1s1-7',
                  kind: 'concept',
                  title: 'Narrow vs General AI',
                  emoji: '🎚️',
                  body:
                    "Today's AI is **narrow AI** (also called weak AI): brilliant at one task — translating, recommending, recognizing faces — but unable to step outside it. **General AI** (AGI) would match human flexibility across any task. It does not exist yet. Everything you'll meet on this exam is narrow AI.",
                  terms: [
                    { term: 'Narrow AI', definition: 'AI that excels at a single specific task; all real AI today.' },
                    { term: 'General AI (AGI)', definition: 'Hypothetical AI with human-level flexibility across any task.' },
                  ],
                },
                {
                  id: 'd1c1s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Which statement is TRUE about the relationship between these terms?',
                  options: [
                    { id: 'a', text: 'Machine learning is broader than artificial intelligence.', correct: false },
                    { id: 'b', text: 'Deep learning is a subset of machine learning.', correct: true },
                    { id: 'c', text: 'Generative AI contains all of machine learning.', correct: false },
                    { id: 'd', text: 'AI and ML mean exactly the same thing.', correct: false },
                  ],
                  explanation:
                    "Deep learning is a specialized subset of machine learning that uses neural networks. The full nesting is AI ⊃ ML ⊃ Deep Learning ⊃ Generative AI.",
                },
              ],
            },
            {
              id: 'd1c1s2',
              title: 'How Machines Learn',
              summary: 'Data, models, features, and the difference between training and inference.',
              cards: [
                {
                  id: 'd1c1s2-1',
                  kind: 'concept',
                  title: 'From Data to Predictions',
                  emoji: '⚙️',
                  body:
                    "A **model** is a math function that maps inputs to outputs. We **train** it by feeding **data** so it adjusts its internal numbers (parameters) to spot patterns. Each input column we feed in is a **feature**. Once trained, the model does **inference**: making predictions on new, unseen data.",
                  terms: [
                    { term: 'Model', definition: 'A trained function that maps inputs to predicted outputs.' },
                    { term: 'Feature', definition: 'An individual measurable input variable used to make predictions.' },
                    { term: 'Training', definition: 'The process of teaching a model by adjusting parameters using data.' },
                    { term: 'Inference', definition: 'Using a trained model to make predictions on new data.' },
                  ],
                },
                {
                  id: 'd1c1s2-2',
                  kind: 'analogy',
                  title: 'Learning to Cook',
                  emoji: '👩‍🍳',
                  body:
                    "Training a model is like learning to cook by tasting hundreds of dishes. Over time you learn which ingredients (**features**) make a dish great. **Training** is all that practice in the kitchen. **Inference** is when a guest arrives and you cook a brand-new meal using everything you learned — no recipe card needed.",
                },
                {
                  id: 'd1c1s2-3',
                  kind: 'compare',
                  title: 'Training vs Inference',
                  emoji: '⚖️',
                  compare: {
                    headers: ['Aspect', 'Training', 'Inference'],
                    rows: [
                      ['Goal', 'Learn patterns', 'Make predictions'],
                      ['Data used', 'Historical labeled/known data', 'New unseen data'],
                      ['When', 'Once or periodically', 'Continuously in production'],
                      ['Cost driver', 'Heavy compute upfront', 'Per-request compute'],
                    ],
                  },
                },
                {
                  id: 'd1c1s2-4',
                  kind: 'diagram',
                  title: 'The Two Phases',
                  emoji: '🔁',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'Data', emoji: '🗂️' },
                      { label: 'Train Model', emoji: '🏋️' },
                      { label: 'Deploy', emoji: '🚀' },
                      { label: 'Inference', emoji: '🔮' },
                    ],
                  },
                },
                {
                  id: 'd1c1s2-5',
                  kind: 'example',
                  title: 'Predicting House Prices',
                  emoji: '🏠',
                  body:
                    "Features: square footage, number of bedrooms, neighborhood. Label: the sale price. During **training**, the model sees thousands of past sales and learns the relationship. During **inference**, you give it a new house's features and it predicts a price.",
                },
                {
                  id: 'd1c1s2-6',
                  kind: 'tip',
                  title: 'Exam Tip',
                  emoji: '💡',
                  body:
                    "Training is usually the **expensive, occasional** step (lots of GPUs). Inference is the **ongoing, per-request** cost. If a question asks where the bulk of compute cost lives during model creation, think *training*.",
                },
                {
                  id: 'd1c1s2-7',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'A deployed model receives a new customer record and outputs a churn probability. This is an example of:',
                  options: [
                    { id: 'a', text: 'Training', correct: false },
                    { id: 'b', text: 'Inference', correct: true },
                    { id: 'c', text: 'Feature engineering', correct: false },
                    { id: 'd', text: 'Data labeling', correct: false },
                  ],
                  explanation:
                    "Using a trained model to predict on new data is inference. Training is the earlier step where the model learns from historical data.",
                },
              ],
            },
          ],
        },
        {
          id: 'd1c2',
          title: 'Types of Machine Learning',
          emoji: '🎯',
          description: 'Supervised, unsupervised, reinforcement learning, and the neural networks behind deep learning.',
          sections: [
            {
              id: 'd1c2s1',
              title: 'Three Ways to Learn',
              summary: 'Supervised, unsupervised, and reinforcement learning.',
              cards: [
                {
                  id: 'd1c2s1-1',
                  kind: 'concept',
                  title: 'The Three Paradigms',
                  emoji: '🧭',
                  body:
                    "**Supervised learning** trains on labeled data (inputs paired with correct answers). **Unsupervised learning** finds hidden structure in unlabeled data. **Reinforcement learning** learns by trial and error, earning rewards for good actions.",
                  terms: [
                    { term: 'Labeled data', definition: 'Data where each example includes the correct answer (label).' },
                    { term: 'Supervised learning', definition: 'Learning a mapping from inputs to known output labels.' },
                    { term: 'Unsupervised learning', definition: 'Finding patterns or groupings in data without labels.' },
                    { term: 'Reinforcement learning', definition: 'Learning through rewards and penalties from interacting with an environment.' },
                  ],
                },
                {
                  id: 'd1c2s1-2',
                  kind: 'analogy',
                  title: 'Three Kinds of Students',
                  emoji: '🎓',
                  body:
                    "**Supervised** is a student with flashcards showing question and answer. **Unsupervised** is a student handed a pile of photos and asked to group similar ones with no answer key. **Reinforcement** is a kid learning to ride a bike — wobble, fall, adjust, and get rewarded by staying upright.",
                },
                {
                  id: 'd1c2s1-3',
                  kind: 'compare',
                  title: 'Side by Side',
                  emoji: '⚖️',
                  compare: {
                    headers: ['Type', 'Data', 'Typical use'],
                    rows: [
                      ['Supervised', 'Labeled', 'Classification, regression'],
                      ['Unsupervised', 'Unlabeled', 'Clustering, anomaly detection'],
                      ['Reinforcement', 'Reward signal', 'Robotics, game playing'],
                    ],
                  },
                },
                {
                  id: 'd1c2s1-4',
                  kind: 'diagram',
                  title: 'Three Paradigms',
                  emoji: '🗂️',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Supervised', emoji: '🏷️', items: ['Labeled data', 'Predict known answers', 'Spam detection'] },
                      { title: 'Unsupervised', emoji: '🔍', items: ['No labels', 'Find structure', 'Customer segments'] },
                      { title: 'Reinforcement', emoji: '🎮', items: ['Rewards', 'Trial and error', 'Game AI'] },
                    ],
                  },
                },
                {
                  id: 'd1c2s1-5',
                  kind: 'example',
                  title: 'Which Is Which?',
                  emoji: '🧩',
                  body:
                    "- Predicting tomorrow's temperature from past weather → **supervised** (regression).\n- Grouping shoppers into segments without predefined categories → **unsupervised** (clustering).\n- Teaching a warehouse robot to navigate by rewarding shortcuts → **reinforcement**.",
                },
                {
                  id: 'd1c2s1-6',
                  kind: 'tip',
                  title: 'Exam Tip',
                  emoji: '💡',
                  body:
                    "The keyword **labeled** screams supervised. **Clustering** or **finding groups** with no labels means unsupervised. **Reward / agent / environment** points to reinforcement learning.",
                },
                {
                  id: 'd1c2s1-7',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'You have customer purchase data with NO labels and want to discover natural groupings. Which approach fits?',
                  options: [
                    { id: 'a', text: 'Supervised classification', correct: false },
                    { id: 'b', text: 'Unsupervised clustering', correct: true },
                    { id: 'c', text: 'Reinforcement learning', correct: false },
                    { id: 'd', text: 'Linear regression', correct: false },
                  ],
                  explanation:
                    "Discovering groupings in unlabeled data is clustering — a classic unsupervised learning task.",
                },
                {
                  id: 'd1c2s1-8',
                  kind: 'concept',
                  title: 'Classification vs Regression',
                  emoji: '📐',
                  body:
                    "Within supervised learning: **classification** predicts a category (spam / not spam, cat / dog). **Regression** predicts a continuous number (price, temperature). Knowing the output type tells you which one you need.",
                  terms: [
                    { term: 'Classification', definition: 'Predicting a discrete category or class.' },
                    { term: 'Regression', definition: 'Predicting a continuous numeric value.' },
                  ],
                },
              ],
            },
            {
              id: 'd1c2s2',
              title: 'Neural Networks & Deep Learning',
              summary: 'Neurons, layers, and why deep learning is so powerful.',
              cards: [
                {
                  id: 'd1c2s2-1',
                  kind: 'concept',
                  title: 'What Is a Neural Network?',
                  emoji: '🕸️',
                  body:
                    "A **neural network** is made of layers of simple units called **neurons**. Each connection has a **weight** that the network tunes during training. Stack many layers and you get **deep learning** — able to learn very complex patterns like recognizing speech or images.",
                  terms: [
                    { term: 'Neuron', definition: 'A basic computing unit that combines inputs and passes on a signal.' },
                    { term: 'Weight', definition: 'A tunable number controlling how strongly one neuron influences another.' },
                    { term: 'Layer', definition: 'A group of neurons; networks have input, hidden, and output layers.' },
                  ],
                },
                {
                  id: 'd1c2s2-2',
                  kind: 'analogy',
                  title: 'A Bucket Brigade',
                  emoji: '🪣',
                  body:
                    "Imagine a line of firefighters passing buckets. Each person tweaks the load a little before passing it on. The raw water (input) flows through many hands (layers) and arrives transformed (output). Training adjusts how much each firefighter passes along — those are the **weights**.",
                },
                {
                  id: 'd1c2s2-3',
                  kind: 'diagram',
                  title: 'Layers of a Network',
                  emoji: '🧠',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'Input Layer', emoji: '📥' },
                      { label: 'Hidden Layers', emoji: '🔮' },
                      { label: 'Output Layer', emoji: '📤' },
                    ],
                  },
                },
                {
                  id: 'd1c2s2-4',
                  kind: 'example',
                  title: 'Recognizing a Cat',
                  emoji: '🐱',
                  body:
                    "Early layers detect edges. Middle layers combine edges into shapes like ears and whiskers. Later layers assemble shapes into 'cat'. Each layer builds on the last — that's the magic of going **deep**.",
                },
                {
                  id: 'd1c2s2-5',
                  kind: 'tip',
                  title: 'Exam Tip',
                  emoji: '💡',
                  body:
                    "Deep learning shines with **large amounts of data** and **unstructured inputs** (images, audio, text). If a scenario has huge unstructured datasets, deep learning is often the intended answer over classic ML.",
                },
                {
                  id: 'd1c2s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Which task is BEST suited to deep learning?',
                  options: [
                    { id: 'a', text: 'Recognizing objects in millions of photos', correct: true },
                    { id: 'b', text: 'Summing a column of numbers in a spreadsheet', correct: false },
                    { id: 'c', text: 'Sorting a list alphabetically', correct: false },
                    { id: 'd', text: 'Looking up a value in a database', correct: false },
                  ],
                  explanation:
                    "Deep learning excels at complex, unstructured data like images. The other tasks are simple deterministic operations that need no learning.",
                },
              ],
            },
          ],
        },
        {
          id: 'd1c3',
          title: 'ML Lifecycle & Evaluation',
          emoji: '📈',
          description: 'The end-to-end ML workflow and the metrics that tell you if your model works.',
          sections: [
            {
              id: 'd1c3s1',
              title: 'The ML Lifecycle',
              summary: 'From collecting data to monitoring a live model.',
              cards: [
                {
                  id: 'd1c3s1-1',
                  kind: 'concept',
                  title: 'The Full Journey',
                  emoji: '🛤️',
                  body:
                    "Building ML follows a repeatable cycle: **Collect** data, **Prepare** it (clean, label, engineer features), **Train** the model, **Evaluate** how well it does, **Deploy** it to production, and **Monitor** it over time. When performance drifts, you loop back.",
                  terms: [
                    { term: 'Data preparation', definition: 'Cleaning, transforming, and labeling raw data for training.' },
                    { term: 'Feature engineering', definition: 'Creating useful input variables from raw data.' },
                    { term: 'Model deployment', definition: 'Putting a trained model into production to serve predictions.' },
                    { term: 'Model monitoring', definition: 'Watching a live model for drift or degraded performance.' },
                  ],
                },
                {
                  id: 'd1c3s1-2',
                  kind: 'analogy',
                  title: 'Growing a Garden',
                  emoji: '🌻',
                  body:
                    "Collecting data is gathering seeds. Preparing is tilling the soil. Training is planting and watering. Evaluating is checking which sprouts are healthy. Deploying is harvesting. Monitoring is watching for weeds and pests so you can replant next season.",
                },
                {
                  id: 'd1c3s1-3',
                  kind: 'diagram',
                  title: 'Lifecycle Loop',
                  emoji: '🔄',
                  diagram: {
                    type: 'cycle',
                    nodes: [
                      { label: 'Collect', emoji: '🗂️' },
                      { label: 'Prepare', emoji: '🧹' },
                      { label: 'Train', emoji: '🏋️' },
                      { label: 'Evaluate', emoji: '📊' },
                      { label: 'Deploy', emoji: '🚀' },
                      { label: 'Monitor', emoji: '👀' },
                    ],
                  },
                },
                {
                  id: 'd1c3s1-4',
                  kind: 'example',
                  title: 'Fraud Detection Project',
                  emoji: '💳',
                  body:
                    "A bank collects transaction logs, prepares them (labeling fraud vs legit), trains a classifier, evaluates precision and recall, deploys it to score live transactions, and monitors for new fraud patterns — looping back to retrain as fraudsters evolve.",
                },
                {
                  id: 'd1c3s1-5',
                  kind: 'tip',
                  title: 'Exam Tip',
                  emoji: '💡',
                  body:
                    "**Data preparation** is usually the most time-consuming step. **Monitoring** matters because real-world data shifts (called *data drift* or *model drift*), degrading accuracy over time.",
                },
                {
                  id: 'd1c3s1-6',
                  kind: 'concept',
                  title: 'MLOps in a Nutshell',
                  emoji: '⚙️',
                  body:
                    "**MLOps** applies DevOps discipline to ML: automating the pipeline, versioning data and models, and continuously deploying and monitoring. It makes ML repeatable and reliable instead of a one-off science experiment.",
                  terms: [
                    { term: 'MLOps', definition: 'Practices to automate and operationalize the ML lifecycle at scale.' },
                    { term: 'Data drift', definition: 'When production data changes over time, hurting model accuracy.' },
                  ],
                },
                {
                  id: 'd1c3s1-7',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'A model that worked great last year now makes poor predictions because customer behavior changed. What is this called?',
                  options: [
                    { id: 'a', text: 'Overfitting', correct: false },
                    { id: 'b', text: 'Data drift', correct: true },
                    { id: 'c', text: 'Inference', correct: false },
                    { id: 'd', text: 'Feature engineering', correct: false },
                  ],
                  explanation:
                    "When real-world data shifts away from the training distribution, it's called data (or model) drift — a key reason to monitor and retrain.",
                },
              ],
            },
            {
              id: 'd1c3s2',
              title: 'Measuring Model Quality',
              summary: 'Accuracy, precision, recall, F1, AUC — and overfitting vs underfitting.',
              cards: [
                {
                  id: 'd1c3s2-1',
                  kind: 'concept',
                  title: 'The Core Metrics',
                  emoji: '🎯',
                  body:
                    "**Accuracy** is the fraction of all predictions that are correct. **Precision** asks: of the items I flagged positive, how many really were? **Recall** asks: of all true positives, how many did I catch? **F1** balances precision and recall. **AUC** measures how well a model separates classes overall.",
                  terms: [
                    { term: 'Precision', definition: 'True positives ÷ all predicted positives (how trustworthy positive flags are).' },
                    { term: 'Recall', definition: 'True positives ÷ all actual positives (how many real positives you catch).' },
                    { term: 'F1 score', definition: 'The harmonic mean of precision and recall.' },
                    { term: 'AUC', definition: 'Area Under the ROC Curve; overall ability to separate classes (0.5 = random, 1.0 = perfect).' },
                  ],
                },
                {
                  id: 'd1c3s2-2',
                  kind: 'analogy',
                  title: 'Fishing With a Net',
                  emoji: '🎣',
                  body:
                    "**Precision** is: of all the fish in your net, how many are the species you wanted? **Recall** is: of all that species in the lake, how many did you actually catch? A tight net is precise but misses fish; a giant net catches everything but scoops junk too. **F1** rewards getting both right.",
                },
                {
                  id: 'd1c3s2-3',
                  kind: 'tip',
                  title: 'When Accuracy Lies',
                  emoji: '⚠️',
                  body:
                    "With **imbalanced data** (e.g., 99% non-fraud), a lazy model that always says 'not fraud' scores 99% accuracy but catches zero fraud! That's why **precision, recall, and F1** matter more for rare-event detection.",
                },
                {
                  id: 'd1c3s2-4',
                  kind: 'concept',
                  title: 'Overfitting vs Underfitting',
                  emoji: '📉',
                  body:
                    "**Overfitting** means the model memorized the training data — great on training, poor on new data. **Underfitting** means it's too simple and misses the real pattern — poor everywhere. The sweet spot is good **generalization** to unseen data.",
                  terms: [
                    { term: 'Overfitting', definition: 'Model fits training data too closely and fails to generalize.' },
                    { term: 'Underfitting', definition: 'Model is too simple to capture the underlying pattern.' },
                    { term: 'Generalization', definition: 'How well a model performs on new, unseen data.' },
                  ],
                },
                {
                  id: 'd1c3s2-5',
                  kind: 'analogy',
                  title: 'Studying for a Test',
                  emoji: '📚',
                  body:
                    "**Overfitting** is memorizing last year's exact exam answers — you ace the practice but bomb the real test. **Underfitting** is barely studying — you fail both. Good learning means understanding the concepts so you handle any question.",
                },
                {
                  id: 'd1c3s2-6',
                  kind: 'diagram',
                  title: 'Fit Spectrum',
                  emoji: '📊',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Underfit', emoji: '😴', items: ['Too simple', 'Poor on train', 'Poor on test'] },
                      { title: 'Good Fit', emoji: '😎', items: ['Just right', 'Good on train', 'Good on test'] },
                      { title: 'Overfit', emoji: '🤯', items: ['Too complex', 'Great on train', 'Poor on test'] },
                    ],
                  },
                },
                {
                  id: 'd1c3s2-7',
                  kind: 'tip',
                  title: 'Exam Tip',
                  emoji: '💡',
                  body:
                    "If a model scores 99% on training but 60% on test data, that's **overfitting**. Fixes include more data, simpler models, regularization, or dropout.",
                },
                {
                  id: 'd1c3s2-8',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'A medical test must catch as many true disease cases as possible, even at the cost of some false alarms. Which metric should you prioritize?',
                  options: [
                    { id: 'a', text: 'Precision', correct: false },
                    { id: 'b', text: 'Recall', correct: true },
                    { id: 'c', text: 'Training accuracy', correct: false },
                    { id: 'd', text: 'Inference latency', correct: false },
                  ],
                  explanation:
                    "Recall measures how many actual positives you catch. When missing a true case is costly (like disease), maximize recall even if precision drops.",
                },
                {
                  id: 'd1c3s2-9',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'A model gets 98% on training data but only 55% on new data. The most likely problem is:',
                  options: [
                    { id: 'a', text: 'Underfitting', correct: false },
                    { id: 'b', text: 'Overfitting', correct: true },
                    { id: 'c', text: 'High recall', correct: false },
                    { id: 'd', text: 'Data labeling error', correct: false },
                  ],
                  explanation:
                    "A big gap between strong training performance and weak test performance is the classic signature of overfitting.",
                },
              ],
            },
          ],
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 2 — Fundamentals of Generative AI (24%)
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd2',
      title: 'Fundamentals of Generative AI',
      emoji: '✨',
      weight: '24%',
      description:
        'The exciting world of foundation models and LLMs — tokens, embeddings, prompts, temperature, hallucinations, and how generative AI actually works.',
      chapters: [
        {
          id: 'd2c1',
          title: 'Generative AI & Foundation Models',
          emoji: '🌟',
          description: 'What makes generative AI different, and the big foundation models powering it.',
          sections: [
            {
              id: 'd2c1s1',
              title: 'What Is Generative AI?',
              summary: 'Creating new content and the foundation models behind it.',
              cards: [
                {
                  id: 'd2c1s1-1',
                  kind: 'concept',
                  title: 'Generate, Don\'t Just Predict',
                  emoji: '✨',
                  body:
                    "Traditional ML mostly **predicts or classifies** (is this spam?). **Generative AI creates** new content — text, images, audio, code. It learns the patterns of data so deeply it can produce convincing originals. The engines behind it are **foundation models**: huge models pre-trained on massive data.",
                  terms: [
                    { term: 'Generative AI', definition: 'AI that creates new content rather than only classifying or predicting.' },
                    { term: 'Foundation model (FM)', definition: 'A large model pre-trained on broad data, adaptable to many tasks.' },
                    { term: 'Large Language Model (LLM)', definition: 'A foundation model specialized in understanding and generating text.' },
                  ],
                },
                {
                  id: 'd2c1s1-2',
                  kind: 'analogy',
                  title: 'A Well-Read Intern',
                  emoji: '🧑‍🎓',
                  body:
                    "A foundation model is like an intern who has read nearly the entire internet. They don't know your company specifics yet, but they can write, summarize, and brainstorm on almost any topic. With a little guidance (prompts) or training on your docs, they become genuinely useful.",
                },
                {
                  id: 'd2c1s1-3',
                  kind: 'compare',
                  title: 'Traditional ML vs Generative AI',
                  emoji: '⚖️',
                  compare: {
                    headers: ['Aspect', 'Traditional ML', 'Generative AI'],
                    rows: [
                      ['Output', 'Label or number', 'New content'],
                      ['Training', 'Task-specific', 'Broad pre-training'],
                      ['Examples', 'Fraud score', 'Chatbot, image gen'],
                      ['Reusability', 'One task', 'Many tasks'],
                    ],
                  },
                },
                {
                  id: 'd2c1s1-4',
                  kind: 'example',
                  title: 'Gen AI in Action',
                  emoji: '🎨',
                  body:
                    "- Writing a marketing email from a one-line brief.\n- Generating a product image from a text description.\n- Summarizing a 40-page report into 5 bullets.\n- Converting plain English into SQL.\n\nAll of these create something new rather than just labeling existing data.",
                },
                {
                  id: 'd2c1s1-5',
                  kind: 'tip',
                  title: 'Exam Tip',
                  emoji: '💡',
                  body:
                    "Foundation models are **pre-trained once on huge data** then **adapted** for many tasks. The phrase 'one model, many use cases' is a strong hint pointing to foundation models.",
                },
                {
                  id: 'd2c1s1-7',
                  kind: 'concept',
                  title: 'Multimodal Models',
                  emoji: '🎬',
                  body:
                    "A **multimodal** model handles more than one type of input or output — text, images, audio, even video — in a single model. Ask it about a photo, or have it describe a chart. Amazon's **Nova** family and many modern foundation models are multimodal.",
                  terms: [
                    { term: 'Multimodal', definition: 'A model that works across multiple data types like text, images, and audio.' },
                  ],
                },
                {
                  id: 'd2c1s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Which is the BEST example of generative AI?',
                  options: [
                    { id: 'a', text: 'A model that flags transactions as fraud or not', correct: false },
                    { id: 'b', text: 'A model that writes an original poem from a prompt', correct: true },
                    { id: 'c', text: 'A model that predicts house prices', correct: false },
                    { id: 'd', text: 'A model that groups customers into segments', correct: false },
                  ],
                  explanation:
                    "Generative AI creates new content. Writing an original poem is generation; the others are classification, regression, or clustering.",
                },
              ],
            },
            {
              id: 'd2c1s2',
              title: 'How LLMs See Language',
              summary: 'Tokens, embeddings, and vectors explained simply.',
              cards: [
                {
                  id: 'd2c1s2-1',
                  kind: 'concept',
                  title: 'Tokens, Embeddings & Vectors',
                  emoji: '🔤',
                  body:
                    "An LLM breaks text into **tokens** (word pieces). Each token is turned into an **embedding**: a list of numbers (a **vector**) that captures meaning. Similar meanings sit close together in this number space, which lets models reason about language mathematically.",
                  terms: [
                    { term: 'Token', definition: 'A chunk of text (word or sub-word) the model processes.' },
                    { term: 'Embedding', definition: 'A numeric vector representing the meaning of text.' },
                    { term: 'Vector', definition: 'An ordered list of numbers; embeddings are vectors.' },
                  ],
                },
                {
                  id: 'd2c1s2-2',
                  kind: 'analogy',
                  title: 'A Map of Meaning',
                  emoji: '🗺️',
                  body:
                    "Embeddings turn words into coordinates on a giant map. 'King' and 'queen' live in the same neighborhood; 'banana' is far away. The model navigates this map to find related ideas — that's how it knows 'doctor' and 'nurse' relate even though the letters differ.",
                },
                {
                  id: 'd2c1s2-3',
                  kind: 'diagram',
                  title: 'Text to Vectors',
                  emoji: '➡️',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'Raw Text', emoji: '📝' },
                      { label: 'Tokens', emoji: '🔤' },
                      { label: 'Embeddings', emoji: '🔢' },
                      { label: 'Vector Space', emoji: '🗺️' },
                    ],
                  },
                },
                {
                  id: 'd2c1s2-4',
                  kind: 'example',
                  title: 'Why Tokens Matter',
                  emoji: '💰',
                  body:
                    "Pricing and limits are often per-token. The phrase 'AI Practitioner exam' might be ~4 tokens. Models have a **context window** (max tokens they can read at once). Longer prompts and answers cost more and can hit that limit.",
                },
                {
                  id: 'd2c1s2-5',
                  kind: 'tip',
                  title: 'Exam Tip',
                  emoji: '💡',
                  body:
                    "Embeddings power **semantic search** and **RAG**. If a question mentions storing meaning as vectors for similarity search, think embeddings + a **vector database**.",
                },
                {
                  id: 'd2c1s2-6',
                  kind: 'concept',
                  title: 'The Context Window',
                  emoji: '🪟',
                  body:
                    "The **context window** is how much text (in tokens) a model can consider at once — its short-term memory. Bigger windows let you feed more documents or longer conversations, but cost more and can dilute focus.",
                  terms: [
                    { term: 'Context window', definition: 'The maximum number of tokens a model can process in one request.' },
                  ],
                },
                {
                  id: 'd2c1s2-7',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'What is an embedding?',
                  options: [
                    { id: 'a', text: 'A numeric vector that captures the meaning of text', correct: true },
                    { id: 'b', text: 'A type of GPU used for training', correct: false },
                    { id: 'c', text: 'A security policy for models', correct: false },
                    { id: 'd', text: 'The maximum tokens a model accepts', correct: false },
                  ],
                  explanation:
                    "An embedding is a vector of numbers representing meaning. Similar concepts get similar vectors, enabling semantic search and RAG.",
                },
              ],
            },
          ],
        },
        {
          id: 'd2c2',
          title: 'Controlling & Understanding Gen AI',
          emoji: '🎛️',
          description: 'Inference parameters, hallucinations, diffusion, and the limits of generative models.',
          sections: [
            {
              id: 'd2c2s1',
              title: 'Tuning the Output',
              summary: 'Temperature, top-p, and other inference parameters.',
              cards: [
                {
                  id: 'd2c2s1-1',
                  kind: 'concept',
                  title: 'Temperature & Top-P',
                  emoji: '🌡️',
                  body:
                    "**Temperature** controls randomness: low (near 0) = focused, predictable; high = creative, varied. **Top-p** (nucleus sampling) limits choices to the most probable tokens that add up to probability p. **Max tokens** caps the response length. These tune the *style* of output, not the model itself.",
                  terms: [
                    { term: 'Temperature', definition: 'A setting controlling output randomness; higher = more creative.' },
                    { term: 'Top-p', definition: 'Nucleus sampling; picks from the smallest set of tokens summing to probability p.' },
                    { term: 'Max tokens', definition: 'The maximum length of the generated response.' },
                  ],
                },
                {
                  id: 'd2c2s1-2',
                  kind: 'analogy',
                  title: 'A Volume Knob for Creativity',
                  emoji: '🎚️',
                  body:
                    "Temperature is like a creativity dial. Turn it down for a factual, repeatable answer (good for code or data extraction). Turn it up for brainstorming and storytelling, where surprising word choices are a feature, not a bug.",
                },
                {
                  id: 'd2c2s1-3',
                  kind: 'compare',
                  title: 'Low vs High Temperature',
                  emoji: '⚖️',
                  compare: {
                    headers: ['Setting', 'Low temperature', 'High temperature'],
                    rows: [
                      ['Output style', 'Focused, deterministic', 'Creative, diverse'],
                      ['Best for', 'Facts, code, extraction', 'Brainstorming, stories'],
                      ['Risk', 'Repetitive', 'Off-topic / wild'],
                    ],
                  },
                },
                {
                  id: 'd2c2s1-4',
                  kind: 'tip',
                  title: 'Exam Tip',
                  emoji: '💡',
                  body:
                    "Need **consistent, factual** answers? Lower the temperature. Want **variety and creativity**? Raise it. These are *inference* settings — they don't retrain the model.",
                },
                {
                  id: 'd2c2s1-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'You need a model to extract dates from documents with consistent, repeatable output. What temperature setting fits?',
                  options: [
                    { id: 'a', text: 'A high temperature', correct: false },
                    { id: 'b', text: 'A low temperature', correct: true },
                    { id: 'c', text: 'Maximum top-p only', correct: false },
                    { id: 'd', text: 'Temperature has no effect here', correct: false },
                  ],
                  explanation:
                    "Low temperature produces focused, deterministic output — ideal for extraction tasks where you want the same reliable answer each time.",
                },
                {
                  id: 'd2c2s1-7',
                  kind: 'tip',
                  title: 'Temperature vs Top-P',
                  emoji: '🎯',
                  body:
                    "Both control randomness, but differently. **Temperature** reshapes the whole probability curve. **Top-p** trims the pool to the most likely tokens summing to p. The exam may give both — just remember: lower values (of either) = safer, more predictable text.",
                },
                {
                  id: 'd2c2s1-6',
                  kind: 'concept',
                  title: 'Diffusion Models',
                  emoji: '🖼️',
                  body:
                    "**Diffusion models** generate images by starting with random noise and gradually removing it until a clear picture appears, guided by your prompt. They power text-to-image tools like the ones in Amazon Bedrock (e.g., Stable Diffusion, Amazon Titan Image / Nova).",
                  terms: [
                    { term: 'Diffusion model', definition: 'A generative model that creates images by denoising random noise step by step.' },
                  ],
                },
              ],
            },
            {
              id: 'd2c2s2',
              title: 'Limits & Risks of Gen AI',
              summary: 'Hallucinations, nondeterminism, and when NOT to use Gen AI.',
              cards: [
                {
                  id: 'd2c2s2-1',
                  kind: 'concept',
                  title: 'Hallucinations',
                  emoji: '👻',
                  body:
                    "A **hallucination** is when a model states something false but confident-sounding. LLMs predict plausible text, not verified truth, so they can invent facts, citations, or numbers. Mitigations include **RAG** (grounding in real documents), guardrails, and human review.",
                  terms: [
                    { term: 'Hallucination', definition: 'A confident but factually incorrect or fabricated model output.' },
                    { term: 'Grounding', definition: 'Anchoring responses in trusted source data to reduce hallucinations.' },
                  ],
                },
                {
                  id: 'd2c2s2-2',
                  kind: 'analogy',
                  title: 'The Confident Storyteller',
                  emoji: '🎭',
                  body:
                    "An LLM is like a charming storyteller who never wants to say 'I don't know.' Ask about an obscure topic and it may smoothly make something up. It's not lying on purpose — it's filling gaps with plausible-sounding words. Always verify high-stakes facts.",
                },
                {
                  id: 'd2c2s2-3',
                  kind: 'tip',
                  title: 'Reducing Hallucinations',
                  emoji: '🛡️',
                  body:
                    "Top fixes for the exam: use **RAG** to ground answers in your data, set **lower temperature**, write clearer prompts, apply **Bedrock Guardrails**, and keep a **human in the loop** for critical decisions.",
                },
                {
                  id: 'd2c2s2-4',
                  kind: 'concept',
                  title: 'Nondeterminism',
                  emoji: '🎲',
                  body:
                    "Generative models are often **nondeterministic** — the same prompt can yield different answers, especially at higher temperature. Great for creativity, tricky when you need reproducibility or auditability. Lower temperature reduces (but rarely fully removes) variation.",
                  terms: [
                    { term: 'Nondeterminism', definition: 'The property that identical inputs may produce different outputs.' },
                  ],
                },
                {
                  id: 'd2c2s2-5',
                  kind: 'example',
                  title: 'When NOT to Use Gen AI',
                  emoji: '🚫',
                  body:
                    "Avoid generative AI when you need **guaranteed exact answers** (tax math), **full transparency** into every decision, or **tiny, simple problems** a rule or lookup solves better. Gen AI shines at open-ended creation and language tasks, not precise arithmetic.",
                },
                {
                  id: 'd2c2s2-6',
                  kind: 'diagram',
                  title: 'Gen AI Strengths vs Weaknesses',
                  emoji: '⚖️',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Great At', emoji: '✅', items: ['Drafting text', 'Summarizing', 'Brainstorming', 'Code help'] },
                      { title: 'Watch Out', emoji: '⚠️', items: ['Exact math', 'Verified facts', 'Reproducibility', 'Bias'] },
                    ],
                  },
                },
                {
                  id: 'd2c2s2-7',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'An LLM confidently cites a research paper that does not exist. This is an example of:',
                  options: [
                    { id: 'a', text: 'Overfitting', correct: false },
                    { id: 'b', text: 'A hallucination', correct: true },
                    { id: 'c', text: 'Data drift', correct: false },
                    { id: 'd', text: 'Fine-tuning', correct: false },
                  ],
                  explanation:
                    "Inventing a fake but plausible source is a hallucination. RAG, guardrails, and human review help mitigate it.",
                },
                {
                  id: 'd2c2s2-8',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Which is the LEAST appropriate use of generative AI?',
                  options: [
                    { id: 'a', text: 'Drafting a blog post', correct: false },
                    { id: 'b', text: 'Calculating exact payroll tax owed', correct: true },
                    { id: 'c', text: 'Summarizing customer feedback', correct: false },
                    { id: 'd', text: 'Brainstorming product names', correct: false },
                  ],
                  explanation:
                    "Exact calculations need deterministic, verifiable logic. Generative AI may produce plausible but wrong numbers, so use precise tools for payroll math.",
                },
              ],
            },
          ],
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 3 — Applications of Foundation Models (28%)
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd3',
      title: 'Applications of Foundation Models',
      emoji: '🚀',
      weight: '28%',
      description:
        'Putting foundation models to work: prompt engineering, RAG, fine-tuning, and the full family of AWS AI services from Bedrock to SageMaker to Rekognition.',
      chapters: [
        {
          id: 'd3c1',
          title: 'Prompting, RAG & Customization',
          emoji: '🎯',
          description: 'How to get great results from foundation models without training from scratch.',
          sections: [
            {
              id: 'd3c1s1',
              title: 'Prompt Engineering',
              summary: 'Zero-shot, few-shot, and chain-of-thought prompting.',
              cards: [
                {
                  id: 'd3c1s1-1',
                  kind: 'concept',
                  title: 'The Art of the Prompt',
                  emoji: '✍️',
                  body:
                    "**Prompt engineering** is crafting inputs to steer a model toward better outputs — no retraining needed. **Zero-shot** gives no examples. **Few-shot** includes a handful of examples. **Chain-of-thought** asks the model to reason step by step, boosting accuracy on tricky problems.",
                  terms: [
                    { term: 'Prompt engineering', definition: 'Designing prompts to guide a model toward desired outputs.' },
                    { term: 'Zero-shot', definition: 'Asking the model to do a task with no examples provided.' },
                    { term: 'Few-shot', definition: 'Providing a few examples in the prompt to guide the model.' },
                    { term: 'Chain-of-thought', definition: 'Prompting the model to reason step by step.' },
                  ],
                },
                {
                  id: 'd3c1s1-2',
                  kind: 'analogy',
                  title: 'Briefing a New Hire',
                  emoji: '🧑‍💼',
                  body:
                    "Zero-shot is saying 'sort these tickets' and hoping they get it. Few-shot is showing two examples first. Chain-of-thought is asking them to 'walk me through your reasoning.' The clearer your brief, the better the work — same with prompts.",
                },
                {
                  id: 'd3c1s1-3',
                  kind: 'example',
                  title: 'Few-Shot in Practice',
                  emoji: '📋',
                  body:
                    "Prompt: 'Classify sentiment. \"Loved it!\" → Positive. \"Terrible service.\" → Negative. \"It was okay.\" → ?' By showing labeled examples, the model learns the format and nails the third one. That's few-shot prompting.",
                },
                {
                  id: 'd3c1s1-4',
                  kind: 'diagram',
                  title: 'Prompting Spectrum',
                  emoji: '📊',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Zero-shot', emoji: '0️⃣', items: ['No examples', 'Fast', 'Simple tasks'] },
                      { title: 'Few-shot', emoji: '🔢', items: ['A few examples', 'Guides format', 'Medium tasks'] },
                      { title: 'Chain-of-thought', emoji: '🧠', items: ['Step-by-step', 'Better reasoning', 'Complex tasks'] },
                    ],
                  },
                },
                {
                  id: 'd3c1s1-5',
                  kind: 'tip',
                  title: 'Exam Tip',
                  emoji: '💡',
                  body:
                    "Prompt engineering is the **cheapest, fastest** way to customize behavior — no training cost. Few-shot 'examples in the prompt' and chain-of-thought 'think step by step' are common exam keywords.",
                },
                {
                  id: 'd3c1s1-8',
                  kind: 'example',
                  title: 'Chain-of-Thought in Action',
                  emoji: '🧮',
                  body:
                    "Ask 'A shop had 23 apples, sold 7, then got 12 more. How many now?' Adding 'think step by step' nudges the model to show: 23 − 7 = 16, 16 + 12 = 28. Spelling out the steps catches mistakes a one-shot guess might make.",
                },
                {
                  id: 'd3c1s1-6',
                  kind: 'concept',
                  title: 'Prompt Risks',
                  emoji: '⚠️',
                  body:
                    "**Prompt injection** is when malicious input hijacks the model's instructions. **Jailbreaking** tricks it into bypassing safety rules. Guardrails, input validation, and careful system prompts defend against these attacks.",
                  terms: [
                    { term: 'Prompt injection', definition: 'Malicious input that overrides the intended instructions.' },
                    { term: 'Jailbreaking', definition: 'Crafting prompts to bypass a model\'s safety guardrails.' },
                  ],
                },
                {
                  id: 'd3c1s1-7',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Including 3 labeled examples in your prompt to guide the model is called:',
                  options: [
                    { id: 'a', text: 'Zero-shot prompting', correct: false },
                    { id: 'b', text: 'Few-shot prompting', correct: true },
                    { id: 'c', text: 'Fine-tuning', correct: false },
                    { id: 'd', text: 'Reinforcement learning', correct: false },
                  ],
                  explanation:
                    "Providing a small number of examples directly in the prompt is few-shot prompting. No examples = zero-shot.",
                },
              ],
            },
            {
              id: 'd3c1s2',
              title: 'RAG & Knowledge Bases',
              summary: 'Grounding models in your own data with retrieval-augmented generation.',
              cards: [
                {
                  id: 'd3c1s2-1',
                  kind: 'concept',
                  title: 'What Is RAG?',
                  emoji: '📚',
                  body:
                    "**Retrieval-Augmented Generation (RAG)** fetches relevant documents from your data and feeds them to the model before it answers. The model grounds its response in those facts, reducing hallucinations and letting it use private, up-to-date info it was never trained on.",
                  terms: [
                    { term: 'RAG', definition: 'Retrieval-Augmented Generation; injecting retrieved documents into the prompt.' },
                    { term: 'Vector database', definition: 'A store of embeddings enabling fast similarity search.' },
                    { term: 'Knowledge base', definition: 'A managed source of documents the model can retrieve from.' },
                  ],
                },
                {
                  id: 'd3c1s2-2',
                  kind: 'analogy',
                  title: 'Open-Book Exam',
                  emoji: '📖',
                  body:
                    "Without RAG, the model answers from memory and might guess. RAG is like giving it an open-book exam: it looks up the right page in your handbook first, then answers using the actual text. Far fewer made-up answers.",
                },
                {
                  id: 'd3c1s2-3',
                  kind: 'diagram',
                  title: 'The RAG Cycle',
                  emoji: '🔄',
                  diagram: {
                    type: 'cycle',
                    nodes: [
                      { label: 'User Question', emoji: '❓' },
                      { label: 'Embed Query', emoji: '🔢' },
                      { label: 'Search Vectors', emoji: '🔍' },
                      { label: 'Retrieve Docs', emoji: '📄' },
                      { label: 'Augment Prompt', emoji: '➕' },
                      { label: 'Generate Answer', emoji: '💬' },
                    ],
                  },
                },
                {
                  id: 'd3c1s2-4',
                  kind: 'example',
                  title: 'Company HR Bot',
                  emoji: '🏢',
                  body:
                    "An HR chatbot uses RAG over your policy PDFs. When an employee asks about parental leave, it retrieves the exact policy section and answers from it — accurate, current, and grounded in your real documents rather than the model's training data.",
                },
                {
                  id: 'd3c1s2-5',
                  kind: 'tip',
                  title: 'Exam Tip',
                  emoji: '💡',
                  body:
                    "RAG is the go-to when you need a model to use **private or frequently changing data** without retraining. **Amazon Bedrock Knowledge Bases** implement RAG as a managed service. Keywords: 'ground answers in company documents.'",
                },
                {
                  id: 'd3c1s2-7',
                  kind: 'tip',
                  title: 'RAG Beats Hallucinations',
                  emoji: '🛡️',
                  body:
                    "Because RAG feeds the model real source text, it can cite *where* an answer came from and is far less likely to invent facts. When a scenario stresses **accuracy, citations, or up-to-date private data**, RAG is the responsible, low-cost answer.",
                },
                {
                  id: 'd3c1s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'You want a chatbot to answer using your latest internal documents without retraining the model. Which approach fits best?',
                  options: [
                    { id: 'a', text: 'Fine-tuning', correct: false },
                    { id: 'b', text: 'Retrieval-Augmented Generation (RAG)', correct: true },
                    { id: 'c', text: 'Increasing temperature', correct: false },
                    { id: 'd', text: 'Pre-training from scratch', correct: false },
                  ],
                  explanation:
                    "RAG retrieves your current documents and grounds the answer in them — perfect for private, frequently changing data without retraining.",
                },
              ],
            },
            {
              id: 'd3c1s3',
              title: 'Fine-Tuning vs RAG vs Prompting',
              summary: 'Choosing the right customization strategy.',
              cards: [
                {
                  id: 'd3c1s3-1',
                  kind: 'concept',
                  title: 'Three Ways to Customize',
                  emoji: '🛠️',
                  body:
                    "**Prompt engineering** changes the input — cheapest, no training. **RAG** adds external knowledge at query time — great for facts that change. **Fine-tuning** updates the model's weights with your data — best for teaching new style, tone, or specialized tasks, but costs more.",
                  terms: [
                    { term: 'Fine-tuning', definition: 'Further training a model on your data to adjust its weights.' },
                    { term: 'Continued pre-training', definition: 'Training a model further on large domain data, often unlabeled.' },
                  ],
                },
                {
                  id: 'd3c1s3-2',
                  kind: 'analogy',
                  title: 'Coaching an Employee',
                  emoji: '🧑‍🏫',
                  body:
                    "Prompting is giving better instructions for one task. RAG is handing them a reference binder to consult. Fine-tuning is sending them to a multi-week training course so the new skills become second nature. More investment, deeper change.",
                },
                {
                  id: 'd3c1s3-3',
                  kind: 'compare',
                  title: 'Pick Your Strategy',
                  emoji: '⚖️',
                  compare: {
                    headers: ['Method', 'Cost', 'Best for'],
                    rows: [
                      ['Prompt engineering', 'Lowest', 'Quick behavior tweaks'],
                      ['RAG', 'Low-medium', 'Private / changing facts'],
                      ['Fine-tuning', 'Highest', 'New style, tone, tasks'],
                    ],
                  },
                },
                {
                  id: 'd3c1s3-4',
                  kind: 'diagram',
                  title: 'Effort vs Impact',
                  emoji: '📈',
                  diagram: {
                    type: 'quadrant',
                    axes: { x: ['Low effort', 'High effort'], y: ['Shallow change', 'Deep change'] },
                    points: [
                      { label: 'Prompting', x: 0.2, y: 0.25 },
                      { label: 'RAG', x: 0.5, y: 0.55 },
                      { label: 'Fine-tuning', x: 0.85, y: 0.85 },
                    ],
                  },
                },
                {
                  id: 'd3c1s3-5',
                  kind: 'tip',
                  title: 'Exam Tip',
                  emoji: '💡',
                  body:
                    "Default order of escalation: **try prompting first, then RAG, then fine-tuning**. If the question stresses *changing facts* → RAG. If it stresses *tone/style/domain behavior* → fine-tuning. If it stresses *cost and speed* → prompt engineering.",
                },
                {
                  id: 'd3c1s3-6',
                  kind: 'example',
                  title: 'Matching Scenarios',
                  emoji: '🧩',
                  body:
                    "- 'Answer using our daily-updated catalog' → **RAG**.\n- 'Always respond in our brand's quirky voice' → **fine-tuning**.\n- 'Make the summaries shorter' → **prompt engineering**.",
                },
                {
                  id: 'd3c1s3-7',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'A company wants the model to consistently write in their unique brand voice across all tasks. Which is most appropriate?',
                  options: [
                    { id: 'a', text: 'RAG', correct: false },
                    { id: 'b', text: 'Fine-tuning', correct: true },
                    { id: 'c', text: 'Raising temperature', correct: false },
                    { id: 'd', text: 'A bigger context window', correct: false },
                  ],
                  explanation:
                    "Teaching a model a consistent tone or style is best achieved by fine-tuning on examples in that voice. RAG adds facts, not style.",
                },
              ],
            },
          ],
        },
        {
          id: 'd3c2',
          title: 'Amazon Bedrock & SageMaker',
          emoji: '🪨',
          description: 'The two flagship AWS platforms for building with foundation models and ML.',
          sections: [
            {
              id: 'd3c2s1',
              title: 'Amazon Bedrock',
              summary: 'Managed access to foundation models, with knowledge bases, agents, and guardrails.',
              cards: [
                {
                  id: 'd3c2s1-1',
                  kind: 'concept',
                  title: 'What Is Amazon Bedrock?',
                  emoji: '🪨',
                  body:
                    "**Amazon Bedrock** is a fully managed, **serverless** service offering foundation models from multiple providers (Anthropic, Amazon Titan/Nova, Meta, Cohere, AI21, Stability AI) through one API. No infrastructure to manage — you call models, customize them, and build apps fast.",
                  terms: [
                    { term: 'Amazon Bedrock', definition: 'A managed service for accessing and customizing foundation models via API.' },
                    { term: 'Serverless', definition: 'No servers to provision or manage; AWS handles the infrastructure.' },
                  ],
                },
                {
                  id: 'd3c2s1-2',
                  kind: 'analogy',
                  title: 'A Streaming Service for AI Models',
                  emoji: '📺',
                  body:
                    "Bedrock is like a streaming platform: instead of buying and maintaining each model (DVD), you subscribe and access a whole catalog through one remote (the API). Switch between providers easily, and add features like guardrails on top.",
                },
                {
                  id: 'd3c2s1-3',
                  kind: 'concept',
                  title: 'Bedrock\'s Key Features',
                  emoji: '🧰',
                  body:
                    "- **Knowledge Bases:** managed RAG over your data.\n- **Agents:** let models call APIs and complete multi-step tasks.\n- **Guardrails:** filter harmful content and block unwanted topics.\n- **Model customization:** fine-tuning and continued pre-training.",
                  terms: [
                    { term: 'Bedrock Agents', definition: 'Orchestrate multi-step tasks by letting models call APIs and tools.' },
                    { term: 'Bedrock Guardrails', definition: 'Safety filters that block harmful, off-topic, or sensitive content.' },
                  ],
                },
                {
                  id: 'd3c2s1-4',
                  kind: 'diagram',
                  title: 'Bedrock Building Blocks',
                  emoji: '🧱',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Models', emoji: '🤖', items: ['Titan / Nova', 'Anthropic Claude', 'Llama, Cohere'] },
                      { title: 'Customize', emoji: '🎨', items: ['Knowledge Bases', 'Fine-tuning', 'Agents'] },
                      { title: 'Safety', emoji: '🛡️', items: ['Guardrails', 'Content filters', 'PII redaction'] },
                    ],
                  },
                },
                {
                  id: 'd3c2s1-5',
                  kind: 'tip',
                  title: 'Exam Tip',
                  emoji: '💡',
                  body:
                    "Bedrock = **build generative AI apps without managing infrastructure**. Knowledge Bases = RAG. Agents = action-taking. Guardrails = safety/filtering. These four keywords are heavily tested.",
                },
                {
                  id: 'd3c2s1-6',
                  kind: 'example',
                  title: 'Bedrock Agent at Work',
                  emoji: '🤝',
                  body:
                    "A travel app uses a Bedrock Agent: the user says 'book the cheapest flight Friday.' The agent reasons, calls a flight-search API, checks prices, and confirms the booking — turning a chat into real actions across multiple steps.",
                },
                {
                  id: 'd3c2s1-7',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Which Bedrock feature lets a model call external APIs to complete multi-step tasks?',
                  options: [
                    { id: 'a', text: 'Guardrails', correct: false },
                    { id: 'b', text: 'Agents', correct: true },
                    { id: 'c', text: 'Knowledge Bases', correct: false },
                    { id: 'd', text: 'Embeddings', correct: false },
                  ],
                  explanation:
                    "Bedrock Agents orchestrate multi-step tasks and call APIs/tools. Guardrails handle safety; Knowledge Bases handle RAG.",
                },
                {
                  id: 'd3c2s1-8',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'A team must block the model from discussing competitors and from leaking PII. Which Bedrock feature helps most?',
                  options: [
                    { id: 'a', text: 'Bedrock Agents', correct: false },
                    { id: 'b', text: 'Bedrock Guardrails', correct: true },
                    { id: 'c', text: 'SageMaker JumpStart', correct: false },
                    { id: 'd', text: 'Amazon Polly', correct: false },
                  ],
                  explanation:
                    "Guardrails filter harmful or unwanted content, block specified topics, and can redact PII — exactly this use case.",
                },
              ],
            },
            {
              id: 'd3c2s2',
              title: 'Amazon SageMaker',
              summary: 'The full ML platform for building, training, and deploying custom models.',
              cards: [
                {
                  id: 'd3c2s2-1',
                  kind: 'concept',
                  title: 'What Is SageMaker?',
                  emoji: '🛠️',
                  body:
                    "**Amazon SageMaker** is AWS's end-to-end platform to **build, train, tune, and deploy** ML models. Use it when you need full control over data, custom models, and the whole ML lifecycle — beyond just calling pre-built foundation models.",
                  terms: [
                    { term: 'Amazon SageMaker', definition: 'A managed platform for the complete ML lifecycle.' },
                    { term: 'SageMaker JumpStart', definition: 'A hub of pre-built models and solutions you can deploy quickly.' },
                  ],
                },
                {
                  id: 'd3c2s2-2',
                  kind: 'analogy',
                  title: 'A Fully Equipped Workshop',
                  emoji: '🏭',
                  body:
                    "If Bedrock is ordering ready-made furniture, SageMaker is a fully equipped woodworking workshop. You have every tool to design, build, and finish custom pieces. More power and control — but you do more of the building yourself.",
                },
                {
                  id: 'd3c2s2-3',
                  kind: 'compare',
                  title: 'Bedrock vs SageMaker',
                  emoji: '⚖️',
                  compare: {
                    headers: ['Aspect', 'Bedrock', 'SageMaker'],
                    rows: [
                      ['Focus', 'Use foundation models', 'Build/train any model'],
                      ['Control', 'Less (managed)', 'Full ML lifecycle'],
                      ['Effort', 'Low, fast', 'Higher, flexible'],
                      ['Best for', 'Gen AI apps fast', 'Custom ML models'],
                    ],
                  },
                },
                {
                  id: 'd3c2s2-4',
                  kind: 'concept',
                  title: 'Handy SageMaker Tools',
                  emoji: '🧰',
                  body:
                    "- **JumpStart:** deploy pre-trained models in clicks.\n- **Data Wrangler:** prep and clean data.\n- **Clarify:** detect bias and explain predictions.\n- **Model Monitor:** watch for drift in production.\n- **Ground Truth:** human data labeling.",
                  terms: [
                    { term: 'SageMaker Clarify', definition: 'Detects bias and provides explainability for models.' },
                    { term: 'SageMaker Ground Truth', definition: 'A service for building high-quality labeled training datasets.' },
                  ],
                },
                {
                  id: 'd3c2s2-5',
                  kind: 'tip',
                  title: 'Exam Tip',
                  emoji: '💡',
                  body:
                    "Need to **build a custom model with full control** → SageMaker. Want **fast gen-AI apps on existing FMs** → Bedrock. Need a **pre-built model fast inside SageMaker** → JumpStart.",
                },
                {
                  id: 'd3c2s2-7',
                  kind: 'example',
                  title: 'JumpStart Quick Win',
                  emoji: '🏁',
                  body:
                    "A startup needs an image classifier fast. Instead of building from scratch, they open **SageMaker JumpStart**, pick a pre-trained model, fine-tune it on a few hundred of their own images, and deploy — all in an afternoon. JumpStart turns weeks into hours.",
                },
                {
                  id: 'd3c2s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'A data science team needs full control to train a custom deep learning model on their proprietary dataset. Which service fits best?',
                  options: [
                    { id: 'a', text: 'Amazon Bedrock', correct: false },
                    { id: 'b', text: 'Amazon SageMaker', correct: true },
                    { id: 'c', text: 'Amazon Polly', correct: false },
                    { id: 'd', text: 'Amazon Comprehend', correct: false },
                  ],
                  explanation:
                    "SageMaker covers the full ML lifecycle with control to build and train custom models. Bedrock is for using existing foundation models.",
                },
              ],
            },
          ],
        },
        {
          id: 'd3c3',
          title: 'The AWS AI Service Family',
          emoji: '🧩',
          description: 'Pre-trained, ready-to-use AI services for vision, language, speech, search, and recommendations.',
          sections: [
            {
              id: 'd3c3s1',
              title: 'Vision & Document AI',
              summary: 'Rekognition and Textract for images and documents.',
              cards: [
                {
                  id: 'd3c3s1-1',
                  kind: 'concept',
                  title: 'Rekognition & Textract',
                  emoji: '👁️',
                  body:
                    "**Amazon Rekognition** analyzes images and video: object detection, faces, text in images, content moderation. **Amazon Textract** extracts text, forms, and tables from scanned documents (OCR with structure). Both are pre-trained — just send data and get results.",
                  terms: [
                    { term: 'Amazon Rekognition', definition: 'Image and video analysis: objects, faces, moderation, text detection.' },
                    { term: 'Amazon Textract', definition: 'Extracts text, forms, and tables from documents (intelligent OCR).' },
                  ],
                },
                {
                  id: 'd3c3s1-2',
                  kind: 'analogy',
                  title: 'Two Specialists',
                  emoji: '🔬',
                  body:
                    "Rekognition is the photo analyst who glances at a picture and tells you what's in it. Textract is the meticulous clerk who reads a paper form and types every field into a spreadsheet. Pictures vs paperwork.",
                },
                {
                  id: 'd3c3s1-3',
                  kind: 'example',
                  title: 'Real Uses',
                  emoji: '📸',
                  body:
                    "- Auto-tag photos and moderate user uploads → **Rekognition**.\n- Detect faces for secure check-in → **Rekognition**.\n- Digitize invoices and tax forms into data → **Textract**.\n- Pull key-value pairs from loan applications → **Textract**.",
                },
                {
                  id: 'd3c3s1-4',
                  kind: 'tip',
                  title: 'Exam Tip',
                  emoji: '💡',
                  body:
                    "Keyword **images/video** → Rekognition. Keyword **documents/forms/OCR** → Textract. If it's reading a *scanned form*, that's Textract, not Rekognition.",
                },
                {
                  id: 'd3c3s1-6',
                  kind: 'diagram',
                  title: 'Vision vs Documents',
                  emoji: '🗂️',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Rekognition', emoji: '👁️', items: ['Images & video', 'Faces & objects', 'Content moderation'] },
                      { title: 'Textract', emoji: '📄', items: ['Scanned documents', 'Forms & tables', 'Key-value pairs'] },
                    ],
                  },
                },
                {
                  id: 'd3c3s1-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'A bank needs to extract the fields from thousands of scanned loan application forms. Which service is best?',
                  options: [
                    { id: 'a', text: 'Amazon Rekognition', correct: false },
                    { id: 'b', text: 'Amazon Textract', correct: true },
                    { id: 'c', text: 'Amazon Polly', correct: false },
                    { id: 'd', text: 'Amazon Translate', correct: false },
                  ],
                  explanation:
                    "Textract specializes in extracting text, forms, and tables from documents. Rekognition is for images and video content, not structured form extraction.",
                },
              ],
            },
            {
              id: 'd3c3s2',
              title: 'Language & Speech AI',
              summary: 'Comprehend, Transcribe, Polly, Translate, Lex.',
              cards: [
                {
                  id: 'd3c3s2-1',
                  kind: 'concept',
                  title: 'The Language Toolkit',
                  emoji: '🗣️',
                  body:
                    "- **Comprehend:** NLP — sentiment, entities, key phrases, PII detection.\n- **Transcribe:** speech → text.\n- **Polly:** text → lifelike speech.\n- **Translate:** language → language.\n- **Lex:** build chatbots / voice bots (powers Alexa-style conversations).",
                  terms: [
                    { term: 'Amazon Comprehend', definition: 'NLP service for sentiment, entities, key phrases, and PII.' },
                    { term: 'Amazon Transcribe', definition: 'Converts speech audio into text.' },
                    { term: 'Amazon Polly', definition: 'Converts text into natural-sounding speech.' },
                    { term: 'Amazon Lex', definition: 'Builds conversational chatbots and voice interfaces.' },
                  ],
                },
                {
                  id: 'd3c3s2-2',
                  kind: 'analogy',
                  title: 'A Language Office',
                  emoji: '🏢',
                  body:
                    "Imagine a small office: Transcribe is the stenographer (speech to text), Polly is the announcer (text to speech), Translate is the interpreter, Comprehend is the analyst reading between the lines, and Lex is the friendly receptionist chatting with callers.",
                },
                {
                  id: 'd3c3s2-3',
                  kind: 'diagram',
                  title: 'Speech & Text Flow',
                  emoji: '🔁',
                  diagram: {
                    type: 'flow',
                    direction: 'horizontal',
                    nodes: [
                      { label: 'Speech', sublabel: 'audio', emoji: '🎙️' },
                      { label: 'Transcribe', sublabel: 'to text', emoji: '📝' },
                      { label: 'Comprehend', sublabel: 'analyze', emoji: '🔍' },
                      { label: 'Polly', sublabel: 'to speech', emoji: '🔊' },
                    ],
                  },
                },
                {
                  id: 'd3c3s2-4',
                  kind: 'example',
                  title: 'Call Center Pipeline',
                  emoji: '☎️',
                  body:
                    "A call center records calls → **Transcribe** turns them to text → **Comprehend** scores sentiment and flags PII → if needed **Translate** converts languages → a **Lex** bot handles routine questions, and **Polly** voices its replies.",
                },
                {
                  id: 'd3c3s2-5',
                  kind: 'tip',
                  title: 'Exam Tip',
                  emoji: '💡',
                  body:
                    "Memorize the direction: **Transcribe = speech→text**, **Polly = text→speech**. **Comprehend = understand text** (sentiment/entities/PII). **Lex = chatbots**. **Translate = languages**.",
                },
                {
                  id: 'd3c3s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Which service turns written text into natural-sounding speech?',
                  options: [
                    { id: 'a', text: 'Amazon Transcribe', correct: false },
                    { id: 'b', text: 'Amazon Polly', correct: true },
                    { id: 'c', text: 'Amazon Comprehend', correct: false },
                    { id: 'd', text: 'Amazon Lex', correct: false },
                  ],
                  explanation:
                    "Polly converts text to lifelike speech. Transcribe goes the other way (speech to text); Comprehend analyzes text; Lex builds chatbots.",
                },
                {
                  id: 'd3c3s2-7',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'You need to detect sentiment and redact personal information from customer reviews. Which service fits?',
                  options: [
                    { id: 'a', text: 'Amazon Polly', correct: false },
                    { id: 'b', text: 'Amazon Comprehend', correct: true },
                    { id: 'c', text: 'Amazon Translate', correct: false },
                    { id: 'd', text: 'Amazon Rekognition', correct: false },
                  ],
                  explanation:
                    "Comprehend handles NLP tasks including sentiment analysis and detecting/redacting PII in text.",
                },
              ],
            },
            {
              id: 'd3c3s3',
              title: 'Search, Recommend & Forecast',
              summary: 'Kendra, Personalize, Forecast, and Amazon Q.',
              cards: [
                {
                  id: 'd3c3s3-1',
                  kind: 'concept',
                  title: 'Smart Search & Predictions',
                  emoji: '🔮',
                  body:
                    "- **Kendra:** intelligent enterprise search across your documents using natural language.\n- **Personalize:** real-time recommendations (think 'customers also bought').\n- **Forecast:** time-series forecasting (demand, inventory).\n- **Amazon Q:** generative AI assistant for business and builders.",
                  terms: [
                    { term: 'Amazon Kendra', definition: 'ML-powered intelligent search across enterprise content.' },
                    { term: 'Amazon Personalize', definition: 'Generates personalized recommendations like Amazon.com.' },
                    { term: 'Amazon Forecast', definition: 'Time-series forecasting service for demand and planning.' },
                    { term: 'Amazon Q', definition: 'A generative AI-powered assistant for business and development.' },
                  ],
                },
                {
                  id: 'd3c3s3-2',
                  kind: 'analogy',
                  title: 'The Department Store',
                  emoji: '🏬',
                  body:
                    "Kendra is the helpful info desk that finds anything you ask for. Personalize is the savvy clerk suggesting items you'll love. Forecast is the manager predicting next month's demand. Amazon Q is the all-knowing assistant you can just chat with.",
                },
                {
                  id: 'd3c3s3-3',
                  kind: 'example',
                  title: 'Matching Needs',
                  emoji: '🧩',
                  body:
                    "- 'Let employees ask questions across all our docs' → **Kendra**.\n- 'Recommend products per shopper' → **Personalize**.\n- 'Predict next quarter's sales' → **Forecast**.\n- 'A chat assistant over our AWS account and apps' → **Amazon Q**.",
                },
                {
                  id: 'd3c3s3-4',
                  kind: 'tip',
                  title: 'Exam Tip',
                  emoji: '💡',
                  body:
                    "**Recommendations** → Personalize. **Time-series prediction** → Forecast. **Enterprise/natural-language search** → Kendra. **Built-in gen-AI assistant** → Amazon Q. Don't confuse Kendra (search) with Personalize (recommend).",
                },
                {
                  id: 'd3c3s3-5',
                  kind: 'diagram',
                  title: 'Service Cheat Sheet',
                  emoji: '🗂️',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Find', emoji: '🔍', items: ['Kendra: search docs'] },
                      { title: 'Suggest', emoji: '🛍️', items: ['Personalize: recommend'] },
                      { title: 'Predict', emoji: '📈', items: ['Forecast: time-series'] },
                      { title: 'Assist', emoji: '🤖', items: ['Amazon Q: chat helper'] },
                    ],
                  },
                },
                {
                  id: 'd3c3s3-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'An online store wants to show each shopper personalized product suggestions in real time. Which service is best?',
                  options: [
                    { id: 'a', text: 'Amazon Kendra', correct: false },
                    { id: 'b', text: 'Amazon Personalize', correct: true },
                    { id: 'c', text: 'Amazon Forecast', correct: false },
                    { id: 'd', text: 'Amazon Textract', correct: false },
                  ],
                  explanation:
                    "Amazon Personalize delivers real-time, tailored recommendations — the same tech behind Amazon.com suggestions.",
                },
                {
                  id: 'd3c3s3-7',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Employees want to ask natural-language questions and search across all internal documents. Which service fits best?',
                  options: [
                    { id: 'a', text: 'Amazon Forecast', correct: false },
                    { id: 'b', text: 'Amazon Personalize', correct: false },
                    { id: 'c', text: 'Amazon Kendra', correct: true },
                    { id: 'd', text: 'Amazon Polly', correct: false },
                  ],
                  explanation:
                    "Kendra provides intelligent, natural-language search across enterprise content sources.",
                },
              ],
            },
          ],
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 4 — Guidelines for Responsible AI (14%)
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd4',
      title: 'Guidelines for Responsible AI',
      emoji: '⚖️',
      weight: '14%',
      description:
        'Building AI that is fair, transparent, and trustworthy — bias, explainability, and the AWS tools that help you stay responsible.',
      chapters: [
        {
          id: 'd4c1',
          title: 'Fairness, Bias & Transparency',
          emoji: '🤝',
          description: 'The core principles of responsible AI and the risks of getting them wrong.',
          sections: [
            {
              id: 'd4c1s1',
              title: 'Principles of Responsible AI',
              summary: 'Fairness, bias, transparency, and accountability.',
              cards: [
                {
                  id: 'd4c1s1-1',
                  kind: 'concept',
                  title: 'The Pillars',
                  emoji: '🏛️',
                  body:
                    "Responsible AI rests on principles like **fairness** (no unjust discrimination), **transparency** (people know AI is involved), **explainability** (we can understand decisions), **privacy**, **safety**, and **accountability** (humans stay responsible). Together they build trust.",
                  terms: [
                    { term: 'Fairness', definition: 'Avoiding unjust bias or discrimination in AI outcomes.' },
                    { term: 'Transparency', definition: 'Being open that AI is used and how it operates.' },
                    { term: 'Accountability', definition: 'Humans and organizations remaining responsible for AI behavior.' },
                  ],
                },
                {
                  id: 'd4c1s1-2',
                  kind: 'concept',
                  title: 'What Is Bias?',
                  emoji: '⚠️',
                  body:
                    "**Bias** is systematic unfairness in a model's outputs, often from skewed training data. If historical data underrepresents a group, the model may treat that group unfairly. Bias can creep in through data, features, or even how problems are framed.",
                  terms: [
                    { term: 'Bias', definition: 'Systematic, unfair skew in model outputs against certain groups.' },
                    { term: 'Data bias', definition: 'Bias arising from unrepresentative or skewed training data.' },
                  ],
                },
                {
                  id: 'd4c1s1-3',
                  kind: 'analogy',
                  title: 'A Lopsided Survey',
                  emoji: '📋',
                  body:
                    "Training a model on biased data is like polling only one neighborhood and claiming it speaks for the whole city. The 'results' look confident but systematically miss everyone else. Garbage in, biased out.",
                },
                {
                  id: 'd4c1s1-4',
                  kind: 'example',
                  title: 'Bias Gone Wrong',
                  emoji: '🚨',
                  body:
                    "A hiring model trained mostly on past male hires learns to favor men — perpetuating historical bias. A facial system trained on limited skin tones performs worse on others. Both harm fairness and trust, and both trace back to data.",
                },
                {
                  id: 'd4c1s1-5',
                  kind: 'tip',
                  title: 'Exam Tip',
                  emoji: '💡',
                  body:
                    "Bias most often originates in **training data**. Fixes include more representative data, fairness metrics, and tools like **SageMaker Clarify** to detect bias before and after deployment.",
                },
                {
                  id: 'd4c1s1-7',
                  kind: 'analogy',
                  title: 'A Recipe for Trust',
                  emoji: '🍰',
                  body:
                    "The pillars work together like ingredients in a cake. Skip fairness and it's biased; skip transparency and no one trusts it; skip accountability and no one owns the outcome. Responsible AI needs the whole recipe, not just one tasty ingredient.",
                },
                {
                  id: 'd4c1s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'A loan model rejects qualified applicants from one region far more often. What is the most likely root cause?',
                  options: [
                    { id: 'a', text: 'Low temperature setting', correct: false },
                    { id: 'b', text: 'Bias in the training data', correct: true },
                    { id: 'c', text: 'A small context window', correct: false },
                    { id: 'd', text: 'Too many tokens', correct: false },
                  ],
                  explanation:
                    "Systematic unfair treatment of a group usually stems from biased or unrepresentative training data.",
                },
              ],
            },
            {
              id: 'd4c1s2',
              title: 'Explainability & Transparency',
              summary: 'Understanding why a model decided what it did.',
              cards: [
                {
                  id: 'd4c1s2-1',
                  kind: 'concept',
                  title: 'Explainability vs Interpretability',
                  emoji: '🔎',
                  body:
                    "**Explainability** means we can describe *why* a model made a decision in human terms. **Interpretability** is how inherently understandable the model is. Simple models (decision trees) are interpretable; complex deep nets are 'black boxes' needing explainability tools.",
                  terms: [
                    { term: 'Explainability', definition: 'The ability to describe why a model produced a given output.' },
                    { term: 'Interpretability', definition: 'How inherently understandable a model\'s inner workings are.' },
                    { term: 'Black box', definition: 'A model whose internal reasoning is hard to inspect directly.' },
                  ],
                },
                {
                  id: 'd4c1s2-2',
                  kind: 'analogy',
                  title: 'The Doctor\'s Diagnosis',
                  emoji: '🩺',
                  body:
                    "A doctor who just says 'you're sick' isn't trusted. One who explains 'your bloodwork shows X, so it's Y' earns confidence. Explainability is the model showing its reasoning so people — and regulators — can trust and challenge it.",
                },
                {
                  id: 'd4c1s2-3',
                  kind: 'concept',
                  title: 'AWS Tools for Trust',
                  emoji: '🧰',
                  body:
                    "- **SageMaker Clarify:** detects bias and explains feature importance.\n- **AI Service Cards:** AWS docs describing intended use, limits, and fairness of AI services.\n- **SageMaker Model Cards:** document a model's details for governance.\n- **Bedrock Guardrails:** enforce safe, on-topic behavior.",
                  terms: [
                    { term: 'AI Service Cards', definition: 'AWS documents detailing a service\'s intended use, limitations, and responsible-AI considerations.' },
                    { term: 'Model Cards', definition: 'Documentation capturing a model\'s purpose, data, and performance for governance.' },
                  ],
                },
                {
                  id: 'd4c1s2-4',
                  kind: 'diagram',
                  title: 'Responsible AI Toolkit',
                  emoji: '🛡️',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Detect Bias', emoji: '⚖️', items: ['SageMaker Clarify'] },
                      { title: 'Document', emoji: '📄', items: ['AI Service Cards', 'Model Cards'] },
                      { title: 'Control', emoji: '🛡️', items: ['Bedrock Guardrails'] },
                    ],
                  },
                },
                {
                  id: 'd4c1s2-5',
                  kind: 'tip',
                  title: 'Exam Tip',
                  emoji: '💡',
                  body:
                    "Match the tool: **bias detection + explainability → SageMaker Clarify**. **Transparency docs about an AWS AI service → AI Service Cards**. **Content safety filters → Bedrock Guardrails**.",
                },
                {
                  id: 'd4c1s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Which AWS feature helps detect bias in your data and model AND explain feature importance?',
                  options: [
                    { id: 'a', text: 'Amazon Polly', correct: false },
                    { id: 'b', text: 'SageMaker Clarify', correct: true },
                    { id: 'c', text: 'Amazon Kendra', correct: false },
                    { id: 'd', text: 'Amazon Forecast', correct: false },
                  ],
                  explanation:
                    "SageMaker Clarify is purpose-built for bias detection and model explainability across the ML lifecycle.",
                },
                {
                  id: 'd4c1s2-7',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'A regulator asks for documentation of an AWS AI service\'s intended uses and limitations. What should you reference?',
                  options: [
                    { id: 'a', text: 'AI Service Cards', correct: true },
                    { id: 'b', text: 'Temperature settings', correct: false },
                    { id: 'c', text: 'Embeddings', correct: false },
                    { id: 'd', text: 'Top-p values', correct: false },
                  ],
                  explanation:
                    "AWS AI Service Cards transparently document intended use cases, limitations, and responsible-AI considerations for AI services.",
                },
              ],
            },
          ],
        },
        {
          id: 'd4c2',
          title: 'Responsible Gen AI in Practice',
          emoji: '🌍',
          description: 'Applying guardrails, human oversight, and monitoring to generative AI specifically.',
          sections: [
            {
              id: 'd4c2s1',
              title: 'Guardrails & Human Oversight',
              summary: 'Keeping generative AI safe, on-topic, and accountable.',
              cards: [
                {
                  id: 'd4c2s1-1',
                  kind: 'concept',
                  title: 'Why Guardrails Matter',
                  emoji: '🛡️',
                  body:
                    "Generative AI can produce toxic, biased, or off-topic content. **Guardrails** filter harmful inputs and outputs, block sensitive topics, and redact PII. **Human-in-the-loop** keeps people reviewing high-stakes decisions, so AI assists rather than replaces accountability.",
                  terms: [
                    { term: 'Guardrails', definition: 'Policies and filters that constrain AI inputs and outputs for safety.' },
                    { term: 'Human-in-the-loop', definition: 'Keeping a human in the decision process to review or approve AI outputs.' },
                  ],
                },
                {
                  id: 'd4c2s1-2',
                  kind: 'analogy',
                  title: 'Bumpers at the Bowling Alley',
                  emoji: '🎳',
                  body:
                    "Guardrails are like the bumpers in a bowling lane — they keep the ball (the AI's output) out of the gutter without controlling every move. The AI still plays freely, but it can't veer into clearly off-limits territory.",
                },
                {
                  id: 'd4c2s1-3',
                  kind: 'example',
                  title: 'Guardrails in Action',
                  emoji: '🚧',
                  body:
                    "A healthcare chatbot uses Bedrock Guardrails to block medical-diagnosis claims, redact patient names, and refuse off-topic requests. A human nurse reviews flagged cases. The AI helps, but humans stay accountable for care.",
                },
                {
                  id: 'd4c2s1-4',
                  kind: 'tip',
                  title: 'Exam Tip',
                  emoji: '💡',
                  body:
                    "For **high-risk decisions** (medical, legal, financial), the responsible answer almost always includes **human oversight** plus **guardrails**. AI augments human judgment; it doesn't replace it.",
                },
                {
                  id: 'd4c2s1-5',
                  kind: 'concept',
                  title: 'Toxicity & Safety Risks',
                  emoji: '☣️',
                  body:
                    "Risks include **toxicity** (offensive output), **misinformation** (hallucinations), **privacy leaks** (regurgitating sensitive data), and **intellectual-property** concerns. Responsible deployment plans for each with filters, grounding, and review.",
                  terms: [
                    { term: 'Toxicity', definition: 'Offensive, harmful, or inappropriate generated content.' },
                  ],
                },
                {
                  id: 'd4c2s1-7',
                  kind: 'diagram',
                  title: 'Layers of Safety',
                  emoji: '🧅',
                  diagram: {
                    type: 'stack',
                    nodes: [
                      { label: 'Input Filters', sublabel: 'block bad prompts', emoji: '🚪' },
                      { label: 'Guardrails', sublabel: 'topic & PII control', emoji: '🛡️' },
                      { label: 'Output Review', sublabel: 'check responses', emoji: '🔍' },
                      { label: 'Human-in-the-Loop', sublabel: 'final accountability', emoji: '🙋' },
                    ],
                  },
                },
                {
                  id: 'd4c2s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'A bank deploys a gen-AI assistant for loan advice. What is the MOST responsible design choice?',
                  options: [
                    { id: 'a', text: 'Let the AI auto-approve loans with no review', correct: false },
                    { id: 'b', text: 'Add guardrails and keep a human in the loop for decisions', correct: true },
                    { id: 'c', text: 'Maximize temperature for creativity', correct: false },
                    { id: 'd', text: 'Remove all content filters', correct: false },
                  ],
                  explanation:
                    "High-stakes financial decisions call for guardrails plus human oversight so AI assists rather than makes unchecked decisions.",
                },
              ],
            },
            {
              id: 'd4c2s2',
              title: 'Choosing Models Responsibly',
              summary: 'Trade-offs, sustainability, and ongoing monitoring.',
              cards: [
                {
                  id: 'd4c2s2-1',
                  kind: 'concept',
                  title: 'Responsible Model Selection',
                  emoji: '🧭',
                  body:
                    "Picking a model isn't just about accuracy. Weigh **fairness**, **explainability**, **cost**, **latency**, **environmental impact**, and **safety**. Sometimes a simpler, more transparent model is the responsible choice even if a bigger one scores slightly higher.",
                  terms: [
                    { term: 'Trade-off', definition: 'Balancing competing goals like accuracy, cost, fairness, and speed.' },
                    { term: 'Sustainability', definition: 'Considering the energy and environmental cost of training/running models.' },
                  ],
                },
                {
                  id: 'd4c2s2-2',
                  kind: 'analogy',
                  title: 'Buying a Car',
                  emoji: '🚗',
                  body:
                    "The fastest car isn't always the right buy. You weigh price, fuel use, safety, and how easy it is to maintain. Choosing an AI model is the same balancing act — raw performance is just one factor among many.",
                },
                {
                  id: 'd4c2s2-3',
                  kind: 'diagram',
                  title: 'Selection Trade-offs',
                  emoji: '⚖️',
                  diagram: {
                    type: 'quadrant',
                    axes: { x: ['Low cost', 'High cost'], y: ['Lower capability', 'Higher capability'] },
                    points: [
                      { label: 'Small model', x: 0.2, y: 0.3 },
                      { label: 'Mid model', x: 0.5, y: 0.6 },
                      { label: 'Large model', x: 0.85, y: 0.9 },
                    ],
                  },
                },
                {
                  id: 'd4c2s2-4',
                  kind: 'tip',
                  title: 'Exam Tip',
                  emoji: '💡',
                  body:
                    "Watch for questions where the 'best' model is *not* the biggest: if requirements stress **transparency**, **low cost**, **low latency**, or **sustainability**, a smaller or simpler model may be the responsible answer.",
                },
                {
                  id: 'd4c2s2-5',
                  kind: 'concept',
                  title: 'Keep Watching',
                  emoji: '👀',
                  body:
                    "Responsible AI doesn't end at launch. Monitor for **drift**, emerging **bias**, and harmful outputs. Collect feedback, retrain when needed, and keep documentation current. Responsibility is an ongoing practice, not a checkbox.",
                },
                {
                  id: 'd4c2s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'A team must deploy a model where decision transparency is legally required and budgets are tight. Which is the MOST responsible choice?',
                  options: [
                    { id: 'a', text: 'The largest, most complex black-box model', correct: false },
                    { id: 'b', text: 'A simpler, explainable model that meets requirements', correct: true },
                    { id: 'c', text: 'Whichever model is newest', correct: false },
                    { id: 'd', text: 'A model with the highest temperature', correct: false },
                  ],
                  explanation:
                    "When transparency is required and budgets are limited, a simpler, explainable, cost-effective model is the responsible pick over a black box.",
                },
              ],
            },
          ],
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    // DOMAIN 5 — Security, Compliance, and Governance for AI Solutions (14%)
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'd5',
      title: 'Security, Compliance, and Governance for AI Solutions',
      emoji: '🔐',
      weight: '14%',
      description:
        'Protecting AI systems and data: IAM, encryption, the shared responsibility model, data privacy, compliance, and model governance.',
      chapters: [
        {
          id: 'd5c1',
          title: 'Securing AI Workloads',
          emoji: '🛡️',
          description: 'Access control, encryption, and the AWS shared responsibility model.',
          sections: [
            {
              id: 'd5c1s1',
              title: 'Access & Identity',
              summary: 'IAM and least privilege for AI services.',
              cards: [
                {
                  id: 'd5c1s1-1',
                  kind: 'concept',
                  title: 'IAM & Least Privilege',
                  emoji: '🔑',
                  body:
                    "**IAM (Identity and Access Management)** controls *who* can do *what* on AWS. The principle of **least privilege** means granting only the permissions needed — nothing more. For AI, this limits who can invoke models, read training data, or change deployments.",
                  terms: [
                    { term: 'IAM', definition: 'AWS Identity and Access Management; controls authentication and authorization.' },
                    { term: 'Least privilege', definition: 'Granting only the minimum permissions necessary for a task.' },
                    { term: 'IAM role', definition: 'A set of permissions that services or users can assume temporarily.' },
                  ],
                },
                {
                  id: 'd5c1s1-2',
                  kind: 'analogy',
                  title: 'Hotel Key Cards',
                  emoji: '🏨',
                  body:
                    "IAM is like a hotel's key-card system. Each card opens only the rooms you're allowed into — your room, maybe the gym, not the vault. Least privilege means staff don't get a master key 'just in case.' Fewer keys, fewer risks.",
                },
                {
                  id: 'd5c1s1-3',
                  kind: 'example',
                  title: 'Locking Down Bedrock',
                  emoji: '🔒',
                  body:
                    "You grant the app's IAM role permission to *invoke* a specific Bedrock model, but not to delete knowledge bases or read raw training buckets. If credentials leak, the blast radius stays small. That's least privilege in action.",
                },
                {
                  id: 'd5c1s1-4',
                  kind: 'tip',
                  title: 'Exam Tip',
                  emoji: '💡',
                  body:
                    "When a question asks how to control access to AI services or data securely, the answer is almost always **IAM with least-privilege roles/policies** — not hard-coded credentials or wide-open permissions.",
                },
                {
                  id: 'd5c1s1-6',
                  kind: 'concept',
                  title: 'Users, Roles & Policies',
                  emoji: '🧩',
                  body:
                    "**Users** are people, **roles** are temporary identities services assume, and **policies** are JSON documents listing allowed actions. Prefer roles over long-lived keys for apps, and attach tight policies. This trio is how AWS answers 'who can touch this AI resource?'",
                  terms: [
                    { term: 'IAM policy', definition: 'A JSON document defining allowed or denied actions on resources.' },
                  ],
                },
                {
                  id: 'd5c1s1-5',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'What is the BEST way to control which applications can invoke a Bedrock model?',
                  options: [
                    { id: 'a', text: 'Share one root account password', correct: false },
                    { id: 'b', text: 'Use IAM roles with least-privilege policies', correct: true },
                    { id: 'c', text: 'Make the model public', correct: false },
                    { id: 'd', text: 'Disable all logging', correct: false },
                  ],
                  explanation:
                    "IAM roles scoped to least privilege are the standard, secure way to control access to AWS AI services.",
                },
              ],
            },
            {
              id: 'd5c1s2',
              title: 'Encryption & Shared Responsibility',
              summary: 'Protecting data and knowing who secures what.',
              cards: [
                {
                  id: 'd5c1s2-1',
                  kind: 'concept',
                  title: 'Encryption at Rest & in Transit',
                  emoji: '🔐',
                  body:
                    "**Encryption at rest** protects stored data (in S3, databases). **Encryption in transit** protects data moving over networks (via TLS). **AWS KMS** manages the keys. For AI, this guards training data, model artifacts, and prompts/responses.",
                  terms: [
                    { term: 'Encryption at rest', definition: 'Encrypting stored data so it\'s unreadable without keys.' },
                    { term: 'Encryption in transit', definition: 'Encrypting data as it moves over a network (e.g., TLS).' },
                    { term: 'AWS KMS', definition: 'Key Management Service for creating and controlling encryption keys.' },
                  ],
                },
                {
                  id: 'd5c1s2-2',
                  kind: 'concept',
                  title: 'The Shared Responsibility Model',
                  emoji: '🤝',
                  body:
                    "AWS secures the **cloud itself** (hardware, facilities, managed-service infrastructure). You secure what you put **in** the cloud (your data, access policies, configurations). Security is a partnership — each side owns its part.",
                  terms: [
                    { term: 'Shared Responsibility Model', definition: 'AWS secures the cloud; the customer secures what they run in it.' },
                  ],
                },
                {
                  id: 'd5c1s2-3',
                  kind: 'analogy',
                  title: 'Renting an Apartment',
                  emoji: '🏢',
                  body:
                    "AWS is the landlord who secures the building, locks the main doors, and maintains the structure. You're the tenant responsible for locking your own apartment and not leaving valuables out. Both keep the place safe — different jobs.",
                },
                {
                  id: 'd5c1s2-4',
                  kind: 'diagram',
                  title: 'Who Secures What',
                  emoji: '🗂️',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'AWS Secures', emoji: '☁️', items: ['Hardware', 'Data centers', 'Managed service infra'] },
                      { title: 'You Secure', emoji: '🙋', items: ['Your data', 'IAM / access', 'Configuration'] },
                    ],
                  },
                },
                {
                  id: 'd5c1s2-5',
                  kind: 'tip',
                  title: 'Exam Tip',
                  emoji: '💡',
                  body:
                    "Under shared responsibility, **your data and access controls are always your job**. AWS never owns your IAM policies or how you classify and encrypt your data. Watch for 'who is responsible for X' questions.",
                },
                {
                  id: 'd5c1s2-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Under the AWS shared responsibility model, who is responsible for configuring access controls to your training data?',
                  options: [
                    { id: 'a', text: 'AWS', correct: false },
                    { id: 'b', text: 'The customer', correct: true },
                    { id: 'c', text: 'No one — it is automatic', correct: false },
                    { id: 'd', text: 'The foundation model provider', correct: false },
                  ],
                  explanation:
                    "Customers are responsible for securing their data and access controls. AWS secures the underlying cloud infrastructure.",
                },
              ],
            },
          ],
        },
        {
          id: 'd5c2',
          title: 'Privacy, Compliance & Governance',
          emoji: '📜',
          description: 'Handling data responsibly and proving you meet the rules.',
          sections: [
            {
              id: 'd5c2s1',
              title: 'Data Privacy & Protection',
              summary: 'Keeping sensitive data safe in AI workflows.',
              cards: [
                {
                  id: 'd5c2s1-1',
                  kind: 'concept',
                  title: 'Protecting Sensitive Data',
                  emoji: '🕵️',
                  body:
                    "AI often touches **PII** (personally identifiable information). Protect it by **minimizing** what you collect, **anonymizing** or **redacting** it, encrypting it, and controlling access. Tools like **Amazon Macie** discover sensitive data; **Comprehend** can detect and redact PII in text.",
                  terms: [
                    { term: 'PII', definition: 'Personally Identifiable Information, like names, emails, or IDs.' },
                    { term: 'Anonymization', definition: 'Removing or masking identifying details from data.' },
                    { term: 'Amazon Macie', definition: 'A service that discovers and protects sensitive data in S3.' },
                  ],
                },
                {
                  id: 'd5c2s1-2',
                  kind: 'analogy',
                  title: 'Redacting a Document',
                  emoji: '🖊️',
                  body:
                    "Think of a declassified file with black bars over names. Anonymizing data works the same way: you keep the useful information for training while blacking out anything that could identify a real person.",
                },
                {
                  id: 'd5c2s1-3',
                  kind: 'concept',
                  title: 'Keeping Your Data Private in Bedrock',
                  emoji: '🔏',
                  body:
                    "On Amazon Bedrock, your prompts and data are **not used to train the base foundation models** and stay within your control. You can use **VPC** networking and **PrivateLink** to keep traffic off the public internet — important for sensitive workloads.",
                  terms: [
                    { term: 'VPC', definition: 'Virtual Private Cloud; an isolated private network in AWS.' },
                    { term: 'PrivateLink', definition: 'Private connectivity to AWS services without traversing the public internet.' },
                  ],
                },
                {
                  id: 'd5c2s1-4',
                  kind: 'tip',
                  title: 'Exam Tip',
                  emoji: '💡',
                  body:
                    "To **find sensitive data** in storage → **Macie**. To **detect/redact PII in text** → **Comprehend** (or Bedrock Guardrails). To **keep traffic private** → **VPC + PrivateLink**.",
                },
                {
                  id: 'd5c2s1-5',
                  kind: 'example',
                  title: 'A Privacy-First Pipeline',
                  emoji: '🔗',
                  body:
                    "Before training, Macie scans S3 for sensitive data. Comprehend redacts PII from the text. Data is encrypted with KMS, access is IAM-scoped, and Bedrock runs over PrivateLink. Privacy is built into every step, not bolted on later.",
                },
                {
                  id: 'd5c2s1-7',
                  kind: 'analogy',
                  title: 'A Private Hallway',
                  emoji: '🚇',
                  body:
                    "Sending data over the public internet is like walking through a crowded street. **VPC + PrivateLink** is a private hallway between your app and AWS services — no public exposure, fewer eavesdroppers. For sensitive AI data, take the private hallway.",
                },
                {
                  id: 'd5c2s1-6',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Which service automatically discovers and classifies sensitive data such as PII stored in Amazon S3?',
                  options: [
                    { id: 'a', text: 'Amazon Macie', correct: true },
                    { id: 'b', text: 'Amazon Polly', correct: false },
                    { id: 'c', text: 'Amazon Lex', correct: false },
                    { id: 'd', text: 'Amazon Forecast', correct: false },
                  ],
                  explanation:
                    "Amazon Macie discovers, classifies, and protects sensitive data like PII in S3 using machine learning.",
                },
              ],
            },
            {
              id: 'd5c2s2',
              title: 'Compliance & Governance',
              summary: 'Audits, model governance, and proving you follow the rules.',
              cards: [
                {
                  id: 'd5c2s2-1',
                  kind: 'concept',
                  title: 'Compliance & Auditing',
                  emoji: '📋',
                  body:
                    "**Compliance** means meeting laws and standards (GDPR, HIPAA, SOC). AWS helps with **CloudTrail** (logs every API call for auditing), **CloudWatch** (monitoring), and **AWS Artifact** (on-demand compliance reports). These create the paper trail auditors want.",
                  terms: [
                    { term: 'Compliance', definition: 'Meeting legal, regulatory, and industry standards.' },
                    { term: 'AWS CloudTrail', definition: 'Logs and audits API activity across your AWS account.' },
                    { term: 'AWS Artifact', definition: 'On-demand access to AWS compliance reports and agreements.' },
                  ],
                },
                {
                  id: 'd5c2s2-2',
                  kind: 'analogy',
                  title: 'The Security Camera Log',
                  emoji: '📹',
                  body:
                    "CloudTrail is like a building's security-camera log: it records who entered which door and when. If something goes wrong, you replay the footage to see exactly what happened. Auditors love a complete, tamper-evident trail.",
                },
                {
                  id: 'd5c2s2-3',
                  kind: 'concept',
                  title: 'Model Governance',
                  emoji: '🏛️',
                  body:
                    "**Model governance** is the discipline of tracking, documenting, and controlling models throughout their life: versioning, approvals, **Model Cards**, and monitoring. **SageMaker Model Registry** catalogs model versions and approval status so nothing reaches production unchecked.",
                  terms: [
                    { term: 'Model governance', definition: 'Policies and tooling to track, document, and control models responsibly.' },
                    { term: 'Model Registry', definition: 'A catalog of model versions with metadata and approval status.' },
                  ],
                },
                {
                  id: 'd5c2s2-4',
                  kind: 'diagram',
                  title: 'Governance Toolkit',
                  emoji: '🧰',
                  diagram: {
                    type: 'compare',
                    columns: [
                      { title: 'Audit', emoji: '📹', items: ['CloudTrail', 'CloudWatch'] },
                      { title: 'Reports', emoji: '📄', items: ['AWS Artifact'] },
                      { title: 'Govern Models', emoji: '🏛️', items: ['Model Registry', 'Model Cards'] },
                    ],
                  },
                },
                {
                  id: 'd5c2s2-5',
                  kind: 'tip',
                  title: 'Exam Tip',
                  emoji: '💡',
                  body:
                    "Map the keywords: **'who did what, when' / API audit trail → CloudTrail**. **Need official compliance docs → AWS Artifact**. **Track model versions/approvals → SageMaker Model Registry**.",
                },
                {
                  id: 'd5c2s2-6',
                  kind: 'example',
                  title: 'Audit-Ready AI',
                  emoji: '✅',
                  body:
                    "A regulated insurer logs all model invocations with CloudTrail, stores approved model versions in the Model Registry, documents each with Model Cards, and pulls SOC reports from AWS Artifact for the auditor. Governance done right.",
                },
                {
                  id: 'd5c2s2-7',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'An auditor wants a record of every API call made to your AI services. Which service provides this?',
                  options: [
                    { id: 'a', text: 'AWS CloudTrail', correct: true },
                    { id: 'b', text: 'Amazon Polly', correct: false },
                    { id: 'c', text: 'Amazon Personalize', correct: false },
                    { id: 'd', text: 'Amazon Translate', correct: false },
                  ],
                  explanation:
                    "CloudTrail records and audits API activity across your AWS account, giving auditors a full trail of who did what and when.",
                },
                {
                  id: 'd5c2s2-8',
                  kind: 'quiz',
                  title: 'Quick Check',
                  emoji: '✅',
                  question: 'Which AWS resource provides on-demand compliance reports like SOC and ISO certifications?',
                  options: [
                    { id: 'a', text: 'AWS Artifact', correct: true },
                    { id: 'b', text: 'Amazon Kendra', correct: false },
                    { id: 'c', text: 'SageMaker Clarify', correct: false },
                    { id: 'd', text: 'Amazon Macie', correct: false },
                  ],
                  explanation:
                    "AWS Artifact is the self-service portal for AWS compliance reports and agreements like SOC, ISO, and PCI.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
