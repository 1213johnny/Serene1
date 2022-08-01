using Microsoft.AspNetCore.Mvc;
using Serenity;
using Serenity.Data;
using Serenity.Reporting;
using Serenity.Services;
using Serenity.Web;
using System;
using System.Data;
using System.Globalization;
using MyRow = Serene1.Default.SpecialCallingLogicsRow;

namespace Serene1.Default.Endpoints
{
    [Route("Services/Default/SpecialCallingLogics/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class SpecialCallingLogicsController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request,
            [FromServices] ISpecialCallingLogicsSaveHandler handler)
        {
            return handler.Create(uow, request);

        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request,
            [FromServices] ISpecialCallingLogicsSaveHandler handler)
        {
            return handler.Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request,
            [FromServices] ISpecialCallingLogicsDeleteHandler handler)
        {
            return handler.Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request,
            [FromServices] ISpecialCallingLogicsRetrieveHandler handler)
        {
            return handler.Retrieve(connection, request);
        }

        [HttpPost, AuthorizeList(typeof(MyRow))]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request,
            [FromServices] ISpecialCallingLogicsListHandler handler)
        {
            return handler.List(connection, request);
        }

        [AuthorizeList(typeof(MyRow))]
        public FileContentResult ListExcel(IDbConnection connection, ListRequest request,
            [FromServices] ISpecialCallingLogicsListHandler handler,
            [FromServices] IExcelExporter exporter)
        {
            var data = List(connection, request, handler).Entities;
            var bytes = exporter.Export(data, typeof(Columns.SpecialCallingLogicsColumns), request.ExportColumns);
            return ExcelContentResult.Create(bytes, "SpecialCallingLogicsList_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss", CultureInfo.InvariantCulture) + ".xlsx");
        }
    }
}