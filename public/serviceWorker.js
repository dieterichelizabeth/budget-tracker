// Install the Service Worker
self.addEventListener("install", function (event) {
  console.log("Service worker is installed!");
});

// Activate the Service Worker
self.addEventListener("activate", function (event) {
  console.log("Service worker activated!");
});
