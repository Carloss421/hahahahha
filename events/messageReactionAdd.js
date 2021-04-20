const Discord = require('discord.js');
const functions = require("../functions/functions.js");
const dateFormat = require('dateformat');
const db = require('quick.db');
const fs = require('fs');
const color = JSON.parse(fs.readFileSync(`color.json`, `utf8`));

module.exports = async (bot, reaction, user) => {
  if(reaction.message.partial) await reaction.message.fetch();
  if(reaction.partial) await reaction.fetch();

  let message = reaction.message;
  if(!message) return;
  if(user.bot) return;

  let logsChannel = message.guild.channels.cache.find(c => c.id === db.get(`logs_${message.guild.id}`));

  let already = new Discord.MessageEmbed()
  .setColor(color.red)
  .setAuthor(`⛔ | Hayır!`)
  .setDescription(`Bir seferde yalnızca bir açık biletiniz olabilir.`);

  let success = new Discord.MessageEmbed()
  .setColor(color.green)
  .setTitle(`🎟️ | Ticket Sistemi`)
  .setDescription(`Lütfen talebinizin nedenini açıklayınız. Takımın bir üyesi kısa süre içinde biletinizle ilgilenecek.`);

  let split = '';
  let usr = user.id.split(split);
  for (var i = 0; i < usr.length; i++) usr[i] = usr[i].trim();

  if(message.embeds.length === 1 && message.embeds[0].title === 'Ticket Sistemi' && message.embeds[0].description === 'Ticket oluşturmak için 🎟️ ile tepki verin.'){
    if(reaction.emoji.name === "🎟️"){
      if(!message.guild.channels.cache.find(c => c.name === `ticket-${usr[0]}${usr[1]}${usr[2]}${usr[3]}`)){

        let role = message.guild.roles.cache.find(r => r.name === "Ticket Destek");
        if(!role) {
          message.guild.roles.create({data:{name: "Ticket Destek", permissions: 0}, reason: 'Personelin biletleri görüntülemek için bu role ihtiyacı var.'});
          message.channel.send(`Lütfen bilet oluşturma mesajına tekrar tepki verin..`).then(m => m.delete({timeout: 5000}).catch(e => {}));
          reaction.users.remove(user.id);
          return
        }
        let categoria = message.guild.channels.cache.find(c => c.name == "Destek" && c.type == "category");
        if(!categoria) categoria = await message.guild.channels.create("Destek", {type: "category", position: 1}).catch(e => {return functions.errorEmbed(message, message.channel, "Une erreur a été rencontrée.")});

        let permsToHave = ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'ADD_REACTIONS']

        message.guild.channels.create(`ticket-${usr[0]}${usr[1]}${usr[2]}${usr[3]}`, { permissionOverwrites:[
          {
            deny: 'VIEW_CHANNEL',
            id: message.guild.id
          },
          {
            allow: permsToHave,
            id: user.id
          },
          {
            allow: permsToHave,
            id: role.id
          },
        ],
        parent: categoria.id,
        reason: `Bu kullanıcının yardıma ihtiyacı var.`,
        topic: `**ID:** ${user.id} -- **Tag:** ${user.tag} | a!ticket-close`
      }).then(channel => {

        let createdEmbed = new Discord.MessageEmbed()
        .setAuthor(`📝 | Ticket Açıldı`)
        .setTimestamp()
        .setColor(color.none)
        .setDescription(`Bir kullanıcı bir bilet açtı ve talebinin ele alınmasını bekliyor.`)
        .addField(`Bilgiler`, `**Utilisateur :** \`${user.tag}\`\n**ID :** \`${user.id}\`\n**Ticket :** ${channel}\n**Tarih :** \`${dateFormat(new Date(), "dd/mm/yyyy - HH:MM:ss")}\``);

        if(logsChannel) logsChannel.send(createdEmbed);
        channel.send(`${user}`, {embed: success});
        db.set(`ticket.ticket-${usr[0]}${usr[1]}${usr[2]}${usr[3]}`, { user: user.id });
      })
      reaction.users.remove(user.id);
      return;
    } else {
      reaction.users.remove(user.id);
      message.reply({embed: already}).then(m => m.delete({timeout: 5000}).catch(e => {}));
    }
    } else {
      reaction.users.remove(user.id);
    }
  }

  // ========================= //

  if(message.embeds.length === 1 && message.embeds[0].title === '🎟️ | Ticket Bitti' && message.embeds[0].description === `
Bileti kapatmak için 🗑️ tepki verin veya başka istekleriniz varsa tepki vermeyin`){
    if(reaction.emoji.name === "🗑️"){
      if(user.id === db.get(`ticket.${message.channel.name}.user`)){

        let deletedEmbed = new Discord.MessageEmbed()
        .setAuthor(`🗑️ | Ticket Kapat`)
        .setColor(color.none)
        .setDescription(`Ticket'ı açan kapatmayı onayladı.`)
        .setTimestamp()
        .addField(`Bilgiler`, `**Kullanıcı :** \`${user.tag}\`\n**ID :** \`${user.id}\`\n**Ticket :** \`${message.channel.name}\`\n**Tarih :** \`${dateFormat(new Date(), "dd/mm/yyyy - HH:MM:ss")}\``);

        if(logsChannel) logsChannel.send(deletedEmbed);

        message.channel.delete();

      }
    }
  }

}