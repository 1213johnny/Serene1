using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Serene1.Default.SpecialCallingLogicsRow>;
using MyRow = Serene1.Default.SpecialCallingLogicsRow;

namespace Serene1.Default
{
    public interface ISpecialCallingLogicsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class SpecialCallingLogicsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ISpecialCallingLogicsRetrieveHandler
    {
        public SpecialCallingLogicsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}