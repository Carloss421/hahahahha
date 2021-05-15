const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
// Emojiler \\
let açık = "<:acik:842931863379378197>"
let kapalı = "<:kapali:831811077339217961>"
// Emojiler \\

let ayarlarS = new Discord.MessageEmbed()
.setDescription(`
**${message.guild.name} Sunucusun Ayarları**

Küfür Engel: ${db.has(`küfürE_${message.guild.id}`) ? `**${açık} Açık**` : `**${kapalı} Kapalı**`}
Reklam Engel: ${db.has(`reklamE_${message.guild.id}`) ? `**${açık} Açık**` : `**${kapalı} Kapalı**`}
Otorol: ${db.has(`o`)}
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