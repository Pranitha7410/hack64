const courses = [
    { id: 1, name: "JAVA PROGRAMMING", type: "Theory" },
    { id: 2, name: "ADVANCE DATA STRUCTURES THROUGH C++", type: "Theory" },
    { id: 3, name: "DATABASE MANAGEMENT SYSTEM", type: "Theory" },
    { id: 4, name: "COMPUTER NETWORKS", type: "Theory" },
    { id: 5, name: "OPERATING SYSTEMS", type: "Theory" },
    { id: 6, name: "COMPILER DESIGN", type: "Theory" },
    { id: 7, name: "JAVA LAB", type: "Lab" },
    { id: 8, name: "ADSC++ LAB", type: "Lab" },
    { id: 9, name: "DBMS LAB", type: "Lab" }
];

const teachers = {
    1: [
        {
            name: "Prof. Aarav",
            img: "teacher1.png",
            profile: "Prof. Aarav is an experienced Java programming educator.",
            ratings: [4.5, 4.6, 4.7, 4.8],
            researchProjects: ["Java in Education", "AI in Programming"],
            patents: ["Method for Optimizing Java Code"],
            academicBackground: "PhD in Computer Science, XYZ University"
        },
        {
            name: "Prof. Devin",
            img: "teacher2.png",
            profile: "Prof. Devin specializes in advanced data structures.",
            ratings: [4.7, 4.8, 4.9, 4.6],
            researchProjects: ["Data Structures in Modern Computing"],
            patents: ["Data Compression Techniques"],
            academicBackground: "Masters in Computer Science, ABC University"
        },
        {
            name: "Prof. John",
            img: "teacher3.png",
            profile: "Prof. John focuses on database management systems.",
            ratings: [4.6, 4.5, 4.7, 4.6],
            researchProjects: ["Big Data and Databases"],
            patents: ["Efficient Query Processing"],
            academicBackground: "PhD in Database Systems, DEF University"
        }
    ],
    2: [
        {
            name: "Prof. Stephen",
            img: "teacher4.png",
            profile: "Prof. Stephen specializes in computer networks.",
            ratings: [4.6, 4.7, 4.8, 4.9],
            researchProjects: ["Network Security", "IoT Innovations"],
            patents: ["Adaptive Network Protocol"],
            academicBackground: "PhD in Network Security, GHI University"
        },
        {
            name: "Prof. Joy",
            img: "teacher5.png",
            profile: "Prof. Joy focuses on operating systems.",
            ratings: [4.5, 4.6, 4.7, 4.8],
            researchProjects: ["Real-time Operating Systems"],
            patents: ["Efficient Memory Management"],
            academicBackground: "Masters in Operating Systems, JKL University"
        },
        {
            name: "Prof. Victor",
            img: "teacher6.png",
            profile: "Prof. Victor teaches compiler design.",
            ratings: [4.7, 4.6, 4.8, 4.5],
            researchProjects: ["Compiler Optimization Techniques"],
            patents: ["Compiler Code Generation"],
            academicBackground: "PhD in Compiler Design, MNO University"
        }
    ],
    3: [
        {
            name: "Prof. Mary",
            img: "teacher7.png",
            profile: "Prof. Mary is known for her innovative teaching methods.",
            ratings: [4.8, 4.9, 4.6, 4.7],
            researchProjects: ["Teaching with Technology"],
            patents: ["Interactive Learning Systems"],
            academicBackground: "PhD in Educational Technology, PQR University"
        },
        {
            name: "Prof. Jonah",
            img: "teacher8.png",
            profile: "Prof. Jonah specializes in software engineering.",
            ratings: [4.7, 4.6, 4.8, 4.9],
            researchProjects: ["Agile Software Development"],
            patents: ["Software Project Management Tools"],
            academicBackground: "Masters in Software Engineering, STU University"
        },
        {
            name: "Prof. Jenny",
            img: "teacher9.png",
            profile: "Prof. Jenny focuses on machine learning.",
            ratings: [4.6, 4.8, 4.9, 4.5],
            researchProjects: ["Machine Learning in Healthcare"],
            patents: ["Predictive Analytics Algorithms"],
            academicBackground: "PhD in Artificial Intelligence, VWX University"
        }
    ],
    4: [
        {
            name: "Prof. Ronald",
            img: "teacher10.png",
            profile: "Prof. Ronald teaches advanced programming concepts.",
            ratings: [4.9, 4.8, 4.7, 4.6],
            researchProjects: ["Advanced Programming Techniques"],
            patents: ["Code Optimization Algorithms"],
            academicBackground: "PhD in Computer Science, YZ University"
        },
        {
            name: "Prof. Vishal",
            img: "teacher11.png",
            profile: "Prof. Vishal specializes in cloud computing.",
            ratings: [4.8, 4.7, 4.6, 4.5],
            researchProjects: ["Cloud Security"],
            patents: ["Cloud Resource Management"],
            academicBackground: "Masters in Cloud Computing, ABC University"
        },
        {
            name: "Prof. Kevin",
            img: "teacher12.png",
            profile: "Prof. Kevin focuses on mobile application development.",
            ratings: [4.6, 4.8, 4.9, 4.7],
            researchProjects: ["Mobile App Development"],
            patents: ["Mobile Security Techniques"],
            academicBackground: "PhD in Mobile Computing, DEF University"
        }
    ],
    5: [
        {
            name: "Dr. MaryLatha",
            img: "teacher13.png",
            profile: "Dr. MaryLatha teaches database management systems.",
            ratings: [4.7, 4.6, 4.5, 4.8],
            researchProjects: ["DBMS Innovations"],
            patents: ["Database Optimization Techniques"],
            academicBackground: "PhD in Database Systems, GHI University"
        },
        {
            name: "Dr. Paul",
            img: "teacher14.png",
            profile: "Dr. Paul specializes in computer networks.",
            ratings: [4.8, 4.7, 4.6, 4.5],
            researchProjects: ["Network Protocols"],
            patents: ["Adaptive Network Solutions"],
            academicBackground: "Masters in Network Engineering, JKL University"
        },
        {
            name: "Dr. Raju",
            img: "teacher15.png",
            profile: "Dr. Raju focuses on operating systems.",
            ratings: [4.6, 4.8, 4.7, 4.9],
            researchProjects: ["Real-time Systems"],
            patents: ["OS Performance Enhancements"],
            academicBackground: "PhD in Operating Systems, MNO University"
        }
    ],
    6: [
        {
            name: "Dr. Peter",
            img: "teacher16.png",
            profile: "Dr. Peter specializes in compiler design.",
            ratings: [4.5, 4.6, 4.7, 4.8],
            researchProjects: ["Compiler Design Innovations"],
            patents: ["Advanced Compiler Techniques"],
            academicBackground: "PhD in Compiler Science, STU University"
        },
        {
            name: "Dr. Mosley",
            img: "teacher17.png",
            profile: "Dr. Mosley focuses on machine learning.",
            ratings: [4.9, 4.8, 4.7, 4.6],
            researchProjects: ["Machine Learning Algorithms"],
            patents: ["Data Mining Techniques"],
            academicBackground: "Masters in AI, VWX University"
        },
        {
            name: "Dr. Robbin",
            img: "teacher18.png",
            profile: "Dr. Robbin teaches software engineering.",
            ratings: [4.6, 4.7, 4.8, 4.9],
            researchProjects: ["Software Development Methodologies"],
            patents: ["Agile Development Tools"],
            academicBackground: "PhD in Software Engineering, YZ University"
        }
    ],
    7: [
        {
            name: "Dr. Steve",
            img: "teacher19.png",
            profile: "Dr. Steve specializes in data science.",
            ratings: [4.6, 4.5, 4.7, 4.8],
            researchProjects: ["Data Analytics in Business"],
            patents: ["Business Intelligence Tools"],
            academicBackground: "PhD in Data Science, XYZ University"
        },
        {
            name: "Dr. Preethi",
            img: "teacher20.png",
            profile: "Dr. Preethi focuses on cloud computing.",
            ratings: [4.8, 4.9, 4.6, 4.7],
            researchProjects: ["Cloud Storage Solutions"],
            patents: ["Data Management Tools"],
            academicBackground: "Masters in Cloud Technologies, ABC University"
        },
        {
            name: "Dr. Tisha",
            img: "teacher21.png",
            profile: "Dr. Tisha is known for her work in information systems.",
            ratings: [4.7, 4.8, 4.9, 4.6],
            researchProjects: ["Information Management Systems"],
            patents: ["Data Management Tools"],
            academicBackground: "PhD in Information Systems, DEF University"
        }
    ],
    8: [
        {
            name: "Dr. Kumar",
            img: "teacher2.png",
            profile: "Dr. Kumar specializes in artificial intelligence.",
            ratings: [4.9, 4.8, 4.7, 4.6],
            researchProjects: ["AI in Healthcare"],
            patents: ["AI-Based Health Solutions"],
            academicBackground: "PhD in Artificial Intelligence, GHI University"
        },
        {
            name: "Dr. Robert",
            img: "teacher3.png",
            profile: "Dr. Robert focuses on web technologies.",
            ratings: [4.6, 4.7, 4.8, 4.9],
            researchProjects: ["Web Development Innovations"],
            patents: ["Responsive Design Techniques"],
            academicBackground: "Masters in Web Development, JKL University"
        },
        {
            name: "Dr. Sophia",
            img: "teacher4.png",
            profile: "Dr. Sophia teaches mobile computing.",
            ratings: [4.8, 4.7, 4.6, 4.5],
            researchProjects: ["Mobile Technologies"],
            patents: ["Mobile Development Tools"],
            academicBackground: "PhD in Mobile Computing, MNO University"
        }
    ],
    9: [
        {
            name: "Dr. Alice",
            img: "teacher5.png",
            profile: "Dr. Alice specializes in software testing.",
            ratings: [4.6, 4.7, 4.8, 4.9],
            researchProjects: ["Testing Methodologies"],
            patents: ["Automated Testing Tools"],
            academicBackground: "PhD in Software Testing, STU University"
        },
        {
            name: "Dr. Charlie",
            img: "teacher6.png",
            profile: "Dr. Charlie focuses on digital marketing.",
            ratings: [4.9, 4.8, 4.7, 4.6],
            researchProjects: ["Digital Marketing Strategies"],
            patents: ["Marketing Automation Tools"],
            academicBackground: "Masters in Digital Marketing, VWX University"
        },
        {
            name: "Dr. Emma",
            img: "teacher7.png",
            profile: "Dr. Emma specializes in project management.",
            ratings: [4.5, 4.6, 4.7, 4.8],
            researchProjects: ["Project Management Frameworks"],
            patents: ["Project Tracking Tools"],
            academicBackground: "PhD in Project Management, YZ University"
        }
    ]
};

// Dynamically generate course cards with teacher selection
function loadCourses() {
    const courseList = document.getElementById("courseList");

    courses.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("course-card");

        // Create dropdown for selecting teachers
        let teacherOptions = teachers[course.id].map(teacher => `
            <option value="${teacher.name}" data-img="${teacher.img}" data-profile="${teacher.profile}" 
                data-ratings="${teacher.ratings.join(',')}" data-research="${teacher.researchProjects.join(',')}" 
                data-patents="${teacher.patents.join(',')}" data-academic="${teacher.academicBackground}">
                ${teacher.name}
            </option>
        `).join('');

        courseCard.innerHTML = `
            <h3>${course.name} (${course.type})</h3>
            <label>
                <input type="checkbox" id="course-${course.id}" value="${course.name}"> Select your subject
            </label>
            <div id="teachers-${course.id}" style="display:none;">
                <label for="teacher-${course.id}">Select and see the  teacher's profile:</label>

                <select name="teacher-${course.id}" id="teacher-select-${course.id}">
                    <option value="">-- Select Teacher --</option>
                    ${teacherOptions}
                </select>
                <img id="teacher-img-${course.id}" style="display:none; width: 40px; height: 40px; margin-left: 10px;" />
                <div id="teacher-info-${course.id}" class="teacher-info" style="margin-top: 10px; display: none;">
                    <p id="teacher-profile-${course.id}"></p>
                    <p><strong>Ratings:</strong> <span id="teacher-ratings-${course.id}"></span></p>
                    <p><strong>Research Projects:</strong> <span id="teacher-research-${course.id}"></span></p>
                    <p><strong>Patents:</strong> <span id="teacher-patents-${course.id}"></span></p>
                    <p><strong>Academic Background:</strong> <span id="teacher-academic-${course.id}"></span></p>
                </div>
            </div>
        `;

        courseList.appendChild(courseCard);

        // Add event listener to show/hide teacher selection based on checkbox
        document.getElementById(`course-${course.id}`).addEventListener('change', function() {
            document.getElementById(`teachers-${course.id}`).style.display = this.checked ? 'block' : 'none';
            // Reset selection when course is unselected
            if (!this.checked) {
                resetTeacherSelection(course.id);
            }
        });

        // Add event listener to show the selected teacher's image and information
        const teacherSelect = document.getElementById(`teacher-select-${course.id}`);
        teacherSelect.addEventListener('change', function() {
            const selectedOption = this.options[this.selectedIndex];
            const teacherImg = document.getElementById(`teacher-img-${course.id}`);
            const teacherInfo = document.getElementById(`teacher-info-${course.id}`);
            
            if (selectedOption.value) {
                teacherImg.src = selectedOption.dataset.img; // Set the teacher's image based on selection
                teacherImg.style.display = 'inline'; // Show the image
                document.getElementById(`teacher-profile-${course.id}`).textContent = selectedOption.dataset.profile;
                document.getElementById(`teacher-ratings-${course.id}`).textContent = selectedOption.dataset.ratings;
                document.getElementById(`teacher-research-${course.id}`).textContent = selectedOption.dataset.research;
                document.getElementById(`teacher-patents-${course.id}`).textContent = selectedOption.dataset.patents;
                document.getElementById(`teacher-academic-${course.id}`).textContent = selectedOption.dataset.academic;
                
                teacherInfo.style.display = 'block'; // Show the teacher info
            } else {
                teacherImg.style.display = 'none'; // Hide the image if no selection
                teacherInfo.style.display = 'none'; // Hide the info if no selection
            }
        });
    });
}

// Reset teacher selection when course is unchecked
function resetTeacherSelection(courseId) {
    const teacherSelect = document.getElementById(`teacher-select-${courseId}`);
    teacherSelect.selectedIndex = 0; // Reset selection
    const teacherImg = document.getElementById(`teacher-img-${courseId}`);
    const teacherInfo = document.getElementById(`teacher-info-${courseId}`);
    
    teacherImg.style.display = 'none'; // Hide the image
    teacherInfo.style.display = 'none'; // Hide the info
}

// Handle form submission
document.getElementById("courseForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const selectedCourses = [];
    const checkedCourses = document.querySelectorAll('input[type="checkbox"]:checked');

    let theoryCount = 0;
    let labCount = 0;

    checkedCourses.forEach(courseCheckbox => {
        const courseId = courseCheckbox.id.split('-')[1];
        const teacherSelect = document.querySelector(`select[name="teacher-${courseId}"]`);
        
        if (teacherSelect.value) {
            selectedCourses.push({ courseName: courseCheckbox.value, teacher: teacherSelect.value });
            const courseType = courses.find(course => course.id == courseId).type;
            if (courseType === "Theory") {
                theoryCount++;
            } else if (courseType === "Lab") {
                labCount++;
            }
        }
    });

    // Validation: Check for limits
    if (theoryCount < 1 || theoryCount > 4) {
        alert("You must select at least 1 and up to 4 theory subjects.");
        return;
    }

    if (labCount > 2) {
        alert("You can only select up to 2 lab subjects.");
        return;
    }

    if (selectedCourses.length < 1) {
        alert("Please select at least one course and a teacher.");
        return;
    }

    displaySelectedCourses(selectedCourses);
});

// Display selected courses summary
function displaySelectedCourses(selectedCourses) {
    const summaryDiv = document.getElementById("summary");
    const selectedCoursesDiv = document.getElementById("selectedCourses");
    
    selectedCoursesDiv.innerHTML = ""; // Clear previous selections

    selectedCourses.forEach(course => {
        const courseItem = document.createElement("div");
        courseItem.innerText = `Course: ${course.courseName}, Teacher: ${course.teacher}`;
        selectedCoursesDiv.appendChild(courseItem);
    });

    summaryDiv.style.display = "block"; // Show the summary
}

// Initial call to load courses on page load
window.onload = loadCourses;
// Get the modal, open button, close button
const feedbackFormContainer = document.getElementById('feedbackFormContainer');
const openFeedbackForm = document.getElementById('openFeedbackForm');
const closeFeedbackForm = document.getElementById('closeFeedbackForm');

document.getElementById("giveFeedbackBtn").addEventListener("click", function() {
    document.getElementById("feedbackPopup").style.display = "block";
    document.getElementById("feedbackOverlay").style.display = "block";
});

document.getElementById("feedbackOverlay").addEventListener("click", function() {
    document.getElementById("feedbackPopup").style.display = "none";
    document.getElementById("feedbackOverlay").style.display = "none";
});

// Close the modal when clicking outside the form
window.addEventListener('click', (e) => {
    if (e.target === feedbackFormContainer) {
        feedbackFormContainer.style.display = 'none';
        document.getElementById('feedbackForm').classList.remove('show');
    }
});

// Display selected courses summary and show feedback form
function displaySelectedCourses(selectedCourses) {
    const summaryDiv = document.getElementById("summary");
    const selectedCoursesDiv = document.getElementById("selectedCourses");
    const feedbackFormDiv = document.getElementById("feedbackForm");
    
    selectedCoursesDiv.innerHTML = ""; // Clear previous selections

    selectedCourses.forEach(course => {
        const courseItem = document.createElement("div");
        courseItem.innerText = `Course: ${course.courseName}, Teacher: ${course.teacher}`;
        selectedCoursesDiv.appendChild(courseItem);
    });

    summaryDiv.style.display = "block"; // Show the summary
    feedbackFormDiv.style.display = "block"; // Show the feedback form
}


