const Discord = require('discord.js')

exports.run = async(client, message, args) => {

  const evet = new Discord.MessageEmbed()
  .setDescription(`
  :one: **Version: 0.0.3**
  Başlangıç: **15.05.2021 - 19:09** Bitiş: **16.05.2021 - 20:30** \`UPDATE\`
  
  :two: **Version: 0.0.4**
  Başlangıç: **18.08.2021 - 13:19** Bitiş: **18.08.2021 - 22:48** \`UPDATE\`
  
  :three: **Version: 0.0.5**
  Başlangıç: **09.10.2021 - 17:43** Bitiş: **2022 - :** \`MEGA UPDATE\`
  `)
  message.channel.send({ embed: evet })
  };

exports.conf = {
  aliases: ["güncelleme-version", "update-v", "update-version"],
  permlevel: 0
}

exports.help = {
  name: "güncelleme-v"
}