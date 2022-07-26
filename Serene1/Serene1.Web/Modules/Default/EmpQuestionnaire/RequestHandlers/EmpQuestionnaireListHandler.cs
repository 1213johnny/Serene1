using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Serene1.Default.EmpQuestionnaireRow>;
using MyRow = Serene1.Default.EmpQuestionnaireRow;

namespace Serene1.Default
{
    public interface IEmpQuestionnaireListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class EmpQuestionnaireListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IEmpQuestionnaireListHandler
    {
        public EmpQuestionnaireListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}