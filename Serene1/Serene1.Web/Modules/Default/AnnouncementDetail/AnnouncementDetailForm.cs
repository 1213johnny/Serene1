using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Default.Forms
{
    [FormScript("Default.AnnouncementDetail")]
    [BasedOnRow(typeof(AnnouncementDetailRow), CheckNames = true)]
    public class AnnouncementDetailForm
    {
        public short AnnouncementsId { get; set; }
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