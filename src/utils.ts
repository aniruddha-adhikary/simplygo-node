import {v4 as uuidv4} from 'uuid';
import * as crypto from 'crypto';

export const buildHeader = (
    url: string, method: string,
    appId: string, appKey: string, appMagicHeader: string
) => {
    const uuid = uuidv4();
    const dateTime = +(new Date());
    const unixTimestamp = Math.floor(dateTime / 1000).toString();
    const encodedUri = encodeURIComponent(url).toLowerCase();
    const payload = `${appId}${method}${encodedUri}${unixTimestamp}${uuid}`;
    const signature = crypto
        .createHmac('sha256', appKey)
        .update(payload.trim())
        .digest('base64');
    return `amx ${appMagicHeader}:${signature}:${uuid}:${unixTimestamp}`;
}
