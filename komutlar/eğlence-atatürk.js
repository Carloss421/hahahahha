const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
let eğlence = new Discord.MessageEmbed()
.setTitle('Alvi - Atam')
.setColor('RANDOM')
.setDescription(`**:heart: Canım Atatürk :heart:**`)
.setImage("https://i.pinimg.com/originals/2f/94/08/2f94086d9d8d7616090e8dabb8e17ff7.gif","https://galeri14.uludagsozluk.com/769/ataturk-ders-kitaplarindan-cikarilsin_1903882.gif")
message.channel.send(eğlence)
};

exports.conf = {
 enabled: true,
 aliases: ["bot-token"],

};

exports.help = {
    name: "token"
};

/*const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var request = require('request');


exports.run = (client, message, params) => {
if (!message.guild) {
const ozelmesajuyari = new Discord.MessageEmbed()
.setColor(0xFF0000)
.setTimestamp()
.setAuthor(message.author.username, message.author.avatarURL)
.addField('Eğlence Komutları Özel Mesajlarda Kullanılamaz!')
return message.author.sendEmbed(ozelmesajuyari); }
if (message.channel.type !== 'dm') {
    
    request('https://api.eggsybot.xyz/ataturk', function (error, response, body) {
    if (error) return console.log('Hata:', error); 
    else if (!error) { 
    var info = JSON.parse(body); 
    var thyke = info.link;
    const ataturk = new Discord.MessageEmbed()
    .setColor(0xFFFFFF)
    .setTimestamp()
    .setDescription('')
    .setImage(thyke)
    return message.channel.send(ataturk);

    }
});
}
};

    
    

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'atatürk',
description: 'atatürk',
usage: 'atatürk'
};*/