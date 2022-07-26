using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Default.Columns
{
    [ColumnsScript("Default.RepairFormDetailRecords")]
    [BasedOnRow(typeof(RepairFormDetailRecordsRow), CheckNames = true)]
    public class RepairFormDetailRecordsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Oid { get; set; }
        public int RepairFormRecordsId { get; set; }
        [EditLink]
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