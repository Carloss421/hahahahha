const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
const db = require('quick.db')
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
let embed = new Discord.MessageEmbed()
.setTitle(`Alvi - Moderasyon2`)
.setColor("RANDOM")
.setDescription(`
\`${prefix}çekiliş-sistemi\` Çekiliş komutlarını açar.
\`${prefix}botkoruma <aç/kapat>  (PREMUIM)\` Botkoruma açıp kapatır.
\`${prefix}botizin | ${prefix}bot-izin ID\` İzin verilen botlara girimesini engellemez.
\`${prefix}müzik-sistemi\` Müzik komutlarını açar.
\`${prefix}davet-sistemi\` Davet komutlarını açar.
\`${prefix}oylama\` Oylama Yapar.
\`${prefix}gif-sistemi\` Gif komutlarını açar.
\`${prefix}kanal-aç\` Kanala yazma izninini açar.
\`${prefix}kanal-kilitle\` Kanal yazma iznini kapatır.
\`${prefix}snipe\` Son silinen mesajı atar.
\`${prefix}yavaşmod\` Bütün kanallara girdiğiniz miktar kadar yavaş mod ayarlar.
\`${prefix}caps-engel <aç/kapat>\` Caps mesaj engeller.
\`${prefix}başvuru-sistemi\` Başvuruları gönderir.
\`${prefix}abone-sistemi\` Abone komutlarını açar.

**müzik-sistemi**'nin içindeki volume komutunu Normal Kullanıcılar: %59'a kadar - Premium Kullanıcıları: %100'yüze kadar arttırabiliyorlar.
**şuan herkes %100'e kadar çekebilir.**

Burada çok fazla komut olduğu için \`${prefix}yardım-moderasyon3\` yazarak komutların devamına bakabilirsiniz.
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