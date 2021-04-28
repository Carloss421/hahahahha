const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
let embed = new Discord.MessageEmbed()
.setTitle(`Alvi - Moderasyon3`)
.setColor("RANDOM")
.setDescription(`
~~\`${ayarlar.prefix}botlist-sistemi\` Botlist komutlarını açar.~~
\`${ayarlar.prefix}ban-sistemi\` Ban komutlarını açar.
~~\`${ayarlar.prefix}mute-sistemi\` Mute komutlarını açar.~~
\`${ayarlar.prefix}ayarlar\` Sunucudaki ayarlanan herşeyi gösterir.
`)
message.channel.send(embed)
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["yardım-mod3"],
 permlevel: 0
};

exports.help = {
    name: "yardım-moderasyon3"
};