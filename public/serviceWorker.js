const appName = "BudgetTracker-";
const version = "v1";
const CACHE_NAME = appName + version;
const CACHE_FILES = [
  "./index.html",
  "./css/style.css",
  "./js/idb.js",
  "./js/index.js",
];

// Install the Service Worker
self.addEventListener("install", function (event) {
  console.log("Service worker is installed!");
});

// Activate the Service Worker
self.addEventListener("activate", function (event) {
  console.log("Service worker activated!");
});
