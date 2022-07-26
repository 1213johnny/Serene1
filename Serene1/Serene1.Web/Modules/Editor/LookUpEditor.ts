namespace Serene1.Editor {

    @Serenity.Decorators.registerEditor()
    export class LookUpEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery, opt: Serenity.Select2EditorOptions) {
            super(container, opt);

            Serene1.Default.CaseServiceDataService.List({}, (r) => {
                if (r.TotalCount > 0) {
                    $.each(r.Entities, (i, m) => {
                        this.addOption(m.CaseNo, m.PatientId);
                    });
                }
            }, { async: false });
        //    Serene1.Default.CaseServiceDataRow.getLookup().items.forEach((m, i) => {
        //        this.addOption(m.CaseNo, (m.RocId ?? "未設定"));
        //    })
        }
    }
}