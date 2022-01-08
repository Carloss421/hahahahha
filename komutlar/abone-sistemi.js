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