
namespace Serene1.Default {

    @Serenity.Decorators.registerClass()
    export class ClinicsDialog extends Serenity.EntityDialog<ClinicsRow, any> {
        protected getFormKey() { return ClinicsForm.formKey; }
        protected getIdProperty() { return ClinicsRow.idProperty; }
        protected getLocalTextPrefix() { return ClinicsRow.localTextPrefix; }
        protected getNameProperty() { return ClinicsRow.nameProperty; }
        protected getService() { return ClinicsService.baseUrl; }
        protected getDeletePermission() { return ClinicsRow.deletePermission; }
        protected getInsertPermission() { return ClinicsRow.insertPermission; }
        protected getUpdatePermission() { return ClinicsRow.updatePermission; }

        protected form = new ClinicsForm(this.idPrefix);

    }
}