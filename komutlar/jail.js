const Discord = require("discord.js");
const ms = require("ms");
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Komudu Kullanmak İçin Üyeleri At Yetkisine Sahip Olmalısın.")
 let cezalog = db.fetch(`mlog_${message.guild.id}`)
    const mod = message.author;
    let guild = message.guild
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send(`:x: Kullanıcıyı Bulamıyorum`)
    let reason = message.content.split(" ").slice(2).join(" ");
    let modlog = guild.channels.find('name', 'cezalog');
    if (!modlog) return message.reply('`cezalog` kanalını bulamıyorum.');
    if (!reason) return message.channel.sendEmbed(new Discord.RichEmbed().setAuthor('Hata').setDecription('Hapis Sebebini Yazman Gerek').setColor('RANDOM'))
    let muterole = message.guild.roles.find(`name`, "Jail");
  if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Jail",
                color: "RED",
                permissions: ["VIEW_CHANNELS"]
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    await (user.addRole(muterole.id));
    const muteembed = new Discord.MessageEmbed()
            .setAuthor('Eylem: Hapis')
            .addField('Kullanıcı:', `<@${user.id}>`)
            .addField('Sebep:', `${reason}`)
            .addField('Yetkili:', `${mod}`)
            .setColor('RANDOM')
  return guild.channels.get(cezalog.id).send(muteembed);
  
  
}

exports.conf = {
    aliases: [],
    permLevel: 2
};

module.exports.help = {
    name: "jail",
    description: "Etiketlenen Kişiye Mute Atar",
    usage: "mute [kullanıcı] [sebep]"
}