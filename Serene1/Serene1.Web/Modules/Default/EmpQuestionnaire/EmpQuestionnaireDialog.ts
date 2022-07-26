
namespace Serene1.Default {
    @Serenity.Decorators.panel(true)
    @Serenity.Decorators.registerClass()
    export class EmpQuestionnaireDialog extends Serenity.EntityDialog<EmpQuestionnaireRow, any> {
        protected getFormKey() { return EmpQuestionnaireForm.formKey; }
        protected getIdProperty() { return EmpQuestionnaireRow.idProperty; }
        protected getLocalTextPrefix() { return EmpQuestionnaireRow.localTextPrefix; }
        //protected getNameProperty() { return EmpQuestionnaireRow.nameProperty; }
        protected getService() { return EmpQuestionnaireService.baseUrl; }
        protected getDeletePermission() { return EmpQuestionnaireRow.deletePermission; }
        protected getInsertPermission() { return EmpQuestionnaireRow.insertPermission; }
        protected getUpdatePermission() { return EmpQuestionnaireRow.updatePermission; }

        protected form = new EmpQuestionnaireForm(this.idPrefix);

        afterLoadEntity() {
            super.afterLoadEntity();
            console.log(this.entity.EmpNo);
        }
    }
}