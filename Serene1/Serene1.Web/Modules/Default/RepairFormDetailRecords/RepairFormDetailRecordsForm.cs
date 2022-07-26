using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Default.Forms
{
    [FormScript("Default.RepairFormDetailRecords")]
    [BasedOnRow(typeof(RepairFormDetailRecordsRow), CheckNames = true)]
    public class RepairFormDetailRecordsForm
    {
        public int RepairFormRecordsId { get; set; }
        public string UseMaterial { get; set; }
        public short UseMaterialCount { get; set; }
        public decimal MaterialAmount { get; set; }
        public decimal SubsidyAmount { get; set; }
        public decimal PayAmount { get; set; }
        public short Createuser { get; set; }
        public DateTime Createdate { get; set; }
        public short Updateuser { get; set; }
        public DateTime Updatedate { get; set; }
    }
}