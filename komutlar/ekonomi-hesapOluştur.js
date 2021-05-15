const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')


exports.run = async(client, message, args) => {
  

const isim = args[0];
const yaş = args[1];
const cinsiyet = args[2];
const açıklama = args[3];
  
if(!isim) return message.channel.send(new Discord.MessageEmbed()
.setDescription(`${ayarlar.hata} Hesap oluşturmak için bir isim girmelisin!`))
if(!yaş) return message.channel.send(new Discord.MessageEmbed()
.setDescription(`${ayarlar.hata} Hesap oluşturmak için bir yaş girmelisin!`))
if(!cinsiyet) return message.channel.send(new Discord.MessageEmbed()
.setDescription(`${ayarlar.hata} Hesap oluşturmak için bir cinsiyet belirlemelisin!\nCinsiyetler: **Erkek Kız/Kadın Özel**`))
if(!açıklama) return message.channel.send(new Discord.MessageEmbed()
.setDescription(`${ayarlar.hata} Hesap oluşturmak için kendi açıklamanı girmelisin!\nÖrnek: **Ben bir bot kodlayıcısıyım.**`))
  
if(args[0] === `${isim}`) {
let bşrl = new Discord.MessageEmbed()
.setTitle("1. Adım")
.setDescription(`${ayarlar.oldu} İsmin \`${isim}\` olarak ayarlandı.`)
message.channel.send(bşrl)
};

if(args[1] === `${yaş}`) {
let bşrl = new Discord.MessageEmbed()
.setTitle("2. Adım")
.setDescription(`${ayarlar.oldu} Yaşın \`${yaş}\` olarak ayarlandı.`)
message.channel.send(bşrl)
}
if(args[2] === "erkek") {
 let bşrl = new Discord.MessageEmbed()
.setTitle("3. Adım")
.setDescription(`${ayarlar.oldu} Cinsiyet \`erkek\` olarak ayarlandı.`)
db.set()
message.channel.send(bşrl)
}
if(args[2] === "kız" && "kadın") {
let bşrl = new Discord.MessageEmbed()
.setTitle("3. Adım")
.setDescription(`${ayarlar.oldu} Cinsiyet \`kız\` olarak ayarlandı.`)
db.set(`ekonomoihesapcinsiyetK_${message.author.id}`, args[2])
message.channel.send(bşrl)
}
if(args[2] === "özel" && "gizli") {
 let bşrl = new Discord.MessageEmbed()
.setTitle("3. Adım")
.setDescription(`${ayarlar.oldu} Cinsiyet \`özel/gizli\` olarak ayarlandı.`)
db.set(`ekonomihesapcinsiyetÖ_${message.author.id}`, args[2])
message.channel.send(bşrl)
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["account-create"],
  permlevel: 0
};

exports.help = {
  name: "hesap-oluştur"
}