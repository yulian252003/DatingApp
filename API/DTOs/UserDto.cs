using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class UserDto
    {
        [Required]
        public string Usernameb { get; set; }
        [Required]
        public string Token { get; set; }
    }

}
