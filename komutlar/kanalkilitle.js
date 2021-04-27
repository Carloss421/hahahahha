const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')
exports.run = (client, message, args) => {
     if(message.author.id !== ayarlar.ownerID)  {
    const embed = new Discord.MessageEmbed()
    .setDescription(`**:x: Bu komut bakımdadır!**`)
    .setColor('BLUE')
    return message.channel.send(embed).then(msg=>msg.delete(5000));
    }
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
  aliases: ["chat-kapat", "kanal-kilit","kilitle","kanal-kapat"]
};

exports.help = {
  name: "sohbet-kapat"
};