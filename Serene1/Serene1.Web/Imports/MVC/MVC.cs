
namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

        }

        public static class Default
        {
            public static class Announcement
            {
                public const string AnnouncementIndex = "~/Modules/Default/Announcement/AnnouncementIndex.cshtml";
            }

            public static class AnnouncementCustom
            {
                public const string AnnouncementCustomIndex = "~/Modules/Default/AnnouncementCustom/AnnouncementCustomIndex.cshtml";
            }

            public static class AnnouncementDetail
            {
                public const string AnnouncementDetailIndex = "~/Modules/Default/AnnouncementDetail/AnnouncementDetailIndex.cshtml";
            }

            public static class CaseServiceData
            {
                public const string CaseServiceDataIndex = "~/Modules/Default/CaseServiceData/CaseServiceDataIndex.cshtml";
            }

            public static class CaseServiceDataCustom
            {
                public const string CaseServiceDataCustomIndex = "~/Modules/Default/CaseServiceDataCustom/CaseServiceDataCustomIndex.cshtml";
            }

            public static class ContactBook
            {
                public const string ContactBookIndex = "~/Modules/Default/ContactBook/ContactBookIndex.cshtml";
                public const string ContactBookReport = "~/Modules/Default/ContactBook/ContactBookReport.cshtml";
            }

            public static class ContactBookCustom
            {
                public const string ContactBookCustomIndex = "~/Modules/Default/ContactBookCustom/ContactBookCustomIndex.cshtml";
            }

            public static class Employee
            {
                public const string EmployeeIndex = "~/Modules/Default/Employee/EmployeeIndex.cshtml";
                public const string EmployeeReport = "~/Modules/Default/Employee/EmployeeReport.cshtml";
            }

            public static class EmpQuestionnaire
            {
                public const string EmpQuestionnaireIndex = "~/Modules/Default/EmpQuestionnaire/EmpQuestionnaireIndex.cshtml";
            }

            public static class RepairFormDetailRecords
            {
                public const string RepairFormDetailRecordsIndex = "~/Modules/Default/RepairFormDetailRecords/RepairFormDetailRecordsIndex.cshtml";
            }

            public static class RepairFormRecords
            {
                public const string RepairFormRecordsIndex = "~/Modules/Default/RepairFormRecords/RepairFormRecordsIndex.cshtml";
            }

            public static class RepairFormRecordsCustom
            {
                public const string RepairFormRecordsCustomIndex = "~/Modules/Default/RepairFormRecordsCustom/RepairFormRecordsCustomIndex.cshtml";
            }
        }

        public static class Errors
        {
            public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                }
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _Sidebar = "~/Views/Shared/_Sidebar.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
        }

    }
}
