//using FluentMigrator;
//using Serenity.Extensions;
//using System;
//namespace Serene1.Migrations.DefaultDB
//{
//    [Migration(20220725111200)]
//    public class DefaultDB_20220725_111200_RepairFormDetailRecords : AutoReversingMigration
//    {
//        public override void Up()
//        {

//            this.CreateTableWithId32("RepairFormDetailRecords", "OID", s => s
//            .WithColumn("RepairFormRecordsId").AsInt16().NotNullable()
//            .WithColumn("UseMaterial").AsString(50).NotNullable()
//            .WithColumn("UseMaterialCount").AsInt16().Nullable()
//            .WithColumn("MaterialAmount").AsDecimal().Nullable()
//            .WithColumn("SubsidyAmount").AsDecimal().Nullable()
//            .WithColumn("PayAmount").AsDecimal().Nullable()
//            .WithColumn("CREATEUSER").AsInt16().Nullable()
//            .WithColumn("CREATEDATE").AsDate().Nullable()
//            .WithColumn("UPDATEUSER").AsInt16().Nullable()
//            .WithColumn("UPDATEDATE").AsDate().Nullable()
//            );
//            //Create.Table("")
//            //    .WithColumn("uu").AsCustom("varchar(15)")
//        }
//    }
//}
