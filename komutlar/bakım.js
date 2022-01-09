const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json")
exports.run = async (client, message, args) => {

  if(message.author.id !== ayarlar.ownerID){
    const embed = new Discord.MessageEmbed()
    .setDescription(`**:x: Bu komutu sahip kullanabilir/Here command use owner!**`)
    .setColor('BLUE')
    return message.channel.send(embed).then(msg=>msg.delete(5000));
    }

if(!["aç", "kapat"].includes(args[0])) return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Hazretleri sana haşa cevap veya sual sormak gibi niyetim yok ama \`aç\` veya \`kapat\` yazarsan memnun olurum paşam.`))
  
if(args[0] === "aç"){
  if(!args[1]){
  message.channel.send('Bakım modu sebebini belirtin!')
  }
  db.set('bakım', args.slice(1).join(' '))
  if (args.slice(1).join(' ')) {
  message.channel.send("Bakım açıldı")
    }
} else if(args[0]=== "kapat"){
  message.channel.send("Bakım Kapatıldı")
  db.delete('bakım')
}

}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bakım'],
  permLevel: 0
};

exports.help = {
  name: 'bakım',
  description: 'Bakım.',
  usage: 'Bakım'
};