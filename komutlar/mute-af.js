const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  if (args[0] == "a!unmute-yardım") {
    message.reply(`Kullanım: a!unmute [user]`);
    return;
  }


  let xdemb = new Discord.MessageEmbed()
let 
    .setColor("#00ff00")
    .setTitle(`Unmute Komut`)
    .addField("Açıklama:", "`Üyenin susturulmasını kaldır`" + "\n")
    .addField("Kullanım", "`a!unmute <@kullanıcı>`" + "\n")
    .addField("Örnek", "`c!unmute @Ali deneme`");
  return message.guild.channels.get(modlog.id).send(xdemb);
let embed = new Discord.MessageEmbed()
  .setDescription(":warning: **İzniniz yok (**__`Mesajları_Yönet`__**)**")
.setColor("RED")
let embed2 = new Discord.MessageEmbed()
  .setDescription(":warning: **Bu kullanıcının Susturulmasını Açamıyorum**")
.setColor("RED")
if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(embed)
  let toMute = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
if (!toMute) return message.channel.send(xdemb);
const embed3 = new Discord.MessageEmbed()
  .setDescription(":warning: **Bu kullanıcının susturulmamış!**")
.setColor("RED")
let role = message.guild.roles.cache.find(val => val.name === "Muted");
    return message.channel.send(embed3)
        
        if(!role || !toMute.roles.has(role.id)) return message.channel.send(embed3);

        await toMute.removeRole(role);
       let modlog = message.guild.channels.find('name', 'cezalog');
    if (!modlog) return message.reply('`cezalog` kanalını bulamıyorum.');
  let embed4 = new Discord.MessageEmbed()
  .setDescription(`:white_check_mark: **<@${toMute.id}> yoksaymaktan vazgeçildi!**`)
.setColor("GREEN")
  message.channel.send(embed4)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: "unmute"
};