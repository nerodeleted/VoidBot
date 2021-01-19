const Discord = require('discord.js')
const colors = require('../lib/colors.json')
const moment = require('moment')
const version = require('discord.js')
require('moment-duration-format')

exports.run = (client, message, args, level) => {
    try {
    const duration = moment.duration(client.uptime).format(' D [days], H [hrs], m [mins], s [secs]')
    const embed = new Discord.MessageEmbed()
      .setAuthor('Website down')
      .setColor(colors.default)
      .setThumbnail(client.user.avatarURL)
      .addField('down time', `${duration}`, true)
      .addField('I your lovely knight will keep you updated with any new info I get')
      .setTimestamp()
    message.channel.send(embed);
    message.delete().catch()
    const mg = args.join(' ')
    message.channel.send(mg)
  } catch (err) {
    message.channel.send(client.errors.genericError + err.stack).catch();  

  }
}

exports.conf = {
  enabled: true,
  aliases: ['botinfo'],
  guildOnly: false,
  permLevel: 'User'
}

exports.help = {
  name: 'bot',
  category: 'Utility',
  description: 'Displays information about the bot',
  usage: 'bot'
}
