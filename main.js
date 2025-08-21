// Main Application for Quran Tracking System
class QuranTrackingApp {
    constructor() {
        this.modules = {};
        this.init();
    }

    init() {
        this.initializeModules();
        this.setupGlobalEventHandlers();
        this.setupErrorHandling();
        console.log('Quran Tracking System initialized successfully');
    }

    initializeModules() {
        // Initialize all modules in the correct order
        try {
            // Core modules
            if (window.authManager) {
                this.modules.auth = window.authManager;
                console.log('✓ Authentication module loaded');
            }

            if (window.dataManager) {
                this.modules.data = window.dataManager;
                console.log('✓ Data management module loaded');
            }

            if (window.dashboardManager) {
                this.modules.dashboard = window.dashboardManager;
                console.log('✓ Dashboard module loaded');
            }

            if (window.sessionManager) {
                this.modules.session = window.sessionManager;
                console.log('✓ Session management module loaded');
            }

            if (window.progressTracker) {
                this.modules.progress = window.progressTracker;
                console.log('✓ Progress tracking module loaded');
            }

            if (window.teacherManager) {
                this.modules.teacher = window.teacherManager;
                console.log('✓ Teacher management module loaded');
            }

        } catch (error) {
            console.error('Error initializing modules:', error);
        }
    }

    setupGlobalEventHandlers() {
        // Handle application-wide events
        window.addEventListener('userLoggedIn', (event) => {
            this.handleUserLogin(event.detail);
        });

        window.addEventListener('userLoggedOut', () => {
            this.handleUserLogout();
        });

        window.addEventListener('sessionCompleted', (event) => {
            this.handleSessionCompletion(event.detail);
        });

        // Handle navigation events
        window.addEventListener('popstate', (event) => {
            this.handleNavigation(event);
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            this.handleWindowResize();
        });

        // Handle beforeunload
        window.addEventListener('beforeunload', (event) => {
            this.handleBeforeUnload(event);
        });
    }

    setupErrorHandling() {
        // Global error handler
        window.addEventListener('error', (event) => {
            this.handleGlobalError(event);
        });

        // Unhandled promise rejection handler
        window.addEventListener('unhandledrejection', (event) => {
            this.handleUnhandledRejection(event);
        });
    }

    handleUserLogin(user) {
        console.log('User logged in:', user.name, 'Type:', user.type);
        
        // Update application state
        this.updateAppState('loggedIn', user);
        
        // Initialize user-specific features
        this.initializeUserFeatures(user);
        
        // Show welcome message
        this.showWelcomeMessage(user);
    }

    handleUserLogout() {
        console.log('User logged out');
        
        // Clear application state
        this.updateAppState('loggedOut');
        
        // Clean up user-specific data
        this.cleanupUserData();
        
        // Show logout message
        this.showLogoutMessage();
    }

    handleSessionCompletion(session) {
        console.log('Session completed:', session);
        
        // Update progress tracking
        if (this.modules.progress) {
            this.modules.progress.handleSessionCompletion(session);
        }
        
        // Update dashboard
        if (this.modules.dashboard) {
            this.modules.dashboard.loadDashboardContent();
        }
        
        // Show completion notification
        this.showSessionCompletionNotification(session);
    }

    handleNavigation(event) {
        // Handle browser navigation
        console.log('Navigation event:', event);
    }

    handleWindowResize() {
        // Handle window resize events
        this.adjustLayoutForScreenSize();
    }

    handleBeforeUnload(event) {
        // Handle page unload
        if (this.hasUnsavedChanges()) {
            event.preventDefault();
            event.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
        }
    }

    handleGlobalError(error) {
        console.error('Global error:', error);
        this.showErrorMessage('An unexpected error occurred. Please try again.');
    }

    handleUnhandledRejection(event) {
        console.error('Unhandled promise rejection:', event.reason);
        this.showErrorMessage('An operation failed. Please try again.');
    }

    updateAppState(state, user = null) {
        // Update application state based on login/logout
        if (state === 'loggedIn' && user) {
            document.body.classList.add('user-logged-in');
            document.body.classList.add(`user-type-${user.type}`);
            document.body.setAttribute('data-user-code', user.code);
        } else if (state === 'loggedOut') {
            document.body.classList.remove('user-logged-in');
            document.body.classList.remove('user-type-student', 'user-type-teacher');
            document.body.removeAttribute('data-user-code');
        }
    }

    initializeUserFeatures(user) {
        // Initialize features based on user type
        if (user.type === 'student') {
            this.initializeStudentFeatures(user);
        } else if (user.type === 'teacher') {
            this.initializeTeacherFeatures(user);
        }
    }

    initializeStudentFeatures(student) {
        console.log('Initializing student features for:', student.name);
        
        // Set up student-specific event listeners
        this.setupStudentEventListeners();
        
        // Initialize student progress tracking
        if (this.modules.progress) {
            this.modules.progress.initializeStudentProgressTracker(student);
        }
    }

    initializeTeacherFeatures(teacher) {
        console.log('Initializing teacher features for:', teacher.name);
        
        // Set up teacher-specific event listeners
        this.setupTeacherEventListeners();
        
        // Initialize teacher management features
        if (this.modules.teacher) {
            this.modules.teacher.initializeTeacherManager(teacher);
        }
    }

    setupStudentEventListeners() {
        // Add student-specific event listeners
        const nextContentBtn = document.querySelector('.action-btn.edit-btn');
        if (nextContentBtn) {
            nextContentBtn.addEventListener('click', () => {
                this.handleMarkContentComplete();
            });
        }
    }

    setupTeacherEventListeners() {
        // Add teacher-specific event listeners
        // These are mostly handled by the teacher manager
    }

    handleMarkContentComplete() {
        const currentUser = window.authManager?.getCurrentUser();
        if (!currentUser || currentUser.type !== 'student') return;

        // Mark current content as complete
        const nextContent = window.dataManager?.getNextContent(currentUser.code);
        if (nextContent) {
            // Update content status
            nextContent.status = 'completed';
            
            // Refresh dashboard
            if (this.modules.dashboard) {
                this.modules.dashboard.loadDashboardContent();
            }
            
            this.showSuccessMessage('Content marked as complete!');
        }
    }

    showWelcomeMessage(user) {
        const timeOfDay = this.getTimeOfDay();
        const message = `Welcome back, ${user.name}! Good ${timeOfDay}.`;
        
        // Show welcome message (can be enhanced with better UI)
        console.log(message);
        
        // Update welcome message in dashboard
        const welcomeMessage = document.getElementById('welcomeMessage');
        if (welcomeMessage) {
            welcomeMessage.textContent = `Good ${timeOfDay}! Ready for today's recitation?`;
        }
    }

    showLogoutMessage() {
        const message = 'You have been logged out successfully.';
        console.log(message);
        
        // Clear any user-specific data from UI
        this.clearUserDataFromUI();
    }

    showSessionCompletionNotification(session) {
        const message = `Session completed successfully! Grade: ${session.grade}`;
        console.log(message);
        
        // Show notification (can be enhanced with better UI)
        this.showSuccessMessage(message);
    }

    showSuccessMessage(message) {
        // Show success message (can be enhanced with better UI)
        console.log('Success:', message);
        
        // Simple alert for now
        alert(message);
    }

    showErrorMessage(message) {
        // Show error message (can be enhanced with better UI)
        console.error('Error:', message);
        
        // Simple alert for now
        alert('Error: ' + message);
    }

    getTimeOfDay() {
        const hour = new Date().getHours();
        if (hour < 12) return 'morning';
        if (hour < 17) return 'afternoon';
        return 'evening';
    }

    adjustLayoutForScreenSize() {
        const width = window.innerWidth;
        
        if (width < 768) {
            document.body.classList.add('mobile-layout');
        } else {
            document.body.classList.remove('mobile-layout');
        }
        
        if (width < 480) {
            document.body.classList.add('small-mobile-layout');
        } else {
            document.body.classList.remove('small-mobile-layout');
        }
    }

    hasUnsavedChanges() {
        // Check if there are unsaved changes
        // This would check various forms and data states
        return false; // For now, always return false
    }

    cleanupUserData() {
        // Clean up user-specific data when logging out
        window.currentStudentData = null;
        window.currentTeacherData = null;
        
        // Clear any cached data
        if (this.modules.data) {
            // Clear any temporary data
        }
    }

    clearUserDataFromUI() {
        // Clear user data from UI elements
        const userName = document.getElementById('userName');
        const userClass = document.getElementById('userClass');
        const teacherName = document.getElementById('teacherName');
        
        if (userName) userName.textContent = 'User Name';
        if (userClass) userClass.textContent = 'Class';
        if (teacherName) teacherName.textContent = 'Teacher';
    }

    // Utility methods
    getModule(moduleName) {
        return this.modules[moduleName] || null;
    }

    isModuleLoaded(moduleName) {
        return !!this.modules[moduleName];
    }

    getCurrentUser() {
        return window.authManager?.getCurrentUser() || null;
    }

    isUserLoggedIn() {
        return !!this.getCurrentUser();
    }

    isUserTeacher() {
        const user = this.getCurrentUser();
        return user ? user.type === 'teacher' : false;
    }

    isUserStudent() {
        const user = this.getCurrentUser();
        return user ? user.type === 'student' : false;
    }

    // Debug methods
    getAppStatus() {
        return {
            modules: Object.keys(this.modules),
            user: this.getCurrentUser(),
            isLoggedIn: this.isUserLoggedIn(),
            isTeacher: this.isUserTeacher(),
            isStudent: this.isUserStudent()
        };
    }

    debugModules() {
        console.log('Loaded modules:', this.modules);
        console.log('App status:', this.getAppStatus());
    }
}

// Initialize the main application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for all modules to initialize
    setTimeout(() => {
        window.quranApp = new QuranTrackingApp();
        
        // Debug information
        if (window.quranApp) {
            console.log('Quran Tracking System is ready!');
            window.quranApp.debugModules();
        }
    }, 100);
});

// Global utility functions
window.QuranUtils = {
    formatDate: (dateString) => {
        if (!dateString) return 'Never';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    },

    formatTime: (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
    },

    getGradeClass: (grade) => {
        if (!grade || grade === '-') return 'no-grade';
        if (grade === 'A+' || grade === 'A') return 'excellent';
        if (grade === 'B+' || grade === 'B') return 'good';
        return 'fair';
    },

    validateUserCode: (code) => {
        // Validate user code format
        return /^[A-Z]{2}\d{3}$/.test(code);
    },

    showNotification: (message, type = 'info') => {
        // Show notification (can be enhanced with better UI)
        console.log(`${type.toUpperCase()}: ${message}`);
        
        // Simple alert for now
        alert(message);
    }
};
