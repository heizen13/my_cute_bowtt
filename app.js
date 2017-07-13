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
    appPassword: "S43HgSqqzS0SoRAmEGxcSO8"
});
var bot = new builder.UniversalBot(connector);
server.post('https://bowtt2.herokuapp.com/api/messages', connector.listen());
//Bot on
bot.on('contactRelationUpdate', function (message) {
    if (message.action === 'add') {
        var name = message.user ? message.user.name : null;
        var reply = new builder.Message()
                .address(message.address)
                .text("Hello %s... Thanks for adding me. Say 'hello' to see some great demos.", name || 'there');
        bot.send(reply);
    } else {
        // delete their data
    }
});
bot.on('typing', function (message) {
  // User is typing
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
    if(session.message.text.toLowerCase().contains('hello')){
      session.send(`Hello bruh!, Zup bruh? Howzi goin bruh?!`);
      }else if(session.message.text.toLowerCase().contains('help')){
        session.send(`How can I help you bruh? I don't have any money bruh!? but I can give you a hug..... :$ `);
          }
   else if(session.message.text.toLowerCase().contains('who are you?')){
        session.send("Hello, I'm bowtt and I'm a cute bot. Some people tells me that I look like a balls and a butt.");
      }
   
   
   else{
        session.send(`Sorry bruh I don't understand you...`);
      }
});
 
