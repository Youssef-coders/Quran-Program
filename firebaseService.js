// Firebase Database Service for MRIS Quran Program
class FirebaseService {
    constructor() {
        this.db = null;
        this.auth = null;
        this.initialized = false;
        this.init();
    }

    async init() {
        try {
            // Firebase service initialization
            
            // Wait for Firebase to be available
            let attempts = 0;
            while (typeof firebase === 'undefined' && attempts < 50) {
                await new Promise(resolve => setTimeout(resolve, 100));
                attempts++;
            }
            
            // Firebase availability checked
            
            if (typeof firebase !== 'undefined') {
                // Firebase is available, initializing
                // Initialize Firebase with your config
                const firebaseConfig = {
                    apiKey: "AIzaSyBSOZYCUMqO9KEr9a93GaanxuIelJIIIGM",
                    authDomain: "quran-tracker-6a536.firebaseapp.com",
                    projectId: "quran-tracker-6a536",
                    storageBucket: "quran-tracker-6a536.firebasestorage.app",
                    messagingSenderId: "988749694504",
                    appId: "1:988749694504:web:91af1972179d797409171d"
                };
                
                // Firebase config loaded
                // Use existing Firebase app instead of creating new one
                const app = firebase.apps.length > 0 ? firebase.app() : firebase.initializeApp(firebaseConfig);
                this.db = firebase.firestore(app);
                this.auth = firebase.auth(app);
                
                // Try to authenticate anonymously to bypass permission issues
                try {
                    await this.auth.signInAnonymously();
                    console.log('✅ Firebase authenticated anonymously');
                } catch (authError) {
                    console.warn('⚠️ Anonymous auth failed, trying without auth:', authError);
                }
                
                this.initialized = true;
                // Firebase initialized successfully
            } else {
                console.warn('⚠️ Firebase not loaded, falling back to localStorage');
                this.initialized = false;
            }
        } catch (error) {
            console.error('❌ Firebase initialization failed:', error);
            this.initialized = false;
        }
    }

    // Student Management
    async createStudent(studentData) {
        if (!this.initialized) {
            return this.fallbackCreateStudent(studentData);
        }

        try {
            await this.db.collection('students').doc(studentData.id).set({
                ...studentData,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            
            // Student created in Firebase
            return studentData;
        } catch (error) {
            console.error('❌ Error creating student in Firebase:', error);
            return this.fallbackCreateStudent(studentData);
        }
    }

    async getStudent(studentId) {
        if (!this.initialized) {
            return this.fallbackGetStudent(studentId);
        }

        try {
            const doc = await this.db.collection('students').doc(studentId).get();
            if (doc.exists) {
                return { id: doc.id, ...doc.data() };
            }
            return null;
        } catch (error) {
            console.error('❌ Error getting student from Firebase:', error);
            return this.fallbackGetStudent(studentId);
        }
    }

    async getAllStudents() {
        if (!this.initialized) {
            return this.fallbackGetAllStudents();
        }

        try {
            const snapshot = await this.db.collection('students').get();
            const students = {};
            snapshot.forEach(doc => {
                students[doc.id] = { id: doc.id, ...doc.data() };
            });
            return students;
        } catch (error) {
            console.error('❌ Error getting students from Firebase:', error);
            return this.fallbackGetAllStudents();
        }
    }

    async updateStudent(studentId, updateData) {
        if (!this.initialized) {
            return this.fallbackUpdateStudent(studentId, updateData);
        }

        try {
            await this.db.collection('students').doc(studentId).update({
                ...updateData,
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            // Student updated in Firebase
            return true;
        } catch (error) {
            console.error('❌ Error updating student in Firebase:', error);
            return this.fallbackUpdateStudent(studentId, updateData);
        }
    }

    async deleteStudent(studentId) {
        if (!this.initialized) {
            return this.fallbackDeleteStudent(studentId);
        }

        try {
            await this.db.collection('students').doc(studentId).delete();
            // Student deleted from Firebase
            return true;
        } catch (error) {
            console.error('❌ Error deleting student from Firebase:', error);
            return this.fallbackDeleteStudent(studentId);
        }
    }

    async deleteStudentContent(studentId) {
        if (!this.initialized) {
            return this.fallbackDeleteStudentContent(studentId);
        }

        try {
            await this.db.collection('content').doc(studentId).delete();
            // Student content deleted from Firebase
            return true;
        } catch (error) {
            console.error('❌ Error deleting student content from Firebase:', error);
            return this.fallbackDeleteStudentContent(studentId);
        }
    }

    // Teacher Management
    async createTeacher(teacherData) {
        if (!this.initialized) {
            return this.fallbackCreateTeacher(teacherData);
        }

        try {
            await this.db.collection('teachers').doc(teacherData.id).set({
                ...teacherData,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            
            // Teacher created in Firebase
            return teacherData;
        } catch (error) {
            console.error('❌ Error creating teacher in Firebase:', error);
            return this.fallbackCreateTeacher(teacherData);
        }
    }

    async getTeacher(teacherId) {
        if (!this.initialized) {
            return this.fallbackGetTeacher(teacherId);
        }

        try {
            const doc = await this.db.collection('teachers').doc(teacherId).get();
            if (doc.exists) {
                return { id: doc.id, ...doc.data() };
            }
            return null;
        } catch (error) {
            console.error('❌ Error getting teacher from Firebase:', error);
            return this.fallbackGetTeacher(teacherId);
        }
    }

    async getAllTeachers() {
        if (!this.initialized) {
            return this.fallbackGetAllTeachers();
        }

        try {
            const snapshot = await this.db.collection('teachers').get();
            const teachers = {};
            snapshot.forEach(doc => {
                teachers[doc.id] = { id: doc.id, ...doc.data() };
            });
            return teachers;
        } catch (error) {
            console.error('❌ Error getting teachers from Firebase:', error);
            return this.fallbackGetAllTeachers();
        }
    }

    // Content Management
    async getAllContent() {
        if (!this.initialized) {
            return this.fallbackGetAllContent();
        }

        try {
            const snapshot = await this.db.collection('content').get();
            const content = {};
            snapshot.forEach(doc => {
                content[doc.id] = { id: doc.id, ...doc.data() };
            });
            // Content loaded from Firebase
            return content;
        } catch (error) {
            console.error('❌ Error loading content from Firebase:', error);
            return this.fallbackGetAllContent();
        }
    }

    async saveContent(studentId, contentData) {
        if (!this.initialized) {
            return this.fallbackSaveContent(studentId, contentData);
        }

        try {
            await this.db.collection('content').doc(studentId).set(contentData);
            // Content saved to Firebase
            return true;
        } catch (error) {
            console.error('❌ Error saving content to Firebase:', error);
            return this.fallbackSaveContent(studentId, contentData);
        }
    }

    async deleteTeacher(teacherId) {
        if (!this.initialized) {
            return this.fallbackDeleteTeacher(teacherId);
        }

        try {
            await this.db.collection('teachers').doc(teacherId).delete();
            // Teacher deleted from Firebase
            return true;
        } catch (error) {
            console.error('❌ Error deleting teacher from Firebase:', error);
            return this.fallbackDeleteTeacher(teacherId);
        }
    }

    // Email/SMS Logs
    async logEmail(emailData) {
        if (!this.initialized) {
            return this.fallbackLogEmail(emailData);
        }

        try {
            await this.db.collection('emailLogs').add({
                ...emailData,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
            // Email logged in Firebase
        } catch (error) {
            console.error('❌ Error logging email in Firebase:', error);
            this.fallbackLogEmail(emailData);
        }
    }

    async logSMS(smsData) {
        if (!this.initialized) {
            return this.fallbackLogSMS(smsData);
        }

        try {
            await this.db.collection('smsLogs').add({
                ...smsData,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
            // SMS logged in Firebase
        } catch (error) {
            console.error('❌ Error logging SMS in Firebase:', error);
            this.fallbackLogSMS(smsData);
        }
    }

    // ID Collision Check
    async checkIdExists(id) {
        if (!this.initialized) {
            return this.fallbackCheckIdExists(id);
        }

        try {
            const [studentDoc, teacherDoc] = await Promise.all([
                this.db.collection('students').doc(id).get(),
                this.db.collection('teachers').doc(id).get()
            ]);
            
            return studentDoc.exists || teacherDoc.exists;
        } catch (error) {
            console.error('❌ Error checking ID in Firebase:', error);
            return this.fallbackCheckIdExists(id);
        }
    }

    // Fallback methods using localStorage
    fallbackCreateStudent(studentData) {
        const students = JSON.parse(localStorage.getItem('quranStudents') || '{}');
        students[studentData.id] = studentData;
        localStorage.setItem('quranStudents', JSON.stringify(students));
        // Student saved to localStorage
        return studentData;
    }

    fallbackGetStudent(studentId) {
        const students = JSON.parse(localStorage.getItem('quranStudents') || '{}');
        return students[studentId] || null;
    }

    fallbackGetAllStudents() {
        return JSON.parse(localStorage.getItem('quranStudents') || '{}');
    }

    fallbackUpdateStudent(studentId, updateData) {
        const students = JSON.parse(localStorage.getItem('quranStudents') || '{}');
        if (students[studentId]) {
            students[studentId] = { ...students[studentId], ...updateData };
            localStorage.setItem('quranStudents', JSON.stringify(students));
            return true;
        }
        return false;
    }

    fallbackDeleteStudent(studentId) {
        const students = JSON.parse(localStorage.getItem('quranStudents') || '{}');
        if (students[studentId]) {
            delete students[studentId];
            localStorage.setItem('quranStudents', JSON.stringify(students));
            return true;
        }
        return false;
    }

    fallbackDeleteStudentContent(studentId) {
        const content = JSON.parse(localStorage.getItem('quranContent') || '{}');
        if (content[studentId]) {
            delete content[studentId];
            localStorage.setItem('quranContent', JSON.stringify(content));
            return true;
        }
        return false;
    }

    fallbackCreateTeacher(teacherData) {
        const teachers = JSON.parse(localStorage.getItem('quranTeachers') || '{}');
        teachers[teacherData.id] = teacherData;
        localStorage.setItem('quranTeachers', JSON.stringify(teachers));
        // Teacher saved to localStorage
        return teacherData;
    }

    fallbackGetTeacher(teacherId) {
        const teachers = JSON.parse(localStorage.getItem('quranTeachers') || '{}');
        return teachers[teacherId] || null;
    }

    fallbackGetAllTeachers() {
        return JSON.parse(localStorage.getItem('quranTeachers') || '{}');
    }

    fallbackGetAllContent() {
        return JSON.parse(localStorage.getItem('quranContent') || '{}');
    }

    fallbackSaveContent(studentId, contentData) {
        const content = JSON.parse(localStorage.getItem('quranContent') || '{}');
        content[studentId] = contentData;
        localStorage.setItem('quranContent', JSON.stringify(content));
        // Content saved to localStorage
        return true;
    }

    fallbackDeleteTeacher(teacherId) {
        const teachers = JSON.parse(localStorage.getItem('quranTeachers') || '{}');
        if (teachers[teacherId]) {
            delete teachers[teacherId];
            localStorage.setItem('quranTeachers', JSON.stringify(teachers));
            return true;
        }
        return false;
    }

    fallbackLogEmail(emailData) {
        const emails = JSON.parse(localStorage.getItem('sentEmails') || '[]');
        emails.push(emailData);
        localStorage.setItem('sentEmails', JSON.stringify(emails));
    }

    fallbackLogSMS(smsData) {
        const sms = JSON.parse(localStorage.getItem('sentSMS') || '[]');
        sms.push(smsData);
        localStorage.setItem('sentSMS', JSON.stringify(sms));
    }

    fallbackCheckIdExists(id) {
        const students = JSON.parse(localStorage.getItem('quranStudents') || '{}');
        const teachers = JSON.parse(localStorage.getItem('quranTeachers') || '{}');
        return students.hasOwnProperty(id) || teachers.hasOwnProperty(id);
    }

    // Clear all data from Firebase
    async clearAllData() {
        if (!this.initialized) {
            console.warn('⚠️ Firebase not initialized, cannot clear data');
            return;
        }
        
        try {
            // Clearing all data from Firebase
            
            // Get all collections and delete them
            const collections = ['students', 'teachers', 'content', 'emailLogs', 'smsLogs'];
            
            for (const collectionName of collections) {
                const collection = this.db.collection(collectionName);
                const snapshot = await collection.get();
                
                if (!snapshot.empty) {
                    const batch = this.db.batch();
                    snapshot.docs.forEach(doc => {
                        batch.delete(doc.ref);
                    });
                    await batch.commit();
                    // Collection cleared
                } else {
                    // Collection already empty
                }
            }
            
            // All Firebase data cleared successfully
            return true;
        } catch (error) {
            console.error('❌ Error clearing Firebase data:', error);
            return false;
        }
    }

    // Utility method to sync localStorage to Firebase (for migration)
    async syncLocalStorageToFirebase() {
        if (!this.initialized) {
            console.warn('⚠️ Firebase not initialized, cannot sync');
            return;
        }

        try {
            // Sync students
            const students = JSON.parse(localStorage.getItem('quranStudents') || '{}');
            for (const [id, studentData] of Object.entries(students)) {
                await this.createStudent(studentData);
            }

            // Sync teachers
            const teachers = JSON.parse(localStorage.getItem('quranTeachers') || '{}');
            for (const [id, teacherData] of Object.entries(teachers)) {
                await this.createTeacher(teacherData);
            }

            // localStorage data synced to Firebase
        } catch (error) {
            console.error('❌ Error syncing to Firebase:', error);
        }
    }
}

// Initialize Firebase service
window.firebaseService = new FirebaseService();
