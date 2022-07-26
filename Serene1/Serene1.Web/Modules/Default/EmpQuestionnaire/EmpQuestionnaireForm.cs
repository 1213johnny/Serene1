using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Default.Forms
{
    [FormScript("Default.EmpQuestionnaire")]
    [BasedOnRow(typeof(EmpQuestionnaireRow), CheckNames = true)]
    public class EmpQuestionnaireForm
    {

        [HalfWidth]
        public short Age { get; set; }
        [HalfWidth]
        public short Height { get; set; }
        [HalfWidth]
        public short Weight { get; set; }
        [HalfWidth]
        public string Sex { get; set; }
        [HalfWidth]
        public string EmpLanguage { get; set; }
        [HalfWidth]
        public string EmpBody { get; set; }
        [HalfWidth]
        public string EmpWorkYear { get; set; }
        [HalfWidth]
        public string EmpTimePhase { get; set; }
        [HalfWidth]
        public string EmpArea { get; set; }
        [HalfWidth]
        public string EmpServiceLevel { get; set; }
        [Hidden]
        public string EmpNo { get; set; }
        [Hidden]
        public DateTime QDate { get; set; }


        //public short Height { get; set; }

        //public short Weight { get; set; }

        //public string Sex { get; set; } 

        //public string EmpLanguage { get; set; }
        //public string EmpBody { get; set; }
        //public DateTime QDate { get; set; }

        //public short Age { get; set; }

        //public string EmpWorkYear { get; set; }
        //public string EmpTimePhase { get; set; }
        //public string EmpArea { get; set; }
        //public string EmpServiceLevel { get; set; }
        //public string EmpSkill { get; set; }
        //public string EmpDriverLicense { get; set; }
        //public string EmpEmt1License { get; set; }
        //public DateTime EmpEffectiveDate { get; set; }
        //public DateTime UpdateDate { get; set; }
        //public short UpdateUser { get; set; }
    }
}