using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Serene1.Default.ClinicsRow;

namespace Serene1.Default
{
    public interface IClinicsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ClinicsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IClinicsDeleteHandler
    {
        public ClinicsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}