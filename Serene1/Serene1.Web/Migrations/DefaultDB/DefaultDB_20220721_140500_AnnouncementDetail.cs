using FluentMigrator;
using Serenity.Extensions;
using System;
namespace Serene1.Migrations.DefaultDB
{
    [Migration(20220721140600)]
    public class DefaultDB_20220721_140500_AnnouncementDetail : AutoReversingMigration
    {
        public override void Up()
        {

            this.CreateTableWithId32("AnnouncementDetail", "OID", s => s
           .WithColumn("AnnouncementsId").AsInt16().NotNullable()
           .WithColumn("TargetUser").AsString(20).Nullable()
           .WithColumn("ReplyContent").AsString(500).Nullable()
           .WithColumn("ReplyDate").AsDateTime().Nullable()
           .WithColumn("ReplyUser").AsString(20).Nullable()
           .WithColumn("CREATEUSER").AsInt16().Nullable()
           .WithColumn("CREATEDATE").AsDate().Nullable()
           .WithColumn("UPDATEUSER").AsInt16().Nullable()
           .WithColumn("UPDATEDATE").AsDate().Nullable()
          );
        }
    }
}