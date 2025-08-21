// Session Manager for Quran Tracking System
class SessionManager {
    constructor() {
        this.currentSession = null;
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        // Listen for user login
        window.addEventListener('userLoggedIn', (event) => {
            this.initializeSessionManager(event.detail);
        });

        // Listen for session completion
        window.addEventListener('sessionCompleted', (event) => {
            this.handleSessionCompletion(event.detail);
        });
    }

    initializeSessionManager(user) {
        if (user.type === 'teacher') {
            this.initializeTeacherSessionManager(user);
        } else {
            this.initializeStudentSessionManager(user);
        }
    }

    initializeTeacherSessionManager(teacher) {
        // Set up teacher session management features
        console.log('Initializing teacher session manager for:', teacher.name);
    }

    initializeStudentSessionManager(student) {
        // Set up student session features
        console.log('Initializing student session manager for:', student.name);
    }

    // Start a new session
    startSession(studentCode, content) {
        const session = {
            id: Date.now(),
            studentCode: studentCode,
            content: content,
            startTime: new Date(),
            status: 'in-progress',
            grade: null,
            notes: '',
            teacher: window.authManager?.getCurrentUser()?.name || 'Unknown'
        };

        this.currentSession = session;
        
        // Trigger session started event
        window.dispatchEvent(new CustomEvent('sessionStarted', { detail: session }));
        
        return session;
    }

    // Complete a session with grading
    completeSession(sessionId, grade, notes, pages) {
        if (!this.currentSession || this.currentSession.id !== sessionId) {
            console.error('Session not found or not active');
            return null;
        }

        const completedSession = {
            ...this.currentSession,
            status: 'completed',
            grade: grade,
            notes: notes,
            pages: pages,
            endTime: new Date(),
            duration: this.calculateSessionDuration(this.currentSession.startTime)
        };

        // Save session to data manager
        if (window.dataManager) {
            window.dataManager.addSession(this.currentSession.studentCode, {
                content: completedSession.content,
                grade: completedSession.grade,
                teacher: completedSession.teacher,
                notes: completedSession.notes,
                pages: completedSession.pages
            });
        }

        // Clear current session
        this.currentSession = null;

        // Trigger session completed event
        window.dispatchEvent(new CustomEvent('sessionCompleted', { detail: completedSession }));

        return completedSession;
    }

    // Calculate session duration
    calculateSessionDuration(startTime) {
        const endTime = new Date();
        const duration = endTime - startTime;
        const minutes = Math.floor(duration / 60000);
        const seconds = Math.floor((duration % 60000) / 1000);
        return `${minutes}m ${seconds}s`;
    }

    // Handle session completion
    handleSessionCompletion(session) {
        console.log('Session completed:', session);
        
        // Update UI to reflect completed session
        this.updateSessionUI(session);
        
        // Show success message
        this.showSessionCompletionMessage(session);
    }

    // Update session UI after completion
    updateSessionUI(session) {
        // Update dashboard stats
        if (window.dashboardManager) {
            window.dashboardManager.loadDashboardContent();
        }

        // Update progress page if open
        const progressPage = document.getElementById('progressPage');
        if (progressPage && progressPage.classList.contains('active')) {
            window.dashboardManager?.loadProgressPage();
        }

        // Update past sessions if open
        const pastSessionsPage = document.getElementById('pastSessionsPage');
        if (pastSessionsPage && pastSessionsPage.classList.contains('active')) {
            window.dashboardManager?.loadPastSessionsPage();
        }
    }

    // Show session completion message
    showSessionCompletionMessage(session) {
        const message = `
            Session completed successfully!
            
            Student: ${this.getStudentName(session.studentCode)}
            Content: ${session.content}
            Grade: ${session.grade}
            Duration: ${session.duration}
            
            Great job! The session has been recorded.
        `;

        // Simple alert for now - can be enhanced with better UI
        alert(message);
    }

    // Get student name from code
    getStudentName(studentCode) {
        const users = window.authManager?.getSampleUsers() || [];
        const user = users.find(u => u.code === studentCode);
        return user ? user.name : studentCode;
    }

    // Grade a session
    gradeSession(sessionId, grade, notes) {
        if (!this.currentSession || this.currentSession.id !== sessionId) {
            console.error('Session not found or not active');
            return false;
        }

        this.currentSession.grade = grade;
        this.currentSession.notes = notes;

        return true;
    }

    // Get current session
    getCurrentSession() {
        return this.currentSession;
    }

    // Check if session is active
    isSessionActive() {
        return this.currentSession && this.currentSession.status === 'in-progress';
    }

    // Pause session
    pauseSession() {
        if (this.isSessionActive()) {
            this.currentSession.status = 'paused';
            this.currentSession.pauseTime = new Date();
            
            window.dispatchEvent(new CustomEvent('sessionPaused', { detail: this.currentSession }));
        }
    }

    // Resume session
    resumeSession() {
        if (this.currentSession && this.currentSession.status === 'paused') {
            this.currentSession.status = 'in-progress';
            
            // Calculate total pause time
            if (this.currentSession.pauseTime) {
                const pauseDuration = new Date() - this.currentSession.pauseTime;
                this.currentSession.totalPauseTime = (this.currentSession.totalPauseTime || 0) + pauseDuration;
            }
            
            window.dispatchEvent(new CustomEvent('sessionResumed', { detail: this.currentSession }));
        }
    }

    // Cancel session
    cancelSession() {
        if (this.isSessionActive()) {
            const cancelledSession = {
                ...this.currentSession,
                status: 'cancelled',
                endTime: new Date()
            };

            this.currentSession = null;
            
            window.dispatchEvent(new CustomEvent('sessionCancelled', { detail: cancelledSession }));
            
            return cancelledSession;
        }
        return null;
    }

    // Get session statistics
    getSessionStats(studentCode) {
        if (!window.dataManager) return null;

        const sessions = window.dataManager.getStudentSessions(studentCode);
        if (!sessions || sessions.length === 0) return null;

        const totalSessions = sessions.length;
        const totalPages = sessions.reduce((sum, session) => sum + (session.pages || 0), 0);
        const averageGrade = this.calculateAverageGrade(sessions);
        const totalDuration = this.calculateTotalDuration(sessions);

        return {
            totalSessions,
            totalPages,
            averageGrade,
            totalDuration,
            lastSession: sessions[sessions.length - 1]?.date || null
        };
    }

    // Calculate average grade from sessions
    calculateAverageGrade(sessions) {
        const grades = sessions
            .filter(session => session.grade)
            .map(session => this.gradeToNumber(session.grade));

        if (grades.length === 0) return '-';

        const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
        return this.numberToGrade(average);
    }

    // Convert grade to number for calculations
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

    // Convert number to grade
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

    // Calculate total duration from sessions
    calculateTotalDuration(sessions) {
        // This would calculate total time spent in sessions
        // For now, return a placeholder
        return 'Total time calculation not implemented yet';
    }

    // Get recommended content for next session
    getRecommendedContent(studentCode) {
        if (!window.dataManager) return null;

        const studentContent = window.dataManager.getStudentContent(studentCode);
        if (!studentContent) return null;

        // Find the next logical content based on current progress
        const completedContent = studentContent.filter(item => item.status === 'completed');
        const assignedContent = studentContent.filter(item => item.status === 'assigned');

        if (assignedContent.length > 0) {
            return assignedContent[0]; // Return first assigned content
        }

        // If no assigned content, suggest next logical step
        if (completedContent.length > 0) {
            const lastCompleted = completedContent[completedContent.length - 1];
            // This would implement logic to suggest next content
            // For now, return a placeholder
            return {
                surah: 'Next Surah',
                ayahRange: 'TBD',
                pages: 'TBD',
                notes: 'Content to be assigned by teacher'
            };
        }

        return null;
    }

    // Export session data
    exportSessionData(studentCode, format = 'json') {
        if (!window.dataManager) return null;

        const sessions = window.dataManager.getStudentSessions(studentCode);
        const progress = window.dataManager.getStudentProgress(studentCode);

        const exportData = {
            studentCode,
            exportDate: new Date().toISOString(),
            sessions,
            progress
        };

        switch (format.toLowerCase()) {
            case 'json':
                return JSON.stringify(exportData, null, 2);
            case 'csv':
                return this.convertToCSV(exportData);
            default:
                return exportData;
        }
    }

    // Convert data to CSV format
    convertToCSV(data) {
        // Simple CSV conversion for sessions
        if (!data.sessions || data.sessions.length === 0) return '';

        const headers = ['Date', 'Content', 'Grade', 'Pages', 'Notes', 'Teacher'];
        const rows = data.sessions.map(session => [
            session.date,
            session.content,
            session.grade || '',
            session.pages || '',
            session.notes || '',
            session.teacher || ''
        ]);

        const csvContent = [headers, ...rows]
            .map(row => row.map(cell => `"${cell}"`).join(','))
            .join('\n');

        return csvContent;
    }

    // Validate session data
    validateSessionData(sessionData) {
        const requiredFields = ['studentCode', 'content', 'grade'];
        const missingFields = requiredFields.filter(field => !sessionData[field]);

        if (missingFields.length > 0) {
            return {
                valid: false,
                errors: `Missing required fields: ${missingFields.join(', ')}`
            };
        }

        // Validate grade format
        const validGrades = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
        if (!validGrades.includes(sessionData.grade)) {
            return {
                valid: false,
                errors: `Invalid grade: ${sessionData.grade}. Must be one of: ${validGrades.join(', ')}`
            };
        }

        return { valid: true, errors: null };
    }
}

// Initialize session manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.sessionManager = new SessionManager();
});
