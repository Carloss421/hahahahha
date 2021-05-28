const Discord = require("discord.js");
const weather = require('weather-js');

exports.run =  (bot, message, client, args) => {
         const snekfetch = require("snekfetch");
snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/check?userId=${message.author.id}`)
.set("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgyODI2NzQ3NDE5MjU2NDI0NSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjIyMDQyNTMyfQ.912A76CIQeNWr9UIDD6ZLSkDZK_ZenMicw6KuombmhE")
.then(response => {
  var check = response.body.voted;
if(check == 1) {

  if (!args[0]) return message.channel.send({embed: {
       color: Math.floor(Math.random() * (0xFFFFFF + 1)),
       description: (`:no_entry_sign: Şehir girsene olum nerenin hava durumunu istediğin bana vahiy mi gelcek.`)

 }});
 weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) { 
            if (err) message.channel.send({embed: {
       color: Math.floor(Math.random() * (0xFFFFFF + 1)),
       description: (`:no_entry_sign:${err}`)

 }}); 
            if (!result) {
                message.channel.send({embed: {
       color: Math.floor(Math.random() * (0xFFFFFF + 1)),
       description: (`:no_entry_sign: Belirli bir şehir giriniz.`)

 }}) 
                return; 
            }
            var current = result[0].current; 
            var location = result[0].location;   
            const embed = new Discord.MessageEmbed()
                .setDescription(`**${current.skytext}**`) 
                .setTimestamp()
                .setAuthor(`${current.observationpoint} İçin Hava Durumu`)
                .setThumbnail(current.imageUrl)
                .setColor(0x00AE86) 
                .addField('Sıcaklık',`${current.temperature} Derece`, true)
                .addField('Hissedilen Sıcaklık',`${current.feelslike} Derece`, true)
                .addField('Rüzgar',current.winddisplay, true)
                .addField('Rüzgar Hızı',current.windspeed, true)
                .addField('Nem', `%${current.humidity}`, true)
                message.channel.send({embed});
        });
   } else {
  const ayarlar = require('../ayarlar.json')
  let embed = new Discord.MessageEmbed()
        .setTitle('HATA')
        .setColor('#ff0000')
        .setDescription(`
${ayarlar.hata} Bu komutu kullanabilmek için bota **12 saat aralığıkla [Oy Ver](https://discordbots.org/bot/${client.user.id}/vote)**'meniz gereklidir! Onaylanması **1-2** dakikayı bulabilir, lütfen bekleyin.`)
      message.channel.send(embed)
        return }});
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hava','havadurum'],
  permLevel: 0
};

exports.help = {
  name: 'havadurumu',
  description: 'Havadurumu söyler',
  usage: 'havadurumu [şehir]'
};