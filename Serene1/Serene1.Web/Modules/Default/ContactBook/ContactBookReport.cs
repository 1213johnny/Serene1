using Serene1.Default;
using Serenity.Data;
using Serenity.Services;
using Serenity.Reporting;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using MyRow = Serene1.Default.ContactBookRow;
namespace Serene1.Report
{
    [ReportDesign(MVC.Views.Default.ContactBook.ContactBookReport)]
    [Report("Serene1.ContactBookReport")]
    [DisplayName("聯絡簿報表")]
    public class ContactBookReport : IReport
    {
        protected ISqlConnections SqlConnections { get; }
        protected IRequestContext Context { get; }
        public ContactBookReport(IRequestContext context, ISqlConnections sqlConnections)
        {
            Context = context ?? throw new ArgumentNullException(nameof(context));
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public object GetData()
        {
            var data = new List<MyRow>();
            using (var conn = SqlConnections.NewFor<MyRow>())
            {
                data = new ContactBookListHandler(Context).List(conn, new ListRequest()
                {
                }).Entities;

            }
            return data;
        }
    }
}

//using Serenity.Data;
//using Serenity.Reporting;
//using System.Collections.Generic;
//using Serenity;
//using Serenity.Services;
//using System;
//using System.ComponentModel;
//using System.Linq;
//using System.Threading.Tasks;
//using MyRow = Serene1.Default.ContactBookRow;
//using Serene1.Default;

//namespace Serene1.Report
//{
//    [ReportDesign(MVC.Views.Default.ContactBook.ContactBookReport)]
//    [Report("Serene1.ContactBookReport")]
//    [DisplayName("聯絡簿")]
//    public class ContactBookReport: IReport
//    {
//        protected ISqlConnections SqlConnections { get; }
//        protected IRequestContext Context { get; }
//        public ContactBookReport(IRequestContext context, ISqlConnections sqlConnections)
//        {
//            Context = context ?? throw new ArgumentNullException(nameof(context));
//            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
//        }

//        public object GetData()
//        {
//            var myData = new List<MyRow>();

//            using (var conn = SqlConnections.NewFor<MyRow>())
//            {
//                myData = new ContactBookListHandler(Context).List(conn, new ListRequest()
//                {

//                }).Entities;
//            }

//            return myData;
//        }

//    }
//}
