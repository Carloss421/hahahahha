const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
    if(message.author.id !== ayarlar.ownerID)  {
    const embed = new Discord.MessageEmbed()
    .setDescription(`**:warning: Bu komut yapımcıma özel!**`)
    .setColor('BLUE')
    return message.channel.send(embed).then(msg=>msg.delete(3000));
    };

  
    if (args[0] == 'al') {
 let user = client.users.get(args.slice(0).join(' '));
  if (!user) {
    let e = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("Kara listeye almak istediğin kullanıcının ID'ini yaz!")
    message.channel.send({embed: e})
    return;
    if (db.has(`karalist_${user.id}`) === true) return message.reply("Bu kullanıcı zaten kara listede!");
  
    db.add(`karalist_${user.id}`, "-------> Karalistede  <-------")
     let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`<@${user.id}> adlı kullanıcıyı karalisteye aldım!`)
    message.channel.send({embed: embed})
 }; 
  if (args[0] == 'çıkar') {
    db.delete(`karalist_${user.id}`)
    message.channel.send(new Discord.MessageEmbed().setDescription(`<@${user.id}> adlı kullanıcıyı karalisteden çıkardım.`).setColor("RANDOM"))
  }}};
  
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['blacklist'],
    permLevel: 0
};
exports.help = {
    name: 'karaliste',
    description: 'Sunucuya giren kullanıcıya seçtiğiniz rolü otomatik verir.',
    usage: 'otorol <@rol>'
};