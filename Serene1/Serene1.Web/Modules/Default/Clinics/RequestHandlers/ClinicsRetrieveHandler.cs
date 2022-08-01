using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Serene1.Default.ClinicsRow>;
using MyRow = Serene1.Default.ClinicsRow;

namespace Serene1.Default
{
    public interface IClinicsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ClinicsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IClinicsRetrieveHandler
    {
        public ClinicsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}