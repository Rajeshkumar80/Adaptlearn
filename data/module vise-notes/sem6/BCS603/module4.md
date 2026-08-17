# BCS603 — Full Stack Web Development

## Module 4: NoSQL Databases & MongoDB Integration

### Relational (SQL) vs NoSQL Databases (asked in 2023 PYQ)

- **Relational databases (SQL)** store data in tables with fixed schemas, rows and columns, linked by foreign keys; they support ACID transactions and use SQL for queries.
- **NoSQL databases** are non-relational, schema-flexible stores designed for horizontal scaling and large volumes of semi/unstructured data; they trade strict consistency for scalability.
- Comparison table:

| Aspect | SQL (Relational) | NoSQL |
| :--- | :--- | :--- |
| Model | Tables, rows, columns | Documents, key-value, wide-column, graph |
| Schema | Fixed, predefined | Flexible, dynamic |
| Scalability | Vertical (bigger server) | Horizontal (distribute across servers) |
| Transactions | ACID (strong consistency) | BASE (eventual consistency) |
| Query language | SQL | Varies (e.g., MongoDB query language) |
| Relations | Foreign keys, JOINs | References/embedding, aggregation |
| Best for | Complex queries, strict integrity | High volume, fast iteration, big data |

- **ACID**: Atomicity, Consistency, Isolation, Durability — guarantees of SQL transactions.
- **BASE**: Basically Available, Soft state, Eventually consistent — the NoSQL trade-off.
- NoSQL types: **document** (MongoDB, CouchDB), **key-value** (Redis, DynamoDB), **wide-column** (Cassandra, HBase), **graph** (Neo4j).

### MongoDB and Document Databases

- **MongoDB** is an open-source, cross-platform **document-oriented NoSQL database**; data is stored as BSON (Binary JSON) documents in collections.
- Terminology mapping (frequently asked):

| SQL term | MongoDB term |
| :--- | :--- |
| Database | Database |
| Table | Collection |
| Row | Document |
| Column | Field |
| Primary key | `_id` (ObjectId) |
| Index | Index |
| JOIN | $lookup / population |

- **Document**: a JSON-like structure of field-value pairs, `{ "_id": ObjectId("..."), "name": "Laptop", "price": 49999 }`; fields can be strings, numbers, booleans, arrays, nested objects.
- **Collection**: a group of documents — analogous to a table, but documents in a collection need NOT share the same structure (schema-less).
- Benefits: flexible schema, horizontal scaling (sharding), built-in replication (replica sets), rich query language, aggregation pipeline, fast development.

### MongoDB CRUD Operations (Mongo Shell)

- `use shop` — create/switch database; `show dbs`, `show collections`.
- **Create (C)**: `db.products.insertOne({ name: "Laptop", price: 49999 })` and `db.products.insertMany([{...}, {...}])`; auto-generates `_id`.
- **Read (R)**: `db.products.find({ price: { $gt: 30000 } })` returns a cursor; `.pretty()` formats; `findOne({ name: "Laptop" })`; projection: `find({}, { name: 1, _id: 0 })`.
- Query operators: `$eq`, `$ne`, `$gt`, `$gte`, `$lt`, `$lte`, `$in`, `$nin`, `$exists`, `$regex`; logical: `$and`, `$or`, `$not`.
- **Update (U)**: `db.products.updateOne({ _id: ... }, { $set: { price: 45000 } })` — `$set` only updates given fields; `updateMany`, `replaceOne`; returns `{ matchedCount, modifiedCount }`.
- **Delete (D)**: `db.products.deleteOne({ name: "Laptop" })`, `db.products.deleteMany({ price: { $lt: 1000 } })`; returns `{ deletedCount }`.
- Utility: `db.products.countDocuments({})`, `db.products.sort({ price: -1 })`, `.limit(n)`, `.skip(n)`.
- `_id` is immutable and unique; `ObjectId` is a 12-byte value (timestamp + machine + process + counter).

### The Aggregation Pipeline (asked in 2024 PYQ)

- The **aggregation pipeline** processes documents through sequential stages to transform, group, and compute results — MongoDB's answer to GROUP BY/JOIN in SQL.
- Syntax: `db.collection.aggregate([ stage1, stage2, ... ])` — each stage takes input docs and outputs transformed docs.
- Key stages:
  - `$match`: filters documents (like WHERE) — put early to reduce pipeline load.
  - `$group`: groups by key and computes aggregates: `{ _id: "$category", total: { $sum: "$price" }, count: { $sum: 1 } }`.
  - `$project`: selects/reshapes fields, computes new fields.
  - `$sort`: sorts output `{ price: -1 }` (desc) or `1` (asc).
  - Others: `$limit`, `$skip`, `$unwind` (flatten arrays), `$lookup` (join with another collection), `$count`.
- Accumulators inside `$group`: `$sum`, `$avg`, `$min`, `$max`, `$push`, `$first`, `$last`.

```
[DIAGRAM: Aggregation pipeline example
 orders --> $match {status:"shipped"} --> $group by customer, $sum total -->
 $sort {total:-1} --> $limit 5 --> result (top 5 customers by spend)
]
```

- Example: `db.orders.aggregate([ { $match: { status: "shipped" } }, { $group: { _id: "$customerId", total: { $sum: "$amount" } } }, { $sort: { total: -1 } } ])`.

### Mongoose ODM Overview

- **Mongoose** is an **ODM (Object Document Mapper)** for MongoDB and Node.js — it provides a schema-based solution to model application data and a translation layer between MongoDB documents and JavaScript objects.
- Key benefits: schema validation, middleware (hooks), type casting, population for references, model methods and statics, easy connection to Atlas.
- Setup: `const mongoose = require('mongoose'); mongoose.connect('mongodb://127.0.0.1:27017/shop')` — returns a Promise; use `mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })` (modern drivers accept plain uri).

### Schemas and Models

- **Schema**: defines the structure, field types, defaults, and validation rules for documents in a collection — the blueprint.
- **Model**: a compiled constructor built from a schema — used to create, read, update, and delete documents of that schema.
- Example:
  - `const productSchema = new mongoose.Schema({ name: String, price: Number, inStock: { type: Boolean, default: true } });`
  - `const Product = mongoose.model('Product', productSchema);` — collection name is the lowercased, pluralized model name (`products`).
- Mongoose data types: `String`, `Number`, `Boolean`, `Date`, `Buffer`, `ObjectId`, `Array`, `Mixed`, `Decimal128`.
- Document operations: `new Product(data).save()`, `Product.create(data)`, `Product.find()`, `Product.findById(id)`, `Product.findByIdAndUpdate(id, update, { new: true })`, `Product.findByIdAndDelete(id)` — all return Promises.

### Data Validation in Mongoose (2024 PYQ — Order Schema)

- Validation rules are defined in the schema:
  - **Required**: `required: true` or `required: [true, 'message']`.
  - **Type**: `type: Number` throws on wrong type.
  - **Enum**: `enum: ['pending', 'shipped', 'delivered']` — value must be in the list.
  - **Min/Max**: `min: 1, max: 100` (numbers), `minlength`, `maxlength` (strings).
  - **Match**: `match: /regex/` (string pattern).
  - **Default**: `default: Date.now` (function for dynamic values).
  - **Custom validator**: `validate: { validator: fn, message: '...' }`.
- Validation runs on `save()`/`create()`, not on plain update queries (use `runValidators: true` for `findByIdAndUpdate`).
- Example E-commerce Order schema (2024 PYQ):

```
[DIAGRAM: Order document schema (Mongoose)
 Order {
   user: ObjectId (ref User),
   items: [{ product: ObjectId (ref Product), quantity: Number (min 1), price: Number }],
   totalPrice: Number (required, min 0),
   status: String (enum: pending/shipped/delivered/cancelled, default 'pending'),
   timestamps: true  (createdAt, updatedAt auto)
 }
]
```

### Mongoose Middleware (Hooks)

- Mongoose middleware (pre/post hooks) runs at specific points in the document lifecycle: `validate`, `save`, `remove`, and on query methods `findOneAndUpdate`, `deleteOne`.
- **pre hooks** run before the operation: `schema.pre('save', async function(next) { this.password = await bcrypt.hash(this.password, 10); next(); });` — commonly used to hash passwords before saving.
- **post hooks** run after the operation: `schema.post('save', function(doc) { console.log('saved', doc); });`.
- `this` refers to the document being saved (for document hooks); the query for query hooks; `next()` continues the flow (optional with async/await).

### Population (Relationships) (asked in 2023 PYQ)

- **Population** is Mongoose's way of resolving references between collections — replacing an `ObjectId` field with the actual referenced document(s).
- Two ways to model relationships:
  - **Embedding**: store subdocuments inside the parent document (good for one-to-few, always-read-together data).
  - **Referencing**: store an `_id` pointing to another collection (good for one-to-many / many-to-many), resolved with `.populate()`.
- Setup: field declared with `ref`: `user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }`.
- Query: `Order.find().populate('user')` — replaces the id with the User document; array fields: `populate('items.product')`; nested paths supported.
- One-to-many: `User` has many `Post`s — store `author: ObjectId` in Post and populate; `{ $push }` to an array of ids is an alternative.

```
[DIAGRAM: Population (one-to-many)
 User(1) ----< Post(n): Post.author = User._id
 Order.find().populate('user') 
 => order.user  becomes the full User document (not just the id)
]
```

- Embedding vs referencing:

| Aspect | Embedding (subdocs) | Referencing (ObjectId + populate) |
| :--- | :--- | :--- |
| Data locality | All in one document, one read | Requires extra query (populate) |
| Use case | One-to-few (addresses, items) | One-to-many / many-to-many |
| Consistency | Stored together | Can drift, needs care |
| Size | Limited by 16MB doc limit | Unlimited |
| Update | Update whole doc | Independent updates |

### Connecting Express to MongoDB Atlas

- **MongoDB Atlas** is MongoDB's fully-managed cloud database service (free M0 tier for learning).
- Steps: create cluster → create database user → get connection string (URI): `mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/<dbname>`.
- Connect from Express: `mongoose.connect(process.env.MONGO_URI)` — store the URI in a `.env` file (never hardcode credentials), loaded via `dotenv`.
- Connection events: `mongoose.connection.on('connected' / 'error' / 'disconnected', handler)`.
- The server should listen only after a successful connection (or fail fast): `app.listen(3000)` after `await mongoose.connect(uri)`.
- Security: network access (allow your IP), strong password, `NODE_ENV` for production.

### Exam-Focused Summary

- Compare SQL vs NoSQL; define document/collection/field mapping; BASE vs ACID (2023 PYQ).
- Write MongoDB shell CRUD queries (`insertOne`, `find`, `updateOne`, `deleteMany`) (2023 PYQ).
- Explain the aggregation pipeline stages `$match`, `$group`, `$project`, `$sort` (2024 PYQ).
- Define a Mongoose Order schema with validation: items array, totalPrice, status enum, timestamps (2024 PYQ).
- Explain Mongoose population for one-to-many relationships (2023 PYQ).
- Explain schema, model, `pre` middleware for hashing, and connecting Express to Atlas.
