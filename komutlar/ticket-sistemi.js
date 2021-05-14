const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
  const db = require('quick.db')
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
let embed = new Discord.MessageEmbed()
.setTitle(`Alvi - Ticket  `)
.setColor("RANDOM")
.setDescription(`
\`${prefix}ticket aç\` Ticket açar. 
\`${prefix}ticket-kanal\` Ticket kanalı ayarlar. 
\`${prefix}ticket kapat\` Ticket'ı kapatır. 
\`${prefix}ticket-kaldır\` Ticket'ı kaldırır.
\`${prefix}ticket gönder\` Ticket mesajı gönderir.

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