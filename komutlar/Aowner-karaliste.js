const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {

   if(message.author.id !== ayarlar.ownerID)  {
    const embed = new Discord.MessageEmbed()
    .setDescription("Bu komut sahibim kullanabilir")
    .setColor('BLUE')
    return message.channel.send(embed).then(msg=>msg.delete(5000));
    }
  let user = client.users.get(args.slice(0).join(' '));
  if (!user) {
    let e = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("Lütfen karalisteye alınacak kullanıcıyı etiketle!")
    message.channel.send({embed: e})
    return;
  };

  if (db.has(`karalist_${user.id}`) === true) return message.reply("Bu kullanıcı zaten karalistede!");

  db.set(`karalist_${user.id}`, "aktif")

  let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`**${user.tag}(${user.id})** adlı kullanıcı başarıyla karalisteye atıldı!`)
    message.channel.send({embed: embed})

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["blacklist", "kara-liste"],
  permLevel: 4,
    kategori: "yapımcı"
};

exports.help = {
  name: "karaliste",
  description: "Belirtilen kullancıyı kara listeye alır!",
  usage: "karaliste <kullanıcı ID>"
};