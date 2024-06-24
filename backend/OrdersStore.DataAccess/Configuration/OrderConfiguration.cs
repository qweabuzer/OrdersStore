using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OrdersStore.DataAccess.Entities;
using System.ComponentModel;

namespace OrdersStore.DataAccess.Configuration
{
    public class OrderConfiguration : IEntityTypeConfiguration<OrderEntity>
    {
        public void Configure(EntityTypeBuilder<OrderEntity> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.SerialNumber)
                .IsRequired();

            builder.Property(x => x.SenderCity)
                .IsRequired()
                .HasMaxLength(100);

            builder.Property(x => x.SenderAddress)
                .IsRequired()
                .HasMaxLength(200);

            builder.Property(x => x.RecipientCity)
                .IsRequired()
                .HasMaxLength(100);

            builder.Property(x => x.RecipientAddress)
                .IsRequired()
                .HasMaxLength(200);

            builder.Property(x => x.Weight)
                .IsRequired()
                .HasColumnType("decimal(18,3)"); 

            builder.Property(x => x.PickupDate)
                .IsRequired()
                .HasConversion(
                 v => v.ToDateTime(TimeOnly.MinValue),
                    v => DateOnly.FromDateTime(v));
        }
    }
}
