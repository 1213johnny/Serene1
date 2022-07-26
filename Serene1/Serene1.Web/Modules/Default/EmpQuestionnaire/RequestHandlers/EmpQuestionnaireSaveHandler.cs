using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Serene1.Default.EmpQuestionnaireRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Serene1.Default.EmpQuestionnaireRow;

namespace Serene1.Default
{
    public interface IEmpQuestionnaireSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmpQuestionnaireSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IEmpQuestionnaireSaveHandler
    {
        public EmpQuestionnaireSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}