const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = async(client, message, args) => {

 let hm = await db.fetch(`seviyeacik_${message.guild.id}`)
  let kanal = await db.fetch(`svlog_${message.guild.id}`)
  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata} Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`));
  
  if(!hm) return message.channel.send(new Discord.MessageEmbed().setDescription('Seviye sistemi zaten aktif hale getirilmemiş!\n Bunu mu arıyorsun? `a!seviye aç`'))
  
  message.reply(new Discord.MessageEmbed().setDescription('Seviye sistemi devre dışı durumuna getiriliyor..')).then(seyit => {
  let evet = new Discord.MessageEmbed()
.setDescription("Getirildi!")
  message.channel.send(evet)
 db.delete(`seviyeacik_${message.guild.id}`)
 db.delete(`svlog_${message.guild.id}`)

  seyit.edit('sistem devre dışı bırakıldı!')  
  }, 5000)
  

  
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'seviye-kapat',
  description: 'taslak',
  usage: 'seviye-kapat'
};   