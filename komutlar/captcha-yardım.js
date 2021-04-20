const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
    
     let help = new Discord.RichEmbed()
  .setTitle('Captcha Yardım Menüsü')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .addField('__KOMUTLAR__', "` a!captcha ` - Captcha sistemi bu komut ile aktifleştirebilirsiniz. \n\n` a!captcha-off ` - Captcha sistemi bu komut ile devre dışı bırakabilirsiniz. \n\n` a!captcha-settings ` - Bot sunucunuzdaki aktif captcha ayarlarını gösterir.")
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

