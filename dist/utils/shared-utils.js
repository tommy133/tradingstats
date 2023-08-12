"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertDatesToLocalTime = void 0;
// Convert the date strings to Date objects in your local timezone
function convertDatesToLocalTime(items) {
    items.forEach((item) => {
        if (item.date) {
            const utcDate = new Date(item.date);
            const localDate = new Date(utcDate.getTime() - utcDate.getTimezoneOffset() * 60000);
            item.date = localDate.toISOString(); // Convert it back to ISO 8601 with local timezone
        }
    });
}
exports.convertDatesToLocalTime = convertDatesToLocalTime;
