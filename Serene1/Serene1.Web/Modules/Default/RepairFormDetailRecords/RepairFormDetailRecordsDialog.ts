
namespace Serene1.Default {

    @Serenity.Decorators.registerClass()
    export class RepairFormDetailRecordsDialog extends Serenity.EntityDialog<RepairFormDetailRecordsRow, any> {
        protected getFormKey() { return RepairFormDetailRecordsForm.formKey; }
        protected getIdProperty() { return RepairFormDetailRecordsRow.idProperty; }
        protected getLocalTextPrefix() { return RepairFormDetailRecordsRow.localTextPrefix; }
        protected getNameProperty() { return RepairFormDetailRecordsRow.nameProperty; }
        protected getService() { return RepairFormDetailRecordsService.baseUrl; }
        protected getDeletePermission() { return RepairFormDetailRecordsRow.deletePermission; }
        protected getInsertPermission() { return RepairFormDetailRecordsRow.insertPermission; }
        protected getUpdatePermission() { return RepairFormDetailRecordsRow.updatePermission; }

        protected form = new RepairFormDetailRecordsForm(this.idPrefix);

    }
}