const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Yönetici yetkisine sahip olmalısın.");
  

let veri = await db.fetch(`captchazorluk.${message.guild.id}`) 

if(!veri) return message.reply('Sistem zaten kapalı!')

db.delete(`captchazorluk.${message.guild.id}`) 
db.delete(`captcharol.${message.guild.id}`) 
db.delete(`captchaKanal.${message.guild.id}`)   

message.channel.send('Başarıyla sistem kapatıldı!')  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['captcha-kapat','captcha-sıfırla'], 
  permLevel: 0
};

exports.help = {
  name: 'captcha-off',
  description: 'taslak', 
  usage: 'captcha-off'
};
