using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using Serene1.Administration.Entities;

namespace Serene1.Default.Columns
{
    [ColumnsScript("Default.ContactBookCustom")]
    [BasedOnRow(typeof(ContactBookRow), CheckNames = true)]
    public class ContactBookColumnsCustom
    {
        [QuickFilter,/*filter*/]
        public string Caseno { get; set; }
        public string PatientName { get; set; }
        [QuickFilter]
        [DisplayFormat("yyyy/MM/dd HH:mm:ss")]
        public DateTime Advisedate { get; set; }
        public string Advise { get; set; }        
        public int Alreadyknow { get; set; }
        public string AlreadyknowExpre { get; set; }
        public Boolean Checkbox { get; set; }
        [QuickFilter]
        [Hidden]
        public string CreateUser { get; set;  }
    }
}