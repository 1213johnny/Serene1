using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Serene1.Default
{
    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Departments]")]
    [DisplayName("Departments"), InstanceName("Departments")]
    [ReadPermission(DefaultPermissionKeys.Departments.View)]
    [InsertPermission(DefaultPermissionKeys.Departments.Add)]
    [ModifyPermission(DefaultPermissionKeys.Departments.Modify)]
    [DeletePermission(DefaultPermissionKeys.Departments.Delete)]
    public sealed class DepartmentsRow : Row<DepartmentsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Dept No"), Size(5), PrimaryKey, NotNull, Identity,IdProperty, QuickSearch, NameProperty]
        public string DeptNo
        {
            get => fields.DeptNo[this];
            set => fields.DeptNo[this] = value;
        }

        [DisplayName("Dept Name"), Size(100), NotNull]
        public string DeptName
        {
            get => fields.DeptName[this];
            set => fields.DeptName[this] = value;
        }

        [DisplayName("Dept Name Eng"), Size(100), NotNull]
        public string DeptNameEng
        {
            get => fields.DeptNameEng[this];
            set => fields.DeptNameEng[this] = value;
        }

        [DisplayName("Hiddent"), NotNull]
        public bool? Hiddent
        {
            get => fields.Hiddent[this];
            set => fields.Hiddent[this] = value;
        }

        public DepartmentsRow()
            : base()
        {
        }

        public DepartmentsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField DeptNo;
            public StringField DeptName;
            public StringField DeptNameEng;
            public BooleanField Hiddent;
        }
    }
}
