const Discord = require('discord.js');
const math = require('math-expression-evaluator')
const db = require('quick.db')
const stripIndents = require('common-tags').stripIndents



exports.run = async(client, message, args) => {
           const snekfetch = require("snekfetch");
snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/check?userId=${message.author.id}`)
.set("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgyODI2NzQ3NDE5MjU2NDI0NSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjIyMDQyNTMyfQ.912A76CIQeNWr9UIDD6ZLSkDZK_ZenMicw6KuombmhE")
.then(response => {
  var check = response.body.voted;
if(check == 1) {
  
let prefix = db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
    var soru = args.join(' ');

    if(!soru) return message.reply('Bir işlem belirtin. **Doğru Kullanım**: '+ prefix +'hesapla <işlem>')
    else { let cevap;
        try {
            cevap = math.eval(soru)
        } catch(err) {
            message.channel.send('Hatalı işlem: **' + err +'**')
        }

        const embed = new Discord.RichEmbed()
        .addField('Soru', soru)
        .addField('Cevap', cevap)

        message.channel.send(embed)
    }

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
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'hesapla', 
  description: 'Belirtilen işlemi yapar.',
  usage: 'hesapla <işlem>'
};