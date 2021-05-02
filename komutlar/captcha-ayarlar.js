const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDesciption("Yönetici yetkisine sahip olmalısınız!"));


let zorluk = await db.fetch(`captchazorluk.${message.guild.id}`) 
let rol = await db.fetch(`captcharol.${message.guild.id}`)  
let kanal = await db.fetch(`captchaKanal.${message.guild.id}`)   

if(!zorluk) return message.reply(new Discord.MessageEmbed().setDesciption('Sistem devre dışı! Lütfen Ayarlayınız!'))


   let adım3 = new Discord.MessageEmbed()
.setTitle('Alvi - Captcha Ayarları')
.addField('Sistem', '**Rol** <@&'+rol+'> \n\n Zorluk Seviyesi `'+zorluk+'` \n\n **Log Kanalı** `'+kanal+'')
.setTimestamp()
.setURL('https://discord.gg/NAzGC2cxXR')
.setColor('BLUE')      
message.channel.send(adım3)



  return  




  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['captcha-ayarlar'], 
  permLevel: 0
};

exports.help = {
  name: 'captcha-settings',
  description: 'taslak', 
  usage: 'captcha-settings'
};