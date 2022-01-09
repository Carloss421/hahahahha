const Discord = require('discord.js')
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

message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata} ${lang.lsupport.CD}`).setColor("#ff0000"))
}
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["canlı-destek"],
  permLevel: 0
};
exports.help = {
  name: 'canlıdestek',
  description: 'Canlı Destek Tablebi Oluşturur.',
  usage: 'canlıdestek'
};