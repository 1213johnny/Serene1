using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Serene1.Default.ContactBookRow>;
using MyRow = Serene1.Default.ContactBookRow;

namespace Serene1.Default
{
    public interface IContactBookRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ContactBookRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IContactBookRetrieveHandler
    {
        public ContactBookRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}