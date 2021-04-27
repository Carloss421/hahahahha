const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
const ata = new Discord.MessageEmbed()
.setDescription(":x: Bu komut bakımdadır üzgünüm!")
    message.channel.send(ata);
};

exports.conf = {
 enabled: true,
 aliases: ["atatürkATA"],

};

exports.help = {
    name: "atatürk"
};