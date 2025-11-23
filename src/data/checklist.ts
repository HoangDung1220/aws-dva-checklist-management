export interface ChecklistGroup {
    week: string;
    items: string[];
}


export const checklist: ChecklistGroup[] = [
    {
        week: "Week 1: Cloud Basics + IAM",
        items: [
            "Cloud models (IaaS/PaaS/SaaS)",
            "Regions & AZs",
            "Shared Responsibility Model",
            "IAM Users/Groups/Roles",
            "IAM Policies JSON",
            "STS AssumeRole",
            "AWS CLI practice"
        ]
    },
    {
        week: "Week 2: S3 & DynamoDB",
        items: [
            "S3: CRUD, Versioning, Lifecycle",
            "DynamoDB: PK/SK, RCU/WCU, Query",
            "Practice: Upload file and insert record"
        ]
    },
    {
        week: "Week 3: Lambda & API Gateway",
        items: [
            "Lambda basics: timeout, memory, layers",
            "API Gateway: REST vs HTTP, stages",
            "Practice: Lambda handles request"
        ]
    },
    {
        week: "Week 4: Advanced Lambda",
        items: [
            "Error handling, DLQ, retry policy",
            "Event triggers: S3 & DynamoDB Streams"
        ]
    },
    {
        week: "Week 5: SQS / SNS / EventBridge",
        items: [
            "SQS: Standard vs FIFO, DLQ",
            "SNS: pub/sub and fan-out",
            "EventBridge rules & schedule"
        ]
    },
    {
        week: "Week 6: Advanced DynamoDB & Step Functions",
        items: [
            "LSI / GSI / Conditional writes / Transactions",
            "Step Functions basics: Task, Choice, Retry"
        ]
    },
    {
        week: "Week 7: CI/CD",
        items: [
            "CodeCommit / CodeBuild / CodePipeline",
            "Deploy Lambda with CodeDeploy"
        ]
    },
    {
        week: "Week 8: Observability",
        items: [
            "CloudWatch Logs & Metrics",
            "X-Ray tracing & CloudTrail"
        ]
    },
    {
        week: "Week 9: Project (Serverless app)",
        items: [
            "Build Order Processing (API + Lambda + DynamoDB)",
            "Add SQS & SNS and observability"
        ]
    },
    {
        week: "Week 10: Practice Exams 1 & 2",
        items: [
            "Mock exam Set 1",
            "Review mistakes & revise topics"
        ]
    },
    {
        week: "Week 11: Practice Exams 3 & 4",
        items: [
            "Mock exam Set 3",
            "Focus: API Gateway, Step Functions"
        ]
    },
    {
    week: "Week 12: Final Revision",
    items: [
        "3 full mock exams under time",
        "Finalize notes & mindmap"
    ]
    }
];