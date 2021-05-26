const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
         const snekfetch = require("snekfetch");
snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/check?userId=${message.author.id}`)
.set("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgyODI2NzQ3NDE5MjU2NDI0NSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjIyMDQyNTMyfQ.912A76CIQeNWr9UIDD6ZLSkDZK_ZenMicw6KuombmhE")
.then(response => {
  var check = response.body.voted;
if(check == 1) {

	if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()
    .setAuthor('Koca Yürekli ' + message.author.username + ' Herkeze Çay Ismarladı!')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
		.setImage(`https://i.sozcu.com.tr/wp-content/uploads/2018/08/iecrop/cay_16_9_1533630396.jpg`)
    return message.channel.send(sunucubilgi);
    }
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
  guildOnly: false,
  aliases: ["herkese-benden çay"],
  permLevel: 0
};

exports.help = {
  name: 'herkesebendençay',
  description: 'Herkeze Çay Verir',
  usage: 'herkesebendençay'
};