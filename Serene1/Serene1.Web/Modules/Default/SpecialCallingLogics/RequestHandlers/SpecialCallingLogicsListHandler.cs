using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Serene1.Default.SpecialCallingLogicsRow>;
using MyRow = Serene1.Default.SpecialCallingLogicsRow;

namespace Serene1.Default
{
    public interface ISpecialCallingLogicsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class SpecialCallingLogicsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ISpecialCallingLogicsListHandler
    {
        public SpecialCallingLogicsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}