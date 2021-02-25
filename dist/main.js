"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnType = exports.ComputeClusterPermissions = exports.SchemaPermissions = exports.DatabasePermissions = void 0;
var DatabasePermissions;
(function (DatabasePermissions) {
    DatabasePermissions[DatabasePermissions["NONE"] = 0] = "NONE";
    DatabasePermissions[DatabasePermissions["MANAGE_ROLES"] = 1] = "MANAGE_ROLES";
    DatabasePermissions[DatabasePermissions["MANAGE_SCHEMAS"] = 2] = "MANAGE_SCHEMAS";
    DatabasePermissions[DatabasePermissions["MANAGE_COMPUTE_CLUSTERS"] = 4] = "MANAGE_COMPUTE_CLUSTERS";
    DatabasePermissions[DatabasePermissions["ALL"] = 4294967295] = "ALL";
})(DatabasePermissions = exports.DatabasePermissions || (exports.DatabasePermissions = {}));
var SchemaPermissions;
(function (SchemaPermissions) {
    SchemaPermissions[SchemaPermissions["NONE"] = 0] = "NONE";
    SchemaPermissions[SchemaPermissions["MANAGE_ACCESS"] = 1] = "MANAGE_ACCESS";
    SchemaPermissions[SchemaPermissions["MANAGE_TABLES"] = 2] = "MANAGE_TABLES";
    SchemaPermissions[SchemaPermissions["WRITE_TABLE"] = 4] = "WRITE_TABLE";
    SchemaPermissions[SchemaPermissions["READ_TABLE"] = 8] = "READ_TABLE";
    SchemaPermissions[SchemaPermissions["ALL"] = 4294967295] = "ALL";
})(SchemaPermissions = exports.SchemaPermissions || (exports.SchemaPermissions = {}));
var ComputeClusterPermissions;
(function (ComputeClusterPermissions) {
    ComputeClusterPermissions[ComputeClusterPermissions["NONE"] = 0] = "NONE";
    ComputeClusterPermissions[ComputeClusterPermissions["USE"] = 1] = "USE";
    ComputeClusterPermissions[ComputeClusterPermissions["ALL"] = 4294967295] = "ALL";
})(ComputeClusterPermissions = exports.ComputeClusterPermissions || (exports.ComputeClusterPermissions = {}));
var ColumnType;
(function (ColumnType) {
    ColumnType["Int64"] = "Int64";
    ColumnType["String"] = "String";
    ColumnType["Timestamp"] = "Timestamp";
})(ColumnType = exports.ColumnType || (exports.ColumnType = {}));
