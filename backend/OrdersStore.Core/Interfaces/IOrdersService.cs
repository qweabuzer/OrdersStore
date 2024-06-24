using CSharpFunctionalExtensions;
using OrdersStore.Core.Models;

namespace OrdersStore.Core.Interfaces
{
    public interface IOrdersService
    {
        Task<List<Order>> GetAllOrders();
        Task<Result<Order>> GetById(Guid id);
        Task<Result<Guid>> CreateOrder(Order order);
        Task<Result> DeleteOrder(Guid id);
    }
}
