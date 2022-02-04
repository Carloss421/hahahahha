const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')
const dil = require("../Languages/dil");
const dils = new dil("dil", "diller");

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

let embed = new Discord.MessageEmbed()
.setTitle(`Alvi - ${lang.subscribe.sSYSTEm}`)
.setColor("RANDOM")
.setDescription(lang.subscribe.sSYSTEM)
message.channel.send(embed)
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["yardım-abone"],
 permLevel: 0

};
exports.help = {
    name: "abone-sistemi"
};