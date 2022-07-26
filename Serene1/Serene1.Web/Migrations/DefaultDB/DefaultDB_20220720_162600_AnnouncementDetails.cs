using FluentMigrator;
using Serenity.Extensions;
using System;
namespace Serene1.Migrations.DefaultDB
{
    [Migration(20220720163200)]
    public class DefaultDB_20220712_162600_AnnouncementDetails : AutoReversingMigration
    {
        public override void Up()
        {
            this.Create.Table("AnnouncementDetails")
           .WithColumn("OID").AsInt16().Nullable()
           .WithColumn("AnnouncementsId").AsInt16().Nullable()
           .WithColumn("TargetUser").AsString(20).NotNullable()
           .WithColumn("ReplyContent").AsString(500).NotNullable()
           .WithColumn("ReplyDate").AsDateTime().NotNullable()
           .WithColumn("ReplyUser").AsString(20).NotNullable()
           .WithColumn("CREATEUSER").AsInt16().NotNullable()
           .WithColumn("CREATEDATE  ").AsDate().NotNullable()
           .WithColumn("UPDATEUSER").AsInt16().NotNullable()
           .WithColumn("UPDATEDATE").AsDate().NotNullable()
           ;
            
        }
    }
}