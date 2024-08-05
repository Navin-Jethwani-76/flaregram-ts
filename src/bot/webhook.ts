export async function getWebhookInfo(env: Env) {
	const { BOT_TOKEN } = env;
	const webhookInfoUrl = `https://api.telegram.org/bot${BOT_TOKEN}/getWebhookInfo`;
	try {
		const response = await fetch(webhookInfoUrl, { headers: { 'Content-Type': 'application/json' } });
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(`Error ::> getWebhookInfo ::> ${error}`);
	}
}

export async function setWebhook(env: Env) {
	const { BOT_TOKEN, DROP_PENDING_UPDATES, SECRET_TOKEN, WEBHOOK_URL } = env;

	let webhookUrl = `https://api.telegram.org/bot${BOT_TOKEN}/setWebhook?url=${WEBHOOK_URL}`;

	if (SECRET_TOKEN.length > 0) webhookUrl = `${webhookUrl}&secret_token=${SECRET_TOKEN}`;
	if (DROP_PENDING_UPDATES === 'True') webhookUrl = `${webhookUrl}&drop_pending_updates=${DROP_PENDING_UPDATES}`;

	console.log(webhookUrl);
	try {
		const response = await fetch(webhookUrl, { method: 'POST' });
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(`Error ::> setWebhook ::> ${error}`);
	}
}
