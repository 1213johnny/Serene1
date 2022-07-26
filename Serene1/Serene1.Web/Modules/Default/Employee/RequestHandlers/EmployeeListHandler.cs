using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Serene1.Default.EmployeeRow>;
using MyRow = Serene1.Default.EmployeeRow;

namespace Serene1.Default
{
    public interface IEmployeeListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeListHandler
    {
        public EmployeeListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}