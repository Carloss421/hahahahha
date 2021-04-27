const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

const embed = new Discord.MessageEmbed()  
.setTitle("Alvi - Sayaç HATA")
.setColor('BLUE')
.setDescription(`
**a!sayaç-ayarla** Sayacı Ayarlar.
Örnek: \`a!sayaç-ayarla  Hedef #logkanal\``)
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
  name: 'sayaç',
  description: 'sayaç', 
  usage: 'sayaç'
};