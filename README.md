# test-survivor

npm install

npm run dev

go to localhost:3000

The App is responsive.

/// API ///

localhost:3000/api/survivors

The app is using Nextjs API (POST/GET/PUT/DELETE methods) and staticProps for the dashboard table.

API response for success request are
status code 200
json resposne {success: true, data} or {success: true}

API response for failed requests are
status code 400
json response {success: false}

/// DB ///

The database is mongoDB Atlas, you can update the status (infected) and the change is going to be added in the UI and the database.

Notifications are added every time you perform a task.

/// ADD SURVIVOR ///

You can Add survivors with the add link and the data will be uploaded to the database (mongoDB Atlas), if you have any issue with this let me know because maybe I need to whitelist your IP.

Form has validation in the UI, all fields required, max 3 chars for numeric inputs, max 20 chars for string inputs.

/// FILTERS ///

You can add filters (YES/NO) in the Infected Column from the Dashboard.

You can make a search in the Name Column from the Dashboard.

/// CHANGE STATUS ///

You can change the Infected status inside Review window, the whole UI will reflect the change and also the db.

/// NOTIFICATIONS, MODALS & UI ///

Notification message (Success / Error) will show in all requests (add new survivor, change status or remove survivor).

Remove Survivor will show a modal to confirm the task.

Statistics at the bottom are updated in every change.


/// ERRORS ///

If there is a connection problem with any request, redux will not dispatch any action and the UI will not be updated.

If more info is needed, don't hesitate to ask me.

