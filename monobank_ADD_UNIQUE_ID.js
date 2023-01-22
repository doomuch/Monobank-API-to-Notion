

const { Client } = require('@notionhq/client');
const notion = new Client({ auth: "PASTE YOUR TOKEN HERE" });

const queryDatabase = require('./../helpers/findAccount')

const ENTRIES_DATABASE_ID = "paste it here";
const accountDatabaseID = "paste it here";

/**
 * An HTTP endpoint that acts as a webhook for HTTP(S) request event
 * @returns {any} result
 */
module.exports = async (context) => {

  if (context.http.method === 'POST') {
    console.log(context.http.body)
    let jsonData = JSON.parse(context.http.body);
    
    (async () => {
      const account = await queryDatabase(accountDatabaseID, jsonData.data.account);
    
      const response = await notion.pages.create({
        "parent": {
          "type": "database_id",
          "database_id": ENTRIES_DATABASE_ID
        },
        "properties": {
          "Account": {
            "relation": [
              {
                "id": account
              }
            ]
          },
          "Date": {
            "date": {
              "start": new Date().toISOString()
            }
          },
          "Expense": {
            "title": [
              {
                "text": {
                  "content": jsonData.data.statementItem.description
                }
              }
            ]
          },
          "Amount": {
            "number": jsonData.data.statementItem.amount/100
          },
          
        }
      });
      console.log(response);
    })();
    
    
    return {
      statusCode: 200,
    };
  } else {
    throw new Error('We only respond to POST!');
  }

};



