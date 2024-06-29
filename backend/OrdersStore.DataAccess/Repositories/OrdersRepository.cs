using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using OrdersStore.Core.Interfaces;
using OrdersStore.Core.Models;
using OrdersStore.DataAccess.Entities;

namespace OrdersStore.DataAccess.Repositories
{
    public class OrdersRepository : IOrdersRepository
    {
        private readonly OrdersDbContext _context;
        private readonly IMapper _mapper;
        private readonly ILogger<OrdersRepository> _logger;

        public OrdersRepository(OrdersDbContext context, IMapper mapper, ILogger<OrdersRepository> logger)
        {
            _context = context;
            _mapper = mapper;
            _logger = logger;
        }

        public async Task<List<Order>> GetAll()
        {
            try
            {
                var orderEntities = await _context.Orders
                    .AsNoTracking()
                    .ToListAsync();

                var orders = orderEntities
                    .Select(u => _mapper.Map<Order>(u))
                    .ToList();

                return orders;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message, ex);
                return new List<Order>();
            }
        }

        public async Task<Order> Get(Guid id)
        {
            try
            {
                var orderEntity = await _context.Orders
                    .FirstOrDefaultAsync(o => o.Id == id);

                var order = _mapper.Map<Order>(orderEntity);

                return order;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message, ex);
                return null;
            }
        }

        public async Task<Guid> Create(Order order)
        {
            try
            {
                var orderEntity = _mapper.Map<OrderEntity>(order);

                await _context.Orders.AddAsync(orderEntity);
                await _context.SaveChangesAsync();

                return orderEntity.Id;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message, ex);
                return Guid.Empty;
            }
        }

        public async Task<bool> Delete(Guid id)
        {
            try
            {
                await _context.Orders
                    .Where(o => o.Id == id)
                    .ExecuteDeleteAsync();

                return true;
            }
            catch(Exception ex)
            {
                _logger.LogError(ex.Message, ex);
                return false;
            }
        }

        public async Task<bool> CheckNum(int serialNumber)
        {
            try
            {
                var order = await _context.Orders
                    .FirstOrDefaultAsync(o => o.SerialNumber == serialNumber);
                if (order == null)
                    return true;

                return false;
            }
            catch(Exception ex)
            {
                _logger.LogError(ex.Message, ex);
                return true;
            }
        }
    }
}
