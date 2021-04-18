const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (message) => {
let eğlence = new Discord.MessageEmbed()
.setTitle('Alvi - Eğlence')
.setColor('#66ff00')
.setDescription(`
:skull_crossbones:・\`${ayarlar.prefix}wasted\``,`Öldün resmi gönderir.
`:cat:・\`${ayarlar.prefix}kedi-ol\``,`Kedi olursunuz.`,true ,
`:monkey:・\`${ayarlar.prefix}maymun-ol\``,`Maymun olursunuz.`,true ,
`👑・\`${ayarlar.prefix}kral-ol\``,`Kral olursunuz.`,true ,
`:desktop:・\`${ayarlar.prefix}hackle\``,`Hacker olursunuz`,true)
message.channel.send(eğlence)
};

exports.conf = {
 enabled: true,
 aliases: ["yardım-fun"],

};

exports.help = {
    name: "yardım-eğlence"
};
