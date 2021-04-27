const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

let bilgilendirme = new Discord.MessageEmbed()
  .setTitle('Alvi - Capthca Bilgi')
  .setDescription('**Captcha Nedir?** \n\n Captcha, botlara karşı önlem olarak etkili bir çözümdür. Bu test bilgisayarların çözemeyeceği ama insanların çözebileceği şeklinde testlerden oluşan testlerdir. ')
  .addField('Ne işe yarar?', 'Sunucunuza biri geldiğinde **Botunuz** onlara bir DM mesajı gönderir.Bu mesajda bulunan resimdeki karakterleri 3 kere yanlış girerlerse bot belirtilen rolü vermeyecektir.Eğer karakterler doğru girilirse bot rolü verir.')
  .addField('Zorluk Dereceleri', "Birazdan kurulumu tamamlarken,size **Zorluk Derecesi** soracaktır.Bunlar; `kolay,orta,zor` olarak üç'e ayrılır.Zorluk derecesi ne kadar yükselirse bot o kadar zor kodlar gönderir.Tavsiye Ayarımız: **orta**")
  .setTimestamp()
  .setURL('https://discord.gg/NAzGC2cxXR')
  .setColor('BLUE')
  message.channel.send(bilgilendirme)


  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['captcha-info','bilgi-captcha','captcha-bilgi'], 
  permLevel: 0
};

exports.help = {
  name: 'info-captcha',
  description: 'taslak', 
  usage: 'captcha-info'
};