///// <reference path="../Common/Helpers/GridEditorBase.ts" />

namespace Serene1.Default {

 /*   import fld = AnnouncementRow.Fields*/

    @Serenity.Decorators.registerClass()
    export class AnnouncementGridEditor extends Common.GridEditorBase<AnnouncementDetailRow> {
        protected getColumnsKey() { return "ServiceAD.AnnouncementDetailCustom"; }
        protected getDialogType() { return AnnouncementGridDialog; }
        protected getLocalTextPrefix() { return AnnouncementDetailRow.localTextPrefix; }

        //public serviceCode: string;
        public Attachment : string;
       


        constructor(container: JQuery) {
            super(container);
            //this.serviceCode = Q.getCookie("ServiceCode");

            
        }

        getColumns() {
            let columns = super.getColumns();

            columns.unshift(
                {
                    field: "DeleteRow",
                    name: "",
                    format: () => {
                        if (Q.Authorization.hasPermission(AnnouncementRow.deletePermission) )
                            return `<div><button class="btn btn-danger delete-row   fa fa-trash" title="刪除">刪除</button></div>`;
                        return `<div><button class="btn btn-danger fa fa-trash" disabled title="刪除">刪除</button></div>`;
                    },
                    width: 75,
                    minWidth: 75,
                    maxWidth: 75
                }
            );
        
            columns.unshift(
                {
                    field: "EditRow",
                    name: "",
                    format: () => {
                        if (Q.Authorization.hasPermission(AnnouncementRow.updatePermission) )
                            return `<div><button class="btn btn-primary edit-row   fa fa-pencil-square-o" title="編輯">編輯</button></div>`;
                        return `<div><button class="btn btn-primary fa fa-pencil-square-o" disabled title="編輯">編輯</button></div>`;
                    },
                    width: 75,
                    minWidth: 75,
                    maxWidth: 75
                });
            //columns.push(
            //    {
            //        field: "ContactPersonRow",
            //        name: "",
            //        format: () => {
            //            return `<div><button class="btn btn-primary ContactPerson-row  fa fa-phone" title="聯絡人">聯絡人</button></div>`;
            //        },
            //        width: 85,
            //        minWidth: 85,
            //        maxWidth: 85
            //    });

            return columns;
        }

        protected getSlickOptions() {
            let gridOptions = super.getSlickOptions();

            gridOptions.rowHeight = 40;

            return gridOptions;
        }

        protected onClick(e: JQueryEventObject, row: number, cell: number): void {
            super.onClick(e, row, cell);

            let item = this.itemAt(row);

            e.preventDefault();
            if ($(e.target).hasClass('edit-row')) {
                
                    this.createEntityDialog(this.getItemType(), dlg => {
                        var dialog = dlg as AnnouncementGridDialog;
                        dialog.onSave = (opt, callback) => { this.save(opt, callback) };
                        dialog.loadEntityAndOpenDialog(item, false);
                    })
                    Serenity.SubDialogHelper.triggerDataChange(this);
            }
            else if ($(e.target).hasClass('delete-row')) {
                Q.confirm(Q.text('Controls.EntityDialog.DeleteConfirmation'), () => {
                    this.deleteEntity(item[this.getIdProperty()]);
                });
            }

            //else if ($(e.target).hasClass('ContactPerson-row')) {
            //    let dlg = new PublicBasic.ContactPersonCustomGridDialog(this.serviceCode, item.PatientNo, item.CaseNo);
            //    dlg.loadNewAndOpenDialog();
            //    //let dlg = new ContactPersonGridCustom(this.slickContainer.parent(), this.serviceCode, item.PatientNo);

            //}
        }
        //private autoSize;

        //protected createSlickGrid(): Slick.Grid {
        //    let grid = super.createSlickGrid();
        //    this.autoSize = new Slick.AutoColumnSize(true); // *** If you want to make it autoresize when grid is loaded, use: new Slick.AutoColumnSize(true);
        //    grid.registerPlugin(this.autoSize);
        //    return grid;
        //}

         //*** Resizes the columns after changes are made to the grid (ex. Column Picker) *
        //protected markupReady() {
        //    super.markupReady();
        //    if (this.autoSize != null) {
        //        this.autoSize.resizeAllColumns();
        //    }
        //}
    }
}