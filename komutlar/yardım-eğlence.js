const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (message) => {
const embed = new Discord.MessageEmbed()
.setTitle('Alvi - Eğlence')
.setImage('https://cdn.discordapp.com/attachments/826412435321126953/833210593602437191/alvi.PNG')
.setColor('#66ff00')
.addField(`:skull_crossbones:・\`${ayarlar.prefix}wasted\``,`Öldün resmi gönderir.`,true)
.addField(`:cat:・\`${ayarlar.prefix}kedi-ol\``,`Kedi olursunuz.`,true)
.addField(`:monkey:・\`${ayarlar.prefix}maymun-ol\``,`Maymun olursunuz.`,true)
.addField(`👑・\`${ayarlar.prefix}kral-ol\``,`Kral olursunuz.`,true)
.addField(`:desktop:・\`${ayarlar.prefix}hackle\``,`Hacker olursunuz`,true)
message.channel.send(embed)
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["yardım-fun"],
 permlevel: 0
};

exports.help = {
    name: "yardım-eğlence"
};
