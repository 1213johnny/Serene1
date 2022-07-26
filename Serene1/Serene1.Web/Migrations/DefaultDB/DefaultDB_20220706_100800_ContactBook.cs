using FluentMigrator;
using Serenity.Extensions;
using System;

namespace Serene1.Migrations.DefaultDB
{
    [Migration(20220706110000)]
    public class DefaultDB_20220706_100800_Alter_ContactBook: AutoReversingMigration
    {

        public override void Up()
        {
            Alter.Table("ContactBook")
                .AddColumn("CreateUser").AsInt32().Nullable()
                .AddColumn("CreateDate").AsDateTime().Nullable()
                .AddColumn("UpdateUser").AsInt32().Nullable()
                .AddColumn("UpdateDate").AsDateTime().Nullable()
                .AddColumn("Checkbox").AsBoolean().Nullable()
        ;
        }
    }
}