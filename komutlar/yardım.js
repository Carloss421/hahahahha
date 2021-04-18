const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (message) => {
const embed = new Discord.MessageEmbed()
.setTitle('Alvi - Yardım')
.setColor('BLACK')
.setImage('https://cdn.discordapp.com/attachments/826412435321126953/833210593602437191/alvi.PNG')
.addField(`
Alvi'de bulduğunuz hata,çalışmama veya açıkları bildirmek için **${ayarlar.prefix}hata-bildir**
komutunu kullanarak hatayı bildirebilirsiniz eğer komutu kullanmayı bilmiyorsanız [Destek Sunucumuza](https://discord.gg/NAzGC2cxXR) gelerekte bildirebilirsiniz.`)
.addField(`:bust_in_silhouette:・kullanıcı menüsü: \`${ayarlar.prefix}yardım-kullanıcı\``,`Kullanıcı menüsünü açar.`,true)
.addField(`:gift:・eğlence menüsü: \`${ayarlar.prefix}yardım-eğlence\``,`Canı sıkılanlar için yararlı bir menü.`,true)
.addField(`:man_police_officer:・ moderasyon menüsü: \`${ayarlar.prefix}yardım-moderasyon\``,`Yetkilere kolaylık olsun diye ayarlandı.`,true)
.addField(`:money_with_wings:・ekonomi menüsü: \`${ayarlar.prefix}yardım-ekonomi\``,`Eğlence amaçlı ayalarnamıştır.`,true)
.addField(`:keyboard:・yapımcı menüsü: \`${ayarlar.prefix}yardım-yapımcı | ${ayarlar.prefix}yardım-owner\``,`Yapımcı'nın kullanabiliceği komutları açar.`,true)
.addField(`:bell:・güncelleme menüsü: \`${ayarlar.prefix}yardım-güncelleme | ${ayarlar.prefix}yardım-uptade\``,`Bot'a genel güncellemeleri gösterir`,true)

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