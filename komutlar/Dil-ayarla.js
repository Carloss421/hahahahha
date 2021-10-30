const Discord = require('discord.js')
const dil = require("../Languages/dil");
const dils = new dil("dil", "diller");

exports.run = async(client, message, args) => {

  let en = require("../Languages/dil/en.json");
  let tr = require("../Languages/dil/tr.json");

  var lg = dils.get(`dilang.${message.guild.id}`)
 /* 
if (lg == "en") {var lang = en}
if (lg == "tr") {var lang = tr}*/

let dilSeç = args[1]


if(args[0] === 'Tr' && 'tr' && 'TR' && 'tR'){
if(!dilSeç) return message.reply("<:hayir0:838855037161570375> Lütfen bir dil belirtin!\nKullanım: **a!dil-ayarla Tr/En**")
if(lg) return message.reply("<:hayir0:838855037161570375> Zaten ")
}
  
};

exports.conf = {
aliases: ["set-language", "language-set"]
};

exports.help = {
name: "dil-ayarla"
};