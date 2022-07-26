using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Default.Columns
{
    [ColumnsScript("Default.EmpQuestionnaire")]
    [BasedOnRow(typeof(EmpQuestionnaireRow), CheckNames = true)]
    public class EmpQuestionnaireColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public string Oid { get; set; }
        public string EmpNo { get; set; }
        public DateTime QDate { get; set; }
        public short Age { get; set; }
        public short Height { get; set; }
        public short Weight { get; set; }
        public string Sex { get; set; }
        public string EmpLanguage { get; set; }
        public string EmpBody { get; set; }
        public string EmpWorkYear { get; set; }
        public string EmpTimePhase { get; set; }
        public string EmpArea { get; set; }
        public string EmpServiceLevel { get; set; }
        public string EmpSkill { get; set; }
        public string EmpDriverLicense { get; set; }
        public string EmpEmt1License { get; set; }
        public DateTime EmpEffectiveDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public short UpdateUser { get; set; }
    }
}