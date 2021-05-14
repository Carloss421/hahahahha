const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
  const db = require('quick.db')
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
let embed = new Discord.MessageEmbed()
.setTitle(`Alvi - Moderasyon`)
.setColor("RANDOM")
.setDescription(`
\`${prefix}ban-sistemi\` Ban komutlarını açar.
\`${prefix}mute\` Belirtilen kullanıcıyı sunucuda susturur.
\`${prefix}unban\` ID'si belirtilen kullanıcının yasağını kaldırır.
\`${prefix}unmute\` ID'si belirtilen kullanıcının susturulmasını kaldırır.
\`${prefix}küfür-engel | aç - kapat\` Küfür engellemeyi açar,kapatır.
\`${prefix}otorol | otorol-ayarla | otorol-sıfırla\` Otorol ayarlar,sıfırlar.
\`${prefix}spam-engel | aç - kapat\` Spam engeli açar,kapatır.
\`${prefix}sil | ${prefix}sil 100\` Belirtilen miktar kadar siler.
\`${prefix}sayaç | sayaç-ayarla\` Sayaç ayarlar,sıfırlar.
\`${prefix}kanal-koruma | aç - kapat\` Kanal korumayı açar,kapatır.
\`${prefix}rol-koruma | aç - kapat\` Rol korumayı açar,kapatır.
\`${prefix}emoji-koruma | aç - kapat (YAKINDA - PREMUIM)\` Emoji korumayı açar,kapatır.
\`${prefix}sunucu-koruma | aç - kapat (YAKINDA - PREMUIM)\` Sunucu korumayı açar,kapatır.
\`${prefix}kayıt-sistemi\` Kayıt komutlarını görürsünüz.
\`${prefix}captcha-sistemi\` Captcha komutlarını görürsünüz.
\`${prefix}görev-sistemi\` Görev komutlarını görürsünüz.
\`${prefix}ticket-sistemi(PREMUIM)\` Ticket komutlarını görürsünüz.
~~\`${prefix}jail(YAKINDA)\` Belirtilen üyeyi hapise atarsınız~~

**kayıt-sistemi** komutu kullanılabilir ama bir çok hatası olduğundan dolayı önermiyoruz!
**görev-sistemi** Komutu çalışır durumda ama içinde yazan komutları deneyemezsiniz çünkü onun üzerinde çalışıyor!

Burada çok fazla komut olduğu için \`${prefix}yardım-moderasyon2\` yazarak komutların devamına bakabilirsiniz.`)
message.channel.send(embed)
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["yardım-mod"],
 permLevel: 0

};
exports.help = {
    name: "yardım-moderasyon"
};