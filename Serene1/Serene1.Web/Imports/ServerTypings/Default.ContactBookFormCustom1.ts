namespace Serene1.Default {
    export interface ContactBookFormCustom1 {
        Advise: Serenity.TextAreaEditor;
        ShowText: Serenity.StringEditor;
        Alreadyknow: Editor.AlreadyKnowEditor;
    }

    export class ContactBookFormCustom1 extends Serenity.PrefixedContext {
        static formKey = 'Default.ContactBookCustom1';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ContactBookFormCustom1.init)  {
                ContactBookFormCustom1.init = true;

                var s = Serenity;
                var w0 = s.TextAreaEditor;
                var w1 = s.StringEditor;
                var w2 = Editor.AlreadyKnowEditor;

                Q.initFormType(ContactBookFormCustom1, [
                    'Advise', w0,
                    'ShowText', w1,
                    'Alreadyknow', w2
                ]);
            }
        }
    }
}
