const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')
exports.run = function(client, message, args) {
  

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

exports.conf = {
  enabled: true,
  guildOnly: false,
   aliases: ["kayıtları getir"],
  permlevel: 0
};

exports.help = {
 name: "kayıt-sistemini geri getir"
};