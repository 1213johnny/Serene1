namespace Serene1.Editor {

    @Serenity.Decorators.registerEditor()
    export class BodyEditor extends Serenity.RadioButtonEditor {
        constructor(container: JQuery, opt?: Serenity.RadioButtonEditorOptions) {
            super(container, opt);

            this.addRadio('F', "壯碩");
            this.addRadio('T', "纖細");
            this.addRadio('M', "中等");
        }
    }
}