using CSharpFunctionalExtensions;

namespace OrdersStore.Core.Models
{
    public class Order
    {
        private Order(Guid id, int serialNuber, string senderCity, string senderAddres, string recipientCity, string recipientAddress, decimal weight, DateOnly pickupDate)
        {
            Id = id;
            SerialNumber = serialNuber;
            SenderCity = senderCity;
            SenderAddress = senderAddres;
            RecipientCity = recipientCity;
            RecipientAddress = recipientAddress;
            Weight = weight;
            PickupDate = pickupDate;
        }

        public Guid Id { get; }
        public int SerialNumber { get; }
        public string SenderCity { get; } = string.Empty;
        public string SenderAddress { get; } = string.Empty;
        public string RecipientCity { get;} = string.Empty;
        public string RecipientAddress { get; } = string.Empty;
        public decimal Weight { get; }
        public DateOnly PickupDate { get; }

        public static Result<Order> Create(Guid id, int serialNuber, string senderCity, string senderAddres, string recipientCity, string recipientAddress, decimal weight, DateOnly pickupDate)
        {
            if (string.IsNullOrEmpty(senderCity))
                return Result.Failure<Order>("Поле \"Город отправителя\" не может быть пустым ");

            if (string.IsNullOrEmpty(senderAddres))
                return Result.Failure<Order>("Поле \"Адрес отправителя\"  не может быть пустым ");

            if (string.IsNullOrEmpty(recipientCity))
                return Result.Failure<Order>("Поле \"Город получателя\"  не может быть пустым ");

            if (string.IsNullOrEmpty(recipientAddress))
                return Result.Failure<Order>("Поле \"Адрес получателя\"  не может быть пустым ");

            if(weight <= decimal.Zero)
                return Result.Failure<Order>("Некоректное значение для поля \"Вес груза\"  ");

            if (pickupDate > DateOnly.FromDateTime(DateTime.Now.AddYears(1)) || pickupDate < DateOnly.FromDateTime(DateTime.Now))
                return Result.Failure<Order>("Некоректное значение для поля \"Дата забора груза\"  ");

            var order = new Order(
                id,
                serialNuber,
                senderCity,
                senderAddres,
                recipientCity,
                recipientAddress,
                weight,
                pickupDate);

            return Result.Success(order);
        }

    }
}
