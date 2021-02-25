export interface CreateComputeCluster {
    type: 'CreateComputeCluster';
    name: ComputeClusterRef;
}
export interface DeleteComputeCluster {
    type: 'DeleteComputeCluster';
    name: ComputeClusterRef;
}
export declare type ComputeClusterRef = string;
export interface ComputeCluster {
    type: 'ComputeCluster';
}
export interface UIState {
    type: 'UIState';
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
    type: 'UIGetState';
}
export interface AuthLoginRequest {
    type: 'AuthLoginRequest';
    account: string;
    user: UserRef;
    password: string;
}
export interface AuthLoginResponse {
    type: 'AuthLoginResponse';
    token?: string;
}
export interface TxnRequest {
    type: 'TxnRequest';
    commands: Command[];
}
export interface TxnResponse {
    type: 'TxnResponse';
    results: (TxnResult | undefined)[];
}
export interface QueryRequest {
    type: 'QueryRequest';
    query: string;
}
export interface CreateUser {
    type: 'CreateUser';
    user: UserRef;
    password: string;
}
export interface GetUser {
    type: 'GetUser';
    user: UserRef;
}
export interface DeleteUser {
    type: 'DeleteUser';
    user: UserRef;
}
export interface AssignUserRoles {
    type: 'AssignUserRoles';
    user: UserRef;
    roles: RoleRef[];
}
export interface CreateRole {
    type: 'CreateRole';
    role: RoleRef;
}
export interface DeleteRole {
    type: 'DeleteRole';
    role: RoleRef;
}
export interface GrantSchemaPermissions {
    type: 'GrantSchemaPermissions';
    role: RoleRef;
    schema: SchemaRef;
    permissions: SchemaPermissions;
}
export interface GrantGlobalSchemaPermissions {
    type: 'GrantGlobalSchemaPermissions';
    role: RoleRef;
    permissions: SchemaPermissions;
}
export interface GrantComputeClusterPermissions {
    type: 'GrantComputeClusterPermissions';
    role: RoleRef;
    compute_cluster: ComputeClusterRef;
    permissions: ComputeClusterPermissions;
}
export interface GrantGlobalComputeClusterPermissions {
    type: 'GrantGlobalComputeClusterPermissions';
    role: RoleRef;
    permissions: ComputeClusterPermissions;
}
export interface GrantDatabasePermissions {
    type: 'GrantDatabasePermissions';
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
    type: 'User';
    roles?: RoleRef[];
}
export interface Role {
    type: 'Role';
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
    type: 'CreateSchema';
    name: SchemaRef;
}
export interface DeleteSchema {
    type: 'DeleteSchema';
    name: SchemaRef;
}
export declare type SchemaRef = string;
export interface Schema {
    type: 'Schema';
    tables: string[];
}
export interface CreateTable {
    type: 'CreateTable';
    table: TableRef;
    table_def: Table;
}
export interface GetTable {
    type: 'GetTable';
    table: TableRef;
}
export interface AlterTable {
    type: 'AlterTable';
    table: TableRef;
    new_columns?: Column[];
}
export interface DeleteTable {
    type: 'DeleteTable';
    table: TableRef;
}
export interface InsertData {
    type: 'InsertData';
    table: TableRef;
    data_ref: string;
}
export interface TableRef {
    type: 'TableRef';
    schema: SchemaRef;
    name: string;
}
export declare enum ColumnType {
    Int64 = "Int64",
    String = "String",
    Timestamp = "Timestamp"
}
export interface Column {
    type: 'Column';
    name: string;
    ty: ColumnType;
    nullable: boolean;
}
export interface Table {
    type: 'Table';
    columns: Column[];
    sort_key: (string | undefined);
}
export declare type TxnResult = (ComputeCluster | UIState | User | Role | Schema | Table);
export declare type Command = (CreateComputeCluster | DeleteComputeCluster | UIGetState | CreateUser | GetUser | DeleteUser | AssignUserRoles | CreateRole | DeleteRole | GrantSchemaPermissions | GrantGlobalSchemaPermissions | GrantComputeClusterPermissions | GrantGlobalComputeClusterPermissions | GrantDatabasePermissions | CreateSchema | DeleteSchema | CreateTable | GetTable | AlterTable | DeleteTable | InsertData);
