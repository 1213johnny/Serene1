namespace Serene1.Editor {

    @Serenity.Decorators.registerEditor()
    export class PhaseEditor extends Serenity.Select2Editor<any, any>{
        constructor(container: JQuery, opt?: Serenity.Select2CommonOptions) {
            super(container, opt);

            this.addOption('A', "上午");
            this.addOption('P', "下午");
            this.addOption('T', "全日");
            this.addOption('N', "夜間18:00-20:00");

        }
    }
}