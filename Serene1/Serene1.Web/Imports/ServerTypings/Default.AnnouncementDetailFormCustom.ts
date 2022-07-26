namespace Serene1.Default {
    export interface AnnouncementDetailFormCustom {
        TargetUser: Serenity.StringEditor;
    }

    export class AnnouncementDetailFormCustom extends Serenity.PrefixedContext {
        static formKey = 'ServiceAD.AnnouncementDetailCustom';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AnnouncementDetailFormCustom.init)  {
                AnnouncementDetailFormCustom.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(AnnouncementDetailFormCustom, [
                    'TargetUser', w0
                ]);
            }
        }
    }
}
