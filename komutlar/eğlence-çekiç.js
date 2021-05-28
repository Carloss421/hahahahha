const Discord = require('discord.js');

exports.run = (client, message, args) => {
               const snekfetch = require("snekfetch");
snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/check?userId=${message.author.id}`)
.set("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgyODI2NzQ3NDE5MjU2NDI0NSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjIyMDQyNTMyfQ.912A76CIQeNWr9UIDD6ZLSkDZK_ZenMicw6KuombmhE")
.then(response => {
  var check = response.body.voted;
if(check == 1) {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kime Çekiç Atcağımı Yazmalısın**');
    const embed = new Discord.MessageEmbed()
    .setAuthor('')
    .setColor('RANDOM')
    .setDescription(`** ${mesaj} ` + message.author.username + ' Sana :hammer: Attı. Canın Acımış Olmalı!**')
    return message.channel.send(embed);
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
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çekiç',
  description: 'İstediğiniz Kişiye Çekiç Atarsınız.',
  usage: 'çekiç'
};