using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Serene1.Default.ContactBookRow;

namespace Serene1.Default
{
    public interface IContactBookDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ContactBookDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IContactBookDeleteHandler
    {
        public ContactBookDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}