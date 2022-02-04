const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = async(client, message, args) => {
let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
  
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bu komudu kullanabilmek için **Yönetici** yetkisine sahip olman gerek.`))
  
  if (!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata} Küfür Engel Ayarlamak İçin \`${prefix}Küfür aç\` | Kapatmak İstiyorsanız \`${prefix}Küfür kapat\` Yazabilirsiniz`))
  
  if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata} Küfür Engel Ayarlamak İçin \`${prefix}Küfür aç\` | Kapatmak İstiyorsanız \`${prefix}Küfür kapat\` Yazabilirsiniz`))

    if (args[0] == 'aç') {
    db.set(`küfürE_${message.guild.id}`, 'acik')
    let i = await db.fetch(`küfürE_${message.guild.id}`)
  message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu} Küfür Engel başarıyla ayarlandı.`))
     
  } 

  if (args[0] == 'kapat') {
    
    let üye = await db.fetch(`küfürE_${message.guild.id}`)
    if (!üye) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata} Küfür filtresini açtığına emin misin?.`))
    
    
    db.delete(`küfürE_${message.guild.id}`)
    
    message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu} Küfür Engel Başarıyla Kapatıldı.`))
  }
 
};


exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['küfür', 'küfür-filtresi', 'küfür-engel', 'küfürfiltresi', 'küfür-filtre', 'küfürfiltre'],
 permLevel: 0
};

exports.help = {
 name: 'küfür-engelleme',
 description: 'Küfür',
 usage: 'kanal'
};