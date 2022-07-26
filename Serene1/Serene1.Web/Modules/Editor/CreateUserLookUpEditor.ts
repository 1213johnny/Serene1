namespace Serene1.Editor {

    @Serenity.Decorators.registerEditor()
    export class CreateUserLookUpEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery, opt: Serenity.Select2EditorOptions) {
            super(container, opt);

            //Serene1.Administration.UserService.List({}, (r) => {
            //    if (r.TotalCount > 0) {
            //        $.each(r.Entities, (i, m) => {
            //            this.addOption(m.UserId.toString(), m.DisplayName);
            //        });
            //    }
            //}, { async: false });
            Serene1.Administration.UserRow.getLookup().items.forEach((m, i) => {
                this.addOption(m.UserId.toString(), (m.DisplayName ?? "未設定"));
                })
        }
    }
}