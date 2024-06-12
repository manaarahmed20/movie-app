
const latestCourses = [
    { id: 1, title: 'Course 1', description: 'Description of Course 1' },
    { id: 2, title: 'Course 2', description: 'Description of Course 2' }
];

const recommendedCourses = [
    { id: 3, title: 'Course 3', description: 'Description of Course 3' },
    { id: 4, title: 'Course 4', description: 'Description of Course 4' }
];

const comments = [];

// Functions for login and signup
function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    alert(`Logged in as: ${email}`);
}

function signup() {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    alert(`Signed up as: ${email}`);
}

// Display courses on Home Page
function displayCourses() {
    const latestCoursesContainer = document.getElementById('latestCourses');
    latestCourses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.innerHTML = `<a href="course-details.html?id=${course.id}">${course.title}</a>`;
        latestCoursesContainer.appendChild(courseElement);
    });

    const recommendedCoursesContainer = document.getElementById('recommendedCourses');
    recommendedCourses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.innerHTML = `<a href="course-details.html?id=${course.id}">${course.title}</a>`;
        recommendedCoursesContainer.appendChild(courseElement);
    });
}

// Load course details
function loadCourseDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id');
    const course = [...latestCourses, ...recommendedCourses].find(c => c.id == courseId);
    
    document.getElementById('courseTitle').innerText = course.title;
    document.getElementById('courseDescription').innerText = course.description;
    
    displayComments();
}

// Display comments on Course Details Page
function displayComments() {
    const commentsContainer = document.getElementById('comments');
    commentsContainer.innerHTML = '';
    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.innerText = comment;
        commentsContainer.appendChild(commentElement);
    });
}
function checkLikedStatus() {
    const likeButton = document.getElementById('likeButton');
    if (isLiked) {
        likeButton.innerText = 'Unlike';
    } else {
        likeButton.innerText = 'Like';
    }
}
function toggleLike() {
    const likeButton = document.getElementById('likeButton');
    if (likeButton.innerText === 'Like') {
        likeButton.innerText = 'Unlike';
    } else {
        likeButton.innerText = 'Like';
    }
}


// Add a new comment
function addComment() {
    const commentText = document.getElementById('commentText').value;
    comments.push(commentText);
    displayComments();
}

// Display favourite courses
    // Sample data for favorite courses
const favoriteCourses = [
    { id: 1, title: 'Course 1', description: 'Description of Course 1' },
    { id: 2, title: 'Course 2', description: 'Description of Course 2' }
];

// Function to display favorite courses
function displayFavouriteCourses() {
    const favouriteCoursesContainer = document.getElementById('favouriteCourses');
    if (favoriteCourses.length === 0) {
        favouriteCoursesContainer.innerHTML = '<p>No favorite courses yet.</p>';
    } else {
        favoriteCourses.forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.innerHTML = `<h3>${course.title}</h3><p>${course.description}</p>`;
            favouriteCoursesContainer.appendChild(courseElement);
        });
    }
}

