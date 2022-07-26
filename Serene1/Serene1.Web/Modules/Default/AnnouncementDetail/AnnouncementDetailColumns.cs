using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Default.Columns
{
    [ColumnsScript("Default.AnnouncementDetail")]
    [BasedOnRow(typeof(AnnouncementDetailRow), CheckNames = true)]
    public class AnnouncementDetailColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Oid { get; set; }
        public short AnnouncementsId { get; set; }
        [EditLink]
        public string TargetUser { get; set; }
        public string ReplyContent { get; set; }
        public DateTime ReplyDate { get; set; }
        public string ReplyUser { get; set; }
        public short Createuser { get; set; }
        public DateTime Createdate { get; set; }
        public short Updateuser { get; set; }
        public DateTime Updatedate { get; set; }
    }
}