using FluentMigrator;
using Serenity.Extensions;
using System;

namespace Serene1.Migrations.DefaultDB
{
    [Migration(20220729105000)]
    public class DefaultDB_20220729_105000_CheckinDatas : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("CheckinDatas")
             .WithColumn("ScheduledDate").AsDate().WithColumnDescription("預定看診日期").NotNullable()
             .WithColumn("TimeType").AsInt32().WithColumnDescription("午別").NotNullable()
             .WithColumn("DeptNo").AsCustom("varchar(5)").WithColumnDescription("科別").NotNullable()
             .WithColumn("ClinicNo").AsCustom("varchar(5)").WithColumnDescription("診別").NotNullable()
             .WithColumn("PatientClinicSeqNo").AsInt32().WithColumnDescription("診號").NotNullable()
             .WithColumn("ExamRoomNo").AsCustom("varchar(5)").WithColumnDescription("診間代號").NotNullable()
             .WithColumn("Patno").AsCustom("varchar(10)").WithColumnDescription("病歷號碼").NotNullable()
             .WithColumn("PatientName").AsString(50).WithColumnDescription("病患姓名").NotNullable()
             .WithColumn("PatientGender").AsCustom("char(1)").WithColumnDescription("病患性別").NotNullable()
             .WithColumn("PatientBirthday").AsDate().WithColumnDescription("病患生日").NotNullable()
             .WithColumn("PatientPhoneNumber").AsCustom("varchar(50)").WithColumnDescription("病患手機號碼").Nullable()
             .WithColumn("NhiCardNo").AsCustom("varchar(12)").WithColumnDescription("健保卡號").Nullable()
             .WithColumn("PatientNameCard").AsString(50).WithColumnDescription("病患姓名").Nullable()
             .WithColumn("PatientIdentityNo").AsCustom("varchar(10)").WithColumnDescription("身分證號").Nullable()
             .WithColumn("PatientBirthdayCard").AsCustom("varchar(7)").WithColumnDescription("病患生日").Nullable()
             .WithColumn("PatientGenderCard").AsCustom("char(1)").WithColumnDescription("病患性別").Nullable()
             .WithColumn("CheckinTime").AsDateTime().WithColumnDescription("報到時間").NotNullable()
             .WithColumn("SpecialStatus").AsInt32().WithColumnDescription("特殊身份類型").NotNullable().WithDefaultValue(0)
             .WithColumn("Progress").AsInt32().WithColumnDescription("看診進度").NotNullable()
             .WithColumn("IsCalled").AsCustom("bit").WithColumnDescription("已叫號").NotNullable().WithDefaultValue(0)
             .WithColumn("CallingTime").AsDateTime().WithColumnDescription("叫號時間").Nullable()
             .WithColumn("FixNext").AsCustom("bit").WithColumnDescription("固定為下一位").NotNullable().WithDefaultValue(0)
             .WithColumn("Sys_Sequence").AsInt32().WithColumnDescription("系統叫號順序").NotNullable().WithDefaultValue(0)
             .WithColumn("Sys_SpecialStatus").AsInt32().WithColumnDescription("系統特殊身份類型").NotNullable().WithDefaultValue(0);

            Create.PrimaryKey("CheckinDatas_PK1").OnTable("CheckinDatas").Columns("ScheduledDate", "TimeType", "DeptNo", "ClinicNo", "PatientClinicSeqNo");

            Create.Index("CheckinDatas_IDX1").OnTable("CheckinDatas")
                .OnColumn("ScheduledDate").Ascending()
                .OnColumn("TimeType").Ascending()
                .OnColumn("DeptNo").Ascending()
                .OnColumn("ClinicNo").Ascending()
                .OnColumn("PatientClinicSeqNo").Ascending()
                .OnColumn("CallingTime").Descending();

            Create.Index("CheckinDatas_IDX2").OnTable("CheckinDatas")
               .OnColumn("ScheduledDate").Ascending()
               .OnColumn("TimeType").Ascending()
               .OnColumn("DeptNo").Ascending()
               .OnColumn("ClinicNo").Ascending()
               .OnColumn("FixNext").Descending()
               .OnColumn("Sys_Sequence").Ascending();
        }
    }
}