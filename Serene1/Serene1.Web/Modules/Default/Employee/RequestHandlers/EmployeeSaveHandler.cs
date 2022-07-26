using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Serene1.Default.EmployeeRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Serene1.Default.EmployeeRow;

namespace Serene1.Default
{
    public interface IEmployeeSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeSaveHandler
    {
        public EmployeeSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}