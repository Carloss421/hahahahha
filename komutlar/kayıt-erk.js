const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, msg, args) => {
  
  let kanal = db.fetch(`kkayıtkanal_${message.guild.id}`)
  
  
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["e","kayıt-erkek"],
  permlevel: 0
};

exports.help = {
  name: "erkek"
}