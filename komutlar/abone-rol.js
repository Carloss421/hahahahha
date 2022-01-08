let database = require("quick.db");
const ayarlar = require('../ayarlar.json');
const Discord = require('discord.js')
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

  
  if (!message.member.hasPermission(`ADMINISTRATOR`))
    return message.channel.send(lang.subscribe.rAUTHORIZED);

  let rol = message.mentions.roles.first();
  if (!rol)
    return message.channel.send(lang.subscribe.rROLEMENTIONES);

  database.set(`abonerol.${message.guild.id}`, rol.id);
  message.channel.send(new Discord.MessageEmbed().setDescription(`${lang.subscribe.rSUCCESFLY} <@${rol.id}> ${lang.subscribe.rSUCCESFLY0}`));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["abone-rol", "subscribe-role"],
  perm: 0
};
exports.help = {
  name: "abonerol"
};