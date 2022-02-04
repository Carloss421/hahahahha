const Discord = require("discord.js")
exports.run = async(client, message, args) => {
  
  message.channel.send(new Discord.MessageEmbed().setTitle("Sunucu Sayısal İstatistikleri").setColor("#36393f").setDescription(`
  Sunucuda toplam **•** **${message.guild.memberCount}** Üye
  **${message.guild.members.filter(a => !a.bot).size}** Kullanıcı
  **${message.guild.members.filter(a => a.bot).size}** Bot
  Çevrimdışı Üyeler **•** **${message.guild.members.filter(a => a.presence.status == "offline").size}**
  Çevrimiçi Üyeler **•** **${message.guild.members.filter(a => a.presence.status != "offline").size}**
  Son 1 **Saatte** Giren Üyeler:** \`${message.guild.members.filter(a => (new Date().getTime() - a.joinedTimestamp) < 3600000).size}\`
  Son 1 **Günde** Giren Üyeler:** \`${message.guild.members.filter(a => (new Date().getTime() - a.joinedTimestamp) < 86400000).size}\`
  Son 1 **Haftada** Giren Üyeler:** \`${message.guild.members.filter(a => (new Date().getTime() - a.joinedTimestamp) < 604800000).size}\`
  Son 1 **Ayda** Giren Üyeler:** \`${message.guild.members.filter(a => (new Date().getTime() - a.joinedTimestamp) < 2629800000).size}\``)
  .setThumbnail(message.guild.iconURL)
  .setFooter(message.guild.name, message.guild.iconURL)
  .setTimestamp())
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "sunucu"
};

exports.help = {
  name: "say",
  description: "say",
  usage: "say"
};