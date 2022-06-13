import {
    GetCardListRequestDto, GetPaymentCardsResponseDto,
    GetTransactionsRequestDto,
    GetTransactionsResponseDto,
    LoginDto,
    LoginResponseDto
} from "./dtos";
import axios from "axios";
import {buildHeader} from "./utils";
import * as constants from './constants';

export const login = (credentials: LoginDto) => {
    const url = `${constants.ABT_API_BASE}${constants.ABT_API_SIGN_IN}`;
    const authHeader = buildHeader(url, 'POST');

    return axios.post<LoginResponseDto>(url, credentials, {
        headers: {
            'Authorization': authHeader
        }
    });
}

export const getCards = (request: GetCardListRequestDto) => {
    const url = `${constants.ABT_API_BASE}${constants.ABT_API_GET_CARDS}`;
    const authHeader = buildHeader(url, 'POST');

    return axios.post<GetPaymentCardsResponseDto>(url, request, {
        headers: {
            'Authorization': authHeader
        }
    });
}

export const getTransactions = (request: GetTransactionsRequestDto) => {
    const url = `${constants.ABT_API_BASE}${constants.ABT_API_GET_TRANSACTIONS}`;
    const authHeader = buildHeader(url, 'POST');

    return axios.post<GetTransactionsResponseDto>(url, request, {
        headers: {
            'Authorization': authHeader
        }
    });
}

