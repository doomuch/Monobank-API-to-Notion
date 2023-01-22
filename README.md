# Monobank-API-to-Notion
Use webhooks to add expenses to your Notion

## Set up Notion

1. Duplicate the template: https://rubickwilde.notion.site/Mono-APP-f19fe9c1c15c4efaaabb2fa69b37d53c

2. Create an integration here: https://www.notion.so/my-integrations

3. Copy the token 

4. Share the duplicated page with integreation

<img width="315" alt="image" src="https://user-images.githubusercontent.com/80600884/213931672-9ce4fdf4-102a-4aee-8069-ab83dd79dca4.png"> <img width="295" alt="image" src="https://user-images.githubusercontent.com/80600884/213931677-f37e681e-c5c9-4670-b722-4aa8a30c36a8.png">



## Set up Autocode

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
