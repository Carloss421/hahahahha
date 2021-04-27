const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (message) => {
const embed = new Discord.MessageEmbed()
.setTitle(`Alvi - Moderasyon`)
.setImage('https://cdn.discordapp.com/attachments/826412435321126953/833210593602437191/alvi.PNG')
.setColor(`#add8e6`)
.addField(`:hammer:・\`${ayarlar.prefix}ban\``,`Belirtilen kullanıcıyı sunucudan yasaklar.`,true)
.addField(`:mute:・\`${ayarlar.prefix}mute\``,`Belirtilen kullanıcıyı sunucuda susturur.`,true)
.addField(`:wrench:・\`${ayarlar.prefix}unban\``,`ID'si belirtilen kullanıcının yasağını kaldırır.`,true)
.addField(`:tools:・\`${ayarlar.prefix}unmute\``,`ID'si belirtilen kullanıcının susturulmasını kaldırır.`,true)
.addField(`:face_with_symbols_over_mouth:・\`${ayarlar.prefix}küfür-engel | aç - kapat\``,`Küfür engellemeyi açar,kapatır.`,true)
.addField(`:recycle:・\`${ayarlar.prefix}otorol | otorol-ayarla | otorol-sıfırla\``,`Otorol ayarlar,sıfırlar.`,true)
.addField(`:no_enrty:・\`${ayarlar.prefix}spam-engel | aç - kapat\``,`Spam engeli açar,kapatır.`,true)
.setFooter("Burada çok fazla komut olduğu için ~~`a!moderasyon2`~~ **(YAKINDA!)** yazarak öbür komutlara bakabilirsiniz.")
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
