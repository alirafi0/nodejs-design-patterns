// product
class Query {
  limit;
  orderBy;
  groupBy;
  table;
  data;
  where;
  action;
}

// builder
class QueryBuilderInterface {
  limit() {
    throw new Error("limit method must be implement.");
  }

  orderBy() {
    throw new Error("orderBy method must be implement.");
  }

  groupBy() {
    throw new Error("groupBy method must be implement.");
  }

  table() {
    throw new Error("table method must be implement.");
  }

  where() {
    throw new Error("where method must be implement.");
  }

  insert() {
    throw new Error("insert method must be implement.");
  }

  get() {
    throw new Error("get method must be implement.");
  }

  delete() {
    throw new Error("delete method must be implement.");
  }

  update() {
    throw new Error("update method must be implement.");
  }

  build() {
    throw new Error("build method must be implement.");
  }
}

// concrete builder
class MysqlQueryBuilder extends QueryBuilderInterface {
  constructor() {
    super();
    this.query = new Query();
  }

  limit(limit) {
    this.query.limit = limit;
    return this;
  }

  orderBy(orderBy) {
    this.query.orderBy = orderBy;
    return this;
  }

  groupBy(groupBy) {
    this.query.groupBy = groupBy;
    return this;
  }

  table(table) {
    this.query.table = table;
    return this;
  }

  where(where) {
    this.query.where = where;
    return this;
  }

  insert(data) {
    this.query.data = data; // data: {field1: value1, field2: value2, ...}
    this.query.action = "insert";
    return this;
  }

  get() {
    this.query.action = "get";
    return this;
  }

  delete() {
    this.query.action = "delete";
    return this;
  }

  update(data) {
    this.query.data = data;
    this.query.action = "update";
    return this;
  }

  build() {
    const q = this.query;
    if (!q.table) throw new Error("Table is required");

    let sql = "";

    switch (q.action) {
      case "get":
        sql = `SELECT * FROM ${q.table}`;
        if (q.where) sql += ` WHERE ${q.where}`;
        if (q.groupBy) sql += ` GROUP BY ${q.groupBy}`;
        if (q.orderBy) sql += ` ORDER BY ${q.orderBy}`;
        if (q.limit) sql += ` LIMIT ${q.limit}`;
        break;

      case "insert":
        if (!q.data || Object.keys(q.data).length === 0)
          throw new Error("Insert data is required");
        const fields = Object.keys(q.data).join(", ");
        const values = Object.values(q.data)
          .map((v) => (typeof v === "string" ? `'${v}'` : v))
          .join(", ");
        sql = `INSERT INTO ${q.table} (${fields}) VALUES (${values})`;
        break;

      case "update":
        if (!q.data || Object.keys(q.data).length === 0)
          throw new Error("Update data is required");
        const setClause = Object.entries(q.data)
          .map(
            ([key, value]) =>
              `${key}=${typeof value === "string" ? `'${value}'` : value}`
          )
          .join(", ");
        sql = `UPDATE ${q.table} SET ${setClause}`;
        if (q.where) sql += ` WHERE ${q.where}`;
        break;

      case "delete":
        sql = `DELETE FROM ${q.table}`;
        if (q.where) sql += ` WHERE ${q.where}`;
        break;

      default:
        throw new Error("Action not specified");
    }

    return sql;
  }
}

//client
const queryBuilder = new MysqlQueryBuilder();
const query = queryBuilder
  .table("users")
  .get()
  .where("age > 18")
  .limit(10)
  .build();

console.log(query);
