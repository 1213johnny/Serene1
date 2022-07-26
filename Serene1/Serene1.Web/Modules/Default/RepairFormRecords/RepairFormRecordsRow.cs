using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;

namespace Serene1.Default
{
    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[RepairFormRecords]")]
    [DisplayName("Repair Form Records"), InstanceName("Repair Form Records")]
    [ReadPermission(DefaultPermissionKeys.RepairFormRecords.View)]
    [InsertPermission(DefaultPermissionKeys.RepairFormRecords.Add)]
    [ModifyPermission(DefaultPermissionKeys.RepairFormRecords.Modify)]
    [DeletePermission(DefaultPermissionKeys.RepairFormRecords.Delete)]
    public sealed class RepairFormRecordsRow : Row<RepairFormRecordsRow.RowFields>, IIdRow, INameRow ,ILoggingRow
    {
        [DisplayName("Oid"), Column("OID"), Identity, IdProperty]
        public int? Oid
        {
            get => fields.Oid[this];
            set => fields.Oid[this] = value;
        }

        [DisplayName("Case No"), Size(50), NotNull, QuickSearch, NameProperty]
        public string CaseNo
        {
            get => fields.CaseNo[this];
            set => fields.CaseNo[this] = value;
        }

        [DisplayName("Repair Date"), NotNull]
        public DateTime? RepairDate
        {
            get => fields.RepairDate[this];
            set => fields.RepairDate[this] = value;
        }

        [DisplayName("Township"), Size(10)]
        public string Township
        {
            get => fields.Township[this];
            set => fields.Township[this] = value;
        }

        [DisplayName("Area"), Size(10)]
        public string Area
        {
            get => fields.Area[this];
            set => fields.Area[this] = value;
        }

        [DisplayName("Subsidy Source"), Size(10)]
        public string SubsidySource
        {
            get => fields.SubsidySource[this];
            set => fields.SubsidySource[this] = value;
        }

        [DisplayName("Assistive Source"), Size(10)]
        public string AssistiveSource
        {
            get => fields.AssistiveSource[this];
            set => fields.AssistiveSource[this] = value;
        }

        [DisplayName("Item Name"), Size(10)]
        public string ItemName
        {
            get => fields.ItemName[this];
            set => fields.ItemName[this] = value;
        }

        [DisplayName("Material No"), Size(12)]
        public string MaterialNo
        {
            get => fields.MaterialNo[this];
            set => fields.MaterialNo[this] = value;
        }

        [DisplayName("Service Type"), Size(10)]
        public string ServiceType
        {
            get => fields.ServiceType[this];
            set => fields.ServiceType[this] = value;
        }

        [DisplayName("Service Count")]
        public short? ServiceCount
        {
            get => fields.ServiceCount[this];
            set => fields.ServiceCount[this] = value;
        }

        [DisplayName("Evalution Level"), Size(10)]
        public string EvalutionLevel
        {
            get => fields.EvalutionLevel[this];
            set => fields.EvalutionLevel[this] = value;
        }

        [DisplayName("Handling Place"), Size(10)]
        public string HandlingPlace
        {
            get => fields.HandlingPlace[this];
            set => fields.HandlingPlace[this] = value;
        }

        [DisplayName("Place"), Size(10)]
        public string Place
        {
            get => fields.Place[this];
            set => fields.Place[this] = value;
        }

        [DisplayName("Repair Record"), Size(100)]
        public string RepairRecord
        {
            get => fields.RepairRecord[this];
            set => fields.RepairRecord[this] = value;
        }

        [DisplayName("Repair Emp Id"), Size(10)]
        public string RepairEmpId
        {
            get => fields.RepairEmpId[this];
            set => fields.RepairEmpId[this] = value;
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

        public RepairFormRecordsRow()
            : base()
        {
        }

        public RepairFormRecordsRow(RowFields fields)
            : base(fields)
        {
        }

        [MasterDetailRelation(foreignKey: "RepairFormRecordsId"), NotMapped, MinSelectLevel(SelectLevel.Always)]
        public List<RepairFormDetailRecordsRow> DetailList
        {
            get { return Fields.DetailList[this]; }
            set { Fields.DetailList[this] = value; }
        }

        Field IUpdateLogRow.UpdateUserIdField => Fields.Updateuser ;

        DateTimeField IUpdateLogRow.UpdateDateField => Fields.Updatedate;

        Field IInsertLogRow.InsertUserIdField => Fields.Createuser;

        DateTimeField IInsertLogRow.InsertDateField => Fields.Createdate;

        public class RowFields : RowFieldsBase
        {
            public Int32Field Oid;
            public StringField CaseNo;
            public DateTimeField RepairDate;
            public StringField Township;
            public StringField Area;
            public StringField SubsidySource;
            public StringField AssistiveSource;
            public StringField ItemName;
            public StringField MaterialNo;
            public StringField ServiceType;
            public Int16Field ServiceCount;
            public StringField EvalutionLevel;
            public StringField HandlingPlace;
            public StringField Place;
            public StringField RepairRecord;
            public StringField RepairEmpId;
            public Int16Field Createuser;
            public DateTimeField Createdate;
            public Int16Field Updateuser;
            public DateTimeField Updatedate;
            public RowListField<RepairFormDetailRecordsRow> DetailList;
        }
    }
}
