const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = function(client, message, args) {
let prefix = ayarlar.prefix
let botNAME = "Alvi"
let embed = new Discord.MessageEmbed()
.setTitle("Alvi - İstatistik")
.setColor("RANDOM")
.setDescription(`

Bot'un Prefixi:** ${prefix}
Bot'un Adı: ${botNAME}
Bot'un Dili: :flag_tr:
Sahip Adı: ${ayarlar.ownerNAME}
Sahip ID: ${ayarlar.ownerID}
Sahip Discord Nick: ${ayarlar.ownerDcname}
`)

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i", "bot-bilgi"],
  permlevel: 0
};
exports.help = {
  name: "istatistik"
};