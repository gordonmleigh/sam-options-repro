"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function handler(event) {
    return {
        statusCode: 200,
        body: JSON.stringify({ event }),
        headers: {
            'Content-Type': 'application/json',
        },
    };
}
exports.handler = handler;
