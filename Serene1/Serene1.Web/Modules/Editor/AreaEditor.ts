namespace Serene1.Editor {

    @Serenity.Decorators.registerEditor()
    export class AreaEditor extends Serenity.Select2Editor<any, any>{
        constructor(container: JQuery, opt?: Serenity.Select2CommonOptions) {
            super(container, opt);

            this.addOption('1', "花蓮市");
            this.addOption('2', "秀林鄉");
            this.addOption('3', "吉安鄉");
            this.addOption('4', "壽豐鄉");
            this.addOption('5', "鳳林鄉");
            this.addOption('6', "萬榮鄉");

    
        }
    }
}