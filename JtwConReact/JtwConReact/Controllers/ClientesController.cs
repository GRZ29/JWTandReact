using Ferreteria.Models;
using JWTejemplo.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactVista.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientesController : ControllerBase
    {        
        readonly ApplicationDbContext _context;
        public ClientesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult GetClientes()
        {
            var clientes = _context.Clientes.ToListAsync();
            return new JsonResult(new { success = true, data = clientes });
        }

        // api/Clientes/0

        [HttpGet("{id}", Name = "GetCliente")]
        public IActionResult GetCliente(int id)
        {

            try
            {
                var clientes = _context.Clientes.FindAsync(id);
                return Ok(clientes);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteClientes(int id)
        {
            try
            {
                var t = _context.Clientes.Find(id);
                if (t == null)
                {
                    return BadRequest("No se encuentra el cliente." );
                }
                _context.Clientes.Remove(t);
                _context.SaveChangesAsync();
                return Ok(id);
                //return Ok("se elimino");
            }
            catch (Exception)
            {

                return BadRequest("existe un problema con el servidor");
            }
            
        }

        [HttpPost]
        public async Task<ActionResult<Cliente>> InsertCliente(Cliente cliente)
        {
            try
            {
                _context.Clientes.Add(cliente);
                await _context.SaveChangesAsync();

                return CreatedAtRoute("GetCliente", new { id = cliente.IdCliente }, cliente);
                //return Ok("todo bien");
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCliente (int id,Cliente cliente)
        {
            if (id != cliente.IdCliente)
            {
                return BadRequest();
            }

            _context.Entry(cliente).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
                return CreatedAtRoute("GetCliente", new { id = cliente.IdCliente }, cliente);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserLoginExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

        }

        private bool UserLoginExists(int id)
        {
            return _context.Clientes.Any(e => e.IdCliente == id);
        }


        //API vs RESTfull API
        //[HttpPost]
        //public IActionResult InsertCliente(Cliente cliente)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        //Insert
        //        if (cliente.IdCliente == 0)
        //        {
        //            _controlador.Cliente.Agregar(cliente);
        //            _controlador.Guardar();
        //        }
        //        //Update
        //        else
        //        {
        //            try
        //            {
        //                _controlador.Cliente.Actualizar(cliente);
        //                _controlador.Guardar();
        //            }
        //            catch (DbUpdateConcurrencyException)
        //            {
        //                if (_controlador.Cliente.Buscar(cliente.IdCliente) == null)
        //                {
        //                    return NotFound();
        //                }
        //                else
        //                {
        //                    throw;
        //                }
        //            }
        //        }

        //        return new JsonResult(new { success = true, message = "Se agregó correctamente." });
        //    }

        //    return new JsonResult(new { success = false, message = "Ocurrió un error guardando la información." });
        //}
    }
}
