
namespace Serene1.Default {

    @Serenity.Decorators.registerClass()
    export class ContactBookGridCustom extends Serenity.EntityGrid<ContactBookRow, any> {
        protected getColumnsKey() { return ContactBookColumnsCustom.columnsKey; }
        protected getDialogType() { return ContactBookDialogCustom; }
        protected getIdProperty() { return ContactBookRow.idProperty; }
        protected getInsertPermission() { return ContactBookRow.insertPermission; }
        protected getLocalTextPrefix() { return ContactBookRow.localTextPrefix; }
        protected getService() { return ContactBookService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        createQuickSearchInput() { }
        protected getButtons() {
            var buttons = super.getButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "tool-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "refresh-button"), 1);
            buttons.push(
                {
                    title: Q.text("LALALA"),
                    cssClass: 'text-blue',
                    icon: 'fa-regular fa-book',
                    onClick: () => {
                        let dlg = new ContactBookDialogCustom();
                        dlg.loadNewAndOpenDialog(true);
                        Serenity.SubDialogHelper.bindToDataChange(dlg, this, (p1, p2) => {
                            this.refresh();
                        });
                    }
                }
            );
            buttons.push(
                Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: this.getService() + '/ListExcel',
                    onViewSubmit: () => this.onViewSubmit(),
                    title: "聯絡簿EXCEL"
                })
            );
            //buttons.push(
            //    Serenity.Extensions.ReportHelper.createToolButton({
            //        reportKey: "Report.ContactBook",
            //        title: '聯絡簿PDF'
            //    })
            //);
            buttons.push({
                title: '聯絡簿PDF',
                cssClass: "pdf-button",
                icon: "fa fa-file-pdf-o",
                onClick: () => {

                    //Serene1.Common.ReportHelper.execute({
                    //    reportKey: "Serene1.ContactBookReport",
                    //});
                    Serenity.Extensions.ReportHelper.execute({
                        reportKey: "Serene1.ContactBookReport",
                    });

                }
            });
            return buttons;
        }
        //onButtonClick() {
        //        this.editItem(<ContactBookRow>{
        //            Caseno: this.caseno(),
        //        });
        //}
        protected onViewSubmit() {
            if (!super.onViewSubmit())
                return false;
            var req = this.view.params as Serenity.ListRequest;
            req.Sort = ['Checkbox', 'Advisedate desc']
            return true;
        }

        getQuickFilters() {
            let filter = super.getQuickFilters();

            let casenoFilter = Q.tryFirst(filter, x => x.field == "Caseno");
            if (casenoFilter) {
                casenoFilter.handler = h => {
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and([['Caseno'], 'like', `%${h.value}%`], null);
                    }
                }
                casenoFilter.init = w => {
                    (w as Serenity.StringEditor).value = "f";
                }
            }

            let Advisedatefilter = Q.tryFirst(filter, x => x.field == "Advisedate");
            if (Advisedatefilter) { 
                    Advisedatefilter.init = r => {                    
                    (r as Serenity.DateEditor).value = '';    

                    let endDate = r.element.nextAll(".s-DateEditor").getWidget(Serenity.DateEditor);
                    endDate.value = 'now';
                }                
            } 

            let CreateUserFilter = Q.tryFirst(filter, x => x.field == "CreateUser");
            if (CreateUserFilter) {
                CreateUserFilter.init = z => {
                    (z as Serenity.StringEditor).value = '';
                }
            }
                return filter;
            }
        
        getColumns() {
            let columns = super.getColumns();
            let acol = Q.first(columns, x => x.field == "Alreadyknow");

            if (acol) {
                acol.format = (ctx) => {
                    let item = <ContactBookRow>ctx.item;
                    if (item.Alreadyknow == 1)
                        return "是";
                    else if (item.Alreadyknow == 0)
                        return "否";
                }
            }
            columns.unshift({
                field: "DeleteRow",
                name: "",
                format: (ctx) => {
                    let item = <ContactBookRow>ctx.item;
                    if (Q.Authorization.hasPermission(ContactBookRow.deletePermission) && item.Checkbox != true)
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
                    let item = <ContactBookRow>ctx.item;
                    if (Q.Authorization.hasPermission(ContactBookRow.updatePermission) && item.Checkbox != true)
                        return `<button class="btn btn-primary edit-row fa fa-pencil-square-o" title="編輯">編輯</button>`;

                    return `<button class="btn btn-primary fa fa-pencil-square-o" disabled title="編輯">編輯</button>`;
                },
                width: 80,
                minWidth: 80,
                maxWidth: 80
            });
            columns.push({
                field: "EditRecommand",
                name: "",
                format: (/*ctx*/) => {
                    //  let item = <ContactBookRow>ctx.item;
                    if (Q.Authorization.hasPermission(ContactBookRow.updatePermission))
                        return `<button class="btn btn-primary edit-row2 fa fa-pencil-square-o" title="編輯建議">編輯建議</button>`;

                    return `<button class="btn btn-primary fa fa-pencil-square-o" disabled title="編輯建議">編輯建議</button>`;
                },
                width: 95,
                minWidth: 80,
                maxWidth: 95
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

                let dlg = new ContactBookDialogCustom();
                 dlg.loadByIdAndOpenDialog(item.Oid);

                Serenity.SubDialogHelper.bindToDataChange(dlg, this, (p1, p2) => {
                    this.refresh();
                });
            }
            else if ($(e.target).hasClass("delete-row")) {

                Q.confirm("確定要刪除嗎?", () => {
                    ContactBookService.Delete({
                        EntityId: item.Oid
                    }, (r) => {
                        Q.notifySuccess("刪除成功");
                        this.refresh();
                    });
                });
            }
            if ($(e.target).hasClass("edit-row2")) {

                let dlg = new ContactBookDialogCustom1('test');

                dlg.loadByIdAndOpenDialog(item.Oid);

                Serenity.SubDialogHelper.bindToDataChange(dlg, this, (p1, p2) => {
                    this.refresh();
                });
            }
        }
    }
}