const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const dil = require("../Languages/dil");
const dils = new dil("dil", "diller");

exports.run = async(client, message, args) => {

    
  let en = require("../Languages/dil/en.json");
  let tr = require("../Languages/dil/tr.json");

  var lg = dils.get(`dilang.${message.guild.id}`)
  if (lg == "en") {
var lang = en;
  }
  if (lg == "tr") {
var lang = tr;
  }

let ayarlarS = new Discord.MessageEmbed()
.setDescription(` 
**${message.guild.name} | ${lang.settings.a}**

Prefix: **${ayarlar.prefix}**
${lang.settings.b}: **${client.user.username} | ${client.member.nickname}**

${lang.settings.c}: ${db.has(`küfürE_${message.guild.id}`) ? `**Açık**` : `**Kapalı**`}
${lang.settings.ç}: ${db.has(`reklamE_${message.guild.id}`) ? `**Açık**` : `**Kapalı**`}
${lang.settings.d}: ${db.has(`otoRL_${message.guild.id}`) ? `**Açık**` : `**Kapalı**`}
${lang.settings.e}: ${db.has(`botK_${message.guild.id}`) ? `**Açık**` : `**Kapalı**`}
${lang.settings.f}: ${db.has(`rolK_${message.guild.id}`) ? `**Açık**` : `**Kapalı**`}
${lang.settings.g}: ${db.has(`kanalK_${message.guild.id}`) ? `**Açık**` : `**Kapalı**`}
${lang.settings.ğ}: ${db.has(`emojikoruma_${message.guild.id}`) ? `**Açık**` : `**Kapalı**`}
${lang.settings.h}: ${db.has(`sayac_${message.guild.id}`) ? `**Açık**` : `**Kapalı**`}
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