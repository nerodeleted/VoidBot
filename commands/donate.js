const colors = require('../lib/colors.json')
const Discord = require('discord.js')

exports.run = (client, message, args, level) => {
  try {
    const embed = new Discord.MessageEmbed()
      .setTitle('💰 Donating')
      .setColor(colors.default)
      .setThumbnail('https://media.discordapp.net/attachments/796810115189178372/798672492561825802/Screenshot_20210101-2225592.png')
      .addField('Want exclusive donator perks and more bot features?', '[Click here to donate.](paypal.me/TeamVoidFN)')
      .addField('Donator Perks', '💰 `$5000`\n💼 `Donator role` in the Void Bot Discord\n🎉')

    message.channel.send(embed)
  } catch (err) {
    message.channel.send(client.errors.genericError + err.stack).catch();
  }
}

exports.conf = {
  enabled: true,
  aliases: ['donating'],
  guildOnly: false,
  permLevel: 'User'
}

exports.help = {
  name: 'donate',
  category: 'Utility',
  description: 'Shows information about donating.',
  usage: 'donate'
}
