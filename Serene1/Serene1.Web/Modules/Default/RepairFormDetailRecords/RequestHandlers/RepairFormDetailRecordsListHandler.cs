using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Serene1.Default.RepairFormDetailRecordsRow>;
using MyRow = Serene1.Default.RepairFormDetailRecordsRow;

namespace Serene1.Default
{
    public interface IRepairFormDetailRecordsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class RepairFormDetailRecordsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IRepairFormDetailRecordsListHandler
    {
        public RepairFormDetailRecordsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}