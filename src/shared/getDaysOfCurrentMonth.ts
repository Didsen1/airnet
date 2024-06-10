
export const getDaysOfCurrentMonth = () => {
    const dates: string[] = [];
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();

    const firstDay = new Date(year, month, 2);
    const lastDay = new Date(year, month + 1, 1);

    for (let day = firstDay; day <= lastDay; day.setDate(day.getDate() + 1)) {
        const dateStr = day.toISOString().split('T')[0].replace(/-/g, '');
        dates.push(dateStr);
    }

    return dates;
}