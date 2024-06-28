using Microsoft.EntityFrameworkCore;
using OrdersStore.Application.Services;
using OrdersStore.Core.Interfaces;
using OrdersStore.DataAccess;
using OrdersStore.DataAccess.Mapping;
using OrdersStore.DataAccess.Repositories;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(typeof(MappingProfile));

builder.Logging.ClearProviders();
builder.Logging.AddConsole();
builder.Logging.AddDebug();
builder.Logging.SetMinimumLevel(LogLevel.Information);

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:3000");
        policy.AllowAnyHeader();
        policy.AllowAnyMethod();
    });
});


builder.Services.AddDbContext<OrdersDbContext>(
    options =>
    {
        options.UseSqlServer(builder.Configuration.GetConnectionString(nameof(OrdersDbContext)));
    });

builder.Services.AddScoped<IOrdersRepository, OrdersRepository>();
builder.Services.AddScoped<IOrdersService, OrdersService>();
builder.Services.AddScoped<IGenerateNumService, GenerateNumService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();
app.UseCors();
app.MapControllers();

app.Run();
