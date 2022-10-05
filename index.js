
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", ()=> {
    console.log(`Logged in as ${client.user.tag}!`);
    msg.channel.send("I CAN SEE THROUGH THE LIES OF THE JEDI");
});

client.on("message", msg => {
    if (msg.content === "ani") {
        msg.channel.send("YOU'VE GROWN");
    }

    
    
    
    //PENDING TO BE CHANGED> DON'T JUDGE ME BASED ON THIS. STILL NOT CHANGED
    else{
        switch (msg.content) {
            case "Let her go": msg.channel.send("you turned her against me")
            break;
        
           
        }
    }
});





//log in with token
//log in with token
//log in with token
client.login(process.env.BOT_TOKEN);
