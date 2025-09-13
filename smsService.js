// SMS Service for sending student IDs
class SMSService {
    constructor() {
        this.smsQueue = [];
        this.sentSMS = JSON.parse(localStorage.getItem('sentSMS') || '[]');
    }

    async sendWelcomeSMS(studentData) {
        const smsContent = this.generateWelcomeSMS(studentData);
        
        // Simulate SMS sending with visual feedback
        console.log('📱 SENDING WELCOME SMS...');
        console.log('=================================');
        console.log('To:', studentData.phone);
        console.log('Message:', smsContent);
        console.log('=================================');
        
        // Simulate network delay (reduced for better UX)
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Store sent SMS record
        const smsRecord = {
            id: Date.now(),
            to: studentData.phone,
            message: smsContent,
            studentId: studentData.id,
            sentAt: new Date().toISOString(),
            status: 'sent'
        };
        
        this.sentSMS.push(smsRecord);
        localStorage.setItem('sentSMS', JSON.stringify(this.sentSMS));
        
        // Also log to Firebase if available
        if (window.firebaseService) {
            await window.firebaseService.logSMS(smsRecord);
        }
        
        console.log('✅ SMS sent successfully!');
        return smsRecord;
    }

    generateWelcomeSMS(studentData) {
        const message = `
مرحباً ${studentData.firstName}!

تم إنشاء حسابك في برنامج القرآن الكريم - MRIS بنجاح.

معرفك الفريد: ${studentData.id}

احفظ هذا المعرف لتسجيل الدخول.

الصف: ${studentData.class}
البريد: ${studentData.email}

بارك الله في حفظك للقرآن الكريم.

فريق برنامج القرآن الكريم - MRIS
        `.trim();

        return message;
    }

    getSentSMS() {
        return this.sentSMS;
    }

    getSMSByStudentId(studentId) {
        return this.sentSMS.find(sms => sms.studentId === studentId);
    }

    // Method to resend SMS if needed
    async resendWelcomeSMS(studentId) {
        const storedStudents = JSON.parse(localStorage.getItem('quranStudents') || '{}');
        const student = storedStudents[studentId];
        
        if (student) {
            return await this.sendWelcomeSMS(student);
        } else {
            throw new Error('Student not found');
        }
    }

    // Format phone number for display
    formatPhoneNumber(phone) {
        // Remove any non-digit characters
        const cleaned = phone.replace(/\D/g, '');
        
        // Format as +966 5X XXX XXXX
        if (cleaned.startsWith('966')) {
            return `+${cleaned.slice(0, 3)} ${cleaned.slice(3, 4)}${cleaned.slice(4, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(8)}`;
        } else if (cleaned.startsWith('05')) {
            return `+966 ${cleaned.slice(1, 2)}${cleaned.slice(2, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
        }
        
        return phone; // Return original if format not recognized
    }

    // Validate Saudi phone number
    isValidSaudiPhone(phone) {
        const phoneRegex = /^(\+966|966|0)?[5][0-9]{8}$/;
        const cleanPhone = phone.replace(/[\s-]/g, '');
        return phoneRegex.test(cleanPhone);
    }
}

// Initialize SMS service
window.smsService = new SMSService();
console.log('✅ SMS service initialized');
