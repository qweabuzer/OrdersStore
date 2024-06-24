namespace OrdersStore.API.Contracts
{
    public record OrderResponse(
        Guid id,
        int SerialNumber,
        string SenderCity,
        string SenderAddress,
        string RecipientCity,
        string RecipientAddress,
        decimal Weight,
        DateOnly PickupDate);

}
