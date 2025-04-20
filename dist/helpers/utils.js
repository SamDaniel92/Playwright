"use strict";
// utils.ts
// Utility methods ONLY for random data, date formatting, etc.
// DO NOT add page-specific or business logic here
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = formatDate;
exports.generateRandomString = generateRandomString;
exports.addDaysToDate = addDaysToDate;
function formatDate(date) {
    return date.toISOString().split('T')[0];
}
function generateRandomString(length) {
    return Math.random().toString(36).substring(2, length + 2);
}
function addDaysToDate(days) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
}
