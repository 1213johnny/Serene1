
namespace Serene1.Default {
    @Serenity.Decorators.panel(true)
    @Serenity.Decorators.registerClass()
    export class ContactBookDialogCustom extends Serenity.EntityDialog<ContactBookRow, any> {
        protected getFormKey() { return ContactBookFormCustom.formKey; }
        protected getIdProperty() { return ContactBookRow.idProperty; }
        protected getLocalTextPrefix() { return ContactBookRow.localTextPrefix; }
        protected getNameProperty() { return ContactBookRow.nameProperty; }
        protected getService() { return ContactBookService.baseUrl; }
        protected getDeletePermission() { return ContactBookRow.deletePermission; }
        protected getInsertPermission() { return ContactBookRow.insertPermission; }
        protected getUpdatePermission() { return ContactBookRow.updatePermission; }

        protected form = new ContactBookFormCustom(this.idPrefix);
        private caseNo;

        constructor(Caseno?: string) {
            super();
            this.caseNo = Caseno;

            this.form.Advise.change(e => {
                if ($(e.target).val())
                    this.form.Alreadyknow.value = "1";
                else
                    this.form.Alreadyknow.value = "0";
            });
        }
        afterLoadEntity() {
            super.afterLoadEntity();

           //this.form.Caseno.value = this.Caseno;
        }
        protected getSaveOptions(res) {
            let options = super.getSaveOptions(res);

            if (this.isNew())
                options.url = `/Services/${this.getService()}/NewCreate`;

            return options;
        }
    }
}