const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
let embed = new Discord.MessageEmbed()
.setTitle(`Alvi - Moderasyon2`)
.setColor("RANDOM")
.setDescription(`
\`${ayarlar.prefix}çekiliş-sistemi\` Çekiliş komutlarını açar.
\`${ayarlar.prefix}botkoruma <aç/kapat>  (PREMUIM)\` Botkoruma açıp kapatır.
\`${ayarlar.prefix}botizin | a!bot-izin ID\` İzin verilen botlara girimesini engellemez.
\`${ayarlar.prefix}müzik-sistemi\` Müzik komutlarını açar.
\`${ayarlar.prefix}davet-sistemi\` Davet komutlarını açar.
\`${ayarlar.prefix}oylama\` Oylama Yapar.
\`${ayarlar.prefix}gif-sistemi\` Gif komutlarını açar.
\`${ayarlar.prefix}kanal-aç\` Kanala yazma izninini açar.
\`${ayarlar.prefix}kanal-kilitle\` Kanal yazma iznini kapatır.
\`${ayarlar.prefix}seviye-sistemi\` Seviye komutlarını açar.
\`${ayarlar.prefix}snipe\` Son silinen mesajı atar.
\`${ayarlar.prefix}yavaşmod\` Bütün kanallara girdiğiniz miktar kadar yavaş mod ayarlar.
\`${ayarlar.prefix}caps-engel <aç/kapat>\` Caps mesaj engeller.
\`${ayarlar.prefix}başvuru-sistemi\` Başvuruları gönderir.
\`${ayarlar.prefix}abone-sistemi\` Abone komutlarını açar.

**müzik-sistemi**'nin içindeki volume komutunu Normal Kullanıcılar: %59'a kadar - Premium Kullanıcıları: %100'yüze kadar arttırabiliyorlar.
**şuan herkes %100'e kadar çekebilir.**

Burada çok fazla komut olduğu için \`a!yardım-moderasyon3\` yazarak komutların devamına bakabilirsiniz.
`)
message.channel.send(embed)
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["yardım-mod2"],
 permlevel: 0
};

exports.help = {
    name: "yardım-moderasyon2"
};