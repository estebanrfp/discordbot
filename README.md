# Discord Bot with Moderation Features

This repository contains a simple Discord bot built using the `discord.js` library. The bot is designed to assist server moderators by providing basic commands for server management and interaction.

## Features

- **Ping Command**: Responds with "pong" to check if the bot is online.
- **Kick Command**: Allows users with the `KICK_MEMBERS` permission to kick mentioned members from the server.
- **Delete Messages**: Bulk deletes messages in the current channel (requires appropriate permissions).
- **Environment Configuration**: Uses a `.env` file to securely store the bot's token.
- **Prefix-Based Commands**: All commands are prefixed with a configurable prefix defined in `config.json`.

## Setup

1. **Install Dependencies**: Ensure you have Node.js installed, then run `npm install` to install the required dependencies.
2. **Environment Variables**: Create a `.env` file in the root directory and add your Discord bot token:

3. DISCORD_TOKEN=your-bot-token-here

4. 3. **Configuration**: Update the `prefix` in `config.json` to your desired command prefix.
4. **Run the Bot**: Start the bot using `node index.js` or your preferred method.

## Commands

- `!ping`: Checks if the bot is online and responds with "pong".
- `!kick @user`: Kicks the mentioned user from the server (requires `KICK_MEMBERS` permission).
- `!deletemessages`: Deletes all messages in the current channel (permissions may vary).

## Notes

- Ensure the bot has the necessary permissions (`KICK_MEMBERS`, `MANAGE_MESSAGES`, etc.) to execute commands effectively.
- Use this bot responsibly and ensure compliance with Discord's Terms of Service.

## License

This project is open-source. Feel free to use, modify, and distribute it as needed.
