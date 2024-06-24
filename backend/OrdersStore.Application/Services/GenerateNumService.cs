using OrdersStore.Core.Interfaces;

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
            while (true)
            {
                var serialNumber = DateTime.UtcNow.ToString("yyyyMMddHHmmssfff");

                if (int.TryParse(serialNumber, out int num))
                {
                    var checkNum = await _ordersRepository.CheckNum(num);

                    if (checkNum)
                        return num;
                }

                await Task.Delay(1);
            }

        }
    }
}
