using FluentMigrator;
using Serenity.Extensions;
using System;

namespace Serene1.Migrations.DefaultDB
{
    [Migration(20220803155800)]
    public class DefaultDB_20220803_155800_Alter_ContactBook : AutoReversingMigration
    {

        public override void Up()
        {
            Alter.Table("ContactBook")
                .AddColumn("PatientName").AsString(50).Nullable()
               
        ;
        }
    }
}