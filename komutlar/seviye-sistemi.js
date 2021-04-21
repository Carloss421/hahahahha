const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = function(msg, message) {
let embed = new Discord.MessageEmbed()
.setTitle("Alvi - Seviye Sistemi")
.setColor("RANDOM")
.setDescription(`
\`${ayarlar.prefix}seviye\` **AÇIKLAMA BULUNAMADI!**
\`${ayarlar.prefix}seviye-ayarlar\` Seviye ayarlarını yaparsınız.
\`${ayarlar.prefix}seviye-kanal\` Birisi level atladına logların düşeceği kanal.
\`${ayarlar.prefix}seviye\`
`)
message.channel.send(embed)

  
};

exports.conf = {
 enabled: true,
  guildOnly: false,
  aliases: ["yardım-seviye"],
  permlevel: 0
};
exports.help = {
  name: "seviye-sistemi"
};