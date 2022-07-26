using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Serene1.Default.RepairFormDetailRecordsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Serene1.Default.RepairFormDetailRecordsRow;

namespace Serene1.Default
{
    public interface IRepairFormDetailRecordsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class RepairFormDetailRecordsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IRepairFormDetailRecordsSaveHandler
    {
        public RepairFormDetailRecordsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}