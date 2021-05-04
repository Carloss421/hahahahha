const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')

exports.run = function(client, msg, message, args) {
  
if(args[0] === 'sıfırla') {
let sıfırlandı = new Discord.MessageEmbed()
.setDescription("Kayıt sistemi sıfırlandı eğer geri getirmek istiyorsan `a!kayıt-sistemi geri getir` Baştan ayarlanabilir.")
message.channel.send(sıfırlandı)
db.delete(`knormalrol_${message.guild.id}`)
db.delete(`kerkekrol_${message.guild.id}`)
db.delete(`kkayıtçırol_${message.guild.id}`)
db.delete(`kkayıtsayı_${message.guild.id}`)
db.delete(`kkayıtkanal_${message.guild.id}`)
db.delete(`kkızrol_${message.guild.id}`)
db.delete(`kkayıtlog_${message.guild.id}`)
};
  
if(args[1] === 'geri getir') {
let getirildi = new Discord.MessageEmbed()
.setDescription("Bütün herşey geri getirildi!")
message.channel.send(getirildi)
db.fetch(`knormalrol_${message.guild.id}`)
db.fetch(`kerkekrol_${message.guild.id}`)
db.fetch(`kkayıtçırol_${message.guild.id}`)
db.fetch(`kkayıtsayı_${message.guild.id}`)
db.fetch(`kkayıtkanal_${message.guild.id}`)
db.fetch(`kkızrol_${message.guild.id}`)
db.fetch(`kkayıtlog_${message.guild.id}`)
};
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayıtları"],
  permlevel: 0
};

exports.help = {
 name: "kayıt-sistemi"
};