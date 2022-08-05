namespace Serene1.Default {
    export interface ContactBookFormCustom {
        Caseno: Editor.LookUpEditor;
        Advisedate: Serenity.DateEditor;
        Advise: Serenity.TextAreaEditor;
        Alreadyknow: Editor.AlreadyKnowEditor;
        Checkbox: Serenity.BooleanEditor;
        PatientName: Serenity.StringEditor;
    }

    export class ContactBookFormCustom extends Serenity.PrefixedContext {
        static formKey = 'Default.ContactBookCustom';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ContactBookFormCustom.init)  {
                ContactBookFormCustom.init = true;

                var s = Serenity;
                var w0 = Editor.LookUpEditor;
                var w1 = s.DateEditor;
                var w2 = s.TextAreaEditor;
                var w3 = Editor.AlreadyKnowEditor;
                var w4 = s.BooleanEditor;
                var w5 = s.StringEditor;

                Q.initFormType(ContactBookFormCustom, [
                    'Caseno', w0,
                    'Advisedate', w1,
                    'Advise', w2,
                    'Alreadyknow', w3,
                    'Checkbox', w4,
                    'PatientName', w5
                ]);
            }
        }
    }
}
