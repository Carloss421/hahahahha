const db = require("quick.db");
const ayarlar = require("../ayarlar.json")
const Discord = require("discord.js")

exports.run = async(message, args, client) => {

 if(!message.member.hasPermssion("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()
.setDescription("Bu komutu kullanabilmek için `YONETICI` iznine sahip olmalısın!").setColor("#ff0000")) 
  
return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata} Lütfen **ayarla** veya **sıfırla** yaz.`))

  
  
 if(args[0] === 'ayarla') {

return message.channel.send(new Discord.MessageEmbed()
.setDescription("Bu sunucudaki prefix zaten bu olduğu için ayarlayamazsın!"))
return message.channel.send(new Discord.MessageEmbed()
.setDescription("Ayarlanmış Prefixi tekrardan ayarlayamazsın!"))
return message.channel.send(new Discord.MessageEmbed()
.setDescription("Prefix ayarlaman için bir değer girmelisin!"))   
  
const bşrl = new Discord.MessageEmbed()
.setDescription(`
Prefix başarıyla **${args[0]}** olarak ayarlandı.

**NOT: eğer prefixi unutursanız <@${client.user.id}>'yi etiketlemeniz yeterli.**`)
message.channel.send(bşrl)
 };
  
if(args[0] === 'sıfırla') {
  
return message.channel.send(new Discord.MessageEmbed()
.setDescription("Ayarlanmayan prefixi sıfırlayamazsın!"))

const sfrlnd = new Discord.MessageEmbed()
.setDescription(`Prefix başarıyla sı`)
}
  
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["prefx","prefixx"],
 permlevel: 0
};

exports.help = {
  name: "prefix"
};