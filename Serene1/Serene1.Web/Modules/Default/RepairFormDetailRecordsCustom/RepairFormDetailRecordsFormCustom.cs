
namespace Serene1.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ServiceAD.RepairFormDetailRecordsCustom")]
    [BasedOnRow(typeof(Default.RepairFormDetailRecordsRow), CheckNames = true)]
    public class RepairFormDetailRecordsFormCustom
    {
        //[StaticTextBlock]
        //[Hidden]
        //public short RepairFormRecordsId { get; set; }
        public string UseMaterial { get; set; }
        public decimal MaterialAmount { get; set; }
        public decimal SubsidyAmount { get; set; }
        public string Updateuser { get; set;  }

        //[FormCssClass("line-break-sm")]
        //[HalfWidth(UntilNext = true)]
        //public String RepairEmpId { get; set; }
    }
}