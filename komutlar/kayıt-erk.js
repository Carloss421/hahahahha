const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')

exports.run = function(client, message, msg, args) {
let prefix = ayarlar.prefix
let erkek = db.fetch(`kayıterk: ${message.guild.id}`)
let yetkili = db.fetch(`kayıty: ${message.guild.id}`)
let log = db.fetch(`kayıtlog: ${message.guild.id}`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["e", "erkek-kayıt"],
  permlevel: 0
};
exports.help = {
  name: "erkek"
};

/*let Discord = require("discord.js");
let db = require("quick.db")
let { hata, oldu } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
    let ayarlar = require("../ayarlar.json")

        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

  try {
  let kayıteks = await db.fetch(`kayıteks.${message.guild.id}`)
  let kayıty = await db.fetch(`kayıty.${message.guild.id}`)
  let otokayıt = await db.fetch(`kayıtalınacakrol.${message.guild.id}`)
  let kayıte = await db.fetch(`kayıte.${message.guild.id}`)
  let embed = await db.fetch(`kmesajembed.${message.guild.id}`)
   let kisim2 = await db.fetch(`kisimdüzenisc.${message.guild.id}`)

  let kayıtlog = await db.fetch(`logkayıt.${message.guild.id}`)
  let agacim = await db.fetch(`kayıtalınacakrol.${message.guild.id}`)
let kisim = await db.fetch(`kisim.${message.guild.id}`)
if(!kayıty) return message.channel.send(new Discord.MessageEmbed().setDescription(`Kayıt yetkilisi ayarlanmadan bu işlem gerçekleştirilemez!`).setColor(hata))
if(!kayıte) return message.channel.send(new Discord.MessageEmbed().setDescription(`Kayıt erkek rolü ayarlanmadan bu işlem gerçekleştirilemez!`).setColor(hata))
if(!kayıtlog) return message.channel.send(new Discord.MessageEmbed().setDescription(`Kayıt logu ayarlanmadan bu işlem gerçekleştirilemez!`).setColor(hata))
if(!agacim) return message.channel.send(new Discord.MessageEmbed().setDescription(`Kayıt alınacak rol ayarlanmadan bu işlem gerçekleştirilemez!`).setColor(hata))
      let isimdüzen = await db.fetch(`isimdüzen.${message.guild.id}`)

  let kanal = client.channels.cache.get(kayıtlog)
  if(!message.member.roles.cache.has(kayıty)) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bu komutu kullanabilmek için <@&${kayıty}>  Rolüne sahip olman gerekmekte`).setColor(hata))

let isim = args[1]
let yaş = args[2]
  let userca = message.mentions.members.first() || message.mentions.users.first()


if(!userca) return message.channel.send(new Discord.MessageEmbed().setDescription(`
Erkek Kayıtı Yapabilmek İçin Bir Kullanıcı Etiketlemen Lazım! Örnekler Aşağıda:
\`${prefix}erkek @etiket\`
\`${prefix}erkek @etiket Aliberat 15\` `).setColor(hata))
    if(kisim) {


if(!isim || !yaş) return message.channel.send(new Discord.MessageEmbed().setDescription('Bir İsim Ve Yaş Girmedin!').setColor(hata))
  if(isNaN(yaş)) return message.channel.send(new Discord.MessageEmbed().setDescription('Bir Yaş Girmedin!').setColor(hata))
  if(message.channel.id !== kayıtlog) return message.channel.send(new Discord.MessageEmbed().setColor(hata).setDescription('Bu Kodu Sadece Kayıt Kanalında Kullanabilirsin'))
  if(!userca.roles.cache.has(agacim)) return message.channel.send({embed: {color : hata, description: `Kayıt Edeceğin Kullanıcı <@&${agacim}> Rolüne Sahip Olması Lazım`}})



  if(kayıteks) {
userca.roles.add(kayıte)
  userca.roles.remove(agacim)
  }
  userca.roles.add(kayıte)
  userca.roles.remove(agacim)
  let type = message.mentions.channels.first()
  let log = db.fetch(`logkayıt.${message.guild.id}`)
  let emd = new Discord.MessageEmbed()
 let msj = `
${userca} Kaydı ${message.author} Tarafından Yapıldı!
\`Kullanıcı Başarıyla Kayıt Oldu\`
 
${userca}, Kullanıcıya <@&${kayıte}> Rolü Verildi!`
 return guild.channels.get(log).send(emd)

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
      userca.setNickname(`${isim} ${yaş}`)
    }
      db.add(`say.erkek.${message.author.id}.${message.guild.id}`, 1)
              db.add(`say.toplam.${message.author.id}.${message.guild.id}`, 1)

  let guild = message.guild.name
  if(kisim2) {
    let kisim3 = kisim2.replace(`{isim}`, isim).replace(`{yaş}`, yaş)
    userca.setNickname(kisim3)
  }
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
  aliases: ["erkek", "e","erkek-kayıt"],
  permLevel: 0
};

module.exports.help = {
  name: 'erk'
};

           
    --------------------------------------------------------------------------


const discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args) => {
  
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`);
let erkekrol = db.fetch(`erkekrol_${message.guild.id}`);
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`);
let kayıtsayı = db.fetch(`kayıtsayı_${message.author.id}`); 
if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(new discord.MessageEmbed().setDescription(`
Bu Komudu Kullanabilmen İçin <@&${kayıtçı}> Adlı Role Sahip olman Lazım ! `).setColor("RANDOM"))
  
let mod = message.author;
let guild = message.guild;
let modlog = guild.channels.find('name', 'kayıtlog');
    if (!modlog) return message.reply('`kayıtlog` kanalını bulamıyorum. Bunu gerçekliştirmek için **kayıtlog** adında kanal oluşturun!');
let modlog = guild.channels.find('name', 'kayıtlog');
if (!modlog) return message.reply('`kayıtlog` kanalını bulamıyorum. Bunu gerçekliştirmek için **kayıtlog** adında kanal oluşturun!');
if(message.channel.id !== kanal) return message.channel.send(new discord.MessageEmbed().setDescirpion(`Bu Komudu Sadece <#${kanal}> Adlı Kanalda Kullanabilirsin ! `).setColor("RANDOM"))
if (!erkekrol) return message.channel.send(new discord.MessageEmbed().setDescription(`Sunucuda Erkek Rolü Ayarlanmadığı İçin Komut Kullanılamaz ! `).setColor("RANDOM"))
let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
let member = message.mentions.members.first();
if (!member) return message.channel.send(new discord.MessageEmbed().setDescripiton(`Erkek Olarak Kayıt Edeceğin Kullanıcıyı Belirtmelisin ! `).setColor("RANDOM"))
let isim = args[1]
if (!isim) return message.channel.send(new discord.MessageEmbed().setDescription(`İsim Belirtmelisin!`).setColor("RANDOM"))
let yaş = args[2]
if (!yaş) return message.channel.send(new discord.MessageEmbed().setDescription(`Yaş Belirtmelisin!`).setColor("RANDOM"))
member.setNickname(`${isim} | ${yaş}`)
member.roles.remove(alınacakrol)
member.roles.add(erkekrol)
const darkcode = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Erkek `)
.setColor('BLACK')
.setDescription(`
Kayıt Edilen Kullanıcı: ${member} 
Kayıt Eden Yetkili: <@!${message.author.id}> 
Kayıt Eden Kullanıcının Kayıt Sayısı: **${kayıtsayı ? `${kayıtsayı}` : "0"}**`)
.addField(`Kayıt Edilenin İsmi;`, `${isim}`, true)
.addField(`Kayıt Edilenin Yaşı;`, `${yaş}`, true)
return message.guild.channels.get(modlog.id).sendEmbed(darkcode);
db.add(`kayıtsayı_${message.author.id}`, 1)
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['e'],
  permlevel: 0
}
exports.help = {
  name: 'erkek',
  description: 'erkek olarak kayıt eder',
  usage: '!erkek @kullanıcı isim yaş'
}*/