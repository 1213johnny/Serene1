
namespace Serene1.Default {

    @Serenity.Decorators.registerClass()
    export class CaseServiceDataGridCustom extends Serenity.EntityGrid<CaseServiceDataRow, any> {
        protected getColumnsKey() { return CaseServiceDataColumnsCustom.columnsKey; }
        protected getDialogType() { return CaseServiceDataDialogCustom; }
        protected getIdProperty() { return CaseServiceDataRow.idProperty; }
        protected getInsertPermission() { return CaseServiceDataRow.insertPermission; }
        protected getLocalTextPrefix() { return CaseServiceDataRow.localTextPrefix; }
        protected getService() { return CaseServiceDataService.baseUrl; }

        protected CaseServiceDataGrid: CaseServiceDataGridCustom;

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {

            var buttons = super.getButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "refresh-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "tool-button"), 1);
                    
            return buttons;

        }
        getColumns() {
            let columns = super.getColumns();

            columns.unshift({
                field: "DeleteRow",
                name: "",
                format: (ctx) => {
                    let item = <CaseServiceDataRow>ctx.item;
                    if (Q.Authorization.hasPermission(CaseServiceDataRow.deletePermission))
                        return `<button class="btn btn-danger delete-row fa fa-trash" title="刪除">刪除</button>`;

                    return `<button class="btn btn-danger fa fa-trash" disabled title="刪除">刪除</button>`;
                },
                width: 80,
                minWidth: 80,
                maxWidth: 80
            });
            columns.unshift({
                field: "EditRow",
                name: "",
                format: (ctx) => {
                    let item = <CaseServiceDataRow>ctx.item;
                    if (Q.Authorization.hasPermission(CaseServiceDataRow.updatePermission))
                        return `<button class="btn btn-primary edit-row fa fa-pencil-square-o" title="編輯">編輯</button>`;

                    return `<button class="btn btn-primary fa fa-pencil-square-o" disabled title="編輯">編輯</button>`;
                },
                width: 80,
                minWidth: 80,
                maxWidth: 80
            });
            columns.unshift({
                field: "QQQRow",
                name: "",
                format: (ctx) => {
                    let item = <CaseServiceDataRow>ctx.item;
                    if (Q.Authorization.hasPermission(CaseServiceDataRow.updatePermission) || Q.Authorization.hasPermission(CaseServiceDataRow.insertPermission))
                        return `<button class="btn btn-warning qqq-row fa fa-list-ul" title="家庭聯絡簿">家庭聯絡簿</button>`;

                    return `<button class="btn btn-warning fa fa-list-ul" disabled title="家庭聯絡簿">家庭聯絡簿</button>`;
                },
                width: 140,
                minWidth: 140,
                maxWidth: 140
            });
            return columns;
        }
        getSlickOptions() {
            let slick = super.getSlickOptions();
            slick.rowHeight = 35;
            return slick;
        }
        protected onClick(e: JQueryEventObject, row: number, cell: number): void {
            super.onClick(e, row, cell);

            let item = this.itemAt(row);

            e.preventDefault();

            if ($(e.target).hasClass("edit-row")) {

                let dlg = new CaseServiceDataDialog();
                dlg.loadByIdAndOpenDialog(item.Oid);

                Serenity.SubDialogHelper.bindToDataChange(dlg, this, (p1, p2) => {
                    this.refresh();
                });
            }
            else if ($(e.target).hasClass("delete-row")) {

                Q.confirm("確定要刪除嗎?", () => {
                    CaseServiceDataService.Delete({
                        EntityId: item.Oid
                    }, (r) => {
                        Q.notifySuccess("刪除成功");
                        this.refresh();
                    });
                });
            }
            else if ($(e.target).hasClass('qqq-row')) {
                let dlg = new DynamicGridPanel();
                dlg.set_dialogTitle("");
                dlg.grid = new Default.ContactBookGridCustom($("#MyGrid"), item.CaseNo);
                dlg.dialogOpen();
            }
        }
    }
}