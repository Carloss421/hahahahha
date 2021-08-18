const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu} ${message.author}, bu komutu kullanabilmek için \`YONETICI\` yetkisine sahip olmalısın!`))

let p = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;  
let veri = db.fetch(`aboneK_${message.guild.id}`)

};

exports.conf = {
  aliases: ["abone-channel", "subscribe-channel"],
  permlevel: 0
};

exports.help = {
  name: "abone-kanal"
}