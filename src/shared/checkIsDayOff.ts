export const checkIsDayOff = async (date: string) => {
    return fetch(`https://isdayoff.ru/${date}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            if (!response.ok) {
                const errorMessage = `Ошибка при запросе checkIsDayOff: ${response.status}`;
                console.log(errorMessage);
                return response.status;
            }
            return response.json();
        })
        .catch(error => {
            const errorMessage = `Ошибка при запросе checkIsDayOff: ${error.message}`;
            console.error(errorMessage);
            return errorMessage;
        });
}