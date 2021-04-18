const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = function(client, message, args) {
let embed = new Discord.MessageEmbed()
.setTitle("Alvi - Kullanıcı")
.setColor("RANDOM")
.setDescription(`
👤 \`${ayarlar.prefix}kullanıcı-bilgi\` kullanıcı'nın bilgilerine bakarsınız.
📊 \`${ayarlar.prefix}sunucu-bilgi\` sunucu'nun bilgilerine bakarsınız.
🔮 \`${ayarlar.prefix}rol-bilgi\` rol'ün bilgilerine bakarsınız.
🧰 \`${ayarlar.prefix}canlı-destek\` Destek alırsın


`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım-user"],
  permlevel: 0
};
exports.help = {
  name: "yardım-kullanıcı"
}