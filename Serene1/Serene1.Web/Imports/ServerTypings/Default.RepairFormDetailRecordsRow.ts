namespace Serene1.Default {
    export interface RepairFormDetailRecordsRow {
        Oid?: number;
        RepairFormRecordsId?: number;
        UseMaterial?: string;
        UseMaterialCount?: number;
        MaterialAmount?: number;
        SubsidyAmount?: number;
        PayAmount?: number;
        Createuser?: number;
        Createdate?: string;
        Updateuser?: number;
        Updatedate?: string;
    }

    export namespace RepairFormDetailRecordsRow {
        export const idProperty = 'Oid';
        export const nameProperty = 'UseMaterial';
        export const localTextPrefix = 'Default.RepairFormDetailRecords';
        export const deletePermission = 'Default:RepairFormDetailRecords:Delete';
        export const insertPermission = 'Default:RepairFormDetailRecords:Add';
        export const readPermission = 'Default:RepairFormDetailRecords:View';
        export const updatePermission = 'Default:RepairFormDetailRecords:Modify';

        export declare const enum Fields {
            Oid = "Oid",
            RepairFormRecordsId = "RepairFormRecordsId",
            UseMaterial = "UseMaterial",
            UseMaterialCount = "UseMaterialCount",
            MaterialAmount = "MaterialAmount",
            SubsidyAmount = "SubsidyAmount",
            PayAmount = "PayAmount",
            Createuser = "Createuser",
            Createdate = "Createdate",
            Updateuser = "Updateuser",
            Updatedate = "Updatedate"
        }
    }
}
