const Discord = require("discord.js");

const token = process.env.token;

const weather = require('weather-js');

const PREFIX = '$';

const bot = new Discord.Client({disableEveryone: true});

bot.on('ready', () => console.log(`${bot.user.tag} has logged in fucker.`));

bot.on('message', async message => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === 'yeet' && message.channel.id === '687713445008769143'){
    let embed = new Discord.MessageEmbed()
    .setColor(000000)
    .setDescription(` **__Welcome to Knight-Shop!__**

    Hello! You are required to complete this capthca before entering the server

    **Why?** 
    This is to protect the serveer against targeted attacks using automated user accounts.

    The Capthca:

    \`!verify\``)
    message.channel.send({embed: embed});
   };
  
  bot.on('guildMemberAdd', member => {
    console.log(member.user.tag);
  });

  if (message.channel.id === '687713445008769143')
    await message.delete();
  if (message.content.toLowerCase() === '!verify' && message.channel.id === '687713445008769143')
  {
    message.channel.send(`${message.author} Attempting to verify you in **Kight-Shop** <a:Loading:705280596217430019>`)
  .then(sentMessage => sentMessage.delete({ timeout: 10000 })
 .catch(error => {
  // Hnadler
}))
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 100,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      let uEmbed6 = new Discord.MessageEmbed()
    .setTitle('__Welcome__')
    .setColor(3066993)
    .setDescription(`You are now Verified, Welcome to our server ${message.author}`)
    message.channel.send({embed: uEmbed6})
      .then(sentMessage => sentMessage.delete({ timeout: 60000})
 .catch(error => {
    }));
  });
});
    await message.delete().catch(err => console.log(err));
    const role = message.guild.roles.cache.get('687960444916596886');
    if(role) {
      try {
      setTimeout( async () => {
      await message.member.roles.add(role); }, 10000)
      console.log('Role added!');
    }
    catch(err) {
      console.log(err);
      }
    }
  }

  bot.on('message', message => {
    if(message.author.bot) return;

  if (message.content.toLowerCase() === '^Rules' && message.channel.id === '738151642884472896'){
    const embed = new Discord.MessageEmbed();
    embed.setTitle("Welcome to our server!");
    embed.setColor(000000);
    embed.setDescription(`HERE ARE THE RULES:
    
:smiley: 1. Be cool, kind, and civil. Treat all members with respect and express your thoughts in a constructive manner.
    
:abc: 2. Use English only. Communicate in English, but be considerate of all languages.
    
:card_index: 3. Use appropriate nicknames. Avoid special characters, emoji, obscenities, and impersonation.
    
:incoming_envelope: 4. Do not spam. Avoid excessive messages, images, formatting, emoji, commands, @mentions and NEVER Dm advertise, It is against TOS and we will not allow our members to do break TOS.
    
:no_bell: 5. Do not spam Staff. Respect their time, they are people too and **DO NOT** DM staff for help please use the support ticket or ask for help in the appropiate channel (People who DM staff will just get ignored). 
    
:loud_sound: 6. No self-promotion or advertisements. This includes unsolicited references and links to other social media, servers, communities, and services in chat or direct messages otherwise you will get kicked from the server automatically.
    
:shield: 7. No personal information. Protect your privacy and the privacy of others.
    
:head_bandage: 8. No harassment, abuse, or bullying. We have zero-tolerance for harming others.
    
:anger_right: 9. No racist, sexist, anti-LGBTQ+, or otherwise offensive content. We have zero-tolerance for hate speech.
    
:classical_building: 10. No political or religious topics. These complex subjects result in controversial and offensive posts.
    
:rotating_light: 11. Do not post any NSFW in channels not marked as NSFW.
    
:thinking: 12. Rules are subject to common sense. These rules are not comprehensive and use of loopholes to violate the spirit of these rules is subject to enforcement.
    
:scroll: 13. Discord Terms of Service and Community Guidelines apply. 
You must be at least 13 years old to use Discord, and abide by all other terms and guidelines.`)
message.channel.send({embed: embed});
  }
  })



// Break


    
    
    
});

bot.login(token);