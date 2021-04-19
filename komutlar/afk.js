const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
let user = message.author 
let sebep = args.join(" ") 
let member = message.mentions.members.first()
let isim = args.slice(1).join(" ") 
if (!sebep) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`**Afk olmak için bir sebep yazmalısın.**`).setColor("RANDOM"))
db.set(`afk_${user.id}`, sebep) 
message.channel.send(new Discord.MessageEmbed().setDescription(`<@${message.author.id}> \`${sebep}\` **sebebiyle AFK moduna girdin.**`)) 
};

exports.conf = { 
  enabled: true, 
  guildOnly: true,
  aliases: ["afk"], 
  permLevel: 0
}

exports.help = { 
  name: 'afk', 
  description: "AFK olmanızı sağlar.",
  usage: 'afk <sebep>' }