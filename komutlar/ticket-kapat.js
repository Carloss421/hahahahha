const Discord = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
const dateFormat = require("dateformat");
const color = JSON.parse(fs.readFileSync(`color.json`, `utf8`));

exports.run = async (bot, message, args, functions) => {

    let logsChannel = message.guild.channels.cache.find(c => c.id === db.get(`logs_${message.guild.id}`));

    if(!message.channel.name.startsWith(`ticket-`)) return;
    
    if(message.author.id === db.get(`ticket.${message.channel.name}.user`)) {
    
      let userEmbed = new Discord.MessageEmbed()
      .setAuthor(`🗑️ | Ticket'ı Kapat`)
      .setColor(color.none)
      .setDescription(`Bileti açan o olduğu için o kapatabilir.`)
      .setTimestamp()
      .setFooter(`Ticket Sistemi`, bot.user.displayAvatarURL())
      .addField(
  `Bilgiler`, `**Kullanıcı :** \`${message.author.tag}\`
  **ID :** \`${message.author.id}\`
  **Ticket :** \`${message.channel.name}\`
  **Tarih :** \`${dateFormat(new Date(), "dd/mm/yyyy - HH:MM:ss")}\``);
    
      db.delete(`ticket.${message.channel.name}`);
      if(logsChannel) await logsChannel.send(userEmbed);
      await message.channel.delete();
    } else {
    
      let support = message.guild.roles.cache.find(r => r.name === "Ticket Support");
      if(!support) return functions.errorEmbed(message, message.channel, "Le rôle `Ticket Support` n'existe pas, veuillez le créer.");
      if(message.deletable) message.delete();
    
      if(args[0] === "force"){
    
        let forceEmbed = new Discord.MessageEmbed()
        .setAuthor(`🗑️ | Ticket Kapat`)
        .setColor(color.none)
        .setDescription(`Rolü olan bir üye bir bileti zorla sildi.`)
        .setTimestamp()
        .setFooter(`Ticket Sistemi`, bot.user.displayAvatarURL())
        .addField(
  `Bilgiler`, `**Kullanıcı :** \`${message.author.tag}\`
  **ID :** \`${message.author.id}\`
  **Ticket :** \`${message.channel.name}\`
  **Tarih :** \`${dateFormat(new Date(), "dd/mm/yyyy - HH:MM:ss")}\``);
    
        let embed1 = new Discord.MessageEmbed()
        .setAuthor(`📥 | Ticket Kapat`)
        .setColor(color.blue)
        .setDescription(`\`${message.author.tag}\` biletiniz kapanmaya zorlandı.`);
        db.delete(`ticket.${message.channel.name}`);
        if(logsChannel) await logsChannel.send(forceEmbed);
        if(bot.users.cache.get(db.get(`ticket.${message.channel.name}.user`))) bot.users.cache.get(db.get(`ticket.${message.channel.name}.user`)).send(embed1).catch(e => {console.log(e)})
        message.channel.delete();
        
    
      } else {
    
        let staffEmbed = new Discord.MessageEmbed()
      .setAuthor(`🗑️| Ticket Kapat`)
      .setColor(color.none)
      .setDescription(`${support} Rolü olan bir üye, biletin kapatılmasını talep etti.`)
      .setTimestamp()
      .setFooter(`Ticket Sistemi`, bot.user.displayAvatarURL())
      .addField(
  `Bilgiler`, `**Bilgiler :** \`${message.author.tag}\`
  **ID :** \`${message.author.id}\`
  **Ticket :** \`${message.channel.name}\`
  **Tarih :** \`${dateFormat(new Date(), "dd/mm/yyyy - HH:MM:ss")}\``);
    
        if(!message.guild.member(message.author).roles.cache.has(support.id)) return functions.errorEmbed(message, message.channel, "Üzgünüm, rolünüz yok `Ticket Destek`.");
        let embed2 = new Discord.MessageEmbed()
        .setColor(color.green)
        .setTitle(`🎟️ | Ticket Kapandı`)
        .setDescription(
          `Bileti kapatmak için 🗑️ tepkisine tıklayınız başka talepleriniz varsa tıklamayınız.`);
        if(logsChannel) await logsChannel.send(staffEmbed);
        message.channel.send(embed2).then(m => m.react(`🗑️`));
      }
    
    }

}

exports.conf = {
    enabled: true,
   guildOnly: false,
    aliases: ["ticket-close"],
  permlevel: 0
};
exports.help = {
  name: "ticket-kapat"
};