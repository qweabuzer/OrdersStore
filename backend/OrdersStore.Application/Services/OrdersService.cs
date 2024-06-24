using CSharpFunctionalExtensions;
using OrdersStore.Core.Interfaces;
using OrdersStore.Core.Models;

namespace OrdersStore.Application.Services
{
    public class OrdersService : IOrdersService
    {
        private readonly IOrdersRepository _ordersRepository;

        public OrdersService(IOrdersRepository ordersRepository)
        {
            _ordersRepository = ordersRepository;
        }

        public async Task<List<Order>> GetAllOrders()
        {
            return await _ordersRepository.GetAll();
        }

        public async Task<Result<Order>> GetById(Guid id)
        {
            var order = await _ordersRepository.Get(id);
            if (order == null)
                return Result.Failure<Order>("Не удалось найти заказ");

            return Result.Success<Order>(order);
        }

        public async Task<Result<Guid>> CreateOrder(Order order)
        {
            var orderId = await _ordersRepository.Create(order);

            if (orderId == Guid.Empty)
                return Result.Failure<Guid>("Не удалось создать заказ");

            return Result.Success<Guid>(orderId);
        }

        public async Task<Result> DeleteOrder(Guid id)
        {
            var result = await _ordersRepository.Delete(id);

            if (!result)
                return Result.Failure("Ошибка при удалении заказа");

            return Result.Success(result);
        }
    }
}
