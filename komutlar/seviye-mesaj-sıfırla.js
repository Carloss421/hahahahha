const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
 if (!message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send(new Discord.MessageEmbed().setColor('RED').setAuthor(message.author.username, message.author.avatarURL({dynamic: true})).setDescription(`${message.author} Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın!`)).then(m => m.delete({timeout: 7000}))
  
  let mesaj = args[0]
  //if(!mesaj) return message.channel.send('Sıfırlamak İçin: **m!seviye-msg-sıfırla**') 
 message.channel.send('Seviye Mesaj Sistemi Başarı İle Sıfırlandı!') 
 db.delete(`seviyemsj_${message.guild.id}`)  
    
  
  
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['seviye-mesaj-sıfırla'], 
  permLevel: 0
};

exports.help = {
  name: 'seviye-msg-sıfırla'
};