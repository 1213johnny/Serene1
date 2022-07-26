using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Serene1.Default.AnnouncementDetailRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Serene1.Default.AnnouncementDetailRow;

namespace Serene1.Default
{
    public interface IAnnouncementDetailSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class AnnouncementDetailSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAnnouncementDetailSaveHandler
    {
        public AnnouncementDetailSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}