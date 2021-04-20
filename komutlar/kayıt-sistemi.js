const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = function(client, message, msg, args) {}
let embed = new Discord.MessageEmbed()
.setTitle("Alvi - Kayıt")
.setColor("RANDOM")
.setDescription(`
👩‍💼 \`${ayarlar.prefix}kız | ${ayarlar.prefix}kız-kayıt | ${ayarlar.prefix}k\` Kız kaydı yapar.
👩‍💼 \`${ayarlar.prefix}kız-rol\` Kız kaydı yapıldığında verilecek rol.
👨‍💼 \`${ayarlar.prefix}erkek | ${ayarlar.prefix}erkek-kayıt | ${ayarlar.prefiz}e\` Erkek kaydı yapar.
👨‍💼 \`${ayarlar.prefix}erkek-rol\` Erkek kaydı yapıldığında verilecek rol.
📋 \`${ayarlar.prefix}alınacak-rol\` Bir kayıt yapıldığında **@Kayıtsız , @Misafir** rollerini almasını sağlar.
👤 \`${ayarlar.prefix}normal | ${ayarlar.prefix}normal-kayıt | ${ayarlar.prefix}nk\` Üye kaydı yapar.
👤 \`${ayarlar.prefix}normal-rol\` Üye kaydı yapıldığında verilecek rol.`)message.channel.send(embed)

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım-kayıt-sistemi"],
  permlevel: 0
};
exports.help = {
  name: "kayıt-sistemi"
};