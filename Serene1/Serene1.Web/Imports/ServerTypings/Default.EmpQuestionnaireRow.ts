namespace Serene1.Default {
    export interface EmpQuestionnaireRow {
        Oid?: string;
        EmpNo?: string;
        QDate?: string;
        Age?: number;
        Height?: number;
        Weight?: number;
        Sex?: string;
        EmpLanguage?: string;
        EmpBody?: string;
        EmpWorkYear?: string;
        EmpTimePhase?: string;
        EmpArea?: string;
        EmpServiceLevel?: string;
        EmpSkill?: string;
        EmpDriverLicense?: string;
        EmpEmt1License?: string;
        EmpEffectiveDate?: string;
        UpdateDate?: string;
        UpdateUser?: number;
    }

    export namespace EmpQuestionnaireRow {
        export const idProperty = 'Oid';
        export const nameProperty = 'Oid';
        export const localTextPrefix = 'Default.EmpQuestionnaire';
        export const deletePermission = 'Default:EmpQuestionnaire:Delete';
        export const insertPermission = 'Default:EmpQuestionnaire:Add';
        export const readPermission = 'Default:EmpQuestionnaire:View';
        export const updatePermission = 'Default:EmpQuestionnaire:Modify';

        export declare const enum Fields {
            Oid = "Oid",
            EmpNo = "EmpNo",
            QDate = "QDate",
            Age = "Age",
            Height = "Height",
            Weight = "Weight",
            Sex = "Sex",
            EmpLanguage = "EmpLanguage",
            EmpBody = "EmpBody",
            EmpWorkYear = "EmpWorkYear",
            EmpTimePhase = "EmpTimePhase",
            EmpArea = "EmpArea",
            EmpServiceLevel = "EmpServiceLevel",
            EmpSkill = "EmpSkill",
            EmpDriverLicense = "EmpDriverLicense",
            EmpEmt1License = "EmpEmt1License",
            EmpEffectiveDate = "EmpEffectiveDate",
            UpdateDate = "UpdateDate",
            UpdateUser = "UpdateUser"
        }
    }
}
