// Dashboard Manager for Quran Tracking System
class DashboardManager {
    constructor() {
        this.currentPage = 'dashboard';
        this.init();
    }

    init() {
        this.bindEvents();
        this.setupNavigation();
    }

    bindEvents() {
        // Listen for user login to initialize dashboard
        window.addEventListener('userLoggedIn', (event) => {
            this.initializeDashboard(event.detail);
        });

        // Listen for student data to update dashboard
        window.addEventListener('studentDataLoaded', (event) => {
            this.updateStudentDashboard(event.detail);
        });

        // Listen for teacher data to update dashboard
        window.addEventListener('teacherDataLoaded', (event) => {
            this.updateTeacherDashboard(event.detail);
        });
    }

    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetPage = link.getAttribute('data-page');
                this.navigateToPage(targetPage);
            });
        });
    }

    navigateToPage(pageName) {
        // Hide all pages
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => page.classList.remove('active'));

        // Remove active class from all nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => link.classList.remove('active'));

        // Show target page
        const targetPage = document.getElementById(pageName + 'Page');
        if (targetPage) {
            targetPage.classList.add('active');
        }

        // Add active class to clicked nav link
        const activeLink = document.querySelector(`[data-page="${pageName}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }

        this.currentPage = pageName;
        this.loadPageContent(pageName);
    }

    loadPageContent(pageName) {
        switch (pageName) {
            case 'dashboard':
                this.loadDashboardContent();
                break;
            case 'next-content':
                this.loadNextContentPage();
                break;
            case 'past-sessions':
                this.loadPastSessionsPage();
                break;
            case 'progress':
                this.loadProgressPage();
                break;
            case 'manage-students':
                this.loadManageStudentsPage();
                break;
        }
    }

    initializeDashboard(user) {
        if (user.type === 'student') {
            this.initializeStudentDashboard(user);
        } else if (user.type === 'teacher') {
            this.initializeTeacherDashboard(user);
        }
    }

    initializeStudentDashboard(user) {
        // Update welcome message
        const welcomeMessage = document.getElementById('welcomeMessage');
        if (welcomeMessage) {
            const timeOfDay = this.getTimeOfDay();
            welcomeMessage.textContent = `Good ${timeOfDay}! Ready for today's recitation?`;
        }

        // Load initial dashboard content
        this.loadDashboardContent();
    }

    initializeTeacherDashboard(user) {
        // Update welcome message for teachers
        const welcomeMessage = document.getElementById('welcomeMessage');
        if (welcomeMessage) {
            welcomeMessage.textContent = `Welcome back! Manage your students' progress.`;
        }

        // Load initial dashboard content
        this.loadDashboardContent();
    }

    updateStudentDashboard(data) {
        const { content, sessions, progress } = data;
        
        // Update stats
        this.updateStats(progress);
        
        // Update next session content
        this.updateNextSessionContent(content);
    }

    updateTeacherDashboard(data) {
        const { students } = data;
        
        // Update teacher-specific stats
        this.updateTeacherStats(students);
        
        // Update students overview
        this.updateStudentsOverview(students);
    }

    updateStats(progress) {
        // Update pages memorized
        const pagesMemorized = document.getElementById('pagesMemorized');
        if (pagesMemorized) {
            pagesMemorized.textContent = progress.totalPages || 0;
        }

        // Update current streak
        const currentStreak = document.getElementById('currentStreak');
        if (currentStreak) {
            currentStreak.textContent = progress.currentStreak || 0;
        }

        // Update average grade
        const averageGrade = document.getElementById('averageGrade');
        if (averageGrade) {
            averageGrade.textContent = progress.averageGrade || '-';
        }
    }

    updateTeacherStats(students) {
        // Calculate teacher overview stats
        const totalStudents = students.length;
        const totalPages = students.reduce((sum, student) => sum + (student.progress.totalPages || 0), 0);
        const averageGrade = this.calculateAverageGrade(students);

        // Update dashboard with teacher stats
        const pagesMemorized = document.getElementById('pagesMemorized');
        if (pagesMemorized) {
            pagesMemorized.textContent = totalStudents;
            pagesMemorized.parentElement.querySelector('h3').textContent = 'Total Students';
        }

        const currentStreak = document.getElementById('currentStreak');
        if (currentStreak) {
            currentStreak.textContent = totalPages;
            currentStreak.parentElement.querySelector('h3').textContent = 'Total Pages';
        }

        const averageGradeEl = document.getElementById('averageGrade');
        if (averageGradeEl) {
            averageGradeEl.textContent = averageGrade;
            averageGradeEl.parentElement.querySelector('h3').textContent = 'Class Average';
        }
    }

    calculateAverageGrade(students) {
        const grades = students
            .map(student => student.progress.averageGrade)
            .filter(grade => grade && grade !== '-')
            .map(grade => this.gradeToNumber(grade));

        if (grades.length === 0) return '-';

        const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
        return this.numberToGrade(average);
    }

    gradeToNumber(grade) {
        const gradeMap = {
            'A+': 95, 'A': 90, 'A-': 85,
            'B+': 80, 'B': 75, 'B-': 70,
            'C+': 65, 'C': 60, 'C-': 55,
            'D+': 50, 'D': 45, 'D-': 40,
            'F': 0
        };
        return gradeMap[grade] || 0;
    }

    numberToGrade(number) {
        if (number >= 93) return 'A+';
        if (number >= 90) return 'A';
        if (number >= 87) return 'A-';
        if (number >= 83) return 'B+';
        if (number >= 80) return 'B';
        if (number >= 77) return 'B-';
        if (number >= 73) return 'C+';
        if (number >= 70) return 'C';
        if (number >= 67) return 'C-';
        if (number >= 63) return 'D+';
        if (number >= 60) return 'D';
        if (number >= 57) return 'D-';
        return 'F';
    }

    updateNextSessionContent(content) {
        const nextSessionContent = document.getElementById('nextSessionContent');
        if (!nextSessionContent) return;

        const nextContent = content.find(item => item.status === 'assigned');
        
        if (nextContent) {
            nextSessionContent.innerHTML = `
                <div class="next-content-details">
                    <h3>${nextContent.surah} ${nextContent.ayahRange}</h3>
                    <p><strong>Pages:</strong> ${nextContent.pages}</p>
                    <p><strong>Date:</strong> ${this.formatDate(nextContent.date)}</p>
                    <p><strong>Notes:</strong> ${nextContent.notes}</p>
                </div>
            `;
        } else {
            nextSessionContent.innerHTML = `
                <div class="no-content">
                    <p>No new content assigned for the next session.</p>
                    <p>Great job! You're all caught up.</p>
                </div>
            `;
        }
    }

    updateStudentsOverview(students) {
        const nextSessionContent = document.getElementById('nextSessionContent');
        if (!nextSessionContent) return;

        if (students.length === 0) {
            nextSessionContent.innerHTML = `
                <div class="no-students">
                    <p>No students assigned yet.</p>
                </div>
            `;
            return;
        }

        const studentsList = students.map(student => `
            <div class="student-overview">
                <h4>${this.getStudentName(student.code)}</h4>
                <p>Pages: ${student.progress.totalPages || 0} | Grade: ${student.progress.averageGrade || '-'}</p>
            </div>
        `).join('');

        nextSessionContent.innerHTML = `
            <div class="students-overview">
                <h3>Your Students (${students.length})</h3>
                ${studentsList}
            </div>
        `;
    }

    getStudentName(studentCode) {
        // Get student name from auth manager
        const users = window.authManager?.getSampleUsers() || [];
        const user = users.find(u => u.code === studentCode);
        return user ? user.name : studentCode;
    }

    loadDashboardContent() {
        // Dashboard content is already loaded, just ensure it's visible
        this.navigateToPage('dashboard');
    }

    loadNextContentPage() {
        const nextContentDetails = document.getElementById('nextContentDetails');
        if (!nextContentDetails) return;

        const currentUser = window.authManager?.getCurrentUser();
        if (!currentUser) return;

        if (currentUser.type === 'student') {
            this.loadStudentNextContent(currentUser.code);
        } else {
            this.loadTeacherNextContent();
        }
    }

    loadStudentNextContent(studentCode) {
        const nextContentDetails = document.getElementById('nextContentDetails');
        if (!nextContentDetails) return;

        const nextContent = window.dataManager?.getNextContent(studentCode);
        
        if (nextContent) {
            nextContentDetails.innerHTML = `
                <div class="content-details">
                    <h3>${nextContent.surah} ${nextContent.ayahRange}</h3>
                    <div class="content-info">
                        <p><strong>Pages:</strong> ${nextContent.pages}</p>
                        <p><strong>Date:</strong> ${this.formatDate(nextContent.date)}</p>
                        <p><strong>Notes:</strong> ${nextContent.notes}</p>
                    </div>
                    <div class="content-actions">
                        <button class="action-btn view-btn">View Details</button>
                        <button class="action-btn edit-btn">Mark Complete</button>
                    </div>
                </div>
            `;
        } else {
            nextContentDetails.innerHTML = `
                <div class="no-content">
                    <p>No new content assigned for the next session.</p>
                </div>
            `;
        }
    }

    loadTeacherNextContent() {
        const nextContentDetails = document.getElementById('nextContentDetails');
        if (!nextContentDetails) return;

        nextContentDetails.innerHTML = `
            <div class="teacher-content">
                <h3>Assign New Content</h3>
                <p>Use the Manage Students page to assign new content to your students.</p>
                <button class="action-btn view-btn" onclick="this.navigateToPage('manage-students')">
                    Go to Manage Students
                </button>
            </div>
        `;
    }

    loadPastSessionsPage() {
        const pastSessionsList = document.getElementById('pastSessionsList');
        if (!pastSessionsList) return;

        const currentUser = window.authManager?.getCurrentUser();
        if (!currentUser) return;

        if (currentUser.type === 'student') {
            this.loadStudentPastSessions(currentUser.code);
        } else {
            this.loadTeacherPastSessions();
        }
    }

    loadStudentPastSessions(studentCode) {
        const pastSessionsList = document.getElementById('pastSessionsList');
        if (!pastSessionsList) return;

        const sessions = window.dataManager?.getStudentSessions(studentCode) || [];
        
        if (sessions.length === 0) {
            pastSessionsList.innerHTML = `
                <div class="no-sessions">
                    <p>No past sessions found.</p>
                </div>
            `;
            return;
        }

        const sessionsHTML = sessions.map(session => `
            <div class="session-item">
                <div class="session-date">${this.formatDate(session.date)}</div>
                <div class="session-content">
                    <strong>Content:</strong> ${session.content}<br>
                    <strong>Pages:</strong> ${session.pages}
                </div>
                <div class="session-grade grade-${this.getGradeClass(session.grade)}">
                    ${session.grade}
                </div>
                <div class="session-notes">
                    <strong>Notes:</strong> ${session.notes}
                </div>
            </div>
        `).join('');

        pastSessionsList.innerHTML = sessionsHTML;
    }

    loadTeacherPastSessions() {
        const pastSessionsList = document.getElementById('pastSessionsList');
        if (!pastSessionsList) return;

        pastSessionsList.innerHTML = `
            <div class="teacher-sessions">
                <h3>Recent Student Sessions</h3>
                <p>View individual student sessions in the Manage Students page.</p>
                <button class="action-btn view-btn" onclick="this.navigateToPage('manage-students')">
                    Go to Manage Students
                </button>
            </div>
        `;
    }

    loadProgressPage() {
        const currentUser = window.authManager?.getCurrentUser();
        if (!currentUser) return;

        if (currentUser.type === 'student') {
            this.loadStudentProgress(currentUser.code);
        } else {
            this.loadTeacherProgress();
        }
    }

    loadStudentProgress(studentCode) {
        const progress = window.dataManager?.getStudentProgress(studentCode);
        if (!progress) return;

        // Update progress stats
        const totalPages = document.getElementById('totalPages');
        const pagesThisMonth = document.getElementById('pagesThisMonth');
        const completionRate = document.getElementById('completionRate');

        if (totalPages) totalPages.textContent = progress.totalPages || 0;
        if (pagesThisMonth) pagesThisMonth.textContent = progress.pagesThisMonth || 0;
        if (completionRate) completionRate.textContent = `${progress.completionRate || 0}%`;

        // Initialize progress chart
        this.initializeProgressChart(studentCode);
    }

    loadTeacherProgress() {
        // Teacher progress overview
        const totalPages = document.getElementById('totalPages');
        const pagesThisMonth = document.getElementById('pagesThisMonth');
        const completionRate = document.getElementById('completionRate');

        if (totalPages) totalPages.textContent = 'Class Overview';
        if (pagesThisMonth) pagesThisMonth.textContent = 'View Students';
        if (completionRate) completionRate.textContent = 'Manage Progress';
    }

    loadManageStudentsPage() {
        const studentsList = document.getElementById('studentsList');
        if (!studentsList) return;

        const currentUser = window.authManager?.getCurrentUser();
        if (!currentUser || currentUser.type !== 'teacher') {
            studentsList.innerHTML = '<p>Access denied. Teachers only.</p>';
            return;
        }

        this.loadTeacherStudentsList();
    }

    loadTeacherStudentsList() {
        const studentsList = document.getElementById('studentsList');
        if (!studentsList) return;

        const teacherData = window.currentTeacherData;
        if (!teacherData || !teacherData.students) {
            studentsList.innerHTML = '<p>No students found.</p>';
            return;
        }

        const studentsHTML = teacherData.students.map(student => `
            <div class="student-card">
                <div class="student-name">${this.getStudentName(student.code)}</div>
                <div class="student-info">
                    <p><strong>Total Pages:</strong> ${student.progress.totalPages || 0}</p>
                    <p><strong>Average Grade:</strong> ${student.progress.averageGrade || '-'}</p>
                    <p><strong>Last Session:</strong> ${student.progress.lastSession || 'Never'}</p>
                </div>
                <div class="student-actions">
                    <button class="action-btn view-btn" onclick="this.viewStudentDetails('${student.code}')">
                        View Details
                    </button>
                    <button class="action-btn edit-btn" onclick="this.editStudentContent('${student.code}')">
                        Edit Content
                    </button>
                </div>
            </div>
        `).join('');

        studentsList.innerHTML = studentsHTML;
    }

    initializeProgressChart(studentCode) {
        // This would initialize a chart library like Chart.js
        // For now, just show a placeholder
        const progressChart = document.getElementById('progressChart');
        if (progressChart) {
            progressChart.innerHTML = `
                <div class="chart-placeholder">
                    <p>Progress Chart</p>
                    <p>Chart visualization would go here</p>
                </div>
            `;
        }
    }

    getTimeOfDay() {
        const hour = new Date().getHours();
        if (hour < 12) return 'morning';
        if (hour < 17) return 'afternoon';
        return 'evening';
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    getGradeClass(grade) {
        if (grade === 'A+' || grade === 'A') return 'excellent';
        if (grade === 'B+' || grade === 'B') return 'good';
        return 'fair';
    }

    // Methods for teacher actions
    viewStudentDetails(studentCode) {
        console.log('Viewing details for student:', studentCode);
        // Implementation for viewing student details
    }

    editStudentContent(studentCode) {
        console.log('Editing content for student:', studentCode);
        // Implementation for editing student content
    }
}

// Initialize dashboard manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.dashboardManager = new DashboardManager();
});
