using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Serene1.Default.DepartmentsRow>;
using MyRow = Serene1.Default.DepartmentsRow;

namespace Serene1.Default
{
    public interface IDepartmentsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class DepartmentsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IDepartmentsListHandler
    {
        public DepartmentsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}