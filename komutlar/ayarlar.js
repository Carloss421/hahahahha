const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
// KULLANIM \\
const açık = client.emojiler.açık;
const kapalı = client.emojiler.kapalı;
let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
 
let ayarlarS = new Discord.MessageEmbed()
.setDescription(`
**${message.guild.name} Sunucusun Ayarları**

Küfür Engel: ${db.has(`küfürE_${message.guild.id}`) ? `**Açık**` : `**Kapalı**`}
Reklam Engel: ${db.has(`reklamE_${message.guild.id}`) ? `**Açık**` : `**Kapalı**`}
Otorol: ${db.has(`otoRL_${message.guild.id}`) ? `**Açık**` : `**Kapalı**`}
Bot Koruma: ${db.has(`botK_${message.guild.id}`) ? `**Açık**` : `**Kapalı**`}
Rol Koruma: ${db.has(`rolK_${message.guild.id}`) ? `**Açık**` : `**Kapalı**`}
Emoji Koruma: ${db.has(`emojikoruma_${message.guild.id}`) ? `**Açık**` : `**Kapalı**`}
Prefix: ${db.has(`prefix_${message.guild.id}`) ? `**${prefix}**` : `**${ayarlar.prefix}**`}
Sayaç: ${db.has(`sayac_${message.guild.id}`) ? `**Açık**` : `**Kapalı**`}
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