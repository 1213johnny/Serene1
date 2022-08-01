using Serenity.Navigation;
using MyPages = Serene1.Default.Pages;

[assembly: NavigationMenu(int.MaxValue, "Default",icon:"fa-desktop")]
[assembly: NavigationLink(int.MaxValue, "Default/Contact Book", typeof(MyPages.ContactBookController),action:"CustomIndex", icon: null,Permission = Serene1.Default.DefaultPermissionKeys.ContactBook.Menu)]
[assembly: NavigationLink(int.MaxValue, "Default/Employee", typeof(MyPages.EmployeeController), icon: null, Permission = Serene1.Default.DefaultPermissionKeys.Employee.Menu)]
[assembly: NavigationLink(int.MaxValue, "Default/Announcement", typeof(MyPages.AnnouncementController),action:"CustomIndex", icon: null, Permission = Serene1.Default.DefaultPermissionKeys.Announcement.Menu)]
[assembly: NavigationLink(int.MaxValue, "Default/Repair Form Records", typeof(MyPages.RepairFormRecordsController),action:"CustomIndex", icon: null, Permission = Serene1.Default.DefaultPermissionKeys.RepairFormRecords.Menu)]

[assembly: NavigationMenu(int.MaxValue, "DefaultBackend", icon: "fa-desktop")]
[assembly: NavigationLink(int.MaxValue, "DefaultBackend/Contact Book", typeof(MyPages.ContactBookController), icon: null, Permission = Serene1.Default.DefaultPermissionKeys.ContactBook.Menu)]
[assembly: NavigationLink(int.MaxValue, "DefaultBackend/Case Service Data", typeof(MyPages.CaseServiceDataController), icon: null, Permission = Serene1.Default.DefaultPermissionKeys.CaseServiceData.Menu)]
[assembly: NavigationLink(int.MaxValue, "DefaultBackend/EmpQuestionnaire", typeof(MyPages.EmpQuestionnaireController), icon: null,Permission = Serene1.Default.DefaultPermissionKeys.EmpQuestionnaire.Menu)]
[assembly: NavigationLink(int.MaxValue, "DefaultBackend/Announcement", typeof(MyPages.AnnouncementController), icon: null, Permission = Serene1.Default.DefaultPermissionKeys.Announcement.Menu)]
[assembly: NavigationLink(int.MaxValue, "DefaultBackend/Announcement Detail", typeof(MyPages.AnnouncementDetailController), icon: null, Permission = Serene1.Default.DefaultPermissionKeys.AnnouncementDetail.Menu)]
[assembly: NavigationLink(int.MaxValue, "DefaultBackend/Repair Form Records", typeof(MyPages.RepairFormRecordsController), icon: null, Permission = Serene1.Default.DefaultPermissionKeys.RepairFormRecords.Menu)]
[assembly: NavigationLink(int.MaxValue, "DefaultBackend/Repair Form Detail Records", typeof(MyPages.RepairFormDetailRecordsController), icon: null, Permission = Serene1.Default.DefaultPermissionKeys.RepairFormDetailRecords.Menu)]
[assembly: NavigationLink(int.MaxValue, "DefaultBackend/Departments", typeof(MyPages.DepartmentsController), icon: null, Permission = Serene1.Default.DefaultPermissionKeys.Departments.Menu)]
[assembly: NavigationLink(int.MaxValue, "DefaultBackend/Clinics", typeof(MyPages.ClinicsController), icon: null, Permission = Serene1.Default.DefaultPermissionKeys.Clinics.Menu)]
[assembly: NavigationLink(int.MaxValue, "DefaultBackend/Special Calling Logics", typeof(MyPages.SpecialCallingLogicsController), icon: null)]