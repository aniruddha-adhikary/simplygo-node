import {SimplyGoApi} from "./index";

async function main() {
    const simplyGo = new SimplyGoApi();

    await simplyGo.login({
        user_email: "aniruddha@foobar.net",
        user_password: "foobar"
    });

    const cards = await simplyGo.getCards();

    const transactions = await simplyGo.getTransactions({
        card_id: cards.data[0].UniqueCode, start_date: "13-06-2022", end_date: "13-06-2022"
    });

    console.table(
        transactions.data.Histories.map(history => ({
            fare: history.Fare,
            pickup: history.EntryLocationName,
            dropOff: history.ExitLocationName
        }))
    );

    await simplyGo.logout();
}

main();