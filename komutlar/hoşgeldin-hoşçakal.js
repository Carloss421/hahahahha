const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  const ayarlar = require("../ayarlar.json")
let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
   if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setDescription(
    'Bu komutu kullanabilmek için `YONETICI` yetkisine sahip olmalıısn'))
  
   let kanal = message.mentions.channels.first() || args[0]
   if(!kanal) return message.channel.send(new Discord.MessageEmbed().setDescription(`
   ${ayarlar.hata} Hoşgeldin `,'mesajlarının gideceği kanalı etiketlemedin :x:'))
   else {
    db.set(`hoşgeldinK_${message.guild.id}`, kanal.id)
    return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu} Hoşgeldin kanalı `,'<#'+kanal+'> olarak ayarlandı'))
   }
   if(args[0] === 'sıfırla') {
    db.delete(`hoşgeldinK_${message.guild.id}`)
    message.channel.send(new Discord.MessageEmbed().setDescription('Hoşgeldin kanalı sıfırlandı.'))
   }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases:[],
  permlevel: 0
};

exports.help = {
  name: "hoşgeldin",
  description: 'Hoşgeldin kanalını ayarlarsınız.',
  usage: 'hoşgeldin #kanal'
}