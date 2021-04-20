const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
const embed = new Discord.MessageEmbed()  
.setTitle("Alvi - Otorol HATA")
.setColor('BLUE')
.addField('**a!otorol-ayarla** Otorolü Ayarlar.\n Örnek: `a!otorol-ayarla @rolünüz #otorolLOG`')

.setTimestamp()
 message.channel.send(embed) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'otorol',
  description: 'sayaç', 
  usage: 'sayaç'
};
