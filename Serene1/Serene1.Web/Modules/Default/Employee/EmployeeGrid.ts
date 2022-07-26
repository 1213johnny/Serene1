
namespace Serene1.Default {

    @Serenity.Decorators.registerClass()
    export class EmployeeGrid extends Serenity.EntityGrid<EmployeeRow, any> {
        protected getColumnsKey() { return EmployeeColumns.columnsKey; }
        protected getDialogType() { return EmployeeDialog; }
        protected getIdProperty() { return EmployeeRow.idProperty; }
        protected getInsertPermission() { return EmployeeRow.insertPermission; }
        protected getLocalTextPrefix() { return EmployeeRow.localTextPrefix; }
        protected getService() { return EmployeeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        createQuickSearchInput() { }
        protected getButtons() {
            var buttons = super.getButtons();

            //buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "tool-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "refresh-button"), 1);
            //buttons.push(
            //{
            //        title: Q.text("EMPQUESTIONNAIRE"),
            //    cssClass: 'text-blue',
            //    icon: 'fa-regular fa-book',
            //    onClick: () => {
            //        let dlg = new EmployeeDialog();
            //        dlg.loadNewAndOpenDialog(true);
            //        Serenity.SubDialogHelper.bindToDataChange(dlg, this, (p1, p2) => {
            //            this.refresh();
            //        });
            // }
            // }
            //)
            buttons.push(
                Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: this.getService() + '/ListExcel',
                    onViewSubmit: () => this.onViewSubmit(),
                    title: "員工EXCEL"
                })
            );            
          buttons.push({
              title: 'EmployeePDF',
              cssClass: "pdf-button",
              icon: "fa fa-file-pdf-o",
              onClick: () => {

                  Serene1.Common.ReportHelper.execute({
                      reportKey: "Serene1.EmployeeReport",
                  })

              }
});
return buttons;
        }
        getQuickFilters() {

            let filter = super.getQuickFilters();

            let EmployeeNameFilter = Q.tryFirst(filter, x => x.field == "EmployeeName");
            if (EmployeeNameFilter) {
                EmployeeNameFilter.handler = h => {
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and([['EmployeeName'], 'like', `%${h.value}%`], null);
                    }
                }
                EmployeeNameFilter.init = a => {
                    (a as Serenity.StringEditor).value = '';
                }
            }

            let EmployeeIdFilter = Q.tryFirst(filter, x => x.field == "EmployeeId");
            if (EmployeeIdFilter) {
                EmployeeIdFilter.handler = i => {
                    if (i.active) {
                        i.request.Criteria = Serenity.Criteria.and([['EmployeeId'], 'like', `%${i.value}%`], null);
                    }
                }
                EmployeeIdFilter.init = b => {
                    (b as Serenity.StringEditor).value = '';
                }
            }

            let DeptIdFilter = Q.tryFirst(filter, x => x.field == "DeptId");
            if (DeptIdFilter) {
                DeptIdFilter.handler = j => {
                if (j.active) {
                j.request.Criteria = Serenity.Criteria.and([['DeptId'], 'like', `%${j.value}%`], null);
                }
                }
                DeptIdFilter.init = c => {
                (c as Serenity.StringEditor).value = '';
                }
            }

            let PostTypeFilter = Q.tryFirst(filter, x => x.field == "PostType");
            if (PostTypeFilter) {
                PostTypeFilter.handler = v => {
                    if (v.active) {
                        v.request.Criteria = Serenity.Criteria.and([['PostType'], 'like', `%${v.value}%`], null);
                    }
                }
                PostTypeFilter.init = d => {
                (d as Serenity.StringEditor).value = '';
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
                field: "EditRow",
                name: "",
                format: (ctx) => {
                    let item = <EmpQuestionnaireRow>ctx.item;
                    if (Q.Authorization.hasPermission(EmpQuestionnaireRow.updatePermission) || Q.Authorization.hasPermission(EmpQuestionnaireRow.insertPermission))
                        return `<button class="btn btn-warning edit-row fa fa-list-ul" title="員工技能問卷">員工技能問卷</button>`;

                    return `<button class="btn btn-warning fa fa-list-ul" disabled title="員工技能問卷">員工技能問卷</button>`;
                },
                width: 140,
                minWidth: 80,
                maxWidth: 140
            });
            return columns;
        }
        getItemCssClass(item: Default.EmployeeRow, index: number): string {
            let klass: string = "";
            if (item.EmployeeId == null || item.EmployeeName == null || item.EmployeeEngName == null)
                klass += " null ";
            
            return Q.trimToNull(klass);
        }
        
        protected onClick(e: JQueryEventObject, row: number, cell: number): void {
            super.onClick(e, row, cell);

            let item = this.itemAt(row);

            e.preventDefault();

            if ($(e.target).hasClass("edit-row")) {

                let dlg = new EmpQuestionnaireDialog();
                let empQuestionnaireOid;
                EmpQuestionnaireService.List({
                    Criteria: [['EmpNo'], '=', item.EmployeeId],
                }, (response) => {
                   // console.log(response); //找response 的屬性
                    if (response.Entities.length > 0) { 
                        empQuestionnaireOid = response.Entities[0].Oid;
                        dlg.loadByIdAndOpenDialog(empQuestionnaireOid, true);
                        Serenity.SubDialogHelper.bindToDataChange(dlg, this, (p1, p2) => {
                            this.refresh();
                        });
                    }
                    else {
                        let dlg = new EmpQuestionnaireDialog();
                        dlg.loadEntityAndOpenDialog(<EmpQuestionnaireRow>{ EmpNo: item.EmployeeId, QDate: Q.formatDate(new Date(), 'yyyy/MM/dd HH:mm:ss') }, true);
                        Serenity.SubDialogHelper.bindToDataChange(dlg, this, (p1, p2) => {
                            this.refresh();

                        });
                    }
                   
                }, { async: false });               
            }
        }
    }
}