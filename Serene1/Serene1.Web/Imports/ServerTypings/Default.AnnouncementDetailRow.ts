namespace Serene1.Default {
    export interface AnnouncementDetailRow {
        Oid?: number;
        AnnouncementsId?: number;
        TargetUser?: string;
        ReplyContent?: string;
        ReplyDate?: string;
        ReplyUser?: string;
        Createuser?: number;
        Createdate?: string;
        Updateuser?: number;
        Updatedate?: string;
    }

    export namespace AnnouncementDetailRow {
        export const idProperty = 'Oid';
        export const nameProperty = 'TargetUser';
        export const localTextPrefix = 'Default.AnnouncementDetail';
        export const deletePermission = 'Default:AnnouncementDetail:Delete';
        export const insertPermission = 'Default:AnnouncementDetail:Add';
        export const readPermission = 'Default:AnnouncementDetail:View';
        export const updatePermission = 'Default:AnnouncementDetail:Modify';

        export declare const enum Fields {
            Oid = "Oid",
            AnnouncementsId = "AnnouncementsId",
            TargetUser = "TargetUser",
            ReplyContent = "ReplyContent",
            ReplyDate = "ReplyDate",
            ReplyUser = "ReplyUser",
            Createuser = "Createuser",
            Createdate = "Createdate",
            Updateuser = "Updateuser",
            Updatedate = "Updatedate"
        }
    }
}
