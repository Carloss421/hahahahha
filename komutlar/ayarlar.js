const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
// KULLANIM \\
let açık = "<:acik:842931863379378197>"
let kapalı = "<:kapali:831811077339217961>"
let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;

let ayarlarS = new Discord.MessageEmbed()
.setDescription(`
**${message.guild.name} Sunucusun Ayarları**

Küfür Engel: ${db.has(`küfürE_${message.guild.id}`) ? `**${açık} Açık**` : `**${kapalı} Kapalı**`}
Reklam Engel: ${db.has(`reklamE_${message.guild.id}`) ? `**${açık} Açık**` : `**${kapalı} Kapalı**`}
Otorol: ${db.has(`otoRL_${message.guild.id}`) ? `**${açık} Açık` : `**${kapalı} Kapalı**`}
Bot Koruma: ${db.has(`botK_${message.guild.id}`) ? `**${açık} Açık` : `**${kapalı} Kapalı**`}
Rol Koruma: ${db.has(`rolk_${message.guild.id}` ? `**${açık} Açık` : `**${kapalı} Kapalı**`)}
Emoji Koruma: ${db.has(`emojikoruma_${message.guild.id}`) ? `**${açık} Açık` : `**${kapalı} Kapalı**`}
Prefix: ${db.has(`prefix_${message.guild.id}`) ? `**${prefix}**` : `**${ayarlar.prefix}**`}
Sayaç: ${db.has(`sayac_${message.guild.id}`) ? `**${açık} Açık**` : `**${kapalı} Kapalı**`}
`)
message.channel.send(ayarlarS)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["settings"],
  permlevel: 0
};

exports.help = {
  name: "ayarlar"
}