const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");


exports.run = async (client, message, args) => {
  let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
  let CEChannel = message.mentions.channels.first();
  let CELog = db.fetch("cezalog: " + message.guild.id) || "Log kanalı ayarlı değil!";
  if (
    !message.guild.members.cache
      .get(message.author.id)
      .hasPermission("BAN_MEMBERS")
  )
    return message.channel.send(new Discord.MessageEmbed().setDescription(
      ` <@${message.author.id}> Ban Yetkin Olmadan Ban Sistemdeki Hiç Birşeyi Ayarlamassın.`
    ).setColo("RED"));
  if (!CEChannel)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#00ff00")
        .setDescription(
          `❗️ ❕ Daha BanLog Ayarlamadın \n✅ Doğru Ayarlamak İçin \`${prefix}mute-log #kanal\``
        )
    );
  await db.set("cezalog: " + message.guild.id, CEChannel.id);
  return message.channel.send(new Discord.MessageEmbed()
      .setDescription(
    "Daha önceden <#"+CELog +"> olarak belirlenen mute log kanalını <#" +CEChannel.id+"> olarak ayarladım!"
  ));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mute-loge"],
  permLevel: 0
};

exports.help = {
  name: "mute-log",
  description: "",
  usage: ""
};
