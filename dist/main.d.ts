export interface CreateComputeCluster {
    name: ComputeClusterRef;
}
export interface DeleteComputeCluster {
    name: ComputeClusterRef;
}
export declare type ComputeClusterRef = string;
export interface ComputeCluster {
}
export interface UIState {
    tables?: {
        [key: string]: Table;
    };
    schemas?: {
        [key: string]: Schema;
    };
    users?: {
        [key: string]: User;
    };
    roles?: {
        [key: string]: Role;
    };
}
export interface UIGetState {
}
export interface AuthLoginRequest {
    account: string;
    user: UserRef;
    password: string;
}
export interface AuthLoginResponse {
    token?: string;
}
export interface TxnRequest {
    commands: Command[];
}
export interface TxnResponse {
    results: (TxnResult | undefined)[];
}
export interface QueryRequest {
    query: string;
}
export interface CreateUser {
    user: UserRef;
    password: string;
}
export interface GetUser {
    user: UserRef;
}
export interface DeleteUser {
    user: UserRef;
}
export interface AssignUserRoles {
    user: UserRef;
    roles: RoleRef[];
}
export interface CreateRole {
    role: RoleRef;
}
export interface DeleteRole {
    role: RoleRef;
}
export interface GrantSchemaPermissions {
    role: RoleRef;
    schema: SchemaRef;
    permissions: SchemaPermissions;
}
export interface GrantGlobalSchemaPermissions {
    role: RoleRef;
    permissions: SchemaPermissions;
}
export interface GrantComputeClusterPermissions {
    role: RoleRef;
    compute_cluster: ComputeClusterRef;
    permissions: ComputeClusterPermissions;
}
export interface GrantGlobalComputeClusterPermissions {
    role: RoleRef;
    permissions: ComputeClusterPermissions;
}
export interface GrantDatabasePermissions {
    role: RoleRef;
    permissions: DatabasePermissions;
}
export declare enum DatabasePermissions {
    NONE = 0,
    MANAGE_ROLES = 1,
    MANAGE_SCHEMAS = 2,
    MANAGE_COMPUTE_CLUSTERS = 4,
    ALL = 4294967295
}
export declare enum SchemaPermissions {
    NONE = 0,
    MANAGE_ACCESS = 1,
    MANAGE_TABLES = 2,
    WRITE_TABLE = 4,
    READ_TABLE = 8,
    ALL = 4294967295
}
export declare enum ComputeClusterPermissions {
    NONE = 0,
    USE = 1,
    ALL = 4294967295
}
export declare type UserRef = string;
export declare type RoleRef = string;
export interface User {
    roles?: RoleRef[];
}
export interface Role {
    database_permissions?: DatabasePermissions;
    global_schema_permissions?: SchemaPermissions;
    schema_permissions?: {
        [key: string]: SchemaPermissions;
    };
    global_compute_cluster_permissions?: ComputeClusterPermissions;
    compute_cluster_permissions?: {
        [key: string]: ComputeClusterPermissions;
    };
}
export interface CreateSchema {
    name: SchemaRef;
}
export interface DeleteSchema {
    name: SchemaRef;
}
export declare type SchemaRef = string;
export interface Schema {
    tables: string[];
}
export interface CreateTable {
    table: TableRef;
    table_def: Table;
}
export interface GetTable {
    table: TableRef;
}
export interface AlterTable {
    table: TableRef;
    new_columns?: Column[];
}
export interface DeleteTable {
    table: TableRef;
}
export interface InsertData {
    table: TableRef;
    data_ref: string;
}
export interface TableRef {
    schema: SchemaRef;
    name: string;
}
export declare enum ColumnType {
    Int64 = "Int64",
    String = "String",
    Timestamp = "Timestamp"
}
export interface Column {
    name: string;
    ty: ColumnType;
    nullable: boolean;
}
export interface Table {
    columns: Column[];
    sort_key: (string | undefined);
}
export declare type TxnResult = ((ComputeCluster & {
    type: 'ComputeCluster';
}) | (UIState & {
    type: 'UIState';
}) | (User & {
    type: 'User';
}) | (Role & {
    type: 'Role';
}) | (Schema & {
    type: 'Schema';
}) | (Table & {
    type: 'Table';
}));
export declare type Command = ((CreateComputeCluster & {
    type: 'CreateComputeCluster';
}) | (DeleteComputeCluster & {
    type: 'DeleteComputeCluster';
}) | (UIGetState & {
    type: 'UIGetState';
}) | (CreateUser & {
    type: 'CreateUser';
}) | (GetUser & {
    type: 'GetUser';
}) | (DeleteUser & {
    type: 'DeleteUser';
}) | (AssignUserRoles & {
    type: 'AssignUserRoles';
}) | (CreateRole & {
    type: 'CreateRole';
}) | (DeleteRole & {
    type: 'DeleteRole';
}) | (GrantSchemaPermissions & {
    type: 'GrantSchemaPermissions';
}) | (GrantGlobalSchemaPermissions & {
    type: 'GrantGlobalSchemaPermissions';
}) | (GrantComputeClusterPermissions & {
    type: 'GrantComputeClusterPermissions';
}) | (GrantGlobalComputeClusterPermissions & {
    type: 'GrantGlobalComputeClusterPermissions';
}) | (GrantDatabasePermissions & {
    type: 'GrantDatabasePermissions';
}) | (CreateSchema & {
    type: 'CreateSchema';
}) | (DeleteSchema & {
    type: 'DeleteSchema';
}) | (CreateTable & {
    type: 'CreateTable';
}) | (GetTable & {
    type: 'GetTable';
}) | (AlterTable & {
    type: 'AlterTable';
}) | (DeleteTable & {
    type: 'DeleteTable';
}) | (InsertData & {
    type: 'InsertData';
}));
