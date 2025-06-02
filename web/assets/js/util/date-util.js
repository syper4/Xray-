const oneMinute = 1000 * 60; // milliseconds in one minute
const oneHour = oneMinute * 60; // milliseconds in one hour
const oneDay = oneHour * 24; // milliseconds in one day
const oneWeek = oneDay * 7; // milliseconds in one week
const oneMonth = oneDay * 30; // milliseconds in one month

/**
 * Subtract days
 *
 * @param days Number of days to subtract
 */
Date.prototype.minusDays = function (days) {
    return this.minusMillis(oneDay * days);
};

/**
 * Add days
 *
 * @param days Number of days to add
 */
Date.prototype.plusDays = function (days) {
    return this.plusMillis(oneDay * days);
};

/**
 * Subtract hours
 *
 * @param hours Number of hours to subtract
 */
Date.prototype.minusHours = function (hours) {
    return this.minusMillis(oneHour * hours);
};

/**
 * Add hours
 *
 * @param hours Number of hours to add
 */
Date.prototype.plusHours = function (hours) {
    return this.plusMillis(oneHour * hours);
};

/**
 * Subtract minutes
 *
 * @param minutes Number of minutes to subtract
 */
Date.prototype.minusMinutes = function (minutes) {
    return this.minusMillis(oneMinute * minutes);
};

/**
 * Add minutes
 *
 * @param minutes Number of minutes to add
 */
Date.prototype.plusMinutes = function (minutes) {
    return this.plusMillis(oneMinute * minutes);
};

/**
 * Subtract milliseconds
 *
 * @param millis Number of milliseconds to subtract
 */
Date.prototype.minusMillis = function(millis) {
    let time = this.getTime() - millis;
    let newDate = new Date();
    newDate.setTime(time);
    return newDate;
};

/**
 * Add milliseconds
 *
 * @param millis Number of milliseconds to add
 */
Date.prototype.plusMillis = function(millis) {
    let time = this.getTime() + millis;
    let newDate = new Date();
    newDate.setTime(time);
    return newDate;
};

/**
 * Set time to 00:00:00.000 of the day
 */
Date.prototype.setMinTime = function () {
    this.setHours(0);
    this.setMinutes(0);
    this.setSeconds(0);
    this.setMilliseconds(0);
    return this;
};

/**
 * Set time to 23:59:59.999 of the day
 */
Date.prototype.setMaxTime = function () {
    this.setHours(23);
    this.setMinutes(59);
    this.setSeconds(59);
    this.setMilliseconds(999);
    return this;
};

/**
 * Format date as YYYY-MM-DD
 */
Date.prototype.formatDate = function () {
    return this.getFullYear() + "-" + addZero(this.getMonth() + 1) + "-" + addZero(this.getDate());
};

/**
 * Format time as HH:mm:ss
 */
Date.prototype.formatTime = function () {
    return addZero(this.getHours()) + ":" + addZero(this.getMinutes()) + ":" + addZero(this.getSeconds());
};

/**
 * Format date and time
 *
 * @param split Separator between date and time, default is a space
 */
Date.prototype.formatDateTime = function (split = ' ') {
    return this.formatDate() + split + this.formatTime();
};

class DateUtil {

    // Convert string to Date object
    static parseDate(str) {
        return new Date(str.replace(/-/g, '/'));
    }

    static formatMillis(millis) {
        return moment(millis).format('YYYY-M-D H:m:s')
    }

    static firstDayOfMonth() {
        const date = new Date();
        date.setDate(1);
        date.setMinTime();
        return date;
    }
}