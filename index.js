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

const isValidCommand = (message, cmdName) => message.content.toLowerCase().startsWith(PREFIX + cmdName)
const rollDice = () => Math.floor(Math.random() * 6) + 1;
const checkPermissionRole = (role) => role.permissions.has('ADMINISTRATOR') || role.permissions.has('KICK_MEMBERS') || 
role.permissions.has('BAN_MEMBERS') ||role.permissions.has('MANAGE_GUILD') ||role.permissions.has('MANAGE_CHANNELS')

bot.on('message', async function(message) {
  if(message.author.bot) return;

  if(isValidCommand(message, 'hello'))
    message.reply('Hello!');
  else if(isValidCommand(message, 'rolldice')) 
    message.reply('rolled a ' + rollDice());
  else if(isValidCommand(message, 'add')) {
    message.delete()
    let args = message.content.toLowerCase().substring(5);
    let roleNames = args.split(", ");
    let roleSet = new Set(roleNames);
    let { cache } = message.guild.roles;  

    roleSet.forEach(roleName => {
      let role = cache.find(role => role.name.toLowerCase() === roleName);
    if(role) {
      if(message.member.roles.cache.has(role.id)) {
        message.channel.send("You already have this role!");
        return;
      }
      if(checkPermissionRole(role)){
          message.channel.send("You cannot add yourself to this role.");
      }
      else {
        message.member.roles.add(role)
        .then(member => message.channel.send("You were added to this role!"))
        .catch(err => {
          console.log(err);
          message.channel.send("Something went wrong....");
        });
      }
    } 
    else {
      message.channel.send("Role not found!");
    }

    });
     

    }
    else if(isValidCommand(message, "del")) {
      message.delete()
    let args = message.content.toLowerCase().substring(5);
    let roleNames = args.split(", ");
    let roleSet = new Set(roleNames);
    let { cache } = message.guild.roles; 
    roleSet.forEach(roleName => {
      let role = cache.find(role => role.name.toLowerCase() === roleName);
    if(role) {
      if(message.member.roles.cache.has(role.id)) {
        message.member.roles.remove(role)
        .then(member => message.channel.send("You were removed from this role!"))
        .catch(err => {
          console.log(err);
          message.channel.send("Something went wrong....");
        });
      
      }
    } 
    else {
      message.channel.send("Role not found!");
    }

    });

  }
  else if (isValidCommand(message, "embed")) {
    let embedContent = message.content.substring(7);
    // let embed = new Discord.MessageEmbed();
    // embed.setDescription(embedContent);
    // embed.setColor(colors.black);
    // embed.setTitle('New Embed Message Created');
    // embed.setTimestamp()
    // message.channel.send(embed);
    
    let embed = {
      image: {
        url: message.author.displayAvatarURL()
      },
      description: embedContent,
      thumbnail: {
        url: message.author.displayAvatarURL()
      },
      timestamp: new Date()
    }
    message.channel.send({ embed: embed });

  }
  else if (isValidCommand(message, "say")) {
    message.delete()
    let announcement = message.content.substring(5);
    let announcementsChannel = bot.channels.cache.get('689368138038771730');
    let genralChannel = bot.channels.cache.find(channel => channel.name.toLowerCase() === '『💬』general');
    let embed = new Discord.MessageEmbed();
    if(announcementsChannel)
    embed.addField('**Announcement**', announcement);
    embed.setColor(colors.black);
    embed.setFooter('Announced by Staff')
    announcementsChannel.send(embed);
    
  }
  else if (isValidCommand(message, 'ban')) {
    message.delete()
    if (!message.member.hasPermission('BAN_MEMBERS')) {
      message.channel.send("You don't have permission to use this command.");
      
    }
    else {
       let memberId = message.content.substring(message.content.indexOf(' ') + 1);
      // let member = message.guild.members.cache.get(memberId);
      // if(member) {
      //   member.ban();
      // }
      // else {
      //   message.channel.send("Member does not exist.");
      // }
      try {
        let bannedMember = await message.guild.members.ban(memberId);
        if(bannedMember) {
          console.log(bannedMember.tag + " Was banned. "); 
        }
        else {
          console.log("Banned did not happen.");
        }
      }
      catch(err) {
        console.log(err);
      }
    }
  }
  else if (isValidCommand(message, 'kick')) {
    message.delete()
    if(!message.member.hasPermission('KICK_MEMBERS')) {
      message.channel.send("You don't have permission to use this command.");
    }
    else {
      let memberId = message.content.substring(message.content.indexOf(' ') + 1);
      let member = message.guild.members.cache.get(memberId);
      if (member) {
        try {
          await member.kick();
          console.log(' A member was kicked. ')
        }
        catch(err) {
          console.log(err);
        }
      }
      
    }
  }
  else if (isValidCommand(message, 'mute')) {
    message.delete()
    if (!message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])){
      message.channel.send("You don't have permission to use this command.");
    }
    else {
      let memberId = message.content.substring(message.content.indexOf(' ') + 1);
      let member = message.guild.members.cache.get(memberId);
      if (member) {
        if (member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']) && !message.member.hasPermission('ADMINISTRATOR')) {
          message.channel.send("You cannot mute that person!");
        }
        else {
          let mutedRole = message.guild.roles.cache.get('688858722134655103');
          if (mutedRole) {
            member.roles.add(mutedRole);
            message.channel.send("User was muted.");
          }
          else {
            message.channel.send("Muted role not found.");
          }
        }
      }
      else {
        message.channel.send("Member not found.");
      }
    }
  }
  else if (isValidCommand(message, "unmute")) {
    message.delete()
    if (!message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])){
      message.channel.send("You don't have permission to use this command.");
    }
    else {
      let memberId = message.content.substring(message.content.indexOf(' ') + 1);
      let member = message.guild.members.cache.get(memberId);
      if (member) {
        if (member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']) && !message.member.hasPermission('ADMINISTRATOR')) {
          message.channel.send("You cannot mute that person!");
        }
        else {
          let mutedRole = message.guild.roles.cache.get('688858722134655103');
          if (mutedRole) {
            member.roles.remove(mutedRole);
            message.channel.send("User was unmuted.");
          }
          else {
            message.channel.send("Muted role not found.");
          }
        }
      }
      else {
        message.channel.send("Member not found.");
      }
    }
  }
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

});

bot.login(token);