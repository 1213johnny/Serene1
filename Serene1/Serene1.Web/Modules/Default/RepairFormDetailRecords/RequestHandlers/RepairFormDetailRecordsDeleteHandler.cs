using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Serene1.Default.RepairFormDetailRecordsRow;

namespace Serene1.Default
{
    public interface IRepairFormDetailRecordsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class RepairFormDetailRecordsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IRepairFormDetailRecordsDeleteHandler
    {
        public RepairFormDetailRecordsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}