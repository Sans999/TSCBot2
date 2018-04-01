const Discord = require("discord.js");
const TOKEN = "NDI5MzczNzI0NTE3NTk3MTkx.DaH-rQ.BOmevJPws5_jF8s9qv4ljIljmII"
const PREFIX = "-"
var bot = new Discord.Client();
bot.on("ready", function() {
    console.log("TSCBot is Online!");
});
bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    if (!message.content.startsWith(PREFIX)) return;
    var args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("pong!");
            break;    
        case "space":
            message.channel.sendMessage("https://forcetoknow.com/wp-content/uploads/2014/01/meteor-shower-forcetoknow.com_.jpg");
            break;
        case "help":
            var embed = new Discord.RichEmbed()
            .setTitle("Commands:")
            .setDescription("-space: Shows A picture of space, -ping: Makes bot say pong, -info: Gives info about the bot.")
            .setColor(0x00FFFF)
            message.channel.sendEmbed(embed);
            break;
        case "profile":
            var embed = new Discord.RichEmbed()
                .setImage(message.author.avatarURL)
                .setColor(0x00FFFF)
            message.channel.sendEmbed(embed);
            break;
        case "play":
            message.channel.sendMessage("Playing!")
            break;
        case "add":
            message.channel.sendMessage("Adding!")
            break;
            default:
            message.channel.sendMessage("**Invalid command**")
    }
});
bot.login(TOKEN);
