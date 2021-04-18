const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
let eğlence = new Discord.MessageEmbed()
.setTitle('Alvi - Eğlence')
.setColor('RANDOM')
.setDescription(`
:skull_crossbones: ~~ \`${ayarlar.prefix}wasted\` Öldün resmi gönderir.~~
:cat: ~~ \`${ayarlar.prefix}kedi-ol\` Kedi olursunuz.~~
:heart: ~~ \`${ayarlar.prefix}aşk-ölçer\` Aşk ölçer.~~
:monkey: ~~ \`${ayarlar.prefix}maymun-ol\` Maymun olursunuz~~
👑~~ \`${ayarlar.prefix}kral-ol\` Kral olursunuz.~~
:desktop: ~~\`${ayarlar.prefix}hackle\` Hacker olursunuz~~

**YAKINDA KOMUTLAR AKTIF OLUCAKTIR!**
`)
message.channel.send(eğlence)
};

exports.conf = {
 enabled: true,
 aliases: ["yardım-fun"],

};

exports.help = {
    name: "yardım-eğlence"
};
