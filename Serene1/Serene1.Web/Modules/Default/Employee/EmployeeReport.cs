using Serene1.Default;
using Serenity.Data;
using Serenity.Services;
using Serenity.Reporting;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using MyRow = Serene1.Default.EmployeeRow;
namespace Serene1.Report
{
    [ReportDesign(MVC.Views.Default.Employee.EmployeeReport)]
    [Report("Serene1.EmployeeReport")]
    [DisplayName("Employee報表")]
    public class EmployeeReport : IReport
    {
        protected ISqlConnections SqlConnections { get; }
        protected IRequestContext Context { get; }
        public EmployeeReport(IRequestContext context, ISqlConnections sqlConnections)
        {
            Context = context ?? throw new ArgumentNullException(nameof(context));
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public object GetData()
        {
            var data = new List<MyRow>();
            using (var conn = SqlConnections.NewFor<MyRow>())
            {
                data = new EmployeeListHandler(Context).List(conn, new ListRequest()
                {
                }).Entities;

            }
            return data;
        }
    }
}