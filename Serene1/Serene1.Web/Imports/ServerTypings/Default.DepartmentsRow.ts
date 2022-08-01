namespace Serene1.Default {
    export interface DepartmentsRow {
        DeptNo?: string;
        DeptName?: string;
        DeptNameEng?: string;
        Hiddent?: boolean;
    }

    export namespace DepartmentsRow {
        export const idProperty = 'DeptNo';
        export const nameProperty = 'DeptNo';
        export const localTextPrefix = 'Default.Departments';
        export const deletePermission = 'Default:Departments:Delete';
        export const insertPermission = 'Default:Departments:Add';
        export const readPermission = 'Default:Departments:View';
        export const updatePermission = 'Default:Departments:Modify';

        export declare const enum Fields {
            DeptNo = "DeptNo",
            DeptName = "DeptName",
            DeptNameEng = "DeptNameEng",
            Hiddent = "Hiddent"
        }
    }
}
