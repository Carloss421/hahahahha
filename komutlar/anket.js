const Discord = require('discord.js');
exports.run = async (client, message, args) => {
        var listee = ["👍","👎"];
        var secenekler = " ";
        let anket = args.join(" ")
      if(!anket)  return message.channel.send(new Discord.MessageEmbed().setDescription(
      "**Anket yapılması için anket konusunu belirtmelisin!**"
      ).setColor("RED"))
   let anketYAPILIYOR = new Discord.MessageEmbed()
  .setDescription(`
  ${anket}

  `)
  message.channel.send(anketYAPILIYOR)
}
        

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
}
exports.help = {
    name: 'anket'
}