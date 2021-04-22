const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
const embed = new Discord.MessageEmbed()  
.setTitle("Alvi - Otorol HATA")
.setColor('BLUE')
.setDescription(`
a!otorol-ayar aç Otorolü Ayarlar.
Örnek: \`a!otorol-ayar aç @rolünüz #otorolLOG\`
a!otorol-ayar kapat Otorolü kapatır.
Örnek: \`a!otorol-ayar kapat\``)

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
