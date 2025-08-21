// Progress Tracker for Quran Tracking System
class ProgressTracker {
    constructor() {
        this.chartInstance = null;
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        // Listen for user login
        window.addEventListener('userLoggedIn', (event) => {
            this.initializeProgressTracker(event.detail);
        });

        // Listen for student data updates
        window.addEventListener('studentDataLoaded', (event) => {
            this.updateProgressData(event.detail);
        });

        // Listen for session completion
        window.addEventListener('sessionCompleted', (event) => {
            this.handleSessionCompletion(event.detail);
        });
    }

    initializeProgressTracker(user) {
        if (user.type === 'student') {
            this.initializeStudentProgressTracker(user);
        } else if (user.type === 'teacher') {
            this.initializeTeacherProgressTracker(user);
        }
    }

    initializeStudentProgressTracker(student) {
        console.log('Initializing progress tracker for student:', student.name);
        this.setupProgressChart(student.code);
    }

    initializeTeacherProgressTracker(teacher) {
        console.log('Initializing progress tracker for teacher:', teacher.name);
        // Teacher progress tracking would be different - overview of all students
    }

    updateProgressData(data) {
        const { content, sessions, progress } = data;
        
        // Update progress statistics
        this.updateProgressStats(progress);
        
        // Update progress chart if available
        if (this.chartInstance) {
            this.updateProgressChart(data);
        }
        
        // Calculate and update completion rate
        this.updateCompletionRate(content);
    }

    updateProgressStats(progress) {
        // Update total pages
        const totalPages = document.getElementById('totalPages');
        if (totalPages) {
            totalPages.textContent = progress.totalPages || 0;
        }

        // Update pages this month
        const pagesThisMonth = document.getElementById('pagesThisMonth');
        if (pagesThisMonth) {
            pagesThisMonth.textContent = progress.pagesThisMonth || 0;
        }

        // Update completion rate
        const completionRate = document.getElementById('completionRate');
        if (completionRate) {
            completionRate.textContent = `${progress.completionRate || 0}%`;
        }
    }

    updateCompletionRate(content) {
        if (!content || content.length === 0) return;

        const totalAssigned = content.length;
        const completed = content.filter(item => item.status === 'completed').length;
        const completionRate = Math.round((completed / totalAssigned) * 100);

        // Update completion rate display
        const completionRateEl = document.getElementById('completionRate');
        if (completionRateEl) {
            completionRateEl.textContent = `${completionRate}%`;
        }

        // Store in progress data
        if (window.currentStudentData && window.currentStudentData.progress) {
            window.currentStudentData.progress.completionRate = completionRate;
        }
    }

    setupProgressChart(studentCode) {
        const chartCanvas = document.getElementById('progressChart');
        if (!chartCanvas) return;

        // For now, create a simple text-based progress display
        // In a real implementation, you would use Chart.js or similar
        this.createSimpleProgressDisplay(chartCanvas, studentCode);
    }

    createSimpleProgressDisplay(canvas, studentCode) {
        const progress = window.dataManager?.getStudentProgress(studentCode);
        if (!progress) return;

        const sessions = window.dataManager?.getStudentSessions(studentCode) || [];
        
        // Create a simple progress visualization
        const progressHTML = `
            <div class="progress-visualization">
                <h3>Memorization Progress</h3>
                
                <div class="progress-bar-container">
                    <div class="progress-label">Overall Progress</div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${Math.min(progress.totalPages / 100 * 100, 100)}%"></div>
                    </div>
                    <div class="progress-text">${progress.totalPages} pages / 100 pages goal</div>
                </div>

                <div class="monthly-progress">
                    <h4>This Month's Progress</h4>
                    <div class="monthly-stats">
                        <div class="stat">
                            <span class="stat-number">${progress.pagesThisMonth || 0}</span>
                            <span class="stat-label">Pages</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">${progress.currentStreak || 0}</span>
                            <span class="stat-label">Day Streak</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">${progress.averageGrade || '-'}</span>
                            <span class="stat-label">Avg Grade</span>
                        </div>
                    </div>
                </div>

                <div class="recent-activity">
                    <h4>Recent Activity</h4>
                    ${this.generateRecentActivityHTML(sessions)}
                </div>
            </div>
        `;

        canvas.innerHTML = progressHTML;
    }

    generateRecentActivityHTML(sessions) {
        if (!sessions || sessions.length === 0) {
            return '<p>No recent activity</p>';
        }

        const recentSessions = sessions.slice(-5).reverse(); // Last 5 sessions
        
        const sessionsHTML = recentSessions.map(session => `
            <div class="activity-item">
                <div class="activity-date">${this.formatDate(session.date)}</div>
                <div class="activity-content">
                    <strong>${session.content}</strong> - Grade: ${session.grade}
                </div>
            </div>
        `).join('');

        return `
            <div class="activity-list">
                ${sessionsHTML}
            </div>
        `;
    }

    updateProgressChart(data) {
        // This would update the actual chart if using a charting library
        // For now, just refresh the simple display
        const chartCanvas = document.getElementById('progressChart');
        if (chartCanvas) {
            const currentUser = window.authManager?.getCurrentUser();
            if (currentUser && currentUser.type === 'student') {
                this.createSimpleProgressDisplay(chartCanvas, currentUser.code);
            }
        }
    }

    handleSessionCompletion(session) {
        // Update progress when a session is completed
        this.updateProgressAfterSession(session);
        
        // Refresh progress display
        this.refreshProgressDisplay();
    }

    updateProgressAfterSession(session) {
        if (!window.dataManager) return;

        const studentCode = session.studentCode;
        const progress = window.dataManager.getStudentProgress(studentCode);
        
        if (progress) {
            // Update total pages
            if (session.pages) {
                progress.totalPages = (progress.totalPages || 0) + session.pages;
            }

            // Update pages this month
            const currentMonth = new Date().getMonth();
            const currentYear = new Date().getFullYear();
            
            if (progress.pagesThisMonth === undefined) {
                progress.pagesThisMonth = 0;
            }
            
            if (session.pages) {
                progress.pagesThisMonth += session.pages;
            }

            // Update last session date
            progress.lastSession = new Date().toISOString().split('T')[0];

            // Save updated progress
            window.dataManager.saveDataToStorage();
        }
    }

    refreshProgressDisplay() {
        // Refresh the progress page if it's currently active
        const progressPage = document.getElementById('progressPage');
        if (progressPage && progressPage.classList.contains('active')) {
            const currentUser = window.authManager?.getCurrentUser();
            if (currentUser && currentUser.type === 'student') {
                this.updateProgressData(window.currentStudentData);
            }
        }
    }

    // Calculate progress milestones
    calculateMilestones(totalPages) {
        const milestones = [
            { name: 'First Page', pages: 1, achieved: totalPages >= 1 },
            { name: '10 Pages', pages: 10, achieved: totalPages >= 10 },
            { name: '25 Pages', pages: 25, achieved: totalPages >= 25 },
            { name: '50 Pages', pages: 50, achieved: totalPages >= 50 },
            { name: '100 Pages', pages: 100, achieved: totalPages >= 100 },
            { name: 'Half Quran', pages: 300, achieved: totalPages >= 300 },
            { name: 'Complete Quran', pages: 604, achieved: totalPages >= 604 }
        ];

        return milestones;
    }

    // Get next milestone
    getNextMilestone(totalPages) {
        const milestones = this.calculateMilestones(totalPages);
        const nextMilestone = milestones.find(milestone => !milestone.achieved);
        return nextMilestone;
    }

    // Calculate estimated completion date
    calculateEstimatedCompletion(currentPages, averagePagesPerMonth) {
        if (!averagePagesPerMonth || averagePagesPerMonth <= 0) return null;

        const remainingPages = 604 - currentPages; // Total Quran pages
        const monthsRemaining = Math.ceil(remainingPages / averagePagesPerMonth);
        
        const estimatedDate = new Date();
        estimatedDate.setMonth(estimatedDate.getMonth() + monthsRemaining);
        
        return estimatedDate;
    }

    // Generate progress report
    generateProgressReport(studentCode) {
        if (!window.dataManager) return null;

        const progress = window.dataManager.getStudentProgress(studentCode);
        const sessions = window.dataManager.getStudentSessions(studentCode) || [];
        const content = window.dataManager.getStudentContent(studentCode) || [];

        if (!progress) return null;

        const report = {
            studentCode,
            generatedDate: new Date().toISOString(),
            overview: {
                totalPages: progress.totalPages || 0,
                pagesThisMonth: progress.pagesThisMonth || 0,
                currentStreak: progress.currentStreak || 0,
                averageGrade: progress.averageGrade || '-',
                completionRate: progress.completionRate || 0
            },
            milestones: this.calculateMilestones(progress.totalPages || 0),
            nextMilestone: this.getNextMilestone(progress.totalPages || 0),
            recentSessions: sessions.slice(-10), // Last 10 sessions
            contentProgress: {
                total: content.length,
                completed: content.filter(item => item.status === 'completed').length,
                assigned: content.filter(item => item.status === 'assigned').length
            },
            recommendations: this.generateRecommendations(progress, sessions, content)
        };

        return report;
    }

    generateRecommendations(progress, sessions, content) {
        const recommendations = [];

        // Check streak
        if (progress.currentStreak < 7) {
            recommendations.push({
                type: 'streak',
                message: 'Try to maintain a daily recitation habit to build your streak',
                priority: 'medium'
            });
        }

        // Check progress rate
        if (progress.pagesThisMonth < 10) {
            recommendations.push({
                type: 'progress',
                message: 'Consider increasing your monthly page target for faster progress',
                priority: 'high'
            });
        }

        // Check grade consistency
        if (progress.averageGrade && ['C', 'C-', 'D+', 'D', 'D-', 'F'].includes(progress.averageGrade)) {
            recommendations.push({
                type: 'quality',
                message: 'Focus on improving recitation quality and tajweed',
                priority: 'high'
            });
        }

        // Check content backlog
        const assignedContent = content.filter(item => item.status === 'assigned');
        if (assignedContent.length > 3) {
            recommendations.push({
                type: 'content',
                message: 'You have several assigned pieces. Focus on completing them systematically',
                priority: 'medium'
            });
        }

        return recommendations;
    }

    // Export progress data
    exportProgressData(studentCode, format = 'json') {
        const report = this.generateProgressReport(studentCode);
        if (!report) return null;

        switch (format.toLowerCase()) {
            case 'json':
                return JSON.stringify(report, null, 2);
            case 'csv':
                return this.convertProgressToCSV(report);
            case 'pdf':
                return this.generateProgressPDF(report);
            default:
                return report;
        }
    }

    convertProgressToCSV(report) {
        // Convert progress report to CSV format
        const headers = ['Metric', 'Value'];
        const rows = [
            ['Total Pages', report.overview.totalPages],
            ['Pages This Month', report.overview.pagesThisMonth],
            ['Current Streak', report.overview.currentStreak],
            ['Average Grade', report.overview.averageGrade],
            ['Completion Rate', `${report.overview.completionRate}%`],
            ['Next Milestone', report.nextMilestone ? report.nextMilestone.name : 'N/A']
        ];

        const csvContent = [headers, ...rows]
            .map(row => row.map(cell => `"${cell}"`).join(','))
            .join('\n');

        return csvContent;
    }

    generateProgressPDF(report) {
        // This would generate a PDF report
        // For now, return a placeholder
        return 'PDF generation not implemented yet';
    }

    // Format date for display
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    }

    // Get progress trends
    getProgressTrends(studentCode, period = 'month') {
        if (!window.dataManager) return null;

        const sessions = window.dataManager.getStudentSessions(studentCode) || [];
        if (sessions.length === 0) return null;

        const now = new Date();
        const trends = {
            period,
            data: [],
            summary: {
                totalPages: 0,
                averageGrade: '-',
                totalSessions: 0
            }
        };

        // Filter sessions by period
        let filteredSessions = sessions;
        if (period === 'month') {
            const monthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
            filteredSessions = sessions.filter(session => new Date(session.date) >= monthAgo);
        } else if (period === 'week') {
            const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
            filteredSessions = sessions.filter(session => new Date(session.date) >= weekAgo);
        }

        // Calculate trends
        trends.data = filteredSessions.map(session => ({
            date: session.date,
            pages: session.pages || 0,
            grade: session.grade || '-'
        }));

        trends.summary.totalPages = trends.data.reduce((sum, item) => sum + item.pages, 0);
        trends.summary.totalSessions = trends.data.length;

        // Calculate average grade
        const grades = trends.data
            .filter(item => item.grade !== '-')
            .map(item => this.gradeToNumber(item.grade));

        if (grades.length > 0) {
            const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
            trends.summary.averageGrade = this.numberToGrade(average);
        }

        return trends;
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
}

// Initialize progress tracker when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.progressTracker = new ProgressTracker();
});
