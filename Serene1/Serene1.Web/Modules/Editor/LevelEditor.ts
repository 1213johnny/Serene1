namespace Serene1.Editor {

    @Serenity.Decorators.registerEditor()
    export class LevelEditor extends Serenity.Select2Editor<any, any>{
        constructor(container: JQuery, opt?: Serenity.Select2CommonOptions) {
            super(container, opt);

            this.addOption('1', "身心障礙訓練");
            this.addOption('2', "失智訓練");
   

        }
    }
}