import type { PracticeExam } from '../types'

export const awsDeveloperAssociateExams: PracticeExam[] = [
  {
    id: 'exam-1',
    title: 'Practice Exam 1',
    description: "Full-length mixed practice across all DVA-C02 domains.",
    suggestedMinutes: 35,
    questions: [
      {
        id: 'e1q1',
        question:
          "A developer wants clients to invoke a stable Lambda endpoint while the team ships new code without changing the caller configuration. Which approach lets the team point traffic to new function versions without callers updating the ARN?",
        options: [
          { id: 'a', text: "Invoke the $LATEST version directly", correct: false },
          { id: 'b', text: "Publish numbered versions and have callers invoke a Lambda alias that points to a version", correct: true },
          { id: 'c', text: "Use environment variables to select the version at runtime", correct: false },
          { id: 'd', text: "Deploy each change as a brand-new function", correct: false },
        ],
        explanation:
          "A Lambda alias is a stable pointer (with its own ARN) to a specific published version. Callers invoke the alias, and the team just repoints the alias to a new version—no caller changes needed. Aliases also support weighted routing for canary deployments.",
        topic: 'Development',
      },
      {
        id: 'e1q2',
        question:
          "A DynamoDB table stores orders with a partition key of CustomerId. Queries filtering by OrderStatus are slow and scan the whole table. What is the most efficient fix?",
        options: [
          { id: 'a', text: "Increase the table read capacity units", correct: false },
          { id: 'b', text: "Create a Global Secondary Index with OrderStatus as the partition key", correct: true },
          { id: 'c', text: "Enable DynamoDB Streams on the table", correct: false },
          { id: 'd', text: "Switch the table to a Local Secondary Index on OrderStatus", correct: false },
        ],
        explanation:
          "A GSI lets you query on an alternate key (OrderStatus) without scanning. An LSI must share the base table's partition key and can only be created at table creation, so it cannot introduce a new partition key. Increasing RCUs does not avoid the scan.",
        topic: 'Development',
      },
      {
        id: 'e1q3',
        question:
          "Messages in a standard SQS queue are occasionally processed twice. The consumer takes about 40 seconds to process each message but the visibility timeout is 30 seconds. What should the developer do?",
        options: [
          { id: 'a', text: "Switch to a FIFO queue to guarantee exactly-once processing", correct: false },
          { id: 'b', text: "Increase the visibility timeout to be longer than the processing time", correct: true },
          { id: 'c', text: "Reduce the message retention period", correct: false },
          { id: 'd', text: "Enable long polling on the queue", correct: false },
        ],
        explanation:
          "If processing exceeds the visibility timeout, the message becomes visible again and another consumer picks it up, causing duplicate processing. Setting the visibility timeout above the expected processing time (or calling ChangeMessageVisibility) prevents this.",
        topic: 'Troubleshooting & Optimization',
      },
      {
        id: 'e1q4',
        question:
          "A developer needs to store a database password so that a Lambda function can retrieve it securely, with automatic rotation managed by AWS. Which service is the best fit?",
        options: [
          { id: 'a', text: "S3 with server-side encryption", correct: false },
          { id: 'b', text: "AWS Secrets Manager", correct: true },
          { id: 'c', text: "SSM Parameter Store standard string parameters", correct: false },
          { id: 'd', text: "Lambda environment variables", correct: false },
        ],
        explanation:
          "Secrets Manager natively supports built-in automatic rotation for supported databases via Lambda. Parameter Store SecureString can store secrets but does not provide built-in managed rotation, and env vars are not designed for rotating secrets.",
        topic: 'Security',
      },
      {
        id: 'e1q5',
        question:
          "A team uses CodeDeploy to release a Lambda function and wants 10% of traffic shifted to the new version for 5 minutes, then the remaining 90%. Which deployment configuration matches this?",
        options: [
          { id: 'a', text: "Linear10PercentEvery1Minute", correct: false },
          { id: 'b', text: "Canary10Percent5Minutes", correct: true },
          { id: 'c', text: "AllAtOnce", correct: false },
          { id: 'd', text: "Blue/green in-place", correct: false },
        ],
        explanation:
          "A canary shifts a small percentage first (10%), waits the specified interval (5 minutes), then shifts the rest at once—exactly Canary10Percent5Minutes. Linear shifts in equal increments; AllAtOnce shifts everything immediately.",
        topic: 'Deployment',
      },
      {
        id: 'e1q6',
        question:
          "A developer wants distributed tracing to see latency across API Gateway, Lambda, and DynamoDB calls in a serverless app. Which service and step are required? (Choose TWO.)",
        options: [
          { id: 'a', text: "Enable AWS X-Ray active tracing on the Lambda function and API Gateway stage", correct: true },
          { id: 'b', text: "Instrument the code with the X-Ray SDK to capture subsegments for downstream calls", correct: true },
          { id: 'c', text: "Enable CloudTrail data events for DynamoDB", correct: false },
          { id: 'd', text: "Publish custom metrics to CloudWatch for each call", correct: false },
          { id: 'e', text: "Turn on VPC Flow Logs", correct: false },
        ],
        explanation:
          "X-Ray provides end-to-end tracing. You enable active tracing on Lambda and the API Gateway stage, and use the X-Ray SDK to instrument the code so downstream AWS SDK calls (like DynamoDB) appear as subsegments. CloudTrail, custom metrics, and Flow Logs do not provide request-level traces.",
        topic: 'Troubleshooting & Optimization',
      },
      {
        id: 'e1q7',
        question:
          "An application must guarantee that messages are processed in the exact order they were sent and that duplicates are not introduced by the queue. Which SQS configuration should be used?",
        options: [
          { id: 'a', text: "Standard queue with long polling", correct: false },
          { id: 'b', text: "FIFO queue with a MessageGroupId", correct: true },
          { id: 'c', text: "Standard queue with a dead-letter queue", correct: false },
          { id: 'd', text: "FIFO queue without content-based deduplication disabled entirely", correct: false },
        ],
        explanation:
          "FIFO queues preserve strict ordering within a MessageGroupId and provide exactly-once processing via deduplication. Standard queues offer only best-effort ordering and at-least-once delivery.",
        topic: 'Development',
      },
      {
        id: 'e1q8',
        question:
          "A Lambda function reads from a DynamoDB stream. During bursts, the developer wants to control how many concurrent executions the stream triggers and process records in order per shard. Which statement is correct?",
        options: [
          { id: 'a', text: "DynamoDB Streams invoke Lambda synchronously per record", correct: false },
          { id: 'b', text: "Records within a shard are processed in order by a single concurrent invocation per shard (adjustable with parallelization factor)", correct: true },
          { id: 'c', text: "Order across the entire table is always guaranteed regardless of shards", correct: false },
          { id: 'd', text: "You must poll the stream manually with GetRecords", correct: false },
        ],
        explanation:
          "For stream-based event sources, Lambda processes records in order per shard. The parallelization factor lets you fan out to multiple concurrent invocations per shard while still maintaining order per partition key. Ordering is per shard, not table-wide.",
        topic: 'Development',
      },
      {
        id: 'e1q9',
        question:
          "A developer wants to reuse a common set of libraries across many Lambda functions without bundling them into every deployment package. What should they use?",
        options: [
          { id: 'a', text: "Lambda layers", correct: true },
          { id: 'b', text: "Environment variables", correct: false },
          { id: 'c', text: "A shared S3 bucket referenced at runtime with manual download", correct: false },
          { id: 'd', text: "Provisioned concurrency", correct: false },
        ],
        explanation:
          "Lambda layers package shared libraries/dependencies that can be attached to multiple functions, reducing deployment package size and centralizing common code.",
        topic: 'Development',
      },
      {
        id: 'e1q10',
        question:
          "A mobile app needs to let users sign in with email/password and social identity providers, and receive JWT tokens for authentication. Which Cognito feature handles user sign-up, sign-in, and token issuance?",
        options: [
          { id: 'a', text: "Cognito identity pool (federated identities)", correct: false },
          { id: 'b', text: "Cognito user pool", correct: true },
          { id: 'c', text: "IAM users", correct: false },
          { id: 'd', text: "STS AssumeRoleWithWebIdentity only", correct: false },
        ],
        explanation:
          "A Cognito user pool is the user directory that handles sign-up/sign-in and issues JWTs (ID/access tokens). Identity pools exchange those tokens for temporary AWS credentials to access AWS resources. The question is about authentication and tokens, so the user pool is correct.",
        topic: 'Security',
      },
      {
        id: 'e1q11',
        question:
          "A developer receives ProvisionedThroughputExceededException from DynamoDB during traffic spikes and wants the SDK to retry gracefully without overwhelming the table. What is the recommended client-side strategy?",
        options: [
          { id: 'a', text: "Retry immediately in a tight loop", correct: false },
          { id: 'b', text: "Exponential backoff with jitter", correct: false },
          { id: 'c', text: "Exponential backoff with jitter (SDK default retry behavior)", correct: true },
          { id: 'd', text: "Disable retries and fail fast", correct: false },
        ],
        explanation:
          "Throttling should be handled with exponential backoff plus jitter, which spreads retries over time and reduces contention. This is the AWS SDK default retry behavior for throttling errors.",
        topic: 'Troubleshooting & Optimization',
      },
      {
        id: 'e1q12',
        question:
          "A CloudFormation template must pass an S3 bucket name created in one resource to another resource in the same template. Which intrinsic function references that value?",
        options: [
          { id: 'a', text: "!Ref or !GetAtt to reference the resource attribute", correct: true },
          { id: 'b', text: "!ImportValue from a different stack", correct: false },
          { id: 'c', text: "!Base64 encoding of the name", correct: false },
          { id: 'd', text: "Mappings section lookups", correct: false },
        ],
        explanation:
          "Within the same template, !Ref returns a resource's identifier (often the name/ID) and !GetAtt returns specific attributes. ImportValue is for cross-stack references via Exports, not same-template references.",
        topic: 'Deployment',
      },
      {
        id: 'e1q13',
        question:
          "A read-heavy DynamoDB application repeatedly reads the same hot items and needs microsecond latency. Which fully managed caching option integrates natively with DynamoDB?",
        options: [
          { id: 'a', text: "ElastiCache for Redis in front of DynamoDB", correct: false },
          { id: 'b', text: "DynamoDB Accelerator (DAX)", correct: true },
          { id: 'c', text: "CloudFront", correct: false },
          { id: 'd', text: "S3 Transfer Acceleration", correct: false },
        ],
        explanation:
          "DAX is an in-memory, write-through cache purpose-built for DynamoDB that delivers microsecond read latency and requires minimal code changes. ElastiCache works but is not DynamoDB-native and requires more application logic.",
        topic: 'Troubleshooting & Optimization',
      },
      {
        id: 'e1q14',
        question:
          "A developer needs to orchestrate a multi-step workflow with retries, error catching, and conditional branching across several Lambda functions, with visual state tracking. Which service is designed for this?",
        options: [
          { id: 'a', text: "Amazon SQS", correct: false },
          { id: 'b', text: "AWS Step Functions", correct: true },
          { id: 'c', text: "Amazon SNS", correct: false },
          { id: 'd', text: "Amazon EventBridge", correct: false },
        ],
        explanation:
          "Step Functions coordinates workflows as state machines with built-in retry, catch, choice (branching), and parallel states, plus visual execution history. SQS/SNS/EventBridge are messaging/eventing, not full orchestration.",
        topic: 'Development',
      },
      {
        id: 'e1q15',
        question:
          "To let a Lambda function read from an S3 bucket, which is the correct and most secure way to grant permissions?",
        options: [
          { id: 'a', text: "Store IAM access keys in Lambda environment variables", correct: false },
          { id: 'b', text: "Attach an IAM execution role with an s3:GetObject policy to the function", correct: true },
          { id: 'c', text: "Make the S3 bucket public", correct: false },
          { id: 'd', text: "Embed root credentials in the code", correct: false },
        ],
        explanation:
          "Lambda uses an execution role to obtain temporary credentials. Grant least-privilege permissions (e.g., s3:GetObject on the specific bucket) via that role. Hard-coding keys or making buckets public are insecure anti-patterns.",
        topic: 'Security',
      },
      {
        id: 'e1q16',
        question:
          "An EventBridge rule must route only order events where the status equals 'FAILED' to a target. How is this filtering achieved?",
        options: [
          { id: 'a', text: "By configuring an SQS redrive policy", correct: false },
          { id: 'b', text: "By defining an event pattern that matches the status field", correct: true },
          { id: 'c', text: "By setting a Lambda reserved concurrency", correct: false },
          { id: 'd', text: "By enabling API Gateway request validation", correct: false },
        ],
        explanation:
          "EventBridge rules use event patterns (JSON) to match specific fields, such as detail.status equal to FAILED. Only matching events are delivered to the targets, avoiding unnecessary invocations.",
        topic: 'Development',
      },
      {
        id: 'e1q17',
        question:
          "A developer needs API Gateway to cache responses to reduce backend load for a frequently requested GET endpoint. Which two actions are required? (Choose TWO.)",
        options: [
          { id: 'a', text: "Enable caching on the API stage and set a TTL", correct: true },
          { id: 'b', text: "Configure cache key parameters from method request settings", correct: true },
          { id: 'c', text: "Attach a DynamoDB table to the method", correct: false },
          { id: 'd', text: "Enable Lambda provisioned concurrency", correct: false },
          { id: 'e', text: "Switch the API to a WebSocket API", correct: false },
        ],
        explanation:
          "API Gateway stage-level caching stores endpoint responses for a configurable TTL. You can designate method request parameters as cache keys so responses vary appropriately. This offloads repeated calls from the backend.",
        topic: 'Troubleshooting & Optimization',
      },
      {
        id: 'e1q18',
        question:
          "A developer needs to encrypt large objects client-side using a data key while keeping the master key in AWS. Which KMS technique does this describe?",
        options: [
          { id: 'a', text: "Envelope encryption with a KMS-generated data key", correct: true },
          { id: 'b', text: "Symmetric encryption using the CMK directly on the data", correct: false },
          { id: 'c', text: "Signing the data with an asymmetric key", correct: false },
          { id: 'd', text: "Hashing the data with SHA-256", correct: false },
        ],
        explanation:
          "Envelope encryption uses GenerateDataKey to get a plaintext data key (to encrypt data locally) and an encrypted copy of that data key (stored alongside the data). KMS never sees the data itself, and the CMK is only used to protect the data key. This is efficient for large payloads.",
        topic: 'Security',
      },
      {
        id: 'e1q19',
        question:
          "A CodePipeline uses CodeBuild. The build must run unit tests and produce a deployable artifact. Where are the build commands and artifact settings defined?",
        options: [
          { id: 'a', text: "In an appspec.yml file", correct: false },
          { id: 'b', text: "In a buildspec.yml file", correct: true },
          { id: 'c', text: "In the CloudFormation Outputs section", correct: false },
          { id: 'd', text: "In a Dockerfile only", correct: false },
        ],
        explanation:
          "CodeBuild reads buildspec.yml, which defines phases (install, pre_build, build, post_build) and the artifacts to output. appspec.yml is used by CodeDeploy to define how to deploy.",
        topic: 'Deployment',
      },
      {
        id: 'e1q20',
        question:
          "A Lambda function must have a guaranteed number of pre-initialized execution environments to eliminate cold-start latency for a latency-sensitive API. What should the developer configure?",
        options: [
          { id: 'a', text: "Reserved concurrency", correct: false },
          { id: 'b', text: "Provisioned concurrency", correct: true },
          { id: 'c', text: "A larger memory allocation only", correct: false },
          { id: 'd', text: "A dead-letter queue", correct: false },
        ],
        explanation:
          "Provisioned concurrency keeps a set number of environments initialized and ready to respond, removing cold starts. Reserved concurrency caps/guarantees the maximum concurrent executions but does not pre-warm environments.",
        topic: 'Troubleshooting & Optimization',
      },
    ],
  },
  {
    id: 'exam-2',
    title: 'Practice Exam 2',
    description: "A second set of fresh questions — no repeats from Exam 1.",
    suggestedMinutes: 35,
    questions: [
      {
        id: 'e2q1',
        question:
          "A developer wants to pass configuration values (like a table name) to a Lambda function without redeploying code when the value changes. What is the simplest built-in mechanism?",
        options: [
          { id: 'a', text: "Hard-code the value in the handler", correct: false },
          { id: 'b', text: "Use Lambda environment variables", correct: true },
          { id: 'c', text: "Store it in the function description field", correct: false },
          { id: 'd', text: "Pass it as part of the function name", correct: false },
        ],
        explanation:
          "Lambda environment variables let you externalize configuration and change values via the console/API/IaC without editing code. For secrets or shared config across functions, Parameter Store or Secrets Manager are better.",
        topic: 'Development',
      },
      {
        id: 'e2q2',
        question:
          "A DynamoDB single-table design stores multiple entity types. Customers and their orders must be retrievable together in one query. Which key design supports this item collection pattern?",
        options: [
          { id: 'a', text: "Use the same partition key (e.g., CUSTOMER#123) with different sort keys (PROFILE, ORDER#001)", correct: true },
          { id: 'b', text: "Create a separate table per entity type", correct: false },
          { id: 'c', text: "Use a random UUID as the partition key for every item", correct: false },
          { id: 'd', text: "Store everything in one attribute as JSON", correct: false },
        ],
        explanation:
          "In single-table design, items sharing a partition key form an item collection that can be fetched in a single Query. Using a composite sort key (PROFILE, ORDER#...) lets you co-locate related entities and retrieve them together efficiently.",
        topic: 'Development',
      },
      {
        id: 'e2q3',
        question:
          "Messages that repeatedly fail processing in an SQS queue should be moved aside for inspection after a set number of attempts. Which feature accomplishes this?",
        options: [
          { id: 'a', text: "Long polling", correct: false },
          { id: 'b', text: "A dead-letter queue with a redrive policy (maxReceiveCount)", correct: true },
          { id: 'c', text: "Message timers", correct: false },
          { id: 'd', text: "Increasing message retention", correct: false },
        ],
        explanation:
          "A dead-letter queue paired with a redrive policy moves a message to the DLQ after maxReceiveCount failed processing attempts, isolating poison messages for later analysis without blocking the main queue.",
        topic: 'Troubleshooting & Optimization',
      },
      {
        id: 'e2q4',
        question:
          "A developer needs cross-account temporary credentials so a service in Account A can assume a role in Account B. Which service issues these short-lived credentials?",
        options: [
          { id: 'a', text: "AWS STS (AssumeRole)", correct: true },
          { id: 'b', text: "AWS KMS", correct: false },
          { id: 'c', text: "Amazon Cognito user pool", correct: false },
          { id: 'd', text: "AWS Secrets Manager", correct: false },
        ],
        explanation:
          "AWS STS issues temporary security credentials. AssumeRole (with a trust policy in Account B allowing Account A) returns short-lived credentials for cross-account access. KMS is for encryption keys; Cognito/Secrets Manager serve different purposes.",
        topic: 'Security',
      },
      {
        id: 'e2q5',
        question:
          "An Elastic Beanstalk environment must be updated so that a new application version is deployed to a separate environment and traffic switched only after validation, minimizing downtime and risk. Which deployment approach fits?",
        options: [
          { id: 'a', text: "All at once", correct: false },
          { id: 'b', text: "Blue/green deployment by swapping environment URLs (CNAME swap)", correct: true },
          { id: 'c', text: "Rolling with additional batch on the same instances", correct: false },
          { id: 'd', text: "Immutable in place with no new environment", correct: false },
        ],
        explanation:
          "In Elastic Beanstalk, a blue/green deployment runs the new version in a separate environment and performs a CNAME swap to shift traffic once validated, enabling near-zero-downtime and easy rollback by swapping back.",
        topic: 'Deployment',
      },
      {
        id: 'e2q6',
        question:
          "A payment API may receive the same request twice due to client retries. The developer must ensure the charge is applied only once. Which techniques help enforce idempotency? (Choose TWO.)",
        options: [
          { id: 'a', text: "Require a client-supplied idempotency key and store processed keys to detect duplicates", correct: true },
          { id: 'b', text: "Use a DynamoDB conditional write (attribute_not_exists) keyed on the request ID", correct: true },
          { id: 'c', text: "Increase the Lambda timeout", correct: false },
          { id: 'd', text: "Enable API Gateway caching", correct: false },
          { id: 'e', text: "Add more read capacity to the table", correct: false },
        ],
        explanation:
          "Idempotency is enforced by uniquely identifying each request (an idempotency key/request ID) and using a conditional write (attribute_not_exists) so a duplicate fails to insert and is safely ignored. Timeouts, caching, and capacity do not guarantee once-only side effects.",
        topic: 'Development',
      },
      {
        id: 'e2q7',
        question:
          "A high-throughput streaming application ingests clickstream data and needs ordered, replayable records that multiple consumers can read independently in real time. Which service is most appropriate?",
        options: [
          { id: 'a', text: "Amazon SQS standard queue", correct: false },
          { id: 'b', text: "Amazon Kinesis Data Streams", correct: true },
          { id: 'c', text: "Amazon SNS", correct: false },
          { id: 'd', text: "AWS Step Functions", correct: false },
        ],
        explanation:
          "Kinesis Data Streams provides ordered records per shard with a retention window that allows replay, and multiple consumers can read the same stream independently. SQS deletes messages after consumption and does not support multiple independent replays the same way.",
        topic: 'Development',
      },
      {
        id: 'e2q8',
        question:
          "A developer wants an SNS topic to fan out a single published message to an SQS queue, a Lambda function, and an email endpoint simultaneously. Which statement is true?",
        options: [
          { id: 'a', text: "SNS supports multiple subscribers of different protocols to one topic (fan-out)", correct: true },
          { id: 'b', text: "SNS can only deliver to a single subscriber per topic", correct: false },
          { id: 'c', text: "You must publish the message separately to each subscriber", correct: false },
          { id: 'd', text: "SNS guarantees strict ordering across all standard topics", correct: false },
        ],
        explanation:
          "SNS implements the pub/sub fan-out pattern: a single publish delivers the message to all subscribers, which can be different protocols (SQS, Lambda, HTTP, email). Standard topics do not guarantee strict ordering (FIFO topics do).",
        topic: 'Development',
      },
      {
        id: 'e2q9',
        question:
          "A CodeDeploy deployment to EC2 fails during the BeforeInstall step. Where does the developer define lifecycle event hooks and the scripts to run for an EC2/on-premises deployment?",
        options: [
          { id: 'a', text: "buildspec.yml", correct: false },
          { id: 'b', text: "appspec.yml", correct: true },
          { id: 'c', text: "template.yaml SAM file", correct: false },
          { id: 'd', text: "The pipeline's source stage", correct: false },
        ],
        explanation:
          "CodeDeploy uses appspec.yml to map source files to the instance and define lifecycle event hooks (e.g., BeforeInstall, AfterInstall, ApplicationStart) with the scripts to execute. buildspec.yml belongs to CodeBuild.",
        topic: 'Deployment',
      },
      {
        id: 'e2q10',
        question:
          "A developer must give a temporary, direct AWS credential to authenticated mobile users so they can upload to a specific S3 prefix. Which Cognito component maps authenticated identities to IAM roles and returns AWS credentials?",
        options: [
          { id: 'a', text: "Cognito user pool", correct: false },
          { id: 'b', text: "Cognito identity pool", correct: true },
          { id: 'c', text: "IAM user group", correct: false },
          { id: 'd', text: "SNS platform application", correct: false },
        ],
        explanation:
          "A Cognito identity pool (federated identities) exchanges an authenticated token for temporary AWS credentials tied to an IAM role, enabling scoped access to AWS resources like S3. The user pool handles authentication; the identity pool handles AWS authorization.",
        topic: 'Security',
      },
      {
        id: 'e2q11',
        question:
          "A developer wants to store frequently read, non-secret configuration (feature flags, table names) with a free tier and hierarchical paths, retrievable by Lambda. Which service is the most cost-effective choice?",
        options: [
          { id: 'a', text: "AWS Secrets Manager", correct: false },
          { id: 'b', text: "SSM Parameter Store (standard parameters)", correct: true },
          { id: 'c', text: "DynamoDB global table", correct: false },
          { id: 'd', text: "S3 static config file with versioning", correct: false },
        ],
        explanation:
          "SSM Parameter Store standard parameters are free and support hierarchical paths, making them ideal for non-secret configuration. Secrets Manager charges per secret and is oriented toward rotating secrets, which is unnecessary here.",
        topic: 'Security',
      },
      {
        id: 'e2q12',
        question:
          "A SAM template defines a serverless API. Which command packages local artifacts, uploads them to S3, and produces a deployable template?",
        options: [
          { id: 'a', text: "sam build only", correct: false },
          { id: 'b', text: "sam package (or sam deploy, which packages and deploys)", correct: true },
          { id: 'c', text: "aws cloudformation validate-template", correct: false },
          { id: 'd', text: "sam local invoke", correct: false },
        ],
        explanation:
          "sam package uploads local code artifacts to S3 and rewrites the template with the S3 references; sam deploy performs packaging and then creates/updates the CloudFormation stack. sam build compiles dependencies; sam local invoke tests locally.",
        topic: 'Deployment',
      },
      {
        id: 'e2q13',
        question:
          "A DynamoDB table using provisioned capacity throttles during predictable daily traffic peaks, but the developer does not want to manage scaling manually. Which two options address this? (Choose TWO.)",
        options: [
          { id: 'a', text: "Enable DynamoDB auto scaling to adjust provisioned capacity to demand", correct: true },
          { id: 'b', text: "Switch the table to on-demand capacity mode", correct: true },
          { id: 'c', text: "Add a Local Secondary Index", correct: false },
          { id: 'd', text: "Reduce the item size by removing the sort key", correct: false },
          { id: 'e', text: "Enable point-in-time recovery", correct: false },
        ],
        explanation:
          "Auto scaling automatically adjusts provisioned RCUs/WCUs based on utilization targets. On-demand mode removes capacity planning entirely and scales to traffic instantly. LSIs, PITR, and key changes do not resolve throughput throttling.",
        topic: 'Troubleshooting & Optimization',
      },
      {
        id: 'e2q14',
        question:
          "A developer sees Lambda functions being throttled with TooManyRequestsException while other functions in the account are starved of concurrency. How can the developer guarantee a critical function always has capacity?",
        options: [
          { id: 'a', text: "Set reserved concurrency on the critical function", correct: true },
          { id: 'b', text: "Increase the function timeout", correct: false },
          { id: 'c', text: "Enable a dead-letter queue", correct: false },
          { id: 'd', text: "Reduce the memory to 128 MB", correct: false },
        ],
        explanation:
          "Reserved concurrency carves out a guaranteed portion of the account concurrency pool for a specific function (and simultaneously caps its maximum). This ensures the critical function is not starved by others sharing the unreserved pool.",
        topic: 'Troubleshooting & Optimization',
      },
      {
        id: 'e2q15',
        question:
          "A developer must ensure objects uploaded to an S3 bucket are encrypted at rest using keys managed in AWS KMS, and that unencrypted uploads are rejected. What should be configured?",
        options: [
          { id: 'a', text: "Enable default encryption with SSE-KMS and a bucket policy that denies PutObject without the correct encryption header", correct: true },
          { id: 'b', text: "Make the bucket public and rely on TLS", correct: false },
          { id: 'c', text: "Enable S3 Transfer Acceleration", correct: false },
          { id: 'd', text: "Turn on requester pays", correct: false },
        ],
        explanation:
          "Setting default encryption to SSE-KMS encrypts new objects, and a bucket policy that denies s3:PutObject when the encryption header is missing or incorrect enforces that all uploads are encrypted with the intended key. Transfer Acceleration and requester pays are unrelated to encryption.",
        topic: 'Security',
      },
      {
        id: 'e2q16',
        question:
          "A developer needs to emit a custom application metric (e.g., number of orders processed) and trigger a notification when it exceeds a threshold. Which combination is correct?",
        options: [
          { id: 'a', text: "Publish a CloudWatch custom metric with PutMetricData and create a CloudWatch alarm with an SNS action", correct: true },
          { id: 'b', text: "Write the value to an S3 object and poll it", correct: false },
          { id: 'c', text: "Use X-Ray annotations and a subsegment filter", correct: false },
          { id: 'd', text: "Enable CloudTrail insights on the function", correct: false },
        ],
        explanation:
          "Applications push custom metrics via PutMetricData. A CloudWatch alarm evaluates the metric against a threshold and can trigger an SNS notification (or other action) when breached. X-Ray is for tracing, not metric alarms.",
        topic: 'Troubleshooting & Optimization',
      },
      {
        id: 'e2q17',
        question:
          "An ECS task running on Fargate must pull a container image the team built. Where should the image be stored so ECS can pull it with IAM-based authentication?",
        options: [
          { id: 'a', text: "Amazon ECR (Elastic Container Registry)", correct: true },
          { id: 'b', text: "An S3 bucket as a .tar file", correct: false },
          { id: 'c', text: "AWS Secrets Manager", correct: false },
          { id: 'd', text: "A Lambda layer", correct: false },
        ],
        explanation:
          "ECR is AWS's managed Docker registry. ECS/Fargate tasks pull images from ECR using the task execution role's IAM permissions (ecr:GetAuthorizationToken, ecr:BatchGetImage). S3, Secrets Manager, and layers are not container registries.",
        topic: 'Deployment',
      },
      {
        id: 'e2q18',
        question:
          "A developer's Lambda function in a VPC times out when calling DynamoDB, though the IAM permissions are correct. What is the most likely networking cause and fix?",
        options: [
          { id: 'a', text: "The function needs a VPC endpoint (or NAT) to reach the DynamoDB service since it has no route to the public endpoint", correct: true },
          { id: 'b', text: "The function memory is too low", correct: false },
          { id: 'c', text: "DynamoDB Streams are disabled", correct: false },
          { id: 'd', text: "The alias is pointing to the wrong version", correct: false },
        ],
        explanation:
          "A Lambda in private VPC subnets has no internet route by default, so calls to AWS service public endpoints fail/time out. Adding a Gateway VPC endpoint for DynamoDB (or a NAT gateway for a public route) restores connectivity. Permissions were already correct.",
        topic: 'Troubleshooting & Optimization',
      },
      {
        id: 'e2q19',
        question:
          "A REST API built with API Gateway and Lambda proxy integration returns a 502 Bad Gateway. What is the most common cause?",
        options: [
          { id: 'a', text: "The Lambda function returned a response not matching the expected proxy format (statusCode/body)", correct: true },
          { id: 'b', text: "The API stage caching is enabled", correct: false },
          { id: 'c', text: "The DynamoDB table lacks a sort key", correct: false },
          { id: 'd', text: "The function has too much reserved concurrency", correct: false },
        ],
        explanation:
          "With Lambda proxy integration, the function must return a JSON object with statusCode, headers, and a stringified body. A malformed response (or an unhandled exception) causes API Gateway to return 502 Bad Gateway.",
        topic: 'Troubleshooting & Optimization',
      },
      {
        id: 'e2q20',
        question:
          "A team wants their CodePipeline to automatically start whenever code is pushed to the main branch of a CodeCommit repository. What is the recommended trigger mechanism?",
        options: [
          { id: 'a', text: "An Amazon EventBridge rule that detects CodeCommit repository state changes and starts the pipeline", correct: true },
          { id: 'b', text: "A scheduled poll every 24 hours", correct: false },
          { id: 'c', text: "Manually releasing a change each time", correct: false },
          { id: 'd', text: "An SQS queue subscribed to the repository", correct: false },
        ],
        explanation:
          "The recommended approach is an EventBridge rule that reacts to CodeCommit repository state changes (e.g., a push to main) and triggers the pipeline immediately. This is faster and more efficient than periodic polling and requires no manual release.",
        topic: 'Deployment',
      },
    ],
  },
]
