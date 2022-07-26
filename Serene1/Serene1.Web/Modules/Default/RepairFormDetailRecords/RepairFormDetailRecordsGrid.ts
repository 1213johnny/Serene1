
namespace Serene1.Default {

    @Serenity.Decorators.registerClass()
    export class RepairFormDetailRecordsGrid extends Serenity.EntityGrid<RepairFormDetailRecordsRow, any> {
        protected getColumnsKey() { return RepairFormDetailRecordsColumns.columnsKey; }
        protected getDialogType() { return RepairFormDetailRecordsDialog; }
        protected getIdProperty() { return RepairFormDetailRecordsRow.idProperty; }
        protected getInsertPermission() { return RepairFormDetailRecordsRow.insertPermission; }
        protected getLocalTextPrefix() { return RepairFormDetailRecordsRow.localTextPrefix; }
        protected getService() { return RepairFormDetailRecordsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}