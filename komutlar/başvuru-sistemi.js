const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = function(msg, message) {
let embed = new Discord.MessageEmbed()
.setDescription("`a!başvur - a!başvuru-yap` komutunu kullanarak başvurabilirsiniz.")
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım-başvuru"],
  permlevel: 0
};
exports.help = {
  name: "başvuru-sistemi"
};