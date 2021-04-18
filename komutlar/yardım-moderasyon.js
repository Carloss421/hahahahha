const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
let embed = new Discord.MessageEmbed()
.setTitle(`Alvi - Moderasyon`)
.setColor(`#add8e6`)
.setDescription(`
:hammer: \`${ayarlar.prefix}ban\` Belirtilen kullanıcıyı sunucudan yasaklar.
:mute: \`${ayarlar.prefix}mute\` Belirtilen kullanıcıyı sunucuda susturur.
:wrench: \`${ayarlar.prefix}unban\` ID'si belirtilen kullanıcının yasağını kaldırır.
:tools: \`${ayarlar.prefix}unmute\` ID'si belirtilen kullanıcının susturulmasını kaldırır.
:face_with_symbols_over_mouth: \`${ayarlar.prefix}küfür-engel | aç - kapat\` Küfür engellemeyi açar,kapatır.
:recycle: \`${ayarlar.prefix}otorol | otorol-ayarla | otorol-sıfırla\` Otorol ayarlar,sıfırlar.
⛔️ \`${ayarlar.prefix}spam-engel | aç - kapat\` Spam engeli açar,kapatır.

Burada çok fazla komut olduğu için ~~\`a!moderasyon2\`~~ **(YAKINDA!)** yazarak öbür komutlara bakabilirsiniz.`)
message.channel.send(embed)
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["yardım-mod"],
 permlevel: 0
};

exports.help = {
    name: "yardım-moderasyon"
};