
namespace Serene1.Default {

    @Serenity.Decorators.registerClass()
    export class SpecialCallingLogicsGrid extends Serenity.EntityGrid<SpecialCallingLogicsRow, any> {
        protected getColumnsKey() { return SpecialCallingLogicsColumns.columnsKey; }
        protected getDialogType() { return SpecialCallingLogicsDialog; }
        protected getIdProperty() { return SpecialCallingLogicsRow.idProperty; }
        protected getInsertPermission() { return SpecialCallingLogicsRow.insertPermission; }
        protected getLocalTextPrefix() { return SpecialCallingLogicsRow.localTextPrefix; }
        protected getService() { return SpecialCallingLogicsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}