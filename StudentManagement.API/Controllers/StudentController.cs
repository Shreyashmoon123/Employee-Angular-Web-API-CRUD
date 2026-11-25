using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentManagement.API.Data;
using StudentManagement.API.Models;

namespace StudentManagement.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly AppDbContext _context;

        public StudentController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Student>>> GetStudent()
        {
            var students = await _context.Students.ToListAsync();
            return Ok(students);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> GetStudentbyID(int id)
        {
            var student = await _context.Students.FindAsync(id);

            if (student == null)
            {
                return NotFound("Student Not Found");
            }
            return Ok(student);
        }
        [HttpPost]
        public async Task<ActionResult<Student>> CreateStudent(Student student)
        {
            _context.Students.Add(student);
            await _context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(GetStudent),
                new { id = student.Id },
                student
            );
        }
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateStudent(int id, Student student)
        {
            if (id != student.Id)
            {
                return BadRequest("Student ID Mismatch");
            }
            var existingStudent = await _context.Students.FindAsync(id);

            if (existingStudent == null)
            {
                return NotFound("Student Not Found");
            }
            existingStudent.FirstName = student.FirstName;
            existingStudent.LastName = student.LastName;
            existingStudent.Email = student.Email;
            existingStudent.Phone = student.Phone;
            existingStudent.Course = student.Course;
            existingStudent.Age = student.Age;

            await _context.SaveChangesAsync();

            return NoContent();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudent(int id)
        {
            var student = await _context.Students.FindAsync(id);

            if (student == null)
            {
                return NotFound();
            }

            _context.Students.Remove(student);

            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
