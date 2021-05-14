const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db
exports.run = function(client, message, args) {
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
let embed = new Discord.MessageEmbed()
.setTitle(`Alvi - Yapımcı`)
.setColor('RED')
.setDescription(`
Yapımcı Adı \`${ayarlar.ownerNAME}\`
Yapımcı Discord \`${ayarlar.ownerDcname}\`
Yapımcı Discord ID \`${ayarlar.ownerID}\`

\`${ayarlar.prefix}eval\` Kod denemek için.
\`${ayarlar.prefix}karaliste\` Birisini karalisteye alır. Alınan kişi komutları kullanamaz.
\`${ayarlar.prefix}bakım | aç - kapat | bilgi\` Bot'u bakıma almaya yarar.
\`${ayarlar.prefix}güncelleme | ekle - sil\` Güncelleme eklemeye ve silmeye yarar.
\`${ayarlar.prefix}komut-bakım | aç - kapat\` Belirtilen komutu bakıma almaya yarar.
\`${ayarlar.prefix}reboot\` Bot'u yeniden başlatır.
\`${ayarlar.prefix}premium-üye | ver - al\` ID'si belirtilen kullanıcıya premium verir.
\`${ayarlar.prefix}premium-sunucu | ver - al\` ID'si belirtilen sunucuya premium verir.`)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım-owner"],
  permlevel: 0
};

exports.help = {
    name: "yardım-yapımcı"
};