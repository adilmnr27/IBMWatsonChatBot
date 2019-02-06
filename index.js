//initialize dotenv

/**
 * https://console.bluemix.net/apidocs/assistant?language=node
 */
const dotenv = require('dotenv');
dotenv.config()
const ConversationV1 = require('watson-developer-cloud/conversation/v1');

var AssistantV1 = require('watson-developer-cloud/assistant/v1');

var assistant = new AssistantV1({
  version: '{version}',
  iam_apikey: '{apikey}',
  url: '{url}'
});

//instance of the conversation serives
const conversation = new ConversationV1({
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    version_date: ConversationV1.VERSION_DATE_2016_09_20
});
//request to watson api
conversation.message({
    input: {
        text: ' '
    },
    workspace_id: process.env.WORKSPACE_ID
}, function (err, response) {
    if (err) {
        console.error(err);
    } else {
        console.log(JSON.stringify(response, null, 2));
    }
});