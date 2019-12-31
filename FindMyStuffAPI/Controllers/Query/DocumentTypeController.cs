using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FindMyStuff.Data.Dal.Interfaces;
using FindMyStuff.Data.Dal.Persistence;
using FindMyStuff.Data.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FindMyStuff.API.Controllers.Query
{
    [Route("api/query/[controller]")]
    [ApiController]
    [EnableCors]
    public class DocumentTypeController : ControllerBase
    {
        private readonly IDocumentQueryDal _documentTypeDal;

        public DocumentTypeController(FindMyStuffDBContext dbContext)
        {
            _documentTypeDal = new DocumentQueryDal(dbContext);
        }
        // GET: api/DocumentType
        [HttpGet]
        public ActionResult<List<DocumentType>> Get()
        {
            var x = _documentTypeDal.GetDocumentTypesList();
            return Ok(x);
        }

        // GET: api/DocumentType/5
        [HttpGet("{id}", Name = "id")]
        public string Get(int id)
        {
            return "value";
        }

        //// POST: api/DocumentType
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT: api/DocumentType/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE: api/ApiWithActions/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
