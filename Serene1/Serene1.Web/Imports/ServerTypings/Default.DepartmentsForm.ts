namespace Serene1.Default {
    export interface DepartmentsForm {
        DeptNo: Serenity.StringEditor;
        DeptName: Serenity.StringEditor;
        DeptNameEng: Serenity.StringEditor;
        Hiddent: Serenity.BooleanEditor;
    }

    export class DepartmentsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Departments';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DepartmentsForm.init)  {
                DepartmentsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;

                Q.initFormType(DepartmentsForm, [
                    'DeptNo', w0,
                    'DeptName', w0,
                    'DeptNameEng', w0,
                    'Hiddent', w1
                ]);
            }
        }
    }
}
