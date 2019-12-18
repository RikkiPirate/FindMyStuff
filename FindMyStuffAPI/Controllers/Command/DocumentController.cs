using System.Collections.Generic;
using FindMyStuff.Data.Dal.Interfaces;
using FindMyStuff.Data.Models;
using Microsoft.AspNetCore.Mvc;

namespace Controllers.Command
{
    [Route("api/Command/[controller]")]
    [ApiController]
    public class DocumentController : ControllerBase
    {
        private readonly IDocumentCommandDal _documentDal;

        public DocumentController(IDocumentCommandDal settings)
        {
            _documentDal = settings;
        }

        [HttpPost]
        public void Post([FromBody] Document document)
        {
            Document doc = _documentDal.CreateDocument(document);
            if (doc.Id>0)
            {
                Ok(doc);
            }
            else
            {
                UnprocessableEntity(doc);
            }
        }

        [HttpPut]
        public void put([FromBody] Document document)
        {
            Document doc = _documentDal.UpdateDocument(document);
            if (doc.Id > 0)
            {
                Ok(doc);
            }
            else
            {
                UnprocessableEntity(doc);
            }
        }
    }
}