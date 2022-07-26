using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Default.Columns
{
    [ColumnsScript("Default.AnnouncementCustom")]
    [BasedOnRow(typeof(AnnouncementRow), CheckNames = true)]
    public class AnnouncementColumnsCustom
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [Hidden]
        public int Oid { get; set; }
        [EditLink]
        public string ServiceCode { get; set; }
        public string AnnounceType { get; set; }
        public string AnnounceDesc { get; set; }
        public string AnnouncePriority { get; set; }
        public string TargetRoleIds { get; set; }
        public string TargetUserIds { get; set; }
    }
}