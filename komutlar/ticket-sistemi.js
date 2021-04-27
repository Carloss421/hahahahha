const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
let embed = new Discord.MessageEmbed()
.setTitle(`Alvi - Moderasyon2`)
.setColor("RANDOM")
.setDescription(`
\`${ayarlar.prefix}ticket aç\` Ticket açar. 
\`${ayarlar.prefix}ticket-kanal\` Ticket kanalı ayarlar. 
\`${ayarlar.prefix}ticket kapat\` Ticket'ı kapatır. 
\`${ayarlar.prefix}ticket-kaldır\` Ticket'ı kaldırır.
\`${ayarlar.prefix}ticket\` Ticket mesajı gönderir.

`)
message.channel.send(embed)
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["yardım-bilet","bilet-sistemi","yardım-ticket"],
 permlevel: 0
};

exports.help = {
    name: "ticket-sistemi"
};