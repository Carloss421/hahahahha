const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = (client, message, args) => { 

let kanal = message.mentions.channels.first() 
let sayı = args[1]
let kalan = args[1] - message.guild.memberCount
 if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın.`).setColor("RANDOM"));
 
 if(!kanal) return message.channel.send(new Discord.MessageEmbed().setDescription(`
Lütfen Bir Kanal Belirt. :shrug:
Örnek Kullanım: \`${ayarlar.prefix}sayaç-ayarla #kanal <Sayı>\``).setColor("RANDOM"))
  
 if(isNaN(args[1])) return message.channel.send(new Discord.MessageEmbed().setDescription(`
Belirttiğin Sayı Çok Küçük Veya O Sayıya Zaten Ulaşmışsın :shrug:
Örnek Kullanım : 
\`${ayarlar.prefix}sayaç-ayarla #kanal <Sayı>\``).setColor("RANDOM"))
 
 if(message.guild.memberCount > args[1]) return message.channel.send(new Discord.MessageEmbed().setDescription(`
Belirttiğin Sayı Çok Küçük Veya O Sayıya Zaten Ulaşmışsın :shrug:
Örnek Kullanım : 
\`${ayarlar.prefix}sayaç-ayarla #kanal <Sayı>\``).setColor("RANDOM"))
const doğru = new Discord.MessageEmbed()
 
  .setDescription(`
:white_check_mark: Sayaç Aktif Edildi.
📊 Hedefi **${args[1]}** Olarak Güncelledim! 
📋 Log Kanalını **${kanal}** Olarak Güncelledim! 
👨‍👨‍👧‍👧 ${args[1]} Kişi Olmaya Son :fire: **${kalan}** :fire: Kişi Kaldı!`)
message.channel.send(doğru)
  
  db.set(`sayacK_${message.guild.id}`, kanal.id)  
  db.set(`sayacS_${message.guild.id}`, sayı) 
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'sayaç-ayarla',
  description: 'taslak', 
  usage: 'sayaç-ayarla'
};
