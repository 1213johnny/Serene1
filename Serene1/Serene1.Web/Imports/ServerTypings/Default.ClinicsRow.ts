namespace Serene1.Default {
    export interface ClinicsRow {
        DeptNo?: string;
        ClinicNo?: string;
        ClinicName?: string;
        ClinicNameEng?: string;
    }

    export namespace ClinicsRow {
        export const idProperty = 'DeptNo';
        export const nameProperty = 'DeptNo';
        export const localTextPrefix = 'Default.Clinics';
        export const deletePermission = 'Default:Clinics:Delete';
        export const insertPermission = 'Default:Clinics:Add';
        export const readPermission = 'Default:Clinics:View';
        export const updatePermission = 'Default:Clinics:Modify';

        export declare const enum Fields {
            DeptNo = "DeptNo",
            ClinicNo = "ClinicNo",
            ClinicName = "ClinicName",
            ClinicNameEng = "ClinicNameEng"
        }
    }
}
