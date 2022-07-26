using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Serene1.Default.RepairFormRecordsRow>;
using MyRow = Serene1.Default.RepairFormRecordsRow;

namespace Serene1.Default
{
    public interface IRepairFormRecordsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class RepairFormRecordsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IRepairFormRecordsListHandler
    {
        public RepairFormRecordsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}