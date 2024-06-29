namespace OrdersStore.API.Contracts
{
    public record OrderRequest(
        string SenderCity,
        string SenderAddress,
        string RecipientCity,
        string RecipientAddress,
        decimal Weight,
        DateOnly PickupDate);
}
