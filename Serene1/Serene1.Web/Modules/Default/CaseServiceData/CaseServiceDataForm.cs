using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Default.Forms
{
    [FormScript("Default.CaseServiceData")]
    [BasedOnRow(typeof(CaseServiceDataRow), CheckNames = true)]
    public class CaseServiceDataForm
    {
        public string CaseNo { get; set; }
        public string PatientId { get; set; }
        public string PatientName { get; set; }
        public string RocId { get; set; }
        public DateTime CreateDate { get; set; }
        public int CreateUser { get; set; }
        public DateTime UpdateDate { get; set; }
        public int UpdateUser { get; set; }
    }
}