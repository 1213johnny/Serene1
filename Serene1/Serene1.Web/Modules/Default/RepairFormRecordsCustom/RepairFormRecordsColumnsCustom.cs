using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Default.Columns
{
    [ColumnsScript("Default.RepairFormRecordsCustom")]
    [BasedOnRow(typeof(RepairFormRecordsRow), CheckNames = true)]
    public class RepairFormRecordsColumnsCustom
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [Hidden]
   
        public int Oid { get; set; }
        [EditLink]
        [Hidden]
       
        public string CaseNo { get; set; }
        [QuickFilter]
      
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
     
        public string Place { get; set; }
        [QuickFilter]
 
        public string RepairEmpId { get; set; }
      
    }
}