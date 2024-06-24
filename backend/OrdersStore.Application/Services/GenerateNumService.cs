using OrdersStore.Core.Interfaces;
using System;

namespace OrdersStore.Application.Services
{
    public class GenerateNumService : IGenerateNumService
    {
        private readonly IOrdersRepository _ordersRepository;

        public GenerateNumService(IOrdersRepository ordersRepository)
        {
            _ordersRepository = ordersRepository;
        }
        public async Task<int> GenerateNum()
        {
            Random rnd = new Random();
            int num;
            bool checkNum;

            do
            {
                num = rnd.Next(1000, int.MaxValue);
                checkNum = await _ordersRepository.CheckNum(num);
            }
            while (!checkNum);

            return num;
        }
    }
}
