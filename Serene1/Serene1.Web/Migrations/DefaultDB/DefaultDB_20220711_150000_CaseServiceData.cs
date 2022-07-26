using FluentMigrator;
using Serenity.Extensions;
using System;

namespace Serene1.Migrations.DefaultDB
{
    [Migration(20220711150000)]
    public class DefaultDB_20220711_150000_CaseServiceData : AutoReversingMigration
    {
        public override void Up()
        {

            this.CreateTableWithId32("CaseServiceData", "OID", s => s
            .WithColumn("CaseNo").AsString(50).NotNullable()
            .WithColumn("PatientId").AsString(10).NotNullable()
            .WithColumn("RocId").AsString(10).Nullable()
            .WithColumn("CreateDate").AsDateTime().Nullable()
            .WithColumn("CreateUser").AsInt32().Nullable()
            .WithColumn("UpdateDate").AsDateTime().Nullable() 
            .WithColumn("UpdateUser").AsInt32().Nullable()
            );

        }
    }
}
