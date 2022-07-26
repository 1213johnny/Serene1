using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Serene1.Default.RepairFormRecordsRow>;
using MyRow = Serene1.Default.RepairFormRecordsRow;

namespace Serene1.Default
{
    public interface IRepairFormRecordsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class RepairFormRecordsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IRepairFormRecordsRetrieveHandler
    {
        public RepairFormRecordsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}