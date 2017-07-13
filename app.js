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
                .text("Hello bruh %s... Salamat sa pag-add sakin. :$ ", name || 'there');
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
      session.send(`Hello bruh!, Zup bruh? Astig mo bruh %s !!!`, message.user);
      }else if(session.message.text.toLowerCase().contains('help')){
        session.send(`How can I help you bruh? I don't have any money... b-but I can give you a hug..... :$ `);
          }
   else if(session.message.text.toLowerCase().contains('who are you') | session.message.text.toLowerCase().contains('sino ka')){
        session.send("Hello, I'm bowtt. Some people tells me that I look like a balls and a butt but who cares, I'm still a cute bot. ;) ");
      }
  
   else if(session.message.text.toLowerCase().contains('dubidubidap')){
      session.send(`Beep beep beep.. ang sabi ng jeep.. beep beep beep beep bee-beep beep!!!`);
      }
   else if(session.message.text.toLowerCase().contains('delinquent')){
      session.send(`Timesheet-timesheet din kasi pag may time!!! (cwl) `);
      }
   
   else if(session.message.text.toLowerCase().contains('uwian') | session.message.text.toLowerCase().contains('tara uwi')){
      session.send(`Edi umuwi ka! Yan lang naman habol mo bago ka pumasok. Gusto mo na agad umuwi!!! |-( `);
      }
   else if(session.message.text.toLowerCase().contains('suplado') | session.message.text.toLowerCase().contains('galit')){
      session.send(` (donttalk) `);
      }
else if(session.message.text.toLowerCase().contains('meron ka ba ngayon')){
      session.send(`gago haha`);
      }
   
   else if(session.message.text.toLowerCase().contains('search pokemon')){
      session.send(`....`);
      }

   else{
        session.send(`Sorry bruh I don't understand you... Jejemon ka yata? :D `);
      }
});
 
