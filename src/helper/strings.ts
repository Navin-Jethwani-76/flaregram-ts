//// --- Color codes ---- ////
export const colors = {
	reset: '\x1b[0m',
	bright: '\x1b[1m',
	dim: '\x1b[2m',
	underscore: '\x1b[4m',
	blink: '\x1b[5m',
	reverse: '\x1b[7m',
	hidden: '\x1b[8m',
	black: '\x1b[30m',
	red: '\x1b[31m',
	green: '\x1b[32m',
	yellow: '\x1b[33m',
	blue: '\x1b[34m',
	magenta: '\x1b[35m',
	cyan: '\x1b[36m',
	white: '\x1b[37m',
};

//// ---- Strings ---- ////

export const status_good = { status: 'Operational / OK / Good' };

export const status_bad = { status: 'Broken / NOT OK / Bad' };

//// ---- Errors ----- ////

export async function undefinedParamErr(param: string) {
	throw new Error(`Undefined mandatory parameter ::> ${param}`);
}

export async function telegramErr(error: string) {
	throw new Error(`TELEGRAM ERROR ::> ${error}`);
}
