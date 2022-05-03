// Variable for connection
let db;

// Establish Connection - IndexDB database
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
