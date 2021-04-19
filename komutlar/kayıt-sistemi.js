const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = function(client, message, args) {}
let embed = new Discord.MessageEmbed()
.setTitle("Alvi - Kayıt")
.setColor("RANDOM")
.addField(`
👩‍💼 \`${ayarlar.prefix}kız | ${ayarlar.prefix}kız-kayıt | ${ayarlar.prefix}k\` Kız kaydı yapar.
👩‍💼 \`${ayarlar.prefix}kız-rol\` Kız kaydı yapıldığında verilecek rol.
👨‍💼 \`${ayarlar.prefix}erkek | ${ayarlar.prefix}erkek-kayıt | ${ayarlar.prefiz}e\` Erkek kaydı yapar.
👨‍💼 \`${ayarlar.prefix}erkek-rol\` Erkek kayıt 
`)

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım-kayıt-sistemi"],
  permlevel: 0
};
exports.help = {
  name: "kayıt-sistemi"
};