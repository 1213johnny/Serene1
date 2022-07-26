using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Serene1.Default
{
    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[RepairFormDetailRecords]")]
    [DisplayName("Repair Form Detail Records"), InstanceName("Repair Form Detail Records")]
    [ReadPermission(DefaultPermissionKeys.RepairFormDetailRecords.View)]
    [InsertPermission(DefaultPermissionKeys.RepairFormDetailRecords.Add)]
    [ModifyPermission(DefaultPermissionKeys.RepairFormDetailRecords.Modify)]
    [DeletePermission(DefaultPermissionKeys.RepairFormDetailRecords.Delete)]
    public sealed class RepairFormDetailRecordsRow : Row<RepairFormDetailRecordsRow.RowFields>, IIdRow, INameRow , ILoggingRow
    {
        [DisplayName("Oid"), Column("OID"), Identity, IdProperty]
        public int? Oid
        {
            get => fields.Oid[this];
            set => fields.Oid[this] = value;
        }

        [DisplayName("Repair Form Records Id"), NotNull]
        public int? RepairFormRecordsId
        {
            get => fields.RepairFormRecordsId[this];
            set => fields.RepairFormRecordsId[this] = value;
        }

        [DisplayName("Use Material"), Size(50), NotNull, QuickSearch, NameProperty]
        public string UseMaterial
        {
            get => fields.UseMaterial[this];
            set => fields.UseMaterial[this] = value;
        }

        [DisplayName("Use Material Count")]
        public short? UseMaterialCount
        {
            get => fields.UseMaterialCount[this];
            set => fields.UseMaterialCount[this] = value;
        }

        [DisplayName("Material Amount"), Size(19), Scale(1)]
        public decimal? MaterialAmount
        {
            get => fields.MaterialAmount[this];
            set => fields.MaterialAmount[this] = value;
        }

        [DisplayName("Subsidy Amount"), Size(19), Scale(1)]
        public decimal? SubsidyAmount
        {
            get => fields.SubsidyAmount[this];
            set => fields.SubsidyAmount[this] = value;
        }

        [DisplayName("Pay Amount"), Size(19), Scale(1)]
        public decimal? PayAmount
        {
            get => fields.PayAmount[this];
            set => fields.PayAmount[this] = value;
        }

        [DisplayName("Createuser"), Column("CREATEUSER")]
        public short? Createuser
        {
            get => fields.Createuser[this];
            set => fields.Createuser[this] = value;
        }

        [DisplayName("Createdate"), Column("CREATEDATE")]
        public DateTime? Createdate
        {
            get => fields.Createdate[this];
            set => fields.Createdate[this] = value;
        }

        [DisplayName("Updateuser"), Column("UPDATEUSER")]
        public short? Updateuser
        {
            get => fields.Updateuser[this];
            set => fields.Updateuser[this] = value;
        }

        [DisplayName("Updatedate"), Column("UPDATEDATE")]
        public DateTime? Updatedate
        {
            get => fields.Updatedate[this];
            set => fields.Updatedate[this] = value;
        }

        Field IUpdateLogRow.UpdateUserIdField => Fields.Updateuser;

        DateTimeField IUpdateLogRow.UpdateDateField => Fields.Updatedate;

        Field IInsertLogRow.InsertUserIdField => Fields.Createuser;

        DateTimeField IInsertLogRow.InsertDateField => Fields.Createdate;
        public RepairFormDetailRecordsRow()
            : base()
        {
        }

        public RepairFormDetailRecordsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Oid;
            public Int32Field RepairFormRecordsId;
            //public Int16Field RepairFormRecordsId;
            public StringField UseMaterial;
            public Int16Field UseMaterialCount;
            public DecimalField MaterialAmount;
            public DecimalField SubsidyAmount;
            public DecimalField PayAmount;
            public Int16Field Createuser;
            public DateTimeField Createdate;
            public Int16Field Updateuser;
            public DateTimeField Updatedate;
        }
    }
}
