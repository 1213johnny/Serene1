namespace Serene1.Default {
    export interface AnnouncementRow {
        Oid?: number;
        ServiceCode?: string;
        AnnounceType?: string;
        AnnounceDesc?: string;
        AnnouncePriority?: string;
        TargetRoleIds?: string;
        TargetUserIds?: string;
        ReleaseDate?: string;
        Attachments?: string;
        Createuser?: number;
        Createdate?: string;
        Updateuser?: number;
        Updatedate?: string;
        DetailList?: AnnouncementDetailRow[];
    }

    export namespace AnnouncementRow {
        export const idProperty = 'Oid';
        export const nameProperty = 'ServiceCode';
        export const localTextPrefix = 'Default.Announcement';
        export const deletePermission = 'Default:Announcement:Delete';
        export const insertPermission = 'Default:Announcement:Add';
        export const readPermission = 'Default:Announcement:View';
        export const updatePermission = 'Default:Announcement:Modify';

        export declare const enum Fields {
            Oid = "Oid",
            ServiceCode = "ServiceCode",
            AnnounceType = "AnnounceType",
            AnnounceDesc = "AnnounceDesc",
            AnnouncePriority = "AnnouncePriority",
            TargetRoleIds = "TargetRoleIds",
            TargetUserIds = "TargetUserIds",
            ReleaseDate = "ReleaseDate",
            Attachments = "Attachments",
            Createuser = "Createuser",
            Createdate = "Createdate",
            Updateuser = "Updateuser",
            Updatedate = "Updatedate",
            DetailList = "DetailList"
        }
    }
}
