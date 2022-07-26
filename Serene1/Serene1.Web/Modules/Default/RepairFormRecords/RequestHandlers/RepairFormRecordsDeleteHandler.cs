using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Serene1.Default.RepairFormRecordsRow;

namespace Serene1.Default
{
    public interface IRepairFormRecordsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class RepairFormRecordsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IRepairFormRecordsDeleteHandler
    {
        public RepairFormRecordsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}