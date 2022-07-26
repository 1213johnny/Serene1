using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Default.Forms
{
    [FormScript("Default.ContactBook")]
    [BasedOnRow(typeof(ContactBookRow), CheckNames = true)]
    public class ContactBookForm
    {
        public string Caseno { get; set; }
        public int Alreadyknow { get; set; }
        public string Advise { get; set; }
        public DateTime Advisedate { get; set; }
   
    }
}