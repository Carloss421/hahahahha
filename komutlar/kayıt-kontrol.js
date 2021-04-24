const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')

exports.run = function(client, message, args) {
let kayıtkadn = db.fetch(`kayıtkadın.${message.guild.id}`)
let kayıter = db.fetch(`kayıte.${message.guild.id}`)
let kayıtye = db.fetch(`kayıty.${message.guild.id}`)
let kayıtlg = db.fetch(`logkayıt.${message.guild.id}`)
let normalr = db.fetch(`norml_${message.guild.id}`)
let embed = new Discord.MessageEmbed()
.setTitle("Alvi - Kayıt")
.setColor("RANDOM")
.setDescription(`
**Kız Rolü:** ${db.has(`kayıtkadın.${message.guild.id}`) ? `<@&kayıtkadn>` : `\`Ayarlanmamış!\``}
**Erkek Rolü:** ${db.has(`kayıte.${message.guild.id}`) ? `<@&kayıter>` : `\`Ayarlanmamış!\``}
**Normal Rolü:** ${db.has(`norml_${message.guild.id}`) ? `<@&norml>` : `\`Ayarlanmamış!\``} 
**Kayıt Yetkili Rolü:** ${db.has(`kayıty.${message.guild.id}` ? `<@&kayıty>` : `\`Ayarlanmamış!\``)}
**Kayıt Log** ${db.has(`logkayıt.${message.guild.id}`) ? `<#logkayıt>` : `\`Ayarlanmamış!\``}`)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım-kayıt-kontrol"],
  permlevel: 0
};
exports.help = {
  name: "kayıt-kontrol"
};
