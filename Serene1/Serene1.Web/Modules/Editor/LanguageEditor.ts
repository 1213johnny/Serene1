namespace Serene1.Editor {

    @Serenity.Decorators.registerEditor()
    export class LanguageEditor extends Serenity.Select2Editor<any, any>{
        constructor(container: JQuery, opt?: Serenity.Select2CommonOptions) {
            super(container, opt);

            this.addOption('1', "國語");
            this.addOption('2', "台語");
            this.addOption('3', "太魯閣語");
            this.addOption('4', "阿美族語");
            this.addOption('5', "布農族語");
            this.addOption('6', "排灣族語");
            this.addOption('7', "印尼語");
            this.addOption('8', "越南語");
            this.addOption('9', "英語");
            this.addOption('10', "日語");
        }
    }
}
