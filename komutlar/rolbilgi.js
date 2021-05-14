const emran = require("discord.js");
const ayarlar = require("../ayarlar.json");



exports.run = async (client, msg, message, args) => {
const db = require('quick.db')
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
  let role =
    msg.mentions.roles.first() ||
    msg.guild.roles.cache.get(args[0]) ||
    msg.guild.roles.cache.find(role => role.name === args.join(" "));
  var moment = require("moment");

  var hata = new emran.MessageEmbed()
    .setColor("#00ff00")
    .setDescription(
      `**Yanlış Kullanım** \n Lütfen Bir Rol Etiketleyin Örnek: \`${prefix}rolbilgi @Üye\``
    );
  if (!role) return msg.channel.send(hata);

  let hex = role.hexColor.toString().slice(1);
  let embed = new emran.MessageEmbed()
    .setThumbnail(`http://colorhexa.com/${hex}.png`)
    .addField("Rol İsmi", role.name, false)
    .addField(`Rol ID`, role.id, false)
    .addField(`Rol Tag`, role, false)
    .addField(
      `Etiketlenebilir mi?`,
      role.mentionable ? "\n Evet" : "Hayır",
      false
    )
    .setColor(role.hexColor)
    .addField("Renk", role.hexColor, false)
    .addField(
      "Rol Oluşturma Tarihi :",
      moment(role.createdAt).format("LL"),
      true
    )
    .setFooter(
      "Bu komutu kullanan kullanıcı " + msg.author.tag,
      msg.author.avatarURL({ format: "png", dynamic: true, size: 1024 })
    )
    .setTimestamp(role.createdAt);
  msg.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rol-info", "rolinfo", "rolbilgi"],
  permLevel: 0
};

exports.help = {
  name: "rol-bilgi",
  description: "Bir Rol Hakkında Bilgi Verir.",
  usage: "rol-bilgi"
};


/*const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (client,message,args) => {
  var rol = message.content.split(" ").slice(1).join(" ");
  let role = message.guild.roles.cache.find("name", `${rol}`)
  var hata = new Discord.MessageEmbed()
  .setColor("#36393F")
  .setDescription("❌ Lütfen Bir Rol İsmi Yazın `Örnek: a!rolbilgi @Kullanıcı` **Not: Kendinizden Yüksek Rollere Bakamassınız** ");
  if(!role) return message.channel.send(hata);
  var moment = require("moment");
  var temps = moment(message.createdTimestamp).format("LLLL");
  var roleinfoEmbed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .addField('✏ Rol İsmi', role.name, true)
  .addField('🆔 ID', role.id, true)
  .addField('👥 Role Sahip Kullanıcılar', role.members.cache.size, true)
  .addField('💙 Renk', role.hexColor, true)
  .addField('📣 Etiketleme?', role.mentionable ? '\nEvet' : 'Hayır', true)
  .addField('📅 Oluşturulduğu Zaman', moment(role.createdAt).format("LL"), true)
  message.channel.send(roleinfoEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rolinfo', 'rolhakkında', 'rolbilgi','rol-bilgi'],
  permLevel: 0
};

exports.help = {
  name: 'rolinfo',
  description: 'rolinfo | Rol hakkında bilgi verir.',
  usage: 'rolinfo <rolismi>'
};*/