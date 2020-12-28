const Discord = require("discord.js");

const token = process.env.token;

const weather = require('weather-js');

const PREFIX = '$';

const colors = require("./colors.json");

const bot = new Discord.Client({disableEveryone: true});

bot.on('ready', () => console.log(`${bot.user.tag} has logged in fucker.`));

bot.on('message', async message => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === '56516115650202020' && message.channel.id === '784215389583573003'){
    let uembed1 = new Discord.MessageEmbed()
    .setColor(colors.green)
    .setDescription(` 
    To buy impulse mod menu please use this command:
    \`Impulse\`
    
    To buy luna mod menu please use this command: 
    \`Luna\`
    
    To buy phantom mod menu please use this command:
    \`Phantom\`
    
    To buy ozark mod menu please use this command:
    \`Ozark\`
    
    To buy delusion mod menu please use this command:
    \`Delusion\`
  `)
    message.channel.send({embed: uembed1});
   };

  // Break 

  if (message.content.toLowerCase() === '022661120' && message.channel.id === '784215389583573003'){
    let uembed1 = new Discord.MessageEmbed()
    .setColor(colors.red)
    .setDescription(` 
❗**Shop is temperately Offline until further notice.**❗
  `)
  .setTimestamp()
  .setFooter('please be patient')
    message.channel.send({embed: uembed1});
   };

  // Break


 if (message.content.toLowerCase() === 'recovery' && message.channel.id === '784215389583573003' || message.content.toLowerCase() === 'account' && message.channel.id === '784215389583573003'){
   message.channel.send(`${message.author} We have sent you a PM, if you did not get a PM please seek help on <#689358139539324939> and tag <@594785101926105089>`)
    .then(sentMessage => sentMessage.delete({ timeout: 50000
    }))
    .catch(error => {
  
  });
    // Or just do message.delete();
  }
 
  // Break

  if (message.content.toLowerCase() === '0252505504' && message.channel.id === '687713445008769143'){
    let embed = new Discord.MessageEmbed()
    .setColor(000000)
    .setDescription(` **__Welcome to Knight-Shop!__**

    Hello! You are required to complete this Step before entering the server

    **Why?** 
    This is to protect the serveer against targeted attacks using automated user accounts.

    Just simply type:

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
    message.channel.send(`${message.author} Please stand by.
Attempting to verify you in **Kight-Shop** <a:Loading:705280596217430019>`)
  .then(sentMessage => sentMessage.delete({ timeout: 10000})
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
    .setTitle('**Verified**')
    .setColor(3066993)
    .setDescription(`${message.author} You are now Verified, Welcome to our server`)
    message.channel.send({embed: uEmbed6})
      .then(sentMessage => sentMessage.delete({ timeout: 6000})
 .catch(error => {
    }));
  });
});
    await message.delete().catch(err => console.log(err));
    const role = message.guild.roles.cache.get('687960444916596886');
    if(role) {
      try {
      setTimeout( async () => {
      await message.member.roles.add(role); }, 12000)
      console.log('Role added!');
    }
    catch(err) {
      console.log(err);
      }
    }
  }

// Break
if (message.channel.id === '789337633896923158')
    await message.delete();
if (message.content.toLowerCase() === '03332323550' && message.channel.id === '789337633896923158'){
  let uembed1 = new Discord.MessageEmbed()
  .setColor(colors.green)
  .setDescription(` 
  To buy a recovery please use this command:
  \`Recovery\`

To buy a Modded Account please use this command: 
  \`Account\`
`)
  message.channel.send({embed: uembed1});
 };

// Break 

if (message.content.toLowerCase() === '022661120' && message.channel.id === '789337633896923158'){
  let uembed1 = new Discord.MessageEmbed()
  .setColor(colors.red)
  .setDescription(` 
❗**Shop is temperately Offline until further notice.**❗
`)
.setTimestamp()
.setFooter('please be patient')
  message.channel.send({embed: uembed1});
 };

// Break


if (message.content.toLowerCase() === 'recovery' && message.channel.id === '789337633896923158' || message.content.toLowerCase() === 'account' && message.channel.id === '789337633896923158'){
 message.channel.send(`${message.author} We have sent you a PM, if you did not get a PM please seek help on <#689358139539324939> and tag <@594785101926105089>`)
  .then(sentMessage => sentMessage.delete({ timeout: 50000
  }))
  .catch(error => {

});
  // Or just do message.delete();
}

// Break


// New channel

if (message.content.toLowerCase() === '0252505504' && message.channel.id === '789337632911392783'){
  let embed = new Discord.MessageEmbed()
  .setColor(000000)
  .setDescription(` **__Welcome to Knight-Shop!__**

  Hello! You are required to complete this Step before entering the server

  **Why?** 
  This is to protect the serveer against targeted attacks using automated user accounts.

  Just simply type:

  \`!verify\``)
  message.channel.send({embed: embed});
 };

bot.on('guildMemberAdd', member => {
  console.log(member.user.tag);
});

if (message.channel.id === '789337632911392783')
  await message.delete();
if (message.content.toLowerCase() === '!verify' && message.channel.id === '789337632911392783')
{
  message.channel.send(`${message.author} Please stand by.
Attempting to verify you in **Kight-Shop Recoveries** <a:Loading:705280596217430019>`)
.then(sentMessage => sentMessage.delete({ timeout: 10000})
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
  .setTitle('**Verified**')
  .setColor(3066993)
  .setDescription(`${message.author} You are now Verified, Welcome to our server`)
  message.channel.send({embed: uEmbed6})
    .then(sentMessage => sentMessage.delete({ timeout: 6000})
.catch(error => {
  }));
});
});
  await message.delete().catch(err => console.log(err));
  const role = message.guild.roles.cache.get('789337632899334184');
  const freet = message.guild.role.cache.get('793043204416208906')
  if(role) {
    try {
    setTimeout( async () => {
    await message.member.roles.add(role, freet); }, 12000)
    console.log(`Role ${role} and ${freet} added!`);
  }
  catch(err) {
    console.log(err);
    }
  }
}
    
    
    
});

bot.login(token);