# BCS701A — Big Data Analytics

> **VTU B.E. CSE | 2022 Scheme | 7th Semester**

---

## 📋 Course Information

| Field | Details |
|---|---|
| **Subject Name** | Big Data Analytics |
| **Subject Code** | BCS701A |
| **Semester** | 7th |
| **Credits** | 04 |
| **Teaching Hours/Week** | 3L : 0T : 2P : 0S |
| **Total Pedagogy Hours** | 40 Theory + Lab |
| **CIE Marks** | 50 |
| **SEE Marks** | 50 |
| **Total Marks** | 100 |
| **Exam Duration** | 3 Hours |

---

## 🎯 Course Objectives

1. Understand the characteristics of Big Data, 5 V's, and distributed computing architectures.
2. Master the Apache Hadoop framework, HDFS file system, and YARN resource management.
3. Learn MapReduce programming paradigm and design patterns for distributed analytics.
4. Gain expertise in Apache Spark, Resilient Distributed Datasets (RDDs), DataFrames, and Spark SQL.
5. Explore NoSQL databases, stream processing (Kafka), and predictive analytics on large datasets.

---

## 📚 Module-Wise Syllabus

### Module 1: Introduction to Big Data & Hadoop Architecture
- Defining Big Data: The 5 V's (Volume, Velocity, Variety, Veracity, Value)
- Challenges of Conventional Systems and Motivations for Distributed Storage and Processing
- Hadoop Distributed File System (HDFS): HDFS Architecture, NameNode, DataNode, Secondary NameNode
- HDFS Operations: Block size, Replication factor, File read and write workflows, Rack awareness
- YARN (Yet Another Resource Negotiator): Resource Manager, Node Manager, Application Master, Container lifecycle

### Module 2: MapReduce Programming Paradigm
- MapReduce Framework: Conceptual overview, Key-Value pairs, Map phase, Shuffle and Sort, Reduce phase
- Writing MapReduce Programs: Mapper class, Reducer class, Driver class
- MapReduce Data Types: Writable and WritableComparable interfaces
- Combiner Functions and Custom Partitioners
- Debugging and Optimizing MapReduce Jobs: Input formats (TextInputFormat, KeyValueTextInputFormat), Output formats

### Module 3: Apache Spark Architecture & RDD Programming
- Limitations of Hadoop MapReduce (Disk I/O latency, iterative computation overhead)
- Apache Spark Fundamentals: In-memory computing, Spark Core architecture, Driver program, Cluster Manager, Executors
- Resilient Distributed Datasets (RDDs): Immutability, Fault tolerance via Lineage graphs
- RDD Operations: Transformations (map, filter, flatMap, groupByKey, reduceByKey) and Actions (count, collect, take, saveAsTextFile)
- Persistence and Caching strategies in Spark

### Module 4: Spark SQL, DataFrames & Data Warehousing
- Spark SQL and DataFrames: Schema creation, DataFrame operations, Interoperability between RDDs and DataFrames
- Spark SQL Queries: Querying structured data, Temporary views, User-Defined Functions (UDFs)
- Introduction to Apache Hive: Hive architecture, HiveQL, Managed vs External tables, Partitioning and Bucketing
- Introduction to Apache Pig: Pig Latin fundamentals, Load, Transform, Dump/Store

### Module 5: Stream Processing & Big Data Machine Learning
- Real-Time Stream Processing: Challenges, Micro-batching vs Native streaming
- Apache Kafka: Architecture, Topics, Partitions, Producers, Consumers, Consumer Groups, Broker clusters
- Spark Streaming: DStreams, Windowed operations, Structured Streaming with DataFrames
- Machine Learning at Scale: Spark MLlib (Pipelines, Transformers, Estimators), Classification, Regression, and Clustering on Big Data
- NoSQL Integration: Storing analytical results in HBase and Cassandra

---

## ✅ Course Outcomes (COs)

| CO | Description |
|---|---|
| **CO1** | Explain Big Data distributed storage and compute frameworks using HDFS and YARN. |
| **CO2** | Develop distributed data processing jobs using MapReduce programming abstractions. |
| **CO3** | Implement high-throughput in-memory data transformation pipelines using Apache Spark RDDs. |
| **CO4** | Execute relational queries and transformations on structured big data using Spark SQL and Hive. |
| **CO5** | Design streaming analytics pipelines with Apache Kafka and train distributed ML models with Spark MLlib. |

---

## 📖 Textbooks & References

- **Hadoop: The Definitive Guide** — Tom White, 4th Edition, O'Reilly Media.
- **Learning Spark: Lightning-Fast Data Analytics** — Jules S. Damji, Brooke Wenig, Tathagata Das, Denny Lee, 2nd Edition, O'Reilly.
- **Big Data Analytics with Spark** — Mohammed Guller, Apress.

---

> ⚠️ *Always refer to the official VTU website or your college's academic portal for the most current syllabus updates.*
