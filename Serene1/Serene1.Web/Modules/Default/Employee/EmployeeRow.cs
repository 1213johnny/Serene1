using Serene1.Administration.Entities;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Serene1.Default
{
    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Employee]")]
    [DisplayName("Employee"), InstanceName("Employee")]
    [ReadPermission(DefaultPermissionKeys.Employee.View)]
    [InsertPermission(DefaultPermissionKeys.Employee.Add)]
    [ModifyPermission(DefaultPermissionKeys.Employee.Modify)]
    [DeletePermission(DefaultPermissionKeys.Employee.Delete)]
    public sealed class EmployeeRow : Row<EmployeeRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Oid"), Column("OID"), Identity, IdProperty]
        public int? Oid
        {
            get => fields.Oid[this];
            set => fields.Oid[this] = value;
        }

        [DisplayName("Employee Id"), Column("employee_id"), Size(10), NotNull, QuickSearch, NameProperty]
        public string EmployeeId
        {
            get => fields.EmployeeId[this];
            set => fields.EmployeeId[this] = value;
        }

        [DisplayName("Employee Name"), Column("employee_name"), Size(15)]
        public string EmployeeName
        {
            get => fields.EmployeeName[this];
            set => fields.EmployeeName[this] = value;
        }

        [DisplayName("Employee Eng Name"), Column("employee_eng_name"), Size(20)]
        public string EmployeeEngName
        {
            get => fields.EmployeeEngName[this];
            set => fields.EmployeeEngName[this] = value;
        }

        [DisplayName("Identification Card No"), Column("identification_card_no"), Size(10)]
        public string IdentificationCardNo
        {
            get => fields.IdentificationCardNo[this];
            set => fields.IdentificationCardNo[this] = value;
        }

        [DisplayName("Unit Id"), Column("unit_id"), Size(7)]
        public string UnitId
        {
            get => fields.UnitId[this];
            set => fields.UnitId[this] = value;
        }

        [DisplayName("Dept Type"), Column("dept_type"), Size(2)]
        public string DeptType
        {
            get => fields.DeptType[this];
            set => fields.DeptType[this] = value;
        }

        [DisplayName("Dept Id"), Column("dept_id"), Size(7)]
        public string DeptId
        {
            get => fields.DeptId[this];
            set => fields.DeptId[this] = value;
        }

        [DisplayName("Org Id"), Column("org_id"), Size(7)]
        public string OrgId
        {
            get => fields.OrgId[this];
            set => fields.OrgId[this] = value;
        }

        [DisplayName("Position Id"), Column("position_id"), Size(2)]
        public string PositionId
        {
            get => fields.PositionId[this];
            set => fields.PositionId[this] = value;
        }

        [DisplayName("Post Type"), Column("post_type"), Size(4)]
        public string PostType
        {
            get => fields.PostType[this];
            set => fields.PostType[this] = value;
        }

        [DisplayName("Post Id"), Column("post_id"), Size(4)]
        public string PostId
        {
            get => fields.PostId[this];
            set => fields.PostId[this] = value;
        }

        [DisplayName("Start Date"), Column("start_date")]
        public DateTime? StartDate
        {
            get => fields.StartDate[this];
            set => fields.StartDate[this] = value;
        }

        [DisplayName("Sex"), Column("sex"), Size(1)]
        public string Sex
        {
            get => fields.Sex[this];
            set => fields.Sex[this] = value;
        }

        [DisplayName("Birthday"), Column("birthday")]
        public DateTime? Birthday
        {
            get => fields.Birthday[this];
            set => fields.Birthday[this] = value;
        }

        [DisplayName("Citizen Id"), Column("citizen_id"), Size(10)]
        public string CitizenId
        {
            get => fields.CitizenId[this];
            set => fields.CitizenId[this] = value;
        }

        [DisplayName("Blood Type"), Column("Blood_type"), Size(3)]
        public string BloodType
        {
            get => fields.BloodType[this];
            set => fields.BloodType[this] = value;
        }

        [DisplayName("Country Id"), Column("country_id"), Size(2)]
        public string CountryId
        {
            get => fields.CountryId[this];
            set => fields.CountryId[this] = value;
        }

        [DisplayName("Race Flag"), Column("race_flag"), Size(2)]
        public string RaceFlag
        {
            get => fields.RaceFlag[this];
            set => fields.RaceFlag[this] = value;
        }

        [DisplayName("Homeland"), Column("homeland"), Size(20)]
        public string Homeland
        {
            get => fields.Homeland[this];
            set => fields.Homeland[this] = value;
        }

        [DisplayName("Marry Flag"), Column("marry_flag"), Size(1)]
        public string MarryFlag
        {
            get => fields.MarryFlag[this];
            set => fields.MarryFlag[this] = value;
        }

        [DisplayName("Educate"), Column("educate"), Size(2)]
        public string Educate
        {
            get => fields.Educate[this];
            set => fields.Educate[this] = value;
        }

        [DisplayName("License"), Column("license"), Size(2)]
        public string License
        {
            get => fields.License[this];
            set => fields.License[this] = value;
        }

        [DisplayName("Practitioner Register Flag"), Column("Practitioner_register_flag"), Size(2)]
        public string PractitionerRegisterFlag
        {
            get => fields.PractitionerRegisterFlag[this];
            set => fields.PractitionerRegisterFlag[this] = value;
        }

        [DisplayName("Ranks"), Column("ranks"), Size(2)]
        public string Ranks
        {
            get => fields.Ranks[this];
            set => fields.Ranks[this] = value;
        }

        [DisplayName("Standard"), Column("standard"), Size(2)]
        public string Standard
        {
            get => fields.Standard[this];
            set => fields.Standard[this] = value;
        }

        [DisplayName("Years"), Column("years"), Size(2)]
        public string Years
        {
            get => fields.Years[this];
            set => fields.Years[this] = value;
        }

        [DisplayName("Religion"), Column("religion"), Size(1)]
        public string Religion
        {
            get => fields.Religion[this];
            set => fields.Religion[this] = value;
        }

        [DisplayName("Church"), Column("church"), Size(10)]
        public string Church
        {
            get => fields.Church[this];
            set => fields.Church[this] = value;
        }

        [DisplayName("Address1"), Column("address1"), Size(100)]
        public string Address1
        {
            get => fields.Address1[this];
            set => fields.Address1[this] = value;
        }

        [DisplayName("Address2"), Column("address2"), Size(100)]
        public string Address2
        {
            get => fields.Address2[this];
            set => fields.Address2[this] = value;
        }

        [DisplayName("Em Name"), Column("em_name"), Size(20)]
        public string EmName
        {
            get => fields.EmName[this];
            set => fields.EmName[this] = value;
        }

        [DisplayName("Em Relation"), Column("em_relation"), Size(6)]
        public string EmRelation
        {
            get => fields.EmRelation[this];
            set => fields.EmRelation[this] = value;
        }

        [DisplayName("Telephone1"), Column("telephone1"), Size(15)]
        public string Telephone1
        {
            get => fields.Telephone1[this];
            set => fields.Telephone1[this] = value;
        }

        [DisplayName("Telephone2"), Column("telephone2"), Size(15)]
        public string Telephone2
        {
            get => fields.Telephone2[this];
            set => fields.Telephone2[this] = value;
        }

        [DisplayName("Leave Date"), Column("leave_date"), Size(8)]
        public string LeaveDate
        {
            get => fields.LeaveDate[this];
            set => fields.LeaveDate[this] = value;
        }

        [DisplayName("Retire Flag"), Column("retire_flag"), Size(1)]
        public string RetireFlag
        {
            get => fields.RetireFlag[this];
            set => fields.RetireFlag[this] = value;
        }

        [DisplayName("Patient Id"), Column("patient_id"), Size(10)]
        public string PatientId
        {
            get => fields.PatientId[this];
            set => fields.PatientId[this] = value;
        }

        [DisplayName("Username"), Column("username"), Size(20)]
        public string Username
        {
            get => fields.Username[this];
            set => fields.Username[this] = value;
        }

        public EmployeeRow()
            : base()
        {
        }

        public EmployeeRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Oid;
            public StringField EmployeeId;
            public StringField EmployeeName;
            public StringField EmployeeEngName;
            public StringField IdentificationCardNo;
            public StringField UnitId;
            public StringField DeptType;
            public StringField DeptId;
            public StringField OrgId;
            public StringField PositionId;
            public StringField PostType;
            public StringField PostId;
            public DateTimeField StartDate;
            public StringField Sex;
            public DateTimeField Birthday;
            public StringField CitizenId;
            public StringField BloodType;
            public StringField CountryId;
            public StringField RaceFlag;
            public StringField Homeland;
            public StringField MarryFlag;
            public StringField Educate;
            public StringField License;
            public StringField PractitionerRegisterFlag;
            public StringField Ranks;
            public StringField Standard;
            public StringField Years;
            public StringField Religion;
            public StringField Church;
            public StringField Address1;
            public StringField Address2;
            public StringField EmName;
            public StringField EmRelation;
            public StringField Telephone1;
            public StringField Telephone2;
            public StringField LeaveDate;
            public StringField RetireFlag;
            public StringField PatientId;
            public StringField Username;
        }
    }
}
