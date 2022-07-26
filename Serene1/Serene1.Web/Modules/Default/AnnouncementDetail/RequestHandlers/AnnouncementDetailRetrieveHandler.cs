using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Serene1.Default.AnnouncementDetailRow>;
using MyRow = Serene1.Default.AnnouncementDetailRow;

namespace Serene1.Default
{
    public interface IAnnouncementDetailRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class AnnouncementDetailRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IAnnouncementDetailRetrieveHandler
    {
        public AnnouncementDetailRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}