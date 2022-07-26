
namespace Serene1.Default {

    @Serenity.Decorators.registerClass()
    export class ContactBookDialog extends Serenity.EntityDialog<ContactBookRow, any> {
        protected getFormKey() { return ContactBookForm.formKey; }
        protected getIdProperty() { return ContactBookRow.idProperty; }
        protected getLocalTextPrefix() { return ContactBookRow.localTextPrefix; }
        protected getNameProperty() { return ContactBookRow.nameProperty; }
        protected getService() { return ContactBookService.baseUrl; }
        protected getDeletePermission() { return ContactBookRow.deletePermission; }
        protected getInsertPermission() { return ContactBookRow.insertPermission; }
        protected getUpdatePermission() { return ContactBookRow.updatePermission; }

        protected form = new ContactBookForm(this.idPrefix);

    }
}