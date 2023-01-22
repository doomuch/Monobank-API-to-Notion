# Monobank-API-to-Notion
Use webhooks to add expenses to your Notion

1. Create account at https://autocode.com/

2. Upload the main file to "functions" section and findAccount.js to helpers
<img width="259" alt="image" src="https://user-images.githubusercontent.com/80600884/213930488-1dcf441f-73cc-438a-baab-f1f377c9a55e.png">

3. Ensure that the files are safe and no one tries to steal your data

4. Add your Databases ids and Notion tokens to main file and just Notion token to findAccount.js

5. Save both files

6. Grab the link to the endpoint from the bottom of the main file. It should look like that:
<img width="305" alt="image" src="https://user-images.githubusercontent.com/80600884/213930689-9fa12a85-a31c-4381-9c99-1d2779a89c3a.png">

## Set up Webhook

1. You need get your API token here: https://api.monobank.ua/  

2. Send POST request to Notion. You can use postman.com for that. Here is API refference: https://api.monobank.ua/docs/#tag/Kliyentski-personalni-dani/paths/~1personal~1webhook/post
