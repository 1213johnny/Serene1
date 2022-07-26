using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Default.Forms
{
    [FormScript("Default.EmployeeForm")]
    [BasedOnRow(typeof(EmployeeRow), CheckNames = true)]
    public class EmployeeForm
    {
        //[HalfWidth] 
        //public short Age { get; set; }
        //[HalfWidth]
        //public short Height { get; set; }
        //[HalfWidth]
        //public short  Weight { get; set; }
        //[HalfWidth]  
        //public string Sex { get; set; }
        //[HalfWidth]
        //public string EmpLanguage { get; set; }
        //[HalfWidth]
        //public string EmpBody { get; set; }
        //[HalfWidth]
        //public string EmpWorkYear { get; set; }
        //[HalfWidth]
        //public string EmpTimePhase { get; set; }
        //[HalfWidth]
        //public string EmpArea { get; set; }
        //[HalfWidth]
        //public string EmpServiceLevel { get; set; }o

        public string EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public string EmployeeEngName { get; set; }
        public string IdentificationCardNo { get; set; }
        public string UnitId { get; set; }
        public string DeptType { get; set; }
        public string DeptId { get; set; }
        public string OrgId { get; set; }
        public string PositionId { get; set; }
        public string PostType { get; set; }
        public string PostId { get; set; }
        public DateTime StartDate { get; set; }
        public string Sex { get; set; }
        public DateTime Birthday { get; set; }
        public string CitizenId { get; set; }
        public string BloodType { get; set; }
        public string CountryId { get; set; }
        public string RaceFlag { get; set; }
        public string Homeland { get; set; }
        public string MarryFlag { get; set; }
        public string Educate { get; set; }
        public string License { get; set; }
        public string PractitionerRegisterFlag { get; set; }
        public string Ranks { get; set; }
        public string Standard { get; set; }
        public string Years { get; set; }
        public string Religion { get; set; }
        public string Church { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string EmName { get; set; }
        public string EmRelation { get; set; }
        public string Telephone1 { get; set; }
        public string Telephone2 { get; set; }
        public string LeaveDate { get; set; }
        public string RetireFlag { get; set; }
        public string PatientId { get; set; }
        public string Username { get; set; }
    }
}