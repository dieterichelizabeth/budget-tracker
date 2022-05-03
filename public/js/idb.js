// Variable for connection
let db;

// Establish Connection - IndexDB database
const request = indexedDB.open("budget", 1);

// this event will emit if the database version changes (nonexistant to version 1, v1 to v2, etc.)
request.onupgradeneeded = function (event) {
  // save a reference to the database
  const db = event.target.result;
  // create an object store (table) called `new_funds`, set it to have an auto incrementing primary key of sorts
  db.createObjectStore("new_funds", { autoIncrement: true });
};

request.onsuccess = function (event) {
  // If db succeffully created, save reference to db global variable
  db = event.target.result;

  // check if app is online, if yes run sendTransaction() function to send all local db data to api
  if (navigator.onLine) {
    // upload any remnant funds data
    sendTransaction();
  }
};

// Error Handling
request.onerror = function (event) {
  console.log(event.target.errorCode);
};

// Add or Subtract Funds w/out Internet Connection
function saveRecord(record) {
  // open a new transaction with the database with read and write permissions
  const transaction = db.transaction(["new_funds"], "readwrite");

  // access the object store for `new_funds`
  const fundsObjectStore = transaction.objectStore("new_funds");

  // add record to your store with add method
  fundsObjectStore.add(record);
}

function uploadFunds() {
  // open a transaction on your db
  const transaction = db.transaction(["new_funds"], "readwrite");

  // access your object store
  const fundsObjectStore = transaction.objectStore("new_funds");

  // get all records from store and set to a variable
  const getAll = fundsObjectStore.getAll();

  // upon a successful .getAll() execution, run this function
  getAll.onsuccess = function () {
    // if there was data in indexedDb's store, let's send it to the api server
    if (getAll.result.length > 0) {
      fetch("/api/transaction/bulk", {
        method: "POST",
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((serverResponse) => {
          if (serverResponse.message) {
            throw new Error(serverResponse);
          }
          // open one more transaction
          const transaction = db.transaction(["new_funds"], "readwrite");
          // access the new_funds object store
          const fundsObjectStore = transaction.objectStore("new_funds");
          // clear all items in your store
          fundsObjectStore.clear();

          alert("All saved funds has been submitted!");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
}

// listen for app coming back online
window.addEventListener("online", uploadFunds);
