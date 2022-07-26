using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Serene1.Default.CaseServiceDataRow;

namespace Serene1.Default
{
    public interface ICaseServiceDataDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class CaseServiceDataDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ICaseServiceDataDeleteHandler
    {
        public CaseServiceDataDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}