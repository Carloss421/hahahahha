const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
let eğlence = new Discord.MessageEmbed()
.setTitle('Alvi - Eğlence2')
.setColor('RANDOM')
.setDescription(`
\`${ayarlar.prefix}token\` Botun tokenine bakarsınız.
\`${ayarlar.prefix}çuhu\` Botun çüküsüne bakarsınız.
\`${ayarlar.prefix}kızark\` Botun sevgilesine bakarsınız.
\`${ayarlar.prefix}eval\` Kod denersiniz.`)
message.channel.send(eğlence)
};

exports.conf = {
 enabled: true,
 aliases: ["yardım-fun2"],

};

exports.help = {
    name: "yardım-eğlence2"
};
