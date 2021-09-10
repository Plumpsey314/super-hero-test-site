"use strict";
exports.__esModule = true;
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y, n) {
        this.x = x;
        this.y = y;
        this.name = n;
    }
    Point.prototype.distanceToP = function (p) {
        return Math.sqrt((p.x - this.x) * (p.x - this.x) + (p.y - this.y) * (p.y - this.y));
    };
    Point.prototype.logName = function () {
        console.log(this.name);
    };
    Object.defineProperty(Point.prototype, "X", {
        /**
         * Allows you to get the x variable
         */
        get: function () {
            return this.x;
        },
        /**
         * Allows you to set the x variable
         */
        set: function (num) {
            if (num < 0) {
                throw new Error("No negatives");
            }
            this.x = num;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
