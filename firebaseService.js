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
            // Check if Firebase is loaded
            if (typeof firebase !== 'undefined') {
                this.db = firebase.firestore();
                this.auth = firebase.auth();
                this.initialized = true;
                console.log('✅ Firebase initialized successfully');
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
            const docRef = await this.db.collection('students').doc(studentData.id).set({
                ...studentData,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            
            console.log('✅ Student created in Firebase:', studentData.id);
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
            console.log('✅ Student updated in Firebase:', studentId);
            return true;
        } catch (error) {
            console.error('❌ Error updating student in Firebase:', error);
            return this.fallbackUpdateStudent(studentId, updateData);
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
            
            console.log('✅ Teacher created in Firebase:', teacherData.id);
            return teacherData;
        } catch (error) {
            console.error('❌ Error creating teacher in Firebase:', error);
            return this.fallbackCreateTeacher(teacherData);
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
            console.log('✅ Email logged in Firebase');
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
            console.log('✅ SMS logged in Firebase');
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
        console.log('📦 Student saved to localStorage:', studentData.id);
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

    fallbackCreateTeacher(teacherData) {
        const teachers = JSON.parse(localStorage.getItem('quranTeachers') || '{}');
        teachers[teacherData.id] = teacherData;
        localStorage.setItem('quranTeachers', JSON.stringify(teachers));
        console.log('📦 Teacher saved to localStorage:', teacherData.id);
        return teacherData;
    }

    fallbackGetAllTeachers() {
        return JSON.parse(localStorage.getItem('quranTeachers') || '{}');
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

            console.log('✅ localStorage data synced to Firebase');
        } catch (error) {
            console.error('❌ Error syncing to Firebase:', error);
        }
    }
}

// Initialize Firebase service
window.firebaseService = new FirebaseService();
