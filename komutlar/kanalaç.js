const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let HERKESS = message.guild.roles.find(r => r.name === "@everyone");
  let emoji = ":white_check_mark:"
  message.channel.overwritePermissions(HERKESS, { SEND_MESSAGES: null });
  const embo = new Discord.MessageEmbed().setDescription(
    `${emoji} **Sohbet kanalı başarıyla açıldı.**`
  );
  message.channel.send(embo);
};

exports.conf = {
  enabled: true,
  aliases: ["chat-aç", "kanal-aç","kanalaç"]
};

exports.help = {
  name: "sohbet-aç"
};
