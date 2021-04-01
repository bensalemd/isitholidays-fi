fetch('./holiday2021.json').then(async (resp) => {
    const holidays2021 = await resp.json();
    const currentDate = new Date();
    currentDate.setHours(0,0,0,0);
    const holiday = holidays2021?.find((el) => el.date === currentDate.toISOString());

    document.getElementById('holiday').innerText = holiday ? `Yes\nIt is ${holiday.name}` : 'No';
})