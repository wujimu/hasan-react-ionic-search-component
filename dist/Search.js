"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_2 = require("@ionic/react");
var Search = function (_a) {
    var data = _a.data;
    var _b = (0, react_1.useState)(""), searchTerm = _b[0], setSearchTerm = _b[1];
    var handleSearchChange = function (e) {
        setSearchTerm(e.detail.value);
    };
    var filteredData = data.filter(function (item) {
        return item.toLowerCase().includes(searchTerm.toLowerCase());
    });
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_2.IonSearchbar, { value: searchTerm, onIonChange: handleSearchChange, placeholder: "Search" }),
        react_1.default.createElement(react_2.IonList, null, filteredData.map(function (item, index) { return (react_1.default.createElement(react_2.IonItem, { key: index },
            react_1.default.createElement("p", null, item))); }))));
};
exports.default = Search;
