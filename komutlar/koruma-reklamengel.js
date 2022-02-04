const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = async(client, message, args) => {
let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
  
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bu komudu kullanabilmek için **Yönetici** yetkisine sahip olman gerek.`))
  
  if (!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata} Reklam Engel Ayarlamak İçin \`${prefix}reklam aç\` | Kapatmak İstiyorsanız \`${prefix}reklam kapat\` Yazabilirsiniz`))
  
  if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata} Reklam Engel Ayarlamak İçin \`${prefix}reklam aç\` | Kapatmak İstiyorsanız \`${prefix}reklam kapat\` Yazabilirsiniz`))

    if (args[0] == 'aç') {
    db.set(`reklamE_${message.guild.id}`, 'acik')
    let i = await db.fetch(`reklamE_${message.guild.id}`)
  message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu} Reklam Engel başarıyla ayarlandı.`))
     
  } 

  if (args[0] == 'kapat') {
    
    let üye = await db.fetch(`reklamE_${message.guild.id}`)
    if (!üye) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata} Reklam filtresini açtığına emin misin?.`))
    
    
    db.delete(`reklamE_${message.guild.id}`)
    
    message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu} Reklam Engel Başarıyla Kapatıldı.`))
  }
 
};


exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['reklam', 'reklam-filtresi', 'reklam-engel', 'reklamfiltresi', 'reklam-filtre', 'reklamfiltre'],
 permLevel: 0
};

exports.help = {
 name: 'reklam-engelleme',
 description: 'reklamm',
 usage: 's$$kanal'
};