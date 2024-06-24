namespace OrdersStore.API.Contracts
{
    public record OrderResponse(
        int SerialNumber,
        string SenderCity,
        string SenderAddress,
        string RecipientCity,
        string RecipientAddress,
        decimal Weight,
        DateOnly PickupDate);

}
