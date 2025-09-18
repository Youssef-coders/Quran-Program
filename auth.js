// Authentication System for Quran Tracking
class AuthManager {
    constructor() {
        this.currentUser = null;
        this.isTeacher = false;
        this.init();
    }

    init() {
        this.checkExistingSession();
        this.bindEvents();
    }

    bindEvents() {
        const loginBtn = document.getElementById('loginBtn');
        const loginForm = document.getElementById('loginForm');
        const logoutBtn = document.getElementById('logoutBtn');
        const userCodeInput = document.getElementById('userCode');

        // Login button handled by main script.js
        // Removed duplicate event listener to prevent conflicts

        // Login form handled by main script.js
        // Removed duplicate event listener to prevent conflicts

        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => this.handleLogout());
        }

        // Enter key handled by main script.js
        // Removed duplicate event listener to prevent conflicts
    }

    async handleLogin() {
        const userCode = document.getElementById('userCode').value.trim();
        
        if (!userCode) {
            // No user code entered
            return;
        }

        // Show loading state
        const loginBtn = document.getElementById('loginBtn');
        const originalText = loginBtn.textContent;
        loginBtn.textContent = 'Logging in...';
        loginBtn.disabled = true;

        try {
            const user = await this.authenticateUser(userCode);
            if (user) {
                this.loginSuccess(user);
            } else {
                // Invalid code
            }
        } catch (error) {
            // Login failed
        } finally {
            // Reset button state
            loginBtn.textContent = originalText;
            loginBtn.disabled = false;
        }
    }

    async authenticateUser(userCode) {
        // Simulate API call - in real app, this would be a server request
        const users = await this.getSampleUsers();
        const user = users.find(u => u.code === userCode);
        
        if (user) {
            // Store user session
            localStorage.setItem('quranUser', JSON.stringify(user));
            return user;
        }
        
        return null;
    }

    async getSampleUsers() {
        // Get stored students and teachers from Firebase or localStorage
        let storedStudents = {};
        let storedTeachers = {};
        
        if (window.firebaseService && window.firebaseService.initialized) {
            try {
                storedStudents = await window.firebaseService.getAllStudents();
                storedTeachers = await window.firebaseService.getAllTeachers();
            } catch (error) {
                console.error('Error fetching users from Firebase:', error);
                // Fallback to localStorage
                storedStudents = JSON.parse(localStorage.getItem('quranStudents') || '{}');
                storedTeachers = JSON.parse(localStorage.getItem('quranTeachers') || '{}');
            }
        } else {
            // Use localStorage
            storedStudents = JSON.parse(localStorage.getItem('quranStudents') || '{}');
            storedTeachers = JSON.parse(localStorage.getItem('quranTeachers') || '{}');
        }
        
        // Start with empty array - only use Firebase data
        const allUsers = [];
        
        // Add stored students
        Object.values(storedStudents).forEach(student => {
            allUsers.push({
                code: student.id,
                name: student.name,
                class: student.class,
                teacher: student.teacher || 'Unassigned',
                type: 'student',
                email: student.email,
                phone: student.phone,
                pagesMemorized: 0,
                currentStreak: 0,
                averageGrade: '-'
            });
        });
        
        // Add stored teachers
        Object.values(storedTeachers).forEach(teacher => {
            allUsers.push({
                code: teacher.id,
                name: teacher.name,
                class: teacher.class,
                teacher: 'Head Teacher',
                type: 'teacher',
                email: teacher.email,
                phone: teacher.phone,
                students: teacher.students || []
            });
        });
        
        return allUsers;
    }

    loginSuccess(user) {
        this.currentUser = user;
        this.isTeacher = user.type === 'teacher';
        
        // Hide login, show dashboard
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('dashboardSection').style.display = 'block';
        
        // Update header
        this.updateHeader(user);
        
        // Show/hide teacher features
        this.handleTeacherFeatures();
        
        // Initialize dashboard
        this.initializeDashboard();
        
        // Trigger custom event for other modules
        window.dispatchEvent(new CustomEvent('userLoggedIn', { detail: user }));
    }

    updateHeader(user) {
        document.getElementById('userName').textContent = user.name;
        document.getElementById('userClass').textContent = user.class;
        document.getElementById('teacherName').textContent = user.type === 'student' ? user.teacher : 'Teacher';
    }

    handleTeacherFeatures() {
        const teacherElements = document.querySelectorAll('.teacher-only');
        teacherElements.forEach(el => {
            el.style.display = this.isTeacher ? 'inline-block' : 'none';
        });
    }

    initializeDashboard() {
        // Load initial data
        if (this.isTeacher) {
            this.loadTeacherDashboard();
        } else {
            this.loadStudentDashboard();
        }
    }

    loadTeacherDashboard() {
        // Load students list and other teacher-specific data
        // Loading teacher dashboard
    }

    loadStudentDashboard() {
        // Load student-specific data
        // Loading student dashboard
    }

    handleLogout() {
        // Clear session
        localStorage.removeItem('quranUser');
        this.currentUser = null;
        this.isTeacher = false;
        
        // Show login, hide dashboard
        document.getElementById('loginSection').style.display = 'flex';
        document.getElementById('dashboardSection').style.display = 'none';
        
        // Clear form
        document.getElementById('userCode').value = '';
        
        // Trigger custom event
        window.dispatchEvent(new CustomEvent('userLoggedOut'));
    }

    checkExistingSession() {
        const savedUser = localStorage.getItem('quranUser');
        if (savedUser) {
            try {
                const user = JSON.parse(savedUser);
                this.loginSuccess(user);
            } catch (error) {
                localStorage.removeItem('quranUser');
                console.error('Invalid saved session:', error);
            }
        }
    }

    // showError function removed - no more alerts!

    getCurrentUser() {
        return this.currentUser;
    }

    isUserTeacher() {
        return this.isTeacher;
    }
}

// Initialize authentication when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.authManager = new AuthManager();
});

