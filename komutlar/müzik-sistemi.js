const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Alvi - Müzik Sistemi')
.setDescription(`
**-Çal-** Müzik Açar \`a!play\`
**-Devam-** Şarkıya Devam Eder \`a!resum\`)
**-Duraklat-** Şarkıyı Durdurur \`a!stop\`)
**-Kapat-** Şarkıyı Kapatır \`a!disconnect\`)
**-Geç-** Şarkıyı Geçersiniz \`a!skip\``)
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['y','yardım','müzik','muzik','mz'], 
  permLevel: 0 
};

exports.help = {
  name: 'help',
  description: 'Tüm komutları gösterir.',
  usage: 'müzik'
};