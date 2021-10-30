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

  
};

exports.conf = {
aliases: ["set-language", "language-set"]
};

exports.help = {
name: "dil-ayarla"
};