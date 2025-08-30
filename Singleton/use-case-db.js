class DB {
  get() {
    console.log("fetching data from db...");
  }

  inserting() {
    console.log("inserting data in db...");
  }
}

export default new DB();
