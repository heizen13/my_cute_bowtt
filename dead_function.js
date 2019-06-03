var restify = require('restify');
var builder = require('botbuilder');

//=========================================================
// Bot Setup
//=========================================================
// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 8080, function () {
   console.log('%s listening to %s', server.name, server.url);
});
// Create chat bot
var connector = new builder.ChatConnector({

    appId: "7f54774d-801c-44b1-be4b-d32ec508a1b2",
    appPassword: "04pDdx0RTD8KNRfDhurx1Jf"

});
// Create bot and default message handler
var bot = new builder.UniversalBot(connector);

server.post('https://bowtt2.herokuapp.com/api/messages', connector.listen());
//Bot on
bot.on('contactRelationUpdate', function (message) {
    if (message.action === 'add') {
        var name = message.user ? message.user.name : null;
        var reply = new builder.Message()
                .address(message.address)
                .text("Hello bruh %s... Salamat sa pag-add sakin. :$ ", name || 'there');
        bot.send(reply);
    } else {
        // delete their data
    }
});
bot.on('deleteUserData', function (message) {
    // User asked to delete their data
});

//=========================================================
// Bots Dialogs
//=========================================================
String.prototype.contains = function(content){
  return this.indexOf(content) !== -1;
}
bot.dialog('/', function (session) {
var msgValue = session.message.text.toLowerCase();
var userValue = session.message.user.name;
function getMessage(value){
  return value;
}
function getUser(value){
  return value;
}
   
var msgAry = ["Sorry, down si aqouh weh~!",
 ];
   
 if(false){

}else{
   var random = Math.floor((Math.random() * 10) + 1);
   session.send(getUser(userValue) + "! "+msgAry[random]);
   //session.send("Ohayo~! " + getUser(userValue) + "-san! Downu zi aku desu~!");
  }
});
