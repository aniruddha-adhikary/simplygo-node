import {getCards, getTransactions, login} from "./index";

async function main() {
    const {data: {data: {user_sess_key}}} = await login({
        user_email: "aniruddha@foobar.net",
        user_password: "foobar"
    });

    const cards = await getCards({user_sess_key});

    const transactions = await getTransactions({
        user_sess_key,
        card_id: cards.data.data[0].UniqueCode, start_date: "13-06-2022", end_date: "13-06-2022"
    });

    console.table(
        transactions.data.data.Histories.map(history => ({
            fare: history.Fare,
            pickup: history.EntryLocationName,
            dropOff: history.ExitLocationName
        }))
    );
}

main();