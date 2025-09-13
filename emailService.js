// Email Service using EmailJS
class EmailService {
    constructor() {
        this.emailQueue = [];
        this.sentEmails = JSON.parse(localStorage.getItem('sentEmails') || '[]');
        this.serviceId = 'service_l2hi697';
        this.publicKey = 'PvxUEpejD-SvixjDC';
        this.templateId = 'template_t5ff3ve';
        
        // Email/SMS features disabled for now - ready for future activation
        this.emailEnabled = false; // Set to true when approved
        
        // Initialize EmailJS (ready but disabled)
        if (typeof emailjs !== 'undefined' && this.emailEnabled) {
            emailjs.init(this.publicKey);
        }
    }

    async sendWelcomeEmail(studentData) {
        const emailContent = this.generateWelcomeEmail(studentData);
        
        console.log('📧 SENDING WELCOME EMAIL VIA EMAILJS...');
        console.log('=================================');
        console.log('To:', studentData.email);
        console.log('Subject:', emailContent.subject);
        console.log('=================================');
        
        try {
            // Email feature disabled for now - just log what would be sent
            if (this.emailEnabled && typeof emailjs !== 'undefined') {
                const templateParams = {
                    to_email: studentData.email,
                    to_name: studentData.firstName,
                    student_id: studentData.id,
                    student_name: `${studentData.firstName} ${studentData.lastName}`,
                    student_class: studentData.class || 'N/A',
                    subject: emailContent.subject,
                    message: emailContent.body
                };
                
                const response = await emailjs.send(this.serviceId, this.templateId, templateParams);
                console.log('✅ Email sent via EmailJS:', response.status, response.text);
            } else {
                // Email disabled - just log for now
                console.log('📧 Email feature disabled - would send to:', studentData.email);
                console.log('📧 Template ready:', this.templateId);
                console.log('📧 To enable: Set emailEnabled = true in emailService.js');
                await new Promise(resolve => setTimeout(resolve, 100));
            }
            
            // Store sent email record
            const emailRecord = {
                id: Date.now(),
                to: studentData.email,
                subject: emailContent.subject,
                body: emailContent.body,
                studentId: studentData.id,
                sentAt: new Date().toISOString(),
                status: 'sent',
                method: typeof emailjs !== 'undefined' && this.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY' ? 'emailjs' : 'simulated'
            };
            
            this.sentEmails.push(emailRecord);
            localStorage.setItem('sentEmails', JSON.stringify(this.sentEmails));
            
            // Also log to Firebase if available
            if (window.firebaseService) {
                await window.firebaseService.logEmail(emailRecord);
            }
            
            console.log('✅ Email process completed successfully!');
            return emailRecord;
            
        } catch (error) {
            console.error('❌ Email sending failed:', error);
            throw error;
        }
    }

    generateWelcomeEmail(studentData) {
        const subject = `Welcome to MRIS Quran Program - Your Student ID: ${studentData.id}`;
        
        const body = `
Dear ${studentData.firstName} ${studentData.lastName},

Welcome to the MRIS Quran Program! We are excited to have you join our memorization program.

Your account has been successfully created with the following details:

📋 Student Information:
• Name: ${studentData.name}
• Student ID: ${studentData.id}
• Class: ${studentData.class}
• Grade: ${studentData.grade}
• Email: ${studentData.email}
• Phone: ${studentData.phone}

🔑 Important - Your Login Information:
Your unique Student ID is: ${studentData.id}

Please save this ID safely as you will need it to log into the system.

📱 Getting Started:
1. Visit the login page
2. Enter your Student ID: ${studentData.id}
3. Start your Quran memorization journey!

If you have any questions or need assistance, please contact your teacher or the program administrator.

May Allah bless your memorization journey.

Best regards,
MRIS Quran Program Team

---
This is an automated message. Please do not reply to this email.
        `.trim();

        return { subject, body };
    }

    getSentEmails() {
        return this.sentEmails;
    }

    getEmailByStudentId(studentId) {
        return this.sentEmails.find(email => email.studentId === studentId);
    }

    // Method to resend email if needed
    async resendWelcomeEmail(studentId) {
        const storedStudents = JSON.parse(localStorage.getItem('quranStudents') || '{}');
        const student = storedStudents[studentId];
        
        if (student) {
            return await this.sendWelcomeEmail(student);
        } else {
            throw new Error('Student not found');
        }
    }
}

// Initialize email service
window.emailService = new EmailService();
console.log('✅ Email service initialized');
