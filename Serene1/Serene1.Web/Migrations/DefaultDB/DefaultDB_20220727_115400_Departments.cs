using FluentMigrator;
using Serenity.Extensions;
using System;
namespace Serene1.Migrations.DefaultDB

{
    [Migration(20220727115400)]
    public class DefaultDB_20220727_115400_Departments : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Departments")
                .WithColumn("DeptNo").AsCustom("varchar(5)").PrimaryKey().WithColumnDescription("科別代碼").NotNullable()
                .WithColumn("DeptName").AsString(100).WithColumnDescription("科別名稱").NotNullable()
                .WithColumn("DeptNameEng").AsCustom("varchar(100)").WithColumnDescription("科別名稱英文").NotNullable()
                .WithColumn("Hiddent").AsCustom("bit").WithColumnDescription("是否隱藏").NotNullable();
                
        }
    }
}