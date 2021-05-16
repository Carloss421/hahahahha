const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
    const ayarlar = require('../ayarlar.json')
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
 if (!message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send(new Discord.MessageEmbed().setColor('RED').setAuthor(message.author.username, message.author.avatarURL({dynamic: true})).setDescription(`${message.author} Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın!`)).then(m => m.delete({timeout: 7000}))
  
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 1) return message.channel.send(new Discord.MessageEmbed().setDescription(
'Seviye Mesaj Sistemi İçin En Az 5 Karakter Belirtebilirsin. `Örnek;`\n**'+ prefix +'seviye-msg-ayarla -member-, -server-, Sunucusunda , -seviye- Seviyeye Ulaştın Bir Sonraki Levele -totalxp- Xp Kaldı Şuanki Xp Sayın -seviyexp- !**'))
 message.channel.send('Seviye mesajını `'+mesaj+'` Olarak ayarladım.') 
 db.set(`seviyemsj_${message.guild.id}`, mesaj)  
    
  
  
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['seviye-mesaj-ayarla'], 
  permLevel: 0
};

exports.help = {
  name: 'seviye-msg-ayarla'
};