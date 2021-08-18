const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
const db = require('quick.db')
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
  
let embed = new Discord.MessageEmbed()
.setTitle('Alvi - Yardım')
.setColor('RANDOM')
.setDescription(`
Alvi'de bulduğunuz hata,çalışmama veya açıkları bildirmek için **${prefix}hata-bildir**
komutunu kullanarak hatayı bildirebilirsiniz eğer komutu kullanmayı bilmiyorsanız [Destek Sunucumuza](https://discord.gg/NAzGC2cxXR) gelerekte bildirebilirsiniz.

**kullanıcı menüsü** \`${prefix}yardım-kullanıcı\` Kullanıcı menüsünü açar.
**eğlence menüsü** \`${prefix}yardım-eğlence\` Canı sıkılanlar için yararlı bir menü.
**moderasyon menüsü** \`${prefix}yardım-moderasyon\` Yetkilere kolaylık olsun diye ayarlandı.
**yapımcı menüsü** \`${prefix}yardım-yapımcı | ${prefix}yardım-owner\` Yapımcı'nın kullanabiliceği komutları açar.
**güncelleme menüsü** \`${prefix}güncellemeler | ${prefix}uptades\` Bot'a gelen güncellemeleri gösterir.
**güncelleme versionları** \`${prefix}güncelleme-v | ${prefix}güncelleme-version\` Gelen güncelleme versionlarını gösterir.
**bot menüsü** \`${prefix}yardım-bot\` Bot'un davet linkini gibi şeyleri gösterir.

~~**ekonomi menüsü** \`${prefix}yardım-ekonomi\` Eğlence amaçlı ayarlanmıştır.~~
`)
message.channel.send(embed)
};

exports.conf = {
 aliases: ["help"],
 permlevel: 0
};
exports.help = {
    name: "yardım"
}