namespace Serene1.Editor {

    @Serenity.Decorators.registerEditor()
    export class SexEditor extends Serenity.RadioButtonEditor{
        constructor(container: JQuery, opt?: Serenity.RadioButtonEditorOptions) {
            super(container, opt);

            this.addRadio('M', "    男  ");
            this.addRadio('F', "    女  ");

        }
    }
}