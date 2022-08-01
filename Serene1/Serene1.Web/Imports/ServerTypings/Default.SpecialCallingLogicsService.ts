namespace Serene1.Default {
    export namespace SpecialCallingLogicsService {
        export const baseUrl = 'Default/SpecialCallingLogics';

        export declare function Create(request: Serenity.SaveRequest<SpecialCallingLogicsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<SpecialCallingLogicsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SpecialCallingLogicsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SpecialCallingLogicsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/SpecialCallingLogics/Create",
            Update = "Default/SpecialCallingLogics/Update",
            Delete = "Default/SpecialCallingLogics/Delete",
            Retrieve = "Default/SpecialCallingLogics/Retrieve",
            List = "Default/SpecialCallingLogics/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>SpecialCallingLogicsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
