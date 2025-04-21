"use strict";
// utils.ts
// Utility methods ONLY for random data, date formatting, etc.
// DO NOT add page-specific or business logic here
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDaysToDate = exports.formatDate = void 0;
exports.generateRandomString = generateRandomString;
const formatDate = (date) => {
    return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).replace(/\//g, '-');
};
exports.formatDate = formatDate;
function generateRandomString(length) {
    return Math.random().toString(36).substring(2, length + 2);
}
const addDaysToDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
};
exports.addDaysToDate = addDaysToDate;
