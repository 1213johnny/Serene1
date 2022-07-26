using FluentMigrator;
using Serenity.Extensions;
using System;
namespace Serene1.Migrations.DefaultDB
{
    [Migration(20220720165200)]
    public class DefaultDB_20220712_165000_AnnouncementDetails : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("AnnouncementDetails")
           .AlterColumn("OID").AsInt16().NotNullable()
           .AlterColumn("AnnouncementsId").AsInt16().NotNullable()
           .AlterColumn("TargetUser").AsString(20).Nullable()
           .AlterColumn("ReplyContent").AsString(500).Nullable()
           .AlterColumn("ReplyDate").AsDateTime().Nullable()
           .AlterColumn("ReplyUser").AsString(20).Nullable()
           .AlterColumn("CREATEUSER").AsInt16().Nullable()
           .AlterColumn("CREATEDATE  ").AsDate().Nullable()
           .AlterColumn("UPDATEUSER").AsInt16().Nullable()
           .AlterColumn("UPDATEDATE").AsDate().Nullable()
                 ;
        }
    }
}