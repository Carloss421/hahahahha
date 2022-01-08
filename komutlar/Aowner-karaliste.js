const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
const dil = require("../Languages/dil");
const dils = new dil("dil", "diller");

exports.run = async (client, message, args) => {
  let en = require("../Languages/dil/en.json");
  let tr = require("../Languages/dil/tr.json");

  var lg = dils.get(`dilang.${message.guild.id}`)
  if (lg == "en") {
var lang = en;
  }
   if (lg == "tr") {
var lang = tr;
  }
  
   if(message.author.id !== ayarlar.ownerID)  {
    const embed = new Discord.MessageEmbed()
    .setDescription(lang.blackList.AownerKaraOWNERED)
    .setColor('BLUE')
    return message.channel.send(embed).then(msg=>msg.delete(5000));
    }
  let user = client.users.get(args.slice(0).join(' '));
  if (!user) {
    let e = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(lang.blackList.AownerKaraERROREDID)
    message.channel.send({embed: e})
    return;
  };

  if (db.has(`karalist_${user.id}`) === true) return message.reply(lang.blackList.AownerKaraWARNNED);

  db.set(`karalist_${user.id}`, "aktif")

  let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`**${user.tag}(${user.id})** ${lang.blacklist.AownerKaraSUCCESFLY}`)
    message.channel.send({embed: embed})

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["blacklist", "kara-liste"],
  permLevel: 4,
    kategori: "yapımcı"
};

exports.help = {
  name: "karaliste",
  description: "Belirtilen kullancıyı kara listeye alır!",
  usage: "karaliste <kullanıcı ID>"
};