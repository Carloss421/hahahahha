const Discord = require('discord.js');
const database = require('quick.db');

exports.run = (client, message, args) => {

  function embedCreate(color, title, description) {
    const embed = new Discord.MessageEmbed()
    .setColor(color)
    .setTitle(title)
    .setDescription(description)
    return message.channel.send(embed);
  };

  if(!message.member.hasPermission('ADMINISTRATOR')) return embedCreate('RED', 'Başarısız!', 'Bu komutu kullanmak için yeterli yetkin bulunmuyor.');
  if(!args[0] && !database.fetch(`fakeK_${message.guild.id}`)) return embedCreate('RED', 'Başarısız!', 'Bir kanal etiketlemeli, yada IDsini girmelisin.');
  if(args[0] && database.fetch(`fakeK_$${message.guild.id}`)) {
    database.delete(`fakeK_${message.guild.id}`);
    return embedCreate('GREEN', 'Başarılı!', 'Fake üye kanalı sıfırlandı.');
  };

  let channel = message.guild.channels.cache.get(args[0]);
  if(!channel) {
    if(message.mentions.channels.first()) {
      channel = message.mentions.channels.first();
    };
  };

  if(!channel) return embedCreate('RED', 'Başarısız!', 'Belirttiğin kanalı bu sunucuda bulamıyorum.');

  database.set(`fakeK_${message.guild.id}`, channel.id);
  return embedCreate('GREEN', 'Başarılı!', `Fake üye kanalı **#${channel.name}** olarak ayarlandı.`);

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['fake-member-channel','fake-üye-kanal'],
  permLevel: 0
};
 
exports.help = {
  name: 'fakememberchannel'
};