namespace Serene1.Default {
    export interface RepairFormRecordsRow {
        Oid?: number;
        CaseNo?: string;
        RepairDate?: string;
        Township?: string;
        Area?: string;
        SubsidySource?: string;
        AssistiveSource?: string;
        ItemName?: string;
        MaterialNo?: string;
        ServiceType?: string;
        ServiceCount?: number;
        EvalutionLevel?: string;
        HandlingPlace?: string;
        Place?: string;
        RepairRecord?: string;
        RepairEmpId?: string;
        Createuser?: number;
        Createdate?: string;
        Updateuser?: number;
        Updatedate?: string;
        DetailList?: RepairFormDetailRecordsRow[];
    }

    export namespace RepairFormRecordsRow {
        export const idProperty = 'Oid';
        export const nameProperty = 'CaseNo';
        export const localTextPrefix = 'Default.RepairFormRecords';
        export const deletePermission = 'Default:RepairFormRecords:Delete';
        export const insertPermission = 'Default:RepairFormRecords:Add';
        export const readPermission = 'Default:RepairFormRecords:View';
        export const updatePermission = 'Default:RepairFormRecords:Modify';

        export declare const enum Fields {
            Oid = "Oid",
            CaseNo = "CaseNo",
            RepairDate = "RepairDate",
            Township = "Township",
            Area = "Area",
            SubsidySource = "SubsidySource",
            AssistiveSource = "AssistiveSource",
            ItemName = "ItemName",
            MaterialNo = "MaterialNo",
            ServiceType = "ServiceType",
            ServiceCount = "ServiceCount",
            EvalutionLevel = "EvalutionLevel",
            HandlingPlace = "HandlingPlace",
            Place = "Place",
            RepairRecord = "RepairRecord",
            RepairEmpId = "RepairEmpId",
            Createuser = "Createuser",
            Createdate = "Createdate",
            Updateuser = "Updateuser",
            Updatedate = "Updatedate",
            DetailList = "DetailList"
        }
    }
}
