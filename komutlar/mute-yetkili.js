const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");


exports.run = async (client, message, args) => {
  let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
  let CERol = message.mentions.roles.first();
  let CEYetkili = db.fetch("muteyetkili." + message.guild.id) || "Mute yetkili rolü yok";
  if (
    !message.guild.members.cache
      .get(message.author.id)
      .hasPermission("BAN_MEMBERS")
  )
    return message.channel.send(new Discord.MessageEmbed().setDescription(
      `<@${message.author.id}> Mute Yetkin Olmadan Mute Sistemdeki Hiç Birşeyi Ayarlamassın.`
    ).setColor("RED"));
  if (!CERol) return message.channel.send( new Discord.MessageEmbed()
        .setColor("#00ff00")
        .setDescription(
          `<‼️ Daha Mute Yetkili Rölünü Ayarlamadın \n ‼️ Doğru Ayarlamak İçin \`${prefix}mute-yetkili @Rol\``
        ));
  await db.set("muteyetkili." + message.guild.id, CERol.id);
  return message.channel.send(new Discord.MessageEmbed().setDescription(
    "Daha önceden <@&"+ CEYetkili +"> olarak belirlenen rolü <@&"+ CERol.id +"> rolü olarak değiştirdim!"
  ).setColor("RED"));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mute-authorize"],
  permLevel: 0
};

exports.help = {
  name: "mute-yetkili",
  description: "",
  usage: ""
};
