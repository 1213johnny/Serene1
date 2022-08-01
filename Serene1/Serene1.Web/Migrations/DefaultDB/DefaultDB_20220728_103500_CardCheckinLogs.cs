using FluentMigrator;
using Serenity.Extensions;
using System;

namespace Serene1.Migrations.DefaultDB
{
    [Migration(20220728103500)]
    public class DefaultDB_20220728_103500_CardCheckinLogs : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("ClinicStartInfo")
          .WithColumn("ClinicStartDate").AsDate().PrimaryKey().WithColumnDescription("開診日期").NotNullable()
          .WithColumn("ExamRoomNo").AsCustom("varchar(5)").PrimaryKey().WithColumnDescription("診間代號").NotNullable()
          .WithColumn("TimeType").AsInt32().PrimaryKey().WithColumnDescription("午間").NotNullable();

            Create.Table("CardCkeckinLogs")
          .WithColumn("ID").AsGuid().PrimaryKey().WithColumnDescription("ID").NotNullable()
          .WithColumn("ClinicStartDate").AsDate().WithColumnDescription("開診日期").NotNullable()
          .WithColumn("ExamRoomNo").AsCustom("varchar(5)").WithColumnDescription("診間代號").NotNullable()
          .WithColumn("TimeType").AsInt32().WithColumnDescription("午間").NotNullable()
          .WithColumn("NhiCardNo").AsCustom("varchar(12)").WithColumnDescription("健保卡號").NotNullable()
          .WithColumn("PatientName").AsString(50).WithColumnDescription("姓名").NotNullable()
          .WithColumn("PatientIdentityNo").AsCustom("varchar(10)").WithColumnDescription("身分證號").NotNullable()
          .WithColumn("PatientBirthday").AsCustom("varchar(7)").WithColumnDescription("生日").NotNullable()
          .WithColumn("CheckinTime").AsDateTime().WithColumnDescription("報到時間").NotNullable()
          .WithColumn("CheckinMessage").AsInt32().WithColumnDescription("報到訊息").NotNullable()
          .WithColumn("SpecialStatus").AsInt32().WithColumnDescription("特殊身分類型").NotNullable().WithDefaultValue(0);

          Create.ForeignKey().FromTable("CardCkeckinLogs").ForeignColumns("ClinicStartDate", "ExamRoomNo", "TimeType").ToTable("ClinicStartInfo").PrimaryColumns("ClinicStartDate", "ExamRoomNo", "TimeType");
        }
    }
}