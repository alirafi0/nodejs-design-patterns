import db from "./DB.js";
import db2 from "./DB.js";

db.get();
db.insert();

db2.get();
db2.insert();

console.log(db === db2);
