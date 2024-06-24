using System.ComponentModel;

namespace OrdersStore.API.Contracts
{
    public class OrderRequest
    {
        [DefaultValue("")]
        public string SenderCity { get; set; } = string.Empty;
        [DefaultValue("")]
        public string SenderAddress { get; set; } = string.Empty;
        [DefaultValue("")]
        public string RecipientCity { get; set; } = string.Empty;
        [DefaultValue("")]
        public string RecipientAddress { get; set; } = string.Empty;
        [DefaultValue(1)]
        public decimal Weight { get; set; } = 1;
        public DateOnly PickupDate { get; set; } = DateOnly.FromDateTime(DateTime.Now);
    }
}
