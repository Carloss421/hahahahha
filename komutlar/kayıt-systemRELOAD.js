const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')
exports.run = function(client, message, args) {
  
let sıfırlandı = new Discord.MessageEmbed()
.setDescription("Kayıt sistemi sıfırlandı! Baştan ayarlanabilir.")
message.channel.send(sıfırlandı)
db.delete(`knormalrol_${message.guild.id}`)
db.delete(`kerkekrol_${message.guild.id}`)
db.delete(`kkayıtçırol_${message.guild.id}`)
db.delete(`kkayıtsayı_${message.guild.id}`)
db.delete(`kkayıtkanal_${message.guild.id}`)
db.delete(`kkızrol_${message.guild.id}`)
db.delete(`kkayıtlog_${message.guild.id}`)

message.channel.send(sıfırlandı)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayıtları sıfırla"],
  permlevel: 0
};

exports.help = {
 name: "kayıt-sistemini-sıfırla"
};