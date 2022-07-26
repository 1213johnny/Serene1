namespace Serene1.Default {
    export interface AnnouncementForm {
        ServiceCode: Serenity.StringEditor;
        AnnounceType: Serenity.StringEditor;
        AnnounceDesc: Serenity.StringEditor;
        AnnouncePriority: Serenity.StringEditor;
        TargetRoleIds: Serenity.StringEditor;
        TargetUserIds: Serenity.StringEditor;
        ReleaseDate: Serenity.DateEditor;
        Attachments: Serenity.StringEditor;
        Createuser: Serenity.IntegerEditor;
        Createdate: Serenity.DateEditor;
        Updateuser: Serenity.IntegerEditor;
        Updatedate: Serenity.DateEditor;
    }

    export class AnnouncementForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Announcement';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AnnouncementForm.init)  {
                AnnouncementForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(AnnouncementForm, [
                    'ServiceCode', w0,
                    'AnnounceType', w0,
                    'AnnounceDesc', w0,
                    'AnnouncePriority', w0,
                    'TargetRoleIds', w0,
                    'TargetUserIds', w0,
                    'ReleaseDate', w1,
                    'Attachments', w0,
                    'Createuser', w2,
                    'Createdate', w1,
                    'Updateuser', w2,
                    'Updatedate', w1
                ]);
            }
        }
    }
}
