"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = require("cors");
var express_1 = require("express");
var app = (0, express_1.default)();
app.use(express_1.default.static('./public'));
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: '*',
}));
app.get('/', function (req, res) {
    return res.json({ message: 'Ping!' }).status(200);
});
app.listen(8001, function () { return console.log('listening on port: ' + 8001); });
