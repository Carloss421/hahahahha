const Discord = require('discord.js')
exports.run = function(client, message, args) {
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
\`a!günlük\`     24 saat aralıkla günlük bir ödül alırsınız.
\`a!cüzdan\`       Etiketlediğiniz kişinin veya kendi paranızı görürsünüz.
\`a!gönder\`     Etiketlediğiniz kullanıcıya para gönderirsiniz.
\`a!soygun\`     10 dakikada bir soygun yaparsınız.
\`a!çalış\`      Rastgele bir işte çalışıp maaş alırsınız.
\`a!yatır\`      Kendi cüzdanınızdan bankaya para yatırırsınız.
\`a!çek\`        Bankadan kendi cüzdanınıza para çekersiniz.
\`a!çal\`        Etiketlediğiniz kişinin cüzdanından para çalarsınız.

**🎲 | Oyun Komutları**
\`a!bahis\`      Bahis oynarsınız, para kaybeder veya 2 katını kazanırsınız.
\`a!slot\`       Slots oynarsınız, para kaybeder veya 2 katını kazanırsınız.
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