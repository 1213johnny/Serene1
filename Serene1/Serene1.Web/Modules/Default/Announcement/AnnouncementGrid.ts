
namespace Serene1.Default {

    @Serenity.Decorators.registerClass()
    export class AnnouncementGrid extends Serenity.EntityGrid<AnnouncementRow, any> {
        protected getColumnsKey() { return AnnouncementColumns.columnsKey; }
        protected getDialogType() { return AnnouncementDialog; }
        protected getIdProperty() { return AnnouncementRow.idProperty; }
        protected getInsertPermission() { return AnnouncementRow.insertPermission; }
        protected getLocalTextPrefix() { return AnnouncementRow.localTextPrefix; }
        protected getService() { return AnnouncementService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}