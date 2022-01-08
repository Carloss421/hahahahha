const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
let prefix = ayarlar.prefix;
let eğlence = new Discord.MessageEmbed()
.setTitle('Alvi - Eğlence2')
.setColor('RANDOM')
.setDescription(`
\`${prefix}token\` Botun tokenine bakarsınız.
\`${prefix}çuhu\` Botun çüküsüne bakarsınız.
\`${prefix}kızark\` Botun sevgilesine bakarsınız.
\`${prefix}eval\` Kod denersiniz.`)
message.channel.send(eğlence)
};

exports.conf = {
 enabled: true,
 aliases: ["yardım-fun2"],

};

exports.help = {
    name: "yardım-eğlence2"
};