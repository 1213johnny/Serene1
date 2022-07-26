namespace Serene1.Default {
    export interface AnnouncementFormCustom {
        ServiceCode: Serenity.StringEditor;
        AnnounceType: Serenity.StringEditor;
        AnnounceDesc: Serenity.StringEditor;
        AnnouncePriority: Serenity.StringEditor;
        TargetRoleIds: Serenity.StringEditor;
        TargetUserIds: Serenity.StringEditor;
        ReleaseDate: Serenity.DateEditor;
        Attachments: Serenity.StringEditor;
        DetailList: AnnouncementGridEditor;
    }

    export class AnnouncementFormCustom extends Serenity.PrefixedContext {
        static formKey = 'Default.AnnouncementCustom';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AnnouncementFormCustom.init)  {
                AnnouncementFormCustom.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = AnnouncementGridEditor;

                Q.initFormType(AnnouncementFormCustom, [
                    'ServiceCode', w0,
                    'AnnounceType', w0,
                    'AnnounceDesc', w0,
                    'AnnouncePriority', w0,
                    'TargetRoleIds', w0,
                    'TargetUserIds', w0,
                    'ReleaseDate', w1,
                    'Attachments', w0,
                    'DetailList', w2
                ]);
            }
        }
    }
}
