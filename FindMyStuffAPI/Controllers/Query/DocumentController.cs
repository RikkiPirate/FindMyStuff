using System.Collections.Generic;
using FindMyStuff.Data.Dal.Interfaces;
using FindMyStuff.Data.Dal.Persistence;
using FindMyStuff.Data.Models;
using Microsoft.AspNetCore.Mvc;

namespace Controllers.Query
{
    [Route("api/query/[controller]")]
    [ApiController]
    public class DocumentController : ControllerBase
    {
        private readonly IDocumentQueryDal _documentDal;

        public DocumentController(FindMyStuffDBContext dbContext)
        {
            _documentDal = new DocumentQueryDal(dbContext);
        }

        //public DocumentController()
        //{
        //}

        [HttpGet]
        public ActionResult<List<Document>> Get()
        {
            var x = _documentDal.GetDocumentsList();
            return Ok(x);
        }

        [HttpGet("{docNumber}", Name = "docNumber")]
        public ActionResult<Document> Get(string docNumber)
        {
            if (!string.IsNullOrEmpty(docNumber))
            {
                Document doc = new Document { DocNumber = docNumber };
                var x= _documentDal.GetDocumentItem(doc);
                return Ok(x);
            }
            else
            {
                return BadRequest();
            }

        }
    }
}