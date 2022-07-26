namespace Serene1.Default {
    export interface RepairFormRecordsForm {
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
        Place: Serenity.StringEditor;
        RepairRecord: Serenity.StringEditor;
        RepairEmpId: Serenity.StringEditor;
        Createuser: Serenity.IntegerEditor;
        Createdate: Serenity.DateEditor;
        Updateuser: Serenity.IntegerEditor;
        Updatedate: Serenity.DateEditor;
    }

    export class RepairFormRecordsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.RepairFormRecords';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RepairFormRecordsForm.init)  {
                RepairFormRecordsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(RepairFormRecordsForm, [
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
                    'Place', w0,
                    'RepairRecord', w0,
                    'RepairEmpId', w0,
                    'Createuser', w2,
                    'Createdate', w1,
                    'Updateuser', w2,
                    'Updatedate', w1
                ]);
            }
        }
    }
}
