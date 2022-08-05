using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Default.Columns
{
    [ColumnsScript("Default.CaseServiceData")]
    [BasedOnRow(typeof(CaseServiceDataRow), CheckNames = true)]
    public class CaseServiceDataColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Oid { get; set; }
        [EditLink]
        public string CaseNo { get; set; }
        public string PatientId { get; set; }        
        public string PatientName { get; set; }
        public string RocId { get; set; }
        public DateTime CreateDate { get; set; }
        public int CreateUser { get; set; }
        public string CreateUserName { get; set; }
        public DateTime UpdateDate { get; set; }
        public int UpdateUser { get; set; }
        public string UpdateUserName { get; set; }
    }
}