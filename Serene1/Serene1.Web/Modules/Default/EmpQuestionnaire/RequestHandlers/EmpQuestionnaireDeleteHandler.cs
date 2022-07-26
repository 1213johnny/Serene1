using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Serene1.Default.EmpQuestionnaireRow;

namespace Serene1.Default
{
    public interface IEmpQuestionnaireDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class EmpQuestionnaireDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IEmpQuestionnaireDeleteHandler
    {
        public EmpQuestionnaireDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}