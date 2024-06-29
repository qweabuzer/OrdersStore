using Microsoft.AspNetCore.Mvc;
using OrdersStore.API.Contracts;
using OrdersStore.Core.Interfaces;
using OrdersStore.Core.Models;

namespace OrdersStore.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IOrdersService _ordersService;
        private readonly IGenerateNumService _generateNumService;

        public OrdersController(IOrdersService ordersService, IGenerateNumService generateNumService)
        {
            _ordersService = ordersService;
            _generateNumService = generateNumService;
        }

        [HttpGet("GetAll")]
        public async Task<ActionResult<List<OrderResponse>>> GetAllOrders()
        {
            var orders = await _ordersService.GetAllOrders();
            var response = orders
                .Select(o => new OrderResponse(
                    o.Id,
                    o.SerialNumber,
                    o.SenderCity,
                    o.SenderAddress,
                    o.RecipientCity,
                    o.RecipientAddress,
                    o.Weight,
                    o.PickupDate));

            return Ok(response);
        }

        [HttpGet("Id")]
        public async Task<ActionResult<OrderResponse>> GetOrderById(Guid id)
        {
            var order = await _ordersService.GetById(id);
            if (order.IsFailure)
                return NotFound(order.Error);

            var response = new OrderResponse(
                order.Value.Id,
                order.Value.SerialNumber,
                order.Value.SenderCity,
                order.Value.SenderAddress,
                order.Value.RecipientCity,
                order.Value.RecipientAddress,
                order.Value.Weight,
                order.Value.PickupDate);

            return Ok(response);
        }

        [HttpPost("Create")]
        public async Task<ActionResult<Guid>> CreateOrder([FromBody] OrderRequest request)
        {
            var order = Order.Create(
                Guid.NewGuid(),
                await _generateNumService.GenerateNum(),
                request.SenderCity,
                request.SenderAddress,
                request.RecipientCity,
                request.RecipientAddress,
                request.Weight,
                request.PickupDate);

            if (order.IsFailure)
                return NotFound(order.Error);

            var orderId = await _ordersService.CreateOrder(order.Value);

            if (orderId.IsFailure)
                return NotFound(orderId.Error);

            return Ok(orderId.Value);
        }

        [HttpDelete("DeleteOrder")]
        public async Task<ActionResult> DeleteOrder(Guid id)
        {
            var result = await _ordersService.DeleteOrder(id);
            if(result.IsFailure)    
                return NotFound(result.Error);

            return Ok();
        }
    }
}
