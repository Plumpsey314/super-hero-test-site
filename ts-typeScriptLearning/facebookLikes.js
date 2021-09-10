"use strict";
exports.__esModule = true;
exports.FacebookLikeButton = void 0;
var FacebookLikeButton = /** @class */ (function () {
    function FacebookLikeButton(likes) {
        this.likes = 0;
        if (likes) {
            this.likes = likes;
        }
        this.isLiked = false;
    }
    FacebookLikeButton.prototype.like = function () {
        if (!this.isLiked) {
            this.isLiked = true;
            this.likes++;
        }
        else {
            console.log("you have already liked this post");
        }
    };
    FacebookLikeButton.prototype.unlike = function () {
        if (this.isLiked) {
            this.isLiked = false;
            this.likes--;
        }
        else {
            console.log("you have not liked this post");
        }
    };
    Object.defineProperty(FacebookLikeButton.prototype, "Likes", {
        get: function () {
            return this.likes;
        },
        enumerable: false,
        configurable: true
    });
    return FacebookLikeButton;
}());
exports.FacebookLikeButton = FacebookLikeButton;
