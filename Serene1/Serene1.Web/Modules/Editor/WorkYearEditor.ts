namespace Serene1.Editor {

    @Serenity.Decorators.registerEditor()
    export class WorkYearEditor extends Serenity.Select2Editor<any, any>{
        constructor(container: JQuery, opt?: Serenity.Select2CommonOptions) {
            super(container, opt);

            this.addOption('1', "2年");
            this.addOption('2', "3-5年");
            this.addOption('3', "6-9年");
            this.addOption('4', ">10年");


        }
    }
}