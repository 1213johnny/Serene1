
namespace Serene1.Default {

    @Serenity.Decorators.registerClass()
    export class RepairFormRecordsGridCustom extends Serenity.EntityGrid<RepairFormRecordsRow, any> {
        protected getColumnsKey() { return RepairFormRecordsColumnsCustom.columnsKey; }
        protected getDialogType() { return RepairFormRecordsDialogCustom; }
        protected getIdProperty() { return RepairFormRecordsRow.idProperty; }
        protected getInsertPermission() { return RepairFormRecordsRow.insertPermission; }
        protected getLocalTextPrefix() { return RepairFormRecordsRow.localTextPrefix; }
        protected getService() { return RepairFormRecordsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        getQuickFilters() {

            let filter = super.getQuickFilters();

            let RepairEmpIdFilter = Q.tryFirst(filter, x => x.field == "RepairEmpId");
            if (RepairEmpIdFilter) {
                RepairEmpIdFilter.init = z => {
                    (z as Serenity.StringEditor).value = '';
                }
            }
            let Advisedatefilter = Q.tryFirst(filter, x => x.field == "RepairDate");
            if (Advisedatefilter) {
                Advisedatefilter.init = r => {
                    (r as Serenity.DateEditor).value = '';

                    let endDate = r.element.nextAll(".s-DateEditor").getWidget(Serenity.DateEditor);
                    endDate.value = '';
                }
            }
            return filter;
        }
        getSlickOptions() {
            let slick = super.getSlickOptions();
            slick.rowHeight = 35;
            return slick;
        }
        getColumns() {
            let columns = super.getColumns();
            columns.unshift({
                field: "DeleteRow",
                name: "",
                format: (ctx) => {
                    let item = <RepairFormRecordsRow> ctx.item;
                    if (Q.Authorization.hasPermission(RepairFormRecordsRow.deletePermission) )
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
                    let item = <RepairFormRecordsRow>ctx.item;
                    if (Q.Authorization.hasPermission(RepairFormRecordsRow.updatePermission) )
                        return `<button class="btn btn-primary edit-row fa fa-pencil-square-o" title="編輯">編輯</button>`;

                    return `<button class="btn btn-primary fa fa-pencil-square-o" disabled title="編輯">編輯</button>`;
                },
                width: 80,
                minWidth: 80,
                maxWidth: 80
            });
            return columns;
        }
        protected onClick(e: JQueryEventObject, row: number, cell: number): void {
            super.onClick(e, row, cell);

            let item = this.itemAt(row);

            e.preventDefault();

            if ($(e.target).hasClass("edit-row")) {

                let dlg = new RepairFormRecordsDialogCustom();
                dlg.loadByIdAndOpenDialog(item.Oid);

                Serenity.SubDialogHelper.bindToDataChange(dlg, this, (p1, p2) => {
                    this.refresh();
                });
            }
            else if ($(e.target).hasClass("delete-row")) {

                Q.confirm("確定要刪除嗎?", () => {
                    RepairFormRecordsService.Delete({
                        EntityId: item.Oid
                    }, (r) => {
                        Q.notifySuccess("刪除成功");
                        this.refresh();
                    });
                });
            }
        }
    }
}
        

