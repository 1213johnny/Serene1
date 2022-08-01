//using FluentMigrator;
//using Serenity.Extensions;
//using System;

//namespace Serene1.Migrations.DefaultDB
//{
//    [Migration(20220708155400)]
//    public class DefaultDB_20220708_155400_Alter_ContactBook : AutoReversingMigration
//    {

//        public override void Up()
//        {
//            Alter.Table("ContactBook")
//                .AddColumn("Checkbox").AsBoolean().Nullable()
//        ;
//        }
//    }
//}