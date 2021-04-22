const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
let eğlence = new Discord.MessageEmbed()
.setTitle('Alvi - Sevgili')
.setColor('RANDOM')
.setDescription(`**Buyur sevgilim!**`)
.setImage("https://i.pinimg.com/originals/f2/52/32/f25232902a34948b6730d2945f97dbee.jpg")
message.channel.send(eğlence)
};

exports.conf = {
 enabled: true,
 aliases: ["bot-sev"],

};

exports.help = {
    name: "kızark"
};