type ParseMode = 'MarkdownV2' | 'Markdown' | 'HTML';

type ChatAction =
	| 'typing'
	| 'upload_photo'
	| 'record_video'
	| 'upload_video'
	| 'record_voice'
	| 'upload_voice'
	| 'upload_document'
	| 'choose_sticker'
	| 'find_location'
	| 'record_video_note'
	| 'upload_video_note';

type ReactionType =
	| {
			type: 'emoji';
			emoji: string;
	  }
	| {
			type: 'custom_emoji';
			custom_emoji_id: string;
	  };

type ReplyMarkup = {
	inline_keyboard: InlineKeyboardButton[][];
};

interface ResponseData {
	ok: Boolean;
	result: any;
}

interface BotCommand {
	command: string;
	description: string;
}

type BotCommandScope =
	| { type: 'default' }
	| { type: 'all_private_chats' }
	| { type: 'all_group_chats' }
	| { type: 'all_chat_administrators' }
	| { type: 'chat'; chat_id: number | string }
	| { type: 'chat_administrators'; chat_id: number | string }
	| { type: 'chat_member'; chat_id: number | string; user_id: number };

type RequiredMessage =
	| {
			chat_id: number | string;
			message_id: number;
			inline_message_id?: never;
	  }
	| {
			chat_id?: never;
			message_id?: never;
			inline_message_id: string;
	  };

type CommonOptions = {
	parse_mode?: ParseMode;
	protect_content?: Boolean;
	reply_markup?: ReplyMarkup;
	disable_notification?: Boolean;
	reply_to_message_id?: number;
	message_thread_id?: number;
	business_connection_id?: string;
	disable_web_page_preview?: Boolean;
	message_effect_id?: string;
};

type CommonMediaOptions = {
	caption?: string;
	parse_mode?: ParseMode;
	show_caption_above_media?: Boolean;
	has_spoiler?: Boolean;
};

type InlineKeyboardButton = {
	text: string;
	url?: string;
	callback_data?: string;
	login_url?: string;
	web_app?: {
		url: string;
	};
};

interface SendMessage {
	chat_id: number | string;
	text: string;
	options?: CommonOptions;
}

interface ForwardMessage {
	chat_id: number | string;
	from_chat_id: number | string;
	message_id: number;
	options?: {
		message_thread_id?: number;
		disable_notification?: Boolean;
		protect_content?: Boolean;
	};
}

interface forwardMessages {
	chat_id: number | string;
	from_chat_id: number | string;
	message_ids: number[];
	options?: {
		message_thread_id?: number;
		disable_notification?: Boolean;
		protect_content?: Boolean;
	};
}

interface CopyMessage {
	chat_id: number | string;
	from_chat_id: number | string;
	message_id: number;
	options?: CommonMediaOptions & {
		disable_notification?: Boolean;
		protect_content?: Boolean;
		reply_to_message_id?: number;
		reply_markup?: ReplyMarkup;
	};
}

interface CopyMessages {
	chat_id: number | string;
	from_chat_id: number | string;
	message_ids: number[];
	options?: {
		message_thread_id?: number;
		disable_notification?: Boolean;
		protect_content?: Boolean;
		remove_caption?: Boolean;
	};
}

type InputMedia =
	| {
			type: 'photo';
			media: string;
			mediaOptions?: CommonMediaOptions;
	  }
	| {
			type: 'video' | 'animation';
			media: string;
			mediaOptions?: CommonMediaOptions & SendVideoOptions;
	  }
	| {
			type: 'audio';
			media: string;
			mediaOptions?: CommonMediaOptions & { title?: string; performer?: string };
	  }
	| {
			type: 'document';
			media: string;
			mediaOptions?: CommonMediaOptions & {
				thumbnail?: string;
				disable_content_type_detection?: Boolean;
			};
	  };

interface SendPhoto {
	chat_id: number | string;
	photo: string;
	options?: CommonOptions & CommonMediaOptions;
}

interface SendAudio {
	chat_id: number | string;
	audio: string;
	options?: CommonOptions &
		CommonMediaOptions & {
			duration?: number;
			performer?: string;
			title?: string;
			thumbnail?: string;
		};
}

interface SendDocument {
	chat_id: number | string;
	document: string;
	options?: CommonOptions &
		CommonMediaOptions & {
			disable_content_type_detection?: Boolean;
		};
}

interface SendVideoOptions extends CommonMediaOptions {
	duration?: number;
	height?: number;
	width?: number;
	thumbnail?: string;
	supports_streaming?: Boolean;
}

interface SendVideo {
	chat_id: number | string;
	video: string;
	options?: CommonOptions & SendVideoOptions;
}

interface SendAnimation {
	chat_id: number | string;
	animation: string;
	options?: CommonOptions & SendVideoOptions;
}

interface SendMediaGroup {
	chat_id: number | string;
	media: InputMedia[];
	options?: {
		message_thread_id?: number;
		business_connection_id?: string;
		disable_notification?: Boolean;
		protect_content?: Boolean;
		message_effect_id?: string;
		reply_to_message_id?: number;
	};
}

interface SendChatAction {
	chat_id: number | string;
	action: ChatAction;
	options?: {
		message_thread_id?: number;
		business_connection_id?: string;
	};
}

interface SetMessageReaction {
	chat_id: number | string;
	message_id: number;
	options?: {
		reaction?: ReactionType[];
		is_big?: Boolean;
	};
}

interface GetFile {
	file_id: string;
}

interface LeaveChat {
	chat_id: number | string;
}

interface GetChat {
	chat_id: number | string;
}

interface GetChatMemberCount {
	chat_id: number | string;
}

interface GetChatMember {
	chat_id: number | string;
	user_id: number;
}

interface AnswerCallbackQuery {
	callback_query_id: string;
	options?: {
		text?: string;
		url?: string;
		show_alert?: Boolean;
	};
}

interface SetMyCommands {
	commands: BotCommand[];
	options?: {
		scope?: BotCommandScope;
		language_code?: string;
	};
}

interface DeleteMyCommands {
	options?: {
		scope?: BotCommandScope;
		language_code?: string;
	};
}

interface editMessageText {
	text: string;
	options?: {
		parse_mode?: ParseMode;
		reply_markup?: ReplyMarkup;
		disable_web_page_preview?: Boolean;
	};
}

type EditMessageText = editMessageText & RequiredMessage;

type editMessageCaption = {
	caption?: string;
	options?: {
		parse_mode?: ParseMode;
		reply_markup?: ReplyMarkup;
		show_caption_above_media?: Boolean;
	};
};

type EditMessageCaption = editMessageCaption & RequiredMessage;

type EditMessageMedia = {
	media: InputMedia;
	options?: {
		reply_markup?: ReplyMarkup;
	};
} & RequiredMessage;

type EditMessageReplyMarkup = {
	reply_markup?: ReplyMarkup;
} & RequiredMessage;
