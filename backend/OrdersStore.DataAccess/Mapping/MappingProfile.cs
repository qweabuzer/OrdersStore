using AutoMapper;
using OrdersStore.Core.Models;
using OrdersStore.DataAccess.Entities;

namespace OrdersStore.DataAccess.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<OrderEntity, Order>()
            .ConstructUsing(src => Order.Create(
                src.Id,
                src.SerialNumber,
                src.SenderCity,
                src.SenderAddress,
                src.RecipientCity,
                src.RecipientAddress,
                src.Weight,
                src.PickupDate).Value)
            .ReverseMap();
        }
    }
}
