const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')


exports.run = function(client, message, args) {
const db = require('quick.db')
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
let embed = new Discord.MessageEmbed()
.setTitle("Alvi - Seviye Sistemi")
.setColor("RANDOM")
.setDescription(`
\`${prefix}rank\` Sizin rank'ınızı gösterir.
\`${prefix}seviye-mesaj-ayarla\` Seviye mesajını ayarlar.
\`${prefix}seviye-mesaj-sıfırla\` Seviye mesajını sıfırlar.
\`${prefix}seviye-kanal\` Birisi level atladına logların düşeceği kanal.`)
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


/*const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
exports.run = function(msg, message) {
let embed = new Discord.MessageEmbed()
.setTitle("Alvi - Seviye Sistemi")
.setColor("RANDOM")
.setDescription(`
\`${ayarlar.prefix}seviye\` **AÇIKLAMA BULUNAMADI!**
\`${ayarlar.prefix}seviye-ayarlar\` Seviye ayarlarını yaparsınız.
\`${ayarlar.prefix}seviye-kanal\` Birisi level atladına logların düşeceği kanal.`)
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
};*/