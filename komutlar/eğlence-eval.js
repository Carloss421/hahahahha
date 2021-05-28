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
.setTitle('Alvi - Kod Deneme')
.setColor('RANDOM')
.setDescription(`**Bak şuan kod denedin!**`)
.setImage("https://cdn.discordapp.com/attachments/663026557689921564/673533189024776203/ErensiNAH.gif")
message.channel.send(eğlence)
  
      } else {
  const ayarlar = require('../ayarlar.json')
  let embed = new Discord.MessageEmbed()
        .setTitle('HATA')
        .setColor('#ff0000')
        .setDescription(`
${ayarlar.hata} Bu komutu kullanabilmek için bota **12 saat aralığıkla [Oy Ver](https://discordbots.org/bot/${client.user.id}/vote)**'meniz gereklidir! Onaylanması **1-2** dakikayı bulabilir, lütfen bekleyin.`)
      message.channel.send(embed)
        return }});
};

exports.conf = {
 enabled: true,
 aliases: ["eval"],

};

exports.help = {
    name: "boteval"
};