namespace Serene1.Default {
    export interface EmployeeForm {
        EmployeeId: Serenity.StringEditor;
        EmployeeName: Serenity.StringEditor;
        EmployeeEngName: Serenity.StringEditor;
        IdentificationCardNo: Serenity.StringEditor;
        UnitId: Serenity.StringEditor;
        DeptType: Serenity.StringEditor;
        DeptId: Serenity.StringEditor;
        OrgId: Serenity.StringEditor;
        PositionId: Serenity.StringEditor;
        PostType: Serenity.StringEditor;
        PostId: Serenity.StringEditor;
        StartDate: Serenity.DateEditor;
        Sex: Serenity.StringEditor;
        Birthday: Serenity.DateEditor;
        CitizenId: Serenity.StringEditor;
        BloodType: Serenity.StringEditor;
        CountryId: Serenity.StringEditor;
        RaceFlag: Serenity.StringEditor;
        Homeland: Serenity.StringEditor;
        MarryFlag: Serenity.StringEditor;
        Educate: Serenity.StringEditor;
        License: Serenity.StringEditor;
        PractitionerRegisterFlag: Serenity.StringEditor;
        Ranks: Serenity.StringEditor;
        Standard: Serenity.StringEditor;
        Years: Serenity.StringEditor;
        Religion: Serenity.StringEditor;
        Church: Serenity.StringEditor;
        Address1: Serenity.StringEditor;
        Address2: Serenity.StringEditor;
        EmName: Serenity.StringEditor;
        EmRelation: Serenity.StringEditor;
        Telephone1: Serenity.StringEditor;
        Telephone2: Serenity.StringEditor;
        LeaveDate: Serenity.StringEditor;
        RetireFlag: Serenity.StringEditor;
        PatientId: Serenity.StringEditor;
        Username: Serenity.StringEditor;
    }

    export class EmployeeForm extends Serenity.PrefixedContext {
        static formKey = 'Default.EmployeeForm';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmployeeForm.init)  {
                EmployeeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;

                Q.initFormType(EmployeeForm, [
                    'EmployeeId', w0,
                    'EmployeeName', w0,
                    'EmployeeEngName', w0,
                    'IdentificationCardNo', w0,
                    'UnitId', w0,
                    'DeptType', w0,
                    'DeptId', w0,
                    'OrgId', w0,
                    'PositionId', w0,
                    'PostType', w0,
                    'PostId', w0,
                    'StartDate', w1,
                    'Sex', w0,
                    'Birthday', w1,
                    'CitizenId', w0,
                    'BloodType', w0,
                    'CountryId', w0,
                    'RaceFlag', w0,
                    'Homeland', w0,
                    'MarryFlag', w0,
                    'Educate', w0,
                    'License', w0,
                    'PractitionerRegisterFlag', w0,
                    'Ranks', w0,
                    'Standard', w0,
                    'Years', w0,
                    'Religion', w0,
                    'Church', w0,
                    'Address1', w0,
                    'Address2', w0,
                    'EmName', w0,
                    'EmRelation', w0,
                    'Telephone1', w0,
                    'Telephone2', w0,
                    'LeaveDate', w0,
                    'RetireFlag', w0,
                    'PatientId', w0,
                    'Username', w0
                ]);
            }
        }
    }
}
