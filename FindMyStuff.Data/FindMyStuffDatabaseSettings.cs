namespace FindMyStuff.Data
{
    public class FindMyStuffDatabaseSettings : IFindMyStuffDatabaseSettings
    {
        public string FindMyStuffCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}