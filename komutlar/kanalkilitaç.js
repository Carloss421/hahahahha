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