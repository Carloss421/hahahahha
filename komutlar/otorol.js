const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

const embed = new Discord.MessageEmbed()  
.setTitle("Alvi - Otorol HATA")
.setColor('BLUE')
.setDescription(`
a!otorol-ayarla Otorolü Ayarlar.
Örnek: \`a!otorol-ayarla @rolünüz #otorolLOG\`
a!otorol-sıfırla Otorolü kapatır.
Örnek: \`a!otorol-sıfırla\``)

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