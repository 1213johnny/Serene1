using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Serene1.Default.AnnouncementDetailRow;

namespace Serene1.Default
{
    public interface IAnnouncementDetailDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class AnnouncementDetailDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IAnnouncementDetailDeleteHandler
    {
        public AnnouncementDetailDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}