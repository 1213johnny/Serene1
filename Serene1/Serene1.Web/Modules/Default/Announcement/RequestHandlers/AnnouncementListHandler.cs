using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Serene1.Default.AnnouncementRow>;
using MyRow = Serene1.Default.AnnouncementRow;

namespace Serene1.Default
{
    public interface IAnnouncementListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class AnnouncementListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAnnouncementListHandler
    {
        public AnnouncementListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}