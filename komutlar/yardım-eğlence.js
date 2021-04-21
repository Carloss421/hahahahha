const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
let eğlence = new Discord.MessageEmbed()
.setTitle('Alvi - Eğlence')
.setColor('RANDOM')
.setDescription(`
\`${ayarlar.prefix}8ball\` Sihirli 8ball sorularınızı cevaplar 
\`${ayarlar.prefix}ara155\` Polisi Arar(ciddiye almayın)
\`${ayarlar.prefix}atatürk\` Atatürk fotoğraları gönderir. 
\`${ayarlar.prefix}avatar\` Avatarınızı gösterir
\`${ayarlar.prefix}kral-ol\` 
\`${ayarlar.prefix}hackle\` 

**YAKINDA KOMUTLAR AKTIF OLUCAKTIR!**
`)
message.channel.send(eğlence)
};

exports.conf = {
 enabled: true,
 aliases: ["yardım-fun"],

};

exports.help = {
    name: "yardım-eğlence"
};
