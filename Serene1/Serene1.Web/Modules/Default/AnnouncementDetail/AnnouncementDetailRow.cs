using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Serene1.Default
{
    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[AnnouncementDetail]")]
    [DisplayName("Announcement Detail"), InstanceName("Announcement Detail")]
    [ReadPermission(DefaultPermissionKeys.AnnouncementDetail.View)]
    [InsertPermission(DefaultPermissionKeys.AnnouncementDetail.Add)]
    [ModifyPermission(DefaultPermissionKeys.AnnouncementDetail.Modify)]
    [DeletePermission(DefaultPermissionKeys.AnnouncementDetail.Delete)]
    public sealed class AnnouncementDetailRow : Row<AnnouncementDetailRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Oid"), Column("OID"), Identity, IdProperty]
        public int? Oid
        {
            get => fields.Oid[this];
            set => fields.Oid[this] = value;
        }

        [DisplayName("Announcements Id"), NotNull]
        public short? AnnouncementsId
        {
            get => fields.AnnouncementsId[this];
            set => fields.AnnouncementsId[this] = value;
        }

        [DisplayName("Target User"), Size(20), QuickSearch, NameProperty]
        public string TargetUser
        {
            get => fields.TargetUser[this];
            set => fields.TargetUser[this] = value;
        }

        [DisplayName("Reply Content"), Size(500)]
        public string ReplyContent
        {
            get => fields.ReplyContent[this];
            set => fields.ReplyContent[this] = value;
        }

        [DisplayName("Reply Date")]
        public DateTime? ReplyDate
        {
            get => fields.ReplyDate[this];
            set => fields.ReplyDate[this] = value;
        }

        [DisplayName("Reply User"), Size(20)]
        public string ReplyUser
        {
            get => fields.ReplyUser[this];
            set => fields.ReplyUser[this] = value;
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

        public AnnouncementDetailRow()
            : base()
        {
        }

        public AnnouncementDetailRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Oid;
            public Int16Field AnnouncementsId;
            public StringField TargetUser;
            public StringField ReplyContent;
            public DateTimeField ReplyDate;
            public StringField ReplyUser;
            public Int16Field Createuser;
            public DateTimeField Createdate;
            public Int16Field Updateuser;
            public DateTimeField Updatedate;
        }
    }
}
