
namespace Serene1.Default {
    @Serenity.Decorators.panel(true)
    @Serenity.Decorators.registerClass()
    export class AnnouncementDialogCustom extends Serenity.EntityDialog<AnnouncementRow, any> {
        protected getFormKey() { return AnnouncementFormCustom.formKey; }
        protected getIdProperty() { return AnnouncementRow.idProperty; }
        protected getLocalTextPrefix() { return AnnouncementRow.localTextPrefix; }
        protected getNameProperty() { return AnnouncementRow.nameProperty; }
        protected getService() { return AnnouncementService.baseUrl; }
        protected getDeletePermission() { return AnnouncementRow.deletePermission; }
        protected getInsertPermission() { return AnnouncementRow.insertPermission; }
        protected getUpdatePermission() { return AnnouncementRow.updatePermission; }

        protected form = new AnnouncementForm(this.idPrefix);

        afterLoadEntity() {
            super.afterLoadEntity();

            /* console.log(this.form.TargetUserIds.value);*/
            if (this.isEditMode()) { 
                Serenity.EditorUtils.setReadOnly(this.form.TargetRoleIds, true)
                Serenity.EditorUtils.setReadOnly(this.form.TargetUserIds, true)
                //this.form.TargetRoleIds.setReadOnly(true);
                //this.form.TargetUserIds.setReadOnly(true);
            }
        }
       
        validateBeforeSave() {
            if (!super.validateBeforeSave())
                return false;
            //console.log(this.form.TargetUserIds.value)
            //console.log(this.form.TargetUserIds.value==null)
            if (!this.form.TargetUserIds.value || !this.form.TargetRoleIds.value) {
                Q.notifyWarning("請填選交班對象");
                return false;
            }
            return true;
        }
        protected getSaveOptions(res) {
            let options = super.getSaveOptions(res);

            if (this.isNew())
                options.url = `/Services/${this.getService()}/CreateBothDetail`;

            return options;
        }
    }
}
