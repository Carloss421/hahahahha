const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {

  const sayacsayi = await db.fetch(`sayac_${message.guild.id}`);
  const sayackanal = message.mentions.channels.first()

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()
.setDescription(`Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın.`));

  if(!args[0]) {
    message.channel.send(new Discord.MessageEmbed()
.setDescription(`Bir sayı yazmalısın.`))
    return
  }

  if(!sayackanal) {
   message.channel.send(new Discord.MessageEmbed()
.setDescription(`Sayaç kanalını etiketlemelisin.`))
  }


  if(args[0] === "sıfırla") {
    if(!sayacsayi) {
      message.channel.send(new Discord.MessageEmbed()
.setDescription(`Ayarlanmayan şeyi sıfırlayamazsın.`))
      return
    }

    db.delete(`sayac_${message.guild.id}`)
    db.delete(`sayacK_${message.guild.id}`)
    message.channel.send(`Sayaç başarıyla sıfırlandı.`)
    return
  }

  if(isNaN(args[0])) {
    message.channel.send(`Bir sayı yazmalısın.`)
    return
  }

        if(args[0] <= message.guild.members.size) {
                message.channel.send(new Discord.MessageEmbed()
.setDescription(`Sunucudaki kullanıcı sayısından (${message.guild.members.size}) daha yüksek bir değer girmelisin.`))
                return
        }

  db.set(`sayac_${message.guild.id}`, args[0])
  db.set(`sayacK_${message.guild.id}`, sayackanal.name)

  message.channel.send(new Discord.MessageEmbed().setDescription(`Hedef **${args[0]}**, sayaç kanalı **${sayackanal}** olarak ayarlandı.`))
}

exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['sayacSSSS'],
        permLevel: 3
}

exports.help = {
        name: 'sayaç-ayarla',
        description: 'Sayacı ayarlar.',
        usage: 'sayaç <sayı> <#kanal> / sıfırla'
}