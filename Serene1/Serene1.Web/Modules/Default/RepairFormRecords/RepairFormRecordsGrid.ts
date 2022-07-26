
namespace Serene1.Default {

    @Serenity.Decorators.registerClass()
    export class RepairFormRecordsGrid extends Serenity.EntityGrid<RepairFormRecordsRow, any> {
        protected getColumnsKey() { return RepairFormRecordsColumns.columnsKey; }
        protected getDialogType() { return RepairFormRecordsDialog; }
        protected getIdProperty() { return RepairFormRecordsRow.idProperty; }
        protected getInsertPermission() { return RepairFormRecordsRow.insertPermission; }
        protected getLocalTextPrefix() { return RepairFormRecordsRow.localTextPrefix; }
        protected getService() { return RepairFormRecordsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}