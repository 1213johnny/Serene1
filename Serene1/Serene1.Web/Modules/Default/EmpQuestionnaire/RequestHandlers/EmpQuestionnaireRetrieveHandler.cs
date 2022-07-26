using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Serene1.Default.EmpQuestionnaireRow>;
using MyRow = Serene1.Default.EmpQuestionnaireRow;

namespace Serene1.Default
{
    public interface IEmpQuestionnaireRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmpQuestionnaireRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IEmpQuestionnaireRetrieveHandler
    {
        public EmpQuestionnaireRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}