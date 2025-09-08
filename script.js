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

// Language translations
const translations = {
    en: {
        // Login
        'login.title': 'MRIS Quran Program',
        'login.subtitle': 'Enter your unique code to access the MRIS Quran program',
        'login.placeholder': 'Enter your unique code',
        'login.button': 'Login',
        'login.invalid': 'Invalid user code. Please try again.',
        
        // Header
        'header.logout': 'Logout',
        'header.administrator': 'Administrator',
        'header.teacher': 'Teacher',
        'header.dashboard_mode': 'Dashboard Mode',
        'header.editing_student': 'Editing Student',
        
        // Content
        'content.next_hifz': 'Next Session\'s Hifz',
        'content.next_revision': 'Next Session\'s Revision',
        'content.past_sessions': 'Past Sessions',
        'content.no_content': 'No content assigned',
        'content.no_sessions': 'No sessions recorded',
        'content.select_student': 'Select a student to edit their content',
        
        // Modals
        'modal.add_hifz': 'Add Hifz Content',
        'modal.add_revision': 'Add Revision Content',
        'modal.add_session': 'Add Session',
        'modal.surah_name': 'Surah Name',
        'modal.select_surah': 'Select Surah',
        'modal.ayah_range': 'Ayah Range',
        'modal.ayah_placeholder': 'e.g., 1 - 25',
        'modal.date': 'Date',
        'modal.grade': 'Grade',
        'modal.select_grade': 'Select Grade',
        'modal.add': 'Add',
        'modal.cancel': 'Cancel',
        'modal.close': 'Close',
        
        // Admin
        'admin.system_administration': 'System Administration',
        'admin.create_account': 'Create New Account',
        'admin.assign_students': 'Assign Students to Teachers',
        'admin.system_stats': 'System Statistics',
        'admin.delete_student': 'Delete Individual Student',
        'admin.delete_teacher': 'Delete Individual Teacher',
        'admin.delete_all_teachers': 'Delete All Teachers',
        'admin.delete_all_students': 'Delete All Students',
        
        // Notifications
        'notification.welcome': 'Welcome back',
        'notification.logged_out': 'Logged out successfully',
        'notification.hifz_added': 'Hifz content added successfully!',
        'notification.revision_added': 'Revision content added successfully!',
        'notification.session_added': 'Session added successfully!',
        'notification.content_deleted': 'Content deleted successfully!',
        'notification.session_deleted': 'Session deleted successfully!',
        'notification.data_saved': 'Data saved to cloud successfully!',
        'notification.error_saving': 'Error saving to cloud',
        'notification.error_loading': 'Error loading from cloud',
        'notification.language_changed': 'Language changed to',
        'notification.dashboard_activated': 'Dashboard mode activated. Add buttons are now visible.',
        'notification.no_student_selected': 'No student selected',
        'notification.fill_all_fields': 'Please fill in all fields',
        'notification.please_enter_code': 'Please enter a user code',
        'notification.arabic': 'Arabic',
        'notification.english': 'English',
        
        // Form validation
        'validation.required': 'This field is required',
        'validation.invalid_format': 'Invalid format',
        'validation.select_option': 'Please select an option',
        
        // Student selection
        'student.no_students_assigned': 'No Students Assigned',
        'student.no_students_message': 'You don\'t have any students assigned to you yet.',
        'student.skip_to_dashboard': 'Skip to Dashboard',
        'student.dashboard_note': 'You can still view the dashboard and add buttons will be visible',
        'student.select_student': 'Select Student',
        
        // Empty states
        'empty.no_student_selected': 'No Student Selected',
        'empty.select_student_message': 'Select a student to manage their content, or use the + button to add content.',
        
        // Session form labels
        'session.hifz_surahs': 'Hifz Surah(s) & Ayah Numbers:',
        'session.revision_surahs': 'Revision Surah(s) & Ayah Numbers:',
        'session.hifz_placeholder': 'e.g., Al Naba 1-25, Al Mursalat 1-15',
        'session.revision_placeholder': 'e.g., Al Naba 1-25',
        
        // Admin specific
        'admin.back_to_login': '← Back to Login',
        'admin.no_assignments': 'No students assigned to teachers yet.',
        'admin.choose_teacher': 'Choose a teacher...',
        'admin.choose_student': 'Choose a student...',
        'admin.choose_teacher_first': 'Choose a teacher first...',
        'admin.no_unassigned': 'No unassigned students available',
        'admin.select_teacher': 'Select Teacher:',
        'admin.select_student': 'Select Student:',
        'admin.assign_student': 'Assign Student',
        'admin.current_assignments': 'Current Assignments',
        'admin.remove': 'Remove',
        'admin.are_you_sure': 'Are you sure you want to remove this assignment?',
        'admin.assignment_removed': 'Student assignment removed successfully!',
        'admin.student_assigned': 'Student assigned to teacher successfully!',
        'admin.select_both': 'Please select both a teacher and a student',
        
        // Delete confirmations
        'delete.student_title': 'Delete Student',
        'delete.teacher_title': 'Delete Teacher',
        'delete.select_student': 'Select a student to delete from the system.',
        'delete.select_teacher': 'Select a teacher to delete from the system.',
        'delete.choose_student': 'Choose a student...',
        'delete.choose_teacher': 'Choose a teacher...',
        'delete.student_info': 'Student Information',
        'delete.teacher_info': 'Teacher Information',
        'delete.name': 'Name:',
        'delete.class': 'Class:',
        'delete.teacher': 'Teacher:',
        'delete.content_items': 'Content Items:',
        'delete.assigned_students': 'Assigned Students:',
        'delete.impact': 'Impact:',
        'delete.confirm_delete_student': 'Delete Student',
        'delete.confirm_delete_teacher': 'Delete Teacher',
        'delete.cancel': 'Cancel',
        
        // Account creation
        'account.create_title': 'Create New Account',
        'account.account_type': 'Account Type',
        'account.select_type': 'Select Account Type',
        'account.student': 'Student',
        'account.teacher': 'Teacher',
        'account.first_name': 'First Name',
        'account.last_name': 'Last Name',
        'account.grade': 'Grade',
        'account.select_grade': 'Select Grade',
        'account.class': 'Class',
        'account.select_class': 'Select Class',
        'account.select_grade_first': 'Select Grade First',
        'account.teacher_name': 'Teacher Name (Optional)',
        'account.leave_unassigned': 'Leave unassigned',
        'account.grade_7': 'Grade 7',
        'account.grade_8': 'Grade 8',
        'account.grade_9': 'Grade 9',
        'account.grade_10': 'Grade 10',
        
        // Account created success
        'account.created_success': 'Account Created Successfully!',
        'account.account_type_label': 'Account Type:',
        'account.name_label': 'Name:',
        'account.class_label': 'Class:',
        'account.unique_id': 'Unique ID:',
        'account.important_note': 'Important:',
        'account.share_id': 'Please share this ID with the user. They will need it to log in.',
        
        // System stats
        'stats.system_overview': 'System Overview',
        'stats.students': 'Students',
        'stats.teachers': 'Teachers',
        'stats.content_items': 'Content Items',
        'stats.assignments': 'Assignments',
        'stats.assignment_details': 'Assignment Details',
        'stats.user_ids': 'User IDs',
        'stats.no_impact': 'No impact on students',
        'stats.will_affect': 'Will affect:',
        'stats.no_students_assigned': 'No students assigned',
        'stats.one_student_assigned': '1 student assigned',
        'stats.students_assigned': 'students assigned',
        
        // Logout confirmation
        'logout.confirm_title': 'Confirm Logout',
        'logout.are_you_sure': 'Are you sure you want to log out?',
        'logout.warning': 'This will end your current session.',
        'logout.yes_logout': 'Yes, Logout',
        'logout.cancel': 'Cancel',
        
        // Time
        'time.morning': 'morning',
        'time.afternoon': 'afternoon',
        'time.evening': 'evening'
    },
    ar: {
        // Login
        'login.title': 'برنامج القرآن الكريم - MRIS',
        'login.subtitle': 'أدخل الرمز الخاص بك للوصول إلى برنامج القرآن الكريم',
        'login.placeholder': 'أدخل الرمز الخاص بك',
        'login.button': 'دخول',
        'login.invalid': 'رمز المستخدم غير صحيح. يرجى المحاولة مرة أخرى.',
        
        // Header
        'header.logout': 'تسجيل الخروج',
        'header.administrator': 'مدير النظام',
        'header.teacher': 'معلم',
        'header.dashboard_mode': 'وضع لوحة التحكم',
        'header.editing_student': 'تعديل الطالب',
        
        // Content
        'content.next_hifz': 'حفظ الجلسة القادمة',
        'content.next_revision': 'مراجعة الجلسة القادمة',
        'content.past_sessions': 'الجلسات السابقة',
        'content.no_content': 'لا يوجد محتوى مخصص',
        'content.no_sessions': 'لا توجد جلسات مسجلة',
        'content.select_student': 'اختر طالباً لتعديل محتواه',
        
        // Modals
        'modal.add_hifz': 'إضافة محتوى الحفظ',
        'modal.add_revision': 'إضافة محتوى المراجعة',
        'modal.add_session': 'إضافة جلسة',
        'modal.surah_name': 'اسم السورة',
        'modal.select_surah': 'اختر السورة',
        'modal.ayah_range': 'نطاق الآيات',
        'modal.ayah_placeholder': 'مثال: 1 - 25',
        'modal.date': 'التاريخ',
        'modal.grade': 'الدرجة',
        'modal.select_grade': 'اختر الدرجة',
        'modal.add': 'إضافة',
        'modal.cancel': 'إلغاء',
        'modal.close': 'إغلاق',
        
        // Admin
        'admin.system_administration': 'إدارة النظام',
        'admin.create_account': 'إنشاء حساب جديد',
        'admin.assign_students': 'تعيين الطلاب للمعلمين',
        'admin.system_stats': 'إحصائيات النظام',
        'admin.delete_student': 'حذف طالب فردي',
        'admin.delete_teacher': 'حذف معلم فردي',
        'admin.delete_all_teachers': 'حذف جميع المعلمين',
        'admin.delete_all_students': 'حذف جميع الطلاب',
        
        // Notifications
        'notification.welcome': 'مرحباً بعودتك',
        'notification.logged_out': 'تم تسجيل الخروج بنجاح',
        'notification.hifz_added': 'تم إضافة محتوى الحفظ بنجاح!',
        'notification.revision_added': 'تم إضافة محتوى المراجعة بنجاح!',
        'notification.session_added': 'تم إضافة الجلسة بنجاح!',
        'notification.content_deleted': 'تم حذف المحتوى بنجاح!',
        'notification.session_deleted': 'تم حذف الجلسة بنجاح!',
        'notification.data_saved': 'تم حفظ البيانات في السحابة بنجاح!',
        'notification.error_saving': 'خطأ في حفظ البيانات في السحابة',
        'notification.error_loading': 'خطأ في تحميل البيانات من السحابة',
        'notification.language_changed': 'تم تغيير اللغة إلى',
        'notification.dashboard_activated': 'تم تفعيل وضع لوحة التحكم. أزرار الإضافة مرئية الآن.',
        'notification.no_student_selected': 'لم يتم اختيار طالب',
        'notification.fill_all_fields': 'يرجى ملء جميع الحقول',
        'notification.please_enter_code': 'يرجى إدخال رمز المستخدم',
        'notification.arabic': 'العربية',
        'notification.english': 'الإنجليزية',
        
        // Form validation
        'validation.required': 'هذا الحقل مطلوب',
        'validation.invalid_format': 'تنسيق غير صحيح',
        'validation.select_option': 'يرجى اختيار خيار',
        
        // Student selection
        'student.no_students_assigned': 'لا يوجد طلاب مخصصين',
        'student.no_students_message': 'ليس لديك أي طلاب مخصصين لك بعد.',
        'student.skip_to_dashboard': 'تخطي إلى لوحة التحكم',
        'student.dashboard_note': 'يمكنك仍然 مشاهدة لوحة التحكم وأزرار الإضافة ستكون مرئية',
        'student.select_student': 'اختر طالباً',
        
        // Empty states
        'empty.no_student_selected': 'لم يتم اختيار طالب',
        'empty.select_student_message': 'اختر طالباً لإدارة محتواه، أو استخدم زر + لإضافة محتوى.',
        
        // Session form labels
        'session.hifz_surahs': 'سور الحفظ وأرقام الآيات:',
        'session.revision_surahs': 'سور المراجعة وأرقام الآيات:',
        'session.hifz_placeholder': 'مثال: النبأ 1-25، المرسلات 1-15',
        'session.revision_placeholder': 'مثال: النبأ 1-25',
        
        // Admin specific
        'admin.back_to_login': '← العودة إلى تسجيل الدخول',
        'admin.no_assignments': 'لا يوجد طلاب مخصصين للمعلمين بعد.',
        'admin.choose_teacher': 'اختر معلماً...',
        'admin.choose_student': 'اختر طالباً...',
        'admin.choose_teacher_first': 'اختر معلماً أولاً...',
        'admin.no_unassigned': 'لا يوجد طلاب غير مخصصين متاحين',
        'admin.select_teacher': 'اختر المعلّم:',
        'admin.select_student': 'اختر الطالب:',
        'admin.assign_student': 'تعيين الطالب',
        'admin.current_assignments': 'التعيينات الحالية',
        'admin.remove': 'إزالة',
        'admin.are_you_sure': 'هل أنت متأكد من إزالة هذا التعيين؟',
        'admin.assignment_removed': 'تم إزالة تعيين الطالب بنجاح!',
        'admin.student_assigned': 'تم تعيين الطالب للمعلم بنجاح!',
        'admin.select_both': 'يرجى اختيار المعلم والطالب',
        
        // Delete confirmations
        'delete.student_title': 'حذف الطالب',
        'delete.teacher_title': 'حذف المعلم',
        'delete.select_student': 'اختر طالباً لحذفه من النظام.',
        'delete.select_teacher': 'اختر معلماً لحذفه من النظام.',
        'delete.choose_student': 'اختر طالباً...',
        'delete.choose_teacher': 'اختر معلماً...',
        'delete.student_info': 'معلومات الطالب',
        'delete.teacher_info': 'معلومات المعلم',
        'delete.name': 'الاسم:',
        'delete.class': 'الصف:',
        'delete.teacher': 'المعلم:',
        'delete.content_items': 'عناصر المحتوى:',
        'delete.assigned_students': 'الطلاب المخصصين:',
        'delete.impact': 'التأثير:',
        'delete.confirm_delete_student': 'حذف الطالب',
        'delete.confirm_delete_teacher': 'حذف المعلم',
        'delete.cancel': 'إلغاء',
        
        // Account creation
        'account.create_title': 'إنشاء حساب جديد',
        'account.account_type': 'نوع الحساب',
        'account.select_type': 'اختر نوع الحساب',
        'account.student': 'طالب',
        'account.teacher': 'معلم',
        'account.first_name': 'الاسم الأول',
        'account.last_name': 'الاسم الأخير',
        'account.grade': 'الصف',
        'account.select_grade': 'اختر الصف',
        'account.class': 'الفصل',
        'account.select_class': 'اختر الفصل',
        'account.select_grade_first': 'اختر الصف أولاً',
        'account.teacher_name': 'اسم المعلم (اختياري)',
        'account.leave_unassigned': 'اترك غير مخصص',
        'account.grade_7': 'الصف السابع',
        'account.grade_8': 'الصف الثامن',
        'account.grade_9': 'الصف التاسع',
        'account.grade_10': 'الصف العاشر',
        
        // Account created success
        'account.created_success': 'تم إنشاء الحساب بنجاح!',
        'account.account_type_label': 'نوع الحساب:',
        'account.name_label': 'الاسم:',
        'account.class_label': 'الفصل:',
        'account.unique_id': 'المعرف الفريد:',
        'account.important_note': 'مهم:',
        'account.share_id': 'يرجى مشاركة هذا المعرف مع المستخدم. سيحتاجه لتسجيل الدخول.',
        
        // System stats
        'stats.system_overview': 'نظرة عامة على النظام',
        'stats.students': 'الطلاب',
        'stats.teachers': 'المعلمون',
        'stats.content_items': 'عناصر المحتوى',
        'stats.assignments': 'التعيينات',
        'stats.assignment_details': 'تفاصيل التعيينات',
        'stats.user_ids': 'معرفات المستخدمين',
        'stats.no_impact': 'لا تأثير على الطلاب',
        'stats.will_affect': 'سيؤثر على:',
        'stats.no_students_assigned': 'لا يوجد طلاب مخصصين',
        'stats.one_student_assigned': 'طالب واحد مخصص',
        'stats.students_assigned': 'طلاب مخصصين',
        
        // Logout confirmation
        'logout.confirm_title': 'تأكيد تسجيل الخروج',
        'logout.are_you_sure': 'هل أنت متأكد من تسجيل الخروج؟',
        'logout.warning': 'هذا سينهي جلستك الحالية.',
        'logout.yes_logout': 'نعم، تسجيل الخروج',
        'logout.cancel': 'إلغاء',
        
        // Time
        'time.morning': 'صباحاً',
        'time.afternoon': 'بعد الظهر',
        'time.evening': 'مساءً',
        
        // Surah Names
        'surah.al_fatiha': 'الفاتحة',
        'surah.al_baqarah': 'البقرة',
        'surah.al_imran': 'آل عمران',
        'surah.an_nisa': 'النساء',
        'surah.al_maidah': 'المائدة',
        'surah.al_anam': 'الأنعام',
        'surah.al_araf': 'الأعراف',
        'surah.al_anfal': 'الأنفال',
        'surah.at_tawbah': 'التوبة',
        'surah.yunus': 'يونس',
        'surah.hud': 'هود',
        'surah.yusuf': 'يوسف',
        'surah.ar_rad': 'الرعد',
        'surah.ibrahim': 'إبراهيم',
        'surah.al_hijr': 'الحجر',
        'surah.an_nahl': 'النحل',
        'surah.al_isra': 'الإسراء',
        'surah.al_kahf': 'الكهف',
        'surah.maryam': 'مريم',
        'surah.ta_ha': 'طه',
        'surah.al_anbiya': 'الأنبياء',
        'surah.al_hajj': 'الحج',
        'surah.al_muminun': 'المؤمنون',
        'surah.an_nur': 'النور',
        'surah.al_furqan': 'الفرقان',
        'surah.ash_shuara': 'الشعراء',
        'surah.an_naml': 'النمل',
        'surah.al_qasas': 'القصص',
        'surah.al_ankabut': 'العنكبوت',
        'surah.ar_rum': 'الروم',
        'surah.luqman': 'لقمان',
        'surah.as_sajdah': 'السجدة',
        'surah.al_ahzab': 'الأحزاب',
        'surah.saba': 'سبأ',
        'surah.fatir': 'فاطر',
        'surah.ya_sin': 'يس',
        'surah.as_saffat': 'الصافات',
        'surah.sad': 'ص',
        'surah.az_zumar': 'الزمر',
        'surah.ghafir': 'غافر',
        'surah.fussilat': 'فصلت',
        'surah.ash_shura': 'الشورى',
        'surah.az_zukhruf': 'الزخرف',
        'surah.ad_dukhan': 'الدخان',
        'surah.al_jathiyah': 'الجاثية',
        'surah.al_ahqaf': 'الأحقاف',
        'surah.muhammad': 'محمد',
        'surah.al_fath': 'الفتح',
        'surah.al_hujurat': 'الحجرات',
        'surah.qaf': 'ق',
        'surah.adh_dhariyat': 'الذاريات',
        'surah.at_tur': 'الطور',
        'surah.an_najm': 'النجم',
        'surah.al_qamar': 'القمر',
        'surah.ar_rahman': 'الرحمن',
        'surah.al_waqiah': 'الواقعة',
        'surah.al_hadid': 'الحديد',
        'surah.al_mujadilah': 'المجادلة',
        'surah.al_hashr': 'الحشر',
        'surah.al_mumtahanah': 'الممتحنة',
        'surah.as_saff': 'الصف',
        'surah.al_jumuah': 'الجمعة',
        'surah.al_munafiqun': 'المنافقون',
        'surah.at_taghabun': 'التغابن',
        'surah.at_talaq': 'الطلاق',
        'surah.at_tahrim': 'التحريم',
        'surah.al_mulk': 'الملك',
        'surah.al_qalam': 'القلم',
        'surah.al_haqqah': 'الحاقة',
        'surah.al_maarij': 'المعارج',
        'surah.nuh': 'نوح',
        'surah.al_jinn': 'الجن',
        'surah.al_muzzammil': 'المزمل',
        'surah.al_muddathir': 'المدثر',
        'surah.al_qiyamah': 'القيامة',
        'surah.al_insan': 'الإنسان',
        'surah.al_mursalat': 'المرسلات',
        'surah.an_naba': 'النبأ',
        'surah.an_naziat': 'النازعات',
        'surah.abasa': 'عبس',
        'surah.at_takwir': 'التكوير',
        'surah.al_infitar': 'الانفطار',
        'surah.al_mutaffifin': 'المطففين',
        'surah.al_inshiqaq': 'الانشقاق',
        'surah.al_buruj': 'البروج',
        'surah.at_tariq': 'الطارق',
        'surah.al_ala': 'الأعلى',
        'surah.al_ghashiyah': 'الغاشية',
        'surah.al_fajr': 'الفجر',
        'surah.al_balad': 'البلد',
        'surah.ash_shams': 'الشمس',
        'surah.al_lail': 'الليل',
        'surah.ad_duha': 'الضحى',
        'surah.ash_sharh': 'الشرح',
        'surah.at_tin': 'التين',
        'surah.al_alaq': 'العلق',
        'surah.al_qadr': 'القدر',
        'surah.al_bayyinah': 'البينة',
        'surah.az_zalzalah': 'الزلزلة',
        'surah.al_adiyat': 'العاديات',
        'surah.al_qariah': 'القارعة',
        'surah.at_takathur': 'التكاثر',
        'surah.al_asr': 'العصر',
        'surah.al_humazah': 'الهمزة',
        'surah.al_fil': 'الفيل',
        'surah.quraish': 'قريش',
        'surah.al_maun': 'الماعون',
        'surah.al_kawthar': 'الكوثر',
        'surah.al_kafirun': 'الكافرون',
        'surah.an_nasr': 'النصر',
        'surah.al_masad': 'المسد',
        'surah.al_ikhlas': 'الإخلاص',
        'surah.al_falaq': 'الفلق',
        'surah.an_nas': 'الناس'
    }
};

// Global variables
let currentUser = null;
let currentUserType = null;
let currentTeacher = null; // Track the original teacher when editing students
let editingStudent = null; // Track which student teacher is editing
let currentLanguage = 'en'; // Current language: 'en' or 'ar'

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

// Language management functions
function getTranslation(key) {
    return translations[currentLanguage][key] || key;
}

function setLanguage(lang) {
    currentLanguage = lang;
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
        languageToggle.classList.toggle('active', lang === 'ar');
    }
    
    // Update all text elements
    updateUITexts();
}

function updateUITexts() {
    // Update login form
    const loginTitle = document.querySelector('.login-card h2');
    const loginSubtitle = document.querySelector('.login-card p');
    const loginInput = document.getElementById('userCode');
    const loginButton = document.querySelector('.login-btn');
    
    if (loginTitle) loginTitle.textContent = getTranslation('login.title');
    if (loginSubtitle) loginSubtitle.textContent = getTranslation('login.subtitle');
    if (loginInput) loginInput.placeholder = getTranslation('login.placeholder');
    if (loginButton) loginButton.textContent = getTranslation('login.button');
    
    // Update header
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.textContent = getTranslation('header.logout');
    
    // Update content cards
    const hifzCard = document.querySelector('.hifz-card h3');
    const revisionCard = document.querySelector('.revision-card h3');
    const sessionsCard = document.querySelector('.past-sessions-card h3');
    
    if (hifzCard) hifzCard.textContent = getTranslation('content.next_hifz');
    if (revisionCard) revisionCard.textContent = getTranslation('content.next_revision');
    if (sessionsCard) sessionsCard.textContent = getTranslation('content.past_sessions');
    
    // Update elements with data-translate attributes
    updateDataTranslateElements();
    
    // Update modal titles and labels
    updateModalTexts();
    
    // Update admin dashboard if visible
    if (currentUserType === 'admin') {
        updateAdminTexts();
    }
}

function updateDataTranslateElements() {
    // Update elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = getTranslation(key);
    });
    
    // Update elements with data-translate-placeholder attribute
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        element.placeholder = getTranslation(key);
    });
}

function updateModalTexts() {
    // Add Hifz Modal
    const addHifzModal = document.getElementById('addHifzModal');
    if (addHifzModal) {
        const title = addHifzModal.querySelector('h3');
        const surahLabel = addHifzModal.querySelector('label[for="hifzSurah"]');
        const ayahLabel = addHifzModal.querySelector('label[for="hifzAyahRange"]');
        const addBtn = addHifzModal.querySelector('.btn-primary');
        const cancelBtn = addHifzModal.querySelector('.btn-secondary');
        
        if (title) title.textContent = getTranslation('modal.add_hifz');
        if (surahLabel) surahLabel.textContent = getTranslation('modal.surah_name');
        if (ayahLabel) ayahLabel.textContent = getTranslation('modal.ayah_range');
        if (addBtn) addBtn.textContent = getTranslation('modal.add');
        if (cancelBtn) cancelBtn.textContent = getTranslation('modal.cancel');
        
        // Update Surah options
        updateSurahOptions(addHifzModal.querySelector('#hifzSurah'));
    }
    
    // Add Revision Modal
    const addRevisionModal = document.getElementById('addRevisionModal');
    if (addRevisionModal) {
        const title = addRevisionModal.querySelector('h3');
        const surahLabel = addRevisionModal.querySelector('label[for="revisionSurah"]');
        const ayahLabel = addRevisionModal.querySelector('label[for="revisionAyahRange"]');
        const addBtn = addRevisionModal.querySelector('.btn-primary');
        const cancelBtn = addRevisionModal.querySelector('.btn-secondary');
        
        if (title) title.textContent = getTranslation('modal.add_revision');
        if (surahLabel) surahLabel.textContent = getTranslation('modal.surah_name');
        if (ayahLabel) ayahLabel.textContent = getTranslation('modal.ayah_range');
        if (addBtn) addBtn.textContent = getTranslation('modal.add');
        if (cancelBtn) cancelBtn.textContent = getTranslation('modal.cancel');
        
        // Update Surah options
        updateSurahOptions(addRevisionModal.querySelector('#revisionSurah'));
    }
    
    // Add Session Modal
    const addSessionModal = document.getElementById('addSessionModal');
    if (addSessionModal) {
        const title = addSessionModal.querySelector('h3');
        const dateLabel = addSessionModal.querySelector('label[for="sessionDate"]');
        const hifzLabel = addSessionModal.querySelector('label[for="sessionHifz"]');
        const revisionLabel = addSessionModal.querySelector('label[for="sessionRevision"]');
        const gradeLabel = addSessionModal.querySelector('label[for="sessionGrade"]');
        const addBtn = addSessionModal.querySelector('.btn-primary');
        const cancelBtn = addSessionModal.querySelector('.btn-secondary');
        
        if (title) title.textContent = getTranslation('modal.add_session');
        if (dateLabel) dateLabel.textContent = getTranslation('modal.date');
        if (hifzLabel) hifzLabel.textContent = getTranslation('session.hifz_surahs');
        if (revisionLabel) revisionLabel.textContent = getTranslation('session.revision_surahs');
        if (gradeLabel) gradeLabel.textContent = getTranslation('modal.grade');
        if (addBtn) addBtn.textContent = getTranslation('modal.add');
        if (cancelBtn) cancelBtn.textContent = getTranslation('modal.cancel');
    }
}

function updateAdminTexts() {
    const adminSection = document.querySelector('.admin-section h2');
    if (adminSection) adminSection.textContent = getTranslation('admin.system_administration');
    
    // Update admin buttons
    const adminButtons = document.querySelectorAll('.admin-btn');
    adminButtons.forEach(btn => {
        const icon = btn.querySelector('.icon');
        if (icon) {
            const iconText = icon.textContent;
            if (iconText.includes('👤') && !iconText.includes('🗑️')) {
                btn.textContent = getTranslation('admin.create_account');
            } else if (iconText.includes('🔗')) {
                btn.textContent = getTranslation('admin.assign_students');
            } else if (iconText.includes('📊')) {
                btn.textContent = getTranslation('admin.system_stats');
            } else if (iconText.includes('👤🗑️')) {
                btn.textContent = getTranslation('admin.delete_student');
            } else if (iconText.includes('👨‍🏫🗑️')) {
                btn.textContent = getTranslation('admin.delete_teacher');
            } else if (iconText.includes('🗑️') && !iconText.includes('👤') && !iconText.includes('👨‍🏫')) {
                if (btn.textContent.includes('Teachers')) {
                    btn.textContent = getTranslation('admin.delete_all_teachers');
                } else if (btn.textContent.includes('Students')) {
                    btn.textContent = getTranslation('admin.delete_all_students');
                }
            }
        }
    });
}

function updateSurahOptions(selectElement) {
    if (!selectElement) return;
    
    const options = selectElement.querySelectorAll('option');
    options.forEach(option => {
        if (option.value && option.value !== '') {
            const surahKey = option.value.toLowerCase().replace(/\s+/g, '_').replace(/'/g, '');
            const arabicName = getTranslation(`surah.${surahKey}`);
            if (arabicName && arabicName !== `surah.${surahKey}`) {
                option.textContent = currentLanguage === 'ar' ? 
                    `${arabicName} (${option.value})` : 
                    `${option.value} (${arabicName})`;
            }
        }
    });
}

function toggleLanguage() {
    const newLang = currentLanguage === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
    showNotification(`${getTranslation('notification.language_changed')} ${getTranslation(newLang === 'ar' ? 'notification.arabic' : 'notification.english')}`, 'success');
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('MRIS Quran Program initialized');
    
    // Load saved language preference
    const savedLanguage = localStorage.getItem('quranLanguage') || 'en';
    setLanguage(savedLanguage);
    
    // Get button elements after DOM is loaded
    window.addHifzBtn = document.getElementById('addHifzBtn');
    window.addRevisionBtn = document.getElementById('addRevisionBtn');
    window.addSessionBtn = document.getElementById('addSessionBtn');
    
    console.log('Add buttons found:', { addHifzBtn: window.addHifzBtn, addRevisionBtn: window.addRevisionBtn, addSessionBtn: window.addSessionBtn });
    
    // Verify buttons exist before setting up event listeners
    if (!window.addHifzBtn || !window.addRevisionBtn || !window.addSessionBtn) {
        console.error('One or more add buttons not found in DOM!');
        console.error('addHifzBtn:', window.addHifzBtn);
        console.error('addRevisionBtn:', window.addRevisionBtn);
        console.error('addSessionBtn:', window.addSessionBtn);
    }
    
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
    
    // Language toggle button
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
    }
    
    // Add content buttons with mobile touch support
    if (addHifzBtn) {
        // Desktop click event
        addHifzBtn.addEventListener('click', () => {
            console.log('Add Hifz button clicked!');
            console.log('Modal element:', document.getElementById('addHifzModal'));
            showModal('addHifzModal');
        });
        
        // Mobile touch event
        addHifzBtn.addEventListener('touchstart', (e) => {
            e.preventDefault(); // Prevent double-firing
            console.log('Add Hifz button touched!');
            console.log('Modal element:', document.getElementById('addHifzModal'));
            showModal('addHifzModal');
        });
        
        console.log('Add Hifz button event listeners added (click + touch)');
    } else {
        console.error('Add Hifz button not found!');
    }
    
    if (addRevisionBtn) {
        // Desktop click event
        addRevisionBtn.addEventListener('click', () => {
            console.log('Add Revision button clicked!');
            showModal('addRevisionModal');
        });
        
        // Mobile touch event
        addRevisionBtn.addEventListener('touchstart', (e) => {
            e.preventDefault(); // Prevent double-firing
            console.log('Add Revision button touched!');
            showModal('addRevisionModal');
        });
        
        console.log('Add Revision button event listeners added (click + touch)');
    } else {
        console.error('Add Revision button not found!');
    }
    
    if (addSessionBtn) {
        // Desktop click event
        addSessionBtn.addEventListener('click', () => {
            console.log('Add Session button clicked!');
            showModal('addSessionModal');
        });
        
        // Mobile touch event
        addSessionBtn.addEventListener('touchstart', (e) => {
            e.preventDefault(); // Prevent double-firing
            console.log('Add Session button touched!');
            showModal('addSessionModal');
        });
        
        console.log('Add Session button event listeners added (click + touch)');
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
        showNotification(getTranslation('notification.please_enter_code'), 'error');
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
        showNotification(getTranslation('login.invalid'), 'error');
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
        userClassSpan.textContent = getTranslation('header.administrator');
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
        userClassSpan.textContent = getTranslation('header.teacher');
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
    
    showNotification(`${getTranslation('notification.welcome')}, ${user.name}!`, 'success');
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
        hifzContent.innerHTML = `<p style="text-align: center; color: #666; padding: 20px;">${getTranslation('content.select_student')}</p>`;
        revisionContent.innerHTML = `<p style="text-align: center; color: #666; padding: 20px;">${getTranslation('content.select_student')}</p>`;
        sessionsList.innerHTML = `<p style="text-align: center; color: #666; padding: 20px;">${getTranslation('content.select_student')}</p>`;
        
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
        container.innerHTML = `<p style="text-align: center; color: #666; padding: 20px;">${getTranslation('content.no_content')}</p>`;
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
        sessionsList.innerHTML = `<p style="text-align: center; color: #666; padding: 20px;">${getTranslation('content.no_sessions')}</p>`;
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
            showNotification(getTranslation('notification.no_student_selected'), 'error');
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
            showNotification(getTranslation('notification.no_student_selected'), 'error');
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
                <h3 style="color: var(--primary-color); margin-bottom: 20px;">${getTranslation('student.no_students_assigned')}</h3>
                <p style="color: #666; margin-bottom: 30px;">${getTranslation('student.no_students_message')}</p>
                <button class="btn btn-secondary" onclick="skipToDashboard()">${getTranslation('student.skip_to_dashboard')}</button>
                <p style="font-size: 12px; color: #999; margin-top: 20px;">${getTranslation('student.dashboard_note')}</p>
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
    userNameSpan.textContent = `${getTranslation('header.editing_student')}: ${student.name}`;
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
    if (window.addHifzBtn) window.addHifzBtn.style.display = 'block';
    if (window.addRevisionBtn) window.addRevisionBtn.style.display = 'block';
    if (window.addSessionBtn) window.addSessionBtn.style.display = 'block';
}

// Show teacher controls
function showTeacherControls() {
    console.log('showTeacherControls called - currentUserType:', currentUserType);
    console.log('editingStudent:', editingStudent);
    
    // Check if buttons exist before trying to show them
    if (!window.addHifzBtn || !window.addRevisionBtn || !window.addSessionBtn) {
        console.error('Add buttons not found when trying to show teacher controls!');
        // Try to re-find the buttons
        window.addHifzBtn = document.getElementById('addHifzBtn');
        window.addRevisionBtn = document.getElementById('addRevisionBtn');
        window.addSessionBtn = document.getElementById('addSessionBtn');
        
        if (!window.addHifzBtn || !window.addRevisionBtn || !window.addSessionBtn) {
            console.error('Still cannot find add buttons after retry!');
            return;
        }
    }
    
    // Force display of add buttons for teachers
    window.addHifzBtn.style.setProperty('display', 'block', 'important');
    window.addRevisionBtn.style.setProperty('display', 'block', 'important');
    window.addSessionBtn.style.setProperty('display', 'block', 'important');
    
    // Also remove any inline style that might be hiding them
    window.addHifzBtn.removeAttribute('style');
    window.addRevisionBtn.removeAttribute('style');
    window.addSessionBtn.removeAttribute('style');
    
    // Set display again after removing inline styles
    window.addHifzBtn.style.display = 'block';
    window.addRevisionBtn.style.display = 'block';
    window.addSessionBtn.style.display = 'block';
    
    console.log('Add buttons display set to block');
    console.log('addHifzBtn display:', window.addHifzBtn.style.display);
    console.log('addRevisionBtn display:', window.addRevisionBtn.style.display);
    console.log('addSessionBtn display:', window.addSessionBtn.style.display);
}

// Hide teacher controls
function hideTeacherControls() {
    if (window.addHifzBtn) window.addHifzBtn.style.display = 'none';
    if (window.addRevisionBtn) window.addRevisionBtn.style.display = 'none';
    if (window.addSessionBtn) window.addSessionBtn.style.display = 'none';
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
            <h4 style="color: var(--primary-color); margin-bottom: 15px;">${getTranslation('empty.no_student_selected')}</h4>
            <p style="color: #666; margin-bottom: 20px;">${getTranslation('empty.select_student_message')}</p>
            <button class="btn btn-secondary" onclick="showStudentSelection()">${getTranslation('student.select_student')}</button>
        </div>
    `;
    revisionContent.innerHTML = `
        <div style="text-align: center; padding: 40px 20px;">
            <h4 style="color: var(--primary-color); margin-bottom: 15px;">${getTranslation('empty.no_student_selected')}</h4>
            <p style="color: #666; margin-bottom: 20px;">${getTranslation('empty.select_student_message')}</p>
            <button class="btn btn-secondary" onclick="showStudentSelection()">${getTranslation('student.select_student')}</button>
        </div>
    `;
    sessionsList.innerHTML = `
        <div style="text-align: center; padding: 40px 20px;">
            <h4 style="color: var(--primary-color); margin-bottom: 15px;">${getTranslation('empty.no_student_selected')}</h4>
            <p style="color: #666; margin-bottom: 20px;">${getTranslation('empty.select_student_message')}</p>
            <button class="btn btn-secondary" onclick="showStudentSelection()">${getTranslation('student.select_student')}</button>
        </div>
    `;
    
        // Update header to show teacher mode
        userNameSpan.textContent = sampleData.teachers[currentUser].name;
        userClassSpan.textContent = getTranslation('header.teacher');
        userTeacherSpan.textContent = getTranslation('header.dashboard_mode');
    
    // Add dashboard mode styling
    userTeacherSpan.classList.add('dashboard-mode');
    
    showNotification(getTranslation('notification.dashboard_activated'), 'info');
}

// Handle add hifz
function handleAddHifz(event) {
    event.preventDefault();
    
    const surah = document.getElementById('hifzSurah').value.trim();
    const ayahRange = document.getElementById('hifzAyahRange').value.trim();
    
    if (!surah || !ayahRange) {
        showNotification(getTranslation('notification.fill_all_fields'), 'error');
        return;
    }
    
    // Get the current student ID using the utility function
    const targetUser = getCurrentStudentId();
    
    if (!targetUser) {
        showNotification(getTranslation('notification.no_student_selected'), 'error');
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
    
        showNotification(getTranslation('notification.hifz_added'), 'success');
}

// Handle add revision
function handleAddRevision(event) {
    event.preventDefault();
    
    const surah = document.getElementById('revisionSurah').value.trim();
    const ayahRange = document.getElementById('revisionAyahRange').value.trim();
    
    if (!surah || !ayahRange) {
        showNotification(getTranslation('notification.fill_all_fields'), 'error');
        return;
    }
    
    // Get the current student ID using the utility function
    const targetUser = getCurrentStudentId();
    
    if (!targetUser) {
        showNotification(getTranslation('notification.no_student_selected'), 'error');
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
    
    showNotification(getTranslation('notification.revision_added'), 'success');
}

// Handle add session
function handleAddSession(event) {
    event.preventDefault();
    
    const date = document.getElementById('sessionDate').value;
    const hifz = document.getElementById('sessionHifz').value.trim();
    const revision = document.getElementById('sessionRevision').value.trim();
    const grade = document.getElementById('sessionGrade').value;
    
    if (!date || !hifz || !revision || !grade) {
        showNotification(getTranslation('notification.fill_all_fields'), 'error');
        return;
    }
    
    // Get the current student ID using the utility function
    const targetUser = getCurrentStudentId();
    
    if (!targetUser) {
        showNotification(getTranslation('notification.no_student_selected'), 'error');
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
    
    showNotification(getTranslation('notification.session_added'), 'success');
}

// Handle logout
function handleLogout() {
    // Show custom confirmation modal
    showModal('logoutConfirmationModal');
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
    
    showNotification(getTranslation('notification.logged_out'), 'success');
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
            <h2>${getTranslation('admin.system_administration')}</h2>
            
            <div class="admin-actions">
                <button class="admin-btn" onclick="showCreateAccountModal()">
                    <span class="icon">👤</span>
                    ${getTranslation('admin.create_account')}
                </button>
                <button class="admin-btn" onclick="showAssignStudentsModal()">
                    <span class="icon">🔗</span>
                    ${getTranslation('admin.assign_students')}
                </button>
                <button class="admin-btn" onclick="showSystemStats()">
                    <span class="icon">📊</span>
                    ${getTranslation('admin.system_stats')}
                </button>
            </div>
            
            <div class="admin-actions" style="margin-top: 20px;">
                <button class="admin-btn" onclick="showDeleteStudentModal()" style="background: #fff3e0; border-color: #ff9800; color: #e65100;">
                    <span class="icon">👤🗑️</span>
                    ${getTranslation('admin.delete_student')}
                </button>
                <button class="admin-btn" onclick="showDeleteTeacherModal()" style="background: #fff3e0; border-color: #ff9800; color: #e65100;">
                    <span class="icon">👨‍🏫🗑️</span>
                    ${getTranslation('admin.delete_teacher')}
                </button>
            </div>
            
            <div class="admin-actions" style="margin-top: 20px;">
                <button class="admin-btn" onclick="deleteAllTeachers()" style="background: #ffebee; border-color: #f44336; color: #d32f2f;">
                    <span class="icon">🗑️</span>
                    ${getTranslation('admin.delete_all_teachers')}
                </button>
                <button class="admin-btn" onclick="deleteAllStudents()" style="background: #ffebee; border-color: #f44336; color: #d32f2f;">
                    <span class="icon">🗑️</span>
                    ${getTranslation('admin.delete_all_students')}
                </button>
            </div>
            
            <div class="admin-actions" style="margin-top: 20px; text-align: center;">
                <button class="btn btn-secondary" onclick="logout()">
                    ${getTranslation('admin.back_to_login')}
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

// Show delete student modal
function showDeleteStudentModal() {
    const modal = document.getElementById('deleteStudentModal');
    modal.style.display = 'block';
    
    // Populate student dropdown
    populateDeleteStudentDropdown();
    
    // Reset preview
    document.getElementById('studentPreview').style.display = 'none';
    document.getElementById('confirmDeleteBtn').disabled = true;
}

// Populate delete student dropdown
function populateDeleteStudentDropdown() {
    const studentSelect = document.getElementById('deleteStudentSelect');
    studentSelect.innerHTML = `<option value="">${getTranslation('admin.choose_student')}</option>`;
    
    Object.keys(sampleData.students).forEach(studentId => {
        const student = sampleData.students[studentId];
        const option = document.createElement('option');
        option.value = studentId;
        option.textContent = `${student.name} (${studentId}) - ${student.class}`;
        studentSelect.appendChild(option);
    });
    
    // Add change event listener
    studentSelect.onchange = function() {
        const selectedStudentId = this.value;
        if (selectedStudentId) {
            showStudentPreview(selectedStudentId);
        } else {
            document.getElementById('studentPreview').style.display = 'none';
            document.getElementById('confirmDeleteBtn').disabled = true;
        }
    };
}

// Show student preview before deletion
function showStudentPreview(studentId) {
    const student = sampleData.students[studentId];
    const content = sampleData.content[studentId] || { hifz: [], revision: [], sessions: [] };
    
    // Update preview fields
    document.getElementById('previewStudentName').textContent = student.name;
    document.getElementById('previewStudentClass').textContent = student.class;
    document.getElementById('previewStudentTeacher').textContent = student.teacher || 'Unassigned';
    document.getElementById('previewStudentContent').textContent = 
        `${content.hifz.length} hifz + ${content.revision.length} revision + ${content.sessions.length} sessions`;
    
    // Show preview and enable delete button
    document.getElementById('studentPreview').style.display = 'block';
    document.getElementById('confirmDeleteBtn').disabled = false;
}

// Confirm delete student
function confirmDeleteStudent() {
    const studentId = document.getElementById('deleteStudentSelect').value;
    if (!studentId) return;
    
    const student = sampleData.students[studentId];
    
    // Show confirmation modal
    const confirmContent = `
        <div class="delete-confirmation-container">
            <div class="warning-icon">⚠️</div>
            <h4>Delete Student</h4>
            <p class="warning-message">
                This action will <strong>permanently delete</strong> the student account!
            </p>
            <div class="consequences">
                <h5>What will happen:</h5>
                <ul>
                    <li>Student account will be completely removed</li>
                    <li>All student content (hifz, revision, sessions) will be lost</li>
                    <li>Student will be removed from teacher assignments</li>
                    <li>This action <strong>cannot be undone</strong></li>
                </ul>
            </div>
            <p class="final-warning">
                <strong>Are you sure you want to delete ${student.name}?</strong>
            </p>
        </div>
    `;
    
    showConfirmationModal('Delete Student', confirmContent, () => {
        // Remove student from data
        delete sampleData.students[studentId];
        delete sampleData.content[studentId];
        
        // Remove from teacher assignments
        Object.keys(sampleData.teachers).forEach(teacherId => {
            const teacher = sampleData.teachers[teacherId];
            if (teacher.students) {
                teacher.students = teacher.students.filter(id => id !== studentId);
            }
        });
        
        // Save changes
        saveAllDataToStorage();
        
        // Close modals
        closeModal('deleteStudentModal');
        closeModal('confirmationModal');
        
        // Refresh admin dashboard
        showAdminDashboard();
        
        showNotification(`Student ${student.name} deleted successfully!`, 'success');
    });
}

// Show delete teacher modal
function showDeleteTeacherModal() {
    const modal = document.getElementById('deleteTeacherModal');
    modal.style.display = 'block';
    
    // Populate teacher dropdown
    populateDeleteTeacherDropdown();
    
    // Reset preview
    document.getElementById('teacherPreview').style.display = 'none';
    document.getElementById('confirmDeleteTeacherBtn').disabled = true;
}

// Populate delete teacher dropdown
function populateDeleteTeacherDropdown() {
    const teacherSelect = document.getElementById('deleteTeacherSelect');
    teacherSelect.innerHTML = '<option value="">Choose a teacher...</option>';
    
    Object.keys(sampleData.teachers).forEach(teacherId => {
        const teacher = sampleData.teachers[teacherId];
        const option = document.createElement('option');
        option.value = teacherId;
        option.textContent = `${teacher.name} (${teacherId})`;
        teacherSelect.appendChild(option);
    });
    
    // Add change event listener
    teacherSelect.onchange = function() {
        const selectedTeacherId = this.value;
        if (selectedTeacherId) {
            showTeacherPreview(selectedTeacherId);
        } else {
            document.getElementById('teacherPreview').style.display = 'none';
            document.getElementById('confirmDeleteTeacherBtn').disabled = true;
        }
    };
}

// Show teacher preview before deletion
function showTeacherPreview(teacherId) {
    const teacher = sampleData.teachers[teacherId];
    const students = teacher.students || [];
    
    // Update preview fields
    document.getElementById('previewTeacherName').textContent = teacher.name;
    document.getElementById('previewTeacherStudents').textContent = 
        students.length === 0 ? 'No students assigned' : 
        students.length === 1 ? '1 student assigned' : 
        `${students.length} students assigned`;
    
    // Calculate impact
    let impact = 'No impact on students';
    if (students.length > 0) {
        const studentNames = students.map(id => sampleData.students[id]?.name || 'Unknown').join(', ');
        impact = `Will affect: ${studentNames}`;
    }
    document.getElementById('previewTeacherImpact').textContent = impact;
    
    // Show preview and enable delete button
    document.getElementById('teacherPreview').style.display = 'block';
    document.getElementById('confirmDeleteTeacherBtn').disabled = false;
}

// Confirm delete teacher
function confirmDeleteTeacher() {
    const teacherId = document.getElementById('deleteTeacherSelect').value;
    if (!teacherId) return;
    
    const teacher = sampleData.teachers[teacherId];
    const students = teacher.students || [];
    
    // Show confirmation modal
    const confirmContent = `
        <div class="delete-confirmation-container">
            <div class="warning-icon">⚠️</div>
            <h4>Delete Teacher</h4>
            <p class="warning-message">
                This action will <strong>permanently delete</strong> the teacher account!
            </p>
            <div class="consequences">
                <h5>What will happen:</h5>
                <ul>
                    <li>Teacher account will be completely removed</li>
                    <li>${students.length === 0 ? 'No students will be affected' : 
                        students.length === 1 ? '1 student will become unassigned' : 
                        `${students.length} students will become unassigned`}</li>
                    <li>All teacher-student relationships will be lost</li>
                    <li>This action <strong>cannot be undone</strong></li>
                </ul>
            </div>
            <p class="final-warning">
                <strong>Are you sure you want to delete ${teacher.name}?</strong>
            </p>
        </div>
    `;
    
    showConfirmationModal('Delete Teacher', confirmContent, () => {
        // Remove teacher from data
        delete sampleData.teachers[teacherId];
        
        // Update all students assigned to this teacher
        students.forEach(studentId => {
            if (sampleData.students[studentId]) {
                sampleData.students[studentId].teacher = 'Unassigned';
            }
        });
        
        // Save changes
        saveAllDataToStorage();
        
        // Close modals
        closeModal('deleteTeacherModal');
        closeModal('confirmationModal');
        
        // Refresh admin dashboard
        showAdminDashboard();
        
        showNotification(`Teacher ${teacher.name} deleted successfully!`, 'success');
    });
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
        
        // Extract grade and section from className
        let grade, section, classNum;
        
        if (className.includes('AM') || className.includes('BR')) {
            // Format: 9AM1, 10BR2, etc.
            grade = className.match(/^(\d+)/)[1];
            section = className.includes('AM') ? 'CF' : 'HK';
            classNum = className.match(/(\d+)$/)[1];
        } else {
            // Format: 7-1, 8-3, etc.
            const parts = className.split('-');
            grade = parts[0];
            classNum = parts[1];
            section = 'CF'; // Default section for grades 7-8
        }
        
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
        
        // Extract grade and section from className
        let grade, section, classNum;
        
        if (className.includes('AM') || className.includes('BR')) {
            // Format: 9AM1, 10BR2, etc.
            grade = className.match(/^(\d+)/)[1];
            section = className.includes('AM') ? 'CF' : 'HK';
            classNum = className.match(/(\d+)$/)[1];
        } else {
            // Format: 7-1, 8-3, etc.
            const parts = className.split('-');
            grade = parts[0];
            classNum = parts[1];
            section = 'CF'; // Default section for grades 7-8
        }
        
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

// Update class options based on selected grade
function updateClassOptions() {
    const gradeSelect = document.getElementById('grade');
    const classSelect = document.getElementById('className');
    const selectedGrade = gradeSelect.value;
    
    // Clear current options
    classSelect.innerHTML = '<option value="">Select Class</option>';
    
    if (!selectedGrade) {
        classSelect.innerHTML = '<option value="">Select Grade First</option>';
        return;
    }
    
    // Define class options for each grade
    const gradeClasses = {
        '7': ['7-1', '7-2', '7-3', '7-4', '7-5', '7-6', '7-7', '7-8'],
        '8': ['8-1', '8-2', '8-3', '8-4', '8-5', '8-6', '8-7', '8-8', '8-9'],
        '9': ['9AM1', '9AM2', '9AM3', '9AM4', '9AM5', '9BR1', '9BR2', '9BR3', '9BR4'],
        '10': ['10AM1', '10AM2', '10AM3', '10AM4', '10AM5', '10BR1', '10BR2', '10BR3']
    };
    
    // Add class options for selected grade
    const classes = gradeClasses[selectedGrade] || [];
    classes.forEach(className => {
        const option = document.createElement('option');
        option.value = className;
        option.textContent = className;
        classSelect.appendChild(option);
    });
    
    console.log(`Updated class options for Grade ${selectedGrade}:`, classes);
}

// Populate teacher dropdown
function populateTeacherDropdown() {
    const teacherSelect = document.getElementById('assignTeacher');
    teacherSelect.innerHTML = `<option value="">${getTranslation('admin.choose_teacher')}</option>`;
    
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
        studentSelect.innerHTML = `<option value="">${getTranslation('admin.choose_teacher_first')}</option>`;
        return;
    }
    
    // Get all students
    const allStudents = Object.keys(sampleData.students);
    
    // Filter out students already assigned to this teacher
    const assignedStudents = sampleData.teachers[teacherId].students || [];
    const unassignedStudents = allStudents.filter(studentId => !assignedStudents.includes(studentId));
    
    studentSelect.innerHTML = `<option value="">${getTranslation('admin.choose_student')}</option>`;
    
    if (unassignedStudents.length === 0) {
        studentSelect.innerHTML = `<option value="">${getTranslation('admin.no_unassigned')}</option>`;
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
window.updateClassOptions = updateClassOptions;

