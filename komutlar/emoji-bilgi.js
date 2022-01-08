const Discord = require('discord.js');

exports.run = (client, message, args) => {

    let emojiname = args[0];

      if (!emojiname) { 

       const embed2 = new Discord.MessageEmbed()

     .setColor("BLACK")
     .setDescription("Emoji İsmi Belirtmediniz?")

       return message.channel.send(embed2)

    }
  const emoji = message.guild.emojis.cache.find(name => ("name", emojiname))


    const embed = new Discord.MessageEmbed()

    .setColor("RANDOM")

    .addField("Emojinin ismi", `${emojiname}`, true)

    .addField("Emoji ID", `${emoji ? emoji.id : "Bulunamadı!"}`, true)

    .addField("Link", `${emoji ? emoji.url : "Bulunamadı!"}`, true)

    .setTimestamp()

    message.channel.send(embed)

}

exports.conf = {

    enabled: true,

    guildOnly: false,

    aliases: ["emojibilgi"],

    permLevel: 0

}

exports.help = {

    name: 'emoji-bilgi',

}