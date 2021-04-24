const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermissions ('KICK_MEMBERS')) return message.channel.send("Komudu Kullanmak İçin Üyeleri At Yetkisine Sahip Olmalısın.")
    const mod = message.author;
    let guild = message.guild
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send(`:x: Kullanıcıyı Bulamıyorum`)
    let reason = message.content.split(" ").slice(2).join(" ");
let modlog = message.guild.channels.find('name', 'cezalog');
    if (!modlog) return message.reply('`cezalog` kanalını bulamıyorum. Bunu gerçekliştirmek için **cezalog** adında kanal oluşturun!');
    if (!reason) return message.channel.sendEmbed(new Discord.MessageEmbed().setAuthor('Hata').setDecription('Mute Sebebini Yazman Gerek').setColor('RANDOM'))
    let muterole = message.guild.roles.find(`name`, "Muted");
  if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "GREY",
                permissions: []
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
    const muteembed = new Discord.RichEmbed()
            .setAuthor('Eylem: Susturma')
            .addField('Kullanıcı', `<@${user.id}>`)
            .addField('Sebep', `${reason}`)
            .addField('Yetkili', `${mod}`)
            .setColor('RANDOM')
  return guild.channels.get(modlog.id).send(muteembed);
  
  
}

exports.conf = {
    aliases: [],
    permLevel: 2
};

module.exports.help = {
    name: "mute",
    description: "Etiketlenen Kişiye Mute Atar",
    usage: "mute [kullanıcı] [sebep]"
}