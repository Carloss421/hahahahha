const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (message) => {
const embed = new Discord.MessageEmbed()
.setTitle(`Alvi - Yapımcı`)
.setImage('https://media.discordapp.net/attachments/826412435321126953/833224001308459008/AliBerat_Logo.png')
.setColor('RED')
.setDescription(`
:keyboard: \`${ayarlar.prefix}eval\` Kod denemek için.
:black_small_square: \`${ayarlar.prefix}karaliste\` Birisini karalisteye alır. Alınan kişi komutları kullanamaz.
:gear: \`${ayarlar.prefix}bakım | aç - kapat | bilgi\` Bot'u bakıma almaya yarar.
:bell: \`${ayarlar.prefix}güncelleme | ekle - sil\` Güncelleme eklemeye ve silmeye yarar.
:keyboard::gear: \`${ayarlar.prefix}komut-bakım | aç - kapat\` Belirtilen komutu bakıma almaya yarar.
:arrows_counterclockwise: \`${ayarlar.prefix}reboot\` Bot'u yeniden başlatır.
:low_brightness: \`${ayarlar.prefix}premium | ver - al\` ID'si belirtilen kullanıcıya premium verir.
:high_brightness: \`${ayarlar.prefix}premium-sunucu | ver - al\` ID'si belirtilen sunucuya premium verir.`)
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