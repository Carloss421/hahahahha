const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  const ayarlar = require('../ayarlar.json')
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
     let help = new Discord.MessageEmbed()
  .setTitle('Alvi - Captcha ')
  .addField('__KOMUTLAR__', "`"+ prefix +"captcha` - Captcha sistemi bu komut ile aktifleştirebilirsiniz. \n\n`"+ prefix +"captcha-kapat` - Captcha sistemi bu komut ile devre dışı bırakabilirsiniz. \n\n`a!captcha-ayarlar` - Bot sunucunuzdaki aktif captcha ayarlarını gösterir.")
  .setTimestamp()
  .setColor('RANDOM')        
message.channel.send(help)


  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['captcha-help','yardım-captcha','captcha-sistemi'], 
  permLevel: 0
};

exports.help = {
  name: 'help-captcha',
  description: 'taslak', 
  usage: 'captcha-help'
};