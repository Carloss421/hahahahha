const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription("Bu komutu kullanabilmek için `YONETICI` iznine sahip olmalısın!"))  

let chn = message.mentions.channels.first();
if(!chn) return message.channel.send(new Discord.MessageEmbed().setDescription("Sayı Saymaca oyunu için bir kanal ayarlamalısın!"))

if(args[0] === "ayarla") {
let a = new Discord.MessageEmbed()
.setDescription("Sayı Saymaca oyunun kanalı "+ args[0] +" olarak ayarlandı.")
message.channel.send(a)
db.set(`sayısaymaca_${message.guild.id}_${chn.id}`)
};
if(args[0] === "sıfırla") {
let s = new Discord.MessageEmbed()
.setDescription("Sayı Saymaca oyunun kanalı sıfırlandı.")
message.channel.send(s)
db.delete(`sayısaymaca_${message.guild.id}_${chn.id}`)
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sayısayma-kanal"],
  permlevel: 0
};

exports.help = {
  name: "sayısaymaca-kanal"
}