namespace Serene1.Default {
    export interface RepairFormDetailRecordsForm {
        RepairFormRecordsId: Serenity.IntegerEditor;
        UseMaterial: Serenity.StringEditor;
        UseMaterialCount: Serenity.IntegerEditor;
        MaterialAmount: Serenity.DecimalEditor;
        SubsidyAmount: Serenity.DecimalEditor;
        PayAmount: Serenity.DecimalEditor;
        Createuser: Serenity.IntegerEditor;
        Createdate: Serenity.DateEditor;
        Updateuser: Serenity.IntegerEditor;
        Updatedate: Serenity.DateEditor;
    }

    export class RepairFormDetailRecordsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.RepairFormDetailRecords';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RepairFormDetailRecordsForm.init)  {
                RepairFormDetailRecordsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.DateEditor;

                Q.initFormType(RepairFormDetailRecordsForm, [
                    'RepairFormRecordsId', w0,
                    'UseMaterial', w1,
                    'UseMaterialCount', w0,
                    'MaterialAmount', w2,
                    'SubsidyAmount', w2,
                    'PayAmount', w2,
                    'Createuser', w0,
                    'Createdate', w3,
                    'Updateuser', w0,
                    'Updatedate', w3
                ]);
            }
        }
    }
}
