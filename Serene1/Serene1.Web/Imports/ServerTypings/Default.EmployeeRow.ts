namespace Serene1.Default {
    export interface EmployeeRow {
        Oid?: number;
        EmployeeId?: string;
        EmployeeName?: string;
        EmployeeEngName?: string;
        IdentificationCardNo?: string;
        UnitId?: string;
        DeptType?: string;
        DeptId?: string;
        OrgId?: string;
        PositionId?: string;
        PostType?: string;
        PostId?: string;
        StartDate?: string;
        Sex?: string;
        Birthday?: string;
        CitizenId?: string;
        BloodType?: string;
        CountryId?: string;
        RaceFlag?: string;
        Homeland?: string;
        MarryFlag?: string;
        Educate?: string;
        License?: string;
        PractitionerRegisterFlag?: string;
        Ranks?: string;
        Standard?: string;
        Years?: string;
        Religion?: string;
        Church?: string;
        Address1?: string;
        Address2?: string;
        EmName?: string;
        EmRelation?: string;
        Telephone1?: string;
        Telephone2?: string;
        LeaveDate?: string;
        RetireFlag?: string;
        PatientId?: string;
        Username?: string;
    }

    export namespace EmployeeRow {
        export const idProperty = 'Oid';
        export const nameProperty = 'EmployeeId';
        export const localTextPrefix = 'Default.Employee';
        export const deletePermission = 'Default:Employee:Delete';
        export const insertPermission = 'Default:Employee:Add';
        export const readPermission = 'Default:Employee:View';
        export const updatePermission = 'Default:Employee:Modify';

        export declare const enum Fields {
            Oid = "Oid",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            EmployeeEngName = "EmployeeEngName",
            IdentificationCardNo = "IdentificationCardNo",
            UnitId = "UnitId",
            DeptType = "DeptType",
            DeptId = "DeptId",
            OrgId = "OrgId",
            PositionId = "PositionId",
            PostType = "PostType",
            PostId = "PostId",
            StartDate = "StartDate",
            Sex = "Sex",
            Birthday = "Birthday",
            CitizenId = "CitizenId",
            BloodType = "BloodType",
            CountryId = "CountryId",
            RaceFlag = "RaceFlag",
            Homeland = "Homeland",
            MarryFlag = "MarryFlag",
            Educate = "Educate",
            License = "License",
            PractitionerRegisterFlag = "PractitionerRegisterFlag",
            Ranks = "Ranks",
            Standard = "Standard",
            Years = "Years",
            Religion = "Religion",
            Church = "Church",
            Address1 = "Address1",
            Address2 = "Address2",
            EmName = "EmName",
            EmRelation = "EmRelation",
            Telephone1 = "Telephone1",
            Telephone2 = "Telephone2",
            LeaveDate = "LeaveDate",
            RetireFlag = "RetireFlag",
            PatientId = "PatientId",
            Username = "Username"
        }
    }
}
