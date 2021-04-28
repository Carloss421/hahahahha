const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
let embed = new Discord.MessageEmbed()
.setTitle(`Alvi - Ayarlar`)
.setColor("RANDOM")
.setDescription(`
**SAYAC**

`)
message.channel.send(embed)
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["yardım-ayarlar","ayarlar"],
 permlevel: 0
};

exports.help = {
    name: "settings"
};