const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = function(client, message) {

if(message.author.id !== ayarlar.ownerID) {
    const embed = new Discord.MessageEmbed()
    .setDescription("Bu komutu sadece sahibim kullanabilir!")
    .setColor('BLUE')
    return message.channel.send(embed).then(msg=>msg.delete(3000));
    }
    message.channel.send("Yeniden Başlıyorum").then(msg => {
        console.log("Bot Yeniden Başlatılıyor\nBaşlatan: "+ message.author.tag);
      setTimeout(function(){msg.edit("Yeniden Başlıyorum.")}, 2000)
      setTimeout(function(){msg.edit("Yeniden Başlıyorum..")}, 3500)
      setTimeout(function(){msg.edit("Yeniden Başlıyorum...")}, 4800)
      setTimeout(function(){msg.edit("Yeniden Başlıyorum")}, 5999)
      setTimeout(function(){msg.edit("Tekrardan başladım"); return;}, 6400)
      process.exit(0);
    });

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'reboot', 
  description: 'Botu yeniden başlatır',
  usage: 'reboot'
};