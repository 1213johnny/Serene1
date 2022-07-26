using FluentMigrator;
using Serenity.Extensions;
using System;
namespace Serene1.Migrations.DefaultDB
{
    [Migration(20220712135200)]
    public class DefaultDB_20220712_133600_EmpQuestionnaire : AutoReversingMigration
    {
        public override void Up()
        {
             this.Create.Table("EmpQuestionnaire")
            .WithColumn("OID").AsString(128).NotNullable()
            .WithColumn("Emp_No").AsString(10).NotNullable()
            .WithColumn("Q_Date").AsDate().NotNullable()
            .WithColumn("Age").AsInt16().Nullable()
            .WithColumn("Height").AsInt16().Nullable()
            .WithColumn("Weight").AsInt16().Nullable()
            .WithColumn("SEX").AsString(1).Nullable()
            .WithColumn("Emp_Language").AsString(70).Nullable()
            .WithColumn("Emp_Body").AsString(1).Nullable()
            .WithColumn("Emp_Work_Year").AsString(20).Nullable()
            .WithColumn("Emp_Time_Phase").AsString(20).Nullable()
            .WithColumn("Emp_Area").AsString(20).Nullable()
            .WithColumn("Emp_Service_Level").AsString(20).Nullable()
            .WithColumn("Emp_Skill").AsString(20).Nullable()
            .WithColumn("Emp_Driver_License").AsString(20).Nullable()
            .WithColumn("Emp_EMT1_License").AsString(1).Nullable()
            .WithColumn("Emp_Effective_Date").AsDate().Nullable()
            .WithColumn("Update_Date").AsDate().Nullable()
            .WithColumn("Update_User").AsInt16().Nullable()
            ;
        }
    }
}
