const Discord = require("discord.js");

const token = process.env.token;

const PREFIX = "+";

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`)

    let statuses = [
        `${bot.guilds.cache.size} Servers`,
        "!help",
        `over ${bot.users.cache.size} users!`,
        "BIG CHUNGUS",
        "YOUR MOM",
        "GTAV",
        "Over Knight-Shop",
        "Payments"
    ]
    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)]
        bot.user.setActivity(status, {type: "WATCHING"});
    }, 5000)
    
})


bot.on("guildMemberAdd", async member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === "server-rules")
    if(!channel) return;

    channel.send(`Welcome to our server!, ${member}, <a:party_discord:689702464030638167>

                         HERE ARE THE RULES:

:smiley: 1. Be cool, kind, and civil. Treat all members with respect and express your thoughts in a constructive manner.

:abc: 2. Use English only. Communicate in English, but be considerate of all languages.
   
:card_index: 3. Use appropriate nicknames. Avoid special characters, emoji, obscenities, and impersonation.
   
:incoming_envelope:  4. Do not spam. Avoid excessive messages, images, formatting, emoji, commands, @mentions and NEVER Dm advertise, It is against TOS and we will not allow our members to do break TOS
   
:no_bell:  5. Do not spam Staff. Respect their time, they are people too.
   
:loud_sound:  6. No self-promotion or advertisements. This includes unsolicited references and links to other social media, servers, communities, and services in chat or direct messages.
   
:shield:  7. No personal information. Protect your privacy and the privacy of others.
   
:head_bandage:  8. No harassment, abuse, or bullying. We have zero-tolerance for harming others.
   
:anger_right:  9. No racist, sexist, anti-LGBTQ+, or otherwise offensive content. We have zero-tolerance for hate speech.
   
:classical_building:  10. No political or religious topics. These complex subjects result in controversial and offensive posts.
   
:rotating_light:  11. No piracy, NSFW, or otherwise suspicious content. We do not condone illegal or suspicious discussions and activity.
   
:thinking:  12. Rules are subject to common sense. These rules are not comprehensive and use of loopholes to violate the spirit of these rules is subject to enforcement.
   
:scroll:  13. Discord Terms of Service and Community Guidelines apply. 
You must be at least 13 years old to use Discord, and abide by all other terms and guidelines. 
   
:key: 14. Ones you’re done reading the rules please type, \`?verify\` in order to unlock server.`)


bot.on("message", async message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    if (message.author.bot) return;



    if (message.content.toLowerCase() === '+clear') {
        message.channel.bulkDelete(100)
  .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
  .catch(console.error);
    }


    })

})

bot.login(token);