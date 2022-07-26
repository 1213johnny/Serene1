
namespace Serene1.Default {

    @Serenity.Decorators.registerClass()
    export class AnnouncementDetailDialog extends Serenity.EntityDialog<AnnouncementDetailRow, any> {
        protected getFormKey() { return AnnouncementDetailForm.formKey; }
        protected getIdProperty() { return AnnouncementDetailRow.idProperty; }
        protected getLocalTextPrefix() { return AnnouncementDetailRow.localTextPrefix; }
        protected getNameProperty() { return AnnouncementDetailRow.nameProperty; }
        protected getService() { return AnnouncementDetailService.baseUrl; }
        protected getDeletePermission() { return AnnouncementDetailRow.deletePermission; }
        protected getInsertPermission() { return AnnouncementDetailRow.insertPermission; }
        protected getUpdatePermission() { return AnnouncementDetailRow.updatePermission; }

        protected form = new AnnouncementDetailForm(this.idPrefix);

    }
}