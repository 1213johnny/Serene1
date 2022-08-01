
namespace Serene1.Default {

    @Serenity.Decorators.registerClass()
    export class SpecialCallingLogicsDialog extends Serenity.EntityDialog<SpecialCallingLogicsRow, any> {
        protected getFormKey() { return SpecialCallingLogicsForm.formKey; }
        protected getIdProperty() { return SpecialCallingLogicsRow.idProperty; }
        protected getLocalTextPrefix() { return SpecialCallingLogicsRow.localTextPrefix; }
        protected getNameProperty() { return SpecialCallingLogicsRow.nameProperty; }
        protected getService() { return SpecialCallingLogicsService.baseUrl; }
        protected getDeletePermission() { return SpecialCallingLogicsRow.deletePermission; }
        protected getInsertPermission() { return SpecialCallingLogicsRow.insertPermission; }
        protected getUpdatePermission() { return SpecialCallingLogicsRow.updatePermission; }

        protected form = new SpecialCallingLogicsForm(this.idPrefix);

    }
}