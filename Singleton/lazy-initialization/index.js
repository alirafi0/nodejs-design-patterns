class DB {
  static instance;
  constructor() {
    if (DB.instance) return DB.instance;
    DB.instance = this;
  }

  get() {
    console.log("fetching data from db...");
  }

  insert() {
    console.log("inserting data to db...");
  }
}

const db1 = new DB();
db1.get();
const db2 = new DB();
db2.insert();

console.log(db1 === db2);
