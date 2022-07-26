using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Serene1.Default.CaseServiceDataRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Serene1.Default.CaseServiceDataRow;

namespace Serene1.Default
{
    public interface ICaseServiceDataSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class CaseServiceDataSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICaseServiceDataSaveHandler
    {
        public CaseServiceDataSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}