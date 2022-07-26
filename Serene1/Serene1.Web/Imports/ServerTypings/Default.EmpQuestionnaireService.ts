namespace Serene1.Default {
    export namespace EmpQuestionnaireService {
        export const baseUrl = 'Default/EmpQuestionnaire';

        export declare function Create(request: Serenity.SaveRequest<EmpQuestionnaireRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<EmpQuestionnaireRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmpQuestionnaireRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmpQuestionnaireRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/EmpQuestionnaire/Create",
            Update = "Default/EmpQuestionnaire/Update",
            Delete = "Default/EmpQuestionnaire/Delete",
            Retrieve = "Default/EmpQuestionnaire/Retrieve",
            List = "Default/EmpQuestionnaire/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>EmpQuestionnaireService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
