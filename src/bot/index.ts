import { telegramErr, undefinedParamErr } from '../helper/strings.js';

/**
 * A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in form of a [User](https://core.telegram.org/bots/api#user) object.
 *
 * https://core.telegram.org/bots/api#getme
 */
async function getMe(env: Env) {
	try {
		const API_URL = `https://api.telegram.org/bot${env.BOT_TOKEN}/getMe`;
		const response = await fetch(API_URL);
		const data = (await response.json()) as ResponseData;
		return data.result;
	} catch (error) {
		console.error(`Error ::> getMe ::> ${error}`);
	}
}

/**
 * Use this method to send text messages. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.
 *
 * https://core.telegram.org/bots/api#sendmessage
 */
async function sendMessage(env: Env, { chat_id, text, options }: SendMessage) {
	try {
		const API_URL = `https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`;

		if (!chat_id) undefinedParamErr('chat_id');
		if (!text) undefinedParamErr('text');

		const payload = { chat_id, text, ...options };
		console.log('sendMessage Payload ::> ', JSON.stringify(payload, null, 2));

		const response = await fetch(API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		const data = (await response.json()) as ResponseData;
		console.log('sendMessage Response ::>', JSON.stringify(data, null, 2));

		if (!response.ok) {
			telegramErr(`Error sending message ::> ${response.status} ::> ${response.statusText}`);
		}
		return data.result;
	} catch (error) {
		console.error(`Error ::> sendMessage ::> ${error}`);
	}
}

/**
 * Use this method to forward messages of any kind. Service messages and messages with protected content can't be forwarded. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.
 *
 * https://core.telegram.org/bots/api#forwardmessage
 */
async function forwardMessage(env: Env, { chat_id, from_chat_id, message_id, options }: ForwardMessage) {
	try {
		const API_URL = `https://api.telegram.org/bot${env.BOT_TOKEN}/forwardMessage`;

		if (!chat_id) undefinedParamErr('chat_id');
		if (!from_chat_id) undefinedParamErr('from_chat_id');
		if (!message_id) undefinedParamErr('message_id');

		const payload = { chat_id, from_chat_id, message_id, ...options };
		console.log('forwardMessage Payload ::> ', JSON.stringify(payload, null, 2));

		const response = await fetch(API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		const data = (await response.json()) as ResponseData;
		console.log('forwardMessage Response ::>', JSON.stringify(data, null, 2));

		if (!response.ok) {
			telegramErr(`Error in forwardMessage ::> ${response.status} ::> ${response.statusText}`);
		}

		return data.result;
	} catch (error) {
		console.error(`Error ::> forwardMessage ::> ${error}`);
	}
}

/**
 * Use this method to forward multiple messages of any kind. If some of the specified messages can't be found or forwarded, they are skipped. Service messages and messages with protected content can't be forwarded. Album grouping is kept for forwarded messages. On success, an array of [MessageId](https://core.telegram.org/bots/api#messageid) of the sent messages is returned.
 *
 * https://core.telegram.org/bots/api#forwardmessages
 */
async function forwardMessages(env: Env, { chat_id, from_chat_id, message_ids, options }: forwardMessages) {
	try {
		const API_URL = `https://api.telegram.org/bot${env.BOT_TOKEN}/forwardMessages`;

		if (!chat_id) undefinedParamErr('chat_id');
		if (!from_chat_id) undefinedParamErr('from_chat_id');
		if (!message_ids) undefinedParamErr('message_ids');

		const payload = { chat_id, from_chat_id, message_ids, ...options };
		console.log('forwardMessages Payload ::> ', JSON.stringify(payload, null, 2));

		const response = await fetch(API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		const data = (await response.json()) as ResponseData;
		console.log('forwardMessages Response ::>', JSON.stringify(data, null, 2));

		if (!response.ok) {
			telegramErr(`Error in forwardMessages ::> ${response.status} ::> ${response.statusText}`);
		}

		return data.result;
	} catch (error) {
		console.error(`Error ::> forwardMessages ::> ${error}`);
	}
}

/**
 * Use this method to copy messages of any kind. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz [poll](https://core.telegram.org/bots/api#poll) can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method [forwardMessage](https://core.telegram.org/bots/api#forwardmessage), but the copied message doesn't have a link to the original message. Returns the [MessageId](https://core.telegram.org/bots/api#messageid) of the sent message on success.
 *
 * https://core.telegram.org/bots/api#copymessage
 */
async function copyMessage(env: Env, { chat_id, from_chat_id, message_id, options }: CopyMessage) {
	try {
		const API_URL = `https://api.telegram.org/bot${env.BOT_TOKEN}/copyMessage`;

		if (!chat_id) undefinedParamErr('chat_id');
		if (!from_chat_id) undefinedParamErr('from_chat_id');
		if (!message_id) undefinedParamErr('message_id');

		const payload = { chat_id, from_chat_id, message_id, ...options };
		console.log('copyMessage Payload ::> ', JSON.stringify(payload, null, 2));

		const response = await fetch(API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		const data = (await response.json()) as ResponseData;
		console.log('copyMessage Response ::>', JSON.stringify(data, null, 2));

		if (!response.ok) {
			telegramErr(`Error in copyMessage ::> ${response.status} ::> ${response.statusText}`);
		}

		return data.result;
	} catch (error) {
		console.error(`Error ::> copyMessage ::> ${error}`);
	}
}

/**
 * Use this method to copy messages of any kind. If some of the specified messages can't be found or copied, they are skipped. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz [poll](https://core.telegram.org/bots/api#poll) can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method [forwardMessages](https://core.telegram.org/bots/api#forwardmessages), but the copied messages don't have a link to the original message. Album grouping is kept for copied messages. On success, an array of [MessageId](https://core.telegram.org/bots/api#messageid) of the sent messages is returned.
 *
 * https://core.telegram.org/bots/api#copymessages
 */
async function copyMessages(env: Env, { chat_id, from_chat_id, message_ids, options }: CopyMessages) {
	try {
		const API_URL = `https://api.telegram.org/bot${env.BOT_TOKEN}/copyMessages`;

		if (!chat_id) undefinedParamErr('chat_id');
		if (!from_chat_id) undefinedParamErr('from_chat_id');
		if (!message_ids) undefinedParamErr('message_ids');

		const payload = { chat_id, from_chat_id, message_ids, ...options };
		console.log('copyMessages Payload ::> ', JSON.stringify(payload, null, 2));

		const response = await fetch(API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		const data = (await response.json()) as ResponseData;
		console.log('copyMessages Response ::>', JSON.stringify(data, null, 2));

		if (!response.ok) {
			telegramErr(`Error in copyMessages ::> ${response.status} ::> ${response.statusText}`);
		}

		return data.result;
	} catch (error) {
		console.error(`Error ::> copyMessages ::> ${error}`);
	}
}

/**
 * Use this method to send photos. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.
 *
 * https://core.telegram.org/bots/api#sendphoto
 */
async function sendPhoto(env: Env, { chat_id, photo, options }: SendPhoto) {
	try {
		const API_URL = `https://api.telegram.org/bot${env.BOT_TOKEN}/sendPhoto`;

		if (!chat_id) undefinedParamErr('chat_id');
		if (!photo) undefinedParamErr('photo');

		const payload = { chat_id, photo, ...options };
		console.log('sendPhoto Payload ::> ', JSON.stringify(payload, null, 2));

		const response = await fetch(API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		const data = (await response.json()) as ResponseData;
		console.log('sendPhoto Response ::>', JSON.stringify(data, null, 2));

		if (!response.ok) {
			telegramErr(`Error sending photo ::> ${response.status} ::> ${response.statusText}`);
		}
		return data.result;
	} catch (error) {
		console.error(`Error ::> sendPhoto ::> ${error}`);
	}
}

/**
 * Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.
 *
 * https://core.telegram.org/bots/api#sendaudio
 */
async function sendAudio(env: Env, { chat_id, audio, options }: SendAudio) {
	try {
		const API_URL = `https://api.telegram.org/bot${env.BOT_TOKEN}/sendAudio`;

		if (!chat_id) undefinedParamErr('chat_id');
		if (!audio) undefinedParamErr('audio');

		const payload = { chat_id, audio, ...options };
		console.log('sendAudio Payload ::> ', JSON.stringify(payload, null, 2));

		const response = await fetch(API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		const data = (await response.json()) as ResponseData;
		console.log('sendAudio Response ::>', JSON.stringify(data, null, 2));

		if (!response.ok) {
			telegramErr(`Error sending audio ::> ${response.status} ::> ${response.statusText}`);
		}
		return data.result;
	} catch (error) {
		console.error(`Error ::> sendAudio ::> ${error}`);
	}
}

/**
 * Use this method to send general files. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.
 *
 * https://core.telegram.org/bots/api#senddocument
 */
async function sendDocument(env: Env, { chat_id, document, options }: SendDocument) {
	try {
		const API_URL = `https://api.telegram.org/bot${env.BOT_TOKEN}/sendDocument`;

		if (!chat_id) undefinedParamErr('chat_id');
		if (!document) undefinedParamErr('document');

		const payload = { chat_id, document, ...options };
		console.log('sendDocument Payload ::> ', JSON.stringify(payload, null, 2));

		const response = await fetch(API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		const data = (await response.json()) as ResponseData;
		console.log('sendDocument Response ::>', JSON.stringify(data, null, 2));

		if (!response.ok) {
			telegramErr(`Error sending document ::> ${response.status} ::> ${response.statusText}`);
		}
		return data.result;
	} catch (error) {
		console.error(`Error ::> sendDocument ::> ${error}`);
	}
}

/**
 * Use this method to send video files, Telegram clients support MPEG4 videos (other formats may be sent as [Document](https://core.telegram.org/bots/api#document)). On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.
 *
 * https://core.telegram.org/bots/api#sendvideo
 */
async function sendVideo(env: Env, { chat_id, video, options }: SendVideo) {
	try {
		const API_URL = `https://api.telegram.org/bot${env.BOT_TOKEN}/sendVideo`;

		if (!chat_id) undefinedParamErr('chat_id');
		if (!video) undefinedParamErr('video');

		const payload = { chat_id, video, ...options };
		console.log('sendVideo Payload ::> ', JSON.stringify(payload, null, 2));

		const response = await fetch(API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		const data = (await response.json()) as ResponseData;
		console.log('sendVideo Response ::>', JSON.stringify(data, null, 2));

		if (!response.ok) {
			telegramErr(`Error sending video ::> ${response.status} ::> ${response.statusText}`);
		}
		return data.result;
	} catch (error) {
		console.error(`Error ::> sendVideo ::> ${error}`);
	}
}

/**
 * Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.
 *
 * https://core.telegram.org/bots/api#sendanimation
 */
async function sendAnimation(env: Env, { chat_id, animation, options }: SendAnimation) {
	try {
		const API_URL = `https://api.telegram.org/bot${env.BOT_TOKEN}/sendAnimation`;

		if (!chat_id) undefinedParamErr('chat_id');
		if (!animation) undefinedParamErr('animation');

		const payload = { chat_id, animation, ...options };
		console.log('sendAnimation Payload ::> ', JSON.stringify(payload, null, 2));

		const response = await fetch(API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		const data = (await response.json()) as ResponseData;
		console.log('sendAnimation Response ::>', JSON.stringify(data, null, 2));

		if (!response.ok) {
			telegramErr(`Error sending animation ::> ${response.status} ::> ${response.statusText}`);
		}
		return data.result;
	} catch (error) {
		console.error(`Error ::> sendAnimation ::> ${error}`);
	}
}

/**
 * Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of [Messages](https://core.telegram.org/bots/api#message) that were sent is returned.
 *
 * **media must include 2-10 items**
 *
 * https://core.telegram.org/bots/api#sendmediagroup
 */
async function sendMediaGroup(env: Env, { chat_id, media, options }: SendMediaGroup) {
	try {
		const API_URL = `https://api.telegram.org/bot${env.BOT_TOKEN}/sendMediaGroup`;

		if (!chat_id) undefinedParamErr('chat_id');
		if (!media) undefinedParamErr('media');

		if (media.length < 2 || media.length > 10) throw new Error(`media must include 2-10 items`);

		const payload = { chat_id, media, ...options };
		console.log('sendMediaGroup Payload ::> ', JSON.stringify(payload, null, 2));

		const response = await fetch(API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		const data = (await response.json()) as ResponseData;
		console.log('sendMediaGroup Response ::>', JSON.stringify(data, null, 2));

		if (!response.ok) {
			telegramErr(`Error sending sendMediaGroup ::> ${response.status} ::> ${response.statusText}`);
		}
		return data.result;
	} catch (error) {
		console.error(`Error ::> sendMediaGroup ::> ${error}`);
	}
}

/**
 * Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns True on success
 *
 * https://core.telegram.org/bots/api#sendchataction
 */
async function sendChatAction(env: Env, { chat_id, action, options }: SendChatAction) {
	try {
		const API_URL = `https://api.telegram.org/bot${env.BOT_TOKEN}/sendChatAction`;

		if (!chat_id) undefinedParamErr('chat_id');
		if (!action) undefinedParamErr('action');

		const payload = { chat_id, action, ...options };
		console.log('sendChatAction Payload ::> ', JSON.stringify(payload, null, 2));

		const response = await fetch(API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		const data = (await response.json()) as ResponseData;
		console.log('sendChatAction Response ::>', JSON.stringify(data, null, 2));

		if (!response.ok) {
			telegramErr(`Error sending ChatAction ::> ${response.status} ::> ${response.statusText}`);
		}

		return data.result;
	} catch (error) {
		console.error(`Error ::> sendChatAction ::> ${error}`);
	}
}

/**
 * Use this method to change the chosen reactions on a message. Service messages can't be reacted to. Automatically forwarded messages from a channel to its discussion group have the same available reactions as messages in the channel. Returns True on success.
 *
 * [reaction](https://core.telegram.org/bots/api#reactiontype)
 *
 * https://core.telegram.org/bots/api#setmessagereaction
 */
async function setMessageReaction(env: Env, { chat_id, message_id, options }: SetMessageReaction) {
	try {
		const API_URL = `https://api.telegram.org/bot${env.BOT_TOKEN}/setMessageReaction`;

		if (!chat_id) undefinedParamErr('chat_id');
		if (!message_id) undefinedParamErr('message_id');

		const payload = { chat_id, message_id, ...options };
		console.log('setMessageReaction Payload ::> ', JSON.stringify(payload, null, 2));

		const response = await fetch(API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		const data = (await response.json()) as ResponseData;
		console.log('setMessageReaction Response ::>', JSON.stringify(data, null, 2));

		if (!response.ok) {
			telegramErr(`Error setting reaction ::> ${response.status} ::> ${response.statusText}`);
		}

		return data.result;
	} catch (error) {
		console.error(`Error ::> setMessageReaction ::> ${error}`);
	}
}

/**
 * Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to **20MB** in size. On success, a [File](https://core.telegram.org/bots/api#file) object is returned. The file can then be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`, where `<file_path>` is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling [getFile](https://core.telegram.org/bots/api#getfile) again.
 *
 * https://core.telegram.org/bots/api#getfile
 */
async function getFile(env: Env, { file_id }: GetFile) {
	try {
		const API_URL = `https://api.telegram.org/bot${env.BOT_TOKEN}/getFile`;

		if (!file_id) undefinedParamErr('file_id');

		const payload = { file_id };
		console.log('getFile Payload ::> ', JSON.stringify(payload, null, 2));

		const response = await fetch(API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		const data = (await response.json()) as ResponseData;
		console.log('getFile Response ::>', JSON.stringify(data, null, 2));

		if (!response.ok) {
			telegramErr(`Error getting file ::> ${response.status} ::> ${response.statusText}`);
		}

		return data.result;
	} catch (error) {
		console.error(`Error ::> getFile ::> ${error}`);
	}
}

/**
 * Use this method for your bot to leave a group, supergroup or channel. Returns True on success.
 *
 * https://core.telegram.org/bots/api#leavechat
 */
async function leaveChat(env: Env, { chat_id }: LeaveChat) {
	try {
		const API_URL = `https://api.telegram.org/bot${env.BOT_TOKEN}/leaveChat`;

		if (!chat_id) undefinedParamErr('chat_id');

		const payload = { chat_id };
		console.log('leaveChat Payload ::> ', JSON.stringify(payload, null, 2));

		const response = await fetch(API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		const data = (await response.json()) as ResponseData;
		console.log('leaveChat Response ::>', JSON.stringify(data, null, 2));

		if (!response.ok) {
			telegramErr(`Error leaving chat ::> ${response.status} ::> ${response.statusText}`);
		}

		return data.result;
	} catch (error) {
		console.error(`Error ::> leaveChat ::> ${error}`);
	}
}

/**
 * Use this method to get up-to-date information about the chat. Returns a [ChatFullInfo](https://core.telegram.org/bots/api#chatfullinfo) object on success.
 *
 * https://core.telegram.org/bots/api#getchat
 */
async function getChat(env: Env, { chat_id }: GetChat) {
	try {
		const API_URL = `https://api.telegram.org/bot${env.BOT_TOKEN}/getChat`;

		if (!chat_id) undefinedParamErr('chat_id');

		const payload = { chat_id };
		console.log('getChat Payload ::> ', JSON.stringify(payload, null, 2));

		const response = await fetch(API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		const data = (await response.json()) as ResponseData;
		console.log('getChat Response ::>', JSON.stringify(data, null, 2));

		if (!response.ok) {
			telegramErr(`Error getting chat ::> ${response.status} ::> ${response.statusText}`);
		}

		return data.result;
	} catch (error) {
		console.error(`Error ::> getChat ::> ${error}`);
	}
}

/**
 * Use this method to get the number of members in a chat. Returns Int on success.
 *
 * https://core.telegram.org/bots/api#getchatmembercount
 */
async function getChatMemberCount(env: Env, { chat_id }: GetChatMemberCount) {
	try {
		const API_URL = `https://api.telegram.org/bot${env.BOT_TOKEN}/getChatMemberCount`;

		if (!chat_id) undefinedParamErr('chat_id');

		const payload = { chat_id };
		console.log('getChatMemberCount Payload ::> ', JSON.stringify(payload, null, 2));

		const response = await fetch(API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		const data = (await response.json()) as ResponseData;
		console.log('getChatMemberCount Response ::>', JSON.stringify(data, null, 2));

		if (!response.ok) {
			telegramErr(`Error getting chat member count ::> ${response.status} ::> ${response.statusText}`);
		}

		return data.result;
	} catch (error) {
		console.error(`Error ::> getChatMemberCount ::> ${error}`);
	}
}

/**
 * Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a [ChatMember](https://core.telegram.org/bots/api#chatmember) object on success.
 *
 * https://core.telegram.org/bots/api#getchatmember
 */
async function getChatMember(env: Env, { chat_id, user_id }: GetChatMember) {
	try {
		const API_URL = `https://api.telegram.org/bot${env.BOT_TOKEN}/getChatMember`;

		if (!chat_id) undefinedParamErr('chat_id');
		if (!user_id) undefinedParamErr('user_id');

		const payload = { chat_id, user_id };
		console.log('getChatMember Payload ::> ', JSON.stringify(payload, null, 2));

		const response = await fetch(API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		const data = (await response.json()) as ResponseData;
		console.log('getChatMember Response ::>', JSON.stringify(data, null, 2));

		if (!response.ok) {
			telegramErr(`Error getting chat member ::> ${response.status} ::> ${response.statusText}`);
		}

		return data.result;
	} catch (error) {
		console.error(`Error ::> getChatMember ::> ${error}`);
	}
}

/**
 * Use this method to send answers to callback queries sent from [inline keyboards](https://core.telegram.org/bots/features#inline-keyboards). The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned.
 *
 * https://core.telegram.org/bots/api#answercallbackquery
 */
async function answerCallbackQuery(env: Env, { callback_query_id, options }: AnswerCallbackQuery) {
	try {
		const API_URL = `https://api.telegram.org/bot${env.BOT_TOKEN}/answerCallbackQuery`;

		if (!callback_query_id) undefinedParamErr('callback_query_id');

		const payload = { callback_query_id, ...options };
		console.log('answerCallbackQuery Payload ::> ', JSON.stringify(payload, null, 2));

		const response = await fetch(API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		const data = (await response.json()) as ResponseData;
		console.log('answerCallbackQuery Response ::>', JSON.stringify(data, null, 2));

		if (!response.ok) {
			telegramErr(`Error in answerCallbackQuery ::> ${response.status} ::> ${response.statusText}`);
		}

		return data.result;
	} catch (error) {
		console.error(`Error ::> answerCallbackQuery ::> ${error}`);
	}
}

/**
 * Use this method to change the list of the bot's commands. See [this manual](https://core.telegram.org/bots/features#commands) for more details about bot commands. Returns True on success.
 *
 * [scope](https://core.telegram.org/bots/api#botcommandscope) - scope of users for which the commands are relevant
 *
 * [language_code](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) - A two-letter ISO 639-1 language code
 *
 * https://core.telegram.org/bots/api#setmycommands
 */
async function setMyCommands(env: Env, { commands, options }: SetMyCommands) {
	try {
		const API_URL = `https://api.telegram.org/bot${env.BOT_TOKEN}/setMyCommands`;

		if (!commands) undefinedParamErr('commands');

		const payload = { commands, ...options };
		console.log('setMyCommands Payload ::> ', JSON.stringify(payload, null, 2));

		const response = await fetch(API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		const data = (await response.json()) as ResponseData;
		console.log('setMyCommands Response ::>', JSON.stringify(data, null, 2));

		if (!response.ok) {
			telegramErr(`Error setting bot commands ::> ${response.status} ::> ${response.statusText}`);
		}

		return data.result;
	} catch (error) {
		console.error(`Error ::> setMyCommands ::> ${error}`);
	}
}

/**
 * Use this method to delete the list of the bot's commands for the given scope and user language. After deletion, [higher level commands](https://core.telegram.org/bots/api#determining-list-of-commands) will be shown to affected users. Returns True on success.
 *
 * [scope](https://core.telegram.org/bots/api#botcommandscope) - scope of users for which the commands are relevant
 *
 * [language_code](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) - A two-letter ISO 639-1 language code
 *
 * https://core.telegram.org/bots/api#deletemycommands
 */
async function deleteMyCommands(env: Env, { options }: DeleteMyCommands) {
	try {
		const API_URL = `https://api.telegram.org/bot${env.BOT_TOKEN}/deleteMyCommands`;

		const payload = { ...options };
		console.log('deleteMyCommands Payload ::> ', JSON.stringify(payload, null, 2));

		const response = await fetch(API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		const data = (await response.json()) as ResponseData;
		console.log('deleteMyCommands Response ::>', JSON.stringify(data, null, 2));

		if (!response.ok) {
			telegramErr(`Error deleting bot commands ::> ${response.status} ::> ${response.statusText}`);
		}

		return data.result;
	} catch (error) {
		console.error(`Error ::> deleteMyCommands ::> ${error}`);
	}
}

/**
 * Use this method to edit text and [game](https://core.telegram.org/bots/api#games) messages. On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
 *
 * https://core.telegram.org/bots/api#editmessagetext
 */
async function editMessageText(env: Env, { chat_id, message_id, inline_message_id, text, options }: EditMessageText) {
	try {
		const API_URL = `https://api.telegram.org/bot${env.BOT_TOKEN}/editMessageText`;

		const payload = { chat_id, inline_message_id, message_id, text, ...options };
		console.log('editMessageText Payload ::> ', JSON.stringify(payload, null, 2));

		const response = await fetch(API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		const data = (await response.json()) as ResponseData;
		console.log('editMessageText Response ::>', JSON.stringify(data, null, 2));

		if (!response.ok) {
			telegramErr(`Error in editMessageText ::> ${response.status} ::> ${response.statusText}`);
		}

		return data.result;
	} catch (error) {
		console.error(`Error ::> editMessageText ::> ${error}`);
	}
}

/**
 * Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent
 *
 * https://core.telegram.org/bots/api#editmessagecaption
 */
async function editMessageCaption(env: Env, { chat_id, message_id, inline_message_id, caption, options }: EditMessageCaption) {
	try {
		const API_URL = `https://api.telegram.org/bot${env.BOT_TOKEN}/editMessageCaption`;

		const payload = { chat_id, inline_message_id, message_id, caption, ...options };
		console.log('editMessageCaption Payload ::> ', JSON.stringify(payload, null, 2));

		const response = await fetch(API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		const data = (await response.json()) as ResponseData;
		console.log('editMessageCaption Response ::>', JSON.stringify(data, null, 2));

		if (!response.ok) {
			telegramErr(`Error in editMessageCaption ::> ${response.status} ::> ${response.statusText}`);
		}

		return data.result;
	} catch (error) {
		console.error(`Error ::> editMessageCaption ::> ${error}`);
	}
}

/**
 * Use this method to edit animation, audio, document, photo, or video messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded; use a previously uploaded file via its file_id or specify a URL. On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
 *
 * https://core.telegram.org/bots/api#editmessagemedia
 */
async function editMessageMedia(env: Env, { chat_id, message_id, inline_message_id, media, options }: EditMessageMedia) {
	try {
		const API_URL = `https://api.telegram.org/bot${env.BOT_TOKEN}/editMessageMedia`;

		if (!media) undefinedParamErr('media');

		const payload = { chat_id, inline_message_id, message_id, media, ...options };
		console.log('editMessageMedia Payload ::> ', JSON.stringify(payload, null, 2));

		const response = await fetch(API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		const data = (await response.json()) as ResponseData;
		console.log('editMessageMedia Response ::>', JSON.stringify(data, null, 2));

		if (!response.ok) {
			telegramErr(`Error in editMessageMedia ::> ${response.status} ::> ${response.statusText}`);
		}

		return data.result;
	} catch (error) {
		console.error(`Error ::> editMessageMedia ::> ${error}`);
	}
}

/**
 * Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
 *
 * https://core.telegram.org/bots/api#editmessagereplymarkup
 */
async function editMessageReplyMarkup(env: Env, { chat_id, inline_message_id, message_id, reply_markup }: EditMessageReplyMarkup) {
	try {
		const API_URL = `https://api.telegram.org/bot${env.BOT_TOKEN}/editMessageReplyMarkup`;

		const payload = { chat_id, inline_message_id, message_id, reply_markup };
		console.log('editMessageReplyMarkup Payload ::> ', JSON.stringify(payload, null, 2));

		const response = await fetch(API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		const data = (await response.json()) as ResponseData;
		console.log('editMessageReplyMarkup Response ::>', JSON.stringify(data, null, 2));

		if (!response.ok) {
			telegramErr(`Error in editMessageReplyMarkup ::> ${response.status} ::> ${response.statusText}`);
		}

		return data.result;
	} catch (error) {
		console.error(`Error ::> editMessageReplyMarkup ::> ${error}`);
	}
}

export const bot = {
	getMe,
	sendMessage,
	forwardMessage,
	forwardMessages,
	copyMessage,
	copyMessages,
	sendPhoto,
	sendAudio,
	sendDocument,
	sendVideo,
	sendAnimation,
	sendMediaGroup,
	sendChatAction,
	setMessageReaction,
	getFile,
	leaveChat,
	getChat,
	getChatMemberCount,
	getChatMember,
	answerCallbackQuery,
	setMyCommands,
	deleteMyCommands,
	editMessageText,
	editMessageCaption,
	editMessageMedia,
	editMessageReplyMarkup,
};
