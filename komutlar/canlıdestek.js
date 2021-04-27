const Discord = require('discord.js');

const db = require("quick.db");

module.exports.run = async (bot, message, args, params, client) => {

let prefix = "a!"
    if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
  var channel = message.guild.channels.find('id', '833215162047135744')
    const asdf = await message.guild.channels.get(message.channel.id).createInvite()
  message.delete();
  const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username}`, client.user.avatarURL)
  .setTitle("»  Bot | Canlı Destek")
  .setDescription("**<a:acik:827618729193242634> Canlı Desteği kullandığın için teşekkür ederiz, Seninle ekibim ilgilenicektir lütfen bekle!**")
  .setDescription("30 Saniye İinde Geri Dönülmezse Lütfen İletişime Geçin \nCanlı Destek Ekibimiz <@739411430171738142>`-`<@720236094792400987>")
  .setColor("#31ff00")
 message.channel.send(embed)
      const invite = new Discord.MessageEmbed()
  .setAuthor("Canlı Destek | Talep")
  .addField('**Kullanıcı: **', message.author.username + '#' + message.author.discriminator)
  .addField('**Sunucu Adı: **', message.guild.name)
  .setDescription(asdf.url)
      channel.send(invite)
};

  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['canlıdestek'],
  permLevel: 1
};

exports.help = {
  name: 'canlı-destek',
  description: 'Canlı Destek Tablebi Oluşturur.',
  usage: 'c!canlı-destek'
};