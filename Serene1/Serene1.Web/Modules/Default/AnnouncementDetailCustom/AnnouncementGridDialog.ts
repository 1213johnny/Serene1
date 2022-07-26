
namespace Serene1.Default {

    @Serenity.Decorators.registerClass()
    export class AnnouncementGridDialog extends Common.GridEditorDialog<AnnouncementRow> {
        protected getFormKey() { return AnnouncementDetailFormCustom.formKey; }
        protected getLocalTextPrefix() { return AnnouncementRow.localTextPrefix; }
        protected getService() { return AnnouncementService.baseUrl; }

        protected form = new AnnouncementFormCustom(this.idPrefix);

        public AnnouncementType : string;
        public repairDate: string;

        
       
       
    }
}