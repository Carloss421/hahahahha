const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const dil = require("../Languages/dil");
const dils = new dil("dil", "diller");

exports.run = async(client, message, args) => {
const db = require('quick.db')

   let en = require("../Languages/dil/en.json");
  let tr = require("../Languages/dil/tr.json");

  var lg = dils.get(`dilang.${message.guild.id}`)
  if (lg == "en") {
var lang = en;
  }
  if (lg == "tr") {
var lang = tr;
  }

if(!lg){
const embedd = new Discord.MessageEmbed()
.setThumbnail(client.user.avatarURL())
.setAuthor(client.user.username)

.addField("<:hayir0:838855037161570375> **Hata | Error**",`
**TR:** Botu kullanmadan önce dil seçmeniz gerekmektedir!
Kullanım: **a!dil-ayarla Tr/En**

**EN:** You must select the language before using the bot!
Usage: **a!set-language En/Tr**`)
.setFooter(message.author.tag, message.author.avatarURL())
return message.channel.send({embed: embedd})
};

  
let embed = new Discord.MessageEmbed()
.setTitle(`Alvi - ${lang.helpMenu.hTitle}`)
.setColor('RANDOM')
.setDescription(`
Alvi'de bulduğunuz hata,çalışmama veya açıkları bildirmek için **a!hata-bildir**
komutunu kullanarak hatayı bildirebilirsiniz eğer komutu kullanmayı bilmiyorsanız [Destek Sunucumuza](https://discord.gg/NAzGC2cxXR) gelerekte bildirebilirsiniz.

**kullanıcı menüsü** \`a!yardım-kullanıcı\` Kullanıcı menüsünü açar.
**eğlence menüsü** \`a!yardım-eğlence\` Canı sıkılanlar için yararlı bir menü.
**moderasyon menüsü** \`a!yardım-moderasyon\` Yetkilere kolaylık olsun diye ayarlandı.
**yapımcı menüsü** \`a!yardım-yapımcı | a!yardım-owner\` Yapımcı'nın kullanabiliceği komutları açar.
**güncelleme menüsü** \`a!güncellemeler | a!uptades\` Bot'a gelen güncellemeleri gösterir.
**güncelleme versionları** \`a!güncelleme-v | a!güncelleme-version\` Gelen güncelleme versionlarını gösterir.
**bot menüsü** \`a!yardım-bot\` Bot'un davet linkini gibi şeyleri gösterir.

~~**ekonomi menüsü** \`a!yardım-ekonomi\` Eğlence amaçlı ayarlanmıştır.~~
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