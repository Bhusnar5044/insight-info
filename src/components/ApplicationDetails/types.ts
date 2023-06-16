export interface IApplicationDetails {
    ConsumedQuantity: string;
    Cost: string;
    Date: Date;
    InstanceId: string;
    MeterCategory: string;
    ResourceGroup: string;
    ResourceLocation: string;
    Tags: {
        'app-name': string;
        environment: string;
        'business-unit': string;
    };
    UnitOfMeasure: string;
    Location: string;
    ServiceName: string;
}
