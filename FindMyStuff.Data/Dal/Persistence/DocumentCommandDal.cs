using System;
using System.Collections.Generic;
using System.Linq;
using FindMyStuff.Data.Dal.Interfaces;
using FindMyStuff.Data.Models;

namespace FindMyStuff.Data.Dal.Persistence
{
    public class DocumentCommandDal : IDocumentCommandDal
    {
        private readonly FindMyStuffDBContext _dbContext;

        public DocumentCommandDal(FindMyStuffDBContext findMyStuffDbContext)
        {
            _dbContext = findMyStuffDbContext;
        }

        public Document CreateDocument(Document document, DocumentXperson documentXPerson, Person person)
        {

            var documentSearch = _dbContext.Document.FirstOrDefault(d =>
                string.Equals(d.DocNumber, document.DocNumber, StringComparison.OrdinalIgnoreCase));
            if (documentSearch != null) return documentSearch;

            var personSearch = _dbContext.Person.FirstOrDefault(p =>
                p.Name == person.Name &&
                p.LastName == person.LastName &&
                p.Email == person.Email &&
                p.Phone == person.Phone);
            if (personSearch != null) return documentSearch;

            //var newPerson = 
            //_dbContext.Person.Add(person);
            //_dbContext.SaveChanges();

            var DocumentXperson = new DocumentXperson
            {
                DateFound = documentXPerson.WasFound.GetValueOrDefault() ? DateTime.Now : (DateTime?)null,
                DateLost = documentXPerson.Wasloosed.GetValueOrDefault() ? DateTime.Now : (DateTime?)null,
                Latitude = documentXPerson.Latitude,
                Longitud = documentXPerson.Longitud,
                Wasloosed = documentXPerson.Wasloosed.GetValueOrDefault(),
                WasFound = documentXPerson.WasFound.GetValueOrDefault(),
                Person = new Person
                {
                    Email = person.Email,
                    LastName = person.LastName,
                    Name = person.Name,
                    Phone = person.Phone
                }
            };

            var newDocument = new Document
            {
                DocName = document.DocName,
                DocNumber = document.DocNumber,
                Picture = document.Picture,
                DocumentTypeId = document.DocumentTypeId,
                DocumentXperson = new List<DocumentXperson> { DocumentXperson }
            };

            _dbContext.Document.Add(newDocument);
            _dbContext.SaveChanges();
            return newDocument;
        }

        public Document UpdateDocument(Document document)
        {

            var x = _dbContext.Document.FirstOrDefault();
            if (x != null)
            {
                x.DocName = !string.Equals(x.DocName, document.DocName, StringComparison.Ordinal) ? document.DocName : x.DocName;
                x.DocumentType = document.DocumentType;
                x.Picture = !string.Equals(x.Picture, document.Picture, StringComparison.Ordinal) ? document.Picture : x.Picture;

                _dbContext.Document.Add(document);
                _dbContext.SaveChanges();
            }
            return x;
        }
    }
}