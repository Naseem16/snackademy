import type { PracticeExam } from '../types'

export const awsSolutionsArchitectExams: PracticeExam[] = [
  {
    id: 'exam-1',
    title: 'Practice Exam 1',
    description: "Full-length mixed practice across all SAA-C03 domains.",
    suggestedMinutes: 35,
    questions: [
      {
        id: 'e1q1',
        question:
          "A company runs a fleet of EC2 instances that must read objects from an S3 bucket. Developers currently embed long-lived access keys in the application code. What is the MOST secure way to grant this access?",
        options: [
          { id: 'a', text: "Create an IAM user with S3 permissions and store its access keys in the app config", correct: false },
          { id: 'b', text: "Attach an IAM role with the required S3 permissions to the EC2 instances via an instance profile", correct: true },
          { id: 'c', text: "Add the EC2 instance public IPs to the S3 bucket policy", correct: false },
          { id: 'd', text: "Enable S3 public read access on the bucket", correct: false },
        ],
        explanation:
          "IAM roles attached through an instance profile provide temporary, automatically rotated credentials to EC2 instances, eliminating the need to store long-lived keys in code. This is the AWS-recommended best practice.",
        topic: "Secure Architectures",
      },
      {
        id: 'e1q2',
        question:
          "A web application must remain available even if an entire Availability Zone fails. Which architecture achieves high availability MOST effectively?",
        options: [
          { id: 'a', text: "A single large EC2 instance with an Elastic IP", correct: false },
          { id: 'b', text: "EC2 instances in an Auto Scaling group spanning multiple AZs behind an Application Load Balancer", correct: true },
          { id: 'c', text: "Two EC2 instances in the same AZ behind an ALB", correct: false },
          { id: 'd', text: "One EC2 instance per AZ started manually when needed", correct: false },
        ],
        explanation:
          "Spreading instances across multiple AZs in an Auto Scaling group behind an ALB ensures that if one AZ fails, traffic is routed to healthy instances in other AZs, and capacity is automatically replaced.",
        topic: "Resilient Architectures",
      },
      {
        id: 'e1q3',
        question:
          "A company needs a relational database with automatic failover to a standby in another Availability Zone if the primary fails. Which configuration meets this requirement?",
        options: [
          { id: 'a', text: "Amazon RDS with a read replica in the same AZ", correct: false },
          { id: 'b', text: "Amazon RDS Multi-AZ deployment", correct: true },
          { id: 'c', text: "A single-AZ RDS instance with automated backups", correct: false },
          { id: 'd', text: "Amazon RDS with a cross-Region read replica", correct: false },
        ],
        explanation:
          "RDS Multi-AZ maintains a synchronous standby replica in a different AZ and performs automatic failover to it if the primary fails. Read replicas are for scaling reads, not automatic failover.",
        topic: "Resilient Architectures",
      },
      {
        id: 'e1q4',
        question:
          "A batch-processing workload can tolerate interruptions and restarts. The company wants the LOWEST possible compute cost. Which EC2 pricing model should be used?",
        options: [
          { id: 'a', text: "On-Demand Instances", correct: false },
          { id: 'b', text: "Reserved Instances", correct: false },
          { id: 'c', text: "Spot Instances", correct: true },
          { id: 'd', text: "Dedicated Hosts", correct: false },
        ],
        explanation:
          "Spot Instances offer discounts up to 90% off On-Demand pricing and are ideal for fault-tolerant, interruption-tolerant workloads such as batch processing.",
        topic: "Cost-Optimized Architectures",
      },
      {
        id: 'e1q5',
        question:
          "A company wants to reduce latency for a global user base accessing static content stored in Amazon S3. Which service should be used?",
        options: [
          { id: 'a', text: "Amazon CloudFront", correct: true },
          { id: 'b', text: "AWS Global Accelerator", correct: false },
          { id: 'c', text: "Amazon Route 53 latency-based routing", correct: false },
          { id: 'd', text: "An Application Load Balancer", correct: false },
        ],
        explanation:
          "CloudFront is a content delivery network that caches static content at edge locations close to users, reducing latency. It integrates natively with S3 as an origin.",
        topic: "High-Performing Architectures",
      },
      {
        id: 'e1q6',
        question:
          "A company must ensure that traffic between EC2 instances in a private subnet and Amazon S3 does not traverse the public internet. Which solution meets this requirement MOST cost-effectively?",
        options: [
          { id: 'a', text: "A NAT gateway in a public subnet", correct: false },
          { id: 'b', text: "A gateway VPC endpoint for S3", correct: true },
          { id: 'c', text: "An internet gateway attached to the VPC", correct: false },
          { id: 'd', text: "An interface VPC endpoint with AWS PrivateLink for S3", correct: false },
        ],
        explanation:
          "A gateway VPC endpoint for S3 lets instances in private subnets access S3 over the AWS private network at no additional charge, avoiding the cost and internet exposure of a NAT gateway.",
        topic: "Secure Architectures",
      },
      {
        id: 'e1q7',
        question:
          "An application uses Amazon SQS to decouple a front end from a pool of worker instances. During traffic spikes, workers cannot keep up and messages must not be lost. Which approach BEST addresses this?",
        options: [
          { id: 'a', text: "Switch the workers to poll an SNS topic instead", correct: false },
          { id: 'b', text: "Use an Auto Scaling group for the workers that scales on the SQS queue depth (ApproximateNumberOfMessagesVisible)", correct: true },
          { id: 'c', text: "Reduce the SQS message retention period to 1 minute", correct: false },
          { id: 'd', text: "Move all processing into the front-end tier", correct: false },
        ],
        explanation:
          "SQS buffers messages durably, and scaling the worker Auto Scaling group based on queue depth adds capacity during spikes while retaining messages until they are processed.",
        topic: "Resilient Architectures",
      },
      {
        id: 'e1q8',
        question:
          "A company stores infrequently accessed data in S3 that must be retrievable within milliseconds when needed. The data is accessed roughly once a quarter. Which storage class is MOST cost-effective?",
        options: [
          { id: 'a', text: "S3 Standard", correct: false },
          { id: 'b', text: "S3 Standard-Infrequent Access (Standard-IA)", correct: true },
          { id: 'c', text: "S3 Glacier Deep Archive", correct: false },
          { id: 'd', text: "S3 Glacier Flexible Retrieval", correct: false },
        ],
        explanation:
          "S3 Standard-IA is designed for infrequently accessed data that still needs millisecond retrieval, offering lower storage cost than Standard with a per-GB retrieval fee. Glacier classes involve retrieval delays.",
        topic: "Cost-Optimized Architectures",
      },
      {
        id: 'e1q9',
        question:
          "A company wants to run containerized microservices without managing any EC2 servers or the underlying cluster capacity. Which compute option is MOST appropriate?",
        options: [
          { id: 'a', text: "Amazon ECS on EC2 launch type", correct: false },
          { id: 'b', text: "Amazon EKS with self-managed EC2 node groups", correct: false },
          { id: 'c', text: "AWS Fargate", correct: true },
          { id: 'd', text: "EC2 instances with Docker installed manually", correct: false },
        ],
        explanation:
          "AWS Fargate is a serverless compute engine for containers that removes the need to provision or manage EC2 servers, letting the company focus on running containers.",
        topic: "High-Performing Architectures",
      },
      {
        id: 'e1q10',
        question:
          "A read-heavy application experiences repeated identical database queries against Amazon RDS. The team wants to reduce database load and improve response times. Which solution BEST achieves this?",
        options: [
          { id: 'a', text: "Add an Amazon ElastiCache caching layer in front of the database", correct: true },
          { id: 'b', text: "Enable Multi-AZ on the RDS instance", correct: false },
          { id: 'c', text: "Increase the RDS storage size", correct: false },
          { id: 'd', text: "Move the database to a larger instance in a single AZ", correct: false },
        ],
        explanation:
          "ElastiCache (Redis or Memcached) caches frequently accessed query results in memory, offloading repeated reads from RDS and improving latency.",
        topic: "High-Performing Architectures",
      },
      {
        id: 'e1q11',
        question:
          "A company must protect a public web application from SQL injection and cross-site scripting attacks at the HTTP layer. Which service should be used?",
        options: [
          { id: 'a', text: "AWS Shield Standard", correct: false },
          { id: 'b', text: "Amazon GuardDuty", correct: false },
          { id: 'c', text: "AWS WAF", correct: true },
          { id: 'd', text: "AWS Network Firewall", correct: false },
        ],
        explanation:
          "AWS WAF inspects HTTP/HTTPS requests and allows rules to block common web exploits such as SQL injection and XSS. It integrates with CloudFront, ALB, and API Gateway.",
        topic: "Secure Architectures",
      },
      {
        id: 'e1q12',
        question:
          "A DynamoDB-backed application must serve users in multiple AWS Regions with low-latency local reads and writes and be resilient to a Region failure. Which feature meets this requirement?",
        options: [
          { id: 'a', text: "DynamoDB Accelerator (DAX)", correct: false },
          { id: 'b', text: "DynamoDB global tables", correct: true },
          { id: 'c', text: "DynamoDB on-demand capacity mode", correct: false },
          { id: 'd', text: "A DynamoDB local secondary index", correct: false },
        ],
        explanation:
          "DynamoDB global tables provide multi-Region, active-active replication so users get low-latency local access and the table survives a Region outage.",
        topic: "Resilient Architectures",
      },
      {
        id: 'e1q13',
        question:
          "A company plans to run a steady-state production workload on EC2 for the next three years and wants to minimize compute costs while retaining the flexibility to change instance families. Which purchasing option is BEST?",
        options: [
          { id: 'a', text: "Standard Reserved Instances", correct: false },
          { id: 'b', text: "Compute Savings Plans", correct: true },
          { id: 'c', text: "Spot Instances", correct: false },
          { id: 'd', text: "On-Demand Instances", correct: false },
        ],
        explanation:
          "Compute Savings Plans provide On-Demand-style flexibility across instance families, sizes, Regions, and even Fargate/Lambda in exchange for a committed hourly spend, ideal for steady-state workloads needing flexibility.",
        topic: "Cost-Optimized Architectures",
      },
      {
        id: 'e1q14',
        question:
          "A solutions architect needs to control both stateless subnet-level traffic filtering and stateful instance-level filtering in a VPC. Which two statements correctly describe security groups and network ACLs? (Choose TWO.)",
        options: [
          { id: 'a', text: "Security groups are stateful and evaluated at the instance (ENI) level", correct: true },
          { id: 'b', text: "Network ACLs are stateful and evaluated at the instance level", correct: false },
          { id: 'c', text: "Network ACLs are stateless and evaluated at the subnet level", correct: true },
          { id: 'd', text: "Security groups support explicit deny rules", correct: false },
          { id: 'e', text: "Network ACLs cannot have any deny rules", correct: false },
        ],
        explanation:
          "Security groups are stateful (return traffic is automatically allowed) and act at the ENI/instance level; they support only allow rules. Network ACLs are stateless and act at the subnet level, supporting both allow and deny rules.",
        topic: "Secure Architectures",
      },
      {
        id: 'e1q15',
        question:
          "A company wants to route users to the nearest healthy Regional endpoint and improve global TCP/UDP performance using the AWS backbone, with static anycast IP addresses. Which service should be used?",
        options: [
          { id: 'a', text: "Amazon CloudFront", correct: false },
          { id: 'b', text: "AWS Global Accelerator", correct: true },
          { id: 'c', text: "Amazon Route 53 weighted routing", correct: false },
          { id: 'd', text: "An internet-facing Network Load Balancer", correct: false },
        ],
        explanation:
          "Global Accelerator provides two static anycast IP addresses and routes traffic over the AWS global network to the optimal healthy endpoint, improving performance for TCP/UDP applications.",
        topic: "High-Performing Architectures",
      },
      {
        id: 'e1q16',
        question:
          "A company needs a disaster recovery strategy with the lowest RTO and RPO, running a fully scaled duplicate of production in a second Region at all times. Which DR strategy is this?",
        options: [
          { id: 'a', text: "Backup and restore", correct: false },
          { id: 'b', text: "Pilot light", correct: false },
          { id: 'c', text: "Warm standby", correct: false },
          { id: 'd', text: "Multi-site active/active", correct: true },
        ],
        explanation:
          "Multi-site active/active runs full production capacity in more than one Region simultaneously, delivering the lowest RTO and RPO at the highest cost. Warm standby runs a scaled-down copy; pilot light keeps only core services running.",
        topic: "Resilient Architectures",
      },
      {
        id: 'e1q17',
        question:
          "A company needs to encrypt data at rest in Amazon S3 while retaining full control over the key rotation policy and having an audit trail of key usage. Which approach is BEST?",
        options: [
          { id: 'a', text: "S3-managed keys (SSE-S3)", correct: false },
          { id: 'b', text: "A customer managed key in AWS KMS (SSE-KMS)", correct: true },
          { id: 'c', text: "Client-side encryption with keys stored in the application", correct: false },
          { id: 'd', text: "Disabling encryption and relying on bucket policies", correct: false },
        ],
        explanation:
          "A customer managed KMS key gives control over rotation policy and key policies, and KMS logs every key use to CloudTrail for auditing. SSE-S3 does not expose the key or provide the same control.",
        topic: "Secure Architectures",
      },
      {
        id: 'e1q18',
        question:
          "A shared file system must be mounted concurrently by hundreds of Linux EC2 instances across multiple Availability Zones. Which storage service should be used?",
        options: [
          { id: 'a', text: "Amazon EBS gp3 volume", correct: false },
          { id: 'b', text: "Amazon EFS", correct: true },
          { id: 'c', text: "Amazon S3 mounted as a block device", correct: false },
          { id: 'd', text: "An EC2 instance store", correct: false },
        ],
        explanation:
          "Amazon EFS is a fully managed, elastic NFS file system that can be mounted concurrently by thousands of instances across multiple AZs. EBS volumes attach to a single instance in one AZ.",
        topic: "High-Performing Architectures",
      },
      {
        id: 'e1q19',
        question:
          "A company wants to be alerted when its monthly AWS spend is forecast to exceed a defined threshold, and to track spend against a target. Which two AWS tools should be used? (Choose TWO.)",
        options: [
          { id: 'a', text: "AWS Budgets", correct: true },
          { id: 'b', text: "AWS Cost Explorer", correct: true },
          { id: 'c', text: "Amazon CloudWatch Logs Insights", correct: false },
          { id: 'd', text: "AWS Config", correct: false },
          { id: 'e', text: "AWS Systems Manager", correct: false },
        ],
        explanation:
          "AWS Budgets sends alerts when actual or forecasted cost/usage exceeds a threshold, and Cost Explorer visualizes and analyzes spending trends over time. Together they support cost tracking and alerting.",
        topic: "Cost-Optimized Architectures",
      },
      {
        id: 'e1q20',
        question:
          "A mobile application needs to authenticate users with social identity providers (Google, Facebook) and obtain temporary AWS credentials to access backend resources. Which service should be used?",
        options: [
          { id: 'a', text: "AWS IAM users for each app user", correct: false },
          { id: 'b', text: "Amazon Cognito", correct: true },
          { id: 'c', text: "AWS Directory Service", correct: false },
          { id: 'd', text: "AWS Secrets Manager", correct: false },
        ],
        explanation:
          "Amazon Cognito provides user sign-up/sign-in (user pools) and federated identities (identity pools) that exchange social provider tokens for temporary, scoped AWS credentials, ideal for mobile and web apps.",
        topic: "Secure Architectures",
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
          "A company runs an unpredictable, spiky API workload and wants to pay only for actual compute time with no idle server cost, and no infrastructure to manage. Which compute option is MOST appropriate?",
        options: [
          { id: 'a', text: "AWS Lambda", correct: true },
          { id: 'b', text: "A fixed fleet of On-Demand EC2 instances", correct: false },
          { id: 'c', text: "Reserved EC2 instances sized for peak", correct: false },
          { id: 'd', text: "Amazon EKS with a static node group", correct: false },
        ],
        explanation:
          "AWS Lambda is serverless and bills per request and execution duration, scaling automatically with demand and charging nothing when idle, which suits spiky, unpredictable workloads.",
        topic: "Cost-Optimized Architectures",
      },
      {
        id: 'e2q2',
        question:
          "A company wants to fan out a single published event to multiple independent subscribers, including several SQS queues and an HTTPS endpoint. Which service should be at the center of this design?",
        options: [
          { id: 'a', text: "Amazon SQS standard queue", correct: false },
          { id: 'b', text: "Amazon SNS topic", correct: true },
          { id: 'c', text: "Amazon Kinesis Data Streams", correct: false },
          { id: 'd', text: "AWS Step Functions", correct: false },
        ],
        explanation:
          "Amazon SNS implements pub/sub fan-out: a single message published to a topic is delivered to many subscribers such as SQS queues, Lambda, and HTTPS endpoints simultaneously.",
        topic: "Resilient Architectures",
      },
      {
        id: 'e2q3',
        question:
          "A company must retain archived compliance data for seven years, accessed at most once a year, with retrieval times of several hours being acceptable. Which storage class minimizes cost?",
        options: [
          { id: 'a', text: "S3 Standard-IA", correct: false },
          { id: 'b', text: "S3 Glacier Deep Archive", correct: true },
          { id: 'c', text: "S3 Standard", correct: false },
          { id: 'd', text: "S3 One Zone-IA", correct: false },
        ],
        explanation:
          "S3 Glacier Deep Archive offers the lowest storage cost for long-term archives that are rarely accessed and tolerate retrieval times of hours, making it ideal for multi-year compliance retention.",
        topic: "Cost-Optimized Architectures",
      },
      {
        id: 'e2q4',
        question:
          "A company needs to distribute traffic to microservices based on the URL path (for example /api and /images) using a single entry point. Which load balancer should be used?",
        options: [
          { id: 'a', text: "Network Load Balancer", correct: false },
          { id: 'b', text: "Application Load Balancer", correct: true },
          { id: 'c', text: "Gateway Load Balancer", correct: false },
          { id: 'd', text: "Classic Load Balancer", correct: false },
        ],
        explanation:
          "The Application Load Balancer operates at Layer 7 and supports content-based routing such as path-based and host-based rules, ideal for routing to microservices from a single endpoint.",
        topic: "High-Performing Architectures",
      },
      {
        id: 'e2q5',
        question:
          "A company wants to detect anomalous and potentially malicious activity across its AWS accounts by analyzing CloudTrail, VPC Flow Logs, and DNS logs. Which service provides this threat detection?",
        options: [
          { id: 'a', text: "AWS WAF", correct: false },
          { id: 'b', text: "Amazon GuardDuty", correct: true },
          { id: 'c', text: "AWS Shield Advanced", correct: false },
          { id: 'd', text: "Amazon Inspector", correct: false },
        ],
        explanation:
          "Amazon GuardDuty is a managed threat detection service that continuously analyzes CloudTrail events, VPC Flow Logs, and DNS logs to identify malicious or unauthorized behavior.",
        topic: "Secure Architectures",
      },
      {
        id: 'e2q6',
        question:
          "An Amazon Aurora database serves a read-heavy reporting workload that is overwhelming the primary instance. What is the BEST way to scale read capacity with minimal application changes?",
        options: [
          { id: 'a', text: "Enable Aurora Multi-AZ only", correct: false },
          { id: 'b', text: "Add Aurora Replicas and direct reporting queries to the reader endpoint", correct: true },
          { id: 'c', text: "Increase the primary instance storage", correct: false },
          { id: 'd', text: "Migrate the database to a single large EC2-hosted MySQL server", correct: false },
        ],
        explanation:
          "Aurora Replicas share the same storage volume as the primary and can serve reads. Pointing reporting queries at the Aurora reader endpoint distributes read load across replicas with minimal changes.",
        topic: "High-Performing Architectures",
      },
      {
        id: 'e2q7',
        question:
          "A company wants a DR approach where a minimal version of core infrastructure (such as a replicated database) always runs in a second Region, and the rest is provisioned quickly during a disaster. Which strategy is this?",
        options: [
          { id: 'a', text: "Backup and restore", correct: false },
          { id: 'b', text: "Pilot light", correct: true },
          { id: 'c', text: "Warm standby", correct: false },
          { id: 'd', text: "Multi-site active/active", correct: false },
        ],
        explanation:
          "The pilot light strategy keeps critical core components (like a replicated database) running in the recovery Region while the rest of the environment is switched on and scaled during failover.",
        topic: "Resilient Architectures",
      },
      {
        id: 'e2q8',
        question:
          "A company must ensure that objects accidentally deleted or overwritten in an S3 bucket can be recovered. Which feature should be enabled?",
        options: [
          { id: 'a', text: "S3 Transfer Acceleration", correct: false },
          { id: 'b', text: "S3 Versioning", correct: true },
          { id: 'c', text: "S3 Requester Pays", correct: false },
          { id: 'd', text: "S3 Static Website Hosting", correct: false },
        ],
        explanation:
          "S3 Versioning keeps multiple versions of an object so that overwrites and deletes create new versions or delete markers, allowing prior versions to be restored.",
        topic: "Resilient Architectures",
      },
      {
        id: 'e2q9',
        question:
          "A company wants to automatically move S3 objects to cheaper storage tiers as they age, without writing custom logic, when access patterns are known and predictable. Which feature should be used?",
        options: [
          { id: 'a', text: "S3 Lifecycle policies", correct: true },
          { id: 'b', text: "S3 Replication", correct: false },
          { id: 'c', text: "S3 Object Lock", correct: false },
          { id: 'd', text: "S3 Event Notifications", correct: false },
        ],
        explanation:
          "S3 Lifecycle policies transition objects to lower-cost classes (for example Standard-IA then Glacier) and expire them on a defined schedule, ideal when access patterns are predictable.",
        topic: "Cost-Optimized Architectures",
      },
      {
        id: 'e2q10',
        question:
          "A DynamoDB table experiences extremely high read traffic on a small set of hot items, and single-digit millisecond latency is no longer enough. Which fully managed caching solution is purpose-built for DynamoDB?",
        options: [
          { id: 'a', text: "Amazon ElastiCache for Memcached", correct: false },
          { id: 'b', text: "DynamoDB Accelerator (DAX)", correct: true },
          { id: 'c', text: "Amazon CloudFront", correct: false },
          { id: 'd', text: "Amazon RDS read replicas", correct: false },
        ],
        explanation:
          "DAX is an in-memory cache built specifically for DynamoDB, delivering microsecond read latency for hot items with no application caching logic beyond using the DAX client.",
        topic: "High-Performing Architectures",
      },
      {
        id: 'e2q11',
        question:
          "A company wants to distribute users across two application versions, sending 90% of traffic to the current version and 10% to a new version for testing. Which Route 53 routing policy should be used?",
        options: [
          { id: 'a', text: "Failover routing", correct: false },
          { id: 'b', text: "Weighted routing", correct: true },
          { id: 'c', text: "Geolocation routing", correct: false },
          { id: 'd', text: "Multivalue answer routing", correct: false },
        ],
        explanation:
          "Weighted routing lets you assign relative weights to records so traffic is split by percentage across endpoints, which is ideal for canary and A/B testing.",
        topic: "High-Performing Architectures",
      },
      {
        id: 'e2q12',
        question:
          "A company processes a high-throughput, ordered stream of clickstream events in near real time, with multiple consumers replaying the data. Which service is BEST suited?",
        options: [
          { id: 'a', text: "Amazon SQS FIFO queue", correct: false },
          { id: 'b', text: "Amazon Kinesis Data Streams", correct: true },
          { id: 'c', text: "Amazon SNS", correct: false },
          { id: 'd', text: "AWS Batch", correct: false },
        ],
        explanation:
          "Kinesis Data Streams handles high-throughput real-time streaming with ordered records per shard and a retention window that lets multiple consumers read and replay data independently.",
        topic: "High-Performing Architectures",
      },
      {
        id: 'e2q13',
        question:
          "A company must run analytical SQL queries over petabytes of structured data in a data warehouse with high query performance. Which service is MOST appropriate?",
        options: [
          { id: 'a', text: "Amazon RDS for PostgreSQL", correct: false },
          { id: 'b', text: "Amazon Redshift", correct: true },
          { id: 'c', text: "Amazon DynamoDB", correct: false },
          { id: 'd', text: "Amazon ElastiCache", correct: false },
        ],
        explanation:
          "Amazon Redshift is a fully managed, columnar, massively parallel data warehouse optimized for complex analytical (OLAP) queries over very large datasets.",
        topic: "High-Performing Architectures",
      },
      {
        id: 'e2q14',
        question:
          "A solutions architect is designing a VPC and must choose which resources go in public versus private subnets. Which two design choices are correct? (Choose TWO.)",
        options: [
          { id: 'a', text: "Place a NAT gateway in a public subnet so private instances can reach the internet for updates", correct: true },
          { id: 'b', text: "Place the primary database in a public subnet with a public IP for easier access", correct: false },
          { id: 'c', text: "Place internet-facing load balancers in public subnets and application/database tiers in private subnets", correct: true },
          { id: 'd', text: "Attach an internet gateway directly to each private subnet", correct: false },
          { id: 'e', text: "Give every EC2 instance a public IP to simplify routing", correct: false },
        ],
        explanation:
          "Best practice places internet-facing components (load balancers, NAT gateways) in public subnets and keeps application and database tiers in private subnets. A NAT gateway in a public subnet lets private instances make outbound internet calls without being publicly reachable.",
        topic: "Secure Architectures",
      },
      {
        id: 'e2q15',
        question:
          "A company needs to grant a third-party AWS account temporary, auditable access to specific resources without sharing long-term credentials. What is the BEST approach?",
        options: [
          { id: 'a', text: "Create an IAM user in your account and share its access keys", correct: false },
          { id: 'b', text: "Create an IAM role with a trust policy allowing the third-party account to assume it", correct: true },
          { id: 'c', text: "Make the resources public and restrict by the third party IP", correct: false },
          { id: 'd', text: "Email the third party your root account credentials", correct: false },
        ],
        explanation:
          "A cross-account IAM role with a trust policy lets the third party assume the role and receive temporary credentials via STS, providing scoped, auditable access without sharing long-term keys.",
        topic: "Secure Architectures",
      },
      {
        id: 'e2q16',
        question:
          "A company wants continuous, automated recommendations to reduce cost, improve performance, and close security gaps across its account, including identifying idle resources. Which service provides these checks?",
        options: [
          { id: 'a', text: "AWS Trusted Advisor", correct: true },
          { id: 'b', text: "AWS CloudFormation", correct: false },
          { id: 'c', text: "Amazon CloudWatch", correct: false },
          { id: 'd', text: "AWS Config", correct: false },
        ],
        explanation:
          "AWS Trusted Advisor inspects an account against best-practice checks across cost optimization, performance, security, fault tolerance, and service limits, flagging things like idle or underutilized resources.",
        topic: "Cost-Optimized Architectures",
      },
      {
        id: 'e2q17',
        question:
          "A stateful application stores session data locally on EC2 instances, causing users to lose their session when an instance is replaced during scaling. What is the BEST way to make the application resilient?",
        options: [
          { id: 'a', text: "Enable sticky sessions and never scale in", correct: false },
          { id: 'b', text: "Store session state in an external store such as Amazon ElastiCache or DynamoDB", correct: true },
          { id: 'c', text: "Use larger instances so they are replaced less often", correct: false },
          { id: 'd', text: "Disable the Auto Scaling group", correct: false },
        ],
        explanation:
          "Externalizing session state to a shared store like ElastiCache or DynamoDB makes the EC2 tier stateless, so any instance can serve any user and instances can be added or removed without losing sessions.",
        topic: "Resilient Architectures",
      },
      {
        id: 'e2q18',
        question:
          "A company needs block storage for a database on EC2 that requires consistent high IOPS and low latency. Which storage option is MOST appropriate?",
        options: [
          { id: 'a', text: "Amazon S3", correct: false },
          { id: 'b', text: "Amazon EBS Provisioned IOPS SSD (io2)", correct: true },
          { id: 'c', text: "Amazon EFS", correct: false },
          { id: 'd', text: "Amazon S3 Glacier", correct: false },
        ],
        explanation:
          "EBS Provisioned IOPS SSD (io2) delivers consistent, high IOPS and low latency required by I/O-intensive databases, and lets you provision a specific IOPS level independent of volume size.",
        topic: "High-Performing Architectures",
      },
      {
        id: 'e2q19',
        question:
          "A company must ensure that data in an S3 bucket is replicated to a bucket in another AWS Region for disaster recovery and lower-latency access for a remote team. Which two S3 capabilities are required? (Choose TWO.)",
        options: [
          { id: 'a', text: "Enable versioning on the source and destination buckets", correct: true },
          { id: 'b', text: "Configure S3 Cross-Region Replication (CRR)", correct: true },
          { id: 'c', text: "Enable S3 Transfer Acceleration on the source bucket", correct: false },
          { id: 'd', text: "Enable Requester Pays on the destination bucket", correct: false },
          { id: 'e', text: "Configure a gateway VPC endpoint for S3", correct: false },
        ],
        explanation:
          "S3 Cross-Region Replication asynchronously copies objects to a bucket in another Region, and it requires versioning to be enabled on both the source and destination buckets.",
        topic: "Resilient Architectures",
      },
      {
        id: 'e2q20',
        question:
          "A company running many EC2 instances discovers most are consistently at 10% CPU and 15% memory utilization. What is the MOST effective first step to reduce cost?",
        options: [
          { id: 'a', text: "Buy Reserved Instances for the current oversized instances", correct: false },
          { id: 'b', text: "Right-size the instances to smaller types based on utilization metrics", correct: true },
          { id: 'c', text: "Move all instances to Dedicated Hosts", correct: false },
          { id: 'd', text: "Increase the instance sizes to improve headroom", correct: false },
        ],
        explanation:
          "Right-sizing to smaller instance types that match actual CPU and memory usage (using metrics from CloudWatch or Compute Optimizer) directly cuts cost before committing to Reserved Instances or Savings Plans on oversized capacity.",
        topic: "Cost-Optimized Architectures",
      },
    ],
  },
]
