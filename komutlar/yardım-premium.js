const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
const premium = new Discord.MessageEmbed()
.setTitle("Alvi - Premium")
.setColor("RANDOM")
.setDescription(`
**Premium nedir?**
Premium özel komutlar veya ona ait yapılan bir komuttur. Premium herşeyde öncelik sağlar,%38 daha fazla katkı. 

**Premium Fiyatları**
1 aylık premium \`10 TL\` 
3 aylık premium \`29 TL\`
5 aylık premium \`45 TL\`
10 aylık premium \`46 TL\`

**Premium Özellikleri**
\`1 aylık premium'da\` **bot'un istatistiklerinde premium kullanıcı (1 aylık) olarak ismizin yazılır ve eğlence,kullanıcı menülerindeki premium komutlarını kullanabilirsiniz.**
\`3 aylık premium'da\` **bot'un istatistiklerinde premium kullanıcı (3 aylık) olarak isminiz yazılır ve eğlence,kullanıcı,moderasyon menülerindeki premium komutlarını kullanabilirsiniz.**
\`5 aylık premium'da\` **bot'un istatistiklerinde premium kullanıcı (5 aylık) olarak isminiz yazılır ve eğlence,kullanıcı,moderasyon premium komutlarını kullanabilirsiniz.**
\`10 aylık premium'da\` **bot'un istatistiklerinde premium kullanıcı (10 aylık) olarak isminiz yazılır, sunucunuza özel komutlar ve eğlence,kullanıcı,moderasyon menülerindeki premium komutları kullanabilirsiniz.**
`)
message.channel.send(premium)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pre-yardım"],
  permlevel: 0
};
exports.help = {
  name: "yardım-premium"
};