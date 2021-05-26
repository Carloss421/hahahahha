const Discord = require('discord.js');
const generator = require('generate-password');


exports.run = async(client, message, args) => {
                 const snekfetch = require("snekfetch");
snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/check?userId=${message.author.id}`)
.set("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgyODI2NzQ3NDE5MjU2NDI0NSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjIyMDQyNTMyfQ.912A76CIQeNWr9UIDD6ZLSkDZK_ZenMicw6KuombmhE")
.then(response => {
  var check = response.body.voted;
if(check == 1) {
    var uzunluk = args.slice(0).join(' ');
  const db = require('quick.db')
  const ayarlar = require('../ayarlar.json')
  let p = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
    if (!uzunluk) return message.reply('Bir uzunluk belirt. **Doğru Kullanım**: a!şifre <uzunluk>')



    var password = generator.generate({
        length: uzunluk,
        numbers: true,
    })

    message.channel.send(password);
  
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
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'şifre', 
  description: 'Rastgele bir şifre oluşturur.',
  usage: 'şifre <uzunluk>'
};