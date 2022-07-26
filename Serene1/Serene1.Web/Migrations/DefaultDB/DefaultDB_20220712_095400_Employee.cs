using FluentMigrator;
using Serenity.Extensions;
using System;

namespace Serene1.Migrations.DefaultDB
{
    [Migration(20220712095500)]
    public class DefaultDB_20220712_095400_Employee : AutoReversingMigration
    {
        public override void Up()
        {

            this.CreateTableWithId32("Employee", "OID", s => s
            .WithColumn("employee_id").AsString(10).NotNullable()
            .WithColumn("employee_name").AsString(15).Nullable()
            .WithColumn("employee_eng_name").AsString(20).Nullable()
            .WithColumn("identification_card_no").AsString(10).Nullable()
            .WithColumn("unit_id").AsString(7).Nullable()
            .WithColumn("dept_type").AsString(2).Nullable()
            .WithColumn("dept_id").AsString(7).Nullable()
            .WithColumn("org_id").AsString(7).Nullable()
            .WithColumn("position_id").AsString(2).Nullable()
            .WithColumn("post_type").AsString(4).Nullable()
            .WithColumn("post_id").AsString(4).Nullable()
            .WithColumn("start_date").AsDate().Nullable()
            .WithColumn("sex").AsString(1).Nullable()
            .WithColumn("birthday").AsDate().Nullable()
            .WithColumn("citizen_id").AsString(10).Nullable()
            .WithColumn("Blood_type").AsString(3).Nullable()
            .WithColumn("country_id").AsString(2).Nullable()
            .WithColumn("race_flag").AsString(2).Nullable()
            .WithColumn("homeland").AsString(20).Nullable()
            .WithColumn("marry_flag").AsString(1).Nullable()
            .WithColumn("educate").AsString(2).Nullable()
            .WithColumn("license").AsString(2).Nullable()
            .WithColumn("Practitioner_register_flag").AsString(2).Nullable()
            .WithColumn("ranks").AsString(2).Nullable()
            .WithColumn("standard").AsString(2).Nullable()
            .WithColumn("years").AsString(2).Nullable()
            .WithColumn("religion").AsString(1).Nullable()
            .WithColumn("church").AsString(10).Nullable()
            .WithColumn("address1").AsString(100).Nullable()
            .WithColumn("address2").AsString(100).Nullable()
            .WithColumn("em_name").AsString(20).Nullable()
            .WithColumn("em_relation").AsString(6).Nullable()
            .WithColumn("telephone1").AsString(15).Nullable()
            .WithColumn("telephone2").AsString(15).Nullable()
            .WithColumn("leave_date").AsString(8).Nullable()
            .WithColumn("retire_flag").AsString(1).Nullable()
            .WithColumn("patient_id").AsString(10).Nullable()
            .WithColumn("username").AsString(20).Nullable()
            );

        }
    }
}
