const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require('../ayarlar.json')
module.exports.run = async (bot, message, args) => {
  let prefix = ayarlar.prefix

  const embed = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setDescription(`Davetleriniz stoklandı!`)
  message.channel.send(embed);
//HAVASI YOK BUNUN
};

module.exports.conf = {
  aliases: ["davetstokla"],
  permLevel: 0,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-stokla",
  description: "davet-stokla",
  usage: "davet-stokla"
};