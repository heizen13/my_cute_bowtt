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
    
   appId: "45af4b31-b429-4d7a-bcfc-a1edd8bbf462",
    appPassword: "hPjCboigX1khDz4b7f2kUdc"
   
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
      session.send(`Hello bruh!, Zup bruh?`);
      }
   
   else if(session.message.text.toLowerCase().contains('who are you') | session.message.text.toLowerCase().contains('sino ka')){
        session.send("Hello, I'm Mr Robutt. Some people tells me that I look like a balls and a butt but who cares, I'm still a cute bot. ;) ");
      }
  
   else if(session.message.text.toLowerCase().contains('dubidubidap') | session.message.text.toLowerCase().contains('kanta ka')){
      session.send(`Meep meep meep.. ang sabi ng meep.. meep meep meep meep mee-beem meep!!!`);
      }
   
   else if(session.message.text.toLowerCase().contains('uwi')){
      session.send(`Edi umuwi ka! Yan lang naman habol mo bago ka pumasok. Gusto mo na agad umuwi!!! |-( `);
      }
   
   else if(session.message.text.toLowerCase().contains('kanteen') | session.message.text.toLowerCase().contains('canteen')){
      session.send(`LEGO~! BETCH!! (cool) `);
      }
   
   else if(session.message.text.toLowerCase().contains('suplado mo') | session.message.text.toLowerCase().contains('galit ka')){
      session.send(` (donttalk) `);
      }
else if(session.message.text.toLowerCase().contains('meron ka')){
      session.send(`ito lng meron ako (cash) `);
      }
   
   else if(session.message.text.toLowerCase().contains('morning') | session.message.text.toLowerCase().contains('ohayo') | session.message.text.toLowerCase().contains('umaga')){
      session.send(`Ohayo Gozaimasu! pare-ko-sama~!`);
      }
   
    else if(session.message.text.toLowerCase().contains('pokemon') | session.message.text.toLowerCase().contains('digimon')){
      session.send(`Pikachu lang kilala ko. Astig kasi ng skill nya, flametrower.`);
      }
   else if(session.message.text.toLowerCase().contains('pikachu')){
      session.send(`My favorite digimonster! <3`);
      }
   
   

 else if(session.message.text.toLowerCase().contains('use ')){
    
    if(session.message.text.toLowerCase().contains('use hyperbeam')){
      session.send(`Bowtt used hyperbeam!`);
      session.send(`KAME-HAME-WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`); 
      session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://static1.bigstockphoto.com/4/2/6/small2/6247476.jpg'}]});
    }
else if(session.message.text.toLowerCase().contains('use splash')){
      session.send(`Bowtt used splash!`); 
      session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://s-media-cache-ak0.pinimg.com/236x/91/1d/5b/911d5b2c5d919dda6e2d371276e97650.jpg'}]});
      session.send(`......instantly killed enemies nearby.`); 
}
    else{
    session.send(`di ko pa alm yan.`);
    }
    }
   
   else if(session.message.text.toLowerCase().contains('bobo')){
      session.send(`weaboo ka naman. :P`);
   }
else if(session.message.text.toLowerCase().contains('angas') | session.message.text.toLowerCase().contains('yabang mo')){
      session.send(` (cool) `);
   }
   
   else if(session.message.text.toLowerCase().contains('pogi ba')){
      session.send(` (puke) `);
   }

else if(session.message.text.toLowerCase().contains('what is')){
      session.send(` ¯\_(ツ)_/¯ google mo nalang.. `);
   }
else if(session.message.text.toLowerCase().contains('bad ka') | session.message.text.toLowerCase().contains('bad mo')){
      session.send(` BADing ka naman. :P `);
   }

else if(session.message.text.toLowerCase().contains('useless')){
      session.send(`C-A-N-C-E-R ka naman!! :P`);
   }

else if(session.message.text.toLowerCase().contains('copy ')){
      session.send(session.message.text);
   }
   
    else if(session.message.text.toLowerCase().contains('yakult')){
      session.send('Yakult everyday, everynight, every-midnight!! Yakult all the time! Yan ang buhay mo!! Puro ka yakult!! Yakult ka ng yakult!! Yakulero!! :D');
   }
   
   else if(session.message.text.toLowerCase().contains('(finger)')){
      session.send(' eto ka naman!! ╭∩╮(-_-)╭∩╮ ...dalawa pa!!! ');
   }
   
   else if(session.message.text.toLowerCase().contains('kilala mo')){
   
   if(session.message.text.toLowerCase().contains('gabia') | session.message.text.toLowerCase().contains('dindo') | session.message.text.toLowerCase().contains('bryan')){
      session.send("TANG INA MO DINDO!! RAPIST, MANYAKIS, MUKHA'Y NAKAKAINIS. ANG SARAP IHAGIS, SA BALONG PUNO NG IPIS!!! TIME!!!");
   }
   
   else if(session.message.text.toLowerCase().contains('neil') | session.message.text.toLowerCase().contains('gelizon')){
      session.send('You mean si Kuya Wil? yung kumanta ng...');
      session.send(`🎵🎵Beep beep beep.. ang sabi ng jeep.. beep beep beep beep bee-beep beep! 🎵🎵`);
   }
 else if(session.message.text.toLowerCase().contains('montero') | session.message.text.toLowerCase().contains('gerrem')){
      session.send('Si Vice ba? Nasa show pa paba yon?');
   }
   else if(session.message.text.toLowerCase().contains('salazar') | session.message.text.toLowerCase().contains('piele')){
      session.send('Ahh yung sumbungero...');
   }
   else{
   session.send('Di ko kilala yan');
   }
}
   
   else if(session.message.text.toLowerCase().contains('astig mo') | session.message.text.toLowerCase().contains('astig ka') | session.message.text.toLowerCase().contains('cool mo') ){
      session.send('•_•)');
      session.send('( •_•)>⌐■-■');
      session.send('(⌐■_■)');
      session.send(' (cool) ');
      session.send('di naman..');
      session.send('medyo lang.');
   }
   
   else{
        
      }
});
 
