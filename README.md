# Budget-Tracker 🏖

Progressive Web Applications (PWA): Budget Tracker gives users the ability to track their spending and budget on vacation. For this project, I added offline functionality to an existing budgeting application. Users can add expenses and deposits to their budget with, or without an internet connection. Users are able to interact with the application if they are offline- their information is stored in the indexDB, and retrieved as soon as they are back online to bring their "online" budget to date. So if users travel to an area with "spotty" service, they will be able to continue to track their funds. Users can clear their old budgets after each trip with the "delete budget" button.

[Click to View the Deployed Apllication]()

# Screenshots

<img width="578" alt="Screen Shot 2022-05-04 at 5 44 20 PM" src="https://user-images.githubusercontent.com/95142863/166837405-5390f42e-a152-44c0-a033-35b3b687732d.png">

# User Story

This project was developed based on the following user story and criteria

User Story:

```
AS AN avid traveler
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling
```

Criteria:

```
GIVEN a budget tracker without an internet connection
WHEN the user inputs an expense or deposit
THEN they will receive a notification that they have added an expense or deposit
WHEN the user reestablishes an internet connection
THEN the deposits or expenses added while they were offline are added to their transaction history and their totals are updated
```

# Documentation

- [IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- [IndexedDB ObjectStore](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore)
- [IndexedDB .add() Method](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/add)
- [IndexedDB Transaction](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/transaction)
- [Navigator.onLine](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine)
- [IndexedDB .getAll() Method](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/getAll)
- [IndexedDB .clear() Method](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/clear)
- [Manifest.json](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json)
- [Manifest.json start_url](https://developer.mozilla.org/en-US/docs/Web/Manifest/start_url)
- [Manifest.json display](https://developer.mozilla.org/en-US/docs/Web/Manifest/display)
- [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Cache.open()](https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/open)
- [Cache.addAll()](https://developer.mozilla.org/en-US/docs/Web/API/Cache/addAll)
- [Cache.keys()](https://developer.mozilla.org/en-US/docs/Web/API/Cache/keys)
- [Cache.delete()](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete)
- [Cache.match()](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
- [Model.deleteMany()](https://mongoosejs.com/docs/api.html#model_Model.deleteMany)

---

Made with Love

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
