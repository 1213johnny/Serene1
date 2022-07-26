using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Default.Columns
{
    [ColumnsScript("Default.Employee")]
    [BasedOnRow(typeof(EmployeeRow), CheckNames = true)]
    public class EmployeeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Oid { get; set;
        }
        [EditLink]
        [QuickFilter]
        public string EmployeeId { get; set; }
        [QuickFilter]
        public string EmployeeName { get; set; }
        public string EmployeeEngName { get; set; }
        public string IdentificationCardNo { get; set; }
        public string UnitId { get; set; }
        public string DeptType { get; set; }
        [QuickFilter]
        //public string DeptId { get; set; }
        public string OrgId { get; set; }
        //public string PositionId { get; set; }
        [QuickFilter]
        [Hidden]
        public string PostType { get; set; }

        //public string PostId { get; set; }
        //public DateTime StartDate { get; set; }
        //public string Sex { get; set; }
        //public DateTime Birthday { get; set; }
        //public string CitizenId { get; set; }
        //public string BloodType { get; set; }
        //public string CountryId { get; set; }
        //public string RaceFlag { get; set; }
        //public string Homeland { get; set; }
        //public string MarryFlag { get; set; }
        //public string Educate { get; set; }
        //public string License { get; set; }
        //public string PractitionerRegisterFlag { get; set; }
        //public string Ranks { get; set; }
        //public string Standard { get; set; }
        //public string Years { get; set; }
        //public string Religion { get; set; }
        //public string Church { get; set; }
        //public string Address1 { get; set; }
        //public string Address2 { get; set; }
        //public string EmName { get; set; }
        //public string EmRelation { get; set; }
        //public string Telephone1 { get; set; }
        //public string Telephone2 { get; set; }
        //public string LeaveDate { get; set; }
        //public string RetireFlag { get; set; }
        //public string PatientId { get; set; }
        //public string Username { get; set; }
    }
}