    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

namespace Serene1.Default.Columns
{
    [ColumnsScript("ServiceAD.RepairFormDetailRecordsCustom")]
    [BasedOnRow(typeof(RepairFormDetailRecordsRow), CheckNames = true)]
    public class RepairFormDetailRecordsColumnsCustom
    {
        //[QuickFilter, SortOrder(1,true)]
      

        public String UseMaterial { get; set; }
        public Decimal MaterialAmount { get; set; }
        public Decimal SubsidyAmount { get; set; }
        public Decimal PayAmount { get; set; }



    }
}