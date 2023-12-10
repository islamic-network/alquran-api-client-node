import JsonResponse from '../core/JsonResponse';
declare const API: {
    request: (endpoint: string) => Promise<JsonResponse>;
};
export default API;
