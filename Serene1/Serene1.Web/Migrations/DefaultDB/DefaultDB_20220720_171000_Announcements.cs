using FluentMigrator;
using Serenity.Extensions;
using System;
namespace Serene1.Migrations.DefaultDB
{
    [Migration(20220720171000)]
    public class DefaultDB_20220712_171000_Announcements : AutoReversingMigration
    {
        public override void Up()
        {
            
            Alter.Table("Announcements")
           .AlterColumn("OID").AsInt16().NotNullable()
           .AlterColumn("ServiceCode").AsString(10).NotNullable()
           .AlterColumn("AnnounceType").AsString(10).Nullable()
           .AlterColumn("AnnounceDesc").AsString(500).Nullable()
           .AlterColumn("AnnouncePriority").AsString(10).Nullable()
           .AlterColumn("TargetRoleIds").AsString(100).Nullable()
           .AlterColumn("TargetUserIds").AsString(100).Nullable()
           .AlterColumn("ReleaseDate").AsDateTime().Nullable()
           .AlterColumn("Attachments").AsString(1000).Nullable()
           .AlterColumn("CREATEUSER").AsInt16().Nullable()
           .AlterColumn("CREATEDATE").AsDateTime().Nullable()
           .AlterColumn("UPDATEUSER").AsInt16().Nullable()
           .AlterColumn("UPDATEDATE").AsDateTime().Nullable()
           ;            
        }
    }
}