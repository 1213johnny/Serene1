using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Serene1.Default.ClinicsRow>;
using MyRow = Serene1.Default.ClinicsRow;

namespace Serene1.Default
{
    public interface IClinicsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ClinicsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IClinicsListHandler
    {
        public ClinicsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}