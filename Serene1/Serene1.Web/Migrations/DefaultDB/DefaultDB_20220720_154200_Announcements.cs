using FluentMigrator;
using Serenity.Extensions;
using System;
namespace Serene1.Migrations.DefaultDB
{
    [Migration(20220720154900)]
    public class DefaultDB_20220712_133600_Announcements : AutoReversingMigration
    {
        public override void Up()
        {
            this.Create.Table("Announcements")
           .WithColumn("OID").AsInt16().Nullable()
           .WithColumn("ServiceCode").AsString(10).Nullable()
           .WithColumn("AnnounceType").AsString(10).NotNullable()
           .WithColumn("AnnounceDesc").AsString(500).NotNullable()
           .WithColumn("AnnouncePriority").AsString(10).NotNullable()
           .WithColumn("TargetRoleIds").AsString(100).NotNullable()
           .WithColumn("TargetUserIds").AsString(100).NotNullable()
           .WithColumn("ReleaseDate").AsDateTime().NotNullable()
           .WithColumn("Attachments").AsString(1000).NotNullable()
           .WithColumn("CREATEUSER").AsInt16().NotNullable()
           .WithColumn("CREATEDATE").AsDateTime().NotNullable()
           .WithColumn("UPDATEUSER").AsInt16().NotNullable()
           .WithColumn("UPDATEDATE").AsDateTime().NotNullable()
           ;
        }
    }
}