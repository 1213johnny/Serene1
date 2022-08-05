using Serenity.ComponentModel;
using System.ComponentModel;

namespace Serene1.Default
{
    [NestedPermissionKeys]
    public class DefaultPermissionKeys
    {
        [DisplayName("聯絡簿")]
        public class ContactBook
        {
            [Description("聯絡簿:選單")]
            [ImplicitPermission(View)]
            public const string Menu = "Default:ContactBook:Menu";

            [Description("聯絡簿:瀏覽")]
            public const string View = "Default:ContactBook:View";

            [Description("聯絡簿:新增")]
            public const string Add = "Default:ContactBook:Add";

            [Description("聯絡簿:修改")]
            public const string Modify = "Default:ContactBook:Modify";

            [Description("聯絡簿:刪除")]
            public const string Delete = "Default:ContactBook:Delete";

            [Description("聯絡簿:後台選單")]
            public const string BackendMenu = "Default:ContactBook:BackendMenu";
        }
        [DisplayName("CaseServiceData")]
        public class CaseServiceData
        {
            [Description("個案資料:選單")]
            public const string Menu = "Default:CaseServiceData:Menu";

            [Description("個案資料:瀏覽")]
            public const string View = "Default:CaseServiceData:View";

            [Description("個案資料:新增")]
            public const string Add = "Default:CaseServiceData:Add";

            [Description("個案資料:修改")]
            public const string Modify = "Default:CaseServiceData:Modify";

            [Description("個案資料:刪除")]
            public const string Delete = "Default:CaseServiceData:Delete";

            [Description("個案資料:後台選單")]
            public const string BackendMenu = "Default:CaseServiceData:BackendMenu";
        }

        [DisplayName("Employee")]
        public class Employee
        {
            [Description("員工:選單")]
            public const string Menu = "Default:Employee:Menu";

            [Description("員工:瀏覽")]
            public const string View = "Default:Employee:View";

            [Description("員工:新增")]
            public const string Add = "Default:Employee:Add";

            [Description("員工:修改")]
            public const string Modify = "Default:Employee:Modify";

            [Description("員工:刪除")]
            public const string Delete = "Default:Employee:Delete";

            [Description("員工:後台選單")]
            public const string BackendMenu = "Default:Employee:BackendMenu";
        }

        [DisplayName("EmpQuestionnaire")]
        public class EmpQuestionnaire
        {
            [Description("問卷:選單")]
            public const string Menu = "Default:EmpQuestionnaire:Menu";

            [Description("問卷:瀏覽")]
            public const string View = "Default:EmpQuestionnaire:View";

            [Description("問卷:新增")]
            public const string Add = "Default:EmpQuestionnaire:Add";

            [Description("問卷:修改")]
            public const string Modify = "Default:EmpQuestionnaire:Modify";

            [Description("問卷:刪除")]
            public const string Delete = "Default:EmpQuestionnaire:Delete";

            [Description("問卷:後台選單")]
            public const string BackendMenu = "Default:EmpQuestionnaire:BackendMenu";
        }

        [DisplayName("Announcement")]
        public class Announcement
        {
            [Description("交班:選單")]
            public const string Menu = "Default:Announcement:Menu";

            [Description("交班:瀏覽")]
            public const string View = "Default:Announcement:View";

            [Description("交班:新增")]
            public const string Add = "Default:Announcement:Add";

            [Description("交班:修改")]
            public const string Modify = "Default:Announcement:Modify";

            [Description("交班:刪除")]
            public const string Delete = "Default:Announcement:Delete";

            [Description("交班:後台選單")]
            public const string BackendMenu = "Default:Announcement:BackendMenu";
        }

        [DisplayName("AnnouncementDetail")]
        public class AnnouncementDetail
        {
            [Description("交班回覆:選單")]
            public const string Menu = "Default:AnnouncementDetail:Menu";

            [Description("交班回覆:瀏覽")]
            public const string View = "Default:AnnouncementDetail:View";

            [Description("交班回覆:新增")]
            public const string Add = "Default:AnnouncementDetail:Add";

            [Description("交班回覆:修改")]
            public const string Modify = "Default:AnnouncementDetail:Modify";

            [Description("交班回覆:刪除")]
            public const string Delete = "Default:AnnouncementDetail:Delete";

            [Description("交班回覆 :後台選單")]
            public const string BackendMenu = "Default:AnnouncementDetail:BackendMenu";
        }

        [DisplayName("RepairFormRecords")]
        public class RepairFormRecords
        {
            [Description("維修紀錄單:選單")]
            public const string Menu = "Default:RepairFormRecords:Menu";

            [Description("維修紀錄單:瀏覽")]
            public const string View = "Default:RepairFormRecords:View";

            [Description("維修紀錄單:新增")]
            public const string Add = "Default:RepairFormRecords:Add";

            [Description("維修紀錄單:修改")]
            public const string Modify = "Default:RepairFormRecords:Modify";

            [Description("維修紀錄單:刪除")]
            public const string Delete = "Default:RepairFormRecords:Delete";

            [Description("維修紀錄單 :後台選單")]
            public const string BackendMenu = "Default:RepairFormRecords:BackendMenu";
        }

        [DisplayName("RepairFormDetailRecords")]
        public class RepairFormDetailRecords
        {
            [Description("維修紀錄單明細:選單")]
            public const string Menu = "Default:RepairFormDetailRecords:Menu";

            [Description("維修紀錄單明細:瀏覽")]
            public const string View = "Default:RepairFormDetailRecords:View";

            [Description("維修紀錄單明細:新增")]
            public const string Add = "Default:RepairFormDetailRecords:Add";

            [Description("維修紀錄單明細:修改")]
            public const string Modify = "Default:RepairFormDetailRecords:Modify";

            [Description("維修紀錄單明細:刪除")]
            public const string Delete = "Default:RepairFormDetailRecords:Delete";

            [Description("維修紀錄單明細 :後台選單")]
            public const string BackendMenu = "Default:RepairFormDetailRecords:BackendMenu";
        }

        [DisplayName("科別檔")]
        public class Departments
        {
            [Description("科別檔:選單")]
            public const string Menu = "Default:Departments:Menu";

            [Description("科別檔:瀏覽")]
            public const string View = "Default:Departments:View";

            [Description("科別檔:新增")]
            public const string Add = "Default:Departments:Add";

            [Description("科別檔:修改")]
            public const string Modify = "Default:Departments:Modify";

            [Description("科別檔:刪除")]
            public const string Delete = "Default:Departments:Delete";

            [Description("科別檔 :後台選單")]
            public const string BackendMenu = "Default:Departments:BackendMenu";
        }

        [DisplayName("診別檔")]
        public class Clinics
        {
            [Description("診別檔:選單")]
            public const string Menu = "Default:Clinics:Menu";

            [Description("診別檔:瀏覽")]
            public const string View = "Default:Clinics:View";

            [Description("診別檔:新增")]
            public const string Add = "Default:Clinics:Add";

            [Description("診別檔:修改")]
            public const string Modify = "Default:Clinics:Modify";

            [Description("診別檔:刪除")]
            public const string Delete = "Default:Clinics:Delete";

            [Description("診別檔 :後台選單")]
            public const string BackendMenu = "Default:Clinics:BackendMenu";
        }

        [DisplayName("特殊叫號邏輯檔")]
        public class SpecialCallingLogics
        {
            [Description("診別檔:選單")]
            public const string Menu = "Default:SpecialCallingLogics:Menu";

            [Description("診別檔:瀏覽")]
            public const string View = "Default:SpecialCallingLogics:View";

            [Description("診別檔:新增")]
            public const string Add = "Default:SpecialCallingLogics:Add";

            [Description("診別檔:修改")]
            public const string Modify = "Default:SpecialCallingLogics:Modify";

            [Description("診別檔:刪除")]
            public const string Delete = "Default:SpecialCallingLogics:Delete";

            [Description("診別檔 :後台選單")]
            public const string BackendMenu = "Default:SpecialCallingLogics:BackendMenu";
        }
    }
}

