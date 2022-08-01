using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Serene1.Default.SpecialCallingLogicsRow;

namespace Serene1.Default
{
    public interface ISpecialCallingLogicsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class SpecialCallingLogicsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ISpecialCallingLogicsDeleteHandler
    {
        public SpecialCallingLogicsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}