const Discord = require('discord.js')

exports.run = async(client, message, args) => {

  const evet = new Discord.MessageEmbed()
  .setDescription(`
  :one: **Version: 0.0.3**
  Başlangıc: **15.05.2021 - 19:09** Bitiş: **16.05.2021 - 20:30** \`UPTADE\`
  
  :two: **Version: 0.0.4**
  Başlangıc: **18.08.2021 - 13:19** Bitiş: **18.08.2021 - 22:48** \`UPTADE\``)
  message.channel.send({ embed: evet })
  };

exports.conf = {
  aliases: ["güncelleme-version", "uptade-v", "uptade-version"],
  permlevel: 0
}

exports.help = {
  name: "güncelleme-v"
}