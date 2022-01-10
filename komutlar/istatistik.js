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

if(lg == "tr"){var duration = moment.duration(client.uptime).format("D [gün], H [saat], m [dakika], s [saniye]")}
if(lg == "en"){var duration = moment.duration(client.uptime).format("D [days], H [hours], m [minutes], s [seconds]")}

let araEmoji =  "**⇢**"
let embed = new Discord.MessageEmbed()
.setTitle(`Alvi - ${lang.statistic.Title}`)
.setColor("RANDOM")
.setDescription(`
${lang.statistic.msg} ${araEmoji} **<@${ayarlar.ownerID}> - AliBerat - ${ayarlar.ownerDcname}**
${lang.statistic.msg0} ${araEmoji} **${ayarlar.krştrh}**
${lang.statistic.msg1} ${araEmoji} **${ayarlar.snştrh}**

${lang.statistic.msg2} ${araEmoji} **${duration}**
${lang.statistic.msg3} ${araEmoji} **${client.ws.ping}ms**
${lang.statistic.msg4} ${araEmoji} **-${new Date().getTime() - message.createdTimestamp}ms**

${lang.statistic.msg5} ${araEmoji} **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}  [${message.client.users.cache.filter(m => m.bot, 0).size} BOT]**
${lang.statistic.msg6} ${araEmoji} **${client.guilds.cache.size}**
${lang.statistic.msg7} ${araEmoji} **${client.channels.cache.size}**
${lang.statistic.msg8} ${araEmoji} **${client.commands.size}**

${lang.statistic.msg10} ${araEmoji} **v${Discord.version}**
${lang.statistic.msg11} ${araEmoji} **${process.version}**

**${lang.statistic.msg14}**
[${lang.statistic.msg15} - ](https://discord.gg/NAzGC2cxXR)[${lang.statistic.msg16}(Perm 8) - ](https://discord.com/oauth2/authorize?client_id=828267474192564245&permissions=8&scope=bot)[${lang.statistic.msg17}(Perm 0) - ](https://discord.com/api/oauth2/authorize?client_id=828267474192564245&permissions=0&scope=bot)[${lang.statistic.msg18} - ](https://discordbots.org/bot/${client.user.id}/vote)[${lang.statistic.msg19}](https://discord.gg/HWxK3S5GfT)
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