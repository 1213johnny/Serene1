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
    public interface IContactBookSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse>
    {
        public MyResponse NewCreate(IUnitOfWork uow, MyRequest request);
    }

    public class ContactBookSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IContactBookSaveHandler
    {
        public ContactBookSaveHandler(IRequestContext context)
             : base(context)
        {

        }
        public MyResponse NewCreate(IUnitOfWork uow, MyRequest request) 
        { 
            var response = new MyResponse();

            var caseServiceDataEntites = new CaseServiceDataListHandler(Context).List(uow.Connection, new ListRequest() {
                Criteria = new Criteria("CaseNo") == request.Entity.Caseno,
                Sort = new[] { new SortBy("CreateDate", descending: true) }        
            }).Entities;
            request.Entity.PatientName = caseServiceDataEntites.Count > 0 ? caseServiceDataEntites[0].PatientName : "";
            //response = new ContactBookSaveHandler(Context).Create(uow, request);
            response = new ContactBookSaveHandler(Context).Create(uow, request);
             
            return response;
        }
    }
}
