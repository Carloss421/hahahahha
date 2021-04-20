const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
let embed = new Discord.MessageEmbed()
.setTitle(`Alvi - Moderasyon`)
.setColor("RANDOM")
.setDescription(`
\`${ayarlar.prefix}ban\` Belirtilen kullanıcıyı sunucudan yasaklar.
\`${ayarlar.prefix}mute\` Belirtilen kullanıcıyı sunucuda susturur.
\`${ayarlar.prefix}unban\` ID'si belirtilen kullanıcının yasağını kaldırır.
\`${ayarlar.prefix}unmute\` ID'si belirtilen kullanıcının susturulmasını kaldırır.
\`${ayarlar.prefix}küfür-engel | aç - kapat\` Küfür engellemeyi açar,kapatır.
\`${ayarlar.prefix}otorol | otorol-ayarla | otorol-sıfırla\` Otorol ayarlar,sıfırlar.
\`${ayarlar.prefix}spam-engel | aç - kapat\` Spam engeli açar,kapatır.
\`${ayarlar.prefix}sil | a!sil 100\` Belirtilen miktar kadar siler.
\`${ayarlar.prefix}sayaç | sayaç-ayarla\` Sayaç ayarlar,sıfırlar.
\`${ayarlar.prefix}kanal-koruma | aç - kapat\` Kanal korumayı açar,kapatır.
\`${ayarlar.prefix}rol-koruma | aç - kapat\` Rol korumayı açar,kapatır.
\`${ayarlar.prefix}emoji-koruma | aç - kapat (PREMUIM)\` Emoji korumayı açar,kapatır.
\`${ayarlar.prefix}sunucu-koruma | aç - kapat (PREMUIM)\` Sunucu korumayı açar,kapatır.
\`${ayarlar.prefix}kayıt-sistemi\` Kayıt komutlarını görürsünüz.
~~\`${ayarlar.prefix}ticket-sistemi\`~~\`(YAKINDA - PREMUIM)\` ~~Ticket komutlarını görürsünüz.~~
~~\`${ayarlar.prefix}jail\`~~\`(YAKINDA)\`~~Belirtilen üyeyi hapise atarsınız~~


**Otorol** Komutunu kullanmayı bilmeyenler \`a!otorol-yardım\` komutunu kullanarak kurabilirler.
**Sayaç** Komutunu kullanmayı bilmeyenler \`a!sayaç-yardım\` komutunu kullanarak kurabilirler.

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