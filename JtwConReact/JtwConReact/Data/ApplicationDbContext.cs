using Ferreteria.Models;
using JWTejemplo.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JWTejemplo.Data
{
    public class ApplicationDbContext : IdentityDbContext<AplicationUser>
    {
        public ApplicationDbContext (DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

        public DbSet<RegisterModel> RegisterModel { get; set; }
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<LoginModel> LoginModel { get; set; }
    }
}
