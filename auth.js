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
        const logoutBtn = document.getElementById('logoutBtn');
        const userCodeInput = document.getElementById('userCode');

        if (loginBtn) {
            loginBtn.addEventListener('click', () => this.handleLogin());
        }

        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => this.handleLogout());
        }

        if (userCodeInput) {
            userCodeInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.handleLogin();
                }
            });
        }
    }

    async handleLogin() {
        const userCode = document.getElementById('userCode').value.trim();
        
        if (!userCode) {
            this.showError('Please enter your unique code');
            return;
        }

        try {
            const user = await this.authenticateUser(userCode);
            if (user) {
                this.loginSuccess(user);
            } else {
                this.showError('Invalid code. Please try again.');
            }
        } catch (error) {
            this.showError('Login failed. Please try again.');
            console.error('Login error:', error);
        }
    }

    async authenticateUser(userCode) {
        // Simulate API call - in real app, this would be a server request
        const users = this.getSampleUsers();
        const user = users.find(u => u.code === userCode);
        
        if (user) {
            // Store user session
            localStorage.setItem('quranUser', JSON.stringify(user));
            return user;
        }
        
        return null;
    }

    getSampleUsers() {
        // Sample data - in real app, this would come from a database
        return [
            {
                code: 'ST001',
                name: 'Ahmed Hassan',
                class: 'Class 10A',
                teacher: 'Ustadh Omar',
                type: 'student',
                pagesMemorized: 45,
                currentStreak: 7,
                averageGrade: 'A'
            },
            {
                code: 'ST002',
                name: 'Fatima Ali',
                class: 'Class 10A',
                teacher: 'Ustadh Omar',
                type: 'student',
                pagesMemorized: 38,
                currentStreak: 12,
                averageGrade: 'A+'
            },
            {
                code: 'ST003',
                name: 'Yusuf Khan',
                class: 'Class 9B',
                teacher: 'Ustadha Aisha',
                type: 'student',
                pagesMemorized: 52,
                currentStreak: 5,
                averageGrade: 'B+'
            },
            {
                code: 'TC001',
                name: 'Ustadh Omar',
                class: 'Class 10A',
                teacher: 'Head Teacher',
                type: 'teacher',
                students: ['ST001', 'ST002']
            },
            {
                code: 'TC002',
                name: 'Ustadha Aisha',
                class: 'Class 9B',
                teacher: 'Head Teacher',
                type: 'teacher',
                students: ['ST003']
            }
        ];
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
        console.log('Loading teacher dashboard...');
    }

    loadStudentDashboard() {
        // Load student-specific data
        console.log('Loading student dashboard...');
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

    showError(message) {
        // Simple error display - can be enhanced with better UI
        alert(message);
    }

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
