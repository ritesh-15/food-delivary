"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserDto = /** @class */ (function () {
    function UserDto(user) {
        this.name = user.name;
        this.email = user.email;
        this.addresses = user.addresses;
        this.number = user.number;
        this.isRestaurantOwner = user.isRestaurantOwner;
        this.isAdmin = user.isAdmin;
        this.isSuspended = user.isSuspended;
        this._id = user._id;
        this.createdAt = user.createdAt;
    }
    return UserDto;
}());
exports.default = UserDto;
