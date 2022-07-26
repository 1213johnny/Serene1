namespace Serene1.Default {
    export interface CaseServiceDataRow {
        Oid?: number;
        CaseNo?: string;
        PatientId?: string;
        RocId?: string;
        CreateDate?: string;
        CreateUser?: number;
        UpdateDate?: string;
        UpdateUser?: number;
        CreateUserName?: string;
        UpdateUserName?: string;
    }

    export namespace CaseServiceDataRow {
        export const idProperty = 'Oid';
        export const nameProperty = 'CaseNo';
        export const localTextPrefix = 'Default.CaseServiceData';
        export const lookupKey = 'Lookup.CaseServiceData';

        export function getLookup(): Q.Lookup<CaseServiceDataRow> {
            return Q.getLookup<CaseServiceDataRow>('Lookup.CaseServiceData');
        }
        export const deletePermission = 'Default:EmpQuestionnaire:Delete';
        export const insertPermission = 'Default:EmpQuestionnaire:Add';
        export const readPermission = 'Default:EmpQuestionnaire:View';
        export const updatePermission = 'Default:EmpQuestionnaire:Modify';

        export declare const enum Fields {
            Oid = "Oid",
            CaseNo = "CaseNo",
            PatientId = "PatientId",
            RocId = "RocId",
            CreateDate = "CreateDate",
            CreateUser = "CreateUser",
            UpdateDate = "UpdateDate",
            UpdateUser = "UpdateUser",
            CreateUserName = "CreateUserName",
            UpdateUserName = "UpdateUserName"
        }
    }
}
