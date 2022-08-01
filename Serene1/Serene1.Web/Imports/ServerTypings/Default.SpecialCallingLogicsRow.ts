namespace Serene1.Default {
    export interface SpecialCallingLogicsRow {
        Id?: string;
        PackageName?: string;
        SpecialStatus?: number;
        Seq?: number;
        RagulerCount?: number;
        CallCount?: number;
        OldAge?: number;
    }

    export namespace SpecialCallingLogicsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'PackageName';
        export const localTextPrefix = 'Default.SpecialCallingLogics';
        export const deletePermission = 'Default:SpecialCallingLogics:Delete';
        export const insertPermission = 'Default:SpecialCallingLogics:Add';
        export const readPermission = 'Default:SpecialCallingLogics:View';
        export const updatePermission = 'Default:SpecialCallingLogics:Modify';

        export declare const enum Fields {
            Id = "Id",
            PackageName = "PackageName",
            SpecialStatus = "SpecialStatus",
            Seq = "Seq",
            RagulerCount = "RagulerCount",
            CallCount = "CallCount",
            OldAge = "OldAge"
        }
    }
}
