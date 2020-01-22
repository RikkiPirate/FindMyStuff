using FindMyStuff.Data.Models;

namespace FindMyStuff.Data.Dal.Interfaces
{
    public interface IDocumentCommandDal
    {
        Document UpdateDocument(Document document);
        Document CreateDocument(Document document, DocumentXperson documentXPerson, Person person);
    }
}