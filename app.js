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
    }
    else if(session.message.text.toLowerCase().contains('goodbye')){
      session.send(`;(`);
      }
       else if(session.message.text.toLowerCase().contains('help')){
        session.send(`Available commands:`);
         session.send(`(1)use [skills] ex. "use splash/hyperbeam/sing"`);
        session.send(`(2)kilala mo ba si [IGN] ex. "kilala mo ba si jibanyan"`);
        session.send(`(3)meme [meme_code] ex. "meme notbad"`);
         session.send(`(4)!play [title] ex. "!play almuranas"`);
         session.send(`(5)show face [expression] ex. "show face love"`);
          session.send(`(5)what is [keyword]? ex. "what is love?"`);
session.send(`*****************************`);         
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
   
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    
//skills start +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 else if(session.message.text.toLowerCase().contains('use ')){
    
    if(session.message.text.toLowerCase().contains('use hyperbeam')){
      session.send(`Bowtt used hyperbeam! 🎇`);
      session.send(`KAME-HAME-HAAAAAAAAAAAAAAAAA`); 
      session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://static1.bigstockphoto.com/4/2/6/small2/6247476.jpg'}]});
      session.send(`The enemies are blinded..`); 
      session.send(`Hit rate was reduce by 100%.`); 
    }
else if(session.message.text.toLowerCase().contains('use splash')){
      session.send(`Bowtt used splash! 💦`); 
      session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://s-media-cache-ak0.pinimg.com/236x/91/1d/5b/911d5b2c5d919dda6e2d371276e97650.jpg'}]});
      session.send(`......instantly killed enemies nearby.`); 
}

else if(session.message.text.toLowerCase().contains('sing') | session.message.text.toLowerCase().contains('kanta')){
   session.send(`Bowtt used Sing! 🎵`); 
      session.send(`🎶 Beep beep beep.. ang sabi ng jeep.. beep beep beep beep bee-beep beep!!! 🎶`);
      session.send('💤 The enemies falls asleep..💤');

      }
    
    else if(session.message.text.toLowerCase().contains('shit') | session.message.text.toLowerCase().contains('sh*t')){
   session.send(`Bowtt throws some sh*t! 💩`);
session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://cdn.xl.thumbs.canstockphoto.com/canstock8753620.jpg'}]});
session.send('💢 The enemies are angry! 💢');
session.send('Rage raise to 100%.');
session.send('Hit rate was reduce by 50%.');

      }
    
 else if(session.message.text.toLowerCase().contains('extra rice')){
   session.send(`Bowtt used Extra Rice to the ememy! 🍚`);
    session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFoAWgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwIEBQYIAwH/xAA0EAABAwMBBQYEBgMBAAAAAAABAAIDBAURIQYHEjFBIkJRYXGBUqGx0RMUI2KRwTSSwjP/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAYEQEBAQEBAAAAAAAAAAAAAAAAEQESAv/aAAwDAQACEQMRAD8Ag1ERAREQEREBERAREQEREBERAXpBDLUTMhgjfLLI4NYxjS5zieQAHMq92fslftDdYLba4fxamY4A5Bo6ucegHiupNjNg7FsdA00NMJq7B462YcUhz0B7o6YGM9coISse5bau5ASVkdPbIjgj8zIC8gj4W5x6HBWxxbgJeD9faWNj88mURcMevGPopufIc4wqTnq3RZqxz9dtxd/pW8Vsr6Ku55YSYXc9MZyOXmFH192cvGz07Ybzb56Rz88BkHZfjnwuGh9iuwQANNfcrH3i3UV5t89FcYGVFNK0tdG4fTqD5jUK0jjlFte3mxVbspcntDJZra45gqi3p8LscnDl0zzC1RVBERAUlbu92b75DHdL2ZKe3u7UULdHzjx/a35npjQrU9hbVFe9rLbb5xmKSUuePia1pcR7huF1IxnC0AAAAYAA5IPuzNroLPSup7ZSQ0sDQAGRNxnzJ5k+Z1WTfNqQcD2WPgqD+WnHRpGMDU5z9lZzXNhIHeA0Dnclndaxmg9pzqD6eC+vOudR5BYKOvw4HwbgYOV7tri7BLiD0ypVjK8WBgH35q3nlDQWjGP7Vp+becjHI4C8nSuwDjn4JUUTSfrNa8Nc1/Yc0jIIPiFH2226m3XON9Vs8xlBWjX8AaQy+WO4fMaeXVbtVkuacHB8fosnH24wTzWjXIlZSz0NVLS1cT4p4nFkkbxgtIXipd392WGGW33mJgbLMTBOR38DLT64yPYKIlWWZ2OvAsO01vub25ZBL28fAQWu+RK6to5oayliqKZ7JIZWhzHsOQ4HkQuOVve77eRXbJkUdQx1ZaycmHOHRHOpYf6Onpqg6JkjERflp4JBguBxwrX6ineHccbuLwcr/Zva6xbSxB1qr45JMZdA/syN9WnX3GiydTQRzNyz9N45EJzStdije3QZJHLP3V3EHZ4sa9V7Oo6qNx4ow9vThVHDIAewWu82qctVW0OySTw+Guq9Q0nU/wAKmMSOH/m5x6aFXcNJI/WU8GO6080zyzVuynMzwANAdTlZBsQY3AAXjXV1vs9IZ6+qgpKdvfleGj5qI9ud8cb4pKLZMPy4YdXyN4cD9jTr7n+FqQY3fztDBW3KkslK8OFFmSoLeX4h0DfUDP8At5KKFVI98j3Pkc573ElznHJJPUlUqAiIgqY5zHB7HFrmnIIOCCtotO8Xay1BrKe8TyRt7lQBKD5ZcCfmtVRBKVJvv2gj/wAqit8+OrWuYfqVft37VeO1YacnyqSP+VDyIJZqd+d2e3FLaKKI+L3uf9lr9z3s7X144W18dI3GopoWtz7nJ+a0ZEoua6vrLjMZ6+qnqZT35pC8/wAlWyIgIiICIiAiIgIiICIiAiIgIiIP/9k='}]});
      
      session.send('The enemies are gaining weight...');
      session.send('Speed was reduce by 50%.');   
 }   
    
    else{
    session.send(`di ko pa alm yan.`);
    }
    }
   
//skills end +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  
   
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


 //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   
   
   
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
   
   
   
 //burnin tropa start ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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
   
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  
   
//yakult start ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    else if(session.message.text.toLowerCase().contains('yakult')){
      session.send('Yakult everyday, everynight, every-midnight!! Yakult all the time! Yan ang buhay mo!! Puro ka yakult!! Yakult ka ng yakult!! Yakulero!! :D');
   }
 //yakult end ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    
       
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
else if(session.message.text.toLowerCase().contains('no no') | session.message.text.toLowerCase().contains('nono') | session.message.text.toLowerCase().contains('no!')){
   session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'http://i3.kym-cdn.com/photos/images/original/000/585/635/90d.png'}]});
} 
 else if(session.message.text.toLowerCase().contains('gaay')){
   session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'data:image/jpeg;base64,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'}]});
} 
 else if(session.message.text.toLowerCase().contains('rage')){
   session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'data:image/jpeg;base64,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'}]});
}
       
        else if(session.message.text.toLowerCase().contains('wow')){
   session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'data:image/png;base64,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'}]});
}
       
else if(session.message.text.toLowerCase().contains('okay')){
   session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'data:image/jpeg;base64,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'}]});
            }
else if(session.message.text.toLowerCase().contains('pepe')){
   session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://i.imgflip.com/lntct.jpg?a416760'}]});
            }
  else if(session.message.text.toLowerCase().contains('trap')){
   session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://s-media-cache-ak0.pinimg.com/736x/e7/21/ec/e721ecea208b384f92e2c422ac06ea5d--its-a-trap-meme-meme-center.jpg'}]});
            }
   else if(session.message.text.toLowerCase().contains('hungry')){
   session.send('https://media1.giphy.com/media/CDpAmfo9dbOyA/giphy.gif');
            } 
       else if(session.message.text.toLowerCase().contains('scare')){
   session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://i.imgflip.com/lexnp.jpg'}]});
            } 
       else if(session.message.text.toLowerCase().contains('nsfw')){
   session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://i.ytimg.com/vi/u2K5I3NJtiQ/hqdefault.jpg'}]});
            }
       
       
  else{
  session.send('usable memes:');
session.send('notbad, herewego, teachme, bitch plz, ifyouknow, NO!, trap, hungry, gaay, wow, okay, pepe, nsfw');
  }
    
    }
   
   
//meme end ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
   
  
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
   
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   
   
//what is start ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++   
   
   
   else if(session.message.text.toLowerCase().contains('what is ') | session.message.text.toLowerCase().contains('define ')){
   
   if(session.message.text.toLowerCase().contains(' love?')){
   session.send(`googling "love"...`);
   session.send(`searching "love"...`);
   session.send(`fetching "love"...`);
    session.send(`"Love" not found.`);
     
   }
else if(session.message.text.toLowerCase().contains('forever') | session.message.text.toLowerCase().contains('poreber ')){
   session.send(`googling "forever"...`);
   session.send(`searching "forever"...`);
   session.send(`fetching "forever"...`);
    session.send(`"forever" doesn't exist.`);
  }
else if(session.message.text.toLowerCase().contains(' crush?')){
   session.send(`googling "crush"...`);
   session.send(`searching "crush"...`);
   session.send(`fetching "crush"...`);
    session.send(`Your "crush" is already taken..`);
  }
else if(session.message.text.toLowerCase().contains(' destiny?')){
   session.send(`googling "destiny"...`);
   session.send(`searching "destiny"...`);
   session.send(`fetching "destiny"...`);
    session.send(`(1) "destiny" is found.`);
   session.send(`Your "destiny" is currently f*cking his/her boy/girlfriend right now.`);
  }
else if(session.message.text.toLowerCase().contains(' alone?')){
   session.send(`googling "alone"...`);
   session.send(`searching "alone"...`);
   session.send(`fetching "alone"...`);
    session.send(`(1) "alone" is found.`);
   session.send(`Yeah... and that was you..`);
  }
      
      else{
   session.send(`¯\_(ツ)_/¯ google mo nalang.. `);
   }
}
   
   
//what is end ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++   
   
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    
   
   
//others start ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      
   
   else if(session.message.text.toLowerCase().contains('astig mo') | session.message.text.toLowerCase().contains('astig ka') | session.message.text.toLowerCase().contains('cool mo') ){
      session.send('•_•)');
      session.send('( •_•)>⌐■-■');
      session.send('(⌐■_■)');
      session.send(' (cool) ');
      session.send('di naman..');
      session.send('medyo lang.');
   }
  else if(session.message.text.toLowerCase().contains('belat') | session.message.text.toLowerCase().contains(':P')){
     
         
      session.send('👂--👀');
      session.send(' . : . : 👃');
      session.send(' ,-`__👅');
     
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
//others end ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  
   
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
   
//pokemon start ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  
   
   else if(session.message.text.toLowerCase().contains('pokedex ') | session.message.text.toLowerCase().contains('uranguru')){
      
    if(session.message.text.toLowerCase().contains('uranguru')){
       session.send('*Name:* Uranguru');
       session.send('*Type:* Normal/Pyschic');
       session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'data:image/jpeg;base64,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'}]}); 
       session.send('*Description:*');
       session.send("Oranguru is a God of all legendary pokemon. It was the one who created the pokemon like Arceus, Mew and Giratina. It was the rarest pokemon in Pokeland Legends. No other players have this pokemon except... for those two Pokemon Mastur. Mastur Jibanya and Mastur Kida. They are the only player that have this pokemon. Not only they have 1 oranguru, they have dozen of them. That's how lucky these two Pokemon Mastur!");
    }  
      else {
      session.send('Not yet inserted.');
      }
      
   }
   
 //pokemon weather start ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++      
else if(session.message.text.toLowerCase().contains('weather today')){
      session.send('Not yet updated.');
}
 //pokemon weather end ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++        
  

   
   
   
   
   
   
   
   
   
 //pokemon end ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++     
   
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
   
   
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

  
  
else if(session.message.text.toLowerCase().contains('sample add')){
      





} 
   
//emoticons end ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

   
   else{
        session.send("Hi " + session.message.user.name + "! Try to use the 'help' command");
      }
});
 
