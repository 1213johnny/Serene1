namespace Serene1.Default {
    export interface SpecialCallingLogicsForm {
        PackageName: Serenity.StringEditor;
        SpecialStatus: Editor.StatusEditor;
        Seq: Serenity.IntegerEditor;
        RagulerCount: Serenity.IntegerEditor;
        CallCount: Serenity.IntegerEditor;
        OldAge: Serenity.IntegerEditor;
    }

    export class SpecialCallingLogicsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.SpecialCallingLogics';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SpecialCallingLogicsForm.init)  {
                SpecialCallingLogicsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = Editor.StatusEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(SpecialCallingLogicsForm, [
                    'PackageName', w0,
                    'SpecialStatus', w1,
                    'Seq', w2,
                    'RagulerCount', w2,
                    'CallCount', w2,
                    'OldAge', w2
                ]);
            }
        }
    }
}
