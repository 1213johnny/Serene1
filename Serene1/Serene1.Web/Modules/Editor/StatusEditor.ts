namespace Serene1.Editor {

    @Serenity.Decorators.registerEditor()
    export class StatusEditor extends Serenity.Select2Editor<any, any>{
        constructor(container: JQuery, opt?: Serenity.Select2CommonOptions) {
            super(container, opt);

            this.addOption('1', "敬老");
            this.addOption('2', "過號");
            this.addOption('3', "檢後再診");          

        }
    }
}