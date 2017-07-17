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
   
    if(session.message.text.toLowerCase().contains('hello')){
      session.send(`Hello bruh!, Zup bruh?`);
      }else if(session.message.text.toLowerCase().contains('help')){
        session.send(`How can I help you bruh? I don't have any money... b-but I can give you a hug..... :$ `);
          }
   else if(session.message.text.toLowerCase().contains('who are you') | session.message.text.toLowerCase().contains('sino ka')){
        session.send("Hello, I'm bowtt. Some people tells me that I look like a balls and a butt but who cares, I'm still a cute bot. ;) ");
      }
  
   else if(session.message.text.toLowerCase().contains('dubidubidap') | session.message.text.toLowerCase().contains('kanta')){
      session.send(`Beep beep beep.. ang sabi ng jeep.. beep beep beep beep bee-beep beep!!!`);
      }
   else if(session.message.text.toLowerCase().contains('delinquent')){
      session.send(`Timesheet-timesheet din kasi pag may time!!! (cwl) `);
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
      session.send(`Ohayo Gozaimasu! Bruh-sama~!`);
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

else if(session.message.text.toLowerCase().contains('say ')){
      session.send(session.message.text);
   }
   else if(session.message.text.toLowerCase().contains('jibanyan')){
      session.send(`Siya ang pinakamalakas na player ng Pokeland legend. Walang sinomang mga trainer ang nakakatalo sa kanya. Isa siyang legendary P*KEMASTER!!!`);
      }
   
   else if(session.message.text.toLowerCase().contains('heizen')){
      session.send('Heizenberg ba? Yung ubod na hina? HAHAHAHA!! Tinatalo lng yan ng master ko!! Si Jibanyan!!!');
   }
    else if(session.message.text.toLowerCase().contains('kida')){
      session.send('Kida? ADIK din yan eh.. Kaso mas malakas parin yung IDOL kong si Jibanyan.');
   }
   
    else if(session.message.text.toLowerCase().contains('yakult')){
      session.send('Yakult everyday, everynight, every-midnight!! Yakult all the time! Yan ang buhay mo!! Puro ka yakult!! Yakult ka ng yakult!! Yakulero!! :D');
   }
   
   else if(session.message.text.toLowerCase().contains('(finger)')){
      session.send(' eto ka naman!! ╭∩╮(-_-)╭∩╮ ...dalawa pa!!! ');
   }
   
   else if(session.message.text.toLowerCase().contains('astig mo') | session.message.text.toLowerCase().contains('astig ka') | session.message.text.toLowerCase().contains('cool mo') ){
      session.send('•_•)');
      session.send('( •_•)>⌐■-■');
      session.send('(⌐■_■)');
      session.send(' (cool) ');
      session.send('di naman..');
      session.send('medyo lang.');
   }
   
   
       
//MEME MEME MEME MEME
   
   
   
   
   
   
   
   
   
   
   
   
   
//MEME MEME MEME MEME

           
           
       else if(session.message.text.toLowerCase().contains('meme notbad')){
      session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'http://i3.kym-cdn.com/photos/images/original/000/138/246/tumblr_lltzgnHi5F1qzib3wo1_400.jpg'}]});
      
}
   
   
   
   
   
   
   
   
   
   else{
        session.send(' ');
      }
});
 
