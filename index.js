const Discord = require('discord.js');

const bot = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});
const token = 'ODg1NzU1NTgyMDM5MDc2ODg2.YTrqKw.Id8RHHTpRPJv9uAliC1NDZghSbw';

const PREFIX = '$';
var version='1.0.1';

bot.on('ready',()=>{
    console.log('Captain is online!');
    bot.user.setActivity('CAPTAIN YT SERVER', {type: 'WATCHING'}).catch(console.error);
});
bot.on('guildMemberAdd',member =>{
    const channel = member.guild.channels.find(channel => channel.name === "https://discord.com/channels/798600896249987073/798603317928263680")
    if(!channel) return;

    channel.send('${member}WELCOME TO OUR SERVER,PLZZ READ ALL THE RULES IN RULE CHANNEL')
})
bot.on('message',message=>{
  let args = message.content.substring(PREFIX.length).split(" ");

  switch(args[0]){
      case 'hello':
           message.reply('Hello Friend!')
           break;
      case 'website':
           message.reply('https://flow.page/captainyt')
           break;
      case 'info':
          if(args[1]=== 'version'){
              message.reply('version ' + version)
          }else{
              message.reply('invalid Arguments')
          }
      break;
      case 'clear':
          if(!args[1])return message.reply('Error please define second arg')
          message.channel.bulkDelete(args[1]);
          break;
  }
})
bot.login(token);