const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');


var prefix = ayarlar.prefix;




const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>?@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~';
// Start with the character '!'
const OFFSET = '!'.charCodeAt(0);

exports.run = (bot, msg, message, args) => {
             const snekfetch = require("snekfetch");
snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/check?userId=${message.author.id}`)
.set("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgyODI2NzQ3NDE5MjU2NDI0NSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjIyMDQyNTMyfQ.912A76CIQeNWr9UIDD6ZLSkDZK_ZenMicw6KuombmhE")
.then(response => {
  var check = response.body.voted;
if(check == 1) {
    if (args.length < 1) {
        msg.reply('**Döndürmem için bir mesaj belirt!**');
    }

    msg.channel.send(
        args.join(' ').split('')
            .map(c => c.charCodeAt(0) - OFFSET)
            .map(c => mapping[c] || ' ')
            .reverse().join('')
    );
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
  name: 'mesajdöndür',
  description: 'Mesajınızı tersden yazar.',
  usage: 'mesajdöndür <mesaj>'
};