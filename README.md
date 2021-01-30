# test-survivor

npm install

npm run dev

go to localhost:3000

The App is responsive.

The database is mongoDB Atlas, you can update the status (infected) and the change is going to be added in the UI and the database. 

The app is using Nextjs API (POST/GET/PUT/DELETE methods) and staticProps for the dashboard table.

API response for success
status code 200
json resposne {success: true, data}

API response for failed requests are
status code 400
json response {success: false}

You can Add survivors with the add link and the data will be uploaded to the database (mongoDB Atlas), if you have any issue with this let me know because maybe I need to whitelist your IP.

Form has validation in the UI, all fields required, max 3 chars for numeric inputs, max 20 chars for string inputs.

In case to fail, UI will not be updated and notification will show in all requests (add new survivor, change status or remove survivor).

If more info is needed, don't hesitate to ask me.

