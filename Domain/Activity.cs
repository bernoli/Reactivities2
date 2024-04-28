namespace Domain
{
    /// <summary>
    /// Represents an activity in the domain.
    /// </summary>
    /// <remarks>
    /// This class contains properties that define an activity, including its ID, title, date, description, category, city, and venue.
    /// The ID is a unique identifier (Guid) used to avoid conflicts when merging databases.
    /// </remarks>
    public class Activity
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public string City { get; set; }
        public string Venue { get; set; }
    }

}