const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
const crypto = require("../ayarlar.json");
let prefix = "a!"  
let rol = message.mentions.roles.first() 
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()
.setDescription(`**Bu komutu kullanabilmek için** \`Yönetici\` **yetkisine sahip olmalısın.**`).setColor("RED"));
 
 if(!rol) return message.channel.send(new Discord.MessageEmbed().setDescription(`**Bir rol etiketlemelisin.**\nÖrnek kullanım: ${prefix}otorol-ayarla @rol #kanal`).setColor("RED"))
 
 if(!kanal) return message.channel.send(new Discord.MessageEmbed().setDescription(`**Bir kanal etiketlemelisin.**\nÖrnek kullanım: ${prefix}otorol-ayarla @rol #kanal`).setColor("RED"))
 
message.channel.send(new Discord.MessageEmbed()
.setDescription(`
**:white_check_mark: Otorol başarıyla aktif edildi.**
**Otorol rolü** \`${rol}\` **olarak ayarlandı.** 
**Otorol kanalı** \`${kanal}\` **olarak ayarlandı.**`).setColor("GREEN"))

 
  db.set(`otoRL_${message.guild.id}`, rol.id)  
  db.set(`otoRK_${message.guild.id}`, kanal.id) 

      };

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["otorolayarla","otorol-ayarla"],
    permlevel: 0
};

exports.help = { 
    name: 'otorolayarla', 
    description: 'Resets server statics.',
    usage: '[p]rstats [all/voice/messages]',
};

/*const Discord = require("discord.js");
const db = require("quick.db");
exports.run = (client, message, args) => {
  let rol = message.mentions.roles.first();
  let kanal = message.mentions.channels.first();
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      `Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`
    );

  if (!rol)
    return message.channel.send(
      new Discord.MessageEmbed().setColor("#00ff00").setDescription(`
Ayarlamam İçin Bir Rol Etiketlemeilisin. 
Rolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma**
Örnek Kullanım : a!otorol @rol #kanal 

 Önemli Not!!: Oto Rol Vermem İçin Verilecek Rolün Üstünde Bir Rolüm Olmalı Yoksa Rolü Veremem :)
 `)
    );

  if (!kanal)
    return message.channel.send(`
 Ayarlamam İçin Bir Kanal Etiketlemeilisin.
`);

  message.channel.send(`╔▬▬▬▬▬▬▬▬Otorol▬▬▬▬▬▬▬▬▬
║► ✔️ Otorol Aktif Edildi.
║► ✔️ **${rol}** Olarak Güncelledim! 
║► ✔️ Kayıt Kanalını **${kanal}** Olarak Güncelledim! 
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)

  db.set(`otoRL_${message.guild.id}`, rol.id);
  db.set(`otoRK_${message.guild.id}`, kanal.id);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "otorol-ayarla",
  description: "taslak",
  usage: "Otorol-ayarla"
};


/*const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {

      if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0x2488E7)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('özelden yazanlara cevap vermiyorum git sunucuda kullan bu komutu')
    return message.author.sendEmbed(ozelmesajuyari); }

  if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('Otorol ayarlamak için `Rolleri Yönet` yetkisine sahip olman gerek.')


    if (args[0] == 'aç') {
 let rol = message.mentions.roles.first() || message.guild.roles.get(args.join(' '))
  let newRole;
  let tworole;
  if (!rol) return message.channel.send('Otorol ayarlamanız için bir rol etiketlemeniz gerek. `a!otorol-ayar aç @Üye #kanal`')
    //    if (!message.guild.roles.get(newRole)) return message.channel.send("Etiketlediğiniz rol bulunamadı, etiketlediğiniz rolün etiketlenebilirliğinin aktif olduğundan emin olunuz.")
  else newRole = message.mentions.roles.first().id
  let isim = message.mentions.roles.first().name  
  let otorolkanal = message.mentions.channels.first();
  if (!otorolkanal) return message.channel.send(':no_entry: Otorol ayarlamanız için bir rol etiketlemeniz gerek. `a!otorol-ayar aç @Üye #kanal`')
    db.set(`otorolisim_${message.guild.id}`, isim)
    db.set(`otorolKanal_${message.guild.id}`, otorolkanal)
  let otorol = await db.set(`autoRole_${message.guild.id}`, newRole)

    message.channel.send(new Discord.MessageEmbed().setDescription(`Otorol, <@&${newRole}> mesaj kanalı ${otorolkanal} olarak ayarlandı.`))  

  } 

  if (args[0] == 'kapat') {



    db.delete(`otorolisim_${message.guild.id}`)
        db.delete(`otorolKanal_${message.guild.id}`)

    message.channel.send(`Otorolü başarıyla kapattım.`)
  }
};



exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['otorol-setting'],
    permLevel: 0
}

exports.help = {
    name: 'otorol-ayar',
    description: 'Sunucuya giren kullanıcıya seçtiğiniz rolü otomatik verir.',
    usage: 'otorol <@rol>'
}*/