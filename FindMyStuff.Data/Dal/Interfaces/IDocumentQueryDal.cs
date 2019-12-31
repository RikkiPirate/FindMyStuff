using System.Collections.Generic;
using FindMyStuff.Data.Models;

namespace FindMyStuff.Data.Dal.Interfaces
{
    public interface IDocumentQueryDal
    {
        List<Document> GetDocumentsList();
        Document GetDocumentItem(Document doc);
        List<DocumentType> GetDocumentTypesList();
    }
}