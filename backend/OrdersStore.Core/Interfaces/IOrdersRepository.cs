using OrdersStore.Core.Models;

namespace OrdersStore.Core.Interfaces
{
    public interface IOrdersRepository
    {
        Task<List<Order>> GetAll();
        Task<Order> Get(Guid id);
        Task<Guid> Create(Order order);
        Task<bool> Delete(Guid id);
        Task<bool> CheckNum(int serialNumber);
    }
}
