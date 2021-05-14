const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../z/ayarlar/ayarlar.json')
exports.run = async (client, message, args) => {
let a = ayarlar.prefix
    let p = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
 let o = await db.fetch(`prefix.${message.guild.id}`)
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.RichEmbed()
.setDescription(`Bu Komutu Kullanabilmek İçin Mesajları Yönet Yetkisine Sahip Olmalısınız. Şuanki Prefix: ${p}`));
  
if(args[0] === "ayarla") {
if(o) { return message.channel.send(new Discord.RichEmbed()
.setDescription(`Ayarlanmış Şeyi Tekrar Ayarlıyamassın. Şuanki Prefix: ${p} Sıfırlamak İçin ${p}prefix sıfırla`));
      }
if(!args[1]) return message.channel.send(new Discord.RichEmbed()
.setDescription(`Bir Prefix Girip Tekrar Dene. Şuanki Prefix: ${p}`));
db.set(`prefix.${message.guild.id}`, args[1])
message.channel.send(new Discord.RichEmbed()
.setDescription(`Prefix Başarıyla Ayarlandı. Şuanki Prefix: ${args[1]}`));
}
    if(args[0] === "sıfırla") {
    if(!o) {
       return message.channel.send(new Discord.RichEmbed()
.setDescription(`Ayarlanmayan Prefixi Sıfırlayamazsınız. Şuanki Prefix: ${p}`));
    }
    db.delete(`prefix.${message.guild.id}`)       
   return message.channel.send(new Discord.MessageEmbed()
.setDescription(`Prefix Başarıyla Sıfırlandı. Şuanki Prefix: ${a}`));
  }
 
 if(!args[0]) return message.channel.send(new Discord.RichEmbed()        
.setDescription(`Prefix Ayarlamak İçin ${p}prefix ayarla <prefix> / Sıfırlamak İçin ${p}prefix sıfırla Şuanki Prefix: ${p}`));
  
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['p'],
    permLevel: 0
};
  
  exports.help = {
    name: 'prefix',      
    description: '',
    usage: 'prefix <giriceğiniz şey>'
};

/*const db = require('quick.db');
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
exports.run = (client, message, args, func) => {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın.`));
  
  let preffix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
  
    if(args[0] === "sıfırla") {
    if(!preffix) {
      message.channel.send(new Discord.MessageEmbed().setDescription(`Ayarlanmayan şeyi sıfırlayamazsın.`))
      return
    }
    
    db.delete(`prefix_${message.guild.id}`)
    message.channel.send(new Discord.MessageEmbed().setDescription(`Başarılı. Mevcut prefix \`${ayarlar.prefix}\``))
    return
  }
  
  if(args[0] === "ayarla") {
   if(!preffix) {
    message.channel.send(new Discord.MessageEmbed().setDescription(`Prefix zaten bu sunucuda aynı!`))
     return
   } 
  return message.channel.send(`Bir prefix girmelisin.`)
  db.set(`prefix_${message.guild.id}`, args[0])
    message.channel.send(new Discord.MessageEmbed()
.setDescription(` 
Prefix başarıyla \`${args[0]}\` olarak ayarlandı.
Prefixi unutursanız <@828267474192564245>'yi etiketleminiz yeterli!`))
  }
  

   
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['prefix-ayarla'],
    kategori: 'ayarlar',
    permLevel: 3
};
  
  exports.help = {
    name: 'prefix',
    description: 'Bota eklenmesini istediğiniz şeyi tavsiye etmenizi sağlar',
    usage: 'prefix <prefix>'
};*/