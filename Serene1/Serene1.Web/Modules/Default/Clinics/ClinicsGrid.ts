
namespace Serene1.Default {

    @Serenity.Decorators.registerClass()
    export class ClinicsGrid extends Serenity.EntityGrid<ClinicsRow, any> {
        protected getColumnsKey() { return ClinicsColumns.columnsKey; }
        protected getDialogType() { return ClinicsDialog; }
        protected getIdProperty() { return ClinicsRow.idProperty; }
        protected getInsertPermission() { return ClinicsRow.insertPermission; }
        protected getLocalTextPrefix() { return ClinicsRow.localTextPrefix; }
        protected getService() { return ClinicsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}