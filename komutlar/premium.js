const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {

  const db = require('quick.db');

  var s = 'tr'
  var a = client.commands.get('premium').help.name
  var header = "Premium Nasıl Aktif Edilir? (Ücretsiz)"
  var msg = "Sunucunuzda botun kullandığınız her komutu sunucunuza puan kazandırmaktadır. Sunucunuz 50 puana ulaştığında Premium otomatik olarak aktif edilecek, sunucu sahibine özel mesaj olarak ve Sunucu seviyesini 50 puan yapan 50 puan için son komutun kullanıldığı kanala bildirilecektir."
  var n = "Sunucu puanını nereden göreceğim?"
  var g = "`a!premium puan` yazarak görebilirsiniz."
  var k = "Premium Aktif Sunucular"
  var l = "`a!premium liste` yazarak görebilirsiniz."
    const dil = client[s]
    const o = a

var i = args.slice(0).join(' ');
    let prefix = ayarlar.prefix;
  let str = ""
 for(var a = 0; a < client.guilds.size; a++) {
  if (db.has(`premium_${client.guilds.array()[a].id}`)) {
      str += `${client.guilds.array()[a].name} \n`.replace(`${client.user.username}`, `**${client.user.username}**`)
  }
}

if (!i) {

let embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(`${client.user.username} - Premium`, client.user.avatarURL)
.addField( "Premium Nasıl Aktif Edilir? (Ücretsiz)", "Sunucunuzda botun kullandığınız her komutu sunucunuza puan kazandırmaktadır. Sunucunuz 50 puana ulaştığında Premium otomatik olarak aktif edilecek, sunucu sahibine özel mesaj olarak ve Sunucu seviyesini 50 puan yapan 50 puan için son komutun kullanıldığı kanala bildirilecektir.")
.addField('Sunucu puanını nereden göreceğim?',  `${prefix}premium puan yazarak görebilirsiniz.`)
.addField("Premium Aktif Sunucular", `${prefix}premium liste yazarak görebilirsiniz.`)
//.addField("Premium Durumu", db.has(`premium_${message.guild.id}`) ? db.fetch(`premium_${message.guild.id}`).replace("aktif", "") : "Sunucu puanı 50 puana ulaşmadığı için De-Aktif.")
message.channel.send(embed)
  return;
}

  if (i === "liste" || i === "list") {
    let embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(`${client.user.username} - Premium`, client.user.avatarURL)
.addField("Premium Aktif Sunucular", str)
message.channel.send(embed)
    return;
  }

  if (i === "puan" || i === "point") {
    let puan = await db.fetch(`sunucuxp_${message.guild.id}`)
    let embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`${client.user.username} - Premium`, client.user.avatarURL)
.setDescription(`Premium puan: **${puan > 50 ? '50' : puan}/50**\n Premium: **${puan < 50 ? 'Aktif değil' : 'Aktif'}**`)
message.channel.send(embed)
    return;
  }

  if (i === "aç" || i === "aktif") {

      if(message.author.id !== ayarlar.ownerID)
      if(message.author.id !== ayarlar.ownerİD) return;

    var arr = ``
    if(!args[2]) { var arr = message.guild.id } else { var arr = args[2] }

    db.set(`premium_${arr}`, "aktif")
    db.set(`sunucuxp_${arr}`, 50)

    let embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`${client.user.username} - Premium`, client.user.avatarURL)
.setDescription("Premium mod bu sunucu için başarıyla Aktif edildi!")
message.channel.send(embed)

  }

  if (i === "kapat" || i === "deaktif" || i === "de-aktif") {

      if(message.author.id !== ayarlar.ownerID)
      if(message.author.id !== ayarlar.ownerİD) return;

    db.delete(`premium_${message.guild.id}`)
    db.delete(`sunucuxp_${message.guild.id}`)

    let embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(`${client.user.username} - Premium`, client.user.avatarURL)
.setDescription("Premium mod bu sunucu için başarıyla De-Aktif edildi!")
message.channel.send(embed)

  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['premium-bilgi'],
  permLevel: 0,
  kategori: "genel",
};

exports.help = {
  name: 'premium',
  description: 'Premium hakkında bilgi verir. (Ücretsiz)',
  usage: 'premium',
};


/*const Discord = require('discord.js');
const data = require('quick.db')
let ayarlar = require('../ayarlar.json');
exports.run = async (client, message, args) => {
  ////--------------------------------------------\\\\       
  let prefix = ayarlar.prefix
  let sahip = ('739411430171738142') //Premium verebilicek / alabilecek kişiler
  let log = client.channels.cache.get('833215025262362625') // logların tutulcağı kanal
  ////--------------------------------------------\\\\     
if(!args[0]) return message.channel.send(`Premium sisteminden yararlanmak için bot sahibinin sizin premiumunuzu aktif etmiş olması gerekiyor.
\`${prefix}premium\` \`kontrol\``)
////----------------------\\\\ PREMİUM KONTROL ////----------------------\\\\   
if(message.author.id !== sahip) {
  if(args[0] === 'kontrol') {
  let açıkmı = await data.fetch(`premium.${message.guild.id}`)  
  message.channel.send(new Discord.MessageEmbed()  
.setColor('RANDOM')
.setAuthor(message.guild.name, message.guild.iconURL)
.setDescription(`Bu sunucu için **Premium** sistemi **${açıkmı ? 'aktif' : 'kapalı'}**!`)
.setTimestamp())   
}}
////----------------------\\\\ PREMİUM VER ////----------------------\\\\   
  if(args[0] === 'ver') {
  if(message.author.id !== sahip) return;
  ////----------------------\\\\ ID Boş ise ////----------------------\\\\   
  if(!args[1]) return message.channel.send(new Discord.MessageEmbed().setDescription(`**Lütfen Bir Sunucunun ID'sini Gir.** \n**Örnek Kullanım: a!premium ver 847239847204982234**`).setTimestamp().setTitle(`❌ Hata !`).setColor(`RED`))
  let id = args[1]
  if(isNaN(id)) return message.channel.send(new Discord.MessageEmbed().setDescription(`**Sadece sayı girebilirsin.**`).setTimestamp().setTitle(`❌ Hata !`).setColor(`RED`))
  ////----------------------\\\\ ID Kısa İse ////----------------------\\\\   
  if(id < 15) return message.channel.send(new Discord.MessageEmbed().setDescription(`**Girdiğin Rakam Bir Sunucunun ID'si Olmak İçin Çok Küçük.**`).setTimestamp().setTitle(`❌ Hata !`).setColor(`RED`))
  ////----------------------\\\\ ID bulunamaz ise ////----------------------\\\\   
  if(!client.guilds.cache.get(id)) return message.channel.send(new Discord.MessageEmbed().setDescription(`\`${id}\` **sunucusunu bulamıyorum.**`).setTimestamp().setTitle(`❌ Hata !`).setColor(`RED`))
  let açıkmı = await data.fetch(`premium.${id}`)
  if(açıkmı) return message.channel.send(new Discord.MessageEmbed().setDescription(`\`${id}\` **sunucusu için zaten premium aktif.**`).setTimestamp().setTitle(`❌ Hata !`).setColor(`RED`))
  ////----------------------\\\\ veritabanı ////----------------------\\\\     
  data.set(`premium.${id}`, 'açık')
  message.channel.send(new Discord.MessageEmbed().setDescription(`${client.guilds.cache.get(id).name} isimli sunucu için **PREMİUM** aktif edildi!`).setTimestamp().setTitle(`✅ Başarılı !`).setColor(`GREEN`))
 
 ////----------------------\\\\ Sunucu sahibi mesaj ////----------------------\\\\     
  let owner = client.guilds.cache.get(id).owner;
  owner.send(new Discord.MessageEmbed().setDescription(`**Merhaba** \`${owner.user.username}\`**a!** \`${message.author.tag}\` **isimli kişi** \`${client.guilds.cache.get(id).name}\` **isimli sunucun için premium'u açtı.**`).setTimestamp().setTitle(`🔔 Bilgilendirme !`).setColor(`YELLOW`))
   ////----------------------\\\\ Log kanal mesaj ////----------------------\\\\    
    log.send(new Discord.MessageEmbed().setDescription(`\`${message.author.tag}\` **İsimli Yetkili** \n \`${owner.user.username}\` **Adlı Kişinin Sahip Olduğu** \n \`${client.guilds.cache.get(id).name}\` **isimli sunucun için premium'u açtı.**`).setTimestamp().setTitle(`🔔 Bilgilendirme !`).setColor(`YELLOW`)) 
  }
  ////----------------------\\\\ PREMİUM AL ////----------------------\\\\   
  if(args[0] === 'al') {
  if(message.author.id !== sahip) return;
     ////----------------------\\\\ ID Boş ise ////----------------------\\\\    
  if(!args[1]) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bir sunucunun ID'sini girmeyi dene.`).setTimestamp().setTitle(`❌ Hata !`).setColor(`RED`))
  let id = args[1]
  if(isNaN(id)) return message.channel.send(new Discord.MessageEmbed().setDescription(`Sadece sayı girebilirsin.`).setTimestamp().setTitle(`❌ Hata !`).setColor(`RED`))
    ////----------------------\\\\ ID Kısa İse ////----------------------\\\\   
  if(id < 15) return message.channel.send(new Discord.MessageEmbed().setDescription(`Girdiğin rakam bir sunucunun ID'si olmak için çok küçük.`).setTimestamp().setTitle(`❌ Hata !`).setColor(`RED`))
   ////----------------------\\\\ ID bulunamaz ise ////----------------------\\\\   
 if(!client.guilds.cache.get(id)) return message.channel.send(new Discord.MessageEmbed().setDescription(`**${id}** sunucusunu bulamıyorum.`).setTimestamp().setTitle(`❌ Hata !`).setColor(`RED`))
  let açıkmı = await data.fetch(`premium.${id}`)
  if(!açıkmı) return message.channel.send(new Discord.MessageEmbed().setDescription(`**${id}** sunucusu için zaten premium aktif değil.`).setTimestamp().setTitle(`❌ Hata !`).setColor(`RED`))
    ////----------------------\\\\ veritabanı ////----------------------\\\\     
  data.delete(`premium.${id}`)
  message.channel.send(new Discord.MessageEmbed().setDescription(`${client.guilds.cache.get(id).name} isimli sunucu için **PREMİUM** de-aktif edildi!`).setTimestamp().setTitle(`✅ Başarılı !`).setColor(`GREEN`))
    ////----------------------\\\\ Sunucu sahibi mesaj ////----------------------\\\\      
  let owner = client.guilds.cache.get(id).owner;
  owner.send(new Discord.MessageEmbed().setDescription(`**Merhaba** \`${owner.user.username}\`**!** \`${message.author.tag}\` **isimli kişi** \`${client.guilds.cache.get(id).name}\` **isimli sunucun için premium'u kapattı.**`).setTimestamp().setTitle(`🔔 Bilgilendirme !`).setColor(`YELLOW`))
     ////----------------------\\\\ Log kanal mesaj ////----------------------\\\\      
    log.send(new Discord.MessageEmbed().setDescription(`\`${message.author.tag}\` **isimli kişi** \n \`${owner.user.username}\` **Adlı Kişinin Sahip Olduğu** \n \`${client.guilds.cache.get(id).name}\` **isimli sunucun için premium'u kapattı.**`).setTimestamp().setTitle(`🔔 Bilgilendirme !`).setColor(`YELLOW`))
  }    
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['servpre'],
  permLevel: 0
}  
exports.help = {
  name: 'sunucu-premium'
};*/