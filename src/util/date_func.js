



export const unix_step_day = 86400;

export const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const date_from_unix = (unix) => {
    const dateObj = new Date(unix * 1000);
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const day_num = dateObj.getDay();
    const day_name = weekdays[dateObj.getDay()];
    const hour_24 = dateObj.getHours();
    const hour_12 = hour_24 % 12;
    const hour_pm_am = hour_12 > 12 ? "pm" : "am";
    return { day, day_name, month, hour_24, hour_12, hour_pm_am }
}


export const generate_days = () => {
    const days = []
    const dateobj = new Date();
    const ufd = dateobj.getTime() / 1000;
    let dfu = 0;
    for (let i = 0; i < 30; i++) {
        dfu = date_from_unix((ufd) + unix_step_day * i)
        days.push({
            i: i,
            id: i + "_day",
            name: dfu.day_name,
            num: dfu.day,
            unix:ufd
        })
    }
    return days;
}