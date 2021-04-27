const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
let embed = new Discord.MessageEmbed()
.setTitle('Alvi - Yardım')
.setColor('RANDOM')
.setDescription(`
Alvi'de bulduğunuz hata,çalışmama veya açıkları bildirmek için **${ayarlar.prefix}hata-bildir**
komutunu kullanarak hatayı bildirebilirsiniz eğer komutları kullanmayı bilmiyorsanız [Destek Sunucumuza](https://discord.gg/NAzGC2cxXR) gelerekte bildirebilirsiniz.

**PREMIUM özellikleri 3 ay kullanılabilir olucaktır!**

**kullanıcı menüsü** \`${ayarlar.prefix}yardım-kullanıcı\` Kullanıcı menüsünü açar.
**eğlence menüsü** \`${ayarlar.prefix}yardım-eğlence\` Canı sıkılanlar için yararlı bir menü.
**moderasyon menüsü** \`${ayarlar.prefix}yardım-moderasyon\` Yetkilere kolaylık olsun diye ayarlandı.
**ekonomi menüsü** \`${ayarlar.prefix}yardım-ekonomi\` Eğlence amaçlı ayarlanmıştır.
**yapımcı menüsü** \`${ayarlar.prefix}yardım-yapımcı | ${ayarlar.prefix}yardım-owner\` Yapımcı'nın kullanabiliceği komutları açar.
**güncelleme menüsü** \`${ayarlar.prefix}yardım-güncelleme | ${ayarlar.prefix}yardım-uptade\`Bot'a genel güncellemeleri gösterir
**bot menüsü** \`${ayarlar.prefix}yardım-bot\` Bot'un davet linkini gibi şeyleri gösterir.
`)
message.channel.send(embed)
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["help"],
 permlevel: 0
};
exports.help = {
    name: "yardım"
}