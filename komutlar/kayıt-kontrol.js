const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')

exports.run = function(client, message, args) {
let kayıtkadn = db.fetch(`kayıtkadın.${message.guild.id}`)
let kayıter = db.fetch(`kayıte.${message.guild.id}`)
let kayıtye = db.fetch(`kayıty.${message.guild.id}`)
let kayıtlg = db.fetch(`logkayıt.${message.guild.id}`)
let normalr = db.fetch(`norml_${message.guild.id}`)
let alnck = db.fetch(`kayıtalınacakrol.${message.guild.id}`)
let embed = new Discord.MessageEmbed()
.setTitle("Alvi - Kayıt")
.setColor("RANDOM")
.addField(`**Alınacak Rol**`, `${db.has(`kayıtalınacakrol.${message.guild.id}`) ? `<@&${alnck}>` : `\`Ayarlanmamış!\``} `,true)
.addField(`**Kız Rolü**`, `${db.has(`kayıtkadın.${message.guild.id}`) ? `<@&${kayıtkadn}>` : `\`Ayarlanmamış!\``} `,true)
.addField(`**Erkek Rolü**`, `${db.has(`kayıte.${message.guild.id}`) ? `<@&${kayıter}>` : `\`Ayarlanmamış!\``} `,true)
.addField(`**Normal Rolü**`, `${db.has(`norml_${message.guild.id}`) ? `<@&${normalr}>` : `\`Ayarlanmamış!\``} `,true)
.addField(`**Kayıt Yetkili Rolü**`, `${db.has(`kayıty.${message.guild.id}` ? `<@&${kayıtye}>` : `\`Ayarlanmamış!\``)} `,true)
.addField(`**Kayıt Log**`, `${db.has(`logkayıt.${message.guild.id}`) ? `<#${kayıtlg}>` : `\`Ayarlanmamış!\``} `,true)
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
