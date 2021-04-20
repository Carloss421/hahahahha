const Discord = require('discord.js');
const db = require('quick.db');
let prefix = 'a!';
exports.run = function(client, message, args)  { 
  
let rol = message.mentions.roles.first() 
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescripiton(`Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın.`).setColor("RANDOM"));
 
 if(!rol) return message.channel.send(new Discord.MessageEmbed().setDescription(`
:warning: Ayarlamam İçin Bir Rol Etiketlemeilisin. 
Rolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma**
Kullanım : ${prefix}otorol-ayarla @rol #kanalLOG

NOT: Rol vermem için verilecek rolün üstünde bir rolüm olmalı yoksa rolü veremem`).setColor("RANDOM"))
 
 if(!kanal) return message.channel.send(new Discord.MessageEmbed().setDescription(`
:warning: Ayarlamam İçin Bir Kanal Etiketlemeilisin.

`).setColor("RANDOM"))
 const embed = new Discord.MessageEmbed()
  .setDescription(`
:white_check_mark: Otorol Aktif Edildi.
:white_check_mark: **${rol}** Olarak Güncelledim! 
📋 Otorol Log Kanalını **${kanal}** Olarak Güncelledim! 
`)
message.channel.send(embed)
 
  db.set(`otoRL_${message.guild.id}`, rol.id)  
  db.set(`otoRK_${message.guild.id}`, kanal.id) 
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'oto-rol-ayarla',
  description: 'taslak', 
  usage: 'Otorol-ayarla'
};
