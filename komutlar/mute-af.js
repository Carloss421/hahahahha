const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  if (args[0] == "help") {
    message.reply(`Usage: c!unmute [user]`);
    return;
  }

  let xdemb = new Discord.MessageEmbed()
    .setColor("#00ff00")
    .setTitle(`UnMute Command <:info:713344071816446039>`)
    .addField("Açıklama:", "`UnMute a member`" + "\n")
    .addField("Kullanım", "`c!unmute <@user>`" + "\n")
    .addField("Örnek", "`c!unmute @ur mom`");
const embed = new Discord.MessageEmbed()
  .setDescription("<:x1:715859799585325086> **| You don't have permission (**__`MANAGE_MESSAGES`__**)**")
.setColor("RED")
const embed2 = new Discord.MessageEmbed()
  .setDescription("<:x1:715859799585325086> **| I can't UnMute this user**")
.setColor("RED")
   
if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(embed)
  let toMute = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
if (!toMute) return message.channel.send(xdemb);
const embed3 = new Discord.MessageEmbed()
  .setDescription("<:x1:715859799585325086> **| This user is not muted**")
.setColor("RED")
let role = message.guild.roles.cache.find(val => val.name === "Muted");
    return message.channel.send(embed3)
        
        if(!role || !toMute.roles.has(role.id)) return message.channel.send(embed3);

        await toMute.removeRole(role);
   
  const embed4 = new Discord.MessageEmbed()
  .setDescription(`<:good:715860337865392130> **| <@${toMute.id}> has been unmuted!**`)
.setColor("GREEN")
  message.channel.send(embed4)
};

module.exports.help = {
  name: "unmute"
};