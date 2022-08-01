using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Default.Forms
{
    [FormScript("Default.Clinics")]
    [BasedOnRow(typeof(ClinicsRow), CheckNames = true)]
    public class ClinicsForm
    {
        public string DeptNo { get; set; }
        public string ClinicNo { get; set; }
        public string ClinicName { get; set; }
        public string ClinicNameEng { get; set; }
    }
}