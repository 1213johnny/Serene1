using FluentMigrator;
using Serenity.Extensions;
using System;
namespace Serene1.Migrations.DefaultDB
{
    [Migration(20220727153800)]
    public class DefaultDB_20220727_153800_Clinics: AutoReversingMigration
    {
        public override void Up()

        {
            Create.Table("Clinics")
                .WithColumn("DeptNo").AsCustom("varchar(5)").PrimaryKey().WithColumnDescription("科別代碼").NotNullable()
                .WithColumn("ClinicNo").AsCustom("varchar(5)").PrimaryKey().WithColumnDescription("診別代碼").NotNullable()
                .WithColumn("ClinicName").AsString(100).WithColumnDescription("診別中文名稱").NotNullable()
                .WithColumn("ClinicNameEng").AsCustom("varchar(100)").WithColumnDescription("診別英文名稱").NotNullable();


        }
    }

}


