const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bu komutu kullanmak için yeterli izne sahip değilsin.`))

let p = "a!"

let arguman = args[0];

if (!arguman) return message.channel.send(new Discord.MessageEmbed().setDescription(`:x: Lütfen bir bot id yazın.(Giriş izni iptal etmek için \`s!giriş-izni iptal <botid>\`**`))

if (arguman === "iptal") {
 db.delete(`botİzinli_${args[1]}`) 
  message.channel.send(new Discord.MessageEmbed().setDescription(`\`${args[1]}\` IDsine sahip botun giriş izni iptal **edildi!**`))
} else {
   const embed = new Discord.MessageEmbed() 
   .setTitle(`:warning: Uyarı!`)
   .setColor("RANDOM")
   .setDescription(`\`${arguman}\` IDsine sahip botun sunucunuza giriş verilmesini onaylıyor iseniz **onaylıyorum** yazın.`)
   .setFooter(`30 Saniye içerisinde cevap vermez iseniz iptal olacaktır!`)
  message.channel.send(embed) 
  var filtre = m => m.author.id === message.author.id
    message.channel.awaitMessages(filtre,{max: 1 ,time: 30000, errors: ["time"]}).then(collected => { 
       if (collected.first().content === "onaylıyorum" || collected.first().content === "evet") {

db.set(`botİzinli_${arguman}`, "İzinli")
message.channel.send(new Discord.MessageEmbed().setDescription(`\`${arguman}\` IDsine sahip bot **doğrulandı!** Sunucuya **eklenebilir!**`))
       }})
       }
}
exports.conf = {
  guildOnly : true,
  enabled : true,
  aliases : [],
  permLevel : 0,
  kategori : `Moderasyon`
}
exports.help = {
  name : "bot-izni",
  description : "Sunucuyu botlara karşı koruyan sistem. (Kullanmanızı öneririz)",
  usage : "giriş-izni <botid>"
}