const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args) => {

          let user = message.mentions.users.first() || message.author

  var cüzdan = db.fetch(`para_${user.id}`)
  var banka = db.fetch(`bankapara_${user.id}`)   

  var toplam= cüzdan+banka
message.channel.send(new Discord.MessageEmbed()
                  .setColor("RED")
                  .setAuthor(user.tag, user.avatarURL({dynamic: true}))     
                  .addField("Cüzdan",`${cüzdan ? cüzdan + 'TL' : "0TL"}`,true)
                  .addField("Banka",`${banka ? banka + 'TL' : "0TL"}`,true))
  }


exports.conf = {
  enabled: true,
  aliases: ["para","cüzdan","cash"],
};

exports.help = {
  name: 'Para',
};