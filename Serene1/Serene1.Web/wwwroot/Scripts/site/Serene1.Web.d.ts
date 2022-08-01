/// <reference types="serenity.corelib" />
/// <reference types="jquery" />
/// <reference types="jquery.blockui" />
/// <reference types="jquery.validation" />
/// <reference types="jqueryui" />
/// <reference types="serenity.pro.ui" />
/// <reference types="serenity.pro.extensions" />
declare namespace Serene1.Administration {
    class LanguageColumns {
        static columnsKey: string;
    }
}
declare namespace Serene1.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace Serene1.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace Serene1.Administration {
    namespace PermissionKeys {
        const Security = "Administration:Security";
        const Translation = "Administration:Translation";
    }
}
declare namespace Serene1.Administration {
    class RoleColumns {
        static columnsKey: string;
    }
}
declare namespace Serene1.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Serene1.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace Serene1.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace Serene1.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace Serene1.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace Serene1.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace Serene1.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace Serene1.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace Serene1.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace Serene1.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace Serene1.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace Serene1.Administration {
    class UserColumns {
        static columnsKey: string;
    }
}
declare namespace Serene1.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Serene1.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace Serene1.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace Serene1.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace Serene1.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace Serene1.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace Serene1.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace Serene1.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace Serene1.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace Serene1.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Serene1.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace Serene1.Default {
    class AnnouncementColumns {
        static columnsKey: string;
    }
}
declare namespace Serene1.Default {
    class AnnouncementColumnsCustom {
        static columnsKey: string;
    }
}
declare namespace Serene1.Default {
    class AnnouncementDetailColumns {
        static columnsKey: string;
    }
}
declare namespace Serene1.Default {
    interface AnnouncementDetailForm {
        AnnouncementsId: Serenity.IntegerEditor;
        TargetUser: Serenity.StringEditor;
        ReplyContent: Serenity.StringEditor;
        ReplyDate: Serenity.DateEditor;
        ReplyUser: Serenity.StringEditor;
        Createuser: Serenity.IntegerEditor;
        Createdate: Serenity.DateEditor;
        Updateuser: Serenity.IntegerEditor;
        Updatedate: Serenity.DateEditor;
    }
    class AnnouncementDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Default {
    interface AnnouncementDetailFormCustom {
        TargetUser: Serenity.StringEditor;
    }
    class AnnouncementDetailFormCustom extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Default {
    interface AnnouncementDetailRow {
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
    namespace AnnouncementDetailRow {
        const idProperty = "Oid";
        const nameProperty = "TargetUser";
        const localTextPrefix = "Default.AnnouncementDetail";
        const deletePermission = "Default:AnnouncementDetail:Delete";
        const insertPermission = "Default:AnnouncementDetail:Add";
        const readPermission = "Default:AnnouncementDetail:View";
        const updatePermission = "Default:AnnouncementDetail:Modify";
        const enum Fields {
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
declare namespace Serene1.Default {
    namespace AnnouncementDetailService {
        const baseUrl = "Default/AnnouncementDetail";
        function Create(request: Serenity.SaveRequest<AnnouncementDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AnnouncementDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AnnouncementDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AnnouncementDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/AnnouncementDetail/Create",
            Update = "Default/AnnouncementDetail/Update",
            Delete = "Default/AnnouncementDetail/Delete",
            Retrieve = "Default/AnnouncementDetail/Retrieve",
            List = "Default/AnnouncementDetail/List"
        }
    }
}
declare namespace Serene1.Default {
    interface AnnouncementForm {
        ServiceCode: Serenity.StringEditor;
        AnnounceType: Serenity.StringEditor;
        AnnounceDesc: Serenity.StringEditor;
        AnnouncePriority: Serenity.StringEditor;
        TargetRoleIds: Serenity.StringEditor;
        TargetUserIds: Serenity.StringEditor;
        ReleaseDate: Serenity.DateEditor;
        Attachments: Serenity.StringEditor;
        Createuser: Serenity.IntegerEditor;
        Createdate: Serenity.DateEditor;
        Updateuser: Serenity.IntegerEditor;
        Updatedate: Serenity.DateEditor;
    }
    class AnnouncementForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Default {
    interface AnnouncementFormCustom {
        ServiceCode: Serenity.StringEditor;
        AnnounceType: Serenity.StringEditor;
        AnnounceDesc: Serenity.StringEditor;
        AnnouncePriority: Serenity.StringEditor;
        TargetRoleIds: Serenity.StringEditor;
        TargetUserIds: Serenity.StringEditor;
        ReleaseDate: Serenity.DateEditor;
        Attachments: Serenity.StringEditor;
        DetailList: AnnouncementGridEditor;
    }
    class AnnouncementFormCustom extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Default {
    interface AnnouncementRow {
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
    namespace AnnouncementRow {
        const idProperty = "Oid";
        const nameProperty = "ServiceCode";
        const localTextPrefix = "Default.Announcement";
        const deletePermission = "Default:Announcement:Delete";
        const insertPermission = "Default:Announcement:Add";
        const readPermission = "Default:Announcement:View";
        const updatePermission = "Default:Announcement:Modify";
        const enum Fields {
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
declare namespace Serene1.Default {
    namespace AnnouncementService {
        const baseUrl = "Default/Announcement";
        function Create(request: Serenity.SaveRequest<AnnouncementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AnnouncementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AnnouncementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AnnouncementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Announcement/Create",
            Update = "Default/Announcement/Update",
            Delete = "Default/Announcement/Delete",
            Retrieve = "Default/Announcement/Retrieve",
            List = "Default/Announcement/List"
        }
    }
}
declare namespace Serene1.Default {
    class AnnounncementDetailColumnsCustom1 {
        static columnsKey: string;
    }
}
declare namespace Serene1.Default {
    class CaseServiceDataColumns {
        static columnsKey: string;
    }
}
declare namespace Serene1.Default {
    class CaseServiceDataColumnsCustom {
        static columnsKey: string;
    }
}
declare namespace Serene1.Default {
    interface CaseServiceDataForm {
        CaseNo: Serenity.StringEditor;
        PatientId: Serenity.StringEditor;
        RocId: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
        CreateUser: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUser: Serenity.IntegerEditor;
    }
    class CaseServiceDataForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Default {
    interface CaseServiceDataFormCustom {
        CaseNo: Serenity.StringEditor;
        PatientId: Serenity.StringEditor;
        RocId: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
        CreateUser: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUser: Serenity.IntegerEditor;
    }
    class CaseServiceDataFormCustom extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Default {
    interface CaseServiceDataRow {
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
    namespace CaseServiceDataRow {
        const idProperty = "Oid";
        const nameProperty = "CaseNo";
        const localTextPrefix = "Default.CaseServiceData";
        const lookupKey = "Lookup.CaseServiceData";
        function getLookup(): Q.Lookup<CaseServiceDataRow>;
        const deletePermission = "Default:EmpQuestionnaire:Delete";
        const insertPermission = "Default:EmpQuestionnaire:Add";
        const readPermission = "Default:EmpQuestionnaire:View";
        const updatePermission = "Default:EmpQuestionnaire:Modify";
        const enum Fields {
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
declare namespace Serene1.Default {
    namespace CaseServiceDataService {
        const baseUrl = "Default/CaseServiceData";
        function Create(request: Serenity.SaveRequest<CaseServiceDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CaseServiceDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CaseServiceDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CaseServiceDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/CaseServiceData/Create",
            Update = "Default/CaseServiceData/Update",
            Delete = "Default/CaseServiceData/Delete",
            Retrieve = "Default/CaseServiceData/Retrieve",
            List = "Default/CaseServiceData/List"
        }
    }
}
declare namespace Serene1.Default {
    class ClinicsColumns {
        static columnsKey: string;
    }
}
declare namespace Serene1.Default {
    interface ClinicsForm {
        DeptNo: Serenity.StringEditor;
        ClinicNo: Serenity.StringEditor;
        ClinicName: Serenity.StringEditor;
        ClinicNameEng: Serenity.StringEditor;
    }
    class ClinicsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Default {
    interface ClinicsRow {
        DeptNo?: string;
        ClinicNo?: string;
        ClinicName?: string;
        ClinicNameEng?: string;
    }
    namespace ClinicsRow {
        const idProperty = "DeptNo";
        const nameProperty = "DeptNo";
        const localTextPrefix = "Default.Clinics";
        const deletePermission = "Default:Clinics:Delete";
        const insertPermission = "Default:Clinics:Add";
        const readPermission = "Default:Clinics:View";
        const updatePermission = "Default:Clinics:Modify";
        const enum Fields {
            DeptNo = "DeptNo",
            ClinicNo = "ClinicNo",
            ClinicName = "ClinicName",
            ClinicNameEng = "ClinicNameEng"
        }
    }
}
declare namespace Serene1.Default {
    namespace ClinicsService {
        const baseUrl = "Default/Clinics";
        function Create(request: Serenity.SaveRequest<ClinicsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ClinicsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClinicsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClinicsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Clinics/Create",
            Update = "Default/Clinics/Update",
            Delete = "Default/Clinics/Delete",
            Retrieve = "Default/Clinics/Retrieve",
            List = "Default/Clinics/List"
        }
    }
}
declare namespace Serene1.Default {
    class ContactBookColumns {
        static columnsKey: string;
    }
}
declare namespace Serene1.Default {
    class ContactBookColumnsCustom {
        static columnsKey: string;
    }
}
declare namespace Serene1.Default {
    interface ContactBookForm {
        Caseno: Editor.LookUpEditor;
        Alreadyknow: Editor.AlreadyKnowEditor;
        Advise: Serenity.StringEditor;
        Advisedate: Serenity.DateEditor;
    }
    class ContactBookForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Default {
    interface ContactBookFormCustom {
        Caseno: Editor.LookUpEditor;
        Advisedate: Serenity.DateEditor;
        Advise: Serenity.TextAreaEditor;
        Alreadyknow: Editor.AlreadyKnowEditor;
        Checkbox: Serenity.BooleanEditor;
    }
    class ContactBookFormCustom extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Default {
    interface ContactBookFormCustom1 {
        Advise: Serenity.TextAreaEditor;
        ShowText: Serenity.StringEditor;
        Alreadyknow: Editor.AlreadyKnowEditor;
    }
    class ContactBookFormCustom1 extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Default {
    interface ContactBookRow {
        Oid?: number;
        Caseno?: string;
        Alreadyknow?: number;
        AlreadyknowExpre?: string;
        Advise?: string;
        Advisedate?: string;
        CreateUser?: number;
        CreateDate?: string;
        UpdateUser?: number;
        UpdateDate?: string;
        CreateUserName?: string;
        UpdateUserName?: string;
        Checkbox?: boolean;
    }
    namespace ContactBookRow {
        const idProperty = "Oid";
        const nameProperty = "Caseno";
        const localTextPrefix = "Default.ContactBook";
        const deletePermission = "Default:ContactBook:Delete";
        const insertPermission = "Default:ContactBook:Add";
        const readPermission = "Default:ContactBook:View";
        const updatePermission = "Default:ContactBook:Modify";
        const enum Fields {
            Oid = "Oid",
            Caseno = "Caseno",
            Alreadyknow = "Alreadyknow",
            AlreadyknowExpre = "AlreadyknowExpre",
            Advise = "Advise",
            Advisedate = "Advisedate",
            CreateUser = "CreateUser",
            CreateDate = "CreateDate",
            UpdateUser = "UpdateUser",
            UpdateDate = "UpdateDate",
            CreateUserName = "CreateUserName",
            UpdateUserName = "UpdateUserName",
            Checkbox = "Checkbox"
        }
    }
}
declare namespace Serene1.Default {
    namespace ContactBookService {
        const baseUrl = "Default/ContactBook";
        function Create(request: Serenity.SaveRequest<ContactBookRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ContactBookRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ContactBookRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ContactBookRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/ContactBook/Create",
            Update = "Default/ContactBook/Update",
            Delete = "Default/ContactBook/Delete",
            Retrieve = "Default/ContactBook/Retrieve",
            List = "Default/ContactBook/List"
        }
    }
}
declare namespace Serene1.Default {
    class DepartmentsColumns {
        static columnsKey: string;
    }
}
declare namespace Serene1.Default {
    interface DepartmentsForm {
        DeptNo: Serenity.StringEditor;
        DeptName: Serenity.StringEditor;
        DeptNameEng: Serenity.StringEditor;
        Hiddent: Serenity.BooleanEditor;
    }
    class DepartmentsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Default {
    interface DepartmentsRow {
        DeptNo?: string;
        DeptName?: string;
        DeptNameEng?: string;
        Hiddent?: boolean;
    }
    namespace DepartmentsRow {
        const idProperty = "DeptNo";
        const nameProperty = "DeptNo";
        const localTextPrefix = "Default.Departments";
        const deletePermission = "Default:Departments:Delete";
        const insertPermission = "Default:Departments:Add";
        const readPermission = "Default:Departments:View";
        const updatePermission = "Default:Departments:Modify";
        const enum Fields {
            DeptNo = "DeptNo",
            DeptName = "DeptName",
            DeptNameEng = "DeptNameEng",
            Hiddent = "Hiddent"
        }
    }
}
declare namespace Serene1.Default {
    namespace DepartmentsService {
        const baseUrl = "Default/Departments";
        function Create(request: Serenity.SaveRequest<DepartmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DepartmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DepartmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DepartmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Departments/Create",
            Update = "Default/Departments/Update",
            Delete = "Default/Departments/Delete",
            Retrieve = "Default/Departments/Retrieve",
            List = "Default/Departments/List"
        }
    }
}
declare namespace Serene1.Default {
    class EmpQuestionnaireColumns {
        static columnsKey: string;
    }
}
declare namespace Serene1.Default {
    interface EmpQuestionnaireForm {
        Age: Serenity.IntegerEditor;
        Height: Serenity.IntegerEditor;
        Weight: Serenity.IntegerEditor;
        Sex: Editor.SexEditor;
        EmpLanguage: Editor.LanguageEditor;
        EmpBody: Editor.BodyEditor;
        EmpWorkYear: Editor.WorkYearEditor;
        EmpTimePhase: Editor.PhaseEditor;
        EmpArea: Editor.AreaEditor;
        EmpServiceLevel: Editor.LevelEditor;
        EmpNo: Serenity.StringEditor;
        QDate: Serenity.DateEditor;
    }
    class EmpQuestionnaireForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Default {
    interface EmpQuestionnaireRow {
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
    namespace EmpQuestionnaireRow {
        const idProperty = "Oid";
        const nameProperty = "Oid";
        const localTextPrefix = "Default.EmpQuestionnaire";
        const deletePermission = "Default:EmpQuestionnaire:Delete";
        const insertPermission = "Default:EmpQuestionnaire:Add";
        const readPermission = "Default:EmpQuestionnaire:View";
        const updatePermission = "Default:EmpQuestionnaire:Modify";
        const enum Fields {
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
declare namespace Serene1.Default {
    namespace EmpQuestionnaireService {
        const baseUrl = "Default/EmpQuestionnaire";
        function Create(request: Serenity.SaveRequest<EmpQuestionnaireRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmpQuestionnaireRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmpQuestionnaireRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmpQuestionnaireRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/EmpQuestionnaire/Create",
            Update = "Default/EmpQuestionnaire/Update",
            Delete = "Default/EmpQuestionnaire/Delete",
            Retrieve = "Default/EmpQuestionnaire/Retrieve",
            List = "Default/EmpQuestionnaire/List"
        }
    }
}
declare namespace Serene1.Default {
    class EmployeeColumns {
        static columnsKey: string;
    }
}
declare namespace Serene1.Default {
    interface EmployeeForm {
        EmployeeId: Serenity.StringEditor;
        EmployeeName: Serenity.StringEditor;
        EmployeeEngName: Serenity.StringEditor;
        IdentificationCardNo: Serenity.StringEditor;
        UnitId: Serenity.StringEditor;
        DeptType: Serenity.StringEditor;
        DeptId: Serenity.StringEditor;
        OrgId: Serenity.StringEditor;
        PositionId: Serenity.StringEditor;
        PostType: Serenity.StringEditor;
        PostId: Serenity.StringEditor;
        StartDate: Serenity.DateEditor;
        Sex: Serenity.StringEditor;
        Birthday: Serenity.DateEditor;
        CitizenId: Serenity.StringEditor;
        BloodType: Serenity.StringEditor;
        CountryId: Serenity.StringEditor;
        RaceFlag: Serenity.StringEditor;
        Homeland: Serenity.StringEditor;
        MarryFlag: Serenity.StringEditor;
        Educate: Serenity.StringEditor;
        License: Serenity.StringEditor;
        PractitionerRegisterFlag: Serenity.StringEditor;
        Ranks: Serenity.StringEditor;
        Standard: Serenity.StringEditor;
        Years: Serenity.StringEditor;
        Religion: Serenity.StringEditor;
        Church: Serenity.StringEditor;
        Address1: Serenity.StringEditor;
        Address2: Serenity.StringEditor;
        EmName: Serenity.StringEditor;
        EmRelation: Serenity.StringEditor;
        Telephone1: Serenity.StringEditor;
        Telephone2: Serenity.StringEditor;
        LeaveDate: Serenity.StringEditor;
        RetireFlag: Serenity.StringEditor;
        PatientId: Serenity.StringEditor;
        Username: Serenity.StringEditor;
    }
    class EmployeeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Default {
    interface EmployeeRow {
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
    namespace EmployeeRow {
        const idProperty = "Oid";
        const nameProperty = "EmployeeId";
        const localTextPrefix = "Default.Employee";
        const deletePermission = "Default:Employee:Delete";
        const insertPermission = "Default:Employee:Add";
        const readPermission = "Default:Employee:View";
        const updatePermission = "Default:Employee:Modify";
        const enum Fields {
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
declare namespace Serene1.Default {
    namespace EmployeeService {
        const baseUrl = "Default/Employee";
        function Create(request: Serenity.SaveRequest<EmployeeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Employee/Create",
            Update = "Default/Employee/Update",
            Delete = "Default/Employee/Delete",
            Retrieve = "Default/Employee/Retrieve",
            List = "Default/Employee/List"
        }
    }
}
declare namespace Serene1.Default {
    class RepairFormDetailRecordsColumns {
        static columnsKey: string;
    }
}
declare namespace Serene1.Default {
    class RepairFormDetailRecordsColumnsCustom {
        static columnsKey: string;
    }
}
declare namespace Serene1.Default {
    interface RepairFormDetailRecordsForm {
        RepairFormRecordsId: Serenity.IntegerEditor;
        UseMaterial: Serenity.StringEditor;
        UseMaterialCount: Serenity.IntegerEditor;
        MaterialAmount: Serenity.DecimalEditor;
        SubsidyAmount: Serenity.DecimalEditor;
        PayAmount: Serenity.DecimalEditor;
        Createuser: Serenity.IntegerEditor;
        Createdate: Serenity.DateEditor;
        Updateuser: Serenity.IntegerEditor;
        Updatedate: Serenity.DateEditor;
    }
    class RepairFormDetailRecordsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Default {
    interface RepairFormDetailRecordsFormCustom {
        UseMaterial: Serenity.StringEditor;
        MaterialAmount: Serenity.DecimalEditor;
        SubsidyAmount: Serenity.DecimalEditor;
        Updateuser: Serenity.StringEditor;
    }
    class RepairFormDetailRecordsFormCustom extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Default {
    interface RepairFormDetailRecordsRow {
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
    namespace RepairFormDetailRecordsRow {
        const idProperty = "Oid";
        const nameProperty = "UseMaterial";
        const localTextPrefix = "Default.RepairFormDetailRecords";
        const deletePermission = "Default:RepairFormDetailRecords:Delete";
        const insertPermission = "Default:RepairFormDetailRecords:Add";
        const readPermission = "Default:RepairFormDetailRecords:View";
        const updatePermission = "Default:RepairFormDetailRecords:Modify";
        const enum Fields {
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
declare namespace Serene1.Default {
    namespace RepairFormDetailRecordsService {
        const baseUrl = "Default/RepairFormDetailRecords";
        function Create(request: Serenity.SaveRequest<RepairFormDetailRecordsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RepairFormDetailRecordsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RepairFormDetailRecordsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RepairFormDetailRecordsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/RepairFormDetailRecords/Create",
            Update = "Default/RepairFormDetailRecords/Update",
            Delete = "Default/RepairFormDetailRecords/Delete",
            Retrieve = "Default/RepairFormDetailRecords/Retrieve",
            List = "Default/RepairFormDetailRecords/List"
        }
    }
}
declare namespace Serene1.Default {
    class RepairFormRecordsColumns {
        static columnsKey: string;
    }
}
declare namespace Serene1.Default {
    class RepairFormRecordsColumnsCustom {
        static columnsKey: string;
    }
}
declare namespace Serene1.Default {
    interface RepairFormRecordsForm {
        CaseNo: Serenity.StringEditor;
        RepairDate: Serenity.DateEditor;
        Township: Serenity.StringEditor;
        Area: Serenity.StringEditor;
        SubsidySource: Serenity.StringEditor;
        AssistiveSource: Serenity.StringEditor;
        ItemName: Serenity.StringEditor;
        MaterialNo: Serenity.StringEditor;
        ServiceType: Serenity.StringEditor;
        ServiceCount: Serenity.IntegerEditor;
        EvalutionLevel: Serenity.StringEditor;
        HandlingPlace: Serenity.StringEditor;
        Place: Serenity.StringEditor;
        RepairRecord: Serenity.StringEditor;
        RepairEmpId: Serenity.StringEditor;
        Createuser: Serenity.IntegerEditor;
        Createdate: Serenity.DateEditor;
        Updateuser: Serenity.IntegerEditor;
        Updatedate: Serenity.DateEditor;
    }
    class RepairFormRecordsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Default {
    interface RepairFormRecordsFormCustom {
        CaseNo: Serenity.StringEditor;
        RepairDate: Serenity.DateEditor;
        Township: Serenity.StringEditor;
        Area: Serenity.StringEditor;
        SubsidySource: Serenity.StringEditor;
        AssistiveSource: Serenity.StringEditor;
        ItemName: Serenity.StringEditor;
        MaterialNo: Serenity.StringEditor;
        ServiceType: Serenity.StringEditor;
        ServiceCount: Serenity.IntegerEditor;
        EvalutionLevel: Serenity.StringEditor;
        HandlingPlace: Serenity.StringEditor;
        RepairEmpId: Serenity.StringEditor;
        DetailList: RepairFormRecordsGridEditor;
    }
    class RepairFormRecordsFormCustom extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Default {
    interface RepairFormRecordsRow {
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
    namespace RepairFormRecordsRow {
        const idProperty = "Oid";
        const nameProperty = "CaseNo";
        const localTextPrefix = "Default.RepairFormRecords";
        const deletePermission = "Default:RepairFormRecords:Delete";
        const insertPermission = "Default:RepairFormRecords:Add";
        const readPermission = "Default:RepairFormRecords:View";
        const updatePermission = "Default:RepairFormRecords:Modify";
        const enum Fields {
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
declare namespace Serene1.Default {
    namespace RepairFormRecordsService {
        const baseUrl = "Default/RepairFormRecords";
        function Create(request: Serenity.SaveRequest<RepairFormRecordsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RepairFormRecordsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RepairFormRecordsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RepairFormRecordsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/RepairFormRecords/Create",
            Update = "Default/RepairFormRecords/Update",
            Delete = "Default/RepairFormRecords/Delete",
            Retrieve = "Default/RepairFormRecords/Retrieve",
            List = "Default/RepairFormRecords/List"
        }
    }
}
declare namespace Serene1.Default {
    class SpecialCallingLogicsColumns {
        static columnsKey: string;
    }
}
declare namespace Serene1.Default {
    interface SpecialCallingLogicsForm {
        PackageName: Serenity.StringEditor;
        SpecialStatus: Editor.StatusEditor;
        Seq: Serenity.IntegerEditor;
        RagulerCount: Serenity.IntegerEditor;
        CallCount: Serenity.IntegerEditor;
        OldAge: Serenity.IntegerEditor;
    }
    class SpecialCallingLogicsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Default {
    interface SpecialCallingLogicsRow {
        Id?: string;
        PackageName?: string;
        SpecialStatus?: number;
        Seq?: number;
        RagulerCount?: number;
        CallCount?: number;
        OldAge?: number;
    }
    namespace SpecialCallingLogicsRow {
        const idProperty = "Id";
        const nameProperty = "PackageName";
        const localTextPrefix = "Default.SpecialCallingLogics";
        const deletePermission = "Default:SpecialCallingLogics:Delete";
        const insertPermission = "Default:SpecialCallingLogics:Add";
        const readPermission = "Default:SpecialCallingLogics:View";
        const updatePermission = "Default:SpecialCallingLogics:Modify";
        const enum Fields {
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
declare namespace Serene1.Default {
    namespace SpecialCallingLogicsService {
        const baseUrl = "Default/SpecialCallingLogics";
        function Create(request: Serenity.SaveRequest<SpecialCallingLogicsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SpecialCallingLogicsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SpecialCallingLogicsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SpecialCallingLogicsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/SpecialCallingLogics/Create",
            Update = "Default/SpecialCallingLogics/Update",
            Delete = "Default/SpecialCallingLogics/Delete",
            Retrieve = "Default/SpecialCallingLogics/Retrieve",
            List = "Default/SpecialCallingLogics/List"
        }
    }
}
declare namespace Serene1.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Serene1.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailAddressEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace Serene1.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace Serene1.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Serene1.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailAddressEditor;
        ConfirmEmail: Serenity.EmailAddressEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace Serene1 {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace Serene1.Texts {
}
declare namespace Serene1.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace Serene1.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace Serene1.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace Serene1.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace Serene1.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace Serene1.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace Serene1.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace Serene1.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace Serene1.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace Serene1.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace Serene1.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace Serene1.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace Serene1.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace Serene1.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare namespace Serene1.LanguageList {
    function getValue(): string[][];
}
declare namespace Serene1.ScriptInitialization {
}
declare namespace Serene1.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        get value(): TEntity[];
        set value(value: TEntity[]);
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
        protected enableDeleteColumn(): boolean;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Serene1.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace Serene1.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace Serene1.Default {
    class AnnouncementDialog extends Serenity.EntityDialog<AnnouncementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AnnouncementForm;
    }
}
declare namespace Serene1.Default {
    class AnnouncementGrid extends Serenity.EntityGrid<AnnouncementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AnnouncementDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Default {
    class AnnouncementDialogCustom extends Serenity.EntityDialog<AnnouncementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AnnouncementForm;
    }
}
declare namespace Serene1.Default {
    class AnnouncementGridCustom extends Serenity.EntityGrid<AnnouncementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AnnouncementDialogCustom;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Default {
    class AnnouncementDetailDialog extends Serenity.EntityDialog<AnnouncementDetailRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AnnouncementDetailForm;
    }
}
declare namespace Serene1.Default {
    class AnnouncementDetailGrid extends Serenity.EntityGrid<AnnouncementDetailRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AnnouncementDetailDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Default {
    class AnnouncementGridDialog extends Common.GridEditorDialog<AnnouncementRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: AnnouncementFormCustom;
        AnnouncementType: string;
        repairDate: string;
    }
}
declare namespace Serene1.Default {
    class AnnouncementGridEditor extends Common.GridEditorBase<AnnouncementDetailRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AnnouncementGridDialog;
        protected getLocalTextPrefix(): string;
        Attachment: string;
        constructor(container: JQuery);
        getColumns(): Slick.Column[];
        protected getSlickOptions(): Slick.GridOptions;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Serene1.Default {
    class CaseServiceDataDialog extends Serenity.EntityDialog<CaseServiceDataRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CaseServiceDataForm;
    }
}
declare namespace Serene1.Default {
    class CaseServiceDataGrid extends Serenity.EntityGrid<CaseServiceDataRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CaseServiceDataDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getColumns(): Slick.Column[];
        getSlickOptions(): Slick.GridOptions;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Serene1.Default {
    class CaseServiceDataDialogCustom extends Serenity.EntityDialog<CaseServiceDataRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CaseServiceDataFormCustom;
    }
}
declare namespace Serene1.Default {
    class CaseServiceDataGridCustom extends Serenity.EntityGrid<CaseServiceDataRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CaseServiceDataDialogCustom;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getColumns(): Slick.Column[];
        getSlickOptions(): Slick.GridOptions;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Serene1.Default {
    class ClinicsDialog extends Serenity.EntityDialog<ClinicsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ClinicsForm;
    }
}
declare namespace Serene1.Default {
    class ClinicsGrid extends Serenity.EntityGrid<ClinicsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ClinicsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Default {
    class ContactBookDialog extends Serenity.EntityDialog<ContactBookRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ContactBookForm;
    }
}
declare namespace Serene1.Default {
    class ContactBookGrid extends Serenity.EntityGrid<ContactBookRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ContactBookDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace Serene1.Default {
    class ContactBookDialogCustom extends Serenity.EntityDialog<ContactBookRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ContactBookFormCustom;
        private caseNo;
        constructor(Caseno?: string);
        afterLoadEntity(): void;
    }
}
declare namespace Serene1.Default {
    class ContactBookDialogCustom1 extends Serenity.EntityDialog<ContactBookRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ContactBookFormCustom1;
        private Caseno;
        constructor(Caseno?: string);
        afterLoadEntity(): void;
    }
}
declare namespace Serene1.Default {
    class ContactBookGridCustom extends Serenity.EntityGrid<ContactBookRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ContactBookDialogCustom;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        createQuickSearchInput(): void;
        protected getButtons(): Serenity.ToolButton[];
        protected onViewSubmit(): boolean;
        getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        getColumns(): Slick.Column[];
        getSlickOptions(): Slick.GridOptions;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Serene1.Default {
    class DepartmentsDialog extends Serenity.EntityDialog<DepartmentsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DepartmentsForm;
    }
}
declare namespace Serene1.Default {
    class DepartmentsGrid extends Serenity.EntityGrid<DepartmentsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DepartmentsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Default {
    class EmpQuestionnaireDialog extends Serenity.EntityDialog<EmpQuestionnaireRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EmpQuestionnaireForm;
        afterLoadEntity(): void;
    }
}
declare namespace Serene1.Default {
    class EmpQuestionnaireGrid extends Serenity.EntityGrid<EmpQuestionnaireRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmpQuestionnaireDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Default {
    class EmployeeDialog extends Serenity.EntityDialog<EmployeeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EmployeeForm;
    }
}
declare namespace Serene1.Default {
    class EmployeeGrid extends Serenity.EntityGrid<EmployeeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        createQuickSearchInput(): void;
        protected getButtons(): Serenity.ToolButton[];
        getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        getSlickOptions(): Slick.GridOptions;
        getColumns(): Slick.Column[];
        getItemCssClass(item: Default.EmployeeRow, index: number): string;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Serene1.Default {
    class RepairFormDetailRecordsDialog extends Serenity.EntityDialog<RepairFormDetailRecordsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: RepairFormDetailRecordsForm;
    }
}
declare namespace Serene1.Default {
    class RepairFormDetailRecordsGrid extends Serenity.EntityGrid<RepairFormDetailRecordsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RepairFormDetailRecordsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Default {
    class RepairFormRecordsGridDialog extends Common.GridEditorDialog<RepairFormRecordsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: RepairFormRecordsFormCustom;
        ServiceType: string;
        MaterialNo: string;
    }
}
declare namespace Serene1.Default {
    class RepairFormRecordsGridEditor extends Common.GridEditorBase<RepairFormDetailRecordsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RepairFormRecordsGridDialog;
        protected getLocalTextPrefix(): string;
        Area: string;
        constructor(container: JQuery);
        getColumns(): Slick.Column[];
        protected getSlickOptions(): Slick.GridOptions;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Serene1.Default {
    class RepairFormRecordsDialog extends Serenity.EntityDialog<RepairFormRecordsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: RepairFormRecordsForm;
    }
}
declare namespace Serene1.Default {
    class RepairFormRecordsGrid extends Serenity.EntityGrid<RepairFormRecordsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RepairFormRecordsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Default {
    class RepairFormRecordsDialogCustom extends Serenity.EntityDialog<RepairFormRecordsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: RepairFormRecordsForm;
    }
}
declare namespace Serene1.Default {
    class RepairFormRecordsGridCustom extends Serenity.EntityGrid<RepairFormRecordsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RepairFormRecordsDialogCustom;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        getSlickOptions(): Slick.GridOptions;
        getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Serene1.Default {
    class SpecialCallingLogicsDialog extends Serenity.EntityDialog<SpecialCallingLogicsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SpecialCallingLogicsForm;
    }
}
declare namespace Serene1.Default {
    class SpecialCallingLogicsGrid extends Serenity.EntityGrid<SpecialCallingLogicsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SpecialCallingLogicsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Editor {
    class AlreadyKnowEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery, opt?: Serenity.Select2CommonOptions);
    }
}
declare namespace Serene1.Editor {
    class AreaEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery, opt?: Serenity.Select2CommonOptions);
    }
}
declare namespace Serene1.Editor {
    class BodyEditor extends Serenity.RadioButtonEditor {
        constructor(container: JQuery, opt?: Serenity.RadioButtonEditorOptions);
    }
}
declare namespace Serene1.Editor {
    class CreateUserLookUpEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery, opt: Serenity.Select2EditorOptions);
    }
}
declare namespace Serene1.Editor {
    class LanguageEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery, opt?: Serenity.Select2CommonOptions);
    }
}
declare namespace Serene1.Editor {
    class LevelEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery, opt?: Serenity.Select2CommonOptions);
    }
}
declare namespace Serene1.Editor {
    class LookUpEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery, opt: Serenity.Select2EditorOptions);
    }
}
declare namespace Serene1.Editor {
    class PhaseEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery, opt?: Serenity.Select2CommonOptions);
    }
}
declare namespace Serene1.Editor {
    class SexEditor extends Serenity.RadioButtonEditor {
        constructor(container: JQuery, opt?: Serenity.RadioButtonEditorOptions);
    }
}
declare namespace Serene1.Editor {
    class StatusEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery, opt?: Serenity.Select2CommonOptions);
    }
}
declare namespace Serene1.Editor {
    class WorkYearEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery, opt?: Serenity.Select2CommonOptions);
    }
}
declare namespace Serene1.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        protected form: LoginForm;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected getTemplate(): string;
    }
}
declare namespace Serene1.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
        getTemplate(): string;
    }
}
declare namespace Serene1.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
