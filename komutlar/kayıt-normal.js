const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')

exports.run = function(client, message, msg, args) {
let prefix = ayarlar.prefix
let normal = db.fetch(`kayıtnorml_${message.guild.id}`)
let yetkili = db.fetch(`kayıty_${message.guild.id}`)
let log = db.fetch(`kayıtlog_${message.guild.id}`)
let alınacak = db.fetch(`kayıtalınacakrol_${message.guild.id}`)

// ---------------------------------------->  [HATALAR] <---------------------------------------- \\
if(!yetkili) return message.channel.send(new Discord.MessageEmbed().setDescription(`Kayıt yetkilisi ayarlanmadan bu işlem gerçekleştirilemez!`).setColor("RED"))
if(!normal) return message.channel.send(new Discord.MessageEmbed().setDescription(`Kayıt normal üye rolü ayarlanmadan bu işlem gerçekleştirilemez!`).setColor("RED"))
if(!log) return message.channel.send(new Discord.MessageEmbed().setDescription(`Kayıt logu ayarlanmadan bu işlem gerçekleştirilemez!`).setColor("RED"))
if(!alınacak) return message.channel.send(new Discord.MessageEmbed().setDescription(`Kayıt alınacak rol ayarlanmadan bu işlem gerçekleştirilemez!`).setColor("RED"))
let kanal = client.channels.cache.get(log)
if(!message.member.roles.cache.has(yetkili)) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bu komutu kullanabilmek için <@&${yetkili}>  Rolüne sahip olman gerekmekte`).setColor("RED"))  
  
let member = message.mentions.users.first() || client.users.get(args.join(' '))
if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription("Lütfen Bir kullanıcı etiketleyin.")) 
let isim = args[1]
if(!isim) return message.channel.send(new Discord.MessageEmbed().setDescription("Bir isim giriniz."))
let yaş = args[2]
if(!yaş) return message.channel.send(new Discord.MessageEmbed().setDescription("Bir yaş giriniz."))
const c = message.guild.member(member)
c.addRole(normal)
c.removeRole(alınacak)
c.setNickname(`${isim} ${yaş}`)
// ----------------------------------------> [KOMUT] <---------------------------------------- \\
const başarılı = new Discord.MessageEmbed()
.setTitle("Alvi - KayıtSistemi")
.setDescription(`
**Bir NORMAL UYE kaydı yapıldı!**

**Kayıt edilen:** ${c.user.tag}
**Kaydı eden:** ${message.author}

**Kayıt edilenin yeni ismi:** ${isim} ${yaş} - ${c.user}

bu mesajın gönderim süresi:`).setTimestamp()
log.send(başarılı)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["nk", "normal-kayıt"],
  permlevel: 0
};
exports.help = {
  name: "normaş"
};


/*const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)
let normalrol = db.fetch(`erkekrol_${message.guild.id}`)
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)
let kayıtsayı = db.fetch(`kayıtsayı_${message.author.id}`)
let normal = db.fetch(`norml_${message.guild.id}`)

let modlog = message.guild.channels.find('name', 'kayıtlog');
if (!modlog) return message.reply('`kayıtlog` kanalını bulamıyorum. Ayarlamak için `a!kayıtlog #kayıtlog`');
if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(new discord.MessageEmbed().setDescription(`Bu Komudu Kullanabilmen İçin <@&${kayıtçı}> Adlı Role Sahip olman Lazım!`).setColor("RANDOM"))
if(message.channel.id !== kanal) return message.channel.send(new discord.MessageEmbed().setDescription(`Bu Komudu Sadece <#${kanal}> Adlı Kanalda Kullanabilirsin!`).setColor("RANDOM"))
if (!normal) return message.channel.send(new discord.MessageEmbed().setDescription(`Sunucuda Normal Üye Rolü Ayarlanmadığı İçin Komut Kullanılamaz!`).setColor("RANDOM"))

let member = message.mentions.members.first();
if (!member) return message.channel.send(new discord.MessageEmbed().setDescription(`Normal Üye Olarak Kayıt Edeceğin Kullanıcıyı Belirtmelisin!`).setColor("RANDOM"))
let isim = args[1]
if (!isim) return message.channel.send(new discord.MessageEmbed().setDescription(`İsim Belirtmelisin!`).setColor("RANDOM"))
let yaş = args[2]
if (!yaş) return message.channel.send(new discord.MessageEmbed().setDescription(`Yaş Belirtmelisin!`).setColor("RANDOM"))
member.setNickname(`${isim} ${yaş}`)
member.roles.remove(alınacakrol)
member.roles.add(normal)

const darkcode = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Normal Üye `)
.setColor('BLACK')
.setDescription(`Normal Üye Olarak Kayıt Edilen Kullanıcı: ${member} \n Normal Üye Olarak Kayıt Eden Yetkili: <@!${message.author.id}> \n Erkek Olarak Kayıt Eden Kullanıcının Kayıt Sayısı: **${kayıtsayı ? `${kayıtsayı}` : "0"}**`)
.addField(`Kullanıcının İsmi;`, `${isim}`, true)
.addField(`Kullanıcının Yaşı;`, `${yaş}`, true)
.setThumbnail(member.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
return message.guild.channels.get(modlog.id).sendEmbed(darkcode);
db.add(`kayıtsayı_${message.author.id}`, 1)
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['nk','normal-kayıt'],
  permlevel: 0
}
exports.help = {
  name: 'normal',
  description: 'erkek olarak kayıt eder',
  usage: '!erkek @kullanıcı isim yaş'
}*/