const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

const embed = new Discord.MessageEmbed()  
.setTitle("Alvi - Sayaç HATA")
.setColor('BLUE')
.addField(`
**a!sayaç-ayarla** Sayacı Ayarlar.\n Örnek: \`a!sayac-ayarla #logkanal **Sayı**\`
**a!sayac-hg-msg ** Sayaç Hoşgeldin Mesajını Ayarlar. \n Örnek: \`s!sayac-hg-msg server\` | Sunucumuza Hoşgeldin ! | uye hedefuye Kişiye Ulaşabilmek İçin kalanuye Kişi Kaldı! |  **uyesayisi** Kişiyiz. 
**s!sayac-bb-msg** **Sayaç Bay Bay Mesajını Ayarlar. **\nÖrnek: \`s!sayac-bb-msg uyetag\` | Sunucumuzdan Ayrıldı | hedefuye Kişiye Ulaşabilmek İçin kalanuye Kişi Kaldı. **uyesayisi** Kişiyiz.`)
.setTimestamp()
 message.channel.send(embed) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'sayaç',
  description: 'sayaç', 
  usage: 'sayaç'
};
