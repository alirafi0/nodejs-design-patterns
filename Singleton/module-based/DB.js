class DB {
  get() {
    console.log("fetching data from db...");
  }
  insert() {
    console.log("inserting data to db...");
  }
}

export default new DB();
