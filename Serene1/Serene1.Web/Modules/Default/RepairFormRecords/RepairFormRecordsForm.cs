using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Default.Forms
{
    [FormScript("Default.RepairFormRecords")]
    [BasedOnRow(typeof(RepairFormRecordsRow), CheckNames = true)]
    public class RepairFormRecordsForm
    {
        public string CaseNo { get; set; }
        public DateTime RepairDate { get; set; }
        public string Township { get; set; }
        public string Area { get; set; }
        public string SubsidySource { get; set; }
        public string AssistiveSource { get; set; }
        public string ItemName { get; set; }
        public string MaterialNo { get; set; }
        public string ServiceType { get; set; }
        public short ServiceCount { get; set; }
        public string EvalutionLevel { get; set; }
        public string HandlingPlace { get; set; }
        public string Place { get; set; }
        public string RepairRecord { get; set; }
        public string RepairEmpId { get; set; }
        public short Createuser { get; set; }
        public DateTime Createdate { get; set; }
        public short Updateuser { get; set; }
        public DateTime Updatedate { get; set; }
    }
}