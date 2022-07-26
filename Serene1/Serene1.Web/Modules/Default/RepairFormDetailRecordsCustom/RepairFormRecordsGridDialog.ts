
namespace Serene1.Default {

    @Serenity.Decorators.registerClass()
    export class RepairFormRecordsGridDialog extends Common.GridEditorDialog<RepairFormRecordsRow> {
        protected getFormKey() { return RepairFormDetailRecordsFormCustom.formKey; }
        protected getLocalTextPrefix() { return RepairFormRecordsRow.localTextPrefix; }
        protected getService() { return RepairFormRecordsService.baseUrl; }

        protected form = new RepairFormRecordsFormCustom(this.idPrefix);

        public ServiceType : string;
        public MaterialNo: string;

        
       
       
    }
}