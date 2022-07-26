
namespace Serene1.Default {

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

    }
}