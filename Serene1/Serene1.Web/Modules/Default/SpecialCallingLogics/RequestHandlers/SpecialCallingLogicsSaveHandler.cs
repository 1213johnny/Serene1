using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Serene1.Default.SpecialCallingLogicsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Serene1.Default.SpecialCallingLogicsRow;

namespace Serene1.Default
{
    public interface ISpecialCallingLogicsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class SpecialCallingLogicsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ISpecialCallingLogicsSaveHandler
    {
        public SpecialCallingLogicsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}