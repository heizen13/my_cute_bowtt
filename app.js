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
   
   else if(session.message.text.toLowerCase().contains('kanteen') | session.message.text.toLowerCase().contains('canteen') | session.message.text.toLowerCase().contains('kain')){
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
   
   
//skills start +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
   
//skills end +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   
 
   
//trashtalk start  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   
   
   else if(session.message.text.toLowerCase().contains('bobo')){
      session.send(`weaboo ka naman. :P`);
   }
else if(session.message.text.toLowerCase().contains('angas') | session.message.text.toLowerCase().contains('yabang mo')){
      session.send(` (cool) `);
   }
   
   else if(session.message.text.toLowerCase().contains('pogi ba')){
      if(session.message.text.toLowerCase().contains('jibanyan') | session.message.text.toLowerCase().contains('james')){
      session.send(` Mabait.. :D `);
      }
      else{
         
       session.send(` (puke) `);
      
      }
   }

else if(session.message.text.toLowerCase().contains('bad ka') | session.message.text.toLowerCase().contains('bad mo')){
      session.send(` BADing ka naman. :P `);
   }

else if(session.message.text.toLowerCase().contains('useless')){
      session.send(`C-A-N-C-E-R ka naman!! :P`);
   }
   
//trashtalk end +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


   
   
   
//kilala begin ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   
    else if(session.message.text.toLowerCase().contains('kilala mo ba si')){
   
   if(session.message.text.toLowerCase().contains('jibanyan') | session.message.text.toLowerCase().contains('james')){
      session.send(`Siya ang pinakamalakas na player ng Pokeland legend. Walang sinomang mga trainer ang nakakatalo sa kanya. Isa siyang legendary P*KEMON MASTUR!!!`);
      }
   
   else if(session.message.text.toLowerCase().contains('heizen')){
      session.send('Heizenberg ba? Yung ubod na hina? HAHAHAHA!! Tinatalo lng yan ng master ko!! Si Jibanyan!!!');
   }
    else if(session.message.text.toLowerCase().contains('kida') | session.message.text.toLowerCase().contains('kidda')){
      session.send('Kida? ADIK din yan eh.. Ang lakas din nyan!! Sobra!! Sila ni Master Jibanyan mga ininidolo kong p*kemon Mastur!!.');
   }
   
   
   
 //burnin tropa begin ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  else if(session.message.text.toLowerCase().contains('shino')){
      session.send('Si shino? Isa sa mga IDOL ko yan!! Ang lalakas ng mga pokemon nyan eh. Kung kaserver lng ni heizenberg yan baka dinudurog-durog lng ni Master Shino yan. HAHAAHA :P');
   }
   else if(session.message.text.toLowerCase().contains('hero') | session.message.text.toLowerCase().contains('japh')){
      session.send('Si master HERO!!! Isa sa mga tinitingala kong p*kemon master!!! Pero solid parin ako kina Mastur Jibanyan at Mastur Kida!!!');
   }
   
   else if(session.message.text.toLowerCase().contains('jaymar')){
      session.send('Si master Jaymar!!! Isa sa mga tinitingala kong p*kemon master!!! Pero solid parin ako kina Mastur Jibanyan at Mastur Kida!!!');
   }
       
       
//burnin tropa end ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
      else{
     session.send('di ko kilala yan. sorry :(');
      }
   }
   
//kilala end ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   
   
   
//yakult start ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    else if(session.message.text.toLowerCase().contains('yakult')){
      session.send('Yakult everyday, everynight, every-midnight!! Yakult all the time! Yan ang buhay mo!! Puro ka yakult!! Yakult ka ng yakult!! Yakulero!! :D');
   }
 //yakult end ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   
   
       
//meme start ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++    
   
    else if(session.message.text.toLowerCase().contains('meme ')){
       
  if(session.message.text.toLowerCase().contains('notbad')){
   session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'http://i3.kym-cdn.com/photos/images/original/000/138/246/tumblr_lltzgnHi5F1qzib3wo1_400.jpg'}]});
}
 else if(session.message.text.toLowerCase().contains('herewego')){
   session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://media.makeameme.org/created/Well-Here-we.jpg'}]});
}
       
       else if(session.message.text.toLowerCase().contains('teachme')){
   session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://cdn.meme.am/cache/instances/folder599/500x/73464599/dr-strange-teach-teach-me.jpg'}]});
}
       
          else if(session.message.text.toLowerCase().contains('bitch')){
   session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'data:image/jpeg;base64,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'}]});
}    
       
    
  else{
  session.send('usable memes:');
     session.send('notbad, herewego, teachme, bitch please');
  }
    
    }
   
   
//meme end ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   

//others start ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      else if(session.message.text.toLowerCase().contains('(finger)')){
      session.send(' eto ka naman!! ╭∩╮(-_-)╭∩╮ ...dalawa pa!!! ');
   }
    else if(session.message.text.toLowerCase().contains('stupid')){
      session.send('retarded :P ');
   }
   
   else if(session.message.text.toLowerCase().contains('astig mo') | session.message.text.toLowerCase().contains('astig ka') | session.message.text.toLowerCase().contains('cool mo') ){
      session.send('•_•)');
      session.send('( •_•)>⌐■-■');
      session.send('(⌐■_■)');
      session.send(' (cool) ');
      session.send('di naman..');
      session.send('medyo lang.');
   }


else if(session.message.text.toLowerCase().contains('what is')){
      session.send(` ¯\_(ツ)_/¯ google mo nalang.. `);
}
   else if(session.message.text.toLowerCase().contains('say ')){
      session.send(session.message.text);
   }
  
//others end ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   

   
   else{
        session.send('..');
      }
});
 
