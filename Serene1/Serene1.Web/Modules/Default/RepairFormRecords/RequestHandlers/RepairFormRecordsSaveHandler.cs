using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Serene1.Default.RepairFormRecordsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Serene1.Default.RepairFormRecordsRow;

namespace Serene1.Default
{
    public interface IRepairFormRecordsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class RepairFormRecordsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IRepairFormRecordsSaveHandler
    {
        public RepairFormRecordsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}