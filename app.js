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
      session.send(`Hello din sayo. hehe :$`);
      }else if(session.message.text.toLowerCase().contains('help')){
        session.send(`Available commands:`);
         session.send(`(1)use [skills] ex. "use splash/hyperbeam/sing"`);
        session.send(`(2)kilala mo ba si [IGN] ex. "kilala mo ba si jibanyan"`);
        session.send(`(3)meme [meme_code] ex. "meme notbad"`);
         session.send(`(4)!play [title] ex. "!play almuranas"`);
         session.send(`(5)show face [expression] ex. "show face love"`);
session.send(`.......`);         
session.send(`Others: `);
         session.send(`yakult, astig mo, useless, kuya jobert, pokemon, pikachu"`);
         
         
          }
   else if(session.message.text.toLowerCase().contains('who are you') | session.message.text.toLowerCase().contains('sino ka')){
        session.send("Hello, I'm bowtt. Some people tells me that I look like a balls and a butt but who cares, I'm still a cute bot. ;) ");
      }
  
   else if(session.message.text.toLowerCase().contains('dubidubidap') | session.message.text.toLowerCase().contains('kanta')){
      session.send(`🎶 Beep beep beep.. ang sabi ng jeep.. beep beep beep beep bee-beep beep!!! 🎶`);
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
      session.send(`Bowtt used hyperbeam! 🎇`);
      session.send(`KAME-HAME-WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`); 
      session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://static1.bigstockphoto.com/4/2/6/small2/6247476.jpg'}]});
    }
else if(session.message.text.toLowerCase().contains('use splash')){
      session.send(`Bowtt used splash! 💦`); 
      session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://s-media-cache-ak0.pinimg.com/236x/91/1d/5b/911d5b2c5d919dda6e2d371276e97650.jpg'}]});
      session.send(`......instantly killed enemies nearby.`); 
}

else if(session.message.text.toLowerCase().contains('sing') | session.message.text.toLowerCase().contains('kanta')){
   session.send(`Bowtt used Sing! 🎵`); 
      session.send(`🎶 Beep beep beep.. ang sabi ng jeep.. beep beep beep beep bee-beep beep!!! 🎶`);
      }
    
    else{
    session.send(`di ko pa alm yan.`);
    }
    }
   
//skills end +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   
 
   
//trashtalk start  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   
   else if(session.message.text.toLowerCase().contains('(finger)')){
      session.send(' eto ka naman!! ╭∩╮(-_-)╭∩╮ ...dalawa pa!!! ');
   }
    else if(session.message.text.toLowerCase().contains('stupid')){
      session.send('retarded :P ');
   }
   
     else if(session.message.text.toLowerCase().contains('panget ka') | session.message.text.toLowerCase().contains('panget mo')){
      session.send('Ano ka parrot? :D');
   }
   
   
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
   else if(session.message.text.toLowerCase().contains('bowtt')){
      session.send('Oo naman, siya yung cute na at matalino pa. :D');
   }    
   
   
   
 //burnin tropa begin ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  else if(session.message.text.toLowerCase().contains('shino') | session.message.text.toLowerCase().contains('bhen')){
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
   
    else if(session.message.text.toLowerCase().contains('meme')){
       
  if(session.message.text.toLowerCase().contains('notbad')){
   session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'http://i3.kym-cdn.com/photos/images/original/000/138/246/tumblr_lltzgnHi5F1qzib3wo1_400.jpg'}]});
}
 else if(session.message.text.toLowerCase().contains('herewego') | session.message.text.toLowerCase().contains('here we go')){
   session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://media.makeameme.org/created/Well-Here-we.jpg'}]});
}
       
       else if(session.message.text.toLowerCase().contains('teachme')){
   session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://cdn.meme.am/cache/instances/folder599/500x/73464599/dr-strange-teach-teach-me.jpg'}]});
}
       
          else if(session.message.text.toLowerCase().contains('bitch')){
   session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'data:image/jpeg;base64,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'}]});
}   
       
else if(session.message.text.toLowerCase().contains('ifyouknow') | session.message.text.toLowerCase().contains('if you know')){
   session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://vignette1.wikia.nocookie.net/adventuretimewithfinnandjake/images/a/aa/If-you-know-what-i-mean-420x250.png/revision/latest?cb=20130217030741'}]});
}
else if(session.message.text.toLowerCase().contains('no no') | session.message.text.toLowerCase().contains('if you know')){
   session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'data:image/png;base64,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'}]});
} 
 else if(session.message.text.toLowerCase().contains('gaay')){
   session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'data:image/jpeg;base64,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'}]});
} 
  
       
    
  else{
  session.send('usable memes:');
session.send('notbad, herewego, teachme, bitch plz, ifyouknow, no no, gaay');
  }
    
    }
   
   
//meme end ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   

   
  
//kuya jobert start ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
   
   else if(session.message.text.toLowerCase().contains('kuya jobert')){
    
       session.send(`Available classic Kuya Jobert..`);
       session.send(`utot, champorado, almuranas`);
       session.send(`!play almuranas`);
      
}
 else if(session.message.text.toLowerCase().contains('!play')){
      if(session.message.text.toLowerCase().contains('utot')){
         session.send(`Utot..`);
      session.send(`https://www.youtube.com/watch?v=rgFwoyPyoFA`);
      }
   else if(session.message.text.toLowerCase().contains('almuranas')){
      session.send(`Almuranas..`);
   session.send(`https://www.youtube.com/watch?v=I2A-vZ-jLDo`);
   }
      else if(session.message.text.toLowerCase().contains('champorado')){
          session.send('https://www.youtube.com/watch?v=yhtqG8ILWQc');
  
   }
    else {
       session.send(`Available classic Kuya Jobert..`);
       session.send(`utot, champorado, almuranas`);
       session.send(`!play almuranas`);
    }
   }
      
   
//kuya jobert end ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++    
   
   
   
   
   
   
//others start ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      
   
   else if(session.message.text.toLowerCase().contains('astig mo') | session.message.text.toLowerCase().contains('astig ka') | session.message.text.toLowerCase().contains('cool mo') ){
      session.send('•_•)');
      session.send('( •_•)>⌐■-■');
      session.send('(⌐■_■)');
      session.send(' (cool) ');
      session.send('di naman..');
      session.send('medyo lang.');
   }


else if(session.message.text.toLowerCase().contains('what is ') | session.message.text.toLowerCase().contains('define ')){
      session.send(`¯\_(ツ)_/¯ google mo nalang.. `);
}
   else if(session.message.text.toLowerCase().contains('say ')){
      session.send(session.message.text);
   }
   
   else if(session.message.text.toLowerCase().contains('sino mas malakas')){
      session.send('Parehas malakas para sakin.');
   }
   
   else if(session.message.text.toLowerCase().contains('sino mas malakas')){
      
if(session.message.text.toLowerCase().contains('jibanya') | session.message.text.toLowerCase().contains('james')){
      
      session.send('Syempre si Mastur Jibanyan!! Idol ko yan eh!!');
}
      else{
         session.send('hehe, parehas silang mahina! :D');
      }
   }
  
 //emoticons start ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
   
 else if(session.message.text.toLowerCase().contains('face')){
   
if(session.message.text.toLowerCase().contains('angry')){
      session.send('(ノಠ益ಠ)ノ彡┻━┻');
   }
else if(session.message.text.toLowerCase().contains('angry 2') | session.message.text.toLowerCase().contains('angry2')){
      session.send('ლ(ಠ益ಠლ)');
   }
    
else if(session.message.text.toLowerCase().contains('sad')){
      session.send('(ಥ﹏ಥ)');
   }
    else if(session.message.text.toLowerCase().contains('happy')){
      session.send('(｡◕‿◕｡)');
   }
    
      else if(session.message.text.toLowerCase().contains('wink')){
      session.send('(◕‿↼)');
   }
        else if(session.message.text.toLowerCase().contains('love')){
      session.send('(♥‿♥)');
   }
   else if(session.message.text.toLowerCase().contains('poker')){
      session.send('(͡° ͜ʖ ͡°)');
   }
    else if(session.message.text.toLowerCase().contains('worry')){
      session.send('(⊙﹏⊙)');
   }
    
     else if(session.message.text.toLowerCase().contains('wtf')){
      session.send('┬──┬ ノ( ゜-゜ノ)');
   }
  
   else{
      
    session.send('available face: ');
    session.send('angry, happy, wink, love, poker, worry, wtf');
    }
    
    
   }   
   
   
   
   
   
//emoticons end ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


   
   else{
        session.send("Hi " + session.message.user.name);
      }
});
 
