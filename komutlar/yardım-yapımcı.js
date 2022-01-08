const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = function(client, message, args) {
const db = require('quick.db')
let prefix = ayarlar.prefix;
let embed = new Discord.MessageEmbed()
.setTitle(`Alvi - Yapımcı`)
.setColor('RED')
.setDescription(`
Yapımcı Adı \`${ayarlar.ownerNAME}\`
Yapımcı Discord \`${ayarlar.ownerDcname}\`
Yapımcı Discord ID \`${ayarlar.ownerID}\`

\`${prefix}eval\` Kod denemek için.
\`${prefix}karaliste\` Birisini karalisteye alır. Alınan kişi komutları kullanamaz.
\`${prefix}bakım | aç - kapat | bilgi\` Bot'u bakıma almaya yarar.
\`${prefix}güncelleme | ekle - sil\` Güncelleme eklemeye ve silmeye yarar.
\`${prefix}reboot\` Bot'u yeniden başlatır.`)
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