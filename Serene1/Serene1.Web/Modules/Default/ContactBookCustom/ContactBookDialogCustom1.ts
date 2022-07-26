
namespace Serene1.Default {

    @Serenity.Decorators.registerClass()
    export class ContactBookDialogCustom1 extends Serenity.EntityDialog<ContactBookRow, any> {
        protected getFormKey() { return ContactBookFormCustom1.formKey; }
        protected getIdProperty() { return ContactBookRow.idProperty; }
        protected getLocalTextPrefix() { return ContactBookRow.localTextPrefix; }
        protected getNameProperty() { return ContactBookRow.nameProperty; }
        protected getService() { return ContactBookService.baseUrl; }
        protected getDeletePermission() { return ContactBookRow.deletePermission; }
        protected getInsertPermission() { return ContactBookRow.insertPermission; }
        protected getUpdatePermission() { return ContactBookRow.updatePermission; }

        protected form = new ContactBookFormCustom1(this.idPrefix);
        private Caseno;

        constructor(Caseno?: string) {
            super();
            this.Caseno = Caseno;

            this.form.Advise.change(e => {
                if ($(e.target).val())
                    this.form.Alreadyknow.value = "1";
                else
                    this.form.Alreadyknow.value = "0";
            });
        }
        afterLoadEntity() {
            super.afterLoadEntity();

            this.form.ShowText.value = this.Caseno;
        }

    }
}