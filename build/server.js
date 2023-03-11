"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, express_1.default)());
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, '../frontend', 'build')));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../frontend', 'build', 'index.html'));
});
const PORT = 5000 || process.env.PORT;
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static('../frontend/build'));
    app.get('*', (req, res) => {
        res.sendFile(path_1.default.resolve(__dirname, '../frontend', 'build', 'index.html'));
    });
}
app.listen(PORT, () => console.log(`Server started on: ${PORT}`));
//# sourceMappingURL=server.js.map