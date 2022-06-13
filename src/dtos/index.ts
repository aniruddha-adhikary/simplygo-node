export interface ResponseDto<T> {
    status_code: number;
    status_text?: any;
    data: T;
    http_status: number;
    reason_pharse?: any;
}

export interface GetTransactionsRequestDto {
    start_date: string;
    end_date: string;
    card_id: string;
}

export interface TransactionHistoryTrip {
    Uid?: any;
    No: number;
    EntryTransactionDate: Date;
    ExitTransactionDate: Date;
    TransactionType: string;
    BusServiceNo: string;
    BusDirection: string;
    EntryLocationId: number;
    EntryLocationName: string;
    ExitLocationId: number;
    ExitLocationName: string;
    Fare: string;
    Status: string;
    Discount: number;
    Surcharge: number;
    SurchargeReason?: any;
    PassUsage?: any;
    TripAutoComplete: number;
    IsClaimableTransaction: boolean;
    TABABusServiceNo: string;
    OriBoardingBusStopCode: string;
    OriAlightingBusStopCode: string;
}

export interface TransactionHistory {
    No: number;
    Type: string;
    EntryTransactionDate: Date;
    ExitTransactionDate: Date;
    EntryLocationId: number;
    EntryLocationName: string;
    ExitLocationId: number;
    ExitLocationName: string;
    Fare: string;
    Status: string;
    Discount: number;
    Surcharge: number;
    IsPhysicalCard: boolean;
    BankAuthorizedDate: Date;
    BankTaxRefNo?: any;
    TokenID: string;
    PassUsage_Journey?: any;
    IsClaimableTransaction: boolean;
    Trips: TransactionHistoryTrip[];
    th_fund_issuer_authorized_date: Date;
    CAN?: any;
}

export type GetTransactionsResponseDto = ResponseDto<{
    Histories: TransactionHistory[];
    IsError: boolean;
    ErrorMessage?: any;
}>;


export interface LoginDevice {
    DeviceId: string;
    AppVersionName: string;
    AppVersionCode: string;
    DeviceType: number;
    DeviceBrand: string;
}

export interface LoginDto {
    user_email: string;
    user_password: string;
    SystemIp?: string;
    Device?: LoginDevice;
}

export interface LoginResponseData {
    user_sess_key: string;
    user_name: string;
    notification_count: number;
}

export type LoginResponseDto = ResponseDto<LoginResponseData>;
export type LogoutResponseDto = ResponseDto<boolean>;

export interface AccountStatus {
    Status: string;
    Id: number;
    IsError: boolean;
    ErrorMessage?: any;
    CreatedBy: number;
    CreatedDate: Date;
    ModifiedBy: number;
    ModifiedDate: Date;
    IsActive: boolean;
    IsDeleted: boolean;
    SystemIp?: any;
}

export interface User {
    Email: string;
    Password?: any;
    UniqueCode: string;
    ActivationCode?: any;
    OTPCode?: any;
    OTPExpiry: Date;
    OTPMethod: string;
    AccountStatus: AccountStatus;
    LastLoginDate: Date;
    LastFailedLogin: Date;
    LastFailedCount: number;
    LastPasswordChanged: Date;
    IdType?: any;
    IdNumber?: any;
    FirstName: string;
    LastName?: any;
    Gender: number;
    AgeGroup: number;
    CountryCode: number;
    MobileCountryCode: string;
    MobileNo: string;
    HomeCountryCode?: any;
    HomeNo?: any;
    PostalCode?: any;
    IsFloorUnitApplicable: boolean;
    FloorNo?: any;
    UnitNo?: any;
    BlockName?: any;
    StreetName?: any;
    BuildingName?: any;
    Country?: any;
    ReferralInvitationCode?: any;
    TempMobileNo?: any;
    IsSubscribe: boolean;
    PlatformName: string;
    DeviceName?: any;
    Captcha?: any;
    IsAgree: boolean;
    IsSubscribedNotification: boolean;
    UDCreatedBy: number;
    UDCreatedDate: Date;
    UDModifiedBy: number;
    UDModifiedDate: Date;
    IsCardRegistrationAllowed: boolean;
    TotalCount: number;
    Cards?: any;
    AccountInfo?: any;
    Device?: any;
    Id: number;
    IsError: boolean;
    ErrorMessage?: any;
    CreatedBy: number;
    CreatedDate: Date;
    ModifiedBy: number;
    ModifiedDate: Date;
    IsActive: boolean;
    IsDeleted: boolean;
    SystemIp: string;
}

export interface PaymentCard {
    UniqueCode: string;
    User: User;
    MaskedNo: string;
    Description: string;
    ExpiryDate: Date;
    BankReferenceNo?: any;
    LTAToken: string;
    PromoCode?: any;
    Status: string;
    LTAResponseCode: string;
    Type: number;
    IsAlreadyRegistered: boolean;
    IsInBlockedList: boolean;
    BlockedListReason?: any;
    BlockedListDescription?: any;
    IsInWhiteList: boolean;
    PGResponse?: any;
    CardTypeId: number;
    PGCardTypeId: number;
    CardType?: any;
    IsCEPASCard: boolean;
    IsTokenized: boolean;
    IsDisputed: boolean;
    ActivationCode?: any;
    ActivatedBy?: any;
    ActivatedDate: Date;
    IsSubscribedNotification: boolean;
    TokenizedDate?: any;
    CEPASRegistrationBlock: boolean;
    EMVRegistrationBlock: boolean;
    IsReachedMaxAllowedCard: boolean;
    EVoucherPurchaseQuota: string;
    PassMinValidity: number;
    CardInfo?: any;
    IsDefaultCard: boolean;
    IdType?: any;
    IdNumber?: any;
    FirstSix?: any;
    LastFour?: any;
    NRIC?: any;
    Device?: any;
    MobileCountryCode?: any;
    Id: number;
    IsError: boolean;
    ErrorMessage?: any;
    CreatedBy: number;
    CreatedDate: Date;
    ModifiedBy: number;
    ModifiedDate: Date;
    IsActive: boolean;
    IsDeleted: boolean;
    SystemIp?: any;
    IsShared: boolean;
}

export type GetPaymentCardsResponseDto = ResponseDto<PaymentCard[]>;