// MRIS Quran Program - Main Script

// Sample data for demonstration with new ID system
const sampleData = {
    admin: {
        'ADMINYNG9': { name: 'System Administrator', role: 'admin' }
    },
    students: {},
    teachers: {},
    content: {}
};

// Global variables
let currentUser = null;
let currentUserType = null;
let currentTeacher = null; // Track the original teacher when editing students
let editingStudent = null; // Track which student teacher is editing

// DOM elements
const loginSection = document.getElementById('loginSection');
const dashboardSection = document.getElementById('dashboardSection');
const loginForm = document.getElementById('loginForm');
const userCodeInput = document.getElementById('userCode');
const userNameSpan = document.getElementById('userName');
const userClassSpan = document.getElementById('userClass');
const userTeacherSpan = document.getElementById('userTeacher');
const logoutBtn = document.getElementById('logoutBtn');

// Content elements
const hifzContent = document.getElementById('hifzContent');
const revisionContent = document.getElementById('revisionContent');
const sessionsList = document.getElementById('sessionsList');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('MRIS Quran Program initialized');
    
    // Get button elements after DOM is loaded
    window.addHifzBtn = document.getElementById('addHifzBtn');
    window.addRevisionBtn = document.getElementById('addRevisionBtn');
    window.addSessionBtn = document.getElementById('addSessionBtn');
    
    console.log('Add buttons found:', { addHifzBtn: window.addHifzBtn, addRevisionBtn: window.addRevisionBtn, addSessionBtn: window.addSessionBtn });
    
    // Load data first, then check for existing session
    loadDataFromStorage().then(() => {
        console.log('Data loaded, now checking for existing session');
        checkForExistingSession();
    }).catch(error => {
        console.error('Error loading data:', error);
        // Still check for session even if data loading fails
        checkForExistingSession();
    });
    
    setupEventListeners(window.addHifzBtn, window.addRevisionBtn, window.addSessionBtn);
    
    // Set up periodic refresh for students to see teacher updates
    setInterval(refreshStudentData, 5000); // Refresh every 5 seconds
});

// Setup event listeners
function setupEventListeners(addHifzBtn, addRevisionBtn, addSessionBtn) {
    // Login form
    loginForm.addEventListener('submit', handleLogin);
    
    // Logout button
    logoutBtn.addEventListener('click', handleLogout);
    
    // Add content buttons
    if (addHifzBtn) {
        addHifzBtn.addEventListener('click', () => {
            console.log('Add Hifz button clicked!');
            console.log('Modal element:', document.getElementById('addHifzModal'));
            showModal('addHifzModal');
        });
        console.log('Add Hifz button event listener added');
    } else {
        console.error('Add Hifz button not found!');
    }
    
    if (addRevisionBtn) {
        addRevisionBtn.addEventListener('click', () => {
            console.log('Add Revision button clicked!');
            showModal('addRevisionModal');
        });
        console.log('Add Revision button event listener added');
    } else {
        console.error('Add Revision button not found!');
    }
    
    if (addSessionBtn) {
        addSessionBtn.addEventListener('click', () => {
            console.log('Add Session button clicked!');
            showModal('addSessionModal');
        });
        console.log('Add Session button event listener added');
    } else {
        console.error('Add Session button not found!');
    }
    
    // Modal close buttons
    document.querySelectorAll('.modal-close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal.id);
        });
    });
    
    // Form submissions
    document.getElementById('addHifzForm').addEventListener('submit', handleAddHifz);
    document.getElementById('addRevisionForm').addEventListener('submit', handleAddRevision);
    document.getElementById('addSessionForm').addEventListener('submit', handleAddSession);
    
    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target.id);
        }
    });
    
    // Admin account type change handler
    const accountTypeSelect = document.getElementById('accountType');
    if (accountTypeSelect) {
        accountTypeSelect.addEventListener('change', function() {
            const teacherNameGroup = document.getElementById('teacherNameGroup');
            const teacherSelect = document.getElementById('teacherName');
            
            if (this.value === 'student') {
                teacherNameGroup.style.display = 'block';
                // Populate teacher dropdown
                teacherSelect.innerHTML = '<option value="">Leave unassigned</option>';
                Object.keys(sampleData.teachers).forEach(teacherId => {
                    const teacher = sampleData.teachers[teacherId];
                    const option = document.createElement('option');
                    option.value = teacher.name;
                    option.textContent = `${teacher.name} (${teacherId})`;
                    teacherSelect.appendChild(option);
                });
            } else {
                teacherNameGroup.style.display = 'none';
            }
        });
    }
}

// Handle login
function handleLogin(event) {
    event.preventDefault();
    
    const userCode = userCodeInput.value.trim().toUpperCase();
    
    if (!userCode) {
        showNotification('Please enter a user code', 'error');
        return;
    }
    
    // Check if user exists
    if (sampleData.admin[userCode]) {
        currentUser = userCode;
        currentUserType = 'admin';
        loginSuccess(sampleData.admin[userCode]);
    } else if (sampleData.students[userCode]) {
        currentUser = userCode;
        currentUserType = 'student';
        loginSuccess(sampleData.students[userCode]);
    } else if (sampleData.teachers[userCode]) {
        currentUser = userCode;
        currentUserType = 'teacher';
        loginSuccess(sampleData.teachers[userCode]);
    } else {
        showNotification('Invalid user code. Please try again.', 'error');
        return;
    }
}

// Handle successful login
function loginSuccess(user) {
    // Hide login, show dashboard
    loginSection.style.display = 'none';
    dashboardSection.style.display = 'block';
    
    // Update header
    if (currentUserType === 'admin') {
        // Admin login
        userNameSpan.textContent = user.name;
        userClassSpan.textContent = 'Administrator';
        userTeacherSpan.textContent = '';
        
        // Show admin dashboard
        showAdminDashboard();
    } else if (currentUserType === 'student') {
        userNameSpan.textContent = user.name;
        userClassSpan.textContent = user.class;
        userTeacherSpan.textContent = user.teacher;
        
        // Load student content
        loadStudentContent();
    } else {
        // Teacher login
        currentTeacher = currentUser; // Store the teacher's ID
        userNameSpan.textContent = user.name;
        userClassSpan.textContent = 'Teacher';
        userTeacherSpan.textContent = '';
        
        // Add teacher-mode class to body
        document.body.classList.add('teacher-mode');
        
        // Show student selection for teachers
        showStudentSelection();
        
        // Also load content to show teacher controls
        loadStudentContent();
    }
    
    // Store in localStorage
    localStorage.setItem('quranUser', currentUser);
    localStorage.setItem('quranUserType', currentUserType);
    
    showNotification(`Welcome back, ${user.name}!`, 'success');
}

// Load student content
function loadStudentContent() {
    // Get the current student ID using the utility function
    const targetUser = getCurrentStudentId();
    
    // If not a student or teacher, return
    if (currentUserType !== 'student' && currentUserType !== 'teacher') return;
    
    console.log('Loading content for targetUser:', targetUser);
    console.log('Current user type:', currentUserType);
    console.log('Editing student:', editingStudent);
    
    // For teachers without a selected student, show empty state but keep controls visible
    if (currentUserType === 'teacher' && !targetUser) {
        console.log('Teacher logged in but no student selected - showing empty state');
        
        // Clear all containers
        hifzContent.innerHTML = '<p style="text-align: center; color: #666; padding: 20px;">Select a student to edit their content</p>';
        revisionContent.innerHTML = '<p style="text-align: center; color: #666; padding: 20px;">Select a student to edit their content</p>';
        sessionsList.innerHTML = '<p style="text-align: center; color: #666; padding: 20px;">Select a student to edit their content</p>';
        
        // Ensure teacher controls are visible
        showTeacherControls();
        return;
    }
    
    // Ensure the target user has content initialized
    if (!sampleData.content[targetUser]) {
        sampleData.content[targetUser] = {
            hifz: [],
            revision: [],
            sessions: []
        };
    }
    
    const userData = sampleData.content[targetUser];
    console.log('User data loaded:', userData);
    
    // Clear all containers first to prevent mixing
    hifzContent.innerHTML = '';
    revisionContent.innerHTML = '';
    sessionsList.innerHTML = '';
    
    // Load Hifz content
    loadContentItems(hifzContent, userData.hifz, 'hifz');
    
    // Load Revision content
    loadContentItems(revisionContent, userData.revision, 'revision');
    
    // Load Past Sessions
    loadSessionsList(userData.sessions);
    
    // Ensure teacher controls are visible if teacher is editing
    if (currentUserType === 'teacher' && editingStudent) {
        console.log('Teacher editing student - ensuring controls are visible');
        showTeacherControls();
    }
}

// Load content items (assignment-style)
function loadContentItems(container, items, type) {
    // Clear container first
    container.innerHTML = '';
    
    console.log(`Loading ${type} items for container:`, container.id);
    console.log(`Items to load:`, items);
    
    if (!items || items.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666; padding: 20px;">No content assigned</p>';
        return;
    }
    
    items.forEach((item, index) => {
        const contentItem = document.createElement('div');
        contentItem.className = 'content-item';
        
        // Only show delete button for teachers
        if (currentUserType === 'teacher') {
            contentItem.innerHTML = `
                <h4>${item.surah} ${item.ayahRange}</h4>
                <button class="delete-btn teacher-delete-btn" onclick="deleteContentItem('${type}', ${index})" style="opacity: 1 !important;">−</button>
            `;
            
            // Add double-click event for deletion (teachers only)
            contentItem.addEventListener('dblclick', () => {
                showDeleteButton(contentItem);
            });
        } else {
            contentItem.innerHTML = `
                <h4>${item.surah} ${item.ayahRange}</h4>
            `;
        }
        
        container.appendChild(contentItem);
    });
    
    console.log(`Loaded ${items.length} ${type} items`);
}

// Load sessions list (assignment-style)
function loadSessionsList(sessions) {
    // Clear container first
    sessionsList.innerHTML = '';
    
    console.log('Loading sessions list:', sessions);
    
    if (!sessions || sessions.length === 0) {
        sessionsList.innerHTML = '<p style="text-align: center; color: #666; padding: 20px;">No sessions recorded</p>';
        return;
    }
    
    sessions.forEach((session, index) => {
        const sessionItem = document.createElement('div');
        sessionItem.className = 'session-item';
        
        const gradeClass = getGradeClass(session.grade);
        
        // Only show delete button for teachers
        if (currentUserType === 'teacher') {
            sessionItem.innerHTML = `
                <div class="session-date">${formatDate(session.date)}</div>
                <div class="session-hifz">${session.hifz}</div>
                <div class="session-revision">${session.revision}</div>
                <div class="session-grade ${gradeClass}">${session.grade}</div>
                <button class="delete-btn teacher-delete-btn" onclick="deleteSession(${index})" style="opacity: 1 !important;">−</button>
            `;
            
            // Add double-click event for deletion (teachers only)
            sessionItem.addEventListener('dblclick', () => {
                showDeleteButton(sessionItem);
            });
        } else {
            sessionItem.innerHTML = `
                <div class="session-date">${formatDate(session.date)}</div>
                <div class="session-hifz">${session.hifz}</div>
                <div class="session-revision">${session.revision}</div>
                <div class="session-grade ${gradeClass}">${session.grade}</div>
            `;
        }
        
        sessionsList.appendChild(sessionItem);
    });
    
    console.log(`Loaded ${sessions.length} sessions`);
}

// Show delete button on double-click
function showDeleteButton(item) {
    const deleteBtn = item.querySelector('.delete-btn');
    if (deleteBtn) {
        deleteBtn.style.opacity = '1';
        setTimeout(() => {
            deleteBtn.style.opacity = '0';
        }, 3000);
    }
}

// Delete content item
function deleteContentItem(type, index) {
    if (confirm(`Are you sure you want to delete this ${type} content?`)) {
        // Get the current student ID using the utility function
        const targetUser = getCurrentStudentId();
        
        if (!targetUser) {
            showNotification('No student selected', 'error');
            return;
        }
        
        sampleData.content[targetUser][type].splice(index, 1);
        loadStudentContent();
        
        // Update localStorage to persist changes
        saveAllDataToStorage();
        
        showNotification(`${type.charAt(0).toUpperCase() + type.slice(1)} content deleted successfully!`, 'success');
    }
}

// Delete session
function deleteSession(index) {
    if (confirm('Are you sure you want to delete this session?')) {
        // Get the current student ID using the utility function
        const targetUser = getCurrentStudentId();
        
        if (!targetUser) {
            showNotification('No student selected', 'error');
            return;
        }
        
        sampleData.content[targetUser].sessions.splice(index, 1);
        loadStudentContent();
        
        // Update localStorage to persist changes
        saveAllDataToStorage();
        
        showNotification('Session deleted successfully!', 'success');
    }
}

// Show student selection for teachers
function showStudentSelection() {
    const teacher = sampleData.teachers[currentUser];
    const students = teacher.students || [];
    
    // Show the student selection modal
    const modal = document.getElementById('studentSelectionModal');
    const studentsList = document.getElementById('studentsList');
    
    studentsList.innerHTML = '';
    
    if (students.length === 0) {
        // Teacher has no students - show message and option to skip to dashboard
        studentsList.innerHTML = `
            <div style="text-align: center; padding: 40px 20px;">
                <h3 style="color: var(--primary-color); margin-bottom: 20px;">No Students Assigned</h3>
                <p style="color: #666; margin-bottom: 30px;">You don't have any students assigned to you yet.</p>
                <button class="btn btn-secondary" onclick="skipToDashboard()">Skip to Dashboard</button>
                <p style="font-size: 12px; color: #999; margin-top: 20px;">You can still view the dashboard and add buttons will be visible</p>
            </div>
        `;
    } else {
        students.forEach(studentCode => {
            const student = sampleData.students[studentCode];
            const studentItem = document.createElement('div');
            studentItem.className = 'student-item';
            studentItem.innerHTML = `
                <div class="student-info">
                    <div class="student-name">${student.name}</div>
                    <div class="student-class">${student.class}</div>
                </div>
            `;
            
            studentItem.addEventListener('click', () => {
                selectStudent(studentCode);
            });
            
            studentsList.appendChild(studentItem);
        });
    }
    
    modal.style.display = 'block';
}

// Select a student (for teachers)
function selectStudent(studentCode) {
    // Store the original teacher ID
    const originalTeacherId = currentUser;
    
    // Set editing state
    editingStudent = studentCode; // Track which student we're editing
    
    // Close student selection modal
    closeModal('studentSelectionModal');
    
    // Update header to show editing mode
    const student = sampleData.students[studentCode];
    
    // Show "Editing Student: [Name]" in the center
    userNameSpan.textContent = `Editing Student: ${student.name}`;
    userClassSpan.textContent = student.class;
    userTeacherSpan.textContent = student.teacher;
    
    // Remove dashboard mode styling if it exists
    userNameSpan.classList.remove('dashboard-mode');
    
    // Add editing mode styling
    userNameSpan.classList.add('editing-mode');
    
    // Ensure teacher-mode class is on body
    document.body.classList.add('teacher-mode');
    
    // Load student content
    loadStudentContent();
    
    // Show add buttons for teachers - FORCE them to be visible
    showTeacherControls();
    
    // Force display of add buttons
    addHifzBtn.style.display = 'block';
    addRevisionBtn.style.display = 'block';
    addSessionBtn.style.display = 'block';
}

// Show teacher controls
function showTeacherControls() {
    console.log('showTeacherControls called - currentUserType:', currentUserType);
    console.log('editingStudent:', editingStudent);
    
    // Force display of add buttons for teachers
    addHifzBtn.style.display = 'block !important';
    addRevisionBtn.style.display = 'block !important';
    addSessionBtn.style.display = 'block !important';
    
    // Also set the style directly to ensure it works
    addHifzBtn.style.setProperty('display', 'block', 'important');
    addRevisionBtn.style.setProperty('display', 'block', 'important');
    addSessionBtn.style.setProperty('display', 'block', 'important');
    
    console.log('Add buttons display set to block with !important');
    console.log('addHifzBtn display:', addHifzBtn.style.display);
    console.log('addRevisionBtn display:', addRevisionBtn.style.display);
    console.log('addSessionBtn display:', addSessionBtn.style.display);
}

// Hide teacher controls
function hideTeacherControls() {
    addHifzBtn.style.display = 'none';
    addRevisionBtn.style.display = 'none';
    addSessionBtn.style.display = 'none';
}



// Skip to dashboard for teachers
function skipToDashboard() {
    closeModal('studentSelectionModal');
    
    // Clear editing state
    editingStudent = null;
    
    // Show empty dashboard with add buttons visible
    showTeacherControls();
    
    // Ensure teacher-mode class is on body
    document.body.classList.add('teacher-mode');
    
    // Clear any student content display and show helpful messages
    hifzContent.innerHTML = `
        <div style="text-align: center; padding: 40px 20px;">
            <h4 style="color: var(--primary-color); margin-bottom: 15px;">No Student Selected</h4>
            <p style="color: #666; margin-bottom: 20px;">Select a student to manage their content, or use the + button to add content.</p>
            <button class="btn btn-secondary" onclick="showStudentSelection()">Select Student</button>
        </div>
    `;
    revisionContent.innerHTML = `
        <div style="text-align: center; padding: 40px 20px;">
            <h4 style="color: var(--primary-color); margin-bottom: 15px;">No Student Selected</h4>
            <p style="color: #666; margin-bottom: 20px;">Select a student to manage their content, or use the + button to add content.</p>
            <button class="btn btn-secondary" onclick="showStudentSelection()">Select Student</button>
        </div>
    `;
    sessionsList.innerHTML = `
        <div style="text-align: center; padding: 40px 20px;">
            <h4 style="color: var(--primary-color); margin-bottom: 15px;">No Student Selected</h4>
            <p style="color: #666; margin-bottom: 20px;">Select a student to manage their content, or use the + button to add content.</p>
            <button class="btn btn-secondary" onclick="showStudentSelection()">Select Student</button>
        </div>
    `;
    
    // Update header to show teacher mode
    userNameSpan.textContent = sampleData.teachers[currentUser].name;
    userClassSpan.textContent = 'Teacher';
    userTeacherSpan.textContent = 'Dashboard Mode';
    
    // Add dashboard mode styling
    userTeacherSpan.classList.add('dashboard-mode');
    
    showNotification('Dashboard mode activated. Add buttons are now visible.', 'info');
}

// Handle add hifz
function handleAddHifz(event) {
    event.preventDefault();
    
    const surah = document.getElementById('hifzSurah').value.trim();
    const ayahRange = document.getElementById('hifzAyahRange').value.trim();
    
    if (!surah || !ayahRange) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Get the current student ID using the utility function
    const targetUser = getCurrentStudentId();
    
    if (!targetUser) {
        showNotification('No student selected', 'error');
        return;
    }
    
    // Add to data
    if (!sampleData.content[targetUser].hifz) {
        sampleData.content[targetUser].hifz = [];
    }
    
    sampleData.content[targetUser].hifz.push({
        surah: surah,
        ayahRange: ayahRange
    });
    
    // Reload content
    loadStudentContent();
    
    // Update localStorage to persist changes
    saveAllDataToStorage();
    
    // Close modal and reset form
    closeModal('addHifzModal');
    document.getElementById('addHifzForm').reset();
    
    showNotification('Hifz content added successfully!', 'success');
}

// Handle add revision
function handleAddRevision(event) {
    event.preventDefault();
    
    const surah = document.getElementById('revisionSurah').value.trim();
    const ayahRange = document.getElementById('revisionAyahRange').value.trim();
    
    if (!surah || !ayahRange) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Get the current student ID using the utility function
    const targetUser = getCurrentStudentId();
    
    if (!targetUser) {
        showNotification('No student selected', 'error');
        return;
    }
    
    // Add to data
    if (!sampleData.content[targetUser].revision) {
        sampleData.content[targetUser].revision = [];
    }
    
    sampleData.content[targetUser].revision.push({
        surah: surah,
        ayahRange: ayahRange
    });
    
    // Reload content
    loadStudentContent();
    
    // Update localStorage to persist changes
    saveAllDataToStorage();
    
    // Close modal and reset form
    closeModal('addRevisionModal');
    document.getElementById('addRevisionForm').reset();
    
    showNotification('Revision content added successfully!', 'success');
}

// Handle add session
function handleAddSession(event) {
    event.preventDefault();
    
    const date = document.getElementById('sessionDate').value;
    const hifz = document.getElementById('sessionHifz').value.trim();
    const revision = document.getElementById('sessionRevision').value.trim();
    const grade = document.getElementById('sessionGrade').value;
    
    if (!date || !hifz || !revision || !grade) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Get the current student ID using the utility function
    const targetUser = getCurrentStudentId();
    
    if (!targetUser) {
        showNotification('No student selected', 'error');
        return;
    }
    
    // Add to data
    if (!sampleData.content[targetUser].sessions) {
        sampleData.content[targetUser].sessions = [];
    }
    
    sampleData.content[targetUser].sessions.push({
        date: date,
        hifz: hifz,
        revision: revision,
        grade: grade
    });
    
    // Reload content
    loadStudentContent();
    
    // Update localStorage to persist changes
    saveAllDataToStorage();
    
    // Close modal and reset form
    closeModal('addSessionModal');
    document.getElementById('addSessionForm').reset();
    
    showNotification('Session added successfully!', 'success');
}

// Handle logout
function handleLogout() {
    // Show custom confirmation modal
    showModal('logoutConfirmModal');
}

// Confirm logout after user confirms
function confirmLogout() {
    currentUser = null;
    currentUserType = null;
    currentTeacher = null;
    editingStudent = null;
    
    // Clear localStorage
    localStorage.removeItem('quranUser');
    localStorage.removeItem('quranUserType');
    
    // Reset forms
    document.getElementById('addHifzForm').reset();
    document.getElementById('addRevisionForm').reset();
    document.getElementById('addSessionForm').reset();
    
    // Hide add buttons using global references
    if (window.addHifzBtn) window.addHifzBtn.style.display = 'none';
    if (window.addRevisionBtn) window.addRevisionBtn.style.display = 'none';
    if (window.addSessionBtn) window.addSessionBtn.style.display = 'none';
    
    // Show login, hide dashboard
    loginSection.style.display = 'flex';
    dashboardSection.style.display = 'none';
    
    // Reset header
    userNameSpan.textContent = 'Student Name';
    userClassSpan.textContent = 'Class';
    userTeacherSpan.textContent = 'Teacher';
    
    // Remove editing mode styling
    userNameSpan.classList.remove('editing-mode');
    
    // Remove dashboard mode styling
    userNameSpan.classList.remove('dashboard-mode');
    
    // Remove teacher-mode class
    document.body.classList.remove('teacher-mode');
    
    // Restore original main content if admin was logged in
    if (window.originalMainContent) {
        const mainContent = document.querySelector('.main-content');
        mainContent.innerHTML = window.originalMainContent;
        window.originalMainContent = null;
    }
    
    // Close the confirmation modal
    closeModal('logoutConfirmModal');
    
    showNotification('Logged out successfully', 'success');
}

// Check for existing session
function checkForExistingSession() {
    const savedUser = localStorage.getItem('quranUser');
    const savedUserType = localStorage.getItem('quranUserType');
    
    console.log('Checking for existing session:', { savedUser, savedUserType });
    
    if (savedUser && savedUserType) {
        currentUser = savedUser;
        currentUserType = savedUserType;
        
        if (savedUserType === 'admin') {
            const admin = sampleData.admin[savedUser];
            if (admin) {
                console.log('Restoring admin session for:', admin.name);
                loginSuccess(admin);
            } else {
                console.log('Admin not found, clearing session');
                localStorage.removeItem('quranUser');
                localStorage.removeItem('quranUserType');
            }
        } else if (savedUserType === 'student') {
            const student = sampleData.students[savedUser];
            if (student) {
                console.log('Restoring student session for:', student.name);
                loginSuccess(student);
            } else {
                console.log('Student not found, clearing session');
                localStorage.removeItem('quranUser');
                localStorage.removeItem('quranUserType');
            }
        } else if (savedUserType === 'teacher') {
            const teacher = sampleData.teachers[savedUser];
            if (teacher) {
                console.log('Restoring teacher session for:', teacher.name);
                loginSuccess(teacher);
            } else {
                console.log('Teacher not found, clearing session');
                localStorage.removeItem('quranUser');
                localStorage.removeItem('quranUserType');
            }
        }
    } else {
        console.log('No saved session found');
    }
}

// Modal functions
function showModal(modalId) {
    console.log('showModal called with:', modalId);
    const modal = document.getElementById(modalId);
    console.log('Modal element found:', modal);
    if (modal) {
        modal.style.display = 'block';
        console.log('Modal display set to block');
        console.log('Modal current display:', modal.style.display);
    } else {
        console.error('Modal not found:', modalId);
    }
}

// Show detailed information modal
function showDetailedModal(title, content) {
    const modalId = 'detailedInfoModal';
    
    // Remove existing modal if it exists
    const existingModal = document.getElementById(modalId);
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal HTML
    const modalHTML = `
        <div id="${modalId}" class="modal">
            <div class="modal-content detailed-modal">
                <span class="modal-close" onclick="closeModal('${modalId}')">&times;</span>
                <h3>${title}</h3>
                <div class="detailed-content">
                    ${content}
                </div>
                <div class="modal-actions">
                    <button type="button" class="btn btn-primary" onclick="closeModal('${modalId}')">Close</button>
                </div>
            </div>
        </div>
    `;
    
    // Add to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Show modal
    showModal(modalId);
}

// Show confirmation modal
function showConfirmationModal(title, content, onConfirm) {
    const modalId = 'confirmationModal';
    
    // Remove existing modal if it exists
    const existingModal = document.getElementById(modalId);
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal HTML
    const modalHTML = `
        <div id="${modalId}" class="modal">
            <div class="modal-content confirmation-modal">
                <span class="modal-close" onclick="closeModal('${modalId}')">&times;</span>
                <h3>${title}</h3>
                <div class="confirmation-content">
                    ${content}
                </div>
                <div class="modal-actions">
                    <button type="button" class="btn btn-danger" onclick="confirmAction('${modalId}')">Confirm</button>
                    <button type="button" class="btn btn-secondary" onclick="closeModal('${modalId}')">Cancel</button>
                </div>
            </div>
        </div>
    `;
    
    // Add to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Store callback in global scope
    window.pendingConfirmationCallback = onConfirm;
    
    // Show modal
    showModal(modalId);
}

// Confirm action and execute callback
function confirmAction(modalId) {
    closeModal(modalId);
    if (window.pendingConfirmationCallback && typeof window.pendingConfirmationCallback === 'function') {
        window.pendingConfirmationCallback();
        window.pendingConfirmationCallback = null;
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Utility functions
function getCurrentStudentId() {
    // If teacher is editing a student, return that student's ID
    if (currentUserType === 'teacher' && editingStudent) {
        return editingStudent;
    }
    
    // If current user is a student, return their ID
    if (currentUserType === 'student') {
        return currentUser;
    }
    
    // If admin, return null (no specific student)
    if (currentUserType === 'admin') {
        return null;
    }
    
    return null;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

function getGradeClass(grade) {
    const gradeNum = parseInt(grade);
    if (gradeNum >= 9) return 'grade-10';
    if (gradeNum >= 7) return 'grade-8';
    if (gradeNum >= 5) return 'grade-6';
    if (gradeNum >= 3) return 'grade-4';
    return 'grade-2';
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: bold;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        max-width: 300px;
    `;
    
    // Set background color based on type
    switch (type) {
        case 'success':
            notification.style.background = '#27ae60';
            break;
        case 'error':
            notification.style.background = '#e74c3c';
            break;
        case 'warning':
            notification.style.background = '#f39c12';
            notification.style.color = '#000';
            break;
        default:
            notification.style.background = '#3498db';
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Save all data to Firebase
async function saveAllDataToStorage() {
    try {
        // Add timestamp to track when data was last saved
        sampleData.lastSaved = new Date().toISOString();
        
        // Save to Firebase
        await setDoc(doc(db, 'quranData', 'main'), {
            students: sampleData.students,
            teachers: sampleData.teachers,
            content: sampleData.content,
            lastSaved: sampleData.lastSaved
        });
        
        console.log('All data saved to Firebase:', sampleData);
        
        // Show a subtle notification that data was saved (only for admin users)
        if (currentUserType === 'admin') {
            showNotification('Data saved to cloud successfully!', 'success');
        }
    } catch (e) {
        console.error('Error saving data to Firebase:', e);
        showNotification('Error saving to cloud', 'error');
    }
}



// Load data from Firebase
async function loadDataFromStorage() {
    try {
        const docRef = doc(db, 'quranData', 'main');
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            const data = docSnap.data();
            
            // Merge all data, not just content
            if (data.students) {
                sampleData.students = { ...sampleData.students, ...data.students };
            }
            if (data.teachers) {
                sampleData.teachers = { ...sampleData.teachers, ...data.teachers };
            }
            if (data.content) {
                // Merge content for all students (including newly created ones)
                Object.keys(data.content).forEach(studentId => {
                    if (!sampleData.content[studentId]) {
                        sampleData.content[studentId] = { hifz: [], revision: [], sessions: [] };
                    }
                    sampleData.content[studentId] = data.content[studentId];
                });
            }
            
            console.log('Data loaded from Firebase:', sampleData);
        }
    } catch (e) {
        console.error('Error loading data from Firebase:', e);
        showNotification('Error loading from cloud', 'error');
    }
}

// Refresh student data to show teacher updates
function refreshStudentData() {
    if (currentUserType === 'student' && currentUser) {
        loadStudentContent();
    } else if (currentUserType === 'teacher' && editingStudent) {
        // If teacher is editing a student, refresh that student's content
        loadStudentContent();
    }
}

// Show admin dashboard
function showAdminDashboard() {
    // Store original content for restoration
    const mainContent = document.querySelector('.main-content');
    if (!window.originalMainContent) {
        window.originalMainContent = mainContent.innerHTML;
    }
    
    // Hide all content cards
    document.querySelector('.top-cards').style.display = 'none';
    document.querySelector('.past-sessions-card').style.display = 'none';
    
    // Show admin content
    const adminContent = document.createElement('div');
    adminContent.className = 'admin-dashboard';
    adminContent.innerHTML = `
        <div class="admin-section">
            <h2>System Administration</h2>
            
            <div class="admin-actions">
                <button class="admin-btn" onclick="showCreateAccountModal()">
                    <span class="icon">👤</span>
                    Create New Account
                </button>
                <button class="admin-btn" onclick="showAssignStudentsModal()">
                    <span class="icon">🔗</span>
                    Assign Students to Teachers
                </button>
                <button class="admin-btn" onclick="showSystemStats()">
                    <span class="icon">📊</span>
                    System Statistics
                </button>
            </div>
            
            <div class="admin-actions" style="margin-top: 20px;">
                <button class="admin-btn" onclick="deleteAllTeachers()" style="background: #ffebee; border-color: #f44336; color: #d32f2f;">
                    <span class="icon">🗑️</span>
                    Delete All Teachers
                </button>
                <button class="admin-btn" onclick="deleteAllStudents()" style="background: #ffebee; border-color: #f44336; color: #d32f2f;">
                    <span class="icon">🗑️</span>
                    Delete All Students
                </button>
            </div>

            <div style="margin-top: 30px;">
                <button class="btn btn-secondary" onclick="logout()">
                    ← Back to Login
                </button>
            </div>
        </div>
    `;
    
    // Replace main content
    mainContent.innerHTML = '';
    mainContent.appendChild(adminContent);
}

// Show create account modal
function showCreateAccountModal() {
    const modal = document.getElementById('createAccountModal');
    modal.style.display = 'block';
}

// Show assign students modal
function showAssignStudentsModal() {
    const modal = document.getElementById('assignStudentsModal');
    modal.style.display = 'block';
    
    // Populate teacher dropdown
    populateTeacherDropdown();
    
    // Load current assignments
    loadCurrentAssignments();
}

// Handle create account
function handleCreateAccount(event) {
    event.preventDefault();
    
    const accountType = document.getElementById('accountType').value;
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const className = document.getElementById('className').value;
    const teacherName = document.getElementById('teacherName').value.trim();
    
    if (!firstName || !lastName || !className) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    // Generate ID based on account type
    let newId;
    if (accountType === 'student') {
        const firstLetter = firstName.charAt(0).toUpperCase();
        const lastLetter = lastName.charAt(0).toUpperCase();
        const grade = className.charAt(0);
        const section = className.includes('AM') ? 'CF' : 'HK';
        const classNum = className.slice(-1);
        newId = `S${firstLetter}${lastLetter}${grade}${section}${classNum}`;
        
        // Add student
        sampleData.students[newId] = {
            name: `${firstName} ${lastName}`,
            class: className,
            teacher: teacherName || 'Unassigned'
        };
        
        // Add content entry
        sampleData.content[newId] = {
            hifz: [],
            revision: [],
            sessions: []
        };
        
        // Ensure the content entry is properly initialized
        if (!sampleData.content[newId]) {
            sampleData.content[newId] = { hifz: [], revision: [], sessions: [] };
        }
        
        // Assign to teacher if specified
        if (teacherName) {
            Object.keys(sampleData.teachers).forEach(teacherId => {
                if (sampleData.teachers[teacherId].name === teacherName) {
                    if (!sampleData.teachers[teacherId].students) {
                        sampleData.teachers[teacherId].students = [];
                    }
                    sampleData.teachers[teacherId].students.push(newId);
                }
            });
        }
        
    } else if (accountType === 'teacher') {
        const firstLetter = firstName.charAt(0).toUpperCase();
        const lastLetter = lastName.charAt(0).toUpperCase();
        const grade = className.charAt(0);
        const section = className.includes('AM') ? 'CF' : 'HK';
        const classNum = className.slice(-1);
        newId = `T${firstLetter}${lastLetter}${grade}${section}${classNum}`;
        
        // Add teacher
        sampleData.teachers[newId] = {
            name: `${firstName} ${lastName}`,
            students: []
        };
        
        // Initialize empty students array
        if (!sampleData.teachers[newId].students) {
            sampleData.teachers[newId].students = [];
        }
    }
    
    // Save to localStorage
    saveAllDataToStorage();
    
    // Close modal and reset form
    closeModal('createAccountModal');
    document.getElementById('createAccountForm').reset();
    
    // Show success message with ID in styled modal
    const accountDetails = `
        <div class="account-created-container">
            <div class="success-icon">✅</div>
            <h4>Account Created Successfully!</h4>
            
            <div class="account-details">
                <div class="detail-row">
                    <span class="detail-label">Account Type:</span>
                    <span class="detail-value">${accountType.charAt(0).toUpperCase() + accountType.slice(1)}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Name:</span>
                    <span class="detail-value">${firstName} ${lastName}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Class:</span>
                    <span class="detail-value">${className}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Unique ID:</span>
                    <span class="detail-value id-highlight">${newId}</span>
                </div>
            </div>
            
            <div class="important-note">
                <strong>⚠️ Important:</strong> Please share this ID with the user. They will need it to log in.
            </div>
        </div>
    `;
    
    showDetailedModal('Account Created', accountDetails);
    
    showNotification(`${accountType} account created successfully! ID: ${newId}`, 'success');
    
    // Refresh admin dashboard
    showAdminDashboard();
}

// Populate teacher dropdown
function populateTeacherDropdown() {
    const teacherSelect = document.getElementById('assignTeacher');
    teacherSelect.innerHTML = '<option value="">Choose a teacher...</option>';
    
    Object.keys(sampleData.teachers).forEach(teacherId => {
        const teacher = sampleData.teachers[teacherId];
        const option = document.createElement('option');
        option.value = teacherId;
        option.textContent = `${teacher.name} (${teacherId})`;
        teacherSelect.appendChild(option);
    });
}

// Load unassigned students when teacher is selected
function loadUnassignedStudents() {
    const teacherId = document.getElementById('assignTeacher').value;
    const studentSelect = document.getElementById('assignStudent');
    
    if (!teacherId) {
        studentSelect.innerHTML = '<option value="">Choose a teacher first...</option>';
        return;
    }
    
    // Get all students
    const allStudents = Object.keys(sampleData.students);
    
    // Filter out students already assigned to this teacher
    const assignedStudents = sampleData.teachers[teacherId].students || [];
    const unassignedStudents = allStudents.filter(studentId => !assignedStudents.includes(studentId));
    
    studentSelect.innerHTML = '<option value="">Choose a student...</option>';
    
    if (unassignedStudents.length === 0) {
        studentSelect.innerHTML = '<option value="">No unassigned students available</option>';
        return;
    }
    
    unassignedStudents.forEach(studentId => {
        const student = sampleData.students[studentId];
        const option = document.createElement('option');
        option.value = studentId;
        option.textContent = `${student.name} (${studentId}) - ${student.class}`;
        studentSelect.appendChild(option);
    });
}

// Assign student to teacher
function assignStudentToTeacher() {
    const teacherId = document.getElementById('assignTeacher').value;
    const studentId = document.getElementById('assignStudent').value;
    
    if (!teacherId || !studentId) {
        showNotification('Please select both a teacher and a student', 'error');
        return;
    }
    
    // Add student to teacher's list
    if (!sampleData.teachers[teacherId].students) {
        sampleData.teachers[teacherId].students = [];
    }
    sampleData.teachers[teacherId].students.push(studentId);
    
    // Update student's teacher
    sampleData.students[studentId].teacher = sampleData.teachers[teacherId].name;
    
    // Save to localStorage
    saveAllDataToStorage();
    
    // Refresh the modal
    loadUnassignedStudents();
    loadCurrentAssignments();
    
    showNotification(`Student assigned to teacher successfully!`, 'success');
}

// Load current assignments
function loadCurrentAssignments() {
    const assignmentsList = document.getElementById('currentAssignmentsList');
    assignmentsList.innerHTML = '';
    
    Object.keys(sampleData.teachers).forEach(teacherId => {
        const teacher = sampleData.teachers[teacherId];
        const students = teacher.students || [];
        
        if (students.length > 0) {
            const teacherDiv = document.createElement('div');
            teacherDiv.className = 'teacher-assignment';
            teacherDiv.innerHTML = `
                <h5>${teacher.name} (${teacherId})</h5>
                <div class="assigned-students">
                    ${students.map(studentId => {
                        const student = sampleData.students[studentId];
                        return `<div class="assigned-student">
                            <span>${student.name} (${studentId})</span>
                            <button class="btn btn-danger btn-sm" onclick="removeStudentAssignment('${teacherId}', '${studentId}')">Remove</button>
                        </div>`;
                    }).join('')}
                </div>
            `;
            assignmentsList.appendChild(teacherDiv);
        }
    });
    
    if (assignmentsList.children.length === 0) {
        assignmentsList.innerHTML = '<p>No students assigned to teachers yet.</p>';
    }
}

// Remove student assignment
function removeStudentAssignment(teacherId, studentId) {
    if (confirm('Are you sure you want to remove this assignment?')) {
        // Remove student from teacher's list
        const teacher = sampleData.teachers[teacherId];
        teacher.students = teacher.students.filter(id => id !== studentId);
        
        // Update student's teacher to unassigned
        sampleData.students[studentId].teacher = 'Unassigned';
        
        // Save to localStorage
        saveAllDataToStorage();
        
        // Refresh the modal
        loadUnassignedStudents();
        loadCurrentAssignments();
        
        showNotification('Student assignment removed successfully!', 'success');
    }
}

// Delete all teachers
function deleteAllTeachers() {
    const confirmContent = `
        <div class="delete-confirmation-container">
            <div class="warning-icon">⚠️</div>
            <h4>Delete All Teachers</h4>
            <p class="warning-message">
                This action will <strong>permanently delete ALL teachers</strong> and their assignments!
            </p>
            <div class="consequences">
                <h5>What will happen:</h5>
                <ul>
                    <li>All teachers will be removed from the system</li>
                    <li>All students will become unassigned</li>
                    <li>All teacher-student relationships will be lost</li>
                    <li>This action <strong>cannot be undone</strong></li>
                </ul>
            </div>
            <p class="final-warning">
                <strong>Are you absolutely sure you want to continue?</strong>
            </p>
        </div>
    `;
    
    showConfirmationModal('Delete All Teachers', confirmContent, () => {
        // Remove all teachers
        sampleData.teachers = {};
        
        // Update all students to have no teacher
        Object.keys(sampleData.students).forEach(studentId => {
            sampleData.students[studentId].teacher = 'Unassigned';
        });
        
        // Save to localStorage
        saveAllDataToStorage();
        
        // Refresh admin dashboard
        showAdminDashboard();
        
        showNotification('All teachers deleted successfully!', 'success');
    });
}

// Delete all students
function deleteAllStudents() {
    const confirmContent = `
        <div class="delete-confirmation-container">
            <div class="warning-icon">⚠️</div>
            <h4>Delete All Students</h4>
            <p class="warning-message">
                This action will <strong>permanently delete ALL students</strong> and their content!
            </p>
            <div class="consequences">
                <h5>What will happen:</h5>
                <ul>
                    <li>All students will be removed from the system</li>
                    <li>All student content (hifz, revision, sessions) will be lost</li>
                    <li>All teacher-student assignments will be cleared</li>
                    <li>This action <strong>cannot be undone</strong></li>
                </ul>
            </div>
            <p class="final-warning">
                <strong>Are you absolutely sure you want to continue?</strong>
            </p>
        </div>
    `;
    
    showConfirmationModal('Delete All Students', confirmContent, () => {
        // Remove all students
        sampleData.students = {};
        
        // Remove all content
        sampleData.content = {};
        
        // Clear teacher assignments
        Object.keys(sampleData.teachers).forEach(teacherId => {
            sampleData.teachers[teacherId].students = [];
        });
        
        // Save to localStorage
        saveAllDataToStorage();
        
        // Refresh admin dashboard
        showAdminDashboard();
        
        showNotification('All students deleted successfully!', 'success');
    });
}

// Show system statistics
function showSystemStats() {
    const studentCount = Object.keys(sampleData.students).length;
    const teacherCount = Object.keys(sampleData.teachers).length;
    const totalContent = Object.values(sampleData.content).reduce((total, student) => {
        return total + student.hifz.length + student.revision.length + student.sessions.length;
    }, 0);
    
    // Count assignments
    let totalAssignments = 0;
    let assignmentDetails = '';
    Object.keys(sampleData.teachers).forEach(teacherId => {
        const teacher = sampleData.teachers[teacherId];
        const students = teacher.students || [];
        totalAssignments += students.length;
        if (students.length > 0) {
            assignmentDetails += `\n${teacher.name}: ${students.length} students`;
        }
    });
    
    // Create detailed stats display
    const statsContent = `
        <div class="stats-container">
            <div class="stats-section">
                <h4>📊 System Overview</h4>
                <div class="stats-grid">
                    <div class="stat-item">
                        <span class="stat-number">${studentCount}</span>
                        <span class="stat-label">Students</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${teacherCount}</span>
                        <span class="stat-label">Teachers</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${totalContent}</span>
                        <span class="stat-label">Content Items</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${totalAssignments}</span>
                        <span class="stat-label">Assignments</span>
                    </div>
                </div>
            </div>
            
            <div class="stats-section">
                <h4>🔗 Assignment Details</h4>
                <div class="assignment-details">
                    ${Object.keys(sampleData.teachers).map(teacherId => {
                        const teacher = sampleData.teachers[teacherId];
                        const students = teacher.students || [];
                        if (students.length > 0) {
                            return `<div class="teacher-assignment-stat">
                                <strong>${teacher.name}:</strong> ${students.length} student${students.length !== 1 ? 's' : ''}
                            </div>`;
                        }
                        return '';
                    }).join('')}
                </div>
            </div>
            
            <div class="stats-section">
                <h4>🆔 User IDs</h4>
                <div class="user-ids">
                    <div class="id-group">
                        <strong>Students:</strong> ${Object.keys(sampleData.students).join(', ')}
                    </div>
                    <div class="id-group">
                        <strong>Teachers:</strong> ${Object.keys(sampleData.teachers).join(', ')}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Show stats in a styled modal
    showDetailedModal('System Statistics', statsContent);
}

// Global functions for HTML onclick
window.closeModal = closeModal;
window.deleteContentItem = deleteContentItem;
window.deleteSession = deleteSession;
window.showCreateAccountModal = showCreateAccountModal;
window.handleCreateAccount = handleCreateAccount;
window.showAssignStudentsModal = showAssignStudentsModal;
window.loadUnassignedStudents = loadUnassignedStudents;
window.assignStudentToTeacher = assignStudentToTeacher;
window.removeStudentAssignment = removeStudentAssignment;
window.deleteAllTeachers = deleteAllTeachers;
window.deleteAllStudents = deleteAllStudents;
window.showSystemStats = showSystemStats;
window.logout = handleLogout;
window.skipToDashboard = skipToDashboard;
window.confirmLogout = confirmLogout;

