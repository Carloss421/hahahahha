const ms = require('ms');
const db = require('quick.db')
const discord = require('discord.js')

exports.run = async (client, message, args) => {

let çrol = await db.fetch(`çrol_${message.guild.id}`)

if(!message.member.roles.cache.has(çrol)) return message.channel.send(new discord.MessageEmbed().setDescription(`Bu Komudu Kullanabilmen İçin <@&${çrol}> Adlı Role Sahip olman Lazım!`))

    if(!args[0]){
        return message.channel.send(':x: Lütfen Yapılan Çekilişin Mesaj IDsini Belirtin!').then(m => m.delete({timeout: 5000, reason:"Yapılması gerekiyordu"}));
                message.delete({timeout: 6000, reason:"Yapılması gerekiyordu"});
    }

    let giveaway = 
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    if(!giveaway){
        return message.channel.send('Çekiliş Mesajı Bulunamadı `'+ args.join(' ') +'`.').then(m => m.delete({timeout: 5000, reason:"Yapılması gerekiyordu"}));
                message.delete({timeout: 6000, reason:"Yapılması gerekiyordu"});
    }

    client.giveawaysManager.reroll(giveaway.messageID)
    .then(() => {
        message.channel.send('Çekiliş Kazananı Yenilendi!').then(m => m.delete({timeout: 5000, reason:"Yapılması gerekiyordu"}));
                message.delete({timeout: 6000, reason:"Yapılması gerekiyordu"});
       })

    .catch((e) => {
        if(e.startsWith(`${giveaway.messageID} ID'li Çekiliş Sona Ermedi.`)){
            message.channel.send('Bu çekiliş henüz bitmedi!')
        } else {
            console.error(e);
            message.channel.send('Bir Hata Oluştu...');
        }
    });

};

exports.conf = {
  aliases: ['yenile'],
  permLevel: 0,
};
exports.help = {
  name: 'reroll',
   description: 'Çekilişi yeniler.',
  usage: 'reroll <mesajID>'
};