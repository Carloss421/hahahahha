const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
let eğlence = new Discord.MessageEmbed()
.setTitle('Alvi - Eğlence')
.setColor('RANDOM')
.setDescription(`
:skull_crossbones: \`${ayarlar.prefix}wasted\` Öldün resmi gönderir.
:cat: \`${ayarlar.prefix}kedi-ol\` Kedi olursunuz.
:monkey: \`${ayarlar.prefix}maymun-ol\` Maymun olursunuz
👑 \`${ayarlar.prefix}kral-ol\` Kral olursunuz.
:desktop: \`${ayarlar.prefix}hackle\` Hacker olursunuz`)
message.channel.send(eğlence)
};

exports.conf = {
 enabled: true,
 aliases: ["yardım-fun"],

};

exports.help = {
    name: "yardım-eğlence"
};
