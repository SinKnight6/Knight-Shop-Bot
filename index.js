const Discord = require("discord.js");

const token = process.env.token;

const weather = require('weather-js');

const PREFIX = '$';

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

    bot.on("message", async message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    if (message.author.bot)

    {
        if(message.embeds)
        {
          const embedMsg = message.embeds.find(msg => msg.title === 'Welcome to our server!');
          if(embedMsg)
          {
            message.react('726551839155290132')
            .then(reaction => console.log('Reacted with' + reaction.emoji.name))
            .catch(err => console.err);
          }
        }
         return;
    
      }
    
      if (message.content.toLowerCase() === '77766115002210' )
      {
        const embed = new Discord.MessageEmbed();
        embed.setTitle("Welcome to our server!");
        embed.setColor(colors.blue);
        embed.setDescription(`
    
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
    
    :key: 14. **Ones you’re done reading the rules please type REACT to <:Member:726551839155290132> in order to unlock server.**`)
        message.channel.send(embed);
      }
    });
    
    bot.on('messageReactionAdd', (reaction,user) => {
      if(user.bot)
        return;
    
        var roleName = reaction.emoji.name;
        var role = reaction.message.guild.roles.cache.find(role => role.name.toLowerCase() === roleName.toLowerCase());
        var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
        member.roles.add(role.id).then(member => {
          console.log("Added" + member.user.username + "to a role.");
        }).catch(err => console.error);


// Break


    if (message.content.toLowerCase() === '?clear') {
        message.channel.bulkDelete(100)
  .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
  .catch(console.error);
    }

    

// Break

if (message.content.startsWith('WEATHER') || (message.content.startsWith('weather'))){
    weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result){
      if (err) message.channel.send(err);
      if (result.length === 0){
        message.channel.send('**Please enter a valid location.**')
        return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const uEmbed = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Weather for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0x00AE86)
        .addField(`Timezone`,`UTC${location.timezone}`, true)
        .addField(`Degree Type`,location.degreetype, true)
        .addField(`Temperature`,`${current.temperature} Degrees`, true)
        .addField(`Feels Like`, `${current.feelslike} Degree`,true)
        .addField(`Winds`,current.winddisplay, true)
        .addField(`Humidity`, `${current.humidity}%`, true)
        message.channel.send({embed: uEmbed});

    });
  }
    
    
});

bot.login(token);