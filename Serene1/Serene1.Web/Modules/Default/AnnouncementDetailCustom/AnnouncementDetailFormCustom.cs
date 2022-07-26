
namespace Serene1.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ServiceAD.AnnouncementDetailCustom")]
    [BasedOnRow(typeof(Default.AnnouncementDetailRow), CheckNames = true)]
    public class AnnouncementDetailFormCustom
    {
        //[StaticTextBlock]
        public string TargetUser { get; set; }
        //[FormCssClass("line-break-sm")]
        //[HalfWidth(UntilNext = true)]
        //public String RepairEmpId { get; set; }
    }
}