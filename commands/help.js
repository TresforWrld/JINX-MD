const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╭──────────────────────────────╮
│ 🤖 JINX-MD
│ 🚀 Version: ${settings.version || '1.0.0'}
│ 👑 Owner: ${settings.botOwner || 'ANICADE Tech'}
│ 📺 YouTube: ${global.ytch}
╰──────────────────────────────╯

╭─〔 📋 MAIN MENU 〕─╮
│ 👤 User: ${pushname}
│ ⏰ Runtime: ${runtime(process.uptime())}
│ 📅 Date: ${date}
│ 🕒 Time: ${time}
╰──────────────────╯

╭━━━ 🌐 GENERAL ━━━╮
┃ .menu
┃ .ping
┃ .alive
┃ .owner
┃ .weather
┃ .news
┃ .tts
┃ .quote
┃ .joke
┃ .fact
┃ .lyrics
┃ .8ball
┃ .vv
┃ .trt
┃ .ss
┃ .jid
┃ .url
╰━━━━━━━━━━━━━━━━━━╯

╭━━━ 🤖 AI TOOLS ━━━╮
┃ .gpt
┃ .gemini
┃ .imagine
┃ .flux
┃ .sora
╰━━━━━━━━━━━━━━━━━━╯

╭━━━ 📥 DOWNLOADERS ━━━╮
┃ .play
┃ .song
┃ .spotify
┃ .instagram
┃ .facebook
┃ .tiktok
┃ .video
┃ .ytmp4
╰━━━━━━━━━━━━━━━━━━━━╯

╭━━━ 🎨 MEDIA TOOLS ━━━╮
┃ .sticker
┃ .blur
┃ .removebg
┃ .remini
┃ .crop
┃ .simage
┃ .tgsticker
┃ .meme
┃ .take
┃ .emojimix
╰━━━━━━━━━━━━━━━━━━━━╯

╭━━━ 👮 GROUP ADMIN ━━━╮
┃ .ban
┃ .kick
┃ .warn
┃ .warnings
┃ .promote
┃ .demote
┃ .mute
┃ .unmute
┃ .delete
┃ .clear
┃ .tag
┃ .tagall
┃ .hidetag
┃ .welcome
┃ .goodbye
┃ .chatbot
┃ .antilink
┃ .antibadword
╰━━━━━━━━━━━━━━━━━━━━╯

╭━━━ 🔒 OWNER PANEL ━━━╮
┃ .mode
┃ .update
┃ .settings
┃ .setpp
┃ .autoreact
┃ .autostatus
┃ .autotyping
┃ .autoread
┃ .anticall
┃ .pmblocker
┃ .mention
╰━━━━━━━━━━━━━━━━━━━━╯

╭━━━ 🎮 GAMES ━━━╮
┃ .tictactoe
┃ .hangman
┃ .guess
┃ .trivia
┃ .answer
┃ .truth
┃ .dare
╰━━━━━━━━━━━━━━━╯

╭━━━ 🎯 FUN ━━━╮
┃ .compliment
┃ .insult
┃ .flirt
┃ .ship
┃ .simp
┃ .stupid
┃ .character
┃ .wasted
╰━━━━━━━━━━━━━━╯

╭━━━ 🖼️ ANIME ━━━╮
┃ .hug
┃ .kiss
┃ .pat
┃ .poke
┃ .cry
┃ .wink
┃ .facepalm
┃ .nom
╰━━━━━━━━━━━━━━━╯

╭━━━ 💻 DEVELOPER ━━━╮
┃ .git
┃ .github
┃ .repo
┃ .script
┃ .sc
╰━━━━━━━━━━━━━━━━━━╯

╭──────────────────────────────╮
│ ⚡ Powered by ANICADE™ Tech
│ 🤖 JINX-MD • Faster • Smarter
╰──────────────────────────────╯

Join our channel for updates:`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '',
                        newsletterName: 'JINX-MD',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '',
                        newsletterName: 'JINX-MD',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
