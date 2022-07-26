using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Serene1.Default.CaseServiceDataRow>;
using MyRow = Serene1.Default.CaseServiceDataRow;

namespace Serene1.Default
{
    public interface ICaseServiceDataRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class CaseServiceDataRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICaseServiceDataRetrieveHandler
    {
        public CaseServiceDataRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}