const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {

let embed = new Discord.MessageEmbed()
.setTitle(`Alvi - Yardım Menüsü`)
.setColor('RANDOM')
.setDescription("Alvi'de bulduğunuz hata,çalışmama veya açıkları bildirmek için **a!hata-bildir** komutunu kullanarak hatayı bildirebilirsiniz eğer komutu kullanmayı bilmiyorsanız [Destek Sunucumuza](https://discord.gg/NAzGC2cxXR) gelerekte bildirebilirsiniz.\n\n**kullanıcı menüsü** `a!yardım-kullanıcı` Kullanıcı menüsünü açar.\n**eğlence menüsü** `a!yardım-eğlence` Canı sıkılanlar için yararlı bir menü.\n**moderasyon menüsü** `a!yardım-moderasyon` Yetkilere kolaylık olsun diye ayarlandı.\n**yapımcı menüsü** `a!yardım-yapımcı | a!yardım-owner` Yapımcı'nın kullanabiliceği komutları açar.\n**güncelleme menüsü** `a!güncellemeler | a!uptades` Bot'a gelen güncellemeleri gösterir.\n**güncelleme versionları** `a!güncelleme-v | a!güncelleme-version` Gelen güncelleme versionlarını gösterir.\n**bot menüsü** `a!yardım-bot` Bot'un davet linkini gibi şeyleri gösterir.\n\n~~**ekonomi menüsü** `a!yardım-ekonomi` Eğlence amaçlı ayarlanmıştır.~~")
message.channel.send(embed)
};

exports.conf = {
 aliases: ["help"],
 permlevel: 0
};
exports.help = {
    name: "yardım"
}