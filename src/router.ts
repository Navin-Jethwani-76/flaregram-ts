import { bot } from './bot';
import { handleTelegram } from '.';
import { config } from './bot/config';
import { status_good } from './helper/strings';
import { AutoRouter, StatusError } from 'itty-router';
import { getWebhookInfo, setWebhook } from './bot/webhook';

const router = AutoRouter();

// MIDDLEWARE
const withAuthenticatedRequest = async (request: Request) => {
	const env = (request as any).env as Env;
	const token = request.headers.get('X-Telegram-Bot-Api-Secret-Token');
	if (token && token !== env.SECRET_TOKEN) throw new StatusError(401);
};

// comment this out if you are sending request using Postman / Any other API Client for testing
router.post('*', withAuthenticatedRequest);

router.get('/', async (request: Request) => {
	const env = (request as any).env as Env;
	const data = await bot.getMe(env);
	return new Response(JSON.stringify({ ...status_good, BOT_INFO: data }));
});

router.get('/set-commands', async (request: Request) => {
	const env = (request as any).env as Env;
	const result = await bot.setMyCommands(env, { commands: config.commands.default });
	return new Response(JSON.stringify({ result }));
});

router.get('/set-webhook', async (request: Request) => {
	const env = (request as any).env as Env;
	const setWebhookResult = await setWebhook(env);
	return new Response(JSON.stringify({ setWebhookResult }));
});

router.get('/get-webhook', async (request: Request) => {
	const env = (request as any).env as Env;
	const webhookInfo = await getWebhookInfo(env);
	return new Response(JSON.stringify({ webhookInfo }));
});

// all telegram requests are received by this route
router.post('/', async (request: Request) => {
	const env = (request as any).env as Env;
	let payload;
	try {
		payload = await request.json();
	} catch (error) {
		console.error(error);
		payload = {};
	}
	await handleTelegram(env, payload);
	return new Response(JSON.stringify(status_good), { status: 200 });
});

/*
This is the last route we define, it will match anything that hasn't hit a route we've defined
above, therefore it's useful as a 404 (and avoids us hitting worker exceptions, so make sure to include it!).

Visit any page that doesn't exist (e.g. /foobar) to see it in action.
*/
router.all('*', () => new Response('404, not found!', { status: 404 }));

export { router };
