const Discord = require('discord.js')
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
  else newRole = message.mentions.roles.first().id
  let isim = message.mentions.roles.first().name  
  let otorolkanal = message.mentions.channels.first();
  if (!otorolkanal) return message.channel.send(':no_entry: Otorol ayarlamanız için bir rol etiketlemeniz gerek. `a!otorol-ayar aç @Üye #kanal`')
    db.set(`otorolisim_${message.guild.id}`, isim)
    db.set(`otorolKanal_${message.guild.id}`, otorolkanal)
  let otorol = await db.set(`autoRole_${message.guild.id}`, newRole)
  if (!message.guild.roles.get(newRole)) return message.channel.send("Etiketlediğiniz rol bulunamadı, etiketlediğiniz rolün etiketlenebilirliğinin aktif olduğundan emin olunuz.")
    message.channel.send(`Otorol, <@&${newRole}> mesaj kanalı <#${otorolkanal}> olarak ayarlandı.`)  
     
  } 

  if (args[0] == 'kapat') {
    

    
    
    db.delete(`otorolisim_${message.guild.id}`)
        db.delete(`otorolKanal_${message.guild.id}`)
return message.channel.send(new Discord.MessageEmbed().setDescription(`Otorolü başarıyla kapattım.`))
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
}