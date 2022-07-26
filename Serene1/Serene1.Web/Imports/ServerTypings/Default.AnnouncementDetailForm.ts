namespace Serene1.Default {
    export interface AnnouncementDetailForm {
        AnnouncementsId: Serenity.IntegerEditor;
        TargetUser: Serenity.StringEditor;
        ReplyContent: Serenity.StringEditor;
        ReplyDate: Serenity.DateEditor;
        ReplyUser: Serenity.StringEditor;
        Createuser: Serenity.IntegerEditor;
        Createdate: Serenity.DateEditor;
        Updateuser: Serenity.IntegerEditor;
        Updatedate: Serenity.DateEditor;
    }

    export class AnnouncementDetailForm extends Serenity.PrefixedContext {
        static formKey = 'Default.AnnouncementDetail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AnnouncementDetailForm.init)  {
                AnnouncementDetailForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;

                Q.initFormType(AnnouncementDetailForm, [
                    'AnnouncementsId', w0,
                    'TargetUser', w1,
                    'ReplyContent', w1,
                    'ReplyDate', w2,
                    'ReplyUser', w1,
                    'Createuser', w0,
                    'Createdate', w2,
                    'Updateuser', w0,
                    'Updatedate', w2
                ]);
            }
        }
    }
}
