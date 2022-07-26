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
    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Announcement]")]
    [DisplayName("Announcement"), InstanceName("Announcement")]
    [ReadPermission(DefaultPermissionKeys.Announcement.View)]
    [InsertPermission(DefaultPermissionKeys.Announcement.Add)]
    [ModifyPermission(DefaultPermissionKeys.Announcement.Modify)]
    [DeletePermission(DefaultPermissionKeys.Announcement.Delete)]

    public sealed class AnnouncementRow : Row<AnnouncementRow.RowFields>, IIdRow, INameRow , ILoggingRow
    {
        [DisplayName("Oid"), Column("OID"), Identity, IdProperty]
        public int? Oid
        {
            get => fields.Oid[this];
            set => fields.Oid[this] = value;
        }

        [DisplayName("Service Code"), Size(10), NotNull, QuickSearch, NameProperty]
        public string ServiceCode
        {
            get => fields.ServiceCode[this];
            set => fields.ServiceCode[this] = value;
        }

        [DisplayName("Announce Type"), Size(10)]
        public string AnnounceType
        {
            get => fields.AnnounceType[this];
            set => fields.AnnounceType[this] = value;
        }

        [DisplayName("Announce Desc"), Size(500)]
        public string AnnounceDesc
        {
            get => fields.AnnounceDesc[this];
            set => fields.AnnounceDesc[this] = value;
        }

        [DisplayName("Announce Priority"), Size(10)]
        public string AnnouncePriority
        {
            get => fields.AnnouncePriority[this];
            set => fields.AnnouncePriority[this] = value;
        }

        [DisplayName("Target Role Ids"), Size(100)]
        public string TargetRoleIds
        {
            get => fields.TargetRoleIds[this];
            set => fields.TargetRoleIds[this] = value;
        }

        [DisplayName("Target User Ids"), Size(100)]
        public string TargetUserIds
        {
            get => fields.TargetUserIds[this];
            set => fields.TargetUserIds[this] = value;
        }

        [DisplayName("Release Date")]
        public DateTime? ReleaseDate
        {
            get => fields.ReleaseDate[this];
            set => fields.ReleaseDate[this] = value;
        }

        [DisplayName("Attachments"), Size(1000)]
        public string Attachments
        {
            get => fields.Attachments[this];
            set => fields.Attachments[this] = value;
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

        public AnnouncementRow()
            : base()
        {
        }

        public AnnouncementRow(RowFields fields)
            : base(fields)
        {
        }

        [MasterDetailRelation(foreignKey: "AnnouncementsId"), NotMapped, MinSelectLevel(SelectLevel.Always)]
        public List<AnnouncementDetailRow> DetailList
        {
            get { return Fields.DetailList[this]; }
            set { Fields.DetailList[this] = value; }
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Oid;
            public StringField ServiceCode;
            public StringField AnnounceType;
            public StringField AnnounceDesc;
            public StringField AnnouncePriority;
            public StringField TargetRoleIds;
            public StringField TargetUserIds;
            public DateTimeField ReleaseDate;
            public StringField Attachments;
            public Int16Field Createuser;
            public DateTimeField Createdate;
            public Int16Field Updateuser;
            public DateTimeField Updatedate;
            public RowListField<AnnouncementDetailRow> DetailList;

        }
    }
}
