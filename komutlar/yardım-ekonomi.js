const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message, args) {
const db = require('quick.db')
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
let yardim = new Discord.MessageEmbed()
.setColor("RANDOM")
.addField("💰 | Ekonomi",`
**\`a!yardım ekonomi\`** - Ekonomi Komutları Hakkında Yardım Alırsınız
\`günlük\`, \`çalış\`, \`soygun\`, \`yatır\`, \`çek\`, \`gönder\``)
.addField("🎲 | Oyunlar",`
**\`a!yardım oyunlar\`** - Oyunlar Komutları Hakkında Yardım Alırsınız
\`balık-tut\`, \`bahis\`, \`slot\``)


let ekonomi = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`
**💰 | Ekonomi Komutları**
\`${prefix}günlük\`     24 saat aralıkla günlük bir ödül alırsınız.
\`${prefix}cüzdan\`       Etiketlediğiniz kişinin veya kendi paranızı görürsünüz.
\`${prefix}gönder\`     Etiketlediğiniz kullanıcıya para gönderirsiniz.
\`${prefix}soygun\`     10 dakikada bir soygun yaparsınız.
\`${prefix}çalış\`      Rastgele bir işte çalışıp maaş alırsınız.
\`${prefix}yatır\`      Kendi cüzdanınızdan bankaya para yatırırsınız.
\`${prefix}çek\`        Bankadan kendi cüzdanınıza para çekersiniz.
\`${prefix}çal\`        Etiketlediğiniz kişinin cüzdanından para çalarsınız.

**🎲 | Oyun Komutları**
\`${prefix}bahis\`      Bahis oynarsınız, para kaybeder veya 2 katını kazanırsınız.
\`${prefix}slot\`       Slots oynarsınız, para kaybeder veya 2 katını kazanırsınız.
~~\`a!balık-tut\`  Balık tutarsınız, rastgele para kazanırsınız veya kaybedersiniz.~~
[Destek Sunucumuz](https://discord.gg/NAzGC2cxXR)`)
message.channel.send(ekonomi)

};

exports.conf = {
    enabled: true, 
    aliases: ["yardım-ekonomi"],
  };

  exports.help = {
    name: 'Yardım'
  };