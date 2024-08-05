import { bot } from './bot';
import { router } from './router';

// Middleware to attach env to the request context
const withEnv: EnvMiddleWare = async (request, env, next) => {
	(request as any).env = env;
	return next();
};

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		if (!env.BOT_TOKEN) throw new Error(`BOT_TOKEN is not defined!`);
		const wrappedRouter = async (req: Request) => withEnv(req, env, () => router.fetch(req));
		return await wrappedRouter(request);
	},
} satisfies ExportedHandler<Env>;

// edit this function according to your use case
export async function handleTelegram(env: Env, payload: any) {
	console.log('payload ::> ', JSON.stringify(payload, null, 2));
	const message = payload.message;
	const callback_query = payload.callback_query;
	let message_id: number, chat_id: number, username: string, message_text: string;
	if (message) {
		chat_id = message.chat.id;
		message_id = message.message_id;
		username = message.from.username;
		message_text = message.text;
		// echo text recieved by user with a button
		await bot.sendMessage(env, {
			chat_id,
			text: message_text,
			options: { reply_markup: { inline_keyboard: [[{ text: 'Demo Button', callback_data: 'demo_button_click' }]] } },
		});
	} else if (callback_query) {
		const callback_query_id = callback_query.id;
		chat_id = callback_query.message.chat.id;
		message_id = callback_query.message.message_id;
		username = callback_query.message.chat.username;
		const callback_data = callback_query.data;
		await bot.answerCallbackQuery(env, { callback_query_id });
	}
}
