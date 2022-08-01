namespace Serene1.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Default {

            namespace Announcement {
                export const AnnounceDesc: string;
                export const AnnouncePriority: string;
                export const AnnounceType: string;
                export const Attachments: string;
                export const Createdate: string;
                export const Createuser: string;
                export const DetailList: string;
                export const Oid: string;
                export const ReleaseDate: string;
                export const ServiceCode: string;
                export const TargetRoleIds: string;
                export const TargetUserIds: string;
                export const Updatedate: string;
                export const Updateuser: string;
            }

            namespace AnnouncementDetail {
                export const AnnouncementsId: string;
                export const Createdate: string;
                export const Createuser: string;
                export const Oid: string;
                export const ReplyContent: string;
                export const ReplyDate: string;
                export const ReplyUser: string;
                export const TargetUser: string;
                export const Updatedate: string;
                export const Updateuser: string;
            }

            namespace CaseServiceData {
                export const CaseNo: string;
                export const CreateDate: string;
                export const CreateUser: string;
                export const CreateUserName: string;
                export const Oid: string;
                export const PatientId: string;
                export const RocId: string;
                export const UpdateDate: string;
                export const UpdateUser: string;
                export const UpdateUserName: string;
            }

            namespace Clinics {
                export const ClinicName: string;
                export const ClinicNameEng: string;
                export const ClinicNo: string;
                export const DeptNo: string;
            }

            namespace ContactBook {
                export const Advise: string;
                export const Advisedate: string;
                export const Alreadyknow: string;
                export const AlreadyknowExpre: string;
                export const Caseno: string;
                export const Checkbox: string;
                export const CreateDate: string;
                export const CreateUser: string;
                export const CreateUserName: string;
                export const Oid: string;
                export const UpdateDate: string;
                export const UpdateUser: string;
                export const UpdateUserName: string;
            }

            namespace Departments {
                export const DeptName: string;
                export const DeptNameEng: string;
                export const DeptNo: string;
                export const Hiddent: string;
            }

            namespace EmpQuestionnaire {
                export const Age: string;
                export const EmpArea: string;
                export const EmpBody: string;
                export const EmpDriverLicense: string;
                export const EmpEffectiveDate: string;
                export const EmpEmt1License: string;
                export const EmpLanguage: string;
                export const EmpNo: string;
                export const EmpServiceLevel: string;
                export const EmpSkill: string;
                export const EmpTimePhase: string;
                export const EmpWorkYear: string;
                export const Height: string;
                export const Oid: string;
                export const QDate: string;
                export const Sex: string;
                export const UpdateDate: string;
                export const UpdateUser: string;
                export const Weight: string;
            }

            namespace Employee {
                export const Address1: string;
                export const Address2: string;
                export const Birthday: string;
                export const BloodType: string;
                export const Church: string;
                export const CitizenId: string;
                export const CountryId: string;
                export const DeptId: string;
                export const DeptType: string;
                export const Educate: string;
                export const EmName: string;
                export const EmRelation: string;
                export const EmployeeEngName: string;
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const Homeland: string;
                export const IdentificationCardNo: string;
                export const LeaveDate: string;
                export const License: string;
                export const MarryFlag: string;
                export const Oid: string;
                export const OrgId: string;
                export const PatientId: string;
                export const PositionId: string;
                export const PostId: string;
                export const PostType: string;
                export const PractitionerRegisterFlag: string;
                export const RaceFlag: string;
                export const Ranks: string;
                export const Religion: string;
                export const RetireFlag: string;
                export const Sex: string;
                export const Standard: string;
                export const StartDate: string;
                export const Telephone1: string;
                export const Telephone2: string;
                export const UnitId: string;
                export const Username: string;
                export const Years: string;
            }

            namespace RepairFormDetailRecords {
                export const Createdate: string;
                export const Createuser: string;
                export const MaterialAmount: string;
                export const Oid: string;
                export const PayAmount: string;
                export const RepairFormRecordsId: string;
                export const SubsidyAmount: string;
                export const Updatedate: string;
                export const Updateuser: string;
                export const UseMaterial: string;
                export const UseMaterialCount: string;
            }

            namespace RepairFormRecords {
                export const Area: string;
                export const AssistiveSource: string;
                export const CaseNo: string;
                export const Createdate: string;
                export const Createuser: string;
                export const DetailList: string;
                export const EvalutionLevel: string;
                export const HandlingPlace: string;
                export const ItemName: string;
                export const MaterialNo: string;
                export const Oid: string;
                export const Place: string;
                export const RepairDate: string;
                export const RepairEmpId: string;
                export const RepairRecord: string;
                export const ServiceCount: string;
                export const ServiceType: string;
                export const SubsidySource: string;
                export const Township: string;
                export const Updatedate: string;
                export const Updateuser: string;
            }

            namespace SpecialCallingLogics {
                export const CallCount: string;
                export const Id: string;
                export const OldAge: string;
                export const PackageName: string;
                export const RagulerCount: string;
                export const Seq: string;
                export const SpecialStatus: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const GoogleButton: string;
                export const LoginToYourAccount: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Navigation {
        export const LogoutLink: string;
        export const SiteTitle: string;
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    Serene1['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Default:{Announcement:{AnnounceDesc:1,AnnouncePriority:1,AnnounceType:1,Attachments:1,Createdate:1,Createuser:1,DetailList:1,Oid:1,ReleaseDate:1,ServiceCode:1,TargetRoleIds:1,TargetUserIds:1,Updatedate:1,Updateuser:1},AnnouncementDetail:{AnnouncementsId:1,Createdate:1,Createuser:1,Oid:1,ReplyContent:1,ReplyDate:1,ReplyUser:1,TargetUser:1,Updatedate:1,Updateuser:1},CaseServiceData:{CaseNo:1,CreateDate:1,CreateUser:1,CreateUserName:1,Oid:1,PatientId:1,RocId:1,UpdateDate:1,UpdateUser:1,UpdateUserName:1},Clinics:{ClinicName:1,ClinicNameEng:1,ClinicNo:1,DeptNo:1},ContactBook:{Advise:1,Advisedate:1,Alreadyknow:1,AlreadyknowExpre:1,Caseno:1,Checkbox:1,CreateDate:1,CreateUser:1,CreateUserName:1,Oid:1,UpdateDate:1,UpdateUser:1,UpdateUserName:1},Departments:{DeptName:1,DeptNameEng:1,DeptNo:1,Hiddent:1},EmpQuestionnaire:{Age:1,EmpArea:1,EmpBody:1,EmpDriverLicense:1,EmpEffectiveDate:1,EmpEmt1License:1,EmpLanguage:1,EmpNo:1,EmpServiceLevel:1,EmpSkill:1,EmpTimePhase:1,EmpWorkYear:1,Height:1,Oid:1,QDate:1,Sex:1,UpdateDate:1,UpdateUser:1,Weight:1},Employee:{Address1:1,Address2:1,Birthday:1,BloodType:1,Church:1,CitizenId:1,CountryId:1,DeptId:1,DeptType:1,Educate:1,EmName:1,EmRelation:1,EmployeeEngName:1,EmployeeId:1,EmployeeName:1,Homeland:1,IdentificationCardNo:1,LeaveDate:1,License:1,MarryFlag:1,Oid:1,OrgId:1,PatientId:1,PositionId:1,PostId:1,PostType:1,PractitionerRegisterFlag:1,RaceFlag:1,Ranks:1,Religion:1,RetireFlag:1,Sex:1,Standard:1,StartDate:1,Telephone1:1,Telephone2:1,UnitId:1,Username:1,Years:1},RepairFormDetailRecords:{Createdate:1,Createuser:1,MaterialAmount:1,Oid:1,PayAmount:1,RepairFormRecordsId:1,SubsidyAmount:1,Updatedate:1,Updateuser:1,UseMaterial:1,UseMaterialCount:1},RepairFormRecords:{Area:1,AssistiveSource:1,CaseNo:1,Createdate:1,Createuser:1,DetailList:1,EvalutionLevel:1,HandlingPlace:1,ItemName:1,MaterialNo:1,Oid:1,Place:1,RepairDate:1,RepairEmpId:1,RepairRecord:1,ServiceCount:1,ServiceType:1,SubsidySource:1,Township:1,Updatedate:1,Updateuser:1},SpecialCallingLogics:{CallCount:1,Id:1,OldAge:1,PackageName:1,RagulerCount:1,Seq:1,SpecialStatus:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,GoogleButton:1,LoginToYourAccount:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Navigation:{LogoutLink:1,SiteTitle:1},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}
