// Data Manager for Quran Tracking System
class DataManager {
    constructor() {
        this.quranContent = this.initializeQuranContent();
        this.sessions = this.initializeSessions();
        this.studentProgress = this.initializeStudentProgress();
        this.init();
    }

    init() {
        this.loadDataFromStorage();
        this.bindEvents();
    }

    bindEvents() {
        // Listen for user login to load appropriate data
        window.addEventListener('userLoggedIn', (event) => {
            this.loadUserData(event.detail);
        });
    }

    initializeQuranContent() {
        // Sample Quran content structure - in real app, this would come from a database
        return {
            'Class 10A': {
                'ST001': [
                    {
                        id: 1,
                        date: '2024-01-15',
                        surah: 'Al-Baqarah',
                        ayahRange: '1-5',
                        pages: '1-2',
                        status: 'completed',
                        grade: 'A',
                        notes: 'Excellent recitation'
                    },
                    {
                        id: 2,
                        date: '2024-01-16',
                        surah: 'Al-Baqarah',
                        ayahRange: '6-10',
                        pages: '2-3',
                        status: 'assigned',
                        grade: null,
                        notes: 'Next session content'
                    }
                ],
                'ST002': [
                    {
                        id: 3,
                        date: '2024-01-15',
                        surah: 'Al-Baqarah',
                        ayahRange: '1-5',
                        pages: '1-2',
                        status: 'completed',
                        grade: 'A+',
                        notes: 'Perfect recitation'
                    },
                    {
                        id: 4,
                        date: '2024-01-16',
                        surah: 'Al-Baqarah',
                        ayahRange: '6-10',
                        pages: '2-3',
                        status: 'assigned',
                        grade: null,
                        notes: 'Next session content'
                    }
                ]
            },
            'Class 9B': {
                'ST003': [
                    {
                        id: 5,
                        date: '2024-01-15',
                        surah: 'Al-Fatiha',
                        ayahRange: '1-7',
                        pages: '1',
                        status: 'completed',
                        grade: 'B+',
                        notes: 'Good recitation, needs work on tajweed'
                    },
                    {
                        id: 6,
                        date: '2024-01-16',
                        surah: 'Al-Baqarah',
                        ayahRange: '1-5',
                        pages: '1-2',
                        status: 'assigned',
                        grade: null,
                        notes: 'Next session content'
                    }
                ]
            }
        };
    }

    initializeSessions() {
        // Sample session data
        return {
            'ST001': [
                {
                    id: 1,
                    date: '2024-01-15',
                    content: 'Al-Baqarah 1-5',
                    grade: 'A',
                    teacher: 'Ustadh Omar',
                    notes: 'Excellent recitation, good tajweed',
                    pages: 2
                }
            ],
            'ST002': [
                {
                    id: 2,
                    date: '2024-01-15',
                    content: 'Al-Baqarah 1-5',
                    grade: 'A+',
                    teacher: 'Ustadh Omar',
                    notes: 'Perfect recitation, excellent memory',
                    pages: 2
                }
            ],
            'ST003': [
                {
                    id: 3,
                    date: '2024-01-15',
                    content: 'Al-Fatiha 1-7',
                    grade: 'B+',
                    teacher: 'Ustadha Aisha',
                    notes: 'Good recitation, needs work on tajweed',
                    pages: 1
                }
            ]
        };
    }

    initializeStudentProgress() {
        // Sample progress data
        return {
            'ST001': {
                totalPages: 45,
                pagesThisMonth: 8,
                currentStreak: 7,
                averageGrade: 'A',
                completionRate: 75,
                lastSession: '2024-01-15'
            },
            'ST002': {
                totalPages: 38,
                pagesThisMonth: 6,
                currentStreak: 12,
                averageGrade: 'A+',
                completionRate: 82,
                lastSession: '2024-01-15'
            },
            'ST003': {
                totalPages: 52,
                pagesThisMonth: 10,
                currentStreak: 5,
                averageGrade: 'B+',
                completionRate: 68,
                lastSession: '2024-01-15'
            }
        };
    }

    loadDataFromStorage() {
        // Load data from localStorage if available
        try {
            const savedContent = localStorage.getItem('quranContent');
            const savedSessions = localStorage.getItem('quranSessions');
            const savedProgress = localStorage.getItem('quranProgress');

            if (savedContent) this.quranContent = JSON.parse(savedContent);
            if (savedSessions) this.sessions = JSON.parse(savedSessions);
            if (savedProgress) this.studentProgress = JSON.parse(savedProgress);
        } catch (error) {
            console.error('Error loading data from storage:', error);
        }
    }

    saveDataToStorage() {
        // Save data to localStorage
        try {
            localStorage.setItem('quranContent', JSON.stringify(this.quranContent));
            localStorage.setItem('quranSessions', JSON.stringify(this.sessions));
            localStorage.setItem('quranProgress', JSON.stringify(this.studentProgress));
        } catch (error) {
            console.error('Error saving data to storage:', error);
        }
    }

    loadUserData(user) {
        // Load data specific to the logged-in user
        if (user.type === 'student') {
            this.loadStudentData(user.code);
        } else if (user.type === 'teacher') {
            this.loadTeacherData(user);
        }
    }

    loadStudentData(studentCode) {
        // Load student-specific data
        const studentContent = this.getStudentContent(studentCode);
        const studentSessions = this.getStudentSessions(studentCode);
        const studentProgress = this.getStudentProgress(studentCode);

        // Store in window for other modules to access
        window.currentStudentData = {
            content: studentContent,
            sessions: studentSessions,
            progress: studentProgress
        };

        // Trigger event for dashboard update
        window.dispatchEvent(new CustomEvent('studentDataLoaded', {
            detail: { content: studentContent, sessions: studentSessions, progress: studentProgress }
        }));
    }

    loadTeacherData(teacher) {
        // Load teacher's students data
        const teacherStudents = this.getTeacherStudents(teacher);
        
        window.currentTeacherData = {
            students: teacherStudents
        };

        // Trigger event for teacher dashboard update
        window.dispatchEvent(new CustomEvent('teacherDataLoaded', {
            detail: { students: teacherStudents }
        }));
    }

    getStudentContent(studentCode) {
        // Get all content for a specific student
        const allContent = [];
        
        for (const className in this.quranContent) {
            if (this.quranContent[className][studentCode]) {
                allContent.push(...this.quranContent[className][studentCode]);
            }
        }
        
        return allContent.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    getStudentSessions(studentCode) {
        return this.sessions[studentCode] || [];
    }

    getStudentProgress(studentCode) {
        return this.studentProgress[studentCode] || {
            totalPages: 0,
            pagesThisMonth: 0,
            currentStreak: 0,
            averageGrade: '-',
            completionRate: 0,
            lastSession: null
        };
    }

    getTeacherStudents(teacher) {
        // Get all students for a specific teacher
        const students = [];
        
        for (const className in this.quranContent) {
            for (const studentCode in this.quranContent[className]) {
                const studentContent = this.quranContent[className][studentCode];
                if (studentContent.length > 0) {
                    const lastSession = studentContent.find(content => content.status === 'completed');
                    if (lastSession) {
                        students.push({
                            code: studentCode,
                            content: studentContent,
                            sessions: this.sessions[studentCode] || [],
                            progress: this.studentProgress[studentCode] || {}
                        });
                    }
                }
            }
        }
        
        return students;
    }

    getNextContent(studentCode) {
        // Get the next assigned content for a student
        const studentContent = this.getStudentContent(studentCode);
        return studentContent.find(content => content.status === 'assigned');
    }

    getCompletedContent(studentCode) {
        // Get all completed content for a student
        const studentContent = this.getStudentContent(studentCode);
        return studentContent.filter(content => content.status === 'completed');
    }

    addSession(studentCode, sessionData) {
        // Add a new session
        if (!this.sessions[studentCode]) {
            this.sessions[studentCode] = [];
        }
        
        const newSession = {
            id: Date.now(),
            date: new Date().toISOString().split('T')[0],
            ...sessionData
        };
        
        this.sessions[studentCode].push(newSession);
        
        // Update progress
        this.updateStudentProgress(studentCode, sessionData);
        
        // Save to storage
        this.saveDataToStorage();
        
        return newSession;
    }

    updateStudentProgress(studentCode, sessionData) {
        // Update student progress based on new session
        if (!this.studentProgress[studentCode]) {
            this.studentProgress[studentCode] = {
                totalPages: 0,
                pagesThisMonth: 0,
                currentStreak: 0,
                averageGrade: '-',
                completionRate: 0,
                lastSession: null
            };
        }
        
        const progress = this.studentProgress[studentCode];
        
        // Update total pages
        if (sessionData.pages) {
            progress.totalPages += sessionData.pages;
        }
        
        // Update last session
        progress.lastSession = new Date().toISOString().split('T')[0];
        
        // Update average grade
        const studentSessions = this.sessions[studentCode] || [];
        const grades = studentSessions
            .filter(session => session.grade)
            .map(session => this.gradeToNumber(session.grade));
        
        if (grades.length > 0) {
            const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
            progress.averageGrade = this.numberToGrade(average);
        }
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

    // Method to get sample data for testing
    getSampleData() {
        return {
            content: this.quranContent,
            sessions: this.sessions,
            progress: this.studentProgress
        };
    }
}

// Initialize data manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.dataManager = new DataManager();
});
