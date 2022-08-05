namespace Serene1.Default {
    export interface CaseServiceDataForm {
        CaseNo: Serenity.StringEditor;
        PatientId: Serenity.StringEditor;
        PatientName: Serenity.StringEditor;
        RocId: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
        CreateUser: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUser: Serenity.IntegerEditor;
    }

    export class CaseServiceDataForm extends Serenity.PrefixedContext {
        static formKey = 'Default.CaseServiceData';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CaseServiceDataForm.init)  {
                CaseServiceDataForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(CaseServiceDataForm, [
                    'CaseNo', w0,
                    'PatientId', w0,
                    'PatientName', w0,
                    'RocId', w0,
                    'CreateDate', w1,
                    'CreateUser', w2,
                    'UpdateDate', w1,
                    'UpdateUser', w2
                ]);
            }
        }
    }
}
