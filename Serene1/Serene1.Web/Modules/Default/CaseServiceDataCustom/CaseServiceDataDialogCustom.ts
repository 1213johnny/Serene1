
namespace Serene1.Default {
    @Serenity.Decorators.registerClass()
    export class CaseServiceDataDialogCustom extends Serenity.EntityDialog<CaseServiceDataRow, any> {
        protected getFormKey() { return CaseServiceDataFormCustom.formKey; }
        protected getIdProperty() { return CaseServiceDataRow.idProperty; }
        protected getLocalTextPrefix() { return CaseServiceDataRow.localTextPrefix; }
        protected getNameProperty() { return CaseServiceDataRow.nameProperty; }
        protected getService() { return CaseServiceDataService.baseUrl; }
        protected getDeletePermission() { return CaseServiceDataRow.deletePermission; }
        protected getInsertPermission() { return CaseServiceDataRow.insertPermission; }
        protected getUpdatePermission() { return CaseServiceDataRow.updatePermission; }

        protected form = new CaseServiceDataFormCustom(this.idPrefix);

      
    }
}