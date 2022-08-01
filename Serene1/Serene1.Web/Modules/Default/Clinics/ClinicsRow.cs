using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Serene1.Default
{
    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Clinics]")]
    [DisplayName("Clinics"), InstanceName("Clinics")]
    [ReadPermission(DefaultPermissionKeys.Clinics.View)]
    [InsertPermission(DefaultPermissionKeys.Clinics.Add)]
    [ModifyPermission(DefaultPermissionKeys.Clinics.Modify)]
    [DeletePermission(DefaultPermissionKeys.Clinics.Delete)]
    public sealed class ClinicsRow : Row<ClinicsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Dept No"), Size(5), PrimaryKey, NotNull, IdProperty, QuickSearch, NameProperty]
        public string DeptNo
        {
            get => fields.DeptNo[this];
            set => fields.DeptNo[this] = value;
        }

        [DisplayName("Clinic No"), Size(5), PrimaryKey, NotNull]
        public string ClinicNo
        {
            get => fields.ClinicNo[this];
            set => fields.ClinicNo[this] = value;
        }

        [DisplayName("Clinic Name"), Size(100), NotNull]
        public string ClinicName
        {
            get => fields.ClinicName[this];
            set => fields.ClinicName[this] = value;
        }

        [DisplayName("Clinic Name Eng"), Size(100), NotNull]
        public string ClinicNameEng
        {
            get => fields.ClinicNameEng[this];
            set => fields.ClinicNameEng[this] = value;
        }

        public ClinicsRow()
            : base()
        {
        }

        public ClinicsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField DeptNo;
            public StringField ClinicNo;
            public StringField ClinicName;
            public StringField ClinicNameEng;
        }
    }
}
