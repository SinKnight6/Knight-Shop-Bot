const Discord = require("discord.js");

const token = process.env.token;

const weather = require('weather-js');

const PREFIX = '$';

const bot = new Discord.Client({disableEveryone: true});

bot.on('ready', () => console.log(`${bot.user.tag} has logged in fucker.`));

bot.on('message', async message => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === '0252505504' && message.channel.id === '687713445008769143'){
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

// Break


    
    
    
});

bot.login(token);