using Serene1.Administration.Entities;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;


namespace Serene1.Default
{
    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[EmpQuestionnaire]")]
    [DisplayName("Emp Questionnaire"), InstanceName("Emp Questionnaire")]
    [ReadPermission(DefaultPermissionKeys.EmpQuestionnaire.View)]
    [InsertPermission(DefaultPermissionKeys.EmpQuestionnaire.Add)]
    [ModifyPermission(DefaultPermissionKeys.EmpQuestionnaire.Modify)]
    [DeletePermission(DefaultPermissionKeys.EmpQuestionnaire.Delete)]
    public sealed class EmpQuestionnaireRow : Row<EmpQuestionnaireRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Oid"), Column("OID"), Size(128), NotNull, IdProperty, QuickSearch, NameProperty]
        public string Oid
        {
            get => fields.Oid[this];
            set => fields.Oid[this] = value;
        }

        [DisplayName("Emp No"), Column("Emp_No"), Size(10), NotNull,LookupInclude]
        public string EmpNo
        {
            get => fields.EmpNo[this];
            set => fields.EmpNo[this] = value;
        }

        [DisplayName("Q Date"), Column("Q_Date"), NotNull]
        public DateTime? QDate
        {
            get => fields.QDate[this];
            set => fields.QDate[this] = value;
        }

        [DisplayName("Age")]
        public short? Age
        {
            get => fields.Age[this];
            set => fields.Age[this] = value;
        }

        [DisplayName("Height")]
        public short? Height
        {
            get => fields.Height[this];
            set => fields.Height[this] = value;
        }

        [DisplayName("Weight")]
        public short? Weight
        {
            get => fields.Weight[this];
            set => fields.Weight[this] = value;
        }
       
        [DisplayName("Sex"), Column("SEX"), Size(1)] 
        [Editor.SexEditor]
        public string Sex
        {
            get => fields.Sex[this];
            set => fields.Sex[this] = value;
        }

        [DisplayName("Emp Language"), Column("Emp_Language"), Size(70)]
        [Editor.LanguageEditor(Delimited =true,Multiple =true)]
        public string EmpLanguage
        {
            get => fields.EmpLanguage[this];
            set => fields.EmpLanguage[this] = value;
        }

        [DisplayName("Emp Body"), Column("Emp_Body"), Size(1)]
        [Editor.BodyEditor]
        public string EmpBody
        {
            get => fields.EmpBody[this];
            set => fields.EmpBody[this] = value;
        }

        [DisplayName("Emp Work Year"), Column("Emp_Work_Year"), Size(20)]
        [Editor.WorkYearEditor]
        public string EmpWorkYear
        {
            get => fields.EmpWorkYear[this];
            set => fields.EmpWorkYear[this] = value;
        }

        [DisplayName("Emp Time Phase"), Column("Emp_Time_Phase"), Size(20)]
        [Editor.PhaseEditor(Delimited = true, Multiple = true)]
        public string EmpTimePhase
        {
            get => fields.EmpTimePhase[this];
            set => fields.EmpTimePhase[this] = value;
        }

        [DisplayName("Emp Area"), Column("Emp_Area"), Size(20)]
        [Editor.AreaEditor(Delimited = true, Multiple = true)]
        public string EmpArea
        {
            get => fields.EmpArea[this];
            set => fields.EmpArea[this] = value;
        }

        [DisplayName("Emp Service Level"), Column("Emp_Service_Level"), Size(20),]
        [Editor.LevelEditor(Delimited = true, Multiple = true)]
        public string EmpServiceLevel 
        {
            get => fields.EmpServiceLevel[this];
            set => fields.EmpServiceLevel[this] = value;
        }

        [DisplayName("Emp Skill"), Column("Emp_Skill"), Size(20)]
        public string EmpSkill
        {
            get => fields.EmpSkill[this];
            set => fields.EmpSkill[this] = value;
        }

        [DisplayName("Emp Driver License"), Column("Emp_Driver_License"), Size(20)]
        public string EmpDriverLicense
        {
            get => fields.EmpDriverLicense[this];
            set => fields.EmpDriverLicense[this] = value;
        }

        [DisplayName("Emp Emt1 License"), Column("Emp_EMT1_License"), Size(1)]
        public string EmpEmt1License
        {
            get => fields.EmpEmt1License[this];
            set => fields.EmpEmt1License[this] = value;
        }

        [DisplayName("Emp Effective Date"), Column("Emp_Effective_Date")]
        public DateTime? EmpEffectiveDate
        {
            get => fields.EmpEffectiveDate[this];
            set => fields.EmpEffectiveDate[this] = value;
        }

        [DisplayName("Update Date"), Column("Update_Date")]
        public DateTime? UpdateDate
        {
            get => fields.UpdateDate[this];
            set => fields.UpdateDate[this] = value;
        }

        [DisplayName("Update User"), Column("Update_User")]
        public short? UpdateUser
        {
            get => fields.UpdateUser[this];
            set => fields.UpdateUser[this] = value;
        }

        public EmpQuestionnaireRow()
            : base()
        {
        }

        public EmpQuestionnaireRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField Oid;
            public StringField EmpNo;
            public DateTimeField QDate;
            public Int16Field Age;
            public Int16Field Height;
            public Int16Field Weight;
            public StringField Sex;
            public StringField EmpLanguage;
            public StringField EmpBody;
            public StringField EmpWorkYear;
            public StringField EmpTimePhase;
            public StringField EmpArea;
            public StringField EmpServiceLevel;
            public StringField EmpSkill;
            public StringField EmpDriverLicense;
            public StringField EmpEmt1License;
            public DateTimeField EmpEffectiveDate;
            public DateTimeField UpdateDate;
            public Int16Field UpdateUser;
        }
    }
}
