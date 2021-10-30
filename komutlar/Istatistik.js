const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const dil = require("../Languages/dil");
const dils = new dil("dil", "diller");
const moment = require("moment");
require("moment-duration-format");

exports.run = function(client, message, args) {
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
  
  
const duration = moment
    .duration(client.uptime)
    .format("D [gün], H [saat], m [dakika], s [saniye]");
let araEmoji =  "**⇢**"
let embed = new Discord.MessageEmbed()
.setTitle(`Alvi - ${lang.statistic.sTitle}`)
.setColor("RANDOM")
.setDescription(`
${lang.statistic.msg} ${araEmoji} **<@${ayarlar.ownerID}> - AliBerat**
${lang.statistic.msg0} ${araEmoji} **${ayarlar.krştrh}**
Sunuluş tarihi ${araEmoji} **${ayarlar.snştrh}**

Çalışma Süresi ${araEmoji} **${duration}**
Bot Gecikmesi ${araEmoji} **${client.ws.ping}ms**
Mesaj Gecikmesi ${araEmoji} **-${new Date().getTime() - message.createdTimestamp}ms**

Toplam kullanıcı ${araEmoji} **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}  [${message.client.users.cache.filter(m => m.bot, 0).size} BOT]**
Toplam sunucu ${araEmoji} **${client.guilds.cache.size}**
Toplam kanal ${araEmoji} **${client.channels.cache.size}**
Toplam komut ${araEmoji} **${client.commands.size}**

Müzik Oynatılan sunucu ${araEmoji} **${client.voice.connections.size}**
Discord.js sürümü ${araEmoji} **v${Discord.version}**
Node.js sürümü ${araEmoji} **${process.version}**

**Verileri alınan komutlar**
\` Otorol - Sayaç - KayıtSistemi - CaptchaSistemi - DilSistemi - GörevSistemi \`
**Veriler temizlendi!**
[Destek Sunucusu - ](https://discord.gg/NAzGC2cxXR)[Davet Et(Perm 8) - ](https://discord.com/oauth2/authorize?client_id=828267474192564245&permissions=8&scope=bot)[Davet Et(Perm 0) - ](https://discord.com/api/oauth2/authorize?client_id=828267474192564245&permissions=0&scope=bot)[Oy Ver - ](https://discordbots.org/bot/${client.user.id}/vote)[Ekip](https://discord.gg/HWxK3S5GfT)
`)//client.guild.member.cache.filter(m => m.user.bot).size
message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i", "bot-bilgi"],
  permlevel: 0
};
exports.help = {
  name: "istatistik"
};