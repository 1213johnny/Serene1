
namespace Serene1.Default {
    @Serenity.Decorators.panel(true)
    @Serenity.Decorators.registerClass()
    export class EmpQuestionnaireGrid extends Serenity.EntityGrid<EmpQuestionnaireRow, any> {
        protected getColumnsKey() { return EmpQuestionnaireColumns.columnsKey; }
        protected getDialogType() { return EmpQuestionnaireDialog; }
        protected getIdProperty() { return EmpQuestionnaireRow.idProperty; }
        protected getInsertPermission() { return EmpQuestionnaireRow.insertPermission; }
        protected getLocalTextPrefix() { return EmpQuestionnaireRow.localTextPrefix; }
        protected getService() { return EmpQuestionnaireService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}