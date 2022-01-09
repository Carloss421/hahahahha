const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
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

  let prefix = ayarlar.prefix;
let embed = new Discord.MessageEmbed()
.setTitle(`Alvi - ${lang.ban.B}`)
.setColor("RANDOM")
.setDescription(`\`${prefix}ban\` ${lang.ban.AN}`)
message.channel.send(embed)
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["yardım-ban"],
 permLevel: 0

};
exports.help = {
    name: "ban-sistemi"
};