﻿using FluentMigrator;
using Serenity.Extensions;
using System;

namespace Serene1.Migrations.DefaultDB
{
    [Migration(20220803160100)]
    public class DefaultDB_20220803_160100_Alter_CaseServiceData : AutoReversingMigration
    {

        public override void Up()
        {
            Alter.Table("CaseServiceData")
                .AddColumn("PatientName").AsString(50).Nullable()

        ;
        }
    }
}