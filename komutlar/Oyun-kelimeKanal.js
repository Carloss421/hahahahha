const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription("Bu komutu kullanabilmek için `YONETICI` iznine sahip olmalısın!"))  

let chn = message.mentions.channels.first();
if(!chn) return message.channel.send(new Discord.MessageEmbed().setDescription("Kelime Tahmin oyunu için bir kanal ayarlamalısın!"))

if(args[0] === "ayarla") {
let a = new Discord.MessageEmbed()
.setDescription("Kelime Tahmin oyunun kanalı "+ args[0] +" olarak ayarlandı.")
db.set(`kelimetahminkanal_${message.guild.id}_${chn.id}`)
};
if(args[0] === "sıfırla") {
let s = new Discord.M
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kelime-kanal"],
  permlevel: 0
};

exports.help = {
  name: "kelime-tahmin-kanal"
}