using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Serene1.Default.CaseServiceDataRow>;
using MyRow = Serene1.Default.CaseServiceDataRow;

namespace Serene1.Default
{
    public interface ICaseServiceDataListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class CaseServiceDataListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICaseServiceDataListHandler
    {
        public CaseServiceDataListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}