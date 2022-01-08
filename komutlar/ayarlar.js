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
  
  if(!lg){
const embedd = new Discord.MessageEmbed()
.setThumbnail(client.user.avatarURL())
.setAuthor(client.user.username)

.addField("<:hayir0:838855037161570375> **Hata | Error**",`
**TR:** Botu kullanmadan önce dil seçmeniz gerekmektedir!
Kullanım: **a!dil-ayarla Tr/En**

**EN:** You must select the language before using the bot!
Usage: **a!set-language En/Tr**`)
.setFooter(message.author.tag, message.author.avatarURL())
return message.channel.send({embed: embedd})
};

let ayarlarS = new Discord.MessageEmbed()
.setDescription(` 
**${message.guild.name} | ${lang.settings.a}**

Prefix: **${ayarlar.prefix}**
İsim: **${client.user.username} | ${client.member.nickname}**

Küfür Engel: ${db.has(`küfürE_${message.guild.id}`) ? `**Açık**` : `**Kapalı**`}
Reklam Engel: ${db.has(`reklamE_${message.guild.id}`) ? `**Açık**` : `**Kapalı**`}
Otorol: ${db.has(`otoRL_${message.guild.id}`) ? `**Açık**` : `**Kapalı**`}
Bot Koruma: ${db.has(`botK_${message.guild.id}`) ? `**Açık**` : `**Kapalı**`}
Rol Koruma: ${db.has(`rolK_${message.guild.id}`) ? `**Açık**` : `**Kapalı**`}
Kanal Koruma: ${db.has(`kanalK_${message.guild.id}`) ? `**Açık**` : `**Kapalı**`}
Emoji Koruma: ${db.has(`emojikoruma_${message.guild.id}`) ? `**Açık**` : `**Kapalı**`}
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