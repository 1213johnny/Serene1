
namespace Serene1.Default {

    @Serenity.Decorators.registerClass()
    export class RepairFormRecordsDialogCustom extends Serenity.EntityDialog<RepairFormRecordsRow, any> {
        protected getFormKey() { return RepairFormRecordsFormCustom.formKey; }
        protected getIdProperty() { return RepairFormRecordsRow.idProperty; }
        protected getLocalTextPrefix() { return RepairFormRecordsRow.localTextPrefix; }
        protected getNameProperty() { return RepairFormRecordsRow.nameProperty; }
        protected getService() { return RepairFormRecordsService.baseUrl; }
        protected getDeletePermission() { return RepairFormRecordsRow.deletePermission; }
        protected getInsertPermission() { return RepairFormRecordsRow.insertPermission; }
        protected getUpdatePermission() { return RepairFormRecordsRow.updatePermission; }

        protected form = new RepairFormRecordsForm(this.idPrefix);

    }
}