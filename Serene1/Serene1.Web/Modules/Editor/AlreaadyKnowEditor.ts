namespace Serene1.Editor {

    @Serenity.Decorators.registerEditor()
    export class AlreadyKnowEditor extends Serenity.Select2Editor<any, any>{
        constructor(container: JQuery, opt?: Serenity.Select2CommonOptions) {
            super(container, opt);

            this.addOption('0', "否");
            this.addOption('1', "是");
            
        }
    }
}