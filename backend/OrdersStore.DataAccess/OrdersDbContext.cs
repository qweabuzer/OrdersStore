using Microsoft.EntityFrameworkCore;
using OrdersStore.DataAccess.Configuration;
using OrdersStore.DataAccess.Entities;

namespace OrdersStore.DataAccess
{
    public class OrdersDbContext : DbContext
    {
        public OrdersDbContext(DbContextOptions<OrdersDbContext> options)
            : base(options) 
        {
        }

        public DbSet<OrderEntity> Orders { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new OrderConfiguration());

            base.OnModelCreating(modelBuilder);
        }

    }
}
