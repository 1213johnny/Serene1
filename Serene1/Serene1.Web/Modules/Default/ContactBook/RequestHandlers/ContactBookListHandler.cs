using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Serene1.Default.ContactBookRow>;
using MyRow = Serene1.Default.ContactBookRow;

namespace Serene1.Default
{
    public interface IContactBookListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ContactBookListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IContactBookListHandler
    {
        public ContactBookListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}