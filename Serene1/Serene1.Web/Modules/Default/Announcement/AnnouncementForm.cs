using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Default.Forms
{
    [FormScript("Default.Announcement")]
    [BasedOnRow(typeof(AnnouncementRow), CheckNames = true)]
    public class AnnouncementForm
    {
        public string ServiceCode { get; set; }
        public string AnnounceType { get; set; }
        public string AnnounceDesc { get; set; }
        public string AnnouncePriority { get; set; }
        public string TargetRoleIds { get; set; }
        public string TargetUserIds { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string Attachments { get; set; }
        public short Createuser { get; set; }
        public DateTime Createdate { get; set; }
        public short Updateuser { get; set; }
        public DateTime Updatedate { get; set; }
    }
}