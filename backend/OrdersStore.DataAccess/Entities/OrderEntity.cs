
namespace OrdersStore.DataAccess.Entities
{
    public class OrderEntity
    {
        public Guid Id { get; set; }
        public int SerialNumber { get; set; }
        public string SenderCity { get; set; } = string.Empty;
        public string SenderAddress { get; set; } = string.Empty;
        public string RecipientCity { get; set; } = string.Empty;
        public string RecipientAddress { get; set; } = string.Empty;
        public decimal Weight { get; set; }
        public DateOnly PickupDate { get; set; }
    }
}
