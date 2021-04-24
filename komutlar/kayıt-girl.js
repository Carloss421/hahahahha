let Discord = require("discord.js");
let db = require("quick.db")
let { hata, oldu } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
  
    let ayarlar = require("../ayarlar.json")

        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

        
  try {
       let kisim2 = await db.fetch(`kisimdüzenisc.${message.guild.id}`)
        let kayıteks = await db.fetch(`kayıteks.${message.guild.id}`)
  let kayıty = await db.fetch(`kayıty.${message.guild.id}`)
  let otokayıt = await db.fetch(`kayıtalınacakrol.${message.guild.id}`)
  let kayıtkadın = await db.fetch(`kayıtkadın.${message.guild.id}`)
  let embed = await db.fetch(`kmesajembed.${message.guild.id}`)
  let kayıtlog = await db.fetch(`logkayıt.${message.guild.id}`)
if(!kayıty) return message.channel.send(new Discord.MessageEmbed().setDescription(`Kayıt yetkilisi ayarlanmadan bu işlem gerçekleştirilemez!`).setColor(hata))
if(!kayıtkadın) return message.channel.send(new Discord.MessageEmbed().setDescription(`Kayıt kadın rolü ayarlanmadan bu işlem gerçekleştirilemez!`).setColor(hata))
if(!kayıtlog) return message.channel.send(new Discord.MessageEmbed().setDescription(`Kayıt logu ayarlanmadan bu işlem gerçekleştirilemez!`).setColor(hata))
  let agacim = await db.fetch(`kayıtalınacakrol.${message.guild.id}`)
let kisim = await db.fetch(`kisim.${message.guild.id}`)
if(!agacim) return message.channel.send(new Discord.MessageEmbed().setDescription(`Kayıt alınacak rol ayarlanmadan bu işlem gerçekleştirilemez!`).setColor(hata))

  let kanal = client.channels.cache.get(kayıtlog)
  if(!message.member.roles.cache.has(kayıty)) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bu komutu kullanabilmek için <@&${kayıty}>  Rolüne sahip olman gerekmekte`).setColor(hata))
  
let isim = args[1]
let yaş = args[2]
  let userca = message.mentions.members.first()


if(!userca) return message.channel.send(new Discord.MessageEmbed().setDescription(`
Kadın Kayıtı Yapabilmek İçin Bir Kullanıcı Etiketlemen Lazım! Örnekler Aşşağıda:

\`${prefix}kadın @etiket\`
\`${prefix}kadın @etiket Didem 15\` `).setColor(hata))
    if(kisim) {
      
    
if(!isim || !yaş) return message.channel.send(new Discord.MessageEmbed().setDescription('Bir İsim Ve Yaş Girmedin!').setColor(hata))
  if(isNaN(yaş)) return message.channel.send(new Discord.MessageEmbed().setDescription('Bir Yaş Girmedin!').setColor(hata))
  if(message.channel.id !== kayıtlog) return message.channel.send(new Discord.MessageEmbed().setColor(hata).setDescription('Bu Kodu Sadece Kayıt Kanalında Kullanabilirsin'))
  if(!userca.roles.cache.has(agacim)) return message.channel.send({embed: {color : hata, description: `Kayıt Edeceğin Kullanıcı <@&${agacim}> Rolüne Sahip Olması Lazım`}})
      userca.setNickname(`${isim} | ${yaş}`)
    }
      db.add(`say.kadın.${message.author.id}.${message.guild.id}`, 1)
          db.add(`say.toplam.${message.author.id}.${message.guild.id}`, 1)

  let guild = message.guild.name
  if(kisim2) {
    let kisim3 = kisim2.replace(`{isim}`, isim).replace(`{yas}`, yaş)
    userca.setNickname(kisim3)
  }
  
  

if(kayıteks) {
userca.roles.add(kayıtkadın)
  userca.roles.remove(agacim)
  }
  userca.roles.add(kayıtkadın)
  userca.roles.remove(agacim)
  
 let msj = `
${userca} Kaydı ${message.author} Tarafından Yapıldı!

\`
Kullanıcı Başarıyla Kayıt Oldu \`
 
${userca}, Kullanıcıya <@&${kayıtkadın}> Rolü Verildi!

`
 
 if(embed){
   let embed = new Discord.MessageEmbed()
   .setTitle(` Kayıt Sistemi!`)
   .setDescription(msj)
   .setColor(oldu)
   .setFooter(`Kayıt Sistemi!`)
   .setThumbnail('https://www.nkfu.com/wp-content/uploads/2014/03/para-gifleri-4.gif')
message.channel.send(embed)
 } else if(!embed){
   
   message.channel.send(msj)
   
 }
    

    
  } catch (e) {
    let embed1 = new Discord.MessageEmbed()
    .setTitle("Hata")
    .setDescription(`Bir Hatayla Karşılaştım! Hata => ${e}
    
    ${prefix}yardım`)
    .setThumbnail()
    message.channel.send(embed1)
  }
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kadın", "k","kız","kız-kayıt"],
  permLevel: 0
};

module.exports.help = {
  name: 'kız'
};


/*const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)
let kızrol = db.fetch(`kızrol_${message.guild.id}`)
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)
let kayıtsayı = db.fetch(`kayıtsayı_${message.author.id}`)

let modlog = message.guild.channels.find('name', 'kayıtlog');
if (!modlog) return message.reply('`kayıtlog` kanalını bulamıyorum. Ayarlamak için `a!kayıtlog #kayıtlog`');
if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(new discord.MessageEmbed().setDescription(`Bu Komudu Kullanabilmen İçin <@&${kayıtçı}> Adlı Role Sahip olman Lazım!`).setColor("RANDOM"))
if(message.channel.id !== kanal) return message.channel.send(`Bu Komudu Sadece <#${kanal}> Adlı Kanalda Kullanabilirsin ! `)
if (!kızrol) return message.channel.send(new discord.MessageEmbed().setDescription(`Sunucuda Kız Rolü Ayarlanmadığı İçin Komut Kullanılamaz ! `).setColor("RANDOM"))

let member = message.mentions.members.first();
if (!member) return message.channel.send(new discord.MessageEmbed().setDescription(`Kız Olarak Kayıt Edeceğin Kullanıcıyı Belirtmelisin!`).setColor("RANDOM"))
let isim = args[1]
if (!isim) return message.channel.send(new discord.MessageEmbed().setDescription(`İsim Belirtmelisin!`).setColor("RANDOM"))
let yaş = args[2]
if (!yaş) return message.channel.send(new discord.MessageEmbed().setDescription(`Yaş Belirtmelisin ! `).setColor("RANDOM"))
member.setNickname(`${isim} | ${yaş}`)
member.roles.remove(alınacakrol)
member.roles.add(kızrol) 

const başarılı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Kız `)
.setColor('BLACK')
.setDescription(`Kız Olarak Kayıt Edilen Kullanıcı: ${member} \n Kız Olarak Kayıt Eden Yetkili: <@!${message.author.id}> \n Kız Olarak Kayıt Eden Kullanıcının Kayıt Sayısı: **${kayıtsayı ? `**${kayıtsayı}**` : "0"}**`)
.addField(`Kullanıcının ismi;`, `${isim}`, true)
.addField(`Kullanıcının Yaşı;`, `${yaş}`, true)
.setThumbnail(member.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
return message.guild.channels.get(modlog.id).sendEmbed(başarılı);
db.add(`kayıtsayı_${message.author.id}`, 1)
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['k','kız-kayıt'],
  permlevel: 0
}
exports.help = {
  name: 'kız',
  description: 'erkek olarak kayıt eder',
  usage: '!erkek @kullanıcı isim yaş'
}*/