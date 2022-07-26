    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

namespace Serene1.Default.Columns
{
    [ColumnsScript("ServiceAD.AnnouncementDetailCustom")]
    [BasedOnRow(typeof(AnnouncementDetailRow), CheckNames = true)]
    public class AnnounncementDetailColumnsCustom1
    {
        //[QuickFilter, SortOrder(1,true)]
        public DateTime Createdate { get; set; }
        public Int16 AnnouncementsId { get; set; }
       
        public String ReplyContent { get; set; }
      
    }
}