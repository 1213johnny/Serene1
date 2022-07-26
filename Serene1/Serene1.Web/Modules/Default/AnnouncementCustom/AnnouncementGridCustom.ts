
namespace Serene1.Default {

    @Serenity.Decorators.registerClass()
    export class AnnouncementGridCustom extends Serenity.EntityGrid<AnnouncementRow, any> {
        protected getColumnsKey() { return AnnouncementColumnsCustom.columnsKey; }
        protected getDialogType() { return AnnouncementDialogCustom; }
        protected getIdProperty() { return AnnouncementRow.idProperty; }
        protected getInsertPermission() { return AnnouncementRow.insertPermission; }
        protected getLocalTextPrefix() { return AnnouncementRow.localTextPrefix; }
        protected getService() { return AnnouncementService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}