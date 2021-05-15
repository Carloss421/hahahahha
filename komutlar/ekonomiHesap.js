const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')

exports.run = async(client, message, args) => {
let isim = db.fetch(`ekonomihesapisim_${message.author.id}`)
let yaş = db.fetch(`ekonomihesapyaş_${message.author.id}`) 
let cinsiyet = {
cinsiyet: db.fetch(`ekonomihesapcinsiyetE_${message.author.id}`),
cinsiyet: db.fetch(`ekonomihesapcinsiyetÖ_${message.author.id}`),
cinsiyet: db.fetch(`ekonomihesapcinsyietK_${message.author.id}`)
}
let embed = new Discord.MessageEmbed()  
.setDescription(`
${message.author}**'nın Hesabı**

İsim: ${db.has(`ekonomihesapisim_${message.author.id}`) ? `${isim}` : `**İsim Ayarlamamış**`}
Yaş: ${db.has(`ekonomihesapyaş_${message.author.id}`) ? `${yaş}` : `**Yaş Ayarlamamış**`}
Cinsiyet: ${db.has(`ekonomihesapcinsiyet_${}`)}
`)

  /*
ekonomoihesapcinsiyetK_${message.author.id}
ekonomihesapcinsiyetÖ_${message.author.id}
ekonomihesapcinsiyetE_${message.author.id}
ekonomihesapyaş_${message.author.id}
ekonomihesapisim_${message.author.id}
ekonomihesapaçıklama_${message.author.id}
  */
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ekonomi-profil","ekonomi-hesap","profil"],
  permlevel: 0
};

exports.help = {
  name: "hesap"
}