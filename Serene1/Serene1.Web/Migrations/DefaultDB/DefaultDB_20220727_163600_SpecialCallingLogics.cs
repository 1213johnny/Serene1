using FluentMigrator;
using Serenity.Extensions;
using System;

namespace Serene1.Migrations.DefaultDB
{
    [Migration(20220727163600)]
    public class DefaultDB_20220727_163600_SpecialCallingLogics : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("SpecialCallingLogics")
           .WithColumn("ID").AsGuid().PrimaryKey().WithColumnDescription("ID").NotNullable().WithDefaultValue(SystemMethods.NewGuid)
           .WithColumn("PackageName").AsCustom("varchar(15)").WithColumnDescription("套餐").NotNullable()
           .WithColumn("SpecialStatus").AsInt32().WithColumnDescription("特殊身份類型").NotNullable()
           .WithColumn("Seq").AsInt32().WithColumnDescription("報到類型順序").NotNullable()
           .WithColumn("RagulerCount").AsInt32().WithColumnDescription("順幾").NotNullable()
           .WithColumn("CallCount").AsInt32().WithColumnDescription("叫幾").NotNullable()
           .WithColumn("OldAge").AsInt32().WithColumnDescription("敬老年齡").Nullable();

            Create.UniqueConstraint("SpecialCallingLogics_UK").OnTable("SpecialCallingLogics").Columns("PackageName", "SpecialStatus");
        }
    }
}