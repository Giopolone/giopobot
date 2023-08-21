const Discord = require("discord.js")
const client = new Discord.Client(
    {intents:["GUILDS","GUILD_MEMBERS","GUILD_MESSAGES","GUILD_MESSAGE_REACTIONS","DIRECT_MESSAGES","AUTO_MODERATION_CONFIGURATION"]}
)

client.login("process.env.token")

client.on("ready", ()=> {
    console.log("Bot ONLINE")
})

client.on("messageCreate", message => {
    if (Message.content == "!comando") {
        message.channel.send("Ciao a tutti!")
    }
})
