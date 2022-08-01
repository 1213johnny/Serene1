using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Serene1.Default.DepartmentsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Serene1.Default.DepartmentsRow;

namespace Serene1.Default
{
    public interface IDepartmentsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class DepartmentsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IDepartmentsSaveHandler
    {
        public DepartmentsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}