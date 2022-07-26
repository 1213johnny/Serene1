using FluentMigrator;
using Serenity.Extensions;
using System;

namespace Serene1.Migrations.DefaultDB
{
    [Migration(20220705095300)]
    public class DefaultDB_20220705_110900_ContactBook:AutoReversingMigration
    {
        public override void Up()
        {

            this.CreateTableWithId32("ContactBook", "OID", s => s
            .WithColumn("CASENO").AsString(50).NotNullable()
            .WithColumn("ALREADYKNOW").AsInt32().Nullable()
            .WithColumn("ADVISE").AsString(50).Nullable()
            .WithColumn("ADVISEDATE").AsDateTime().NotNullable()
            );

        }   
    }
}
