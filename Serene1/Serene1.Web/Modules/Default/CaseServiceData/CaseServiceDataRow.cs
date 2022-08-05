using Serenity;
using Serene1.Administration.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Serene1.Default
{
    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[CaseServiceData]")]
    [DisplayName("Case Service Data"), InstanceName("Case Service Data")]
    [ReadPermission(DefaultPermissionKeys.EmpQuestionnaire.View)]
    [InsertPermission(DefaultPermissionKeys.EmpQuestionnaire.Add)]
    [ModifyPermission(DefaultPermissionKeys.EmpQuestionnaire.Modify)]
    [DeletePermission(DefaultPermissionKeys.EmpQuestionnaire.Delete)]
    [LookupScript("Lookup.CaseServiceData",Permission ="?")]
    public sealed class CaseServiceDataRow : Row<CaseServiceDataRow.RowFields>, IIdRow, INameRow, ILoggingRow
    {
        [DisplayName("Oid"), Column("OID"), Identity, IdProperty]
        public int? Oid
        {
            get => fields.Oid[this];
            set => fields.Oid[this] = value;
        }

        [DisplayName("Case No"), Size(50), NotNull, QuickSearch, NameProperty,LookupInclude]
        public string CaseNo
        {
            get => fields.CaseNo[this];
            set => fields.CaseNo[this] = value;
        }

        [DisplayName("Patient Id"), Size(10), NotNull]
        public string PatientId
        {
            get => fields.PatientId[this];
            set => fields.PatientId[this] = value;
        }

        [DisplayName("Roc Id"), Size(10),LookupInclude]
        public string RocId
        {
            get => fields.RocId[this];
            set => fields.RocId[this] = value;
        }

        [DisplayName("Create Date")]
        public DateTime? CreateDate
        {
            get => fields.CreateDate[this];
            set => fields.CreateDate[this] = value;
        }

        [DisplayName("Create User"), ForeignKey(typeof(UserRow), "UserId"), LeftJoin("a")]
        public int? CreateUser
        {
            get => fields.CreateUser[this];
            set => fields.CreateUser[this] = value;
        }

        [DisplayName("Update Date")]
        public DateTime? UpdateDate
        {
            get => fields.UpdateDate[this];
            set => fields.UpdateDate[this] = value;
        }

        [DisplayName("Update User"),ForeignKey(typeof(UserRow), "UserId"), LeftJoin("b")]
        public int? UpdateUser
        {
            get => fields.UpdateUser[this];
            set => fields.UpdateUser[this] = value;
        }
        [Origin("a", Property = "DisplayName")]
        public string CreateUserName
        {
            get => fields.CreateUserName[this];
            set => fields.CreateUserName[this] = value;
        }

        [Origin("b", Property = "DisplayName")]
        public string UpdateUserName
        {
            get => fields.UpdateUserName[this];
            set => fields.UpdateUserName[this] = value;
        }

        [DisplayName("PatientName "), Size(50)]
        public string PatientName
        {
            get => fields.PatientName[this];
            set => fields.PatientName[this] = value;
        }

        Field IUpdateLogRow.UpdateUserIdField => Fields.UpdateUser;

        DateTimeField IUpdateLogRow.UpdateDateField => Fields.UpdateDate;

        Field IInsertLogRow.InsertUserIdField => Fields.CreateUser;

        DateTimeField IInsertLogRow.InsertDateField => Fields.CreateDate;

        public CaseServiceDataRow()
            : base()
        {
        }

        public CaseServiceDataRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Oid;
            public StringField CaseNo;
            public StringField PatientId;
            public StringField RocId;
            public DateTimeField CreateDate;
            public Int32Field CreateUser;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUser;
            public StringField CreateUserName;
            public StringField UpdateUserName;
            public StringField PatientName;
        }
    }
}
