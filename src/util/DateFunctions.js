import { date } from "yup";

export function dateToString(date) {
    const timezoneOffset = new Date().getTimezoneOffset() * 60 * 1000 * -1;
    const offsetedDate = new Date(+date + timezoneOffset);
    return offsetedDate.toISOString().slice(0, -14);
}

export function toTimeFormat12(date) {
    let hr = date.getHours();
    let minute = date.getMinutes();
    let timetype = "pm";
    if (hr < 12) {
        timetype = "am";
    } else if (hr > 12) hr = hr - 12;
    return `${hr}:${minute < 10 ? "0" + minute : minute} ${timetype}`;
}
export function toTimeFormat24(date) {
    let hr = date.getHours();
    let minute = date.getMinutes();
    return `${hr}:${minute < 10 ? "0" + minute : minute}`;
}

export function getTime(date) {
    let leavedate = new Date(date);
    let temptoday = new Date();
    let templeaveday = new Date(date);

    temptoday.setHours(0);
    temptoday.setMinutes(0);
    temptoday.setSeconds(0, 0);
    templeaveday.setHours(0);
    templeaveday.setMinutes(0);
    templeaveday.setSeconds(0, 0);
    if (temptoday.getTime() === templeaveday.getTime()) {
        return toTimeFormat12(leavedate);
    } else if (temptoday.getTime() - templeaveday.getTime() === 86400000)
        return "Yesterday";
    else return dateToString(leavedate);
}
export function getTimeDifference(time1, time2) {
    let t1 = new Date();
    let t2 = new Date();
    let h1 = time1.split(":")[0];
    let m1 = time1.split(":")[1];
    t1.setHours(h1);
    t1.setMinutes(m1);

    let h2 = time2.split(":")[0];
    let m2 = time2.split(":")[1];
    t2.setHours(h2);
    t2.setMinutes(m2);
    console.log(t2 - t1);
    if (t2 > t1) return false;
    else return true;
}

export function isSameDay(day1, day2) {
    day1.setHours(0);
    day1.setMinutes(0);
    day1.setSeconds(0, 0);
    day2.setHours(0);
    day2.setMinutes(0);
    day2.setSeconds(0, 0);
    if (day1.getTime() === day2.getTime()) {
        return true;
    } else return false;
}

export function from24to12Format(time) {
    let hr = parseInt(time.split(":")[0]);
    let min = parseInt(time.split(":")[1]);
    let date = new Date();
    date.setHours(hr);
    date.setMinutes(min);
    return toTimeFormat12(date);
}
export function isTimeBeforCurrent(time) {
    let t = new Date();
    let hr = time.split(":")[0];
    let min = time.split(":")[1];
    console.log(time, t);
    t.setHours(hr);
    t.setMinutes(min);
    if (new Date() > t) return true;
    else return false;
}
