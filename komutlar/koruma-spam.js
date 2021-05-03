const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 



message.channel.send(`Sunucunuzu Korumamam İçin YÖNETİCİ Yetkisi Olmalı Ve Sonrasında Kendiliğinden Saldırıları Önlerim.`) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["spam-koruma"], 
  permLevel: 0
};

exports.help = {
  name: 'spambotkorumasi',
  description: 'sayaç', 
  usage: 'sayaç'
};