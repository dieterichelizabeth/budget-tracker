// Variable for connection
let db;

// Access the IndexDB database
const request = indexedDB.open("budget", 1);

// Handle database version changes
request.onupgradeneeded = function (event) {
  // Set "db" as a reference to the index.db database
  const db = event.target.result;
  // Create the "new_funds" objectStore
  db.createObjectStore("new_funds", { autoIncrement: true });
};

// If successful, save reference to db
request.onsuccess = function (event) {
  db = event.target.result;
};

// Error Handling
request.onerror = function (event) {
  console.log(event.target.errorCode);
};

// Add or Subtract Funds w/out Internet Connection
function saveRecord(record) {
  // Open a new transaction to the db
  const newTransaction = db.transaction(["new_funds"], "readwrite");

  // Access the data with key- `new_funds`
  const fundsObjectStore = newTransaction.objectStore("new_funds");

  // Add new records to the objectStore
  fundsObjectStore.add(record);
}
