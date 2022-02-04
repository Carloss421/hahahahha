const database = require("quick.db");
const ayarlar = require('../ayarlar.json');
const Discord = require('discord.js');
const dil = require("../Languages/dil");
const dils = new dil("dil", "diller");

exports.run = async (client, message) => {
    
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
  
  if (!message.member.hasPermission(`ADMINISTRATOR`))
    return message.channel.send(lang.subscribe.rAUTHORIZED);

  let rol = message.mentions.roles.first();
  if (!rol)
    return message.channel.send(lang.subscribe.aROLEMENTIONES);

  database.set(`aboneyetkilisi.${message.guild.id}`, rol.id);
  message.channel.send(new Discord.MessageEmbed().setDescription(`${lang.subscribe.aSUCCESFLY} ${rol} ${lang.subscribe.aSUCCESFLY0}`));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["abone-y-rol"],
  perm: 0
};
exports.help = {
  name: "abone-yetkili"
};

exports.play = {
  kullanım: "y!abone-y-rol @rol",
  açıklama: "Abone Yetkili Rolünü Ayarlarsınız",
  kategori: "Abone"
};
