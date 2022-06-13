import {v4 as uuidv4} from 'uuid';
import * as constants from './constants';
import * as crypto from 'crypto';

export const buildHeader = (url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', time = null) => {
    const uuid = uuidv4();
    const dateTime = +(time || new Date());
    const unixTimestamp = Math.floor(dateTime / 1000).toString();
    const encodedUri = encodeURIComponent(url).toLowerCase();
    const payload = `${constants.ABT_APP_ID}${method}${encodedUri}${unixTimestamp}${uuid}`;
    const signature = crypto
        .createHmac('sha256', constants.ABT_APP_KEY)
        .update(payload.trim())
        .digest('base64');
    return `amx ${constants.ABT_APP_MAGIC_HEADER}:${signature}:${uuid}:${unixTimestamp}`;
}

console.log(buildHeader(`${constants.ABT_API_BASE}/api/card/Transactions`, "POST"));