using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Serene1.Default.ContactBookRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Serene1.Default.ContactBookRow;

namespace Serene1.Default
{
    public interface IContactBookSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ContactBookSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IContactBookSaveHandler
    {
        public ContactBookSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}