const defaultBotCommands: BotCommand[] = [
	{ command: 'start', description: 'check if bot is alive' },
	{ command: 'help', description: 'get help' },
];

const config = {
	commands: {
		default: defaultBotCommands,
	},
};

export { config };
