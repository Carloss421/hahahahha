const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
  
let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
  
if(args[0] === 'ayarla') {
if(!args[1]) return message.channel.send(new Discord.Me)
}
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["prefx","prefixx"],
  permlevel: 0
};

exports.help = {
  name: "prefix"
};