using FluentMigrator;
using Serenity.Extensions;
using System;
namespace Serene1.Migrations.DefaultDB
{
    [Migration(20220725104000)]
    public class DefaultDB_20220725_103800_RepairFormRecords : AutoReversingMigration
    {
        public override void Up()
        {

            this.CreateTableWithId32("RepairFormRecords", "OID", s => s
            .WithColumn("CaseNo").AsString(50).NotNullable()
            .WithColumn("RepairDate").AsDate().NotNullable()
            .WithColumn("Township").AsString(10).Nullable()
            .WithColumn("Area").AsString(10).Nullable()
            .WithColumn("SubsidySource").AsString(10).Nullable()
            .WithColumn("AssistiveSource").AsString(10).Nullable()
            .WithColumn("ItemName").AsString(10).Nullable()
            .WithColumn("MaterialNo").AsString(12).Nullable()
            .WithColumn("ServiceType").AsString(10).Nullable()
            .WithColumn("ServiceCount").AsInt16().Nullable()
            .WithColumn("EvalutionLevel").AsString(10).Nullable()
            .WithColumn("HandlingPlace").AsString(10).Nullable()
            .WithColumn("Place").AsString(10).Nullable()
            .WithColumn("RepairRecord").AsString(100).Nullable()
            .WithColumn("RepairEmpId").AsString(10).Nullable()
            .WithColumn("CREATEUSER").AsInt16().Nullable()
            .WithColumn("CREATEDATE").AsDate().Nullable()
            .WithColumn("UPDATEUSER").AsInt16().Nullable()
            .WithColumn("UPDATEDATE").AsDate().Nullable()
            );
        }
    }
}