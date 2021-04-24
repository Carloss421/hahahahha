let Discord = require("discord.js");
const DBL = require("dblapi.js");

let db = require("quick.db")
let { hata, oldu, bot } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
 /* const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc2ODEyMDUwMTA1NDM0MTE2MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA3NTk0NTQ1fQ.C4XNH-jWKnIq0VCLoeMx6QHl4XoXpWuB-2om6MW67gw', client);
 dbl.hasVoted(message.author.id).then(async voted => {
  if (!voted) { message.channel.send(new Discord.MessageEmbed().setColor(hata).setDescription(`Bu komutu kullanabilmek için bota DBL üzerinden oy vermen gerekiyor. Eğer oy verdiyseniz 1-2 dakika beklemeniz gerekmektedir. Oy Linki: https://top.gg/bot/${client.user.id}/vote`) )
   } else {*/
     //KOMUT
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!`).setColor(hata))


 let ayarlar = require("../ayarlar.json")

        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
let user = message.mentions.members.first() || message.author

  
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor(hata).setDescription(`
    Selam, Kayıt Embed Sistemini Ayarlamak İçin Aşşağıda Verdiğimiz Seçenekleri Kullanın:
    
    \`${prefix}k-mesaj-embed evet\`
    \`${prefix}k-mesaj-embed hayır\`
    Bu Seçenekleri Kullanabilirsiniz.`))
    
    if(args[0] == 'evet') {
              if(db.has(`kmesajembed.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor(ayarlar.hata).setDescription(`${ayarlar.hata2} | Kayıt Mesaj Embed Zaten Ayarlanmış!`))

      db.set(`kmesajembed.${message.guild.id}`, 'acik')
        message.channel.send(new Discord.MessageEmbed().setColor(oldu).setDescription(`${ayarlar.oldu2} | Başarıyla Embed Mesajı Ayarlandı!`))

      
    }
    if(args[0] == 'hayır') {
        if(!db.has(`kmesajembed.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor(ayarlar.hata).setDescription(`${ayarlar.hata2} | Kayıt Mesaj Embed Zaten Ayarlanmamış!`))

      db.delete(`kmesajembed.${message.guild.id}`)
        message.channel.send(new Discord.MessageEmbed().setColor(oldu).setDescription(`${ayarlar.oldu2} | Başarıyla Embed Mesajı Sıfırlandı!`))

      
    }
    
  




})};
   

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k-mesaj-embed", "kayıtmesajembed"],
  permLevel: 0
};

module.exports.help = {
  name: 'kayıt-mesaj-embed'
};
