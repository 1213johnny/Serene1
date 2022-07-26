using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Serene1.Default.AnnouncementRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Serene1.Default.AnnouncementRow;

namespace Serene1.Default
{
    public interface IAnnouncementSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class AnnouncementSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAnnouncementSaveHandler
    {
        public AnnouncementSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}