using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Default.Forms
{
    [FormScript("Default.ContactBookCustom1")]
    [BasedOnRow(typeof(ContactBookRow), CheckNames = true)]
    public class ContactBookFormCustom1
    {
       
        [TextAreaEditor(Cols = 5)]
        public string Advise { get; set; }
        
       // [ReadOnly(true), DefaultValue(0)]
        [IgnoreName] [OneWay] 
        public string ShowText{ get; set; }
        [ReadOnly(true), DefaultValue(0),Hidden]
        public int Alreadyknow { get; set; }





    }
}