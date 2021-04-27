const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
let embed = new Discord.MessageEmbed()
.setTitle('Alvi - Slash')
.setColor('RANDOM')
.setDescription(`
Alvi'de bulduğunuz hata,çalışmama veya açıkları bildirmek için **${ayarlar.prefix}hata-bildir**
komutunu kullanarak hatayı bildirebilirsiniz eğer komutları kullanmayı bilmiyorsanız [Destek Sunucumuza](https://discord.gg/NAzGC2cxXR) gelerekte bildirebilirsiniz.


\`${ayarlar.prefx}panda\` Panda resimleri atar.
\`${ayarlar.prefx}kedi\` Kedi resimleri atar.
\`${ayarlar.prefx}avatar @Kullanıcı\` Etiketlenen kullanıcının avatarını atar.
\`${ayarlar.prefx}maymun\` Maymun resimleri atar.
\`${ayarlar.prefx}köpek\` Köpek resimleri atar.
\`${ayarlar.prefx}\`
\`${ayarlar.prefx}\`
\`${ayarlar.prefx}\`
`)
message.channel.send(embed)
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["slash-sistemi"],
 permlevel: 0
};

exports.help = {
    name: "yardım-slash"
}