const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = function(client, message) {
if(message.author.id !== ayarlar.ownerID)
  if(message.author.id !== ayarlar.ownerİD)  {
    const embed = new Discord.MessageEmbed()
    .setDescription(`**:x: Bu Komut Yapımcıma Özeldir !**`)
    .setColor('BLUE')
    return message.channel.send(embed).then(msg=>msg.delete(3000));
    }
    message.channel.send("Bot yeniden başlatılıyor..").then(msg => {
        console.log("Yeniden başlatılıyor...");
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