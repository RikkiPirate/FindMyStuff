using System.Collections.Generic;
using System.Linq;
using FindMyStuff.Data.Dal.Interfaces;
using FindMyStuff.Data.Dal.Persistence;
using FindMyStuff.Data.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Controllers.Command
{
    [Route("api/Command/[controller]")]
    [ApiController]
    [EnableCors]
    public class DocumentController : ControllerBase
    {
        private readonly IDocumentCommandDal _documentDal;

        public DocumentController(FindMyStuffDBContext dbContext)
        {
            _documentDal = new DocumentCommandDal(dbContext);
        }


        [HttpPost]
        [EnableCors]
        public void Post([FromBody] Document document)
        {
            var documentXperson = document.DocumentXperson;
            if (!documentXperson.Any())
            {
                UnprocessableEntity(documentXperson);
            }
            else
            {
                var person = documentXperson.First().Person;
                if (person == null)
                {
                    UnprocessableEntity((Person) null);
                }
                else
                {
                    var doc = _documentDal.CreateDocument(document, documentXperson.First(), person);
                    if (doc != null)
                    {
                        Ok(doc);
                    }
                    else
                    {
                        UnprocessableEntity((Document) null);
                    }
                }
            }
        }

        [HttpPut]
        public void put([FromBody] Document document)
        {
            Document doc = _documentDal.UpdateDocument(document);
            if (doc != null)
            {
                Ok(doc);
            }
            else
            {
                UnprocessableEntity((Document) null);
            }
        }
    }
}