"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.AppError = void 0;
var AppError = /** @class */ (function (_super) {
    __extends(AppError, _super);
    function AppError(message, data) {
        var _a;
        var _this = _super.call(this, message) || this;
        _this.name = _this.constructor.name;
        Error.captureStackTrace(_this, _this.constructor);
        var caller = (_a = _this.stack) === null || _a === void 0 ? void 0 : _a.split("\n")[1].trim();
        _this.message = _this.message + " (" + caller + ") info: " + JSON.stringify(data);
        return _this;
    }
    return AppError;
}(Error));
exports.AppError = AppError;
