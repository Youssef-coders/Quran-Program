// Sign-up and Authentication Management
class SignupManager {
    constructor() {
        this.currentLanguage = 'en';
        this.isCreatingAccount = false;
        this.boundHandleSignup = this.handleSignup.bind(this);
        this.eventListenersSetup = false;
        this.translations = {
            en: {
                // Auth page
                'auth.title': 'MRIS Quran Program',
                'auth.subtitle': 'Join the MRIS Quran memorization program',
                'auth.login': 'Login',
                'auth.signup': 'Sign Up',
                'auth.back_to_main': '← Back to Main',
                
                // Login
                'login.placeholder': 'Enter your unique code',
                'login.button': 'Login',
                'login.invalid': 'Invalid code. Please try again.',
                
                // Sign up
                'signup.first_name': 'First Name',
                'signup.last_name': 'Last Name',
                'signup.grade': 'Grade',
                'signup.select_grade': 'Select Grade',
                'signup.grade_7': 'Grade 7',
                'signup.grade_8': 'Grade 8',
                'signup.grade_9': 'Grade 9',
                'signup.grade_10': 'Grade 10',
                'signup.class': 'Class',
                'signup.select_class': 'Select Class',
                'signup.select_grade_first': 'Select Grade First',
                'signup.teacher_grades': 'What grades do you teach?',
                'signup.teacher_classes': 'What classes do you teach?',
                'signup.multi_select_hint': 'Hold Ctrl/Cmd to select multiple options',
                'signup.select_grades_first': 'Select grades first',
                'signup.email': 'Email Address',
                'signup.phone_number': 'Phone Number',
                'signup.notification_method': 'How would you like to receive your ID?',
                'signup.select_method': 'Select Method',
                'signup.via_email': 'Via Email',
                'signup.via_sms': 'Via SMS',
                'signup.via_both': 'Both Email & SMS',
                'signup.user_type': 'Account Type',
                'signup.select_type': 'Select Type',
                'signup.student': 'Student',
                'signup.teacher': 'Teacher',
                'signup.create_account': 'Create Account',
                'loading.creating_account': 'Creating Account...',
                'signup.success_title': 'Account Created Successfully!',
                'signup.success_message': 'Your account has been created. Here is your unique ID:',
                'signup.important_note': 'Important:',
                'signup.save_id': 'Please save this ID. You will need it to log in. Your ID has been sent via your chosen method.',
                'signup.program_schedule': 'Program Schedule:',
                'signup.days': 'Days:',
                'signup.time': 'Time:',
                'signup.schedule_days': 'Every Monday and Thursday',
                'signup.schedule_time': '6:45 AM - 7:15 AM',
                
                // Validation messages
                'validation.required': 'This field is required',
                'validation.invalid_email': 'Please enter a valid email address',
                'validation.invalid_phone': 'Please enter a valid phone number',
                'validation.email_exists': 'This email is already registered',
                'validation.phone_exists': 'This phone number is already registered',
                
                // Notifications
                'notification.account_created': 'Account created successfully!',
                'notification.email_sent': 'ID has been sent to your email',
                'notification.sms_sent': 'ID has been sent to your phone',
                'notification.both_sent': 'ID has been sent to both email and phone',
                'notification.login_success': 'Login successful!',
                'notification.language_changed': 'Language changed to English'
            },
            ar: {
                // Auth page
                'auth.title': 'برنامج القرآن الكريم - MRIS',
                'auth.subtitle': 'انضم إلى برنامج حفظ القرآن الكريم',
                'auth.login': 'تسجيل الدخول',
                'auth.signup': 'إنشاء حساب',
                'auth.back_to_main': '← العودة للرئيسية',
                
                // Login
                'login.placeholder': 'أدخل الرمز الخاص بك',
                'login.button': 'دخول',
                'login.invalid': 'رمز غير صحيح. يرجى المحاولة مرة أخرى.',
                
                // Sign up
                'signup.first_name': 'الاسم الأول',
                'signup.last_name': 'الاسم الأخير',
                'signup.grade': 'الصف',
                'signup.select_grade': 'اختر الصف',
                'signup.grade_7': 'الصف السابع',
                'signup.grade_8': 'الصف الثامن',
                'signup.grade_9': 'الصف التاسع',
                'signup.grade_10': 'الصف العاشر',
                'signup.class': 'الفصل',
                'signup.select_class': 'اختر الفصل',
                'signup.select_grade_first': 'اختر الصف أولاً',
                'signup.teacher_grades': 'ما هي الصفوف التي تدرسها؟',
                'signup.teacher_classes': 'ما هي الفصول التي تدرسها؟',
                'signup.multi_select_hint': 'اضغط Ctrl/Cmd لاختيار عدة خيارات',
                'signup.select_grades_first': 'اختر الصفوف أولاً',
                'signup.email': 'البريد الإلكتروني',
                'signup.phone_number': 'رقم الهاتف',
                'signup.notification_method': 'كيف تريد استلام المعرف الخاص بك؟',
                'signup.select_method': 'اختر الطريقة',
                'signup.via_email': 'عبر البريد الإلكتروني',
                'signup.via_sms': 'عبر الرسائل النصية',
                'signup.via_both': 'كلاهما (بريد ورسائل)',
                'signup.user_type': 'نوع الحساب',
                'signup.select_type': 'اختر النوع',
                'signup.student': 'طالب',
                'signup.teacher': 'معلم',
                'signup.create_account': 'إنشاء الحساب',
                'loading.creating_account': 'جاري إنشاء الحساب...',
                'signup.success_title': 'تم إنشاء الحساب بنجاح!',
                'signup.success_message': 'تم إنشاء حسابك. هذا هو المعرف الفريد الخاص بك:',
                'signup.important_note': 'مهم:',
                'signup.save_id': 'يرجى حفظ هذا المعرف. ستحتاجه لتسجيل الدخول. تم إرسال المعرف عبر الطريقة المختارة.',
                'signup.program_schedule': 'جدول البرنامج:',
                'signup.days': 'الأيام:',
                'signup.time': 'الوقت:',
                'signup.schedule_days': 'كل يوم اثنين وخميس',
                'signup.schedule_time': '6:45 صباحاً - 7:15 صباحاً',
                
                // Validation messages
                'validation.required': 'هذا الحقل مطلوب',
                'validation.invalid_email': 'يرجى إدخال عنوان بريد إلكتروني صحيح',
                'validation.invalid_phone': 'يرجى إدخال رقم هاتف صحيح',
                'validation.email_exists': 'هذا البريد الإلكتروني مسجل مسبقاً',
                'validation.phone_exists': 'رقم الهاتف هذا مسجل مسبقاً',
                
                // Notifications
                'notification.account_created': 'تم إنشاء الحساب بنجاح!',
                'notification.email_sent': 'تم إرسال المعرف إلى بريدك الإلكتروني',
                'notification.sms_sent': 'تم إرسال المعرف إلى هاتفك',
                'notification.both_sent': 'تم إرسال المعرف إلى البريد والهاتف',
                'notification.login_success': 'تم تسجيل الدخول بنجاح!',
                'notification.language_changed': 'تم تغيير اللغة إلى العربية'
            }
        };
        this.init();
    }

    init() {
        console.log('SignupManager initializing...');
        this.setupEventListeners();
        this.setupFormValidation();
        this.setupGradeChangeListener();
        this.loadLanguage();
        this.bindUserTypeChange();
        this.loadExistingData();
        console.log('SignupManager initialized successfully');
        
        // Test if language toggle button exists
        const languageToggle = document.getElementById('languageToggle');
        console.log('Language toggle button found:', !!languageToggle);
        if (languageToggle) {
            console.log('Language toggle button text:', languageToggle.textContent);
        }
    }
    
    setupFormValidation() {
        // Form validation setup - event listener is handled in setupEventListeners()
        console.log('Form validation setup complete');
    }

    setupGradeChangeListener() {
        const gradeSelect = document.getElementById('grade');
        if (gradeSelect) {
            gradeSelect.addEventListener('change', () => {
                this.updateClassOptions();
            });
        }
        
        // Add teacher grades change listener for checkboxes
        document.addEventListener('change', (e) => {
            if (e.target.name === 'teacherGrades') {
                this.updateTeacherClassOptions();
            }
        });
    }

    bindUserTypeChange() {
        const userTypeSelect = document.getElementById('userType');
        if (userTypeSelect) {
            userTypeSelect.addEventListener('change', (e) => {
                this.handleUserTypeChange(e.target.value);
            });
        }
    }

    handleUserTypeChange(userType) {
        const gradeGroup = document.getElementById('gradeGroup');
        const classGroup = document.getElementById('classGroup');
        const teacherGradesGroup = document.getElementById('teacherGradesGroup');
        const teacherClassesGroup = document.getElementById('teacherClassesGroup');
        const gradeSelect = document.getElementById('grade');
        const classSelect = document.getElementById('class');
        const teacherGradesSelect = document.getElementById('teacherGrades');
        const teacherClassesSelect = document.getElementById('teacherClasses');

        if (userType === 'student') {
            // Show grade and class for students
            gradeGroup.style.display = 'block';
            classGroup.style.display = 'block';
            teacherGradesGroup.style.display = 'none';
            teacherClassesGroup.style.display = 'none';
            
            gradeSelect.required = true;
            classSelect.required = true;
            if (teacherGradesSelect) teacherGradesSelect.required = false;
            if (teacherClassesSelect) teacherClassesSelect.required = false;
        } else if (userType === 'teacher') {
            // For teachers, show grade dropdown and class dropdown
            gradeGroup.style.display = 'block';
            classGroup.style.display = 'block';
            teacherGradesGroup.style.display = 'none';
            teacherClassesGroup.style.display = 'none';
            
            gradeSelect.required = true;
            classSelect.required = true;
        } else {
            // Hide all for no selection
            gradeGroup.style.display = 'none';
            classGroup.style.display = 'none';
            teacherGradesGroup.style.display = 'none';
            teacherClassesGroup.style.display = 'none';
            
            gradeSelect.required = false;
            classSelect.required = false;
            if (teacherGradesSelect) teacherGradesSelect.required = false;
            if (teacherClassesSelect) teacherClassesSelect.required = false;
            if (subjectSelect) subjectSelect.required = false;
        }
    }

    loadLanguage() {
        const savedLanguage = localStorage.getItem('quranLanguage') || 'en';
        this.setLanguage(savedLanguage);
    }

    setupEventListeners() {
        // Prevent multiple setup
        if (this.eventListenersSetup) {
            console.log('Event listeners already setup, skipping...');
            return;
        }
        
        console.log('Setting up event listeners...');
        
        // Language toggle
        const languageToggle = document.getElementById('languageToggle');
        if (languageToggle) {
            console.log('Language toggle button found, adding event listener');
            languageToggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Language toggle clicked');
                this.toggleLanguage();
            });
        } else {
            console.error('Language toggle button not found!');
        }

        // Prevent spaces as first character in all input fields
        document.addEventListener('input', (e) => {
            if (e.target.type === 'text' && e.target.value.startsWith(' ')) {
                e.target.value = e.target.value.trim();
            }
        });

        // Auth buttons
        const loginBtn = document.getElementById('loginBtn');
        const signupBtn = document.getElementById('signupBtn');
        
        if (loginBtn) {
            loginBtn.addEventListener('click', () => this.showLogin());
        }
        
        if (signupBtn) {
            signupBtn.addEventListener('click', () => this.showSignup());
        }

        // Forms
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');
        
        // Add login functionality to signup page
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                console.log('Login form submit event triggered on signup page');
                e.preventDefault();
                e.stopPropagation();
                this.handleLogin(e);
            });
        }
        
        // Add login button click handler
        const loginButton = document.getElementById('loginBtn');
        if (loginButton) {
            loginButton.addEventListener('click', (e) => {
                console.log('Login button clicked on signup page');
                e.preventDefault();
                e.stopPropagation();
                this.handleLogin(e);
            });
        }
        
        if (signupForm) {
            // Remove any existing event listener first to prevent duplicates
            signupForm.removeEventListener('submit', this.boundHandleSignup);
            signupForm.addEventListener('submit', this.boundHandleSignup);
            console.log('Signup form event listener added');
        }

        // Grade selection
        const gradeSelect = document.getElementById('grade');
        if (gradeSelect) {
            gradeSelect.addEventListener('change', () => this.updateClassOptions());
        }
        
        // Mark as setup
        this.eventListenersSetup = true;
        console.log('Event listeners setup complete');
    }

    loadExistingData() {
        // Load existing users data from localStorage
        const existingStudents = localStorage.getItem('quranStudents');
        const existingTeachers = localStorage.getItem('quranTeachers');
        
        this.students = existingStudents ? JSON.parse(existingStudents) : {};
        this.teachers = existingTeachers ? JSON.parse(existingTeachers) : {};
        
        // Also load from the main script's sampleData if available
        if (typeof sampleData !== 'undefined') {
            this.students = { ...this.students, ...sampleData.students };
            this.teachers = { ...this.teachers, ...sampleData.teachers };
        }
        
        // Always ensure ADMINYNG9 is available
        this.admin = {
            'ADMINYNG9': { 
                name: 'System Administrator', 
                role: 'admin',
                id: 'ADMINYNG9',
                type: 'admin',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            }
        };
    }

    toggleLanguage() {
        console.log('toggleLanguage called, current language:', this.currentLanguage);
        const newLanguage = this.currentLanguage === 'en' ? 'ar' : 'en';
        console.log('Switching to language:', newLanguage);
        this.setLanguage(newLanguage);
    }

    setLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('quranLanguage', lang);
        
        // Update document direction
        if (lang === 'ar') {
            document.body.setAttribute('dir', 'rtl');
            document.documentElement.setAttribute('lang', 'ar');
        } else {
            document.body.setAttribute('dir', 'ltr');
            document.documentElement.setAttribute('lang', 'en');
        }
        
        // Update language toggle button
        const languageToggle = document.getElementById('languageToggle');
        if (languageToggle) {
            languageToggle.textContent = lang === 'ar' ? 'EN' : 'ع';
        }
        
        // Update all text elements
        this.updateUITexts();
        
        // Show notification
        this.showNotification(this.getTranslation('notification.language_changed'));
    }

    getTranslation(key) {
        return this.translations[this.currentLanguage][key] || key;
    }

    updateUITexts() {
        console.log('updateUITexts called, current language:', this.currentLanguage);
        
        // Update elements with data-translate attributes
        const elements = document.querySelectorAll('[data-translate]');
        console.log('Found', elements.length, 'elements with data-translate');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.getTranslation(key);
            console.log('Translating', key, 'to', translation);
            element.textContent = translation;
        });
        
        // Update elements with data-translate-placeholder attributes
        const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
        console.log('Found', placeholderElements.length, 'elements with data-translate-placeholder');
        
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            const translation = this.getTranslation(key);
            console.log('Translating placeholder', key, 'to', translation);
            element.placeholder = translation;
        });
    }

    showLogin() {
        document.getElementById('loginBtn').classList.add('active');
        document.getElementById('signupBtn').classList.remove('active');
        document.getElementById('loginSection').classList.add('active');
        document.getElementById('signupSection').classList.remove('active');
        this.hideMessages();
    }

    showSignup() {
        document.getElementById('signupBtn').classList.add('active');
        document.getElementById('loginBtn').classList.remove('active');
        document.getElementById('signupSection').classList.add('active');
        document.getElementById('loginSection').classList.remove('active');
        this.hideMessages();
    }

    hideMessages() {
        document.getElementById('errorMessage').style.display = 'none';
        document.getElementById('successMessage').style.display = 'none';
    }

    // showError function removed - no more error popups!

    showLoading() {
        const loadingOverlay = document.getElementById('loadingOverlay');
        if (loadingOverlay) {
            loadingOverlay.style.display = 'flex';
        }
    }

    hideLoading() {
        const loadingOverlay = document.getElementById('loadingOverlay');
        if (loadingOverlay) {
            loadingOverlay.style.display = 'none';
        }
    }

    showSuccess(id) {
        console.log('showSuccess called with ID:', id);
        this.hideLoading();
        
        const generatedIdElement = document.getElementById('generatedId');
        const successMessageElement = document.getElementById('successMessage');
        const signupFormElement = document.getElementById('signupForm');
        
        console.log('Elements found:', {
            generatedIdElement: !!generatedIdElement,
            successMessageElement: !!successMessageElement,
            signupFormElement: !!signupFormElement
        });
        
        if (generatedIdElement) {
            generatedIdElement.textContent = id;
            generatedIdElement.style.fontSize = '24px';
            generatedIdElement.style.color = '#28a745';
            generatedIdElement.style.fontWeight = 'bold';
        }
        
        if (successMessageElement) {
            successMessageElement.style.display = 'block';
            successMessageElement.style.background = '#d4edda';
            successMessageElement.style.border = '2px solid #28a745';
            successMessageElement.style.padding = '30px';
            successMessageElement.style.marginTop = '20px';
        }
        
        if (signupFormElement) {
            signupFormElement.style.display = 'none';
        }
        
        // Scroll to success message
        if (successMessageElement) {
            successMessageElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    showNotification(message) {
        // Simple notification - can be enhanced
        console.log(message);
    }

    updateClassOptions() {
        const gradeSelect = document.getElementById('grade');
        const classSelect = document.getElementById('class');
        const teacherGradesGroup = document.getElementById('teacherGradesGroup');
        const teacherClassesGroup = document.getElementById('teacherClassesGroup');
        
        if (!gradeSelect || !classSelect) return;
        
        const selectedGrade = gradeSelect.value;
        const userType = document.getElementById('userType').value;
        
        // Clear existing options
        classSelect.innerHTML = '<option value="" data-translate="signup.select_class">Select Class</option>';
        
        // Handle teacher grade selection - show multi-select when "Teacher" is selected
        if (selectedGrade === 'Teacher') {
            // Show multi-select fields for teachers selecting "Teacher" grade
            classSelect.parentElement.style.display = 'none';
            if (teacherGradesGroup) teacherGradesGroup.style.display = 'block';
            if (teacherClassesGroup) teacherClassesGroup.style.display = 'block';
            
            // Update requirements
            classSelect.required = false;
            const teacherGradesSelect = document.getElementById('teacherGrades');
            const teacherClassesSelect = document.getElementById('teacherClasses');
            if (teacherGradesSelect) teacherGradesSelect.required = true;
            if (teacherClassesSelect) teacherClassesSelect.required = true;
            return;
        } else if (userType === 'teacher') {
            // Single grade teacher - hide multi-select, show class dropdown
            classSelect.parentElement.style.display = 'block';
            if (teacherGradesGroup) teacherGradesGroup.style.display = 'none';
            if (teacherClassesGroup) teacherClassesGroup.style.display = 'none';
            classSelect.required = true;
        }
        
        if (!selectedGrade || selectedGrade === 'Teacher') return;
        
        // Grade-specific class options - updated with correct class counts
        const gradeClasses = {
            '5': [
                { value: '5Ba1', display: '5Ba1' },
                { value: '5Ba2', display: '5Ba2' },
                { value: '5Ba3', display: '5Ba3' },
                { value: '5Ba4', display: '5Ba4' },
                { value: '5Ba5', display: '5Ba5' },
                { value: '5Ba6', display: '5Ba6' },
                { value: '5Ba7', display: '5Ba7' }
            ],
            '6': [
                { value: '6Ba1', display: '6Ba1' },
                { value: '6Ba2', display: '6Ba2' },
                { value: '6Ba3', display: '6Ba3' },
                { value: '6Ba4', display: '6Ba4' },
                { value: '6Ba5', display: '6Ba5' },
                { value: '6Ba6', display: '6Ba6' },
                { value: '6Ba7', display: '6Ba7' }
            ],
            '7': [
                { value: '7Ba1', display: '7Ba1' },
                { value: '7Ba2', display: '7Ba2' },
                { value: '7Ba3', display: '7Ba3' },
                { value: '7Ba4', display: '7Ba4' },
                { value: '7Ba5', display: '7Ba5' },
                { value: '7Ba6', display: '7Ba6' },
                { value: '7Ba7', display: '7Ba7' },
                { value: '7Ba8', display: '7Ba8' }
            ],
            '8': [
                { value: '8Ba1', display: '8Ba1' },
                { value: '8Ba2', display: '8Ba2' },
                { value: '8Ba3', display: '8Ba3' },
                { value: '8Ba4', display: '8Ba4' },
                { value: '8Ba5', display: '8Ba5' },
                { value: '8Ba6', display: '8Ba6' },
                { value: '8Ba7', display: '8Ba7' },
                { value: '8Ba8', display: '8Ba8' }
            ],
            '9': [
                { value: '9AM1', display: '9AM1' },
                { value: '9AM2', display: '9AM2' },
                { value: '9AM3', display: '9AM3' },
                { value: '9AM4', display: '9AM4' },
                { value: '9AM5', display: '9AM5' },
                { value: '9BR1', display: '9BR1' },
                { value: '9BR2', display: '9BR2' },
                { value: '9BR3', display: '9BR3' },
                { value: '9BR4', display: '9BR4' }
            ],
            '10': [
                { value: '10AM1', display: '10AM1' },
                { value: '10AM2', display: '10AM2' },
                { value: '10AM3', display: '10AM3' },
                { value: '10AM4', display: '10AM4' },
                { value: '10AM5', display: '10AM5' },
                { value: '10AM6', display: '10AM6' },
                { value: '10BR1', display: '10BR1' },
                { value: '10BR2', display: '10BR2' },
                { value: '10BR3', display: '10BR3' }
            ]
        };
        
        // Add class options for selected grade
        const classes = gradeClasses[selectedGrade] || [];
        classes.forEach(classInfo => {
            const option = document.createElement('option');
            option.value = classInfo.value;
            option.textContent = classInfo.display;
            classSelect.appendChild(option);
        });
    }

    updateTeacherClassOptions() {
        const teacherGradesCheckboxes = document.querySelectorAll('input[name="teacherGrades"]:checked');
        const teacherClassesContainer = document.getElementById('teacherClassesCheckboxes');
        
        if (!teacherClassesContainer) return;
        
        const selectedGrades = Array.from(teacherGradesCheckboxes).map(checkbox => checkbox.value);
        
        // Clear existing options
        teacherClassesContainer.innerHTML = '';
        
        if (selectedGrades.length === 0) {
            teacherClassesContainer.innerHTML = '<p data-translate="signup.select_grades_first">Select grades first</p>';
            return;
        }
        
        // Grade-specific class options - updated with correct class counts
        const gradeClasses = {
            '5': [
                { value: '5Ba1', display: '5Ba1' },
                { value: '5Ba2', display: '5Ba2' },
                { value: '5Ba3', display: '5Ba3' },
                { value: '5Ba4', display: '5Ba4' },
                { value: '5Ba5', display: '5Ba5' },
                { value: '5Ba6', display: '5Ba6' },
                { value: '5Ba7', display: '5Ba7' }
            ],
            '6': [
                { value: '6Ba1', display: '6Ba1' },
                { value: '6Ba2', display: '6Ba2' },
                { value: '6Ba3', display: '6Ba3' },
                { value: '6Ba4', display: '6Ba4' },
                { value: '6Ba5', display: '6Ba5' },
                { value: '6Ba6', display: '6Ba6' },
                { value: '6Ba7', display: '6Ba7' }
            ],
            '7': [
                { value: '7Ba1', display: '7Ba1' },
                { value: '7Ba2', display: '7Ba2' },
                { value: '7Ba3', display: '7Ba3' },
                { value: '7Ba4', display: '7Ba4' },
                { value: '7Ba5', display: '7Ba5' },
                { value: '7Ba6', display: '7Ba6' },
                { value: '7Ba7', display: '7Ba7' },
                { value: '7Ba8', display: '7Ba8' }
            ],
            '8': [
                { value: '8Ba1', display: '8Ba1' },
                { value: '8Ba2', display: '8Ba2' },
                { value: '8Ba3', display: '8Ba3' },
                { value: '8Ba4', display: '8Ba4' },
                { value: '8Ba5', display: '8Ba5' },
                { value: '8Ba6', display: '8Ba6' },
                { value: '8Ba7', display: '8Ba7' },
                { value: '8Ba8', display: '8Ba8' }
            ],
            '9': [
                { value: '9AM1', display: '9AM1' },
                { value: '9AM2', display: '9AM2' },
                { value: '9AM3', display: '9AM3' },
                { value: '9AM4', display: '9AM4' },
                { value: '9AM5', display: '9AM5' },
                { value: '9BR1', display: '9BR1' },
                { value: '9BR2', display: '9BR2' },
                { value: '9BR3', display: '9BR3' },
                { value: '9BR4', display: '9BR4' }
            ],
            '10': [
                { value: '10AM1', display: '10AM1' },
                { value: '10AM2', display: '10AM2' },
                { value: '10AM3', display: '10AM3' },
                { value: '10AM4', display: '10AM4' },
                { value: '10AM5', display: '10AM5' },
                { value: '10AM6', display: '10AM6' },
                { value: '10BR1', display: '10BR1' },
                { value: '10BR2', display: '10BR2' },
                { value: '10BR3', display: '10BR3' }
            ]
        };
        
        // Add class checkboxes for all selected grades
        selectedGrades.forEach(grade => {
            const classes = gradeClasses[grade] || [];
            classes.forEach(classInfo => {
                const checkboxLabel = document.createElement('label');
                checkboxLabel.className = 'checkbox-label';
                
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.name = 'teacherClasses';
                checkbox.value = classInfo.value;
                
                const span = document.createElement('span');
                span.textContent = classInfo.display;
                
                checkboxLabel.appendChild(checkbox);
                checkboxLabel.appendChild(span);
                teacherClassesContainer.appendChild(checkboxLabel);
            });
        });
    }

    async generateId(firstName, lastName, userType, grade = null, className = null, subject = null, teacherGrades = null, teacherClasses = null) {
        // Handle Arabic characters properly
        const firstLetter = this.getInitial(firstName);
        const lastLetter = this.getInitial(lastName);
        
        // Check if the name is Arabic to determine ID format
        const isArabicName = this.isArabic(firstLetter) || this.isArabic(lastLetter);
        
        let baseId;
        
        if (userType === 'teacher') {
            if (grade === 'Teacher') {
                // Multi-grade teacher: T + initials + grade count + class count
                const gradeCount = teacherGrades ? teacherGrades.length : 0;
                const classCount = teacherClasses ? teacherClasses.length : 0;
                baseId = `T${firstLetter}${lastLetter}${gradeCount}${classCount}`;
            } else {
                // Single grade teacher: T + initials + grade + section + class number (like students)
                let gradeNum, section, classNum;
                
                if (className && className.includes('CF') || className && className.includes('HK')) {
                    // Format: 9CF1, 10HK2, etc.
                    gradeNum = className.match(/^(\d+)/)[1];
                    section = className.includes('CF') ? 'CF' : 'HK';
                    classNum = className.match(/\d+$/)[0];
                } else if (className) {
                    // Format: 7CF1, 8CF2, etc.
                    gradeNum = className.match(/^(\d+)/)[1];
                    section = className.match(/[A-Z]+/)[0];
                    classNum = className.match(/\d+$/)[0];
                } else {
                    // Default for teachers without specific class
                    gradeNum = grade || '00';
                    section = 'GN';
                    classNum = '1';
                }
                
                // Handle missing section for grades 7-8
                if (!section) {
                    section = 'CF'; // Default section for grades 7-8
                }
                
                baseId = `T${firstLetter}${lastLetter}${gradeNum}${section}${classNum}`;
            }
        } else {
            // Student ID format: S + initials + grade + section + class number
            let gradeNum, section, classNum;
            
            if (className && className.includes('AM') || className && className.includes('BR')) {
                // Format: 9AM1, 10BR2, etc.
                gradeNum = className.match(/^(\d+)/)[1];
                section = className.includes('AM') ? 'AM' : 'BR';
                classNum = className.match(/\d+$/)[0];
            } else if (className) {
                // Format: 7CF1, 8CF2, etc.
                gradeNum = className.match(/^(\d+)/)[1];
                section = className.match(/[A-Z]+/)[0];
                classNum = className.match(/\d+$/)[0];
            } else {
                // Default for students without class
                gradeNum = grade || '00';
                section = 'GN';
                classNum = '1';
            }
            
            // Handle missing section for grades 7-8
            if (!section) {
                section = 'CF'; // Default section for grades 7-8
            }
            
            baseId = `S${firstLetter}${lastLetter}${gradeNum}${section}${classNum}`;
        }
        
        // Check for collisions and add random digit if needed
        let finalId = baseId;
        let attempts = 0;
        const maxAttempts = 10;
        
        console.log(`Checking for ID collisions starting with: ${baseId}`);
        
        // First check if base ID exists
        let exists = await this.idExists(finalId);
        console.log(`Base ID ${finalId} exists: ${exists}`);
        
        while (exists && attempts < maxAttempts) {
            const randomDigit = Math.floor(Math.random() * 10);
            finalId = baseId + randomDigit;
            attempts++;
            console.log(`Attempt ${attempts}: checking ${finalId}`);
            exists = await this.idExists(finalId);
            console.log(`ID ${finalId} exists: ${exists}`);
        }
        
        // If still collision after max attempts, use timestamp
        if (exists) {
            const timestamp = Date.now().toString().slice(-2);
            finalId = baseId + timestamp;
            console.log(`Max attempts reached, using timestamp: ${finalId}`);
        }
        
        console.log(`Final generated ID: ${finalId}`);
        return finalId;
    }

    getInitial(name) {
        if (!name || name.length === 0) return 'X';
        
        // Handle Arabic characters
        const firstChar = name.charAt(0);
        
        // If it's an Arabic character, convert to English equivalent
        if (this.isArabic(firstChar)) {
            return this.getArabicInitial(firstChar);
        }
        
        // For English characters, use uppercase
        return firstChar.toUpperCase();
    }
    
    isArabic(char) {
        const code = char.charCodeAt(0);
        return (code >= 0x0600 && code <= 0x06FF) || // Arabic
               (code >= 0x0750 && code <= 0x077F) || // Arabic Supplement
               (code >= 0x08A0 && code <= 0x08FF) || // Arabic Extended-A
               (code >= 0xFB50 && code <= 0xFDFF) || // Arabic Presentation Forms-A
               (code >= 0xFE70 && code <= 0xFEFF);   // Arabic Presentation Forms-B
    }
    
    getArabicInitial(char) {
        // Map common Arabic letters to English equivalents for ID generation
        const arabicMap = {
            'ا': 'A', 'أ': 'A', 'إ': 'A', 'آ': 'A',
            'ب': 'B', 'ت': 'T', 'ث': 'TH', 'ج': 'J',
            'ح': 'H', 'خ': 'KH', 'د': 'D', 'ذ': 'DH',
            'ر': 'R', 'ز': 'Z', 'س': 'S', 'ش': 'SH',
            'ص': 'S', 'ض': 'D', 'ط': 'T', 'ظ': 'Z',
            'ع': 'A', 'غ': 'GH', 'ف': 'F', 'ق': 'Q',
            'ك': 'K', 'ل': 'L', 'م': 'M', 'ن': 'N',
            'ه': 'H', 'و': 'W', 'ي': 'Y', 'ى': 'Y'
        };
        return arabicMap[char] || 'X';
    }

    getArabicSection(sectionCode) {
        const sectionMap = {
            'CF': 'ص',
            'AM': 'ام',
            'BR': 'بر',
            'HK': 'بر',
            'GN': 'ع'
        };
        return sectionMap[sectionCode] || sectionCode;
    }

    getSubjectCode(subject) {
        const subjectCodes = {
            'Quran Studies': 'QS',
            'Tajweed': 'TJ',
            'Memorization': 'MM',
            'Islamic Studies': 'IS'
        };
        return subjectCodes[subject] || 'GN';
    }

    refreshLocalData() {
        console.log('Refreshing local data from storage...');
        try {
            // Load from localStorage
            const localStudents = JSON.parse(localStorage.getItem('quranStudents') || '{}');
            const localTeachers = JSON.parse(localStorage.getItem('quranTeachers') || '{}');
            
            // Update local objects
            this.students = localStudents;
            this.teachers = localTeachers;
            
            console.log('Local data refreshed:', {
                students: Object.keys(this.students).length,
                teachers: Object.keys(this.teachers).length
            });
        } catch (error) {
            console.error('Error refreshing local data:', error);
        }
    }

    async idExists(id) {
        // Check both Firebase and local storage
        let existsInFirebase = false;
        let existsInLocal = false;
        
        // Check Firebase if available
        if (window.firebaseService) {
            try {
                existsInFirebase = await window.firebaseService.checkIdExists(id);
            } catch (error) {
                console.log('Firebase ID check failed, using local check only:', error);
            }
        }
        
        // Check local storage
        existsInLocal = this.students.hasOwnProperty(id) || this.teachers.hasOwnProperty(id);
        
        // Also check localStorage directly as backup
        const localStudents = JSON.parse(localStorage.getItem('quranStudents') || '{}');
        const localTeachers = JSON.parse(localStorage.getItem('quranTeachers') || '{}');
        const existsInLocalStorage = localStudents.hasOwnProperty(id) || localTeachers.hasOwnProperty(id);
        
        const exists = existsInFirebase || existsInLocal || existsInLocalStorage;
        console.log(`ID ${id} exists check:`, {
            firebase: existsInFirebase,
            local: existsInLocal,
            localStorage: existsInLocalStorage,
            final: exists
        });
        
        return exists;
    }

    validateForm(formData) {
        const errors = [];
        
        // Required fields
        if (!formData.userType) {
            errors.push(this.getTranslation('validation.required') + ': ' + this.getTranslation('signup.user_type'));
        }
        
        if (!formData.firstName.trim()) {
            errors.push(this.getTranslation('validation.required') + ': ' + this.getTranslation('signup.first_name'));
        }
        
        if (!formData.lastName.trim()) {
            errors.push(this.getTranslation('validation.required') + ': ' + this.getTranslation('signup.last_name'));
        }
        
        if (formData.userType === 'student') {
            if (!formData.grade) {
                errors.push(this.getTranslation('validation.required') + ': ' + this.getTranslation('signup.grade'));
            }
            
            if (!formData.className) {
                errors.push(this.getTranslation('validation.required') + ': ' + this.getTranslation('signup.class'));
            }
        }
        
        if (formData.userType === 'teacher') {
            if (!formData.grade) {
                errors.push(this.getTranslation('validation.required') + ': ' + this.getTranslation('signup.grade'));
            }
            
            if (formData.grade === 'Teacher') {
                // Multi-grade teacher validation
                const teacherGradesCheckboxes = document.querySelectorAll('input[name="teacherGrades"]:checked');
                const teacherClassesCheckboxes = document.querySelectorAll('input[name="teacherClasses"]:checked');
                
                if (teacherGradesCheckboxes.length === 0) {
                    errors.push(this.getTranslation('validation.required') + ': ' + this.getTranslation('signup.teacher_grades'));
                }
                
                if (teacherClassesCheckboxes.length === 0) {
                    errors.push(this.getTranslation('validation.required') + ': ' + this.getTranslation('signup.teacher_classes'));
                }
            } else {
                // Single grade teacher validation
                if (!formData.className) {
                    errors.push(this.getTranslation('validation.required') + ': ' + this.getTranslation('signup.class'));
                }
            }
        }
        
        // Email and phone validation removed - no longer required fields
        
        return errors;
    }

    isValidEmail(email) {
        // Accept any valid email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    isValidPhone(phone) {
        // Saudi phone number validation (basic)
        const phoneRegex = /^(\+966|966|0)?[5][0-9]{8}$/;
        const cleanPhone = phone.replace(/[\s-]/g, '');
        return phoneRegex.test(cleanPhone);
    }

    emailExists(email) {
        return Object.values(this.students).some(student => student.email === email) ||
               Object.values(this.teachers).some(teacher => teacher.email === email);
    }

    phoneExists(phone) {
        const cleanPhone = phone.replace(/[\s-]/g, '');
        return Object.values(this.students).some(student => student.phone && student.phone.replace(/[\s-]/g, '') === cleanPhone) ||
               Object.values(this.teachers).some(teacher => teacher.phone && teacher.phone.replace(/[\s-]/g, '') === cleanPhone);
    }

    async handleSignup(e) {
        e.preventDefault();
        
        console.log('=== SIGNUP FORM SUBMITTED ===');
        console.log('isCreatingAccount flag:', this.isCreatingAccount);
        
        // Prevent multiple submissions
        if (this.isCreatingAccount) {
            console.log('❌ Account creation already in progress, ignoring duplicate submission');
            return;
        }
        
        this.isCreatingAccount = true;
        console.log('✅ Account creation started, flag set to true');
        
        // Remove event listener temporarily to prevent multiple submissions
        const signupForm = document.getElementById('signupForm');
        if (signupForm) {
            signupForm.removeEventListener('submit', this.boundHandleSignup);
            console.log('Event listener removed temporarily');
        }
        
        // Show loading overlay
        this.showLoading();
        
        // Show loading state
        const submitBtn = document.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Creating Account...';
        submitBtn.disabled = true;
        
        console.log('Submit button state:', {
            disabled: submitBtn.disabled,
            text: submitBtn.textContent,
            originalText: originalText
        });
        
        try {
            // Get form data
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                userType: document.getElementById('userType').value,
                grade: document.getElementById('grade').value,
                className: document.getElementById('class').value
            };
            
            console.log('Form data collected:', formData);
            
            // Validate form
            const errors = this.validateForm(formData);
            if (errors.length > 0) {
                console.log('Validation errors:', errors.join('\n'));
                this.hideLoading();
                // Reset button state
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                return;
            }
            
            // Get teacher-specific data if applicable
            let teacherGrades = null;
            let teacherClasses = null;
            
            if (formData.userType === 'teacher' && formData.grade === 'Teacher') {
                const teacherGradesCheckboxes = document.querySelectorAll('input[name="teacherGrades"]:checked');
                const teacherClassesCheckboxes = document.querySelectorAll('input[name="teacherClasses"]:checked');
                
                teacherGrades = Array.from(teacherGradesCheckboxes).map(checkbox => checkbox.value);
                teacherClasses = Array.from(teacherClassesCheckboxes).map(checkbox => checkbox.value);
            }
            
            // Generate ID based on user type
            console.log('Generating ID with data:', {
                firstName: formData.firstName,
                lastName: formData.lastName,
                userType: formData.userType,
                grade: formData.grade,
                className: formData.className,
                teacherGrades,
                teacherClasses
            });
            
            const userId = await this.generateId(
                formData.firstName, 
                formData.lastName, 
                formData.userType,
                formData.grade,
                formData.className,
                null, // No subject field anymore
                teacherGrades,
                teacherClasses
            );
            
            console.log('Generated user ID:', userId);
            
            // Check if user already exists
            console.log('Checking if user already exists...');
            
            // Refresh local data from storage before checking
            this.refreshLocalData();
            
            // Check if the generated ID already exists
            const idExists = await this.idExists(userId);
            if (idExists) {
                this.hideLoading();
                console.log('Account with this ID already exists:', userId);
                return;
            }
            console.log('User ID is unique, proceeding with account creation...');
            
            // Create user record
            console.log('Creating user data object...');
            const userData = {
                id: userId,
                name: `${formData.firstName} ${formData.lastName}`,
                firstName: formData.firstName,
                lastName: formData.lastName,
                createdAt: new Date().toISOString(),
                type: formData.userType
            };
            console.log('User data object created:', userData);
            
            if (formData.userType === 'student') {
                console.log('Setting up student data...');
                userData.class = formData.className;
                userData.grade = formData.grade;
                userData.teacher = null; // Will be assigned later
                console.log('Student data configured:', userData);
            } else {
                console.log('Setting up teacher data...');
                userData.subject = 'Quran Studies'; // Default subject for teachers
                userData.students = []; // Will be assigned later
                
                if (formData.grade === 'Teacher') {
                    // Multi-grade teacher
                    userData.teacherGrades = teacherGrades;
                    userData.teacherClasses = teacherClasses;
                    userData.grade = 'Teacher';
                    console.log('Multi-grade teacher data configured:', userData);
                } else {
                    // Single grade teacher
                    userData.class = formData.className;
                    userData.grade = formData.grade;
                    console.log('Single grade teacher data configured:', userData);
                }
            }
            
            // Save to Firebase/storage
            console.log('Starting save process...');
            if (window.firebaseService) {
                console.log('Firebase service available, saving to Firebase...');
                try {
                    if (formData.userType === 'student') {
                        console.log('Creating student in Firebase...');
                        await window.firebaseService.createStudent(userData);
                        console.log('Student saved to Firebase successfully:', userId);
                    } else {
                        console.log('Creating teacher in Firebase...');
                        await window.firebaseService.createTeacher(userData);
                        console.log('Teacher saved to Firebase successfully:', userId);
                    }
                } catch (firebaseError) {
                    console.error('Firebase save failed:', firebaseError);
                    console.log('Falling back to localStorage...');
                    if (formData.userType === 'student') {
                        this.students[userId] = userData;
                        localStorage.setItem('quranStudents', JSON.stringify(this.students));
                        console.log('Student saved to localStorage:', userId);
                    } else {
                        this.teachers[userId] = userData;
                        localStorage.setItem('quranTeachers', JSON.stringify(this.teachers));
                        console.log('Teacher saved to localStorage:', userId);
                    }
                }
            } else {
                // Fallback to localStorage
                console.log('Saving to localStorage...');
                if (formData.userType === 'student') {
                    this.students[userId] = userData;
                    localStorage.setItem('quranStudents', JSON.stringify(this.students));
                    console.log('Student saved to localStorage:', userId);
                } else {
                    this.teachers[userId] = userData;
                    localStorage.setItem('quranTeachers', JSON.stringify(this.teachers));
                    console.log('Teacher saved to localStorage:', userId);
                }
                
                // Also update the main sampleData if available
                if (typeof sampleData !== 'undefined') {
                    if (formData.userType === 'student') {
                        sampleData.students[userId] = userData;
                    } else {
                        sampleData.teachers[userId] = userData;
                    }
                    localStorage.setItem('sampleData', JSON.stringify(sampleData));
                }
            }
            
            // Email/SMS features disabled for now - just show ID
            console.log('📧 Email feature ready but disabled');
            console.log('📱 SMS feature ready but disabled');
            console.log('🎯 Focus: Display ID prominently to user');
            console.log('Generated ID:', userId);
            
            console.log('About to show success message...');
            // Show success message with ID on the same page
            this.showSuccess(userId);
            console.log('Success message should be displayed now');
            
        } catch (error) {
            console.error('Signup error:', error);
            this.hideLoading();
            console.log('Account creation failed');
        } finally {
            // Reset button state and flag
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            this.isCreatingAccount = false;
            
            // Re-add event listener
            const signupForm = document.getElementById('signupForm');
            if (signupForm) {
                signupForm.addEventListener('submit', this.boundHandleSignup);
                console.log('Event listener re-added');
            }
        }
    }

    async sendNotification(studentData, method) {
        switch (method) {
            case 'email':
                await this.sendWelcomeEmail(studentData);
                this.showNotification(this.getTranslation('notification.email_sent'));
                break;
        }
    }

    async sendWelcomeEmail(studentData) {
        // Use the email service if available
        if (window.emailService) {
            console.log('📧 Using email service to send welcome email');
            return await window.emailService.sendWelcomeEmail(studentData);
        } else {
            // Fallback simulation
            console.log('⚠️ Email service not available, using fallback');
            console.log('📧 Sending welcome email to:', studentData.email);
            console.log('Student ID:', studentData.id);
            
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log('✅ Email sent successfully (simulated)');
                    resolve();
                }, 1000);
            });
        }
    }

    async sendWelcomeSMS(studentData) {
        // Use the SMS service if available
        if (window.smsService) {
            console.log('📱 Using SMS service to send welcome SMS');
            return await window.smsService.sendWelcomeSMS(studentData);
        } else {
            // Fallback simulation
            console.log('⚠️ SMS service not available, using fallback');
            console.log('📱 Sending welcome SMS to:', studentData.phone);
            console.log('Student ID:', studentData.id);
            
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log('✅ SMS sent successfully');
                    resolve();
                }, 1000);
            });
        }
    }

    handleLogin(e) {
        e.preventDefault();
        console.log('Signup.js handleLogin called');
        
        const userCode = document.getElementById('userCode').value.trim().toUpperCase();
        console.log('User code entered:', userCode);
        
        if (!userCode) {
            console.log('No user code entered');
            return;
        }
        
        console.log('User code found, proceeding with login...');
        
        // Show loading state
        const submitBtn = document.querySelector('#loginForm .submit-btn');
        if (submitBtn) {
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Logging in...';
            submitBtn.disabled = true;
            
            // Reset button after 3 seconds if no redirect happens
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 3000);
        }
        
        // Prevent any error popups from showing
        console.log('Login process started, no error popups should appear');
        
        // Load existing data from localStorage to check against
        this.loadExistingData();
        
        // Check if it's admin login - use correct admin code
        if (userCode === 'ADMINYNG9') {
            console.log('Admin login detected, setting session and redirecting');
            localStorage.setItem('quranUser', userCode);
            localStorage.setItem('quranUserType', 'admin');
            // Clear the form to prevent resubmission
            document.getElementById('userCode').value = '';
            // Redirect to main dashboard instead of index.html
            window.location.href = 'index.html';
            return;
        }
        
        // Check students and teachers data from both localStorage and sampleData
        let foundUser = null;
        let userType = null;
        
        console.log('Checking students:', Object.keys(this.students));
        console.log('Checking teachers:', Object.keys(this.teachers));
        console.log('Looking for user code:', userCode);
        
        // Check in students
        if (this.students[userCode]) {
            foundUser = this.students[userCode];
            userType = 'student';
            console.log('Found student:', foundUser);
        }
        // Check in teachers
        else if (this.teachers[userCode]) {
            foundUser = this.teachers[userCode];
            userType = 'teacher';
            console.log('Found teacher:', foundUser);
        }
        
        if (foundUser) {
            console.log(`${userType} login successful`);
            localStorage.setItem('quranUser', userCode);
            localStorage.setItem('quranUserType', userType);
            // Clear the form to prevent resubmission
            document.getElementById('userCode').value = '';
            window.location.href = 'index.html';
            return;
        }
        
        console.log('Login failed - invalid code');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Only initialize if not already initialized
    if (!window.signupManager) {
        console.log('Initializing SignupManager from signup.js...');
        window.signupManager = new SignupManager();
    } else {
        console.log('SignupManager already exists, skipping initialization from signup.js');
    }
});

// Make updateClassOptions available globally for the onchange event
window.updateClassOptions = function() {
    if (window.signupManager) {
        window.signupManager.updateClassOptions();
    }
};

window.updateTeacherClassOptions = function() {
    if (window.signupManager) {
        window.signupManager.updateTeacherClassOptions();
    }
};
