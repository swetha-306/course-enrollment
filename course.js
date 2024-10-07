var courses = [];

        document.getElementById('add-course').onclick = function() {
            var courseName = document.getElementById('course-name').value;
            var courseCode = document.getElementById('course-code').value;
            var studentName = document.getElementById('student-name').value;

            if (courseName && courseCode && studentName) {
                var course = courses.find(c => c.code === courseCode);
                if (!course) {
                    course = { name: courseName, code: courseCode, students: [] };
                    courses.push(course);
                }
                course.students.push(studentName);
                updateDisplay();
                document.getElementById('course-name').value = '';
                document.getElementById('course-code').value = '';
                document.getElementById('student-name').value = '';
            }
        };

        function updateDisplay() {
            var list = document.getElementById('course-list');
            list.innerHTML = '';
            courses.forEach(course => {
                var li = document.createElement('li');
                li.className = 'course-item';
                li.innerHTML = Course Name: ${course.name}, Course Code: ${course.code}<br>Students: ${course.students.join(', ')};
                list.appendChild(li);
            });
        }