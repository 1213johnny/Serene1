namespace Serene1.Default {
    export interface RepairFormDetailRecordsFormCustom {
        UseMaterial: Serenity.StringEditor;
        MaterialAmount: Serenity.DecimalEditor;
        SubsidyAmount: Serenity.DecimalEditor;
        Updateuser: Serenity.StringEditor;
    }

    export class RepairFormDetailRecordsFormCustom extends Serenity.PrefixedContext {
        static formKey = 'ServiceAD.RepairFormDetailRecordsCustom';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RepairFormDetailRecordsFormCustom.init)  {
                RepairFormDetailRecordsFormCustom.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(RepairFormDetailRecordsFormCustom, [
                    'UseMaterial', w0,
                    'MaterialAmount', w1,
                    'SubsidyAmount', w1,
                    'Updateuser', w0
                ]);
            }
        }
    }
}
