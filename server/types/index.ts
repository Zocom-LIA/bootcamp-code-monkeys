export type HTTPResponse = {
    success: boolean;
    message?: string;
    menu?: Record<string, any>[];
    order?: Record<string, any>;
    orders?: Record<string, any>[];
}