namespace Serene1.Default {
    export interface ContactBookForm {
        Caseno: Editor.LookUpEditor;
        Alreadyknow: Editor.AlreadyKnowEditor;
        Advise: Serenity.StringEditor;
        Advisedate: Serenity.DateEditor;
    }

    export class ContactBookForm extends Serenity.PrefixedContext {
        static formKey = 'Default.ContactBook';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ContactBookForm.init)  {
                ContactBookForm.init = true;

                var s = Serenity;
                var w0 = Editor.LookUpEditor;
                var w1 = Editor.AlreadyKnowEditor;
                var w2 = s.StringEditor;
                var w3 = s.DateEditor;

                Q.initFormType(ContactBookForm, [
                    'Caseno', w0,
                    'Alreadyknow', w1,
                    'Advise', w2,
                    'Advisedate', w3
                ]);
            }
        }
    }
}
