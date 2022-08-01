using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Serene1.Default
{
    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[SpecialCallingLogics]")]
    [DisplayName("Special Calling Logics"), InstanceName("Special Calling Logics")]
    [ReadPermission(DefaultPermissionKeys.SpecialCallingLogics.View)]
    [InsertPermission(DefaultPermissionKeys.SpecialCallingLogics.Add)]
    [ModifyPermission(DefaultPermissionKeys.SpecialCallingLogics.Modify)]
    [DeletePermission(DefaultPermissionKeys.SpecialCallingLogics.Delete)]
    public sealed class SpecialCallingLogicsRow : Row<SpecialCallingLogicsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), PrimaryKey,Identity, NotNull, IdProperty]
        public Guid? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Package Name"), Size(15), NotNull, QuickSearch, NameProperty]
        public string PackageName
        {
            get => fields.PackageName[this];
            set => fields.PackageName[this] = value;
        }

        [DisplayName("Special Status"), NotNull]
        [Editor.StatusEditor]
        public int? SpecialStatus
        {
            get => fields.SpecialStatus[this];
            set => fields.SpecialStatus[this] = value;
        }

        [DisplayName("Seq"), NotNull]
        public int? Seq
        {
            get => fields.Seq[this];
            set => fields.Seq[this] = value;
        }

        [DisplayName("Raguler Count"), NotNull]
        public int? RagulerCount
        {
            get => fields.RagulerCount[this];
            set => fields.RagulerCount[this] = value;
        }

        [DisplayName("Call Count"), NotNull]
        public int? CallCount
        {
            get => fields.CallCount[this];
            set => fields.CallCount[this] = value;
        }

        [DisplayName("Old Age")]
        public int? OldAge
        {
            get => fields.OldAge[this];
            set => fields.OldAge[this] = value;
        }

        public SpecialCallingLogicsRow()
            : base()
        {
        }

        public SpecialCallingLogicsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public GuidField Id;
            public StringField PackageName;
            public Int32Field SpecialStatus;
            public Int32Field Seq;
            public Int32Field RagulerCount;
            public Int32Field CallCount;
            public Int32Field OldAge;
        }
    }
}
