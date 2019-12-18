using System.Collections.Generic;
using FindMyStuff.Data.Dal.Interfaces;
using FindMyStuff.Data.Entities;
using FindMyStuff.Data.Models;
using Microsoft.AspNetCore.Mvc;

namespace Controllers.Query
{
    [Route("api/query/[controller]")]
    [ApiController]
    public class DocumentController : ControllerBase
    {
        private readonly IDocumentQueryDal _documentDal;
        
        public DocumentController(IDocumentQueryDal settings)
        {
            _documentDal = settings;
        }

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