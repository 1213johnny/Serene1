using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Default.Forms
{
    [FormScript("Default.AnnouncementCustom")]
    [BasedOnRow(typeof(AnnouncementRow), CheckNames = true)]
    public class AnnouncementFormCustom
    {
        public string ServiceCode { get; set; }
        public string AnnounceType { get; set; }
        public string AnnounceDesc { get; set; }
        public string AnnouncePriority { get; set; }
        public string TargetRoleIds { get; set; }
        public string TargetUserIds { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string Attachments { get; set; }

        [AnnouncementGridEditor, FullWidth]
        [DisplayName("")]
        public List<AnnouncementDetailRow> DetailList { get; set; }
    }
}