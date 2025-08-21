// Teacher Manager for Quran Tracking System
class TeacherManager {
    constructor() {
        this.currentTeacher = null;
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        // Listen for user login
        window.addEventListener('userLoggedIn', (event) => {
            if (event.detail.type === 'teacher') {
                this.initializeTeacherManager(event.detail);
            }
        });

        // Listen for teacher data updates
        window.addEventListener('teacherDataLoaded', (event) => {
            this.updateTeacherData(event.detail);
        });
    }

    initializeTeacherManager(teacher) {
        this.currentTeacher = teacher;
        console.log('Teacher manager initialized for:', teacher.name);
        
        // Set up teacher-specific features
        this.setupTeacherFeatures();
    }

    setupTeacherFeatures() {
        // Add teacher-specific event listeners and UI elements
        this.setupStudentManagement();
        this.setupContentAssignment();
        this.setupGradingSystem();
    }

    setupStudentManagement() {
        // Set up student management functionality
        console.log('Setting up student management for teacher');
    }

    setupContentAssignment() {
        // Set up content assignment functionality
        console.log('Setting up content assignment for teacher');
    }

    setupGradingSystem() {
        // Set up grading system functionality
        console.log('Setting up grading system for teacher');
    }

    updateTeacherData(data) {
        const { students } = data;
        
        // Update teacher dashboard with student data
        this.updateStudentsList(students);
        
        // Update teacher statistics
        this.updateTeacherStats(students);
    }

    updateStudentsList(students) {
        const studentsList = document.getElementById('studentsList');
        if (!studentsList) return;

        if (students.length === 0) {
            studentsList.innerHTML = `
                <div class="no-students">
                    <h3>No Students Assigned</h3>
                    <p>You don't have any students assigned yet.</p>
                </div>
            `;
            return;
        }

        const studentsHTML = students.map(student => `
            <div class="student-card" data-student-code="${student.code}">
                <div class="student-header">
                    <div class="student-name">${this.getStudentName(student.code)}</div>
                    <div class="student-code">${student.code}</div>
                </div>
                
                <div class="student-info">
                    <div class="info-row">
                        <span class="info-label">Total Pages:</span>
                        <span class="info-value">${student.progress.totalPages || 0}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Average Grade:</span>
                        <span class="info-value grade-${this.getGradeClass(student.progress.averageGrade)}">
                            ${student.progress.averageGrade || '-'}
                        </span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Last Session:</span>
                        <span class="info-value">${this.formatDate(student.progress.lastSession) || 'Never'}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Current Streak:</span>
                        <span class="info-value">${student.progress.currentStreak || 0} days</span>
                    </div>
                </div>

                <div class="student-actions">
                    <button class="action-btn view-btn" onclick="teacherManager.viewStudentDetails('${student.code}')">
                        View Details
                    </button>
                    <button class="action-btn edit-btn" onclick="teacherManager.editStudentContent('${student.code}')">
                        Edit Content
                    </button>
                    <button class="action-btn grade-btn" onclick="teacherManager.startGradingSession('${student.code}')">
                        Grade Session
                    </button>
                </div>

                <div class="student-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${Math.min((student.progress.totalPages || 0) / 100 * 100, 100)}%"></div>
                    </div>
                    <div class="progress-text">${student.progress.totalPages || 0} / 100 pages</div>
                </div>
            </div>
        `).join('');

        studentsList.innerHTML = studentsHTML;
    }

    updateTeacherStats(students) {
        if (!students || students.length === 0) return;

        const stats = this.calculateTeacherStats(students);
        
        // Update dashboard stats for teacher view
        this.updateDashboardStats(stats);
    }

    calculateTeacherStats(students) {
        const totalStudents = students.length;
        const totalPages = students.reduce((sum, student) => sum + (student.progress.totalPages || 0), 0);
        const averageGrade = this.calculateClassAverageGrade(students);
        const activeStudents = students.filter(student => 
            student.progress.lastSession && 
            this.isWithinLastWeek(student.progress.lastSession)
        ).length;

        return {
            totalStudents,
            totalPages,
            averageGrade,
            activeStudents,
            inactiveStudents: totalStudents - activeStudents
        };
    }

    calculateClassAverageGrade(students) {
        const grades = students
            .map(student => student.progress.averageGrade)
            .filter(grade => grade && grade !== '-')
            .map(grade => this.gradeToNumber(grade));

        if (grades.length === 0) return '-';

        const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
        return this.numberToGrade(average);
    }

    updateDashboardStats(stats) {
        // Update dashboard with teacher overview stats
        const pagesMemorized = document.getElementById('pagesMemorized');
        const currentStreak = document.getElementById('currentStreak');
        const averageGrade = document.getElementById('averageGrade');

        if (pagesMemorized) {
            pagesMemorized.textContent = stats.totalStudents;
            pagesMemorized.parentElement.querySelector('h3').textContent = 'Total Students';
        }

        if (currentStreak) {
            currentStreak.textContent = stats.totalPages;
            currentStreak.parentElement.querySelector('h3').textContent = 'Total Pages';
        }

        if (averageGrade) {
            averageGrade.textContent = stats.averageGrade;
            averageGrade.parentElement.querySelector('h3').textContent = 'Class Average';
        }
    }

    // Student Management Methods
    viewStudentDetails(studentCode) {
        const student = this.getStudentData(studentCode);
        if (!student) {
            alert('Student not found');
            return;
        }

        this.showStudentDetailsModal(student);
    }

    editStudentContent(studentCode) {
        const student = this.getStudentData(studentCode);
        if (!student) {
            alert('Student not found');
            return;
        }

        this.showContentEditorModal(student);
    }

    startGradingSession(studentCode) {
        const student = this.getStudentData(studentCode);
        if (!student) {
            alert('Student not found');
            return;
        }

        this.showGradingModal(student);
    }

    // Modal Methods
    showStudentDetailsModal(student) {
        const modalHTML = `
            <div class="modal-overlay" id="studentDetailsModal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2>Student Details - ${this.getStudentName(student.code)}</h2>
                        <button class="modal-close" onclick="this.closeModal('studentDetailsModal')">&times;</button>
                    </div>
                    
                    <div class="modal-body">
                        <div class="student-details">
                            <div class="detail-section">
                                <h3>Progress Overview</h3>
                                <div class="detail-grid">
                                    <div class="detail-item">
                                        <span class="detail-label">Total Pages:</span>
                                        <span class="detail-value">${student.progress.totalPages || 0}</span>
                                    </div>
                                    <div class="detail-item">
                                        <span class="detail-label">Average Grade:</span>
                                        <span class="detail-value">${student.progress.averageGrade || '-'}</span>
                                    </div>
                                    <div class="detail-item">
                                        <span class="detail-label">Current Streak:</span>
                                        <span class="detail-value">${student.progress.currentStreak || 0} days</span>
                                    </div>
                                    <div class="detail-item">
                                        <span class="detail-label">Completion Rate:</span>
                                        <span class="detail-value">${student.progress.completionRate || 0}%</span>
                                    </div>
                                </div>
                            </div>

                            <div class="detail-section">
                                <h3>Recent Sessions</h3>
                                ${this.generateRecentSessionsHTML(student.sessions)}
                            </div>

                            <div class="detail-section">
                                <h3>Content Progress</h3>
                                ${this.generateContentProgressHTML(student.content)}
                            </div>
                        </div>
                    </div>
                    
                    <div class="modal-footer">
                        <button class="btn btn-secondary" onclick="this.closeModal('studentDetailsModal')">Close</button>
                        <button class="btn btn-primary" onclick="teacherManager.editStudentContent('${student.code}')">Edit Content</button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    showContentEditorModal(student) {
        const modalHTML = `
            <div class="modal-overlay" id="contentEditorModal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2>Edit Content - ${this.getStudentName(student.code)}</h2>
                        <button class="modal-close" onclick="this.closeModal('contentEditorModal')">&times;</button>
                    </div>
                    
                    <div class="modal-body">
                        <div class="content-editor">
                            <div class="editor-section">
                                <h3>Assign New Content</h3>
                                <form id="contentAssignmentForm">
                                    <div class="form-group">
                                        <label for="surahName">Surah Name:</label>
                                        <input type="text" id="surahName" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="ayahRange">Ayah Range:</label>
                                        <input type="text" id="ayahRange" placeholder="e.g., 1-5" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="pages">Pages:</label>
                                        <input type="text" id="pages" placeholder="e.g., 1-2" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="notes">Notes:</label>
                                        <textarea id="notes" rows="3" placeholder="Any special instructions..."></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="dueDate">Due Date:</label>
                                        <input type="date" id="dueDate" required>
                                    </div>
                                </form>
                            </div>

                            <div class="editor-section">
                                <h3>Current Content</h3>
                                ${this.generateCurrentContentHTML(student.content)}
                            </div>
                        </div>
                    </div>
                    
                    <div class="modal-footer">
                        <button class="btn btn-secondary" onclick="this.closeModal('contentEditorModal')">Cancel</button>
                        <button class="btn btn-primary" onclick="teacherManager.assignNewContent('${student.code}')">Assign Content</button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    showGradingModal(student) {
        const modalHTML = `
            <div class="modal-overlay" id="gradingModal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2>Grade Session - ${this.getStudentName(student.code)}</h2>
                        <button class="modal-close" onclick="this.closeModal('gradingModal')">&times;</button>
                    </div>
                    
                    <div class="modal-body">
                        <div class="grading-form">
                            <form id="gradingForm">
                                <div class="form-group">
                                    <label for="sessionContent">Session Content:</label>
                                    <input type="text" id="sessionContent" required>
                                </div>
                                <div class="form-group">
                                    <label for="sessionGrade">Grade:</label>
                                    <select id="sessionGrade" required>
                                        <option value="">Select Grade</option>
                                        <option value="A+">A+ (Excellent)</option>
                                        <option value="A">A (Very Good)</option>
                                        <option value="A-">A- (Good)</option>
                                        <option value="B+">B+ (Above Average)</option>
                                        <option value="B">B (Average)</option>
                                        <option value="B-">B- (Below Average)</option>
                                        <option value="C+">C+ (Needs Improvement)</option>
                                        <option value="C">C (Poor)</option>
                                        <option value="C-">C- (Very Poor)</option>
                                        <option value="D+">D+ (Unsatisfactory)</option>
                                        <option value="D">D (Very Unsatisfactory)</option>
                                        <option value="D-">D- (Extremely Poor)</option>
                                        <option value="F">F (Fail)</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="sessionPages">Pages Completed:</label>
                                    <input type="number" id="sessionPages" min="1" required>
                                </div>
                                <div class="form-group">
                                    <label for="sessionNotes">Notes:</label>
                                    <textarea id="sessionNotes" rows="4" placeholder="Feedback and observations..."></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    <div class="modal-footer">
                        <button class="btn btn-secondary" onclick="this.closeModal('gradingModal')">Cancel</button>
                        <button class="btn btn-primary" onclick="teacherManager.submitGrade('${student.code}')">Submit Grade</button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    // Helper Methods
    getStudentData(studentCode) {
        if (!window.currentTeacherData || !window.currentTeacherData.students) return null;
        return window.currentTeacherData.students.find(student => student.code === studentCode);
    }

    getStudentName(studentCode) {
        const users = window.authManager?.getSampleUsers() || [];
        const user = users.find(u => u.code === studentCode);
        return user ? user.name : studentCode;
    }

    generateRecentSessionsHTML(sessions) {
        if (!sessions || sessions.length === 0) {
            return '<p>No recent sessions</p>';
        }

        const recentSessions = sessions.slice(-5).reverse();
        return recentSessions.map(session => `
            <div class="session-item">
                <div class="session-date">${this.formatDate(session.date)}</div>
                <div class="session-content">${session.content}</div>
                <div class="session-grade grade-${this.getGradeClass(session.grade)}">${session.grade}</div>
            </div>
        `).join('');
    }

    generateContentProgressHTML(content) {
        if (!content || content.length === 0) {
            return '<p>No content assigned</p>';
        }

        return content.map(item => `
            <div class="content-item ${item.status}">
                <div class="content-header">
                    <span class="content-title">${item.surah} ${item.ayahRange}</span>
                    <span class="content-status ${item.status}">${item.status}</span>
                </div>
                <div class="content-details">
                    <span>Pages: ${item.pages}</span>
                    <span>Date: ${this.formatDate(item.date)}</span>
                    ${item.grade ? `<span>Grade: ${item.grade}</span>` : ''}
                </div>
            </div>
        `).join('');
    }

    generateCurrentContentHTML(content) {
        if (!content || content.length === 0) {
            return '<p>No content assigned</p>';
        }

        return content.map(item => `
            <div class="content-item ${item.status}">
                <div class="content-info">
                    <strong>${item.surah} ${item.ayahRange}</strong>
                    <span class="status-badge ${item.status}">${item.status}</span>
                </div>
                <div class="content-actions">
                    <button class="btn btn-small" onclick="teacherManager.editContentItem('${item.id}')">Edit</button>
                    <button class="btn btn-small btn-danger" onclick="teacherManager.deleteContentItem('${item.id}')">Delete</button>
                </div>
            </div>
        `).join('');
    }

    // Action Methods
    assignNewContent(studentCode) {
        const form = document.getElementById('contentAssignmentForm');
        if (!form) return;

        const formData = new FormData(form);
        const contentData = {
            surah: formData.get('surahName'),
            ayahRange: formData.get('ayahRange'),
            pages: formData.get('pages'),
            notes: formData.get('notes'),
            dueDate: formData.get('dueDate'),
            status: 'assigned'
        };

        // Validate form data
        if (!this.validateContentData(contentData)) {
            alert('Please fill in all required fields');
            return;
        }

        // Add content to student
        this.addContentToStudent(studentCode, contentData);

        // Close modal and refresh
        this.closeModal('contentEditorModal');
        this.refreshTeacherDashboard();
    }

    submitGrade(studentCode) {
        const form = document.getElementById('gradingForm');
        if (!form) return;

        const formData = new FormData(form);
        const gradeData = {
            content: formData.get('sessionContent'),
            grade: formData.get('sessionGrade'),
            pages: parseInt(formData.get('sessionPages')),
            notes: formData.get('sessionNotes'),
            teacher: this.currentTeacher.name
        };

        // Validate form data
        if (!this.validateGradeData(gradeData)) {
            alert('Please fill in all required fields');
            return;
        }

        // Add session to student
        this.addSessionToStudent(studentCode, gradeData);

        // Close modal and refresh
        this.closeModal('gradingModal');
        this.refreshTeacherDashboard();
    }

    // Validation Methods
    validateContentData(data) {
        return data.surah && data.ayahRange && data.pages && data.dueDate;
    }

    validateGradeData(data) {
        return data.content && data.grade && data.pages > 0;
    }

    // Data Management Methods
    addContentToStudent(studentCode, contentData) {
        if (!window.dataManager) return;

        // This would add content to the student's content list
        // For now, just log the action
        console.log('Adding content to student:', studentCode, contentData);
        
        // In a real implementation, you would call dataManager methods
        // to add the content and save it
    }

    addSessionToStudent(studentCode, sessionData) {
        if (!window.dataManager) return;

        // Add session using data manager
        const session = window.dataManager.addSession(studentCode, sessionData);
        
        if (session) {
            console.log('Session added successfully:', session);
        }
    }

    // Utility Methods
    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.remove();
        }
    }

    refreshTeacherDashboard() {
        // Refresh the teacher dashboard
        if (window.dashboardManager) {
            window.dashboardManager.loadManageStudentsPage();
        }
    }

    formatDate(dateString) {
        if (!dateString) return 'Never';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    }

    getGradeClass(grade) {
        if (!grade || grade === '-') return 'no-grade';
        if (grade === 'A+' || grade === 'A') return 'excellent';
        if (grade === 'B+' || grade === 'B') return 'good';
        return 'fair';
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

    isWithinLastWeek(dateString) {
        const date = new Date(dateString);
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        return date >= weekAgo;
    }
}

// Initialize teacher manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.teacherManager = new TeacherManager();
});
