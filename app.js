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
var msgValue = session.message.text.toLowerCase();
var userValue = session.message.user.name;
function getMessage(value){
  return value;
}
function getUser(value){
  return value;
}
 if(false){
    
}else{
   var random = Math.floor((Math.random() * 3) + 1);
      if(random==1){
        session.send("Hi " + getUser(userValue) + "! Sorry, down si aqouh weh~!");
      }else if(random==2){
         session.send("Hi " + getUser(userValue) + "! Sorry, sira mga function ko!");
      }else if(random==3){
         session.send("Hi " + getUser(userValue) + "! Kulit mo!! Down nga si aqouh~!!! Kulet netoy!");
      }else if(random==4){
         session.send("Hi " + getUser(userValue) + "! I'm already dead.");
      }else if(random==5){
         session.send("Hi " + getUser(userValue) + "! I'm dead inside and out.");
      }else if(random==6){
         session.send("Hi " + getUser(userValue) + "! Down muna ako. Baka saniban ako ni Ultron.");
      }else if(random==7){
         session.send("Hi " + getUser(userValue) + "! Idol si Vision. Kaso... I'll never be like my idol Y__Y.");
      }else if(random==8){
         session.send("Hi " + getUser(userValue) + "! (music) Get up, come on get down with the sickness! (rock)");
      }else if(random==9){
         session.send("(music) Hello darkness my old friend... (music)");
      }else if(random==10){
         session.send("Ohayo~! " + getUser(userValue) + "-san! Downu zi aku desu~!");
      }else if(random==11){
         session.send("Cumusta " + getUser(userValue) + "~! Down ako weh.. cornhub ka muna!");
      }
   
  }
});
