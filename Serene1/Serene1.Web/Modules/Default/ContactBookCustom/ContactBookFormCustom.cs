using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Default.Forms
{
    [FormScript("Default.ContactBookCustom")]
    [BasedOnRow(typeof(ContactBookRow), CheckNames = true)]
    public class ContactBookFormCustom
    {
        [OneThirdWidth(JustThis = true)]
        [LabelWidth(150)]
        public string Caseno { get; set; }       
        
        [LabelWidth(150)]
        [OneThirdWidth(JustThis = true)]
        public DateTime Advisedate { get; set; }
        
        [TextAreaEditor(Cols =5)]
        [LabelWidth(150)]
        public string Advise { get; set; }

        [ReadOnly(true),DefaultValue(0)]
        [LabelWidth(150)]
        [QuarterWidth(JustThis = true)]
        public int Alreadyknow { get; set; }

        [LabelWidth(150)]
        [QuarterWidth(JustThis = true)]
        public Boolean Checkbox { get; set; }
        [Hidden]
        public string PatientName { get; set; }
        
    }
}