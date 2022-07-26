using FluentMigrator;
using Serenity.Extensions;
using System;
namespace Serene1.Migrations.DefaultDB
{
    [Migration(20220721132900)]
    public class DefaultDB_20220721_132700_Announcement : AutoReversingMigration
    {
        public override void Up()
        {

            this.CreateTableWithId32("Announcement", "OID", s => s          
           .WithColumn("ServiceCode").AsString(10).NotNullable()
           .WithColumn("AnnounceType").AsString(10).Nullable()
           .WithColumn("AnnounceDesc").AsString(500).Nullable()
           .WithColumn("AnnouncePriority").AsString(10).Nullable()
           .WithColumn("TargetRoleIds").AsString(100).Nullable()
           .WithColumn("TargetUserIds").AsString(100).Nullable()
           .WithColumn("ReleaseDate").AsDateTime().Nullable()
           .WithColumn("Attachments").AsString(1000).Nullable()
           .WithColumn("CREATEUSER").AsInt16().Nullable()
           .WithColumn("CREATEDATE").AsDateTime().Nullable()
           .WithColumn("UPDATEUSER").AsInt16().Nullable()
           .WithColumn("UPDATEDATE").AsDateTime().Nullable()
          );
        }
    }
}