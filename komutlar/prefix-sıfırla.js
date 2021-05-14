const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const Discord = require('discord.js')
exports.run = async(client, message, args) => {
  
let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
let ohow = await db.fetch(`prefix_${message.guild.id}`)

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()
.setDescription("Bu komutu kullanabilmek için `YONETICI` iznine sahip olmalısın!"));
  
/*
if(args[0] === 'ayarla') {
if(!args[1]) return message.channel.send(new Discord.MessageEmbed()
.setDescription("Bir Prefix Girip Tekrar Dene. Prefix: `"+ prefix +"`"))
db.set(`prefix_${message.guild.id}`, args[1])
message.channel.send(new Discord.MessageEmbed().setDescription(`
${ayarlar.oldu2} Prefix Başarıyla **`+ args[1] + `** olarak ayarlandı.`))
};
*/
if(args[0] === 'sıfırla') {
      if(!ohow) {
       return message.channel.send(new Discord.MessageEmbed()
.setDescription(`Bir prefix ayarlanmadan sıfırlanamaz!`));
    }
    db.delete(`prefix_${message.guild.id}`)       
   return message.channel.send(new Discord.MessageEmbed()
.setDescription(`${ayarlar.oldu2} Prefix Başarıyla Sıfırlandı. Prefix: **${ayarlar.prefix}**`));
}

  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["prefx-sıfırla","prefixx-sıfırla"],
  permlevel: 0
};

exports.help = {
  name: "prefix-sıfırla"
};