using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Default.Columns
{
    [ColumnsScript("Default.ContactBook")]
    [BasedOnRow(typeof(ContactBookRow), CheckNames = true)]
    public class ContactBookColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Oid { get; set; }
        [EditLink]
        public string Caseno { get; set; }
        [QuickFilter]
        public int Alreadyknow { get; set; }
        public string Advise { get; set; }
        public string PatientName { get; set; }
       
        public DateTime Advisedate { get; set; }   
        public int CreateUser { get; set; }
        public string CreateUserName { get; set; }
        public DateTime CreateDate { get; set; }
        public int UpdateUser { get; set; }
        public string UpdateUserName { get; set; }
        public DateTime UpdateDate { get; set; }
        

    }
}