const { Client } = require('@notionhq/client');

const notion = new Client({ auth: "PASTE YOUR TOKEN HERE" });

const queryDatabase = async (monoDatabaseId, monoAccountID) => {
  const response = await notion.databases.query({
    database_id: monoDatabaseId,
    filter: {
      and: [
        {
          property: 'Account ID',
          rich_text: {
            equals: monoAccountID
          }
        }
      ]
    }
  });
  
  if (response.results[0]?.id) return response.results[0].id
  
  return createPage(monoDatabaseId, "New Account", monoAccountID)
  
}

const createPage = async (monoDatabaseId, monoName, accountId) => {
  const response = await notion.pages.create({
    "parent": {
      "type": "database_id",
      "database_id": monoDatabaseId
    },
    "properties": {
      "Name": {
        "title": [
          {
            "text": {
              "content": monoName
            }
          }
        ]
      },
      "Account ID": {
        "rich_text": [
          {
            "text": {
              "content": accountId
            }
          }
        ]
      }
    }
  });
  return response.id;
}

module.exports = queryDatabase
