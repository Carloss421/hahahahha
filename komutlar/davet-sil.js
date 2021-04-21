const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require('../ayarlar.json')
module.exports.run = async (bot, message, args) => {
  let prefix = ayarlar.prefix
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.MessageEmbed()
      .setDescription("```Ne yazık ki bu komutu kullanmaya yetkin yok.```")
      .setColor("BLACK")
    message.channel.send(embed);
    return;
  }

  let u = message.mentions.users.first();
let m = args.slice(1).join(" ")
  if (!u) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Lütfen daveti silinecek kişiyi etiketleyiniz!")
        .setColor("BLACK")
    );
  }
    if (!m) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Lütfen silinecek davet sayısını giriniz.")
        .setColor("BLACK")
    );
  }
  const embed = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setDescription(`${u} Adlı şahstan; ${m} davet silindi!`)
  message.channel.send(embed);

  db.add(`davet_${message.author.id}_${message.guild.id}`, -m);
};

module.exports.conf = {
  aliases: ["davetsil"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-sil",
  description: "davet-sil",
  usage: "davet-sil"
};
