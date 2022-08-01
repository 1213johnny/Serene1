using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Default.Forms
{
    [FormScript("Default.RepairFormRecordsCustom")]
    [BasedOnRow(typeof(RepairFormRecordsRow), CheckNames = true)]
    public class RepairFormRecordsFormCustom
    {
        [HalfWidth]
        public string CaseNo { get; set; }
        [HalfWidth]
        public DateTime RepairDate { get; set; }
        [HalfWidth]
        public string Township { get; set; }
        [HalfWidth]
        public string Area { get; set; }
        [HalfWidth]
        public string SubsidySource { get; set; }
        [HalfWidth]
        public string AssistiveSource { get; set; }
        [HalfWidth]
        public string ItemName { get; set; }
        [HalfWidth]
        public string MaterialNo { get; set; }
        [HalfWidth]
        public string ServiceType { get; set; }
        [HalfWidth]
        public short ServiceCount { get; set; }
        [HalfWidth]
        public string EvalutionLevel { get; set; }
        [HalfWidth]
        public string HandlingPlace { get; set; }
        [HalfWidth]

        public string RepairEmpId { get; set; }


        [RepairFormRecordsGridEditor, FullWidth]
        [DisplayName("")]
        public List<RepairFormDetailRecordsRow> DetailList { get; set; }
    }
}
