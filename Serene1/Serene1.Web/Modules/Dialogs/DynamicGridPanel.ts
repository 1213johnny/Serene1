
namespace Serene1.Default {

    @Serenity.Decorators.panel(true)
    @Serenity.Decorators.registerClass()
    export class DynamicGridPanel<TItem, TGrid extends Serenity.DataGrid<TItem,any>> extends Serenity.TemplatedDialog<any> {
      
        public grid: Serenity.Widget<any>;
        public title: string;        

        constructor() {
            super();
        }

        protected getTemplateName() {
            return "Dialogs.DynamicGridPanel";
        }

        onDialogOpen() {
            //this.dialogTitle = (this.grid as TGrid).getTitle();
            if (this.title)
                this.dialogTitle = this.title;
            else
                this.dialogTitle = this.element.find(".title-text")[0].innerHTML;
            if (this.element.find(".title-text").length > 0)
                this.element.find(".title-text")[0].remove();
        }
    }
}