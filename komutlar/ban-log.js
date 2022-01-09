const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");


exports.run = async (client, message, args) => {
  let prefix = ayarlar.prefix;
  let CEChannel = message.mentions.channels.first();
  let CELog = db.fetch("cezalog: " + message.guild.id) || "Log kanalı ayarlı değil!";
  
  if(CELog === "Log kanalı ayarlı değil!"){
  message.guild.channels.create("cezalog").then(s => {
  let role = message.guild.roles.cache.find(r => r.name === '@everyone')
  s.over
  }
) 
  }
  
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
          `❗️ ❕ Daha BanLog Ayarlamadın \n✅ Doğru Ayarlamak İçin \`${prefix}ban-log #kanal\``
        )
    );
  await db.set("cezalog: " + message.guild.id, CEChannel.id);
  return message.channel.send(new Discord.MessageEmbed()
      .setDescription(
    "Daha önceden <#"+CELog +"> olarak belirlenen ban log kanalını <#" +CEChannel.id+"> olarak ayarladım!"
  ));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ban-log",
  description: "",
  usage: ""
};
