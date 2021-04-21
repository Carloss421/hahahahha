const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let HERKESS = message.guild.roles.find(r => r.name === "@everyone");
  let emoji = ":white_check_mark:"
  message.channel.overwritePermissions(HERKESS, { SEND_MESSAGES: false });
  const embo = new Discord.MessageEmbed().setDescription(
    `${emoji}  **Sohbet kanalı başarıyla kapatıldı.**`
  );
  message.channel.send(embo);
};

exports.conf = {
  enabled: true,
  aliases: ["chat-kapat", "kanal-kilit","kilitle"]
};

exports.help = {
  name: "sohbet-kapat"
};
