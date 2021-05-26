const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
           const snekfetch = require("snekfetch");
snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/check?userId=${message.author.id}`)
.set("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgyODI2NzQ3NDE5MjU2NDI0NSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjIyMDQyNTMyfQ.912A76CIQeNWr9UIDD6ZLSkDZK_ZenMicw6KuombmhE")
.then(response => {
  var check = response.body.voted;
if(check == 1) {
let eğlence = new Discord.MessageEmbed()
.setTitle('Alvi - Sevgili')
.setColor('RANDOM')
.setDescription(`**Buyur sevgilim!**`)
.setImage("https://i.pinimg.com/originals/f2/52/32/f25232902a34948b6730d2945f97dbee.jpg")
message.channel.send(eğlence)
     } else {
  const ayarlar = require('../ayarlar.json')
  let embed = new Discord.MessageEmbed()
        .setTitle('HATA')
        .setColor('RANDOM')
        .setDescription(`
${ayarlar.hata} Bu komutu kullanmak için **12 saat aralıkla** **[Tıkla](https://discordbots.org/bot/${client.user.id}/vote)**  botu oylamanız gerekmektedir. Onaylanması **1-2** dakikayı bulabilir, lütfen bekleyin. `)
      message.channel.send(embed)
        return }});
};

exports.conf = {
 enabled: true,
 aliases: ["bot-sev"],

};

exports.help = {
    name: "kızark"
};