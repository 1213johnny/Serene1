namespace Serene1.Default {
    export interface ClinicsForm {
        DeptNo: Serenity.StringEditor;
        ClinicNo: Serenity.StringEditor;
        ClinicName: Serenity.StringEditor;
        ClinicNameEng: Serenity.StringEditor;
    }

    export class ClinicsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Clinics';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ClinicsForm.init)  {
                ClinicsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ClinicsForm, [
                    'DeptNo', w0,
                    'ClinicNo', w0,
                    'ClinicName', w0,
                    'ClinicNameEng', w0
                ]);
            }
        }
    }
}
