const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
const ayarlar = require('../ayarlar.json')
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
const embed = new Discord.MessageEmbed()  
.setTitle("Alvi - Sayaç HATA")
.setColor('BLUE')
.setDescription(`
**${prefix}sayaç-ayarla** Sayacı Ayarlar.
Örnek: \`${prefix}sayaç-ayarla  Hedef #logkanal\``)
.setTimestamp()
 message.channel.send(embed) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["counter"], 
  permLevel: 0
};

exports.help = {
  name: 'sayaç',
  description: 'sayaç', 
  usage: 'sayaç'
};