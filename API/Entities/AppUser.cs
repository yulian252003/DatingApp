using API.Extensions;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.AspNetCore.SignalR.Protocol;

namespace API.Entities;

public class AppUser
{
    public int Id {get; set;}
    public string UserName {get; set;}

    public byte[] PasswordHash {get; set;}

    public byte[] PasswordSalt {get; set;}

    public DateOnly DateOfBirth{get; set;}

    public string KnownAs {get; set;}

    public DateTime Created {get; set;} = DateTime.UtcNow;

    public DateTime LastActive {get; set;} = DateTime.UtcNow;

    public string Gender{get; set;}

    public string Introduction{get; set;}

    public string LookingFor {get; set;}

    public string Interests {get; set;}

    public string City {get; set;}

    public string Country {get; set;}

    public List<Photo> Photos {get; set;} = new ();

/*
    public int GetAge()
    {
        return DateOfBirth.CalculateAge();
    }

 This is an alternative to the code implemente in line 12 class: AutoMapperProfiles
     public string GetPhotoUrl()
      {
            foreach (var photo in Photos)
            {
                if (photo.IsMain)
                    return photo.Url;
            }
            return null; // or return a default photo URL or an empty string
        }
        */
}
