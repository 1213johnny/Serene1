using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Serene1.Default.ClinicsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Serene1.Default.ClinicsRow;

namespace Serene1.Default
{
    public interface IClinicsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ClinicsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IClinicsSaveHandler
    {
        public ClinicsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}