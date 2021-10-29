const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const dil = require("../Languages/dil");
const dils = new dil("dil", "diller");

exports.run = function(client, message) {
   let en = require("../Languages/dil/en.json");
  let tr = require("../Languages/dil/tr.json");

  var lg = dils.get(`dilang.${message.guild.id}`)
  if (lg == "en") {
var lang = en;
  }
  if (!lg) {
var lang = tr;
  } 
  
  
if(message.author.id !== ayarlar.ownerID) {
    const embed = new Discord.MessageEmbed()
    .setDescription(lang.rebootS.rebootOWNERED)
    .setColor('BLUE')
    return message.channel.send(embed).then(msg=>msg.delete(3000));
    }
    message.channel.send(lang.rebootS.rebootSUCCESFLY).then(msg => {
        console.log(lang.rebootS.rebootSUCCESFLY0);
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