import type { PracticeExam } from '../types'

export const awsAiPractitionerExams: PracticeExam[] = [
  {
    id: 'exam-1',
    title: 'Practice Exam 1',
    description: "Full-length mixed practice across all AIF-C01 domains.",
    suggestedMinutes: 30,
    questions: [
      {
        id: 'e1q1',
        question:
          "A retail company wants to predict next month's sales using historical data where each record includes the actual sales figure. Which type of machine learning is this?",
        options: [
          { id: 'a', text: 'Supervised learning', correct: true },
          { id: 'b', text: 'Unsupervised learning', correct: false },
          { id: 'c', text: 'Reinforcement learning', correct: false },
          { id: 'd', text: 'Self-supervised pretraining', correct: false },
        ],
        explanation:
          "Because the training data contains labeled outcomes (the actual sales figures), the model learns a mapping from inputs to known outputs, which is supervised learning. Unsupervised learning has no labels, and reinforcement learning learns from reward signals.",
        topic: 'AI & ML Fundamentals',
      },
      {
        id: 'e1q2',
        question:
          "A data scientist notices a model achieves 99% accuracy on training data but only 62% on new, unseen data. What is the most likely problem?",
        options: [
          { id: 'a', text: 'Underfitting', correct: false },
          { id: 'b', text: 'Overfitting', correct: true },
          { id: 'c', text: 'Data leakage into the test set', correct: false },
          { id: 'd', text: 'Insufficient inference compute', correct: false },
        ],
        explanation:
          "A large gap between high training accuracy and low test accuracy is the classic signature of overfitting, where the model memorizes training data and fails to generalize. Underfitting would show low accuracy on both sets.",
        topic: 'AI & ML Fundamentals',
      },
      {
        id: 'e1q3',
        question:
          "In the context of large language models, what is a token?",
        options: [
          { id: 'a', text: 'A security credential used to authenticate API calls', correct: false },
          { id: 'b', text: 'A unit of text (such as a word or subword) that the model processes', correct: true },
          { id: 'c', text: 'A numerical vector representing document similarity', correct: false },
          { id: 'd', text: 'A single training epoch', correct: false },
        ],
        explanation:
          "In generative AI, a token is a chunk of text (a word, subword, or character) that the model reads and generates; model context limits and pricing are often measured in tokens. Numerical similarity vectors are embeddings, not tokens.",
        topic: 'Generative AI',
      },
      {
        id: 'e1q4',
        question:
          "A company needs to build a chatbot that answers questions using its own internal, frequently updated policy documents, without retraining the model. Which approach is most appropriate?",
        options: [
          { id: 'a', text: 'Fine-tune the foundation model on the documents every night', correct: false },
          { id: 'b', text: 'Retrieval Augmented Generation (RAG) with a knowledge base', correct: true },
          { id: 'c', text: 'Train a new model from scratch', correct: false },
          { id: 'd', text: 'Increase the model temperature to improve recall', correct: false },
        ],
        explanation:
          "RAG retrieves relevant, up-to-date documents at query time and supplies them as context, making it ideal for frequently changing internal knowledge without retraining. Fine-tuning is expensive and not suited to rapidly changing content, and temperature only affects randomness.",
        topic: 'Applications of Foundation Models',
      },
      {
        id: 'e1q5',
        question:
          "Which AWS service provides access to multiple foundation models from different providers through a single API for building generative AI applications?",
        options: [
          { id: 'a', text: 'Amazon SageMaker Ground Truth', correct: false },
          { id: 'b', text: 'Amazon Bedrock', correct: true },
          { id: 'c', text: 'Amazon Comprehend', correct: false },
          { id: 'd', text: 'Amazon Rekognition', correct: false },
        ],
        explanation:
          "Amazon Bedrock is a fully managed service that offers a choice of high-performing foundation models from Amazon and third parties through a single API. Comprehend and Rekognition are task-specific AI services, not FM access platforms.",
        topic: 'Generative AI',
      },
      {
        id: 'e1q6',
        question:
          "A developer wants to reduce the randomness and increase the determinism of a foundation model's text output. Which inference parameter should they lower?",
        options: [
          { id: 'a', text: 'Temperature', correct: true },
          { id: 'b', text: 'Maximum token length', correct: false },
          { id: 'c', text: 'Number of epochs', correct: false },
          { id: 'd', text: 'Batch size', correct: false },
        ],
        explanation:
          "Lowering the temperature makes the model more deterministic and focused on high-probability tokens, reducing randomness. Epochs and batch size are training parameters, and max token length controls output length, not randomness.",
        topic: 'Generative AI',
      },
      {
        id: 'e1q7',
        question:
          "A media company wants to automatically generate subtitles by converting audio from video files into text. Which AWS service is designed for this?",
        options: [
          { id: 'a', text: 'Amazon Polly', correct: false },
          { id: 'b', text: 'Amazon Transcribe', correct: true },
          { id: 'c', text: 'Amazon Translate', correct: false },
          { id: 'd', text: 'Amazon Textract', correct: false },
        ],
        explanation:
          "Amazon Transcribe performs automatic speech recognition, converting audio to text (ideal for subtitles). Polly does the reverse (text to speech), Translate handles language translation, and Textract extracts text from documents.",
        topic: 'Applications of Foundation Models',
      },
      {
        id: 'e1q8',
        question:
          "Which two AWS capabilities help enforce safety controls, such as blocking harmful content and filtering topics, on a generative AI application built with foundation models? (Choose TWO.)",
        options: [
          { id: 'a', text: 'Amazon Bedrock Guardrails', correct: true },
          { id: 'b', text: 'Amazon Macie', correct: false },
          { id: 'c', text: 'Content filters configured within the generative AI application', correct: true },
          { id: 'd', text: 'Amazon CloudFront', correct: false },
          { id: 'e', text: 'AWS Trusted Advisor', correct: false },
        ],
        explanation:
          "Amazon Bedrock Guardrails let you define denied topics and content filters to block harmful or undesirable content, and application-level content filters add another safety layer. Macie is for sensitive data discovery, CloudFront is a CDN, and Trusted Advisor gives account best-practice checks.",
        topic: 'Responsible AI',
      },
      {
        id: 'e1q9',
        question:
          "An ML team wants to detect potential bias in their training data and model predictions and to understand feature importance for explainability. Which SageMaker capability should they use?",
        options: [
          { id: 'a', text: 'SageMaker Clarify', correct: true },
          { id: 'b', text: 'SageMaker Feature Store', correct: false },
          { id: 'c', text: 'SageMaker Pipelines', correct: false },
          { id: 'd', text: 'SageMaker Model Monitor', correct: false },
        ],
        explanation:
          "SageMaker Clarify detects bias in data and models and provides explainability through feature attribution. Feature Store manages features, Pipelines orchestrates workflows, and Model Monitor tracks data/quality drift in production.",
        topic: 'Responsible AI',
      },
      {
        id: 'e1q10',
        question:
          "Under the AWS shared responsibility model, which party is responsible for securing customer data and configuring IAM access policies?",
        options: [
          { id: 'a', text: 'AWS is fully responsible', correct: false },
          { id: 'b', text: 'The customer', correct: true },
          { id: 'c', text: 'The foundation model provider', correct: false },
          { id: 'd', text: 'A third-party auditor', correct: false },
        ],
        explanation:
          "In the shared responsibility model, AWS secures the underlying infrastructure (security of the cloud) while the customer is responsible for their data, access management (IAM), and configuration (security in the cloud).",
        topic: 'Security & Governance',
      },
      {
        id: 'e1q11',
        question:
          "A user reports that a foundation model confidently produced a factually incorrect answer that it presented as true. What is this phenomenon called?",
        options: [
          { id: 'a', text: 'Overfitting', correct: false },
          { id: 'b', text: 'Hallucination', correct: true },
          { id: 'c', text: 'Data drift', correct: false },
          { id: 'd', text: 'Gradient descent', correct: false },
        ],
        explanation:
          "A hallucination is when a generative model produces plausible-sounding but false or fabricated information. Techniques like RAG and grounding help reduce hallucinations. Overfitting and data drift relate to model training and monitoring, not fabricated outputs.",
        topic: 'Generative AI',
      },
      {
        id: 'e1q12',
        question:
          "A business wants to build a virtual agent that can hold conversations, understand intents, and perform actions such as booking appointments. Which AWS service is purpose-built for conversational interfaces?",
        options: [
          { id: 'a', text: 'Amazon Lex', correct: true },
          { id: 'b', text: 'Amazon Kendra', correct: false },
          { id: 'c', text: 'Amazon Personalize', correct: false },
          { id: 'd', text: 'Amazon Polly', correct: false },
        ],
        explanation:
          "Amazon Lex builds conversational chatbots and voice bots using intent recognition and slot filling. Kendra is an enterprise search service, Personalize provides recommendations, and Polly generates speech.",
        topic: 'Applications of Foundation Models',
      },
      {
        id: 'e1q13',
        question:
          "Which technique adjusts the actual weights of a pre-trained foundation model so it performs better on a specialized, domain-specific task?",
        options: [
          { id: 'a', text: 'Prompt engineering', correct: false },
          { id: 'b', text: 'Fine-tuning', correct: true },
          { id: 'c', text: 'Retrieval Augmented Generation', correct: false },
          { id: 'd', text: 'Temperature tuning', correct: false },
        ],
        explanation:
          "Fine-tuning continues training a pre-trained model on domain-specific labeled data, updating its weights to specialize it. Prompt engineering and RAG influence outputs without changing weights, and temperature only affects randomness.",
        topic: 'Applications of Foundation Models',
      },
      {
        id: 'e1q14',
        question:
          "A developer wants to extract text, tables, and form data from scanned invoices and PDF documents. Which AWS service is most appropriate?",
        options: [
          { id: 'a', text: 'Amazon Textract', correct: true },
          { id: 'b', text: 'Amazon Comprehend', correct: false },
          { id: 'c', text: 'Amazon Transcribe', correct: false },
          { id: 'd', text: 'Amazon Translate', correct: false },
        ],
        explanation:
          "Amazon Textract uses OCR and ML to extract text, tables, and form fields from scanned documents. Comprehend analyzes text for entities and sentiment but does not perform document OCR extraction.",
        topic: 'Applications of Foundation Models',
      },
      {
        id: 'e1q15',
        question:
          "Which two of the following are common evaluation metrics for a classification model? (Choose TWO.)",
        options: [
          { id: 'a', text: 'Precision', correct: true },
          { id: 'b', text: 'Recall', correct: true },
          { id: 'c', text: 'Mean squared error', correct: false },
          { id: 'd', text: 'Learning rate', correct: false },
          { id: 'e', text: 'Epoch count', correct: false },
        ],
        explanation:
          "Precision and recall are standard classification metrics measuring correctness and completeness of positive predictions. Mean squared error is a regression metric, while learning rate and epoch count are training hyperparameters, not evaluation metrics.",
        topic: 'AI & ML Fundamentals',
      },
      {
        id: 'e1q16',
        question:
          "An organization wants an AI-powered assistant integrated with their business applications and AWS environment to answer employee questions and summarize documents. Which service should they choose?",
        options: [
          { id: 'a', text: 'Amazon Q', correct: true },
          { id: 'b', text: 'Amazon Rekognition', correct: false },
          { id: 'c', text: 'Amazon Forecast', correct: false },
          { id: 'd', text: 'Amazon Polly', correct: false },
        ],
        explanation:
          "Amazon Q is a generative AI-powered assistant designed to help with business tasks, answering questions and summarizing content across enterprise data and AWS. Rekognition handles images/video and Forecast handles time-series prediction.",
        topic: 'Applications of Foundation Models',
      },
      {
        id: 'e1q17',
        question:
          "What is the primary purpose of embeddings in generative AI and search systems?",
        options: [
          { id: 'a', text: 'To encrypt data at rest', correct: false },
          { id: 'b', text: 'To represent text or other data as numerical vectors that capture semantic meaning', correct: true },
          { id: 'c', text: 'To limit the number of output tokens', correct: false },
          { id: 'd', text: 'To authenticate users to a model endpoint', correct: false },
        ],
        explanation:
          "Embeddings convert text or other data into dense numerical vectors so that semantically similar items are close together in vector space, enabling similarity search and RAG retrieval. They are not related to encryption or authentication.",
        topic: 'Generative AI',
      },
      {
        id: 'e1q18',
        question:
          "A company must ensure that data sent to and processed by a foundation model is encrypted and that customer prompts are not used to train the base model. Which practices support this? (Choose TWO.)",
        options: [
          { id: 'a', text: 'Use encryption in transit and at rest with AWS KMS keys', correct: true },
          { id: 'b', text: 'Publicly share the model prompts to improve transparency', correct: false },
          { id: 'c', text: 'Review the service data-usage and privacy terms before deployment', correct: true },
          { id: 'd', text: 'Disable IAM and use root credentials for simplicity', correct: false },
          { id: 'e', text: 'Store all prompts in an unencrypted public S3 bucket', correct: false },
        ],
        explanation:
          "Encrypting data in transit and at rest with KMS and reviewing the service data-usage/privacy terms protect customer data and privacy. Sharing prompts publicly, disabling IAM, or using unencrypted public storage would all weaken security.",
        topic: 'Security & Governance',
      },
      {
        id: 'e1q19',
        question:
          "Amazon provides documents describing the intended use cases, limitations, and responsible-use guidance for its AI services. What are these documents called?",
        options: [
          { id: 'a', text: 'AWS AI Service Cards', correct: true },
          { id: 'b', text: 'AWS Trusted Advisor reports', correct: false },
          { id: 'c', text: 'AWS Config rules', correct: false },
          { id: 'd', text: 'AWS Well-Architected pillars', correct: false },
        ],
        explanation:
          "AWS AI Service Cards provide transparency about intended use cases, limitations, and responsible AI considerations for specific AI services. They support responsible AI practices, unlike Config rules or Trusted Advisor, which serve other purposes.",
        topic: 'Responsible AI',
      },
      {
        id: 'e1q20',
        question:
          "A team uses SageMaker JumpStart during a project. What is the main benefit JumpStart provides?",
        options: [
          { id: 'a', text: 'It provides pre-trained models and prebuilt solution templates that can be quickly deployed or fine-tuned', correct: true },
          { id: 'b', text: 'It automatically encrypts all S3 buckets in the account', correct: false },
          { id: 'c', text: 'It is a managed relational database for ML metadata', correct: false },
          { id: 'd', text: 'It replaces IAM for model access control', correct: false },
        ],
        explanation:
          "SageMaker JumpStart offers a hub of pre-trained models, foundation models, and prebuilt solution templates that accelerate development through quick deployment and fine-tuning. It is not a security, database, or access-control service.",
        topic: 'AI & ML Fundamentals',
      },
    ],
  },
  {
    id: 'exam-2',
    title: 'Practice Exam 2',
    description: "A second set of fresh questions — no repeats from Exam 1.",
    suggestedMinutes: 30,
    questions: [
      {
        id: 'e2q1',
        question:
          "A company wants to group its customers into segments based on purchasing behavior, but it has no predefined labels for the groups. Which type of machine learning is best suited?",
        options: [
          { id: 'a', text: 'Supervised learning', correct: false },
          { id: 'b', text: 'Unsupervised learning', correct: true },
          { id: 'c', text: 'Reinforcement learning', correct: false },
          { id: 'd', text: 'Transfer learning', correct: false },
        ],
        explanation:
          "Grouping unlabeled data into segments is clustering, a form of unsupervised learning that finds patterns without predefined labels. Supervised learning requires labels, and reinforcement learning learns from rewards.",
        topic: 'AI & ML Fundamentals',
      },
      {
        id: 'e2q2',
        question:
          "In machine learning, what distinguishes the training phase from the inference phase?",
        options: [
          { id: 'a', text: 'Training uses the model to make predictions; inference builds the model', correct: false },
          { id: 'b', text: 'Training builds the model by learning from data; inference uses the trained model to make predictions', correct: true },
          { id: 'c', text: 'They are two names for the same process', correct: false },
          { id: 'd', text: 'Inference always requires labeled data, while training does not', correct: false },
        ],
        explanation:
          "During training the model learns patterns and adjusts parameters from data; during inference the trained model applies what it learned to generate predictions on new inputs. Inference does not require labels.",
        topic: 'AI & ML Fundamentals',
      },
      {
        id: 'e2q3',
        question:
          "A game-playing AI improves its strategy over time by receiving rewards for winning moves and penalties for losing ones. Which learning paradigm is this?",
        options: [
          { id: 'a', text: 'Reinforcement learning', correct: true },
          { id: 'b', text: 'Supervised learning', correct: false },
          { id: 'c', text: 'Unsupervised learning', correct: false },
          { id: 'd', text: 'Semi-supervised learning', correct: false },
        ],
        explanation:
          "Reinforcement learning trains an agent to take actions in an environment to maximize cumulative reward, learning from rewards and penalties. This differs from supervised learning, which uses labeled examples.",
        topic: 'AI & ML Fundamentals',
      },
      {
        id: 'e2q4',
        question:
          "A developer wants to guide a foundation model to produce a specific output format by providing a few examples within the prompt. What is this technique called?",
        options: [
          { id: 'a', text: 'Zero-shot prompting', correct: false },
          { id: 'b', text: 'Few-shot prompting', correct: true },
          { id: 'c', text: 'Fine-tuning', correct: false },
          { id: 'd', text: 'Continued pretraining', correct: false },
        ],
        explanation:
          "Few-shot prompting supplies a few examples within the prompt to steer the model's behavior and output format without changing its weights. Zero-shot gives no examples, and fine-tuning changes weights through training.",
        topic: 'Generative AI',
      },
      {
        id: 'e2q5',
        question:
          "An application team needs to add a natural-language enterprise search feature that lets employees find answers across internal wikis, PDFs, and SharePoint. Which AWS service is designed for this?",
        options: [
          { id: 'a', text: 'Amazon Kendra', correct: true },
          { id: 'b', text: 'Amazon Lex', correct: false },
          { id: 'c', text: 'Amazon Comprehend', correct: false },
          { id: 'd', text: 'Amazon Translate', correct: false },
        ],
        explanation:
          "Amazon Kendra is an intelligent enterprise search service that uses ML to return precise answers from many content sources using natural-language queries. Lex builds chatbots and Comprehend analyzes text.",
        topic: 'Applications of Foundation Models',
      },
      {
        id: 'e2q6',
        question:
          "A streaming service wants to recommend movies to each user based on their viewing history and similar users' behavior. Which AWS service is purpose-built for this?",
        options: [
          { id: 'a', text: 'Amazon Personalize', correct: true },
          { id: 'b', text: 'Amazon Rekognition', correct: false },
          { id: 'c', text: 'Amazon Textract', correct: false },
          { id: 'd', text: 'Amazon Polly', correct: false },
        ],
        explanation:
          "Amazon Personalize provides real-time personalized recommendations based on user behavior, using the same technology pioneered by Amazon.com. The other services handle vision, document extraction, and speech synthesis.",
        topic: 'Applications of Foundation Models',
      },
      {
        id: 'e2q7',
        question:
          "A company needs to analyze thousands of customer reviews to detect sentiment and extract key entities such as product names. Which AWS service should they use?",
        options: [
          { id: 'a', text: 'Amazon Comprehend', correct: true },
          { id: 'b', text: 'Amazon Transcribe', correct: false },
          { id: 'c', text: 'Amazon Rekognition', correct: false },
          { id: 'd', text: 'Amazon Polly', correct: false },
        ],
        explanation:
          "Amazon Comprehend is a natural-language processing service that detects sentiment, entities, key phrases, and language in text. Transcribe handles speech-to-text and Rekognition handles images and video.",
        topic: 'Applications of Foundation Models',
      },
      {
        id: 'e2q8',
        question:
          "In Amazon Bedrock, which feature allows a foundation model to securely retrieve and use an organization's proprietary data to ground its responses?",
        options: [
          { id: 'a', text: 'Knowledge Bases for Amazon Bedrock', correct: true },
          { id: 'b', text: 'Amazon Bedrock Guardrails', correct: false },
          { id: 'c', text: 'Amazon Bedrock model evaluation', correct: false },
          { id: 'd', text: 'Amazon Bedrock provisioned throughput', correct: false },
        ],
        explanation:
          "Knowledge Bases for Amazon Bedrock implement managed RAG, letting a model retrieve and use proprietary data to ground responses. Guardrails enforce safety policies, and provisioned throughput reserves capacity.",
        topic: 'Generative AI',
      },
      {
        id: 'e2q9',
        question:
          "A workflow requires a foundation model to reason through a multi-step task and call external tools or APIs to complete it. Which Amazon Bedrock capability enables this?",
        options: [
          { id: 'a', text: 'Agents for Amazon Bedrock', correct: true },
          { id: 'b', text: 'Amazon Bedrock playground', correct: false },
          { id: 'c', text: 'Amazon Bedrock watermarking', correct: false },
          { id: 'd', text: 'Amazon Bedrock batch inference', correct: false },
        ],
        explanation:
          "Agents for Amazon Bedrock let a model break down tasks, orchestrate multiple steps, and call APIs or functions to complete complex actions. The playground is for interactive testing, not orchestration.",
        topic: 'Applications of Foundation Models',
      },
      {
        id: 'e2q10',
        question:
          "Which two practices help reduce bias and promote fairness when developing a machine learning model? (Choose TWO.)",
        options: [
          { id: 'a', text: 'Use diverse and representative training data', correct: true },
          { id: 'b', text: 'Analyze model outcomes across demographic groups for disparate impact', correct: true },
          { id: 'c', text: 'Maximize model size regardless of data quality', correct: false },
          { id: 'd', text: 'Remove all documentation to simplify the model', correct: false },
          { id: 'e', text: 'Train only on data from a single narrow population', correct: false },
        ],
        explanation:
          "Using representative training data and checking outcomes across groups directly address fairness and bias. Training on a narrow population increases bias, and removing documentation harms transparency.",
        topic: 'Responsible AI',
      },
      {
        id: 'e2q11',
        question:
          "What does explainability refer to in the context of responsible AI?",
        options: [
          { id: 'a', text: 'The ability to understand and interpret how a model arrives at its decisions', correct: true },
          { id: 'b', text: 'The speed at which a model returns predictions', correct: false },
          { id: 'c', text: 'The total cost of running inference', correct: false },
          { id: 'd', text: 'The encryption strength protecting model data', correct: false },
        ],
        explanation:
          "Explainability is the degree to which humans can understand and interpret the reasoning behind a model's decisions, which is important for trust, accountability, and regulatory compliance. It is unrelated to latency, cost, or encryption.",
        topic: 'Responsible AI',
      },
      {
        id: 'e2q12',
        question:
          "A financial firm must control which employees can invoke specific Amazon Bedrock models and which data they can access. Which AWS service provides this fine-grained access control?",
        options: [
          { id: 'a', text: 'AWS Identity and Access Management (IAM)', correct: true },
          { id: 'b', text: 'Amazon CloudWatch', correct: false },
          { id: 'c', text: 'AWS Cost Explorer', correct: false },
          { id: 'd', text: 'Amazon SNS', correct: false },
        ],
        explanation:
          "IAM provides fine-grained, policy-based access control over which principals can call which AWS resources and actions, including Bedrock models. CloudWatch is for monitoring and Cost Explorer for cost analysis.",
        topic: 'Security & Governance',
      },
      {
        id: 'e2q13',
        question:
          "A company wants to detect objects, faces, and inappropriate content in user-uploaded images and videos. Which AWS service should they use?",
        options: [
          { id: 'a', text: 'Amazon Rekognition', correct: true },
          { id: 'b', text: 'Amazon Textract', correct: false },
          { id: 'c', text: 'Amazon Comprehend', correct: false },
          { id: 'd', text: 'Amazon Kendra', correct: false },
        ],
        explanation:
          "Amazon Rekognition provides image and video analysis, including object detection, facial analysis, and content moderation. Textract extracts document text and Comprehend analyzes natural-language text.",
        topic: 'Applications of Foundation Models',
      },
      {
        id: 'e2q14',
        question:
          "When should a company prefer prompt engineering over fine-tuning a foundation model?",
        options: [
          { id: 'a', text: 'When they want to guide model behavior quickly and cheaply without changing model weights', correct: true },
          { id: 'b', text: 'When they must permanently teach the model a large amount of new proprietary knowledge', correct: false },
          { id: 'c', text: 'When they need to retrain the base model on labeled data', correct: false },
          { id: 'd', text: 'When they want to reduce the model to a smaller size', correct: false },
        ],
        explanation:
          "Prompt engineering is the fastest, lowest-cost way to steer model behavior because it requires no training and no weight changes. Fine-tuning is preferable when the model must deeply internalize large amounts of specialized knowledge.",
        topic: 'Applications of Foundation Models',
      },
      {
        id: 'e2q15',
        question:
          "A team wants to convert written text into lifelike spoken audio for an accessibility feature. Which AWS service should they use?",
        options: [
          { id: 'a', text: 'Amazon Polly', correct: true },
          { id: 'b', text: 'Amazon Transcribe', correct: false },
          { id: 'c', text: 'Amazon Translate', correct: false },
          { id: 'd', text: 'Amazon Lex', correct: false },
        ],
        explanation:
          "Amazon Polly is a text-to-speech service that turns text into natural-sounding audio. Transcribe does speech-to-text, Translate handles language translation, and Lex builds conversational bots.",
        topic: 'Applications of Foundation Models',
      },
      {
        id: 'e2q16',
        question:
          "A global company needs to translate its website and support content into dozens of languages automatically. Which AWS service is most appropriate?",
        options: [
          { id: 'a', text: 'Amazon Translate', correct: true },
          { id: 'b', text: 'Amazon Polly', correct: false },
          { id: 'c', text: 'Amazon Comprehend', correct: false },
          { id: 'd', text: 'Amazon Textract', correct: false },
        ],
        explanation:
          "Amazon Translate is a neural machine translation service that translates text between supported languages. Polly generates speech, Comprehend analyzes text, and Textract extracts document content.",
        topic: 'Applications of Foundation Models',
      },
      {
        id: 'e2q17',
        question:
          "Which two statements about Retrieval Augmented Generation (RAG) compared with fine-tuning are correct? (Choose TWO.)",
        options: [
          { id: 'a', text: 'RAG can incorporate up-to-date information without retraining the model', correct: true },
          { id: 'b', text: 'RAG retrieves relevant context at query time to ground responses', correct: true },
          { id: 'c', text: 'RAG permanently modifies the foundation model weights', correct: false },
          { id: 'd', text: 'RAG always requires labeled training datasets', correct: false },
          { id: 'e', text: 'RAG eliminates the need for any foundation model', correct: false },
        ],
        explanation:
          "RAG adds fresh, relevant context at query time to ground responses without changing model weights or retraining. It does not modify weights, does not require labeled datasets, and still relies on a foundation model to generate answers.",
        topic: 'Generative AI',
      },
      {
        id: 'e2q18',
        question:
          "An organization wants to ensure that sensitive personal data is discovered and protected within its Amazon S3 buckets used for ML training. Which AWS service helps identify such sensitive data?",
        options: [
          { id: 'a', text: 'Amazon Macie', correct: true },
          { id: 'b', text: 'Amazon Bedrock', correct: false },
          { id: 'c', text: 'Amazon Polly', correct: false },
          { id: 'd', text: 'Amazon Personalize', correct: false },
        ],
        explanation:
          "Amazon Macie uses ML to discover, classify, and protect sensitive data such as personally identifiable information in S3. Bedrock, Polly, and Personalize do not perform sensitive-data discovery.",
        topic: 'Security & Governance',
      },
      {
        id: 'e2q19',
        question:
          "A model that predicts a continuous numeric value, such as house price, is an example of which task, and which metric is appropriate to evaluate it?",
        options: [
          { id: 'a', text: 'Classification, evaluated with accuracy', correct: false },
          { id: 'b', text: 'Regression, evaluated with mean squared error', correct: true },
          { id: 'c', text: 'Clustering, evaluated with silhouette score', correct: false },
          { id: 'd', text: 'Classification, evaluated with F1 score', correct: false },
        ],
        explanation:
          "Predicting a continuous value is a regression task, and mean squared error is a standard regression metric. Accuracy and F1 apply to classification, while silhouette score applies to clustering.",
        topic: 'AI & ML Fundamentals',
      },
      {
        id: 'e2q20',
        question:
          "A company is concerned that an overly high temperature setting is making its customer-facing assistant give inconsistent answers. What is the most appropriate responsible-AI-aligned action to increase consistency while keeping outputs grounded?",
        options: [
          { id: 'a', text: 'Lower the temperature and ground responses using a knowledge base with guardrails', correct: true },
          { id: 'b', text: 'Increase the temperature to add more creativity', correct: false },
          { id: 'c', text: 'Remove all content filters to allow any response', correct: false },
          { id: 'd', text: 'Disable logging so inconsistencies are not recorded', correct: false },
        ],
        explanation:
          "Lowering temperature reduces randomness for more consistent answers, and grounding with a knowledge base plus guardrails keeps responses accurate and safe. Raising temperature, removing filters, or disabling logging would worsen reliability and governance.",
        topic: 'Responsible AI',
      },
    ],
  },
]
