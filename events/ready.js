const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')


module.exports = (client, message) => {
let prefix = ayarlar.prefix;
 setInterval(function() {
}, 8000);
  var msgArray = [
`Yardım almak için ${prefix}yardım`,
`Yeni özellikler İçin ${prefix}yardım-güncelleme`,
`Botu eklemek için ${prefix}yardım-bot`
 ];

 setInterval(() => { 
  var rastgeleOyun = Math.floor(Math.random() * msgArray.length);
  client.user.setActivity(`${msgArray[rastgeleOyun]}`, { type: 'PLAYING'})
}, 5000);
    console.log(`Alvi Aktif!`);
}
// IZLIYOR = WATCHING
// OYNUYOR = PLAYING
// YAYINDA = STREAMING
// AKTIF = ONLINE
// RAHATSIZ ETMEYIN = DND
// BOSTA = IDLE
// CEVRIMDISI = OFFLINE