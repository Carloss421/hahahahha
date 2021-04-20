const Discord = require("discord.js");
const fs = require("fs");
const color = JSON.parse(fs.readFileSync(`Storage/color.json`, `utf8`));

exports.run = async (bot, message, args, functions) => {

if(message && message.deletable) message.delete().catch(e => {});

let embed = new Discord.MessageEmbed()
.setTitle(`Alvi - Ticket`)
.setColor(color.none)
.setDescription(`Réagissez avec 🎟️ pour créer un ticket.`);
message.channel.send(embed).then(m => {
  m.react('🎟️');
});};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['createticket', "t"],
  permlevel: 0
};
exports.help = {
    name: "ticket",
};
/*const Discord = require('discord.js');
const data = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
const prefix = ayarlar.prefix;
  
if(args[0] === 'gönder') {
const kanal = await data.fetch(`kanal.${message.guild.id}`)
if(!kanal) return message.channel.send(`Mesajı göndereceğim kanalı ayarlamamışsın: ${prefix}ticket-kanal ayarla #channel`)
message.guild.channels.get(kanal).send(new Discord.MessageEmbed()
.setTitle(`Alvi - Ticket`)
.setColor('GOLD')
.setDescription(`📩 tepkisine tıklayıp bir bilet oluşturabilirsiniz.`)).then(m => {
m.react('📩')
let açç = (reaction, user) => reaction.emoji.name === "📩" && user.id !== client.user.id
let aç = m.createReactionCollector(açç, { time: 0 });  

aç.on('collect', async reaction => {
const author = reaction.users.last()
reaction.remove(author.id)
const sd = await data.fetch(`ass.${message.guild.id}.${author.id}`)
const dnn = await data.fetch(`asd.${message.guild.id}.${sd}.${author.id}`)
if(dnn) return author.send(new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`Bilet limitine ulaştınız: 1/1`))
data.add(`numara.${message.guild.id}`, 5)
const as = await data.fetch(`numara.${message.guild.id}`)
message.guild.createChannel(`ticket-${as}`).then(async s => {
data.add(`numara.${s.id}`, as)
data.set(`ass.${message.guild.id}.${author.id}`, s.id)
data.set(`asd.${message.guild.id}.${s.id}.${author.id}`, 'kanal')
let role = message.guild.roles.find(r => r.name === '@everyone')
s.overwritePermissions(role, { 'VIEW_CHANNEL': false });
message.guild.members.forEach(u => {
if(u.hasPermission('MANAGE_GUILD')) {
s.overwritePermissions(u, { 'VIEW_CHANNEL':true, 'SEND_MESSAGES':true, 'MANAGE_MESSAGES':true, 'MANAGE_CHANNELS':true }); }})
s.overwritePermissions(author, { 'VIEW_CHANNEL':true, 'SEND_MESSAGES':true });
s.send(`${author}, Hoşgeldin!`, new Discord.MessageEmbed()
.setColor('GOLD')
.setDescription(`Çok yakın zaman da seninle ilgileneceğiz.
Bileti kapatmak istersen: 🔒`)
.setFooter(`Alvi - Ticket`, client.user.avatarURL)).then(m => {
m.react(`🔒`)
let si = (reaction, user) => reaction.emoji.name === "🔒" && user.id !== client.user.id
let s23 = m.createReactionCollector(si, { time: 0 });

s23.on('collect', async reaction => {
const author = reaction.users.last()
reaction.remove(author.id) 
m.react(`✅`)
m.react(`❌`)
let sil = (reaction, user) => reaction.emoji.name === "✅" && user.id !== client.user.id
let sill = m.createReactionCollector(sil, { time: 0 });
let ss = (reaction, user) => reaction.emoji.name === "❌" && user.id !== client.user.id
let s2 = m.createReactionCollector(ss, { time: 0 });
s2.on('collect', async reaction => {
s.fetchMessages({limit:10}).then(async messages => { 
  messages.get(m.id).reactions.get('✅').removeAll()
reaction.removeAll()
})})
sill.on('collect', async reaction => {
let us = reaction.users.last()
reaction.remove(us.id)
s.send(new Discord.MessageEmbed()
.setColor('#ffff00')
.setDescription(`Bilet ${us} tarafından kapatıldı.`))
s.setName(`kapandı-${as}`)
s.send(new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`:unlock:: Ticketi tekrar açar.

:no_entry:: Ticketi siler.`)).then(m2 => {
m2.react('🔓')
m2.react('⛔')
let sil = (reaction, user) => reaction.emoji.name === "⛔" && user.id !== client.user.id
let sill = m2.createReactionCollector(sil, { time: 0 });
let geri = (reaction, user) => reaction.emoji.name === "🔓" && user.id !== client.user.id
let geriaç = m2.createReactionCollector(geri, { time: 0 });

geriaç.on('collect', async reaction => {
const author = reaction.users.last()
m2.delete('500')
reaction.remove(author.id) 
s.send(new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`Bilet ${author} tarafından tekrar açıldı.`))
s.setName(`ticket-${as}`)
})

sill.on('collect', async reaction => {
const author = reaction.users.last()
reaction.remove(author.id) 
s.send(new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`Bilet 5 saniye sonra ebediyen silinecek.`))
setTimeout(async () => {
s.delete()
const sd = await data.fetch(`ass.${message.guild.id}.${author.id}`)
data.delete(`asd.${message.guild.id}.${author.id}`)
data.delete(`asd.${message.guild.id}.${s.id}.${author.id}`)
}, 5000)
})})})})})})})})}
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['bilet'],
  permLevel: 0
}

exports.help = {
  name: 'ticket'
};*/