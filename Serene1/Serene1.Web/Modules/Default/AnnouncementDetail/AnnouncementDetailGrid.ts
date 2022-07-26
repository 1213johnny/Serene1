
namespace Serene1.Default {

    @Serenity.Decorators.registerClass()
    export class AnnouncementDetailGrid extends Serenity.EntityGrid<AnnouncementDetailRow, any> {
        protected getColumnsKey() { return AnnouncementDetailColumns.columnsKey; }
        protected getDialogType() { return AnnouncementDetailDialog; }
        protected getIdProperty() { return AnnouncementDetailRow.idProperty; }
        protected getInsertPermission() { return AnnouncementDetailRow.insertPermission; }
        protected getLocalTextPrefix() { return AnnouncementDetailRow.localTextPrefix; }
        protected getService() { return AnnouncementDetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}