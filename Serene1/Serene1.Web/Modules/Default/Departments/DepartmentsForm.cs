using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Default.Forms
{
    [FormScript("Default.Departments")]
    [BasedOnRow(typeof(DepartmentsRow), CheckNames = true)]
    public class DepartmentsForm
    {
        public string DeptNo { get; set; }
        public string DeptName { get; set; }
        public string DeptNameEng { get; set; }
        public bool Hiddent { get; set; }
    }
}