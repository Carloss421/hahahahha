const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const dil = require("../Languages/dil");
const dils = new dil("dil", "diller");

exports.run = async(client, message, args) => {
const db = require('quick.db')

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
.setTitle(`Alvi - ${lang.helpMenu.hTitle}`)
.setColor('RANDOM')
.setDescription(lang.helpMenu.hDescription)
message.channel.send(embed)
};

exports.conf = {
 aliases: ["help"],
 permlevel: 0
};
exports.help = {
    name: "yardım"
}