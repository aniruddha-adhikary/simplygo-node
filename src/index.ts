import {
    GetPaymentCardsResponseDto,
    GetTransactionsRequestDto,
    GetTransactionsResponseDto,
    LoginDto,
    LoginResponseDto, LogoutResponseDto
} from "./dtos";
import axios, {AxiosInstance} from "axios";
import {buildHeader} from "./utils";
import * as constants from './constants';

export class SimplyGoApi {
    private userSessionKey: string | null = null;
    private axios: AxiosInstance;

    constructor(appId = constants.ABT_APP_ID, appKey = constants.ABT_APP_KEY, appMagicHeader = constants.ABT_APP_MAGIC_HEADER) {
        this.axios = axios.create({});
        this.axios.interceptors.request.use((config) => {
            if (!config.url || !config.method) {
                throw new Error("URL or Method not defined!");
            }
            return {
                ...config,
                headers: {
                    authorization: buildHeader(config.url, config.method.toLocaleUpperCase(), appId, appKey, appMagicHeader),
                    ...(config.headers || {}),
                },
                data: {
                    ...(this.userSessionKey ? {user_sess_key: this.userSessionKey} : {}),
                    ...(config.data || {})
                }
            }

        })
    }

    async login(credentials: LoginDto) {
        const url = `${constants.ABT_API_BASE}${constants.ABT_API_SIGN_IN}`;

        const response = await this.axios.post<LoginResponseDto>(url, credentials);
        this.userSessionKey = response.data.data.user_sess_key;
    }

    async logout() {
        const url = `${constants.ABT_API_BASE}${constants.ABT_API_LOG_OUT}`;

        if (!this.userSessionKey) {
            throw new Error("User is not logged in");
        }

        await this.axios.post<LogoutResponseDto>(url, {session_key: this.userSessionKey});
        this.userSessionKey = null;
    }

    async getCards() {
        const url = `${constants.ABT_API_BASE}${constants.ABT_API_GET_CARDS}`;
        const response = await this.axios.post<GetPaymentCardsResponseDto>(url);
        return response.data;
    }

    async getTransactions(request: GetTransactionsRequestDto) {
        const url = `${constants.ABT_API_BASE}${constants.ABT_API_GET_TRANSACTIONS}`;
        const response = await this.axios.post<GetTransactionsResponseDto>(url, request);

        return response.data;
    }
}


