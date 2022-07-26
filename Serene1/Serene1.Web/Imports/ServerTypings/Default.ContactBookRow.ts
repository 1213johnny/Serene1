namespace Serene1.Default {
    export interface ContactBookRow {
        Oid?: number;
        Caseno?: string;
        Alreadyknow?: number;
        AlreadyknowExpre?: string;
        Advise?: string;
        Advisedate?: string;
        CreateUser?: number;
        CreateDate?: string;
        UpdateUser?: number;
        UpdateDate?: string;
        CreateUserName?: string;
        UpdateUserName?: string;
        Checkbox?: boolean;
    }

    export namespace ContactBookRow {
        export const idProperty = 'Oid';
        export const nameProperty = 'Caseno';
        export const localTextPrefix = 'Default.ContactBook';
        export const deletePermission = 'Default:ContactBook:Delete';
        export const insertPermission = 'Default:ContactBook:Add';
        export const readPermission = 'Default:ContactBook:View';
        export const updatePermission = 'Default:ContactBook:Modify';

        export declare const enum Fields {
            Oid = "Oid",
            Caseno = "Caseno",
            Alreadyknow = "Alreadyknow",
            AlreadyknowExpre = "AlreadyknowExpre",
            Advise = "Advise",
            Advisedate = "Advisedate",
            CreateUser = "CreateUser",
            CreateDate = "CreateDate",
            UpdateUser = "UpdateUser",
            UpdateDate = "UpdateDate",
            CreateUserName = "CreateUserName",
            UpdateUserName = "UpdateUserName",
            Checkbox = "Checkbox"
        }
    }
}
