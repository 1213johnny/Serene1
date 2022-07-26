namespace Serene1.Default {
    export namespace RepairFormDetailRecordsService {
        export const baseUrl = 'Default/RepairFormDetailRecords';

        export declare function Create(request: Serenity.SaveRequest<RepairFormDetailRecordsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<RepairFormDetailRecordsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RepairFormDetailRecordsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RepairFormDetailRecordsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/RepairFormDetailRecords/Create",
            Update = "Default/RepairFormDetailRecords/Update",
            Delete = "Default/RepairFormDetailRecords/Delete",
            Retrieve = "Default/RepairFormDetailRecords/Retrieve",
            List = "Default/RepairFormDetailRecords/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>RepairFormDetailRecordsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
