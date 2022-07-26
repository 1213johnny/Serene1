
namespace Serene1.Default {

    @Serenity.Decorators.registerClass()
    export class ContactBookGrid extends Serenity.EntityGrid<ContactBookRow, any> {
        protected getColumnsKey() { return ContactBookColumns.columnsKey; }
        protected getDialogType() { return ContactBookDialog; }
        protected getIdProperty() { return ContactBookRow.idProperty; }
        protected getInsertPermission() { return ContactBookRow.insertPermission; }
        protected getLocalTextPrefix() { return ContactBookRow.localTextPrefix; }
        protected getService() { return ContactBookService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        getQuickFilters() {
            let filter = super.getQuickFilters();

            let AlreadyFilter = Q.tryFirst(filter, x => x.field == "Alreadyknow");
            if (AlreadyFilter) {
                AlreadyFilter.init = w => {
                    (w as Editor.AlreadyKnowEditor).value = "0";
                }
            }

            return filter;
        }
    }
}