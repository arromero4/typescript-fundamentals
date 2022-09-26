"use strict";
//ENUMS
var Roles;
(function (Roles) {
    Roles["User"] = "USER";
    Roles["Admin"] = "ADMIN";
    Roles["SuperAdmin"] = "SUPERADMIN";
})(Roles || (Roles = {}));
//OBJECT
const roles = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2
};
console.log(roles.Admin);
