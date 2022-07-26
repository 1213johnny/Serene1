using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Serene1.Default.AnnouncementDetailRow>;
using MyRow = Serene1.Default.AnnouncementDetailRow;

namespace Serene1.Default
{
    public interface IAnnouncementDetailListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class AnnouncementDetailListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAnnouncementDetailListHandler
    {
        public AnnouncementDetailListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}