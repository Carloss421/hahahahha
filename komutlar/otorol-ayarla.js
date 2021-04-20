const Discord = require('discord.js');
const db = require('quick.db');
let prefix = 's!';
exports.run = (client, message, args) => { 
  
let rol = message.mentions.roles.first() 
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
 
 if(!rol) return message.channel.send(`
${client.emojis.get("742697074457313353")} Ayarlamam İçin Bir Rol Etiketlemeilisin. 
Rolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma**
Kullanım : ${prefix}otorol @rol #kanal 

NOT: Rol vermem için verilecek rolün üstünde bir rolüm olmalı yoksa rolü veremem`)
 
 if(!kanal) return message.channel.send(`
${client.emojis.get("742697074457313353")} Ayarlamam İçin Bir Kanal Etiketlemeilisin.

`)
 const embed = new Discord.MessageEmbed()
  .setDescription(`
 ${client.emojis.get("742698066288574535")} Otorol Aktif Edildi.
 ${client.emojis.get("742698066288574535")} **${rol}** Olarak Güncelledim! 
 ${client.emojis.get("742698066288574535")} Kayıt Kanalını **${kanal}** Olarak Güncelledim! 
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
