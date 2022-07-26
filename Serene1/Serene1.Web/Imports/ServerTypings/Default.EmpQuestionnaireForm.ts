namespace Serene1.Default {
    export interface EmpQuestionnaireForm {
        Age: Serenity.IntegerEditor;
        Height: Serenity.IntegerEditor;
        Weight: Serenity.IntegerEditor;
        Sex: Editor.SexEditor;
        EmpLanguage: Editor.LanguageEditor;
        EmpBody: Editor.BodyEditor;
        EmpWorkYear: Editor.WorkYearEditor;
        EmpTimePhase: Editor.PhaseEditor;
        EmpArea: Editor.AreaEditor;
        EmpServiceLevel: Editor.LevelEditor;
        EmpNo: Serenity.StringEditor;
        QDate: Serenity.DateEditor;
    }

    export class EmpQuestionnaireForm extends Serenity.PrefixedContext {
        static formKey = 'Default.EmpQuestionnaire';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmpQuestionnaireForm.init)  {
                EmpQuestionnaireForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = Editor.SexEditor;
                var w2 = Editor.LanguageEditor;
                var w3 = Editor.BodyEditor;
                var w4 = Editor.WorkYearEditor;
                var w5 = Editor.PhaseEditor;
                var w6 = Editor.AreaEditor;
                var w7 = Editor.LevelEditor;
                var w8 = s.StringEditor;
                var w9 = s.DateEditor;

                Q.initFormType(EmpQuestionnaireForm, [
                    'Age', w0,
                    'Height', w0,
                    'Weight', w0,
                    'Sex', w1,
                    'EmpLanguage', w2,
                    'EmpBody', w3,
                    'EmpWorkYear', w4,
                    'EmpTimePhase', w5,
                    'EmpArea', w6,
                    'EmpServiceLevel', w7,
                    'EmpNo', w8,
                    'QDate', w9
                ]);
            }
        }
    }
}
