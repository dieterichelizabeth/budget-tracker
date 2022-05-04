const appName = "BudgetTracker-";
const version = "v1";
const CACHE_NAME = appName + version;
const CACHE_FILES = [
  "./index.html",
  "./css/styles.css",
  "./js/idb.js",
  "./js/index.js",
];

// Install the Service Worker
self.addEventListener("install", function (event) {
  // console.log("Service worker is installed!");

  // Add all cache files
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(CACHE_FILES);
    })
  );
});

// Activate the Service Worker
self.addEventListener("activate", function (event) {
  // console.log("Service worker activated!");

  // Remove old caches
  event.waitUntil(
    // Loop through caches
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.filter(function (cache) {
          // If the key name in Cache Storage does not equal CACHE_NAME, delete it
          if (cache !== CACHE_NAME) {
            console.log("Cleaning Cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch Cached Files
self.addEventListener("fetch", function (event) {
  console.log("Offline: Service Worker Fetching files");
});
