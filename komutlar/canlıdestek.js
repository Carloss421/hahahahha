const Discord = require("discord.js");
const ms = require("ms");
exports.run = async (client, message, args) => {
  const emoji1 = "";
  const emoji2 = "";
  const emoji3 = ""; //buralara dokunmayın!
  const emoji4 = "";
  const emoji5 = "";
  const emoji6 = "";
  const emoji7 = "";
  let isEnabled;
  message.reply(
    "✅ **Canlı Destek Talebinizi Gönderdiniz!\nEn Kısa Sürede Sizin ile İletişime Geçeceklerdir!Eğer trolse karalisteye alınırsınız**"
  );
  let mesaj = args.slice(0).join(" ");
  let chan = message.channel;
  let destekKanal = "833215162047135744"; //DESTEK KANALI ID'sini GIRIN
  const embed = new Discord.MessageEmbed()
    .setTitle(`🛠 Destek Talebi Bilgiler 🛠`)
  
    .setColor("RED")
  .setDescription(`**🚉 Sunucu**\n● | ${message.guild.name}\n● | (${message.guild.id}) \n \n**📮 Kanal**\n● | ${message.channel.name}\n● | (${message.channel.id})\n \n**📝 Destek İsteyen**\n● | ${message.author.tag}\n● | (${message.author.id})\n \n**📩 Gelen Mesajı**\n● | ${mesaj}`
    )
    .setFooter("🔧 Canlı Destek Sistemi ")
    .setTimestamp();
  message.channels.get(destekKanal).send({
    embed: embed
  });
  const collector = client.channels
    .get(destekKanal)
    .createCollector(message => message.content.startsWith(""), {
      time: 0
    });
  client.channels
    .get(destekKanal)
    .send(
      "⚠️ **Destek Talebi Geldi** ⚠️\n \n**✅ Kabul Etmek İstiyorsan `katıl`\n❌ Red Etmek İstiyorsan `kapat` Yazabilirsin!**"
 );
  collector.on("message", message => {
    if (message.content === "kapat") collector.stop("aborted");
    if (message.content === "katıl") collector.stop("success");
  });
  collector.on("end", (collected, reason) => {
    if (reason === "time")
      return message.reply("🔌 Bağlantı ZAMAN Aşımına Uğradı");
    if (reason === "aborted") {
      message.reply("🛑 Red Edildi 🛑");
      client.channels
        .get(destekKanal)
        .send("📡 Bağlantı Başarıyla Red Edildi ✅ ");
    }
    if (reason === "success") {
      client.channels.get(destekKanal).send("🛡 Canlı Desteğe Bağlanılıyor! 🛡");
      client.channels
        .get(destekKanal)
        .send("🛠 Destek Ekibine Bağlanıldı!\n❌ Kapatmak için `kapat` Yazabilirsiniz!");
      chan.send(`${message.author}`);
      chan.send("🛎 Destek Talebiniz Yetkili Tarafından Alındı! 🛎");
      chan.send("🚫 Destek Talebini Kapatmak İstiyorsan `kapat` Yazabilirsin!");
      isEnabled = true;
      client.on("message", message => {
        function contact() {
          if (isEnabled === false) return;
          if (message.author.id === client.user.id) return;
          if (message.content.startsWith("kapat")) {
            message.channel.send("❌ Arama Kapatıldı");
            if (message.channel.id === chan.id)
              client.channels
                .get(destekKanal)
                .send("❌ Arama Karşı Taraftan Kapatıldı!");
            if (message.channel.id === destekKanal)
              chan.send("Arama Karşı Taraftan Kapatıldı! ❌");
            return (isEnabled = false);
  
 }
          if (message.channel.id === chan.id)
            client.channels
              .get(destekKanal)
              .send(`**${message.author.tag}**: ${message.content}`);
          if (message.channel.id === destekKanal)
            chan.send(`**${message.author.tag}**: ${message.content}`);
        }
        contact(client);
      });
    }
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["canlı-destek"],
  permLevel: 0
};
exports.help = {
  name: "canlıdestek",
  description: "Canlı Destek Talebi Oluşturur.",
  usage: "canlıdestek"
};