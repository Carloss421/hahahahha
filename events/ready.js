const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

module.exports = client => {
 setInterval(function() {
}, 8000);
client.user.setPresence({
        game: {
            name: `RegisterBot Dönem#DİRİLİŞ AliBerat#9480 sahibim olarak beni komutluyor.Sahibim edit yapmayı bilen birini arıyor.`,
            type: 'Playing'
        },
        status: 'Online'
    })
    console.log(`[BOT]: Giriş Yaptı! Komutlar Yüklendi galiba!`);
}
