const Discord = require("discord.js")
const client = new Discord.Client(
    {intents:["GUILDS","GUILD_MEMBERS","GUILD_MESSAGES","GUILD_MESSAGE_REACTIONS","DIRECT_MESSAGES","AUTO_MODERATION_CONFIGURATION"]}
)

client.login("MTE0MzExMjcxNTExMjU1MDU1Mg.GW1Z03.J5npmOX-muvPNAXce7hAOjnjx8GG7ZC2THLDQA")

client.on("ready", ()=> {
    console.log("Bot ONLINE")
})

client.on("messageCreate", message => {
    if (Message.content == "!comando") {
        message.channel.send("Ciao a tutti!")
    }
})
