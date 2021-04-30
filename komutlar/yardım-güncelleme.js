const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = function(client, message, args) {
let embed = new Discord.MessageEmbed()
.setTitle("Alvi - Güncelleme")
.setColor("RANDOM")
.setDescription(`
:one: ──────────▕
`)
message.channel.send(embed)
};

// »»————-　★　————-««

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım-update"],
  permlevel: 0
};
exports.help = {
  name: "yardım-güncelleme"
};