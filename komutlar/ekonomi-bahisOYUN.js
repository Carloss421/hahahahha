const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')
exports.run = async (client, message, args) => {
let para = db.fetch(`para_${message.author.id}`) 
  
  let timeout = 25000;
  
  let crime = await db.fetch(`bahisoynama_${message.author.id}`)

      if (crime !== null && timeout - (Date.now() - crime) > 0) {
        
        let time = ms(timeout - (Date.now() - crime));
        message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                        .setDescription(`⏱ Bahis oynamak için ${time.seconds ? time.seconds + ' saniye beklemelisin!' : 'tekrar dene!'}`))
      } else {
  var miktar = args[0]
  if(!miktar) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bahis oynamak için miktar girmelisin`))
 if(miktar > 99999) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Buna izin veremem dostum eğer kaybedersen çok zarara uğrarsın o yüzden lütfen ``100000TL`` miktarından az bi miktar gir`))   
if(miktar > para) return message.channel.send(new Discord.MessageEmbed()
                                              .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bahis oynamak için cüzdanında ${para ? "sadece **" + para + 'TL** var!' : 'hiç paran yok!'}`))
        const result = [
          "KAZANDIN",
          "KAYBETTİN"
        ] 
        let awnser = result[Math.floor(Math.random() * result.length)]
     if (awnser === "KAYBETTİN") {
 var kaybettin = miktar        
      message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                      .setDescription(`Bahisi kaybettin ve cüzdanından **${kaybettin}TL** silindi!`));
      await db.set(`bahisoynama_${message.author.id}`, Date.now());   
      await db.add(`para_${message.author.id}`, -kaybettin);   
        } else {
          var kazandın = miktar*2
    let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
      .setColor("GREEN")
      .setDescription(`Bahisi kazandın ve cüzdanına **${kazandın}TL** eklendi!`)
      message.channel.send(embed)     
    await db.set(`bahisoynama_${message.author.id}`, Date.now());   
    await db.add(`para_${message.author.id}`, kazandın);
        }}}
exports.conf = {
  enabled: true,
  aliases: ["bahis"],
};

exports.help = {
  name: 'Bahis',
};