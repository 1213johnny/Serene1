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
    public interface IAnnouncementSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {
        public MyResponse CreateBothDetail(IUnitOfWork uow, MyRequest request);
    }

    public class AnnouncementSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAnnouncementSaveHandler
    {
        public AnnouncementSaveHandler(IRequestContext context)
             : base(context)
        {
        }
        public MyResponse CreateBothDetail(IUnitOfWork uow, MyRequest request)
        {
            var response = new MyResponse();

            response = new AnnouncementSaveHandler(Context).Create(uow, request);

            new AnnouncementDetailSaveHandler(Context).Create(uow, new SaveRequest<AnnouncementDetailRow>()
            {
                Entity = new AnnouncementDetailRow()
                {
                    AnnouncementsId = short.Parse(response.EntityId.ToString()),
                    TargetUser = request.Entity.TargetUserIds,
               
                }
            });
            return response;
        }
    }
}
