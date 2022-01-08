const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  const ayarlar = require('../ayarlar.json')
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
const embed = new Discord.MessageEmbed()  
.setTitle("Alvi - Otorol HATA")
.setColor('BLUE')
.setDescription(`
${prefix}otorol-ayarla Otorolü Ayarlar.
Örnek: \`${prefix}otorol-ayarla @rolünüz #otorolLOG\`
${prefix}otorol-sıfırla Otorolü kapatır.
Örnek: \`${prefix}otorol-sıfırla\``)

.setTimestamp()
 message.channel.send(embed) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["autorole"], 
  permLevel: 0
};

exports.help = {
  name: 'otorol',
  description: 'sayaç', 
  usage: 'sayaç'
};