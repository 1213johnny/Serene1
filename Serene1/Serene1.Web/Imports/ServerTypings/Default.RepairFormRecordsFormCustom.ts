namespace Serene1.Default {
    export interface RepairFormRecordsFormCustom {
        CaseNo: Serenity.StringEditor;
        RepairDate: Serenity.DateEditor;
        Township: Serenity.StringEditor;
        Area: Serenity.StringEditor;
        SubsidySource: Serenity.StringEditor;
        AssistiveSource: Serenity.StringEditor;
        ItemName: Serenity.StringEditor;
        MaterialNo: Serenity.StringEditor;
        ServiceType: Serenity.StringEditor;
        ServiceCount: Serenity.IntegerEditor;
        EvalutionLevel: Serenity.StringEditor;
        HandlingPlace: Serenity.StringEditor;
        RepairEmpId: Serenity.StringEditor;
        DetailList: RepairFormRecordsGridEditor;
    }

    export class RepairFormRecordsFormCustom extends Serenity.PrefixedContext {
        static formKey = 'Default.RepairFormRecordsCustom';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RepairFormRecordsFormCustom.init)  {
                RepairFormRecordsFormCustom.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;
                var w3 = RepairFormRecordsGridEditor;

                Q.initFormType(RepairFormRecordsFormCustom, [
                    'CaseNo', w0,
                    'RepairDate', w1,
                    'Township', w0,
                    'Area', w0,
                    'SubsidySource', w0,
                    'AssistiveSource', w0,
                    'ItemName', w0,
                    'MaterialNo', w0,
                    'ServiceType', w0,
                    'ServiceCount', w2,
                    'EvalutionLevel', w0,
                    'HandlingPlace', w0,
                    'RepairEmpId', w0,
                    'DetailList', w3
                ]);
            }
        }
    }
}
