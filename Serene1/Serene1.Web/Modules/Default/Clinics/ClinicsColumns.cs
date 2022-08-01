using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Default.Columns
{
    [ColumnsScript("Default.Clinics")]
    [BasedOnRow(typeof(ClinicsRow), CheckNames = true)]
    public class ClinicsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public string DeptNo { get; set; }
        public string ClinicNo { get; set; }
        public string ClinicName { get; set; }
        public string ClinicNameEng { get; set; }
    }
}