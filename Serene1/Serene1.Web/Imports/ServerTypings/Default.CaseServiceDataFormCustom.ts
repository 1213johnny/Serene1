namespace Serene1.Default {
    export interface CaseServiceDataFormCustom {
        CaseNo: Serenity.StringEditor;
        PatientId: Serenity.StringEditor;
        RocId: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
        CreateUser: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUser: Serenity.IntegerEditor;
    }

    export class CaseServiceDataFormCustom extends Serenity.PrefixedContext {
        static formKey = 'Default.CaseServiceDataCustom';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CaseServiceDataFormCustom.init)  {
                CaseServiceDataFormCustom.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(CaseServiceDataFormCustom, [
                    'CaseNo', w0,
                    'PatientId', w0,
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
