const Discord = require('discord.js');


exports.run = async(client, message, args, msg) => {
  const m = args.join(' ');
  if(!m) return message.channel.send('**:gear: Bir miktar girmelisiniz!**');
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('**:xx: Bu işlem için gerekli izne sahip değilsiniz!**');
  if(m < 2) return message.channel.send(':gear: **En az 2 mesaj silebilirim!**')
 if(m>500) return message.channel.send('**:gear: En fazla 500 mesaj silebilirim!**')
  message.channel.bulkDelete(m);


message.channel.send(new Discord.MessageEmbed()
    .setTitle('**Başarılı!**')
    .setDescription('**Başarıyla __'+m+'__ tane mesaj sildim!**')
    .setColor('0x36393E'))
 };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['temizle','delete','sil'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlediğiniz miktarda mesaj siler',
  category:'yetkili',
  usage: 'sil 500'
};