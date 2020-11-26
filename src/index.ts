import {config} from 'dotenv'
config()

import { Client, Message } from 'discord.js'
import { prefix } from './config.json'

const client: Client = new Client()

client.on('ready', ()=> {
    console.log('Bot is ready!')
})

client.on('message', async (message: Message) => {
    // console.log(message.content)
    if (message.content.startsWith(`${ prefix }ping`)) {
        // message.channel.send(':-) pong')
        message.reply(':-) pong')
    }
    if (message.content.startsWith(`${ prefix }kick`)) {
        if (message.member.hasPermission(['KICK_MEMBERS'])) {
            const member = message.mentions.members.first()
            if (member) {
                const kickedMember = await member.kick()
    
                console.log(kickedMember.user.username)
                message.channel.send(`${ kickedMember.user.username } has been kicked`)
            }
        } 
        return message.reply('You need permision to run this')
    }
    if (message.content.startsWith(`${ prefix }deletemessages`)) {
        try {
            const messages = await message.channel.fetchMessages()
            message.channel.bulkDelete(messages)
        } catch (error) {
            console.log(error)
        }
    }
})

client.login(process.env.DISCORD_TOKEN)
