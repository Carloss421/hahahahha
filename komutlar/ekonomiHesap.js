

/*const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')

exports.run = (client, message, args) => {
let isim = db.fetch(`ekonomihesapisim_${message.author.id}`)
let yaş = db.fetch(`ekonomihesapyaş_${message.author.id}`)
let açk = db.fetch(`ekonomihesapaçıklama_${message.author.id}`)
let cinsiyet = {
cinsiyet: db.fetch(`ekonomihesapcinsiyetE_${message.author.id}`),
cinsiyet: db.fetch(`ekonomihesapcinsiyetÖ_${message.author.id}`),
cinsiyet: db.fetch(`ekonomihesapcinsyietK_${message.author.id}`)
}
let embed = new Discord.MessageEmbed()  
.setDescription(`
${message.author}**'nın Hesabı**

İsim: ${db.has(`ekonomihesapisim_${message.author.id}`) ? `**${isim}**` : `**İsim Ayarlamamış**`}
Yaş: ${db.has(`ekonomihesapyaş_${message.author.id}`) ? `**${yaş}**` : `**Yaş Ayarlamamış**`}
Cinsiyet: ${db.has(`ekonomihesapcinsiyet_${message.author.id}`) ? `**${cinsiyet}**` : `**Cinsiyet Ayarlamamış**`}
Açıklama: ${db.has(`ekonomihesapaçıklama_${message.author.id}`) ? `**${açk}**` : `**Açıklama Ayarlamamış**`}`)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ekonomi-profil","ekonomi-hesap","profil"],
  permlevel: 0
};

exports.help = {
  name: "hesap"
}*/