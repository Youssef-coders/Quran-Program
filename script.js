// MRIS Quran Program - Main Script

// Surah data with ayah counts
const surahData = {
    1: { name: 'Al-Fatihah', arabicName: 'الفاتحة', ayahs: 7 },
    2: { name: 'Al-Baqarah', arabicName: 'البقرة', ayahs: 286 },
    3: { name: 'Ali Imran', arabicName: 'آل عمران', ayahs: 200 },
    4: { name: 'An-Nisa', arabicName: 'النساء', ayahs: 176 },
    5: { name: 'Al-Maidah', arabicName: 'المائدة', ayahs: 120 },
    6: { name: 'Al-Anam', arabicName: 'الأنعام', ayahs: 165 },
    7: { name: 'Al-Araf', arabicName: 'الأعراف', ayahs: 206 },
    8: { name: 'Al-Anfal', arabicName: 'الأنفال', ayahs: 75 },
    9: { name: 'At-Tawbah', arabicName: 'التوبة', ayahs: 129 },
    10: { name: 'Yunus', arabicName: 'يونس', ayahs: 109 },
    11: { name: 'Hud', arabicName: 'هود', ayahs: 123 },
    12: { name: 'Yusuf', arabicName: 'يوسف', ayahs: 111 },
    13: { name: 'Ar-Rad', arabicName: 'الرعد', ayahs: 43 },
    14: { name: 'Ibrahim', arabicName: 'إبراهيم', ayahs: 52 },
    15: { name: 'Al-Hijr', arabicName: 'الحجر', ayahs: 99 },
    16: { name: 'An-Nahl', arabicName: 'النحل', ayahs: 128 },
    17: { name: 'Al-Isra', arabicName: 'الإسراء', ayahs: 111 },
    18: { name: 'Al-Kahf', arabicName: 'الكهف', ayahs: 110 },
    19: { name: 'Maryam', arabicName: 'مريم', ayahs: 98 },
    20: { name: 'Taha', arabicName: 'طه', ayahs: 135 },
    21: { name: 'Al-Anbiya', arabicName: 'الأنبياء', ayahs: 112 },
    22: { name: 'Al-Hajj', arabicName: 'الحج', ayahs: 78 },
    23: { name: 'Al-Muminun', arabicName: 'المؤمنون', ayahs: 118 },
    24: { name: 'An-Nur', arabicName: 'النور', ayahs: 64 },
    25: { name: 'Al-Furqan', arabicName: 'الفرقان', ayahs: 77 },
    26: { name: 'Ash-Shuara', arabicName: 'الشعراء', ayahs: 227 },
    27: { name: 'An-Naml', arabicName: 'النمل', ayahs: 93 },
    28: { name: 'Al-Qasas', arabicName: 'القصص', ayahs: 88 },
    29: { name: 'Al-Ankabut', arabicName: 'العنكبوت', ayahs: 69 },
    30: { name: 'Ar-Rum', arabicName: 'الروم', ayahs: 60 },
    31: { name: 'Luqman', ayahs: 34 },
    32: { name: 'As-Sajdah', ayahs: 30 },
    33: { name: 'Al-Ahzab', ayahs: 73 },
    34: { name: 'Saba', ayahs: 54 },
    35: { name: 'Fatir', ayahs: 45 },
    36: { name: 'Ya-Sin', arabicName: 'يس', ayahs: 83 },
    37: { name: 'As-Saffat', ayahs: 182 },
    38: { name: 'Sad', ayahs: 88 },
    39: { name: 'Az-Zumar', ayahs: 75 },
    40: { name: 'Ghafir', ayahs: 85 },
    41: { name: 'Fussilat', ayahs: 54 },
    42: { name: 'Ash-Shura', ayahs: 53 },
    43: { name: 'Az-Zukhruf', ayahs: 89 },
    44: { name: 'Ad-Dukhan', ayahs: 59 },
    45: { name: 'Al-Jathiyah', ayahs: 37 },
    46: { name: 'Al-Ahqaf', ayahs: 35 },
    47: { name: 'Muhammad', ayahs: 38 },
    48: { name: 'Al-Fath', ayahs: 29 },
    49: { name: 'Al-Hujurat', ayahs: 18 },
    50: { name: 'Qaf', ayahs: 45 },
    51: { name: 'Adh-Dhariyat', ayahs: 60 },
    52: { name: 'At-Tur', ayahs: 49 },
    53: { name: 'An-Najm', ayahs: 62 },
    54: { name: 'Al-Qamar', ayahs: 55 },
    55: { name: 'Ar-Rahman', arabicName: 'الرحمن', ayahs: 78 },
    56: { name: 'Al-Waqiah', ayahs: 96 },
    57: { name: 'Al-Hadid', ayahs: 29 },
    58: { name: 'Al-Mujadilah', ayahs: 22 },
    59: { name: 'Al-Hashr', ayahs: 24 },
    60: { name: 'Al-Mumtahanah', ayahs: 13 },
    61: { name: 'As-Saff', ayahs: 14 },
    62: { name: 'Al-Jumuah', ayahs: 11 },
    63: { name: 'Al-Munafiqun', ayahs: 11 },
    64: { name: 'At-Taghabun', ayahs: 18 },
    65: { name: 'At-Talaq', ayahs: 12 },
    66: { name: 'At-Tahrim', ayahs: 12 },
    67: { name: 'Al-Mulk', arabicName: 'الملك', ayahs: 30 },
    68: { name: 'Al-Qalam', ayahs: 52 },
    69: { name: 'Al-Haqqah', ayahs: 52 },
    70: { name: 'Al-Maarij', ayahs: 44 },
    71: { name: 'Nuh', ayahs: 28 },
    72: { name: 'Al-Jinn', ayahs: 28 },
    73: { name: 'Al-Muzzammil', ayahs: 20 },
    74: { name: 'Al-Muddaththir', ayahs: 56 },
    75: { name: 'Al-Qiyamah', ayahs: 40 },
    76: { name: 'Al-Insan', ayahs: 31 },
    77: { name: 'Al-Mursalat', ayahs: 50 },
    78: { name: 'An-Naba', arabicName: 'النبأ', ayahs: 40 },
    79: { name: 'An-Naziat', ayahs: 46 },
    80: { name: 'Abasa', ayahs: 42 },
    81: { name: 'At-Takwir', ayahs: 29 },
    82: { name: 'Al-Infitar', ayahs: 19 },
    83: { name: 'Al-Mutaffifin', ayahs: 36 },
    84: { name: 'Al-Inshiqaq', ayahs: 25 },
    85: { name: 'Al-Buruj', ayahs: 22 },
    86: { name: 'At-Tariq', ayahs: 17 },
    87: { name: 'Al-Ala', ayahs: 19 },
    88: { name: 'Al-Ghashiyah', ayahs: 26 },
    89: { name: 'Al-Fajr', ayahs: 30 },
    90: { name: 'Al-Balad', ayahs: 20 },
    91: { name: 'Ash-Shams', ayahs: 15 },
    92: { name: 'Al-Layl', ayahs: 21 },
    93: { name: 'Ad-Duha', ayahs: 11 },
    94: { name: 'Ash-Sharh', ayahs: 8 },
    95: { name: 'At-Tin', ayahs: 8 },
    96: { name: 'Al-Alaq', ayahs: 19 },
    97: { name: 'Al-Qadr', ayahs: 5 },
    98: { name: 'Al-Bayyinah', ayahs: 8 },
    99: { name: 'Az-Zalzalah', ayahs: 8 },
    100: { name: 'Al-Adiyat', ayahs: 11 },
    101: { name: 'Al-Qariah', ayahs: 11 },
    102: { name: 'At-Takathur', ayahs: 8 },
    103: { name: 'Al-Asr', ayahs: 3 },
    104: { name: 'Al-Humazah', ayahs: 9 },
    105: { name: 'Al-Fil', ayahs: 5 },
    106: { name: 'Quraysh', ayahs: 4 },
    107: { name: 'Al-Maun', ayahs: 7 },
    108: { name: 'Al-Kawthar', ayahs: 3 },
    109: { name: 'Al-Kafirun', ayahs: 6 },
    110: { name: 'An-Nasr', ayahs: 3 },
    111: { name: 'Al-Masad', ayahs: 5 },
    112: { name: 'Al-Ikhlas', arabicName: 'الإخلاص', ayahs: 4 },
    113: { name: 'Al-Falaq', arabicName: 'الفلق', ayahs: 5 },
    114: { name: 'An-Nas', arabicName: 'الناس', ayahs: 6 }
};

// Helper function to get surah name based on language
function getSurahName(surahNumber, isArabic = false) {
    const surah = surahData[surahNumber];
    if (!surah) return 'Unknown';
    return isArabic ? surah.arabicName : surah.name;
}

// Helper function to format ayah range
function formatAyahRange(surahNumber, startAyah, endAyah, isArabic = false) {
    const surahName = getSurahName(surahNumber, isArabic);
    // Show range format
    if (startAyah === endAyah) {
        return `${surahName} ${startAyah}`;
    } else {
        return `${surahName} ${startAyah} - ${endAyah}`;
    }
}

// Helper function to format date in Arabic (Gregorian)
function formatDateArabic(date) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        calendar: 'gregory'
    };
    return new Intl.DateTimeFormat('ar-SA', options).format(new Date(date));
}

// Migration function to handle old data format
function migrateOldData() {
    console.log('Running migration for old data format...');
    let migrationCount = 0;
    
    Object.keys(sampleData.content).forEach(userId => {
        const userContent = sampleData.content[userId];
        
        // Migrate sessions from old format to new format
        if (userContent.sessions) {
            userContent.sessions = userContent.sessions.map(session => {
                let migrated = false;
                
                // If session.hifz is a string, convert it to object format
                if (typeof session.hifz === 'string') {
                    console.log('Migrating hifz string:', session.hifz);
                    // Try different patterns to match the data
                    let hifzMatch = session.hifz.match(/^(.+?)\s+(\d+)(?:-(\d+))?$/);
                    if (!hifzMatch) {
                        // Try pattern without space before number
                        hifzMatch = session.hifz.match(/^(.+?)(\d+)(?:-(\d+))?$/);
                    }
                    if (!hifzMatch) {
                        // Try pattern with just surah name and single number
                        hifzMatch = session.hifz.match(/^(.+?)\s*(\d+)$/);
                    }
                    
                    if (hifzMatch) {
                        const surah = hifzMatch[1].trim();
                        const startAyah = parseInt(hifzMatch[2]);
                        const endAyah = hifzMatch[3] ? parseInt(hifzMatch[3]) : startAyah;
                        session.hifz = {
                            surah: surah,
                            ayahRange: `${startAyah}-${endAyah}`,
                            startAyah: startAyah,
                            endAyah: endAyah
                        };
                        migrated = true;
                        console.log('Migrated hifz to:', session.hifz);
                    } else {
                        console.log('Could not parse hifz string:', session.hifz);
                    }
                }
                
                // If session.revision is a string, convert it to object format
                if (typeof session.revision === 'string') {
                    console.log('Migrating revision string:', session.revision);
                    // Try different patterns to match the data
                    let revisionMatch = session.revision.match(/^(.+?)\s+(\d+)(?:-(\d+))?$/);
                    if (!revisionMatch) {
                        // Try pattern without space before number
                        revisionMatch = session.revision.match(/^(.+?)(\d+)(?:-(\d+))?$/);
                    }
                    if (!revisionMatch) {
                        // Try pattern with just surah name and single number
                        revisionMatch = session.revision.match(/^(.+?)\s*(\d+)$/);
                    }
                    
                    if (revisionMatch) {
                        const surah = revisionMatch[1].trim();
                        const startAyah = parseInt(revisionMatch[2]);
                        const endAyah = revisionMatch[3] ? parseInt(revisionMatch[3]) : startAyah;
                        session.revision = {
                            surah: surah,
                            ayahRange: `${startAyah}-${endAyah}`,
                            startAyah: startAyah,
                            endAyah: endAyah
                        };
                        migrated = true;
                        console.log('Migrated revision to:', session.revision);
                    } else {
                        console.log('Could not parse revision string:', session.revision);
                    }
                }
                
                if (migrated) migrationCount++;
                return session;
            });
        }
    });
    
    console.log(`Migration completed. Migrated ${migrationCount} sessions.`);
    
    // Migration completed - data will be loaded from Firebase
    if (migrationCount > 0) {
        console.log('Migration completed - data will be loaded from Firebase');
    }
}

// Force clear localStorage and reset to sample data (for testing)
function forceResetData() {
    console.log('Force resetting data to sample data...');
    localStorage.clear();
    saveAllDataToStorage();
    console.log('Data reset complete. Please refresh the page.');
}

// Complete database clear function
async function clearCompleteDatabase() {
    console.log('=== CLEARING COMPLETE DATABASE ===');
    
    try {
        // Clear Firebase if available
        if (window.firebaseService && window.firebaseService.initialized) {
            console.log('Clearing Firebase database...');
            try {
                await window.firebaseService.clearAllData();
                console.log('Firebase database cleared successfully');
            } catch (error) {
                console.error('Firebase clear failed, continuing with localStorage clear:', error);
            }
        } else {
            console.log('Firebase not available, skipping Firebase clear');
        }
        
        // Clear all localStorage keys used by the system
        const keysToClear = [
            'quranStudents',
            'quranTeachers', 
            'quranContent',
            'quranSessions',
            'quranProgress',
            'sampleData',
            'quranLanguage',
            'currentUser',
            'currentUserType',
            'selectedStudent'
        ];
        
        keysToClear.forEach(key => {
            localStorage.removeItem(key);
            console.log(`Cleared localStorage key: ${key}`);
        });
        
        // Reset all global data objects
        sampleData.students = {};
        sampleData.teachers = {};
        sampleData.content = {};
        sampleData.admin = null;
        
        // Reset global variables
        currentUser = null;
        currentUserType = null;
        selectedStudent = null;
        
        console.log('Complete database clear successful!');
        return true;
        
    } catch (error) {
        console.error('Error clearing database:', error);
        return false;
    }
}

// Aggressive fix for ayah ranges - directly modify existing data
function fixAyahRanges() {
    console.log('Fixing ayah ranges in existing data...');
    let fixedCount = 0;
    
    Object.keys(sampleData.content).forEach(userId => {
        const userContent = sampleData.content[userId];
        
        if (userContent.sessions) {
            userContent.sessions.forEach(session => {
                // Fix hifz if it's a string
                if (typeof session.hifz === 'string') {
                    console.log('Found string hifz:', session.hifz);
                    const parts = session.hifz.split(' ');
                    if (parts.length >= 2) {
                        const surah = parts[0];
                        const ayahPart = parts[1];
                        const ayahMatch = ayahPart.match(/(\d+)(?:-(\d+))?/);
                        if (ayahMatch) {
                            const startAyah = parseInt(ayahMatch[1]);
                            const endAyah = ayahMatch[2] ? parseInt(ayahMatch[2]) : startAyah;
                            session.hifz = {
                                surah: surah,
                                ayahRange: `${startAyah}-${endAyah}`,
                                startAyah: startAyah,
                                endAyah: endAyah
                            };
                            fixedCount++;
                            console.log('Fixed hifz:', session.hifz);
                        }
                    }
                }
                
                // Fix revision if it's a string
                if (typeof session.revision === 'string') {
                    console.log('Found string revision:', session.revision);
                    const parts = session.revision.split(' ');
                    if (parts.length >= 2) {
                        const surah = parts[0];
                        const ayahPart = parts[1];
                        const ayahMatch = ayahPart.match(/(\d+)(?:-(\d+))?/);
                        if (ayahMatch) {
                            const startAyah = parseInt(ayahMatch[1]);
                            const endAyah = ayahMatch[2] ? parseInt(ayahMatch[2]) : startAyah;
                            session.revision = {
                                surah: surah,
                                ayahRange: `${startAyah}-${endAyah}`,
                                startAyah: startAyah,
                                endAyah: endAyah
                            };
                            fixedCount++;
                            console.log('Fixed revision:', session.revision);
                        }
                    }
                }
            });
        }
    });
    
    if (fixedCount > 0) {
        console.log(`Fixed ${fixedCount} ayah ranges. Data will be loaded from Firebase.`);
    } else {
        console.log('No ayah ranges needed fixing.');
    }
}

// Force fix all existing data to proper format
function forceFixAllData() {
    console.log('Force fixing all data...');
    let fixedCount = 0;
    
    // Also fix hifz and revision arrays
    Object.keys(sampleData.content).forEach(userId => {
        const userContent = sampleData.content[userId];
        
        // Fix hifz array
        if (userContent.hifz) {
            userContent.hifz = userContent.hifz.map(item => {
                if (typeof item === 'string') {
                    console.log('Converting string hifz item:', item);
                    const parts = item.split(' ');
                    if (parts.length >= 2) {
                        const surah = parts[0];
                        const ayahPart = parts[1];
                        const ayahMatch = ayahPart.match(/(\d+)(?:-(\d+))?/);
                        if (ayahMatch) {
                            const startAyah = parseInt(ayahMatch[1]);
                            const endAyah = ayahMatch[2] ? parseInt(ayahMatch[2]) : startAyah;
                            fixedCount++;
                            const newItem = {
                                surah: surah,
                                ayahRange: `${startAyah}-${endAyah}`,
                                startAyah: startAyah,
                                endAyah: endAyah
                            };
                            console.log('Converted hifz item to:', newItem);
                            return newItem;
                        }
                    }
                }
                return item;
            });
        }
        
        // Fix revision array
        if (userContent.revision) {
            userContent.revision = userContent.revision.map(item => {
                if (typeof item === 'string') {
                    console.log('Converting string revision item:', item);
                    const parts = item.split(' ');
                    if (parts.length >= 2) {
                        const surah = parts[0];
                        const ayahPart = parts[1];
                        const ayahMatch = ayahPart.match(/(\d+)(?:-(\d+))?/);
                        if (ayahMatch) {
                            const startAyah = parseInt(ayahMatch[1]);
                            const endAyah = ayahMatch[2] ? parseInt(ayahMatch[2]) : startAyah;
                            fixedCount++;
                            const newItem = {
                                surah: surah,
                                ayahRange: `${startAyah}-${endAyah}`,
                                startAyah: startAyah,
                                endAyah: endAyah
                            };
                            console.log('Converted revision item to:', newItem);
                            return newItem;
                        }
                    }
                }
                return item;
            });
        }
        
        // Fix sessions - FORCE conversion even if surah names don't match
        if (userContent.sessions) {
            userContent.sessions = userContent.sessions.map(session => {
                // Convert any string data to proper object format
                let hifz = session.hifz;
                let revision = session.revision;
                let sessionFixed = false;
                
                if (typeof hifz === 'string') {
                    console.log('Converting string hifz:', hifz);
                    const parts = hifz.split(' ');
                    if (parts.length >= 2) {
                        const surah = parts[0];
                        const ayahPart = parts[1];
                        const ayahMatch = ayahPart.match(/(\d+)(?:-(\d+))?/);
                        if (ayahMatch) {
                            const startAyah = parseInt(ayahMatch[1]);
                            const endAyah = ayahMatch[2] ? parseInt(ayahMatch[2]) : startAyah;
                            hifz = {
                                surah: surah,
                                ayahRange: `${startAyah}-${endAyah}`,
                                startAyah: startAyah,
                                endAyah: endAyah
                            };
                            sessionFixed = true;
                            console.log('Converted hifz to:', hifz);
                        }
                    }
                }
                
                if (typeof revision === 'string') {
                    console.log('Converting string revision:', revision);
                    const parts = revision.split(' ');
                    if (parts.length >= 2) {
                        const surah = parts[0];
                        const ayahPart = parts[1];
                        const ayahMatch = ayahPart.match(/(\d+)(?:-(\d+))?/);
                        if (ayahMatch) {
                            const startAyah = parseInt(ayahMatch[1]);
                            const endAyah = ayahMatch[2] ? parseInt(ayahMatch[2]) : startAyah;
                            revision = {
                                surah: surah,
                                ayahRange: `${startAyah}-${endAyah}`,
                                startAyah: startAyah,
                                endAyah: endAyah
                            };
                            sessionFixed = true;
                            console.log('Converted revision to:', revision);
                        }
                    }
                }
                
                if (sessionFixed) fixedCount++;
                
                return {
                    date: session.date,
                    hifz: hifz,
                    revision: revision,
                    score: session.score
                };
            });
        }
    });
    
    if (fixedCount > 0) {
        console.log(`Fixed ${fixedCount} items. Data will be loaded from Firebase.`);
    } else {
        console.log('No items needed fixing.');
    }
}

// Additional function to force convert sample data
function forceConvertSampleData() {
    console.log('Force converting sample data...');
    
    // Convert the sample data sessions to use proper HTML surah names
    Object.keys(sampleData.content).forEach(userId => {
        const userContent = sampleData.content[userId];
        if (userContent.sessions) {
            userContent.sessions = userContent.sessions.map(session => {
                let hifz = session.hifz;
                let revision = session.revision;
                
                // Convert surah names to match HTML dropdowns
                if (hifz && typeof hifz === 'object' && hifz.surah) {
                    const surahNameMap = {
                        'Al-Fatihah': 'Al Fatiha',
                        'Ali Imran': 'Al Imran', 
                        'Taha': 'Ta Ha',
                        'Al-Anfal': 'Al Anfal',
                        'Al-Mulk': 'Al Mulk',
                        'An-Nazi\'at': 'An Nazi\'at'
                    };
                    
                    if (surahNameMap[hifz.surah]) {
                        hifz.surah = surahNameMap[hifz.surah];
                        console.log('Converted hifz surah name to:', hifz.surah);
                    }
                }
                
                if (revision && typeof revision === 'object' && revision.surah) {
                    const surahNameMap = {
                        'Al-Fatihah': 'Al Fatiha',
                        'Ali Imran': 'Al Imran', 
                        'Taha': 'Ta Ha',
                        'Al-Anfal': 'Al Anfal',
                        'Al-Mulk': 'Al Mulk',
                        'An-Nazi\'at': 'An Nazi\'at'
                    };
                    
                    if (surahNameMap[revision.surah]) {
                        revision.surah = surahNameMap[revision.surah];
                        console.log('Converted revision surah name to:', revision.surah);
                    }
                }
                
                return session;
            });
        }
    });
    
    console.log('Sample data converted. Data will be loaded from Firebase.');
}

// AGGRESSIVE FIX: Force add endAyah to all existing data
function forceAddEndAyah() {
    console.log('Force adding endAyah to all data...');
    let fixedCount = 0;
    
    Object.keys(sampleData.content).forEach(userId => {
        const userContent = sampleData.content[userId];
        
        // Fix hifz array
        if (userContent.hifz) {
            userContent.hifz = userContent.hifz.map(item => {
                if (typeof item === 'object' && item.startAyah !== undefined && item.endAyah === undefined) {
                    // Only set endAyah = startAyah if we don't have a range in ayahRange
                    if (item.ayahRange && item.ayahRange.includes('-')) {
                        const rangeMatch = item.ayahRange.match(/(\d+)-(\d+)/);
                        if (rangeMatch) {
                            item.endAyah = parseInt(rangeMatch[2]);
                        } else {
                            item.endAyah = item.startAyah;
                        }
                    } else {
                        item.endAyah = item.startAyah;
                    }
                    fixedCount++;
                    console.log('Added endAyah to hifz item:', item);
                }
                return item;
            });
        }
        
        // Fix revision array
        if (userContent.revision) {
            userContent.revision = userContent.revision.map(item => {
                if (typeof item === 'object' && item.startAyah !== undefined && item.endAyah === undefined) {
                    // Only set endAyah = startAyah if we don't have a range in ayahRange
                    if (item.ayahRange && item.ayahRange.includes('-')) {
                        const rangeMatch = item.ayahRange.match(/(\d+)-(\d+)/);
                        if (rangeMatch) {
                            item.endAyah = parseInt(rangeMatch[2]);
                        } else {
                            item.endAyah = item.startAyah;
                        }
                    } else {
                        item.endAyah = item.startAyah;
                    }
                    fixedCount++;
                    console.log('Added endAyah to revision item:', item);
                }
                return item;
            });
        }
        
        // Fix sessions
        if (userContent.sessions) {
            userContent.sessions = userContent.sessions.map(session => {
                let sessionFixed = false;
                
                if (session.hifz && typeof session.hifz === 'object' && session.hifz.startAyah !== undefined && session.hifz.endAyah === undefined) {
                    // Only set endAyah = startAyah if we don't have a range in ayahRange
                    if (session.hifz.ayahRange && session.hifz.ayahRange.includes('-')) {
                        const rangeMatch = session.hifz.ayahRange.match(/(\d+)-(\d+)/);
                        if (rangeMatch) {
                            session.hifz.endAyah = parseInt(rangeMatch[2]);
                        } else {
                            session.hifz.endAyah = session.hifz.startAyah;
                        }
                    } else {
                        session.hifz.endAyah = session.hifz.startAyah;
                    }
                    sessionFixed = true;
                    console.log('Added endAyah to session hifz:', session.hifz);
                }
                
                if (session.revision && typeof session.revision === 'object' && session.revision.startAyah !== undefined && session.revision.endAyah === undefined) {
                    // Only set endAyah = startAyah if we don't have a range in ayahRange
                    if (session.revision.ayahRange && session.revision.ayahRange.includes('-')) {
                        const rangeMatch = session.revision.ayahRange.match(/(\d+)-(\d+)/);
                        if (rangeMatch) {
                            session.revision.endAyah = parseInt(rangeMatch[2]);
                        } else {
                            session.revision.endAyah = session.revision.startAyah;
                        }
                    } else {
                        session.revision.endAyah = session.revision.startAyah;
                    }
                    sessionFixed = true;
                    console.log('Added endAyah to session revision:', session.revision);
                }
                
                if (sessionFixed) fixedCount++;
                return session;
            });
        }
    });
    
    if (fixedCount > 0) {
        console.log(`Added endAyah to ${fixedCount} items. Data will be loaded from Firebase.`);
    } else {
        console.log('No items needed endAyah added.');
    }
}

// ULTIMATE FIX: Force create test data with proper structure
function createTestDataWithRanges() {
    console.log('Creating test data with proper ayah ranges...');
    
    // Add test sessions to SMA2AM1 with proper structure
    if (!sampleData.content['SMA2AM1']) {
        sampleData.content['SMA2AM1'] = { hifz: [], revision: [], sessions: [] };
    }
    
    // Add test sessions with proper ayah range structure
    sampleData.content['SMA2AM1'].sessions = [
        {
            date: '2025-09-13',
            hifz: {
                surah: 'Al Mulk',
                ayahRange: '12-12',
                startAyah: 12,
                endAyah: 12
            },
            revision: {
                surah: 'Al Anfal',
                ayahRange: '3-3',
                startAyah: 3,
                endAyah: 3
            },
            score: 9
        },
        {
            date: '2025-09-19',
            hifz: {
                surah: 'Ta Ha',
                ayahRange: '14-14',
                startAyah: 14,
                endAyah: 14
            },
            revision: {
                surah: 'Al Anfal',
                ayahRange: '3-3',
                startAyah: 3,
                endAyah: 3
            },
            score: 7
        }
    ];
    
    console.log('Test data created with proper ayah ranges. Data will be loaded from Firebase.');
}

// Debug function to check current data structure
function debugDataStructure() {
    console.log('=== DEBUGGING DATA STRUCTURE ===');
    Object.keys(sampleData.content).forEach(userId => {
        const userContent = sampleData.content[userId];
        console.log(`User: ${userId}`);
        console.log('Hifz:', userContent.hifz);
        console.log('Revision:', userContent.revision);
        console.log('Sessions:', userContent.sessions);
        
        if (userContent.sessions && userContent.sessions.length > 0) {
            userContent.sessions.forEach((session, index) => {
                console.log(`Session ${index}:`, {
                    hifz: session.hifz,
                    revision: session.revision,
                    hifzType: typeof session.hifz,
                    revisionType: typeof session.revision
                });
            });
        }
        console.log('---');
    });
    console.log('=== END DEBUG ===');
}

// Sample data for demonstration with new ID system
const sampleData = {
    admin: {
        'ADMINYNG9': { 
            name: 'System Administrator', 
            role: 'admin',
            id: 'ADMINYNG9',
            type: 'admin',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
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
        'login.no_account': 'Don\'t have an account?',
        'login.create_account': 'Create New Account',
        'login.back_to_login': 'Back to Login',
        
        // Form elements
        'form.start_ayah': 'Start Ayah',
        'form.end_ayah': 'End Ayah',
        'form.to': 'to',
        'form.select_surah_first': 'Please select a surah first',
        
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
        'modal.select_start_ayah': 'Start Ayah',
        'modal.select_end_ayah': 'End Ayah',
        'modal.ayah_range': 'Ayah Range',
        'modal.ayah_placeholder': 'e.g., 1 - 25',
        'modal.date': 'Date',
        'modal.grade': 'Grade',
        'modal.select_grade': 'Select Grade',
        'modal.score': 'Score',
        'modal.select_score': 'Select Score',
        'modal.add': 'Add',
        'modal.cancel': 'Cancel',
        'modal.close': 'Close',
        'modal.confirm_delete': 'Are you sure you want to delete this item?',
        'modal.confirm_delete_session': 'Are you sure you want to delete this session?',
        
        // Admin
        'admin.system_administration': 'System Administration',
        'admin.create_account': 'Create New Account',
        'admin.assign_students': 'Assign Students to Teachers',
        'admin.assign_description': 'Select a teacher and then choose an unassigned student to create an assignment.',
        'admin.system_stats': 'System Statistics',
        'admin.delete_student': 'Delete Individual Student',
        'admin.delete_student_warning': 'Select a student to delete from the system.',
        'admin.delete_teacher': 'Delete Individual Teacher',
        'admin.delete_teacher_warning': 'Select a teacher to delete from the system.',
        'admin.student_info': 'Student Information',
        'admin.teacher_info': 'Teacher Information',
        'admin.name': 'Name',
        'admin.class': 'Class',
        'admin.teacher': 'Teacher',
        'admin.content_items': 'Content Items',
        'admin.assigned_students': 'Assigned Students',
        'admin.impact': 'Impact',
        'admin.delete_all_teachers': 'Delete All Teachers',
        'admin.delete_all_students': 'Delete All Students',
        
        // Options button
        'options.title': 'Options',
        
        // Teacher Dashboard
        'teacher.select_class': 'Select a Class',
        'teacher.class_description': 'Choose a class to view and assign students',
        'teacher.select_student': 'Select Students',
        'teacher.students_in_class': 'Students in this class:',
        'teacher.dashboard_options': 'Teacher Dashboard Options',
        'teacher.choose_action': 'Choose an action:',
        'teacher.add_student': 'Add Student',
        'teacher.edit_students': 'Edit Students',
        'teacher.assigned_students': 'Your Assigned Students',
        'teacher.no_students_assigned': 'No students assigned yet',
        'teacher.student_assigned': 'Student assigned successfully',
        'teacher.student_removed': 'Student removed successfully',
        'teacher.add_selected': 'Add Selected Students',
        'teacher.no_students_selected': 'Please select at least one student',
        
        // Notifications
        'notification.welcome': 'Welcome',
        // 'notification.please_enter_code': 'Please enter your code', // REMOVED
        'notification.language_changed': 'Language changed to English',
        'notification.arabic': 'Arabic',
        'notification.english': 'English',
        'notification.hifz_added': 'Hifz entry added successfully',
        'notification.revision_added': 'Revision entry added successfully',
        'notification.session_added': 'Session added successfully',
        'notification.account_created': 'Account created successfully',
        'notification.student_assigned': 'Student assigned successfully',
        'notification.student_deleted': 'Student deleted successfully',
        'notification.teacher_deleted': 'Teacher deleted successfully',
        'notification.all_students_deleted': 'All students deleted successfully',
        'notification.all_teachers_deleted': 'All teachers deleted successfully',
        'notification.logged_out': 'You have been logged out successfully',
        
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
        'login.no_account': 'ليس لديك حساب؟',
        'login.create_account': 'إنشاء حساب جديد',
        'login.back_to_login': 'العودة إلى تسجيل الدخول',
        
        // Form elements
        'form.start_ayah': 'الآية الأولى',
        'form.end_ayah': 'الآية الأخيرة',
        'form.to': 'إلى',
        'form.select_surah_first': 'يرجى اختيار السورة أولاً',
        
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
        'modal.select_start_ayah': 'الآية الأولى',
        'modal.select_end_ayah': 'الآية الأخيرة',
        'modal.ayah_range': 'نطاق الآيات',
        'modal.ayah_placeholder': 'مثال: 1 - 25',
        'modal.date': 'التاريخ',
        'modal.grade': 'الدرجة',
        'modal.select_grade': 'اختر الدرجة',
        'modal.score': 'النتيجة',
        'modal.select_score': 'اختر النتيجة',
        'modal.add': 'إضافة',
        'modal.cancel': 'إلغاء',
        'modal.close': 'إغلاق',
        'modal.confirm_delete': 'هل أنت متأكد من حذف هذا العنصر؟',
        'modal.confirm_delete_session': 'هل أنت متأكد من حذف هذه الجلسة؟',
        
        // Admin
        'admin.system_administration': 'إدارة النظام',
        'admin.create_account': 'إنشاء حساب جديد',
        'admin.assign_students': 'تعيين الطلاب للمعلمين',
        'admin.assign_description': 'اختر معلماً ثم اختر طالباً غير مخصص لإنشاء تعيين.',
        'admin.system_stats': 'إحصائيات النظام',
        'admin.delete_student': 'حذف طالب فردي',
        'admin.delete_student_warning': 'اختر طالباً لحذفه من النظام.',
        'admin.delete_teacher': 'حذف معلم فردي',
        'admin.delete_teacher_warning': 'اختر معلماً لحذفه من النظام.',
        'admin.student_info': 'معلومات الطالب',
        'admin.teacher_info': 'معلومات المعلم',
        'admin.name': 'الاسم',
        'admin.class': 'الفصل',
        'admin.teacher': 'المعلم',
        'admin.content_items': 'عناصر المحتوى',
        'admin.assigned_students': 'الطلاب المخصصون',
        'admin.impact': 'التأثير',
        'admin.delete_all_teachers': 'حذف جميع المعلمين',
        'admin.delete_all_students': 'حذف جميع الطلاب',
        
        // Options button
        'options.title': 'خيارات',
        
        // Teacher Dashboard
        'teacher.select_class': 'اختر الفصل',
        'teacher.class_description': 'اختر فصلاً لعرض وتعيين الطلاب',
        'teacher.select_student': 'اختر الطلاب',
        'teacher.students_in_class': 'الطلاب في هذا الفصل:',
        'teacher.dashboard_options': 'خيارات لوحة المعلم',
        'teacher.choose_action': 'اختر إجراء:',
        'teacher.add_student': 'إضافة طالب',
        'teacher.edit_students': 'تعديل الطلاب',
        'teacher.assigned_students': 'الطلاب المعينون لك',
        'teacher.no_students_assigned': 'لم يتم تعيين طلاب بعد',
        'teacher.student_assigned': 'تم تعيين الطالب بنجاح',
        'teacher.student_removed': 'تم إزالة الطالب بنجاح',
        'teacher.add_selected': 'إضافة الطلاب المحددين',
        'teacher.no_students_selected': 'يرجى اختيار طالب واحد على الأقل',
        
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
let dataJustCleared = false; // Flag to prevent reloading after deletion
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
    
    const loginLanguageToggle = document.getElementById('loginLanguageToggle');
    if (loginLanguageToggle) {
        loginLanguageToggle.textContent = lang === 'ar' ? 'EN' : 'ع';
        loginLanguageToggle.classList.toggle('active', lang === 'ar');
    }
    
    // Update all text elements
    updateUITexts();
    
    // Refresh content display to show translated Surah names
    if (currentUser && currentUserType !== 'admin') {
        if (currentUserType === 'teacher') {
            // Refresh teacher dashboard
            if (selectedStudent) {
                loadStudentContent(selectedStudent);
            } else {
                // Show empty state with translated text
                const hifzContent = document.getElementById('hifzContent');
                const revisionContent = document.getElementById('revisionContent');
                const sessionsList = document.getElementById('sessionsList');
                
                if (hifzContent) hifzContent.innerHTML = `<p style="text-align: center; color: #666; padding: 20px;">${getTranslation('content.select_student')}</p>`;
                if (revisionContent) revisionContent.innerHTML = `<p style="text-align: center; color: #666; padding: 20px;">${getTranslation('content.select_student')}</p>`;
                if (sessionsList) sessionsList.innerHTML = `<p style="text-align: center; color: #666; padding: 20px;">${getTranslation('content.select_student')}</p>`;
            }
        } else if (currentUserType === 'student') {
            // Refresh student content
            loadStudentContent(currentUser);
        }
    } else if (currentUser && currentUserType === 'admin') {
        // Just update the admin dashboard texts without recreating it
        updateAdminTexts();
    }
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
        const gradeLabel = addSessionModal.querySelector('label[for="sessionScore"]');
        const addBtn = addSessionModal.querySelector('.btn-primary');
        const cancelBtn = addSessionModal.querySelector('.btn-secondary');
        
        if (title) title.textContent = getTranslation('modal.add_session');
        if (dateLabel) dateLabel.textContent = getTranslation('modal.date');
        if (hifzLabel) hifzLabel.textContent = getTranslation('session.hifz_surahs');
        if (revisionLabel) revisionLabel.textContent = getTranslation('session.revision_surahs');
        
        // Update session form Surah dropdowns
        // Update session form surah options for all existing selects
        const sessionHifzSelects = addSessionModal.querySelectorAll('.session-hifz-surah');
        const sessionRevisionSelects = addSessionModal.querySelectorAll('.session-revision-surah');
        
        sessionHifzSelects.forEach(select => updateSurahOptions(select));
        sessionRevisionSelects.forEach(select => updateSurahOptions(select));
        
        if (gradeLabel) gradeLabel.textContent = getTranslation('modal.score');
        if (addBtn) addBtn.textContent = getTranslation('modal.add');
        if (cancelBtn) cancelBtn.textContent = getTranslation('modal.cancel');
    }
}

function updateAdminTexts() {
    const adminSection = document.querySelector('.admin-section h2');
    if (adminSection) adminSection.textContent = getTranslation('admin.system_administration');
    
    // Update admin buttons with proper structure preservation
    const adminButtons = document.querySelectorAll('.admin-btn');
    adminButtons.forEach(btn => {
        const icon = btn.querySelector('.icon');
        if (icon) {
            const iconText = icon.textContent;
            let newText = '';
            
            if (iconText.includes('👤') && !iconText.includes('🗑️')) {
                newText = getTranslation('admin.create_account');
            } else if (iconText.includes('🔗')) {
                newText = getTranslation('admin.assign_students');
            } else if (iconText.includes('📊')) {
                newText = getTranslation('admin.system_stats');
            } else if (iconText.includes('👤🗑️')) {
                newText = getTranslation('admin.delete_student');
            } else if (iconText.includes('👨‍🏫🗑️')) {
                newText = getTranslation('admin.delete_teacher');
            } else if (iconText.includes('🗑️') && !iconText.includes('👤') && !iconText.includes('👨‍🏫')) {
                if (btn.innerHTML.includes('Teachers') || btn.onclick.toString().includes('deleteAllTeachers')) {
                    newText = getTranslation('admin.delete_all_teachers');
                } else if (btn.innerHTML.includes('Students') || btn.onclick.toString().includes('deleteAllStudents')) {
                    newText = getTranslation('admin.delete_all_students');
                }
            }
            
            if (newText) {
                // Preserve the icon and update only the text
                btn.innerHTML = `<span class="icon">${iconText}</span>${newText}`;
            }
        }
    });
    
    // Update back to login button
    const backBtn = document.querySelector('.admin-actions .btn-secondary');
    if (backBtn) {
        backBtn.textContent = getTranslation('admin.back_to_login');
    }
}

function updateSurahOptions(selectElement) {
    if (!selectElement) return;
    
    console.log('=== UPDATE SURAH OPTIONS ===');
    console.log('Select element:', selectElement);
    console.log('Classes:', selectElement.className);
    console.log('Sample data content:', sampleData.content);
    console.log('Content keys:', Object.keys(sampleData.content));
    
    // If this is a session form select, populate it with actual content from cards
    if (selectElement.classList.contains('session-hifz-surah') || selectElement.classList.contains('session-revision-surah')) {
        console.log('Session form select detected, populating with content options');
        populateSessionContentOptions(selectElement);
        return;
    }
    
    const options = selectElement.querySelectorAll('option');
    options.forEach(option => {
        if (option.value && option.value !== '') {
            const surahKey = option.value.toLowerCase().replace(/\s+/g, '_').replace(/'/g, '');
            const arabicName = getTranslation(`surah.${surahKey}`);
            if (arabicName && arabicName !== `surah.${surahKey}`) {
                option.textContent = currentLanguage === 'ar' ? 
                    arabicName : 
                    `${option.value} (${arabicName})`;
            }
        }
    });
}

function populateSurahOptions(selectElement) {
    if (!selectElement) return;
    
    // Clear existing options except the first one
    const firstOption = selectElement.querySelector('option[value=""]');
    selectElement.innerHTML = '';
    if (firstOption) {
        selectElement.appendChild(firstOption);
    }
    
    // Add all surah options
    const surahs = Object.keys(surahAyahCounts);
    surahs.forEach(surah => {
        const option = document.createElement('option');
        option.value = surah;
        
        // Get Arabic translation
        const surahKey = surah.toLowerCase().replace(/\s+/g, '_').replace(/'/g, '');
        const arabicName = getTranslation(`surah.${surahKey}`);
        
        if (arabicName && arabicName !== `surah.${surahKey}`) {
            option.textContent = currentLanguage === 'ar' ? 
                arabicName : 
                `${surah} (${arabicName})`;
        } else {
            option.textContent = surah;
        }
        
        selectElement.appendChild(option);
    });
}

function populateSessionContentOptions(selectElement) {
    if (!selectElement) return;
    
    console.log('=== POPULATING SESSION CONTENT OPTIONS ===');
    console.log('Select element:', selectElement);
    console.log('Current user type:', currentUserType);
    console.log('Current user:', currentUser);
    console.log('Editing student:', editingStudent);
    
    // Store the current value to restore it
    const currentValue = selectElement.value;
    console.log('Current value before population:', currentValue);
    
    // Get the current student's content
    const targetUser = getCurrentStudentId();
    console.log('Target user:', targetUser);
    
    // Get content from the actual dashboard cards instead of sample data
    const realContent = getRealDashboardContent(targetUser);
    console.log('Real dashboard content:', realContent);
    
    if (!targetUser || !realContent) {
        console.log('No student selected or no content available, using all available content');
        // If no student selected, show all available content from all students
        populateAllContentOptions(selectElement);
        
        // Restore the value after population
        if (currentValue) {
            setTimeout(() => {
                if (selectElement.querySelector(`option[value="${currentValue}"]`)) {
                    selectElement.value = currentValue;
                    console.log('Restored value after population:', selectElement.value);
                }
            }, 100);
        }
        return;
    }
    
    const isHifz = selectElement.classList.contains('session-hifz-surah');
    const contentItems = isHifz ? realContent.hifz : realContent.revision;
    
    console.log('Is hifz:', isHifz);
    console.log('Content items from cards:', contentItems);
    
    // Clear existing options except the first one
    const firstOption = selectElement.querySelector('option[value=""]');
    selectElement.innerHTML = '';
    if (firstOption) {
        selectElement.appendChild(firstOption);
    }
    
    // Add content items as options
    if (contentItems && contentItems.length > 0) {
        contentItems.forEach((item, index) => {
            const option = document.createElement('option');
            option.value = `${item.surah} ${item.ayahRange}`;
            option.textContent = formatContentItem(item, currentLanguage === 'ar');
            selectElement.appendChild(option);
        });
        console.log(`Populated ${isHifz ? 'hifz' : 'revision'} dropdown with ${contentItems.length} items from dashboard cards`);
        
        // Restore the value after population
        if (currentValue) {
            setTimeout(() => {
                if (selectElement.querySelector(`option[value="${currentValue}"]`)) {
                    selectElement.value = currentValue;
                    console.log('Restored value after population:', selectElement.value);
                    
                    // Trigger the toggle function to update the button
                    if (isHifz) {
                        toggleHifzAddButton(selectElement);
                    } else {
                        toggleRevisionAddButton(selectElement);
                    }
                }
            }, 100);
        }
    } else {
        console.log(`No ${isHifz ? 'hifz' : 'revision'} content available in dashboard cards for student ${targetUser}`);
        // Fallback to all content
        populateAllContentOptions(selectElement);
        
        // Restore the value after population
        if (currentValue) {
            setTimeout(() => {
                if (selectElement.querySelector(`option[value="${currentValue}"]`)) {
                    selectElement.value = currentValue;
                    console.log('Restored value after population:', selectElement.value);
                }
            }, 100);
        }
    }
}

function getRealDashboardContent(studentId) {
    console.log('=== GETTING REAL DASHBOARD CONTENT ===');
    console.log('Student ID:', studentId);
    
    if (!studentId) {
        console.log('No student ID provided');
        return null;
    }
    
    // First, try to get content from the dashboard cards by reading their HTML
    const hifzContent = extractContentFromCard('hifz');
    const revisionContent = extractContentFromCard('revision');
    
    console.log('Hifz content from cards:', hifzContent);
    console.log('Revision content from cards:', revisionContent);
    
    // If we found content in the cards, use that
    if (hifzContent.length > 0 || revisionContent.length > 0) {
        return {
            hifz: hifzContent,
            revision: revisionContent
        };
    }
    
    // Fallback to sampleData if cards are empty
    console.log('No content found in cards, falling back to sampleData');
    if (sampleData.content && sampleData.content[studentId]) {
        return sampleData.content[studentId];
    }
    
    console.log('No content found anywhere for student:', studentId);
    return null;
}

function extractContentFromCard(type) {
    console.log(`=== EXTRACTING ${type.toUpperCase()} CONTENT FROM CARD ===`);
    
    // Look for the content in the dashboard cards
    const cardSelector = type === 'hifz' ? '.hifz-card' : '.revision-card';
    const card = document.querySelector(cardSelector);
    
    if (!card) {
        console.log(`No ${type} card found with selector:`, cardSelector);
        // Try alternative selectors
        const altSelectors = [
            `#${type}Card`,
            `.${type}-content`,
            `[data-type="${type}"]`,
            `.card:has([data-translate*="${type}"])`
        ];
        
        for (const selector of altSelectors) {
            const altCard = document.querySelector(selector);
            if (altCard) {
                console.log(`Found ${type} card with alternative selector:`, selector);
                return parseCardContent(altCard, type);
            }
        }
        
        console.log(`No ${type} card found with any selector`);
        return [];
    }
    
    return parseCardContent(card, type);
}

function parseCardContent(cardElement, type) {
    console.log(`=== PARSING ${type.toUpperCase()} CARD CONTENT ===`);
    console.log('Card element:', cardElement);
    
    const content = [];
    
    // Look for content items in various formats
    const contentSelectors = [
        '.content-item',
        '.surah-item',
        '.ayah-item',
        'li',
        'p',
        '.item'
    ];
    
    for (const selector of contentSelectors) {
        const items = cardElement.querySelectorAll(selector);
        if (items.length > 0) {
            console.log(`Found ${items.length} items with selector:`, selector);
            
            items.forEach(item => {
                const text = item.textContent.trim();
                if (text) {
                    const parsed = parseContentText(text);
                    if (parsed) {
                        content.push(parsed);
                    }
                }
            });
            
            if (content.length > 0) {
                break; // Found content, no need to try other selectors
            }
        }
    }
    
    // If no structured content found, try to parse the entire card text
    if (content.length === 0) {
        console.log('No structured content found, parsing entire card text');
        const cardText = cardElement.textContent.trim();
        const lines = cardText.split('\n').map(line => line.trim()).filter(line => line);
        
        lines.forEach(line => {
            const parsed = parseContentText(line);
            if (parsed) {
                content.push(parsed);
            }
        });
    }
    
    console.log(`Extracted ${content.length} ${type} items:`, content);
    return content;
}

function parseContentText(text) {
    console.log('Parsing content text:', text);
    
    // Skip headers, labels, and empty text
    if (!text || text.length < 3) return null;
    if (text.toLowerCase().includes('hifz') || text.toLowerCase().includes('revision')) return null;
    if (text.toLowerCase().includes('surah') && text.length < 10) return null;
    
    // Try to extract surah name and ayah range
    // Format examples: "Al Fatiha 1-7", "Yunus: 7-9", "Al Baqarah (1-5)"
    const patterns = [
        /^(.+?)\s+(\d+[-–]\d+)$/,           // "Al Fatiha 1-7"
        /^(.+?):\s*(\d+[-–]\d+)$/,         // "Yunus: 7-9"
        /^(.+?)\s*\((\d+[-–]\d+)\)$/,      // "Al Baqarah (1-5)"
        /^(.+?)\s+(\d+)$/,                 // "Al Fatiha 7" (single ayah)
    ];
    
    for (const pattern of patterns) {
        const match = text.match(pattern);
        if (match) {
            const surah = match[1].trim();
            const ayahRange = match[2];
            
            console.log('Parsed:', { surah, ayahRange });
            
            // Parse ayah range
            const ayahParts = ayahRange.split(/[-–]/);
            const startAyah = parseInt(ayahParts[0]);
            const endAyah = ayahParts[1] ? parseInt(ayahParts[1]) : startAyah;
            
            return {
                surah: surah,
                ayahRange: ayahRange,
                startAyah: startAyah,
                endAyah: endAyah
            };
        }
    }
    
    console.log('Could not parse content text:', text);
    return null;
}

function populateAllContentOptions(selectElement) {
    console.log('Populating with all available content...');
    const isHifz = selectElement.classList.contains('session-hifz-surah');
    const allContent = [];
    
    // First try to get content from all dashboard cards
    const hifzFromCards = extractContentFromCard('hifz');
    const revisionFromCards = extractContentFromCard('revision');
    
    if (isHifz && hifzFromCards.length > 0) {
        allContent.push(...hifzFromCards);
    } else if (!isHifz && revisionFromCards.length > 0) {
        allContent.push(...revisionFromCards);
    } else {
        // Fallback to sampleData
        Object.keys(sampleData.content).forEach(studentId => {
            const studentData = sampleData.content[studentId];
            if (studentData) {
                const contentItems = isHifz ? studentData.hifz : studentData.revision;
                if (contentItems && contentItems.length > 0) {
                    allContent.push(...contentItems);
                }
            }
        });
    }
    
    console.log(`Found ${allContent.length} total ${isHifz ? 'hifz' : 'revision'} items`);
    
    // Add all content items as options
    allContent.forEach((item, index) => {
        const option = document.createElement('option');
        option.value = `${item.surah} ${item.ayahRange}`;
        option.textContent = formatContentItem(item, currentLanguage === 'ar');
        selectElement.appendChild(option);
    });
}

function setupSessionDropdownListeners() {
    console.log('=== SETTING UP SESSION DROPDOWN LISTENERS ===');
    
    // Function to populate a dropdown when it's clicked
    function populateOnClick(event) {
        const selectElement = event.target;
        console.log('Session dropdown clicked:', selectElement.className);
        
        // Store current value to restore it after population
        const currentValue = selectElement.value;
        
        // Only populate if it's empty (just has the default option)
        if (selectElement.options.length <= 1) {
            console.log('Dropdown is empty, populating...');
            populateSessionContentOptions(selectElement);
            
            // Restore the value after population
            setTimeout(() => {
                if (currentValue && selectElement.querySelector(`option[value="${currentValue}"]`)) {
                    selectElement.value = currentValue;
                }
            }, 50);
        } else {
            console.log('Dropdown already populated with', selectElement.options.length, 'options');
        }
    }
    
    // Add listeners to existing dropdowns
    const hifzSelects = document.querySelectorAll('.session-hifz-surah');
    const revisionSelects = document.querySelectorAll('.session-revision-surah');
    
    console.log('Found hifz selects:', hifzSelects.length);
    console.log('Found revision selects:', revisionSelects.length);
    
    hifzSelects.forEach(select => {
        select.addEventListener('click', populateOnClick);
        select.addEventListener('focus', populateOnClick);
        console.log('Added listeners to hifz select');
    });
    
    revisionSelects.forEach(select => {
        select.addEventListener('click', populateOnClick);
        select.addEventListener('focus', populateOnClick);
        console.log('Added listeners to revision select');
    });
    
    // Also populate them immediately if content is available
    if (Object.keys(sampleData.content).length > 0) {
        console.log('Content available, populating dropdowns immediately...');
        hifzSelects.forEach(select => populateSessionContentOptions(select));
        revisionSelects.forEach(select => populateSessionContentOptions(select));
    }
}

// Global function to populate session dropdowns (can be called from anywhere)
function populateSessionDropdowns() {
    console.log('=== MANUALLY POPULATING SESSION DROPDOWNS ===');
    
    const hifzSelects = document.querySelectorAll('.session-hifz-surah');
    const revisionSelects = document.querySelectorAll('.session-revision-surah');
    
    console.log('Found hifz selects:', hifzSelects.length);
    console.log('Found revision selects:', revisionSelects.length);
    console.log('Sample data content:', sampleData.content);
    console.log('Content keys:', Object.keys(sampleData.content));
    
    hifzSelects.forEach(select => {
        console.log('Populating hifz select:', select);
        populateSessionContentOptions(select);
    });
    
    revisionSelects.forEach(select => {
        console.log('Populating revision select:', select);
        populateSessionContentOptions(select);
    });
}

// Make it globally accessible
window.populateSessionDropdowns = populateSessionDropdowns;

function setupAutomaticDropdownPopulation() {
    console.log('=== SETTING UP AUTOMATIC DROPDOWN POPULATION ===');
    
    // Method 1: MutationObserver to detect when session modal becomes visible
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                const target = mutation.target;
                if (target.id === 'addSessionModal') {
                    const isVisible = target.style.display === 'block' || 
                                    target.style.display === 'flex' || 
                                    (target.style.display !== 'none' && target.offsetParent !== null);
                    
                    if (isVisible) {
                        console.log('Session modal detected as visible, populating dropdowns...');
                        setTimeout(() => {
                            populateSessionDropdowns();
                        }, 100);
                    }
                }
            }
            
            // Also check for class changes that might indicate modal visibility
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const target = mutation.target;
                if (target.id === 'addSessionModal' && target.classList.contains('show')) {
                    console.log('Session modal detected as shown via class, populating dropdowns...');
                    setTimeout(() => {
                        populateSessionDropdowns();
                    }, 100);
                }
            }
        });
    });
    
    // Observe the session modal for changes
    const sessionModal = document.getElementById('addSessionModal');
    if (sessionModal) {
        observer.observe(sessionModal, {
            attributes: true,
            attributeFilter: ['style', 'class']
        });
        console.log('MutationObserver set up for session modal');
    } else {
        console.log('Session modal not found, will try again later...');
        setTimeout(setupAutomaticDropdownPopulation, 2000);
    }
    
    // Method 2: Event listener for modal clicks
    document.addEventListener('click', (event) => {
        const target = event.target;
        
        // Check if clicked element or its parents might open the session modal
        const clickedText = target.textContent?.toLowerCase() || '';
        const clickedId = target.id?.toLowerCase() || '';
        const clickedClass = target.className?.toLowerCase() || '';
        
        if (clickedText.includes('session') || 
            clickedText.includes('add') || 
            clickedId.includes('session') || 
            clickedClass.includes('session')) {
            
            console.log('Potential session modal trigger clicked, will populate dropdowns...');
            setTimeout(() => {
                populateSessionDropdowns();
            }, 500);
        }
    });
    
    // Method 3: Periodic check for modal visibility
    setInterval(() => {
        const sessionModal = document.getElementById('addSessionModal');
        if (sessionModal) {
            const isVisible = sessionModal.style.display === 'block' || 
                            sessionModal.style.display === 'flex' || 
                            (sessionModal.style.display !== 'none' && sessionModal.offsetParent !== null);
            
            if (isVisible) {
                const hifzSelects = document.querySelectorAll('.session-hifz-surah');
                const revisionSelects = document.querySelectorAll('.session-revision-surah');
                
                // Check if dropdowns are empty and need population
                let needsPopulation = false;
                hifzSelects.forEach(select => {
                    if (select.options.length <= 1) needsPopulation = true;
                });
                revisionSelects.forEach(select => {
                    if (select.options.length <= 1) needsPopulation = true;
                });
                
                if (needsPopulation) {
                    console.log('Session modal is visible and dropdowns need population...');
                    populateSessionDropdowns();
                }
            }
        }
    }, 2000); // Check every 2 seconds
}

// Individual student deletion (not entire database)
async function deleteIndividualStudent(studentId) {
    console.log('=== DELETING INDIVIDUAL STUDENT ===');
    console.log('Student ID:', studentId);
    
    if (!studentId) {
        console.error('No student ID provided for deletion');
        return false;
    }
    
    try {
        showLoading('Deleting student...');
        
        // Delete from Firebase
        if (window.firebaseService && window.firebaseService.initialized) {
            console.log('Deleting student from Firebase:', studentId);
            await window.firebaseService.deleteStudent(studentId);
            await window.firebaseService.deleteStudentContent(studentId);
        }
        
        // Delete from local data
        if (sampleData.students && sampleData.students[studentId]) {
            delete sampleData.students[studentId];
            console.log('Deleted student from sampleData.students');
        }
        
        if (sampleData.content && sampleData.content[studentId]) {
            delete sampleData.content[studentId];
            console.log('Deleted student content from sampleData.content');
        }
        
        // Remove from teacher assignments
        if (sampleData.teachers) {
            Object.keys(sampleData.teachers).forEach(teacherId => {
                const teacher = sampleData.teachers[teacherId];
                if (teacher.students && teacher.students.includes(studentId)) {
                    teacher.students = teacher.students.filter(id => id !== studentId);
                    console.log(`Removed student ${studentId} from teacher ${teacherId}`);
                }
            });
        }
        
        // Update localStorage
        localStorage.setItem('quranStudents', JSON.stringify(sampleData.students || {}));
        localStorage.setItem('quranContent', JSON.stringify(sampleData.content || {}));
        localStorage.setItem('quranTeachers', JSON.stringify(sampleData.teachers || {}));
        
        hideLoading();
        console.log('✅ Individual student deleted successfully:', studentId);
        return true;
        
    } catch (error) {
        console.error('❌ Error deleting individual student:', error);
        hideLoading();
        return false;
    }
}

// Make it globally accessible
window.deleteIndividualStudent = deleteIndividualStudent;

// Override any existing problematic deletion functions
function overrideProblematicDeletionFunctions() {
    console.log('=== OVERRIDING PROBLEMATIC DELETION FUNCTIONS ===');
    
    // Override common deletion function names that might be calling complete database clear
    const commonDeletionNames = [
        'confirmDeleteStudent',
        'deleteStudent', 
        'removeStudent',
        'deleteSelectedStudent',
        'handleDeleteStudent'
    ];
    
    commonDeletionNames.forEach(functionName => {
        if (window[functionName]) {
            console.log(`Overriding existing function: ${functionName}`);
            const originalFunction = window[functionName];
            
            window[functionName] = async function(studentId, ...args) {
                console.log(`${functionName} called with studentId:`, studentId);
                console.log('Redirecting to deleteIndividualStudent instead');
                return await deleteIndividualStudent(studentId);
            };
        } else {
            // Create the function if it doesn't exist
            window[functionName] = async function(studentId, ...args) {
                console.log(`${functionName} called with studentId:`, studentId);
                console.log('Using deleteIndividualStudent');
                return await deleteIndividualStudent(studentId);
            };
        }
    });
    
    // Also override any function that might be calling complete database clear
    if (window.clearCompleteDatabase) {
        console.log('Overriding clearCompleteDatabase to prevent accidental calls');
        const originalClearFunction = window.clearCompleteDatabase;
        
        window.clearCompleteDatabase = function() {
            console.warn('⚠️ clearCompleteDatabase was called - this should only be used for complete resets');
            console.warn('If this was meant to delete a single student, use deleteIndividualStudent instead');
            
            // Ask for confirmation before clearing everything
            if (confirm('Are you sure you want to clear the ENTIRE database? This will delete ALL students, teachers, and content!')) {
                return originalClearFunction.apply(this, arguments);
            } else {
                console.log('Database clear cancelled by user');
                return false;
            }
        };
    }
}

// Call the override function
overrideProblematicDeletionFunctions();

// Session item management functions
function addHifzItem() {
    console.log('Adding hifz item...');
    const container = document.getElementById('hifzItemsContainer');
    const newRow = document.createElement('div');
    newRow.className = 'session-item-row';
    newRow.innerHTML = `
        <select class="session-hifz-surah" required onchange="toggleHifzAddButton(this)">
            <option value="">Select Hifz Item</option>
        </select>
        <button type="button" class="btn btn-small btn-secondary" onclick="addHifzItem()" style="display: none;">+</button>
        <button type="button" class="btn btn-small remove" onclick="removeHifzItem(this)">-</button>
    `;
    
    // Populate the new select with content options
    const select = newRow.querySelector('.session-hifz-surah');
    
    // Add event listeners to prevent dropdown from reverting
    select.addEventListener('click', function(event) {
        event.stopPropagation();
        if (event.target.options.length <= 1) {
            console.log('New hifz dropdown clicked, populating...');
            populateSessionContentOptions(event.target);
        }
    });
    
    select.addEventListener('focus', function(event) {
        event.stopPropagation();
        if (event.target.options.length <= 1) {
            console.log('New hifz dropdown focused, populating...');
            populateSessionContentOptions(event.target);
        }
    });
    
    // Populate immediately if content is available
    setTimeout(() => {
        populateSessionContentOptions(select);
    }, 100);
    
    container.appendChild(newRow);
}

function removeHifzItem(button) {
    const row = button.parentElement;
    const container = document.getElementById('hifzItemsContainer');
    
    // Don't remove if it's the only row
    if (container.children.length > 1) {
        row.remove();
    }
}

function addRevisionItem() {
    console.log('Adding revision item...');
    const container = document.getElementById('revisionItemsContainer');
    const newRow = document.createElement('div');
    newRow.className = 'session-item-row';
    newRow.innerHTML = `
        <select class="session-revision-surah" required onchange="toggleRevisionAddButton(this)">
            <option value="">Select Revision Item</option>
        </select>
        <button type="button" class="btn btn-small btn-secondary" onclick="addRevisionItem()" style="display: none;">+</button>
        <button type="button" class="btn btn-small remove" onclick="removeRevisionItem(this)">-</button>
    `;
    
    // Populate the new select with content options
    const select = newRow.querySelector('.session-revision-surah');
    
    // Add event listeners to prevent dropdown from reverting
    select.addEventListener('click', function(event) {
        event.stopPropagation();
        if (event.target.options.length <= 1) {
            console.log('New revision dropdown clicked, populating...');
            populateSessionContentOptions(event.target);
        }
    });
    
    select.addEventListener('focus', function(event) {
        event.stopPropagation();
        if (event.target.options.length <= 1) {
            console.log('New revision dropdown focused, populating...');
            populateSessionContentOptions(event.target);
        }
    });
    
    // Populate immediately if content is available
    setTimeout(() => {
        populateSessionContentOptions(select);
    }, 100);
    
    container.appendChild(newRow);
}

function removeRevisionItem(button) {
    const row = button.parentElement;
    const container = document.getElementById('revisionItemsContainer');
    
    // Don't remove if it's the only row
    if (container.children.length > 1) {
        row.remove();
    }
}

function toggleHifzAddButton(selectElement) {
    console.log('=== TOGGLE HIFZ ADD BUTTON ===');
    console.log('Select element:', selectElement);
    console.log('Select value:', selectElement.value);
    
    const row = selectElement.closest('.session-item-row');
    console.log('Row found:', row);
    
    // Find the add button more aggressively
    const addButton = row.querySelector('button[onclick*="addHifzItem"]') || 
                      row.querySelector('button[onclick="addHifzItem()"]') ||
                      row.querySelector('.btn-small.btn-secondary');
    
    console.log('Add button found:', addButton);
    
    if (addButton) {
        if (selectElement.value) {
            console.log('Showing add button with + symbol');
            addButton.style.display = 'inline-block';
            addButton.style.visibility = 'visible';
            addButton.style.opacity = '1';
            
            // Force the button text to be + multiple ways
            addButton.textContent = '+';
            addButton.innerHTML = '+';
            addButton.setAttribute('textContent', '+');
            addButton.setAttribute('innerHTML', '+');
            
            // Also set the onclick to make sure it calls the right function
            addButton.setAttribute('onclick', 'addHifzItem()');
            
            console.log('Button after changes - textContent:', addButton.textContent, 'innerHTML:', addButton.innerHTML);
        } else {
            console.log('Hiding add button');
            addButton.style.display = 'none';
        }
    } else {
        console.log('No add button found!');
    }
}

function toggleRevisionAddButton(selectElement) {
    console.log('=== TOGGLE REVISION ADD BUTTON ===');
    console.log('Select element:', selectElement);
    console.log('Select value:', selectElement.value);
    
    const row = selectElement.closest('.session-item-row');
    console.log('Row found:', row);
    
    // Find the add button more aggressively
    const addButton = row.querySelector('button[onclick*="addRevisionItem"]') || 
                      row.querySelector('button[onclick="addRevisionItem()"]') ||
                      row.querySelector('.btn-small.btn-secondary');
    
    console.log('Add button found:', addButton);
    
    if (addButton) {
        if (selectElement.value) {
            console.log('Showing add button with + symbol');
            addButton.style.display = 'inline-block';
            addButton.style.visibility = 'visible';
            addButton.style.opacity = '1';
            
            // Force the button text to be + multiple ways
            addButton.textContent = '+';
            addButton.innerHTML = '+';
            addButton.setAttribute('textContent', '+');
            addButton.setAttribute('innerHTML', '+');
            
            // Also set the onclick to make sure it calls the right function
            addButton.setAttribute('onclick', 'addRevisionItem()');
            
            console.log('Button after changes - textContent:', addButton.textContent, 'innerHTML:', addButton.innerHTML);
        } else {
            console.log('Hiding add button');
            addButton.style.display = 'none';
        }
    } else {
        console.log('No add button found!');
    }
}

// Make functions globally accessible and override any existing ones
window.addHifzItem = addHifzItem;
window.removeHifzItem = removeHifzItem;
window.addRevisionItem = addRevisionItem;
window.removeRevisionItem = removeRevisionItem;
window.toggleHifzAddButton = toggleHifzAddButton;
window.toggleRevisionAddButton = toggleRevisionAddButton;

// Override any existing functions that might be causing issues
setTimeout(() => {
    console.log('=== OVERRIDING EXISTING FUNCTIONS ===');
    
    // Override toggle functions more aggressively
    if (window.toggleHifzAddButton !== toggleHifzAddButton) {
        console.log('Overriding existing toggleHifzAddButton');
        window.toggleHifzAddButton = toggleHifzAddButton;
    }
    
    if (window.toggleRevisionAddButton !== toggleRevisionAddButton) {
        console.log('Overriding existing toggleRevisionAddButton');
        window.toggleRevisionAddButton = toggleRevisionAddButton;
    }
    
    // Also override any functions that might be resetting dropdowns
    const originalSetTimeout = window.setTimeout;
    window.setTimeout = function(callback, delay) {
        if (typeof callback === 'function') {
            const wrappedCallback = function() {
                try {
                    return callback.apply(this, arguments);
                } catch (error) {
                    console.log('Error in setTimeout callback:', error);
                    return callback.apply(this, arguments);
                }
            };
            return originalSetTimeout.call(this, wrappedCallback, delay);
        }
        return originalSetTimeout.apply(this, arguments);
    };
    
    console.log('Function overrides completed');
}, 1000);

// Surah ayah counts (number of verses in each Surah)
const surahAyahCounts = {
    'Al Fatiha': 7,
    'Al Baqarah': 286,
    'Al Imran': 200,
    'An Nisa': 176,
    'Al Ma\'idah': 120,
    'Al Anam': 165,
    'Al Araf': 206,
    'Al Anfal': 75,
    'At Tawbah': 129,
    'Yunus': 109,
    'Hud': 123,
    'Yusuf': 111,
    'Ar Ra\'d': 43,
    'Ibrahim': 52,
    'Al Hijr': 99,
    'An Nahl': 128,
    'Al Isra': 111,
    'Al Kahf': 110,
    'Maryam': 98,
    'Taha': 135,
    'Al Anbiya': 112,
    'Al Hajj': 78,
    'Al Muminun': 118,
    'An Nur': 64,
    'Al Furqan': 77,
    'Ash Shuara': 227,
    'An Naml': 93,
    'Al Qasas': 88,
    'Al Ankabut': 69,
    'Ar Rum': 60,
    'Luqman': 34,
    'As Sajdah': 30,
    'Al Ahzab': 73,
    'Saba': 54,
    'Fatir': 45,
    'Ya Sin': 83,
    'As Saffat': 182,
    'Sad': 88,
    'Az Zumar': 75,
    'Ghafir': 85,
    'Fussilat': 54,
    'Ash Shura': 53,
    'Az Zukhruf': 89,
    'Ad Dukhan': 59,
    'Al Jathiyah': 37,
    'Al Ahqaf': 35,
    'Muhammad': 38,
    'Al Fath': 29,
    'Al Hujurat': 18,
    'Qaf': 45,
    'Adh Dhariyat': 60,
    'At Tur': 49,
    'An Najm': 62,
    'Al Qamar': 55,
    'Ar Rahman': 78,
    'Al Waqiah': 96,
    'Al Hadid': 29,
    'Al Mujadilah': 22,
    'Al Hashr': 24,
    'Al Mumtahanah': 13,
    'As Saff': 14,
    'Al Jumuah': 11,
    'Al Munafiqun': 11,
    'At Taghabun': 18,
    'At Talaq': 12,
    'At Tahrim': 12,
    'Al Mulk': 30,
    'Al Qalam': 52,
    'Al Haqqah': 52,
    'Al Maarij': 44,
    'Nuh': 28,
    'Al Jinn': 28,
    'Al Muzzammil': 20,
    'Al Muddaththir': 56,
    'Al Qiyamah': 40,
    'Al Insan': 31,
    'Al Mursalat': 50,
    'An Naba': 40,
    'An Nazi\'at': 46,
    'Abasa': 42,
    'At Takwir': 29,
    'Al Infitar': 19,
    'Al Mutaffifin': 36,
    'Al Inshiqaq': 25,
    'Al Buruj': 22,
    'At Tariq': 17,
    'Al Ala': 19,
    'Al Ghashiyah': 26,
    'Al Fajr': 30,
    'Al Balad': 20,
    'Ash Shams': 15,
    'Al Layl': 21,
    'Ad Duha': 11,
    'Ash Sharh': 8,
    'At Tin': 8,
    'Al Alaq': 19,
    'Al Qadr': 5,
    'Al Bayyinah': 8,
    'Az Zalzalah': 8,
    'Al Adiyat': 11,
    'Al Qariah': 11,
    'At Takathur': 8,
    'Al Asr': 3,
    'Al Humazah': 9,
    'Al Fil': 5,
    'Quraysh': 4,
    'Al Maun': 7,
    'Al Kawthar': 3,
    'Al Kafirun': 6,
    'An Nasr': 3,
    'Al Masad': 5,
    'Al Ikhlas': 4,
    'Al Falaq': 5,
    'An Nas': 6
};

function updateAyahOptions(surahSelect, startAyahSelect, endAyahSelect) {
    if (!surahSelect || !startAyahSelect || !endAyahSelect) return;
    
    const selectedSurah = surahSelect.value;
    const ayahCount = surahAyahCounts[selectedSurah];
    
    // Clear existing options
    startAyahSelect.innerHTML = `<option value="">${getTranslation('modal.select_start_ayah')}</option>`;
    endAyahSelect.innerHTML = `<option value="">${getTranslation('modal.select_end_ayah')}</option>`;
    
    if (!selectedSurah || !ayahCount) {
        return;
    }
    
    // Generate ayah options
    for (let i = 1; i <= ayahCount; i++) {
        const startOption = document.createElement('option');
        startOption.value = i;
        startOption.textContent = i;
        startAyahSelect.appendChild(startOption);
        
        const endOption = document.createElement('option');
        endOption.value = i;
        endOption.textContent = i;
        endAyahSelect.appendChild(endOption);
    }
    
    // Update end ayah options when start ayah changes
    startAyahSelect.addEventListener('change', () => {
        const startValue = parseInt(startAyahSelect.value);
        if (startValue) {
            endAyahSelect.innerHTML = `<option value="">${getTranslation('modal.select_end_ayah')}</option>`;
            for (let i = startValue; i <= ayahCount; i++) {
                const endOption = document.createElement('option');
                endOption.value = i;
                endOption.textContent = i;
                endAyahSelect.appendChild(endOption);
            }
        }
    });
}

function getTranslatedSurahName(surahName) {
    if (!surahName) return surahName;
    
    const surahKey = surahName.toLowerCase().replace(/\s+/g, '_').replace(/'/g, '');
    const arabicName = getTranslation(`surah.${surahKey}`);
    
    if (arabicName && arabicName !== `surah.${surahKey}`) {
        return currentLanguage === 'ar' ? 
            arabicName : 
            `${surahName} (${arabicName})`;
    }
    
    return surahName;
}

function translateSessionContent(content) {
    if (!content) return content;
    
    // Check if we're in Arabic mode
    const isArabic = currentLanguage === 'ar';
    
    // Split content by commas and translate each part
    const parts = content.split(',').map(part => {
        const trimmed = part.trim();
        
        // Parse surah and ayah range (format: "SurahName startAyah-endAyah" or "SurahName ayah")
        const surahAyahMatch = trimmed.match(/^(.+?)\s+(\d+)(?:-(\d+))?$/);
        if (surahAyahMatch) {
            const surahName = surahAyahMatch[1].trim();
            const startAyah = parseInt(surahAyahMatch[2]);
            const endAyah = surahAyahMatch[3] ? parseInt(surahAyahMatch[3]) : startAyah;
            
            // Find surah number by name
            let surahNumber = null;
            for (const [num, surah] of Object.entries(surahData)) {
                if (surah.name === surahName) {
                    surahNumber = parseInt(num);
                    break;
                }
            }
            
            if (surahNumber) {
                return formatAyahRange(surahNumber, startAyah, endAyah, isArabic);
            }
        }
        
        return trimmed;
    });
    
    return parts.join(', ');
}

// Helper function to format content items for display
function formatContentItem(item, isArabic = false) {
    if (!item) return '';
    
    
    // If we have startAyah and endAyah, use them
    if (item.startAyah !== undefined && item.endAyah !== undefined) {
        const surahNumber = getSurahNumberFromName(item.surah);
        if (surahNumber) {
            return formatAyahRange(surahNumber, item.startAyah, item.endAyah, isArabic);
        }
    }
    
    // Fallback to parsing the ayahRange string
    const surahAyahMatch = item.ayahRange ? item.ayahRange.match(/^(\d+)(?:-(\d+))?$/) : null;
    if (surahAyahMatch) {
        const startAyah = parseInt(surahAyahMatch[1]);
        const endAyah = surahAyahMatch[2] ? parseInt(surahAyahMatch[2]) : startAyah;
        const surahNumber = getSurahNumberFromName(item.surah);
        if (surahNumber) {
            return formatAyahRange(surahNumber, startAyah, endAyah, isArabic);
        }
    }
    
    // AGGRESSIVE FIX: If we have a surah and ayahRange, try to parse it directly
    if (item.surah && item.ayahRange) {
        const ayahMatch = item.ayahRange.match(/^(\d+)(?:-(\d+))?$/);
        if (ayahMatch) {
            const startAyah = parseInt(ayahMatch[1]);
            const endAyah = ayahMatch[2] ? parseInt(ayahMatch[2]) : startAyah;
            const surahNumber = getSurahNumberFromName(item.surah);
            if (surahNumber) {
                return formatAyahRange(surahNumber, startAyah, endAyah, isArabic);
            }
        }
    }
    
    // AGGRESSIVE FIX: Try to parse from the string format "SurahName AyahNumber"
    if (typeof item === 'string') {
        const parts = item.split(' ');
        if (parts.length >= 2) {
            const surah = parts[0];
            const ayahPart = parts[1];
            const ayahMatch = ayahPart.match(/(\d+)(?:-(\d+))?/);
            if (ayahMatch) {
                const startAyah = parseInt(ayahMatch[1]);
                const endAyah = ayahMatch[2] ? parseInt(ayahMatch[2]) : startAyah;
                const surahNumber = getSurahNumberFromName(surah);
                if (surahNumber) {
                    return formatAyahRange(surahNumber, startAyah, endAyah, isArabic);
                }
            }
        }
    }
    
    // Final fallback
    return `${item.surah || item} ${item.ayahRange || ''}`;
}

function toggleLanguage() {
    const newLang = currentLanguage === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
}

// Session item management functions
function toggleHifzAddButton(element) {
    const row = element.closest('.session-item-row');
    const addButton = row.querySelector('button[onclick="addHifzItem()"]');
    const surahSelect = row.querySelector('.session-hifz-surah');
    
    if (surahSelect.value) {
        addButton.style.display = 'block';
    } else {
        addButton.style.display = 'none';
    }
}

function toggleRevisionAddButton(element) {
    const row = element.closest('.session-item-row');
    const addButton = row.querySelector('button[onclick="addRevisionItem()"]');
    const surahSelect = row.querySelector('.session-revision-surah');
    
    if (surahSelect.value) {
        addButton.style.display = 'block';
    } else {
        addButton.style.display = 'none';
    }
}

function addHifzItem() {
    const container = document.getElementById('hifzItemsContainer');
    const newRow = document.createElement('div');
    newRow.className = 'session-item-row';
    newRow.innerHTML = `
        <select class="session-hifz-surah" required onchange="toggleHifzAddButton(this)">
            <option value="">Select Hifz Item</option>
        </select>
        <button type="button" class="btn btn-small btn-secondary" onclick="addHifzItem()" style="display: none;">+</button>
        <button type="button" class="btn btn-small remove" onclick="removeHifzItem(this)">-</button>
    `;
    
    // Populate the new select with surah options
    const select = newRow.querySelector('.session-hifz-surah');
    updateSurahOptions(select);
    
    // Add event listeners to the new select
    select.addEventListener('click', function(event) {
        if (event.target.options.length <= 1) {
            console.log('New hifz dropdown clicked, populating...');
            populateSessionContentOptions(event.target);
        }
    });
    select.addEventListener('focus', function(event) {
        if (event.target.options.length <= 1) {
            console.log('New hifz dropdown focused, populating...');
            populateSessionContentOptions(event.target);
        }
    });
    
    // Populate immediately if content is available
    if (Object.keys(sampleData.content).length > 0) {
        populateSessionContentOptions(select);
    }
    
    container.appendChild(newRow);
}

function removeHifzItem(button) {
    const row = button.parentElement;
    const container = document.getElementById('hifzItemsContainer');
    
    // Don't remove if it's the only row
    if (container.children.length > 1) {
        row.remove();
    }
}

function addRevisionItem() {
    const container = document.getElementById('revisionItemsContainer');
    const newRow = document.createElement('div');
    newRow.className = 'session-item-row';
    newRow.innerHTML = `
        <select class="session-revision-surah" required onchange="toggleRevisionAddButton(this)">
            <option value="">Select Revision Item</option>
        </select>
        <button type="button" class="btn btn-small btn-secondary" onclick="addRevisionItem()" style="display: none;">+</button>
        <button type="button" class="btn btn-small remove" onclick="removeRevisionItem(this)">-</button>
    `;
    
    // Populate the new select with surah options
    const select = newRow.querySelector('.session-revision-surah');
    updateSurahOptions(select);
    
    // Add event listeners to the new select
    select.addEventListener('click', function(event) {
        if (event.target.options.length <= 1) {
            console.log('New revision dropdown clicked, populating...');
            populateSessionContentOptions(event.target);
        }
    });
    select.addEventListener('focus', function(event) {
        if (event.target.options.length <= 1) {
            console.log('New revision dropdown focused, populating...');
            populateSessionContentOptions(event.target);
        }
    });
    
    // Populate immediately if content is available
    if (Object.keys(sampleData.content).length > 0) {
        populateSessionContentOptions(select);
    }
    
    container.appendChild(newRow);
}

function removeRevisionItem(button) {
    const row = button.parentElement;
    const container = document.getElementById('revisionItemsContainer');
    
    // Don't remove if it's the only row
    if (container.children.length > 1) {
        row.remove();
    }
}

// Make language functions globally accessible
window.toggleLanguage = toggleLanguage;
window.setLanguage = setLanguage;
window.getTranslation = getTranslation;
window.forceResetData = forceResetData;
window.clearCompleteDatabase = clearCompleteDatabase;
window.debugDataStructure = debugDataStructure;
window.fixAyahRanges = fixAyahRanges;
window.forceFixAllData = forceFixAllData;
window.forceConvertSampleData = forceConvertSampleData;
window.forceAddEndAyah = forceAddEndAyah;
window.createTestDataWithRanges = createTestDataWithRanges;
window.addHifzItem = addHifzItem;
window.removeHifzItem = removeHifzItem;
window.addRevisionItem = addRevisionItem;
window.removeRevisionItem = removeRevisionItem;
window.toggleHifzAddButton = toggleHifzAddButton;
window.toggleRevisionAddButton = toggleRevisionAddButton;
window.populateSurahOptions = populateSurahOptions;
window.handleLogin = handleLogin;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== MRIS QURAN PROGRAM INITIALIZED ===');
    console.log('DOM Content Loaded event fired');
    console.log('Current page URL:', window.location.href);
    console.log('Current page pathname:', window.location.pathname);
    
    // Migrations are now handled before Firebase loading
    
    // Load saved language preference
    const savedLanguage = localStorage.getItem('quranLanguage') || 'en';
    setLanguage(savedLanguage);
    
    // Ensure admin user exists
    if (!sampleData.admin || Object.keys(sampleData.admin).length === 0) {
        console.log('No admin users found, creating admin...');
        sampleData.admin = {
            'ADMINYNG9': {
                name: 'System Administrator',
                role: 'admin',
                id: 'ADMINYNG9',
                type: 'admin',
                email: 'admin@mris.com'
            }
        };
        console.log('Admin created:', sampleData.admin);
    }
    
    // Create teacher account for TYA9BR1 (real teacher)
    if (!sampleData.teachers || !sampleData.teachers['TYA9BR1']) {
        console.log('Creating teacher account TYA9BR1...');
        if (!sampleData.teachers) {
            sampleData.teachers = {};
        }
        sampleData.teachers['TYA9BR1'] = {
            name: 'Teacher TYA9BR1',
            role: 'teacher',
            id: 'TYA9BR1',
            type: 'teacher',
            email: 'teacher@mris.com',
            students: []
        };
        console.log('Teacher created:', sampleData.teachers['TYA9BR1']);
    }
    
    // Initialize dropdown functionality
    initializeDropdowns();
    
    // Add event listeners to session dropdowns to populate them when clicked
    setupSessionDropdownListeners();
    
    // Try to populate session dropdowns immediately
    setTimeout(() => {
        console.log('Attempting to populate session dropdowns after page load...');
        populateSessionDropdowns();
    }, 1000);
    
    // Set up automatic dropdown population when session modal opens
    setupAutomaticDropdownPopulation();
    
    // Override any problematic deletion functions
    overrideProblematicDeletionFunctions();
    
    // Hide options button by default (will be shown for teachers only)
    updateOptionsButtonVisibility();
    
    // Get button elements after DOM is loaded
    window.addHifzBtn = document.getElementById('addHifzBtn');
    window.addRevisionBtn = document.getElementById('addRevisionBtn');
    window.addSessionBtn = document.getElementById('addSessionBtn');
    
    console.log('Add buttons found:', { 
        addHifzBtn: window.addHifzBtn, 
        addRevisionBtn: window.addRevisionBtn, 
        addSessionBtn: window.addSessionBtn 
    });
    
    // Verify buttons exist before setting up event listeners
    if (!window.addHifzBtn || !window.addRevisionBtn || !window.addSessionBtn) {
        console.error('One or more add buttons not found in DOM!');
        console.error('addHifzBtn:', window.addHifzBtn);
        console.error('addRevisionBtn:', window.addRevisionBtn);
        console.error('addSessionBtn:', window.addSessionBtn);
        
        // Try to find them again after a short delay
        setTimeout(() => {
            window.addHifzBtn = document.getElementById('addHifzBtn');
            window.addRevisionBtn = document.getElementById('addRevisionBtn');
            window.addSessionBtn = document.getElementById('addSessionBtn');
            console.log('Retry - Add buttons found:', { 
                addHifzBtn: window.addHifzBtn, 
                addRevisionBtn: window.addRevisionBtn, 
                addSessionBtn: window.addSessionBtn 
            });
        }, 100);
    }
    
    // Run migrations first, then load from Firebase
    console.log('Running migrations first...');
    
    // Skip migrations - load directly from Firebase
    console.log('Skipping migrations - loading directly from Firebase');
    
    // Now load from Firebase (this will overwrite any local data)
    loadDataFromStorage().then(() => {
        console.log('Data loaded from Firebase, now checking for existing session');
        console.log('Admin data available:', sampleData.admin);
        // Small delay to ensure DOM is fully ready
        setTimeout(() => {
            checkExistingSession();
        }, 100);
    }).catch(error => {
        console.error('Error loading data from Firebase:', error);
        // Still check for session even if data loading fails
        setTimeout(() => {
            checkExistingSession();
        }, 100);
    });
    
    setupEventListeners(window.addHifzBtn, window.addRevisionBtn, window.addSessionBtn);
    
    // Test: Add a simple click handler to see if events work at all
    const testBtn = document.getElementById('loginBtn');
    if (testBtn) {
        console.log('Adding test click handler to login button');
        testBtn.addEventListener('click', function() {
            console.log('TEST: Login button clicked - events are working!');
            console.log('TEST: Calling handleLogin directly...');
            handleLogin();
        });
    }
    
    // Test: Make sure handleLogin is accessible
    console.log('handleLogin function available:', typeof handleLogin);
    console.log('window.handleLogin available:', typeof window.handleLogin);
    
    // Set up periodic refresh for students to see teacher updates
    setInterval(refreshStudentData, 5000); // Refresh every 5 seconds
});

// Setup event listeners
function setupEventListeners(addHifzBtn, addRevisionBtn, addSessionBtn) {
    console.log('=== SETTING UP EVENT LISTENERS ===');
    
    // Login form
    const loginForm = document.getElementById('loginForm');
    console.log('Login form element:', loginForm);
    if (loginForm) {
        console.log('Login form found, adding event listener');
        loginForm.addEventListener('submit', function(e) {
            console.log('Form submit event triggered');
            handleLogin(e);
        });
        console.log('Login form event listener added');
    } else {
        console.error('Login form not found');
    }
    
    // Login button click
    const loginBtn = document.getElementById('loginBtn');
    console.log('Login button element:', loginBtn);
    if (loginBtn) {
        console.log('Login button found, adding click event listener');
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Login button clicked');
            handleLogin(e);
        });
        console.log('Login button event listener added');
    } else {
        console.error('Login button not found');
    }
    
    // Enter key on user code input
    const userCodeInput = document.getElementById('userCode');
    console.log('User code input element:', userCodeInput);
    if (userCodeInput) {
        console.log('User code input found, adding keypress event listener');
        userCodeInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                console.log('Enter key pressed on user code input');
                handleLogin(e);
            }
        });
        console.log('User code input event listener added');
    } else {
        console.error('User code input not found');
    }
    
    // Logout button - show confirmation modal first
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Logout button clicked, showing confirmation modal');
            const modal = document.getElementById('logoutConfirmModal');
            if (modal) {
                modal.style.display = 'block';
                console.log('Logout confirmation modal displayed');
            } else {
                console.error('Logout confirmation modal not found');
                // Fallback to direct logout if modal not found
                handleLogout();
            }
        });
    }
    
    // Language toggle button
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        // Remove any existing event listeners
        languageToggle.removeEventListener('click', toggleLanguage);
        languageToggle.addEventListener('click', toggleLanguage);
        console.log('Language toggle event listener added');
    }
    
    // Login language toggle button
    const loginLanguageToggle = document.getElementById('loginLanguageToggle');
    if (loginLanguageToggle) {
        // Remove any existing event listeners
        loginLanguageToggle.removeEventListener('click', toggleLanguage);
        loginLanguageToggle.addEventListener('click', toggleLanguage);
        console.log('Login language toggle event listener added');
    }
    
    // Session form Surah selection event listeners
    const sessionHifzSurah = document.getElementById('sessionHifzSurah');
    const sessionHifzStartAyah = document.getElementById('sessionHifzStartAyah');
    const sessionHifzEndAyah = document.getElementById('sessionHifzEndAyah');
    const sessionRevisionSurah = document.getElementById('sessionRevisionSurah');
    const sessionRevisionStartAyah = document.getElementById('sessionRevisionStartAyah');
    const sessionRevisionEndAyah = document.getElementById('sessionRevisionEndAyah');
    
    if (sessionHifzSurah && sessionHifzStartAyah && sessionHifzEndAyah) {
        sessionHifzSurah.addEventListener('change', () => {
            updateAyahOptions(sessionHifzSurah, sessionHifzStartAyah, sessionHifzEndAyah);
        });
    }
    
    if (sessionRevisionSurah && sessionRevisionStartAyah && sessionRevisionEndAyah) {
        sessionRevisionSurah.addEventListener('change', () => {
            updateAyahOptions(sessionRevisionSurah, sessionRevisionStartAyah, sessionRevisionEndAyah);
        });
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
    console.log('=== HANDLE LOGIN CALLED ===');
    console.log('handleLogin called with event:', event);
    if (event) {
        event.preventDefault();
        console.log('Event prevented');
    }
    
    console.log('Login attempt started');
    
    // Get login button reference
    const loginBtn = document.getElementById('loginBtn');
    
    // Check if user is already logged in
    const savedUser = localStorage.getItem('quranUser');
    const savedUserType = localStorage.getItem('quranUserType');
    if (savedUser && savedUserType) {
        console.log('User already logged in, showing dashboard');
        // Don't redirect - just show the dashboard
        const loginSection = document.getElementById('loginSection');
        const dashboardSection = document.getElementById('dashboardSection');
        if (loginSection && dashboardSection) {
            loginSection.style.display = 'none';
            dashboardSection.style.display = 'block';
        }
        return;
    }
    
    const userCodeInput = document.getElementById('userCode');
    if (!userCodeInput) {
        console.error('User code input not found');
        return;
    }
    
    const userCode = userCodeInput.value.trim().toUpperCase();
    console.log('User code entered:', userCode);
    
    if (!userCode) {
        // Reset button state
        if (loginBtn) {
            loginBtn.textContent = 'Login';
            loginBtn.disabled = false;
        }
        return;
    }
    
    // Show loading state
    if (loginBtn) {
        loginBtn.textContent = 'Logging in...';
        loginBtn.disabled = true;
    }
    
    // Show loading screen
    showLoading('Logging in...');
    
    try {
        // Check if user exists
        console.log('Checking admin users:', Object.keys(sampleData.admin));
        console.log('Admin user details:', sampleData.admin);
        console.log('Looking for user code:', userCode);
        console.log('Admin user keys:', Object.keys(sampleData.admin));
        Object.keys(sampleData.admin).forEach(key => {
            console.log('Admin key:', key, 'matches?', key === userCode);
        });
        console.log('Checking students:', Object.keys(sampleData.students));
        console.log('Checking teachers:', Object.keys(sampleData.teachers));
        
        if (sampleData.admin[userCode]) {
            console.log('Admin user found:', userCode);
            // Verify admin still exists in Firebase
            verifyUserExistsInFirebase(userCode, 'admin').then(exists => {
                if (exists) {
                    currentUser = userCode;
                    currentUserType = 'admin';
                    loginSuccess(sampleData.admin[userCode]);
                } else {
                    console.log('This admin account has been deleted and cannot log in.', 'error');
                    hideLoading();
                    // Reset button state
                    if (loginBtn) {
                        loginBtn.textContent = getTranslation('login.button');
                        loginBtn.disabled = false;
                    }
                }
            }).catch(error => {
                console.error('Error verifying admin user:', error);
                hideLoading();
                // Reset button state
                if (loginBtn) {
                    loginBtn.textContent = getTranslation('login.button');
                    loginBtn.disabled = false;
                }
            });
        } else if (sampleData.students[userCode]) {
            console.log('Student user found:', userCode);
            // Verify student still exists in Firebase
            verifyUserExistsInFirebase(userCode, 'student').then(exists => {
                if (exists) {
                    currentUser = userCode;
                    currentUserType = 'student';
                    loginSuccess(sampleData.students[userCode]);
                } else {
                    console.log('This student account has been deleted and cannot log in.', 'error');
                    hideLoading();
                    // Reset button state
                    if (loginBtn) {
                        loginBtn.textContent = getTranslation('login.button');
                        loginBtn.disabled = false;
                    }
                }
            }).catch(error => {
                console.error('Error verifying student user:', error);
                hideLoading();
                // Reset button state
                if (loginBtn) {
                    loginBtn.textContent = getTranslation('login.button');
                    loginBtn.disabled = false;
                }
            });
        } else if (sampleData.teachers[userCode]) {
            console.log('Teacher user found:', userCode);
            // For now, skip Firebase verification for teachers to allow login
            // TODO: Implement proper teacher verification when teachers are created in Firebase
            currentUser = userCode;
            currentUserType = 'teacher';
            console.log('About to call loginSuccess for teacher:', userCode);
            loginSuccess(sampleData.teachers[userCode]);
        } else {
            console.log('User not found:', userCode);
            hideLoading();
            // Reset button state
            if (loginBtn) {
                loginBtn.textContent = getTranslation('login.button');
                loginBtn.disabled = false;
            }
        }
    } catch (error) {
        console.error('Login error:', error);
        hideLoading();
        // Reset button state
        if (loginBtn) {
            loginBtn.textContent = getTranslation('login.button');
            loginBtn.disabled = false;
        }
    }
}

// Handle successful login
function loginSuccess(user) {
    console.log('Login successful for user:', user.name, 'Type:', currentUserType);
    
    // Hide loading screen
    hideLoading();
    
    // Get DOM elements
    const loginSection = document.getElementById('loginSection');
    const dashboardSection = document.getElementById('dashboardSection');
    const userNameSpan = document.getElementById('userName');
    const userClassSpan = document.getElementById('userClass');
    const userTeacherSpan = document.getElementById('userTeacher');
    
    if (!loginSection || !dashboardSection) {
        console.error('Required DOM elements not found');
        return;
    }
    
    // Store session data
    localStorage.setItem('quranUser', currentUser);
    localStorage.setItem('quranUserType', currentUserType);
    
    // Hide login, show dashboard
    if (loginSection) {
        loginSection.style.display = 'none';
    }
    if (dashboardSection) {
        dashboardSection.style.display = 'block';
    }
    
    // Add a small delay to ensure DOM is ready
    setTimeout(() => {
        console.log('Dashboard shown, checking if teacher login');
        if (currentUserType === 'teacher') {
            console.log('Teacher detected after dashboard shown, showing modal');
            const modal = document.getElementById('teacherOptionsModal');
            if (modal) {
                modal.style.display = 'block';
                modal.classList.add('show');
                modal.style.visibility = 'visible';
                modal.style.opacity = '1';
                modal.style.zIndex = '2000';
                console.log('Teacher modal forced to show');
            }
        }
    }, 100);
    
    // Update header
    if (currentUserType === 'admin') {
        // Admin login - NO POPUP, direct login
        if (userNameSpan) userNameSpan.textContent = user.name;
        if (userClassSpan) userClassSpan.textContent = getTranslation('header.administrator');
        if (userTeacherSpan) userTeacherSpan.textContent = '';
        
        // Update options button visibility
        updateOptionsButtonVisibility();
        
        // Show admin dashboard immediately
        showAdminDashboard();
    } else if (currentUserType === 'student') {
        if (userNameSpan) userNameSpan.textContent = user.name;
        if (userClassSpan) userClassSpan.textContent = user.class;
        if (userTeacherSpan) userTeacherSpan.textContent = user.teacher;
        
        // Update options button visibility
        updateOptionsButtonVisibility();
        
        // Load student content
        loadStudentContent();
    } else {
        // Teacher login
        console.log('Teacher login section reached');
        currentTeacher = currentUser; // Store the teacher's ID
        if (userNameSpan) userNameSpan.textContent = user.name;
        if (userClassSpan) userClassSpan.textContent = getTranslation('header.teacher');
        if (userTeacherSpan) userTeacherSpan.textContent = '';
        
        // Update options button visibility
        updateOptionsButtonVisibility();
        
        // Add teacher-mode class to body
        document.body.classList.add('teacher-mode');
        
        // Load content to show teacher options
        console.log('About to call loadStudentContent for teacher');
        loadStudentContent();
        
        // Also directly show teacher options modal
        setTimeout(() => {
            console.log('Direct call to showTeacherOptions from teacher login');
            console.log('Current user type:', currentUserType);
            console.log('Current user:', currentUser);
            
            // Force show the modal
            const modal = document.getElementById('teacherOptionsModal');
            console.log('Modal element:', modal);
            if (modal) {
                modal.style.display = 'block';
                modal.classList.add('show');
                modal.style.visibility = 'visible';
                modal.style.opacity = '1';
                modal.style.zIndex = '2000';
                console.log('Modal should now be visible');
            } else {
                console.error('teacherOptionsModal not found!');
            }
        }, 1000);
    }
    
    // Store in localStorage
    localStorage.setItem('quranUser', currentUser);
    localStorage.setItem('quranUserType', currentUserType);
    
    // Clear form inputs
    const userCodeInput = document.getElementById('userCode');
    if (userCodeInput) userCodeInput.value = '';
    
    // Show welcome notification
    console.log(`${getTranslation('notification.welcome')}, ${user.name}!`, 'success');
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
    
    // For teachers without a selected student, show teacher options
    if (currentUserType === 'teacher' && !targetUser) {
        console.log('Teacher logged in but no student selected - showing teacher options');
        console.log('currentUserType:', currentUserType);
        console.log('targetUser:', targetUser);
        console.log('currentUser:', currentUser);
        
        // Remove editing header if it exists
        const editingHeader = document.getElementById('editingStudentHeader');
        if (editingHeader) {
            editingHeader.remove();
        }
        
        // Clear all containers
        if (hifzContent) hifzContent.innerHTML = `<p style="text-align: center; color: #666; padding: 20px;">${getTranslation('content.select_student')}</p>`;
        if (revisionContent) revisionContent.innerHTML = `<p style="text-align: center; color: #666; padding: 20px;">${getTranslation('content.select_student')}</p>`;
        if (sessionsList) sessionsList.innerHTML = `<p style="text-align: center; color: #666; padding: 20px;">${getTranslation('content.select_student')}</p>`;
        
        // Show teacher options modal
        console.log('About to call showTeacherOptions in 500ms');
        setTimeout(() => {
            console.log('Calling showTeacherOptions now');
            showTeacherOptions();
        }, 500); // Small delay to ensure UI is ready
        
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
    console.log('User data loaded for', targetUser, ':', userData);
    console.log('Hifz entries:', userData.hifz);
    console.log('Revision entries:', userData.revision);
    console.log('Sessions entries:', userData.sessions);
    
    // Get container references
    const hifzContent = document.getElementById('hifzContent');
    const revisionContent = document.getElementById('revisionContent');
    const sessionsList = document.getElementById('sessionsList');
    
    console.log('Container references:', {
        hifzContent: hifzContent,
        revisionContent: revisionContent,
        sessionsList: sessionsList
    });
    
    // Clear all containers first to prevent mixing
    if (hifzContent) hifzContent.innerHTML = '';
    if (revisionContent) revisionContent.innerHTML = '';
    if (sessionsList) sessionsList.innerHTML = '';
    
    // Load Hifz content
    console.log('Loading hifz content, container:', hifzContent);
    if (hifzContent) {
    loadContentItems(hifzContent, userData.hifz, 'hifz');
    } else {
        console.error('hifzContent container not found!');
    }
    
    // Load Revision content
    console.log('Loading revision content, container:', revisionContent);
    if (revisionContent) {
    loadContentItems(revisionContent, userData.revision, 'revision');
    } else {
        console.error('revisionContent container not found!');
    }
    
    // Load Past Sessions
    console.log('Loading sessions content, container:', sessionsList);
    if (sessionsList) {
    loadSessionsList(userData.sessions);
    } else {
        console.error('sessionsList container not found!');
    }
    
    // Ensure teacher controls are visible if teacher is editing
    if (currentUserType === 'teacher' && editingStudent) {
        console.log('Teacher editing student - ensuring controls are visible');
        showTeacherControls();
    }
}

// Load content items (assignment-style)
function loadContentItems(container, items, type) {
    // Check if container exists
    if (!container) {
        console.error('Container is null for type:', type);
        return;
    }
    
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
        
        // Format the content display
        const isArabic = currentLanguage === 'ar';
        const ayahRange = formatContentItem(item, isArabic);
        
        // Only show delete button for teachers
        if (currentUserType === 'teacher') {
            contentItem.innerHTML = `
                <h4>${ayahRange}</h4>
                <button class="delete-btn teacher-delete-btn" onclick="deleteContentItem('${type}', ${index})" style="opacity: 1 !important;">−</button>
            `;
            
            // Add double-click event for deletion (teachers only)
            contentItem.addEventListener('dblclick', () => {
                showDeleteButton(contentItem);
            });
        } else {
            contentItem.innerHTML = `
                <h4>${ayahRange}</h4>
            `;
        }
        
        container.appendChild(contentItem);
    });
    
    console.log(`Loaded ${items.length} ${type} items`);
}

// Load sessions list (assignment-style)
function loadSessionsList(sessions) {
    // Get container reference
    const sessionsList = document.getElementById('sessionsList');
    
    if (!sessionsList) {
        console.error('sessionsList container not found!');
        return;
    }
    
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
        
        const scoreClass = getGradeClass(session.score);
        
        // Format hifz and revision content
        const isArabic = currentLanguage === 'ar';
        
        // Handle multiple hifz items
        let hifzDisplay;
        if (Array.isArray(session.hifz)) {
            hifzDisplay = session.hifz.map(item => formatContentItem(item, isArabic)).join(', ');
        } else if (session.hifz && typeof session.hifz === 'object') {
            hifzDisplay = formatContentItem(session.hifz, isArabic);
        } else {
            hifzDisplay = translateSessionContent(session.hifz);
        }
        
        // Handle multiple revision items
        let revisionDisplay;
        if (Array.isArray(session.revision)) {
            revisionDisplay = session.revision.map(item => formatContentItem(item, isArabic)).join(', ');
        } else if (session.revision && typeof session.revision === 'object') {
            revisionDisplay = formatContentItem(session.revision, isArabic);
        } else {
            revisionDisplay = translateSessionContent(session.revision);
        }
        
        // Only show delete button for teachers
        if (currentUserType === 'teacher') {
            const dateDisplay = currentLanguage === 'ar' ? formatDateArabic(session.date) : formatDate(session.date);
            sessionItem.innerHTML = `
                <div class="session-date">${dateDisplay}</div>
                <div class="session-hifz">${hifzDisplay}</div>
                <div class="session-revision">${revisionDisplay}</div>
                <div class="session-score ${scoreClass}">${session.score}</div>
                <button class="delete-btn teacher-delete-btn" onclick="deleteSession(${index})" style="opacity: 1 !important;">−</button>
            `;
            
            // Add double-click event for deletion (teachers only)
            sessionItem.addEventListener('dblclick', () => {
                showDeleteButton(sessionItem);
            });
        } else {
            const dateDisplay = currentLanguage === 'ar' ? formatDateArabic(session.date) : formatDate(session.date);
            sessionItem.innerHTML = `
                <div class="session-date">${dateDisplay}</div>
                <div class="session-hifz">${hifzDisplay}</div>
                <div class="session-revision">${revisionDisplay}</div>
                <div class="session-score ${scoreClass}">${session.score}</div>
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
    // Delete content item
    {
        // Get the current student ID using the utility function
        const targetUser = getCurrentStudentId();
        
        if (!targetUser) {
            console.log(getTranslation('notification.no_student_selected'), 'error');
            return;
        }
        
        sampleData.content[targetUser][type].splice(index, 1);
        loadStudentContent();
        
        // Update localStorage to persist changes
        saveAllDataToStorage();
        
        console.log(`${type.charAt(0).toUpperCase() + type.slice(1)} content deleted successfully!`, 'success');
    }
}

// Delete session
function deleteSession(index) {
    // Delete session
    {
        // Get the current student ID using the utility function
        const targetUser = getCurrentStudentId();
        
        if (!targetUser) {
            console.log(getTranslation('notification.no_student_selected'), 'error');
            return;
        }
        
        sampleData.content[targetUser].sessions.splice(index, 1);
        loadStudentContent();
        
        // Update localStorage to persist changes
        saveAllDataToStorage();
        
        console.log('Session deleted successfully!', 'success');
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
    
    // Ensure buttons are properly set up
    ensureAddButtonsSetup();
}

// Show teacher controls
function showTeacherControls() {
    console.log('showTeacherControls called - currentUserType:', currentUserType);
    console.log('editingStudent:', editingStudent);
    
    // Only show controls for teachers
    if (currentUserType !== 'teacher') {
        console.log('Not a teacher, hiding controls');
        hideTeacherControls();
        return;
    }
    
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
    if (window.addHifzBtn) {
        window.addHifzBtn.style.setProperty('display', 'block', 'important');
        window.addHifzBtn.style.setProperty('visibility', 'visible', 'important');
        window.addHifzBtn.style.setProperty('opacity', '1', 'important');
    }
    
    if (window.addRevisionBtn) {
        window.addRevisionBtn.style.setProperty('display', 'block', 'important');
        window.addRevisionBtn.style.setProperty('visibility', 'visible', 'important');
        window.addRevisionBtn.style.setProperty('opacity', '1', 'important');
    }
    
    if (window.addSessionBtn) {
        window.addSessionBtn.style.setProperty('display', 'block', 'important');
        window.addSessionBtn.style.setProperty('visibility', 'visible', 'important');
        window.addSessionBtn.style.setProperty('opacity', '1', 'important');
    }
    
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

// Ensure add buttons are properly set up
function ensureAddButtonsSetup() {
    console.log('Ensuring add buttons are properly set up...');
    
    // Re-find buttons if they don't exist
    if (!window.addHifzBtn || !window.addRevisionBtn || !window.addSessionBtn) {
        console.log('Re-finding add buttons...');
        window.addHifzBtn = document.getElementById('addHifzBtn');
        window.addRevisionBtn = document.getElementById('addRevisionBtn');
        window.addSessionBtn = document.getElementById('addSessionBtn');
    }
    
    // Set up event listeners if not already set up
    if (window.addHifzBtn && window.addRevisionBtn && window.addSessionBtn) {
        console.log('Setting up add button event listeners...');
        setupEventListeners(window.addHifzBtn, window.addRevisionBtn, window.addSessionBtn);
    } else {
        console.error('Cannot set up add buttons - buttons not found');
    }
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
    
    console.log(getTranslation('notification.dashboard_activated'), 'info');
}

// Handle add hifz
function handleAddHifz(event) {
    event.preventDefault();
    
    const surah = document.getElementById('hifzSurah').value.trim();
    const startAyah = document.getElementById('hifzStartAyah').value;
    const endAyah = document.getElementById('hifzEndAyah').value;
    const ayahRange = `${startAyah}-${endAyah}`;
    
    if (!surah || !startAyah || !endAyah) {
        console.log(getTranslation('notification.fill_all_fields'), 'error');
        return;
    }
    
    if (parseInt(startAyah) > parseInt(endAyah)) {
        console.log('Start ayah cannot be greater than end ayah', 'error');
        return;
    }
    
    // Get the current student ID using the utility function
    const targetUser = getCurrentStudentId();
    
    console.log('Adding hifz entry for target user:', targetUser);
    console.log('Current user type:', currentUserType);
    console.log('Editing student:', editingStudent);
    
    if (!targetUser) {
        console.log(getTranslation('notification.no_student_selected'), 'error');
        return;
    }
    
    // Add to data
    if (!sampleData.content[targetUser]) {
        sampleData.content[targetUser] = { hifz: [], revision: [], sessions: [] };
    }
    
    if (!sampleData.content[targetUser].hifz) {
        sampleData.content[targetUser].hifz = [];
    }
    
    const newEntry = {
        surah: surah,
        ayahRange: ayahRange,
        startAyah: parseInt(startAyah),
        endAyah: parseInt(endAyah)
    };
    
    sampleData.content[targetUser].hifz.push(newEntry);
    
    
    // Save data
    saveAllDataToStorage();
    console.log('Data saved to storage');
    
    // Reload content
    console.log('Reloading student content...');
    loadStudentContent();
    
    // Close modal and reset form
    closeModal('addHifzModal');
    document.getElementById('addHifzForm').reset();
    
        console.log(getTranslation('notification.hifz_added'), 'success');
}

// Handle add revision
function handleAddRevision(event) {
    event.preventDefault();
    
    const surah = document.getElementById('revisionSurah').value.trim();
    const startAyah = document.getElementById('revisionStartAyah').value;
    const endAyah = document.getElementById('revisionEndAyah').value;
    const ayahRange = `${startAyah}-${endAyah}`;
    
    if (!surah || !startAyah || !endAyah) {
        console.log(getTranslation('notification.fill_all_fields'), 'error');
        return;
    }
    
    if (parseInt(startAyah) > parseInt(endAyah)) {
        console.log('Start ayah cannot be greater than end ayah', 'error');
        return;
    }
    
    // Get the current student ID using the utility function
    const targetUser = getCurrentStudentId();
    
    console.log('Adding revision entry for target user:', targetUser);
    console.log('Current user type:', currentUserType);
    console.log('Editing student:', editingStudent);
    
    if (!targetUser) {
        console.log(getTranslation('notification.no_student_selected'), 'error');
        return;
    }
    
    // Add to data
    if (!sampleData.content[targetUser]) {
        sampleData.content[targetUser] = { hifz: [], revision: [], sessions: [] };
    }
    
    if (!sampleData.content[targetUser].revision) {
        sampleData.content[targetUser].revision = [];
    }
    
    const newEntry = {
        surah: surah,
        ayahRange: ayahRange,
        startAyah: parseInt(startAyah),
        endAyah: parseInt(endAyah)
    };
    
    sampleData.content[targetUser].revision.push(newEntry);
    
    console.log('Added revision entry:', newEntry);
    console.log('Total revision entries for', targetUser, ':', sampleData.content[targetUser].revision.length);
    
    // Save data
    saveAllDataToStorage();
    console.log('Data saved to storage');
    
    // Reload content
    console.log('Reloading student content...');
    loadStudentContent();
    
    // Close modal and reset form
    closeModal('addRevisionModal');
    document.getElementById('addRevisionForm').reset();
    
    console.log(getTranslation('notification.revision_added'), 'success');
}

// Handle add session
function handleAddSession(event) {
    event.preventDefault();
    
    const date = document.getElementById('sessionDate').value;
    const score = document.getElementById('sessionScore').value;
    
    // Collect all hifz items
    const hifzItems = [];
    const hifzRows = document.querySelectorAll('#hifzItemsContainer .session-item-row');
    hifzRows.forEach(row => {
        const surahSelect = row.querySelector('.session-hifz-surah');
        
        if (surahSelect.value) {
            // Parse the value to extract surah and ayah range
            const valueParts = surahSelect.value.split(' ');
            if (valueParts.length >= 2) {
                const surah = valueParts.slice(0, -1).join(' '); // Everything except last part
                const ayahRange = valueParts[valueParts.length - 1]; // Last part is ayah range
                hifzItems.push({
                    surah: surah,
                    ayahRange: ayahRange
                });
            }
        }
    });
    
    // Collect all revision items
    const revisionItems = [];
    const revisionRows = document.querySelectorAll('#revisionItemsContainer .session-item-row');
    revisionRows.forEach(row => {
        const surahSelect = row.querySelector('.session-revision-surah');
        
        if (surahSelect.value) {
            // Parse the value to extract surah and ayah range
            const valueParts = surahSelect.value.split(' ');
            if (valueParts.length >= 2) {
                const surah = valueParts.slice(0, -1).join(' '); // Everything except last part
                const ayahRange = valueParts[valueParts.length - 1]; // Last part is ayah range
                revisionItems.push({
                    surah: surah,
                    ayahRange: ayahRange
                });
            }
        }
    });
    
    console.log('=== SESSION DEBUG ===');
    console.log('Date:', date);
    console.log('Score:', score);
    console.log('Hifz items:', hifzItems);
    console.log('Revision items:', revisionItems);
    
    if (!date || hifzItems.length === 0 || revisionItems.length === 0 || !score) {
        console.log('Please fill in all required fields and add at least one hifz and revision item', 'error');
        return;
    }
    
    // Get the current student ID using the utility function
    const targetUser = getCurrentStudentId();
    
    if (!targetUser) {
        console.log(getTranslation('notification.no_student_selected'), 'error');
        return;
    }
    
    // Add to data
    if (!sampleData.content[targetUser].sessions) {
        sampleData.content[targetUser].sessions = [];
    }
    
    // Process hifz items
    const processedHifzItems = hifzItems.map(item => {
        const ayahParts = item.ayahRange.split(/\s*-\s*/);
        const startAyah = parseInt(ayahParts[0]);
        const endAyah = ayahParts[1] ? parseInt(ayahParts[1]) : startAyah;
        
        return {
            surah: item.surah,
            ayahRange: item.ayahRange,
            startAyah: startAyah,
            endAyah: endAyah
        };
    });
    
    // Process revision items
    const processedRevisionItems = revisionItems.map(item => {
        const ayahParts = item.ayahRange.split(/\s*-\s*/);
        const startAyah = parseInt(ayahParts[0]);
        const endAyah = ayahParts[1] ? parseInt(ayahParts[1]) : startAyah;
        
        return {
            surah: item.surah,
            ayahRange: item.ayahRange,
            startAyah: startAyah,
            endAyah: endAyah
        };
    });
    
    // Add to sessions
    sampleData.content[targetUser].sessions.push({
        date: date,
        hifz: processedHifzItems,
        revision: processedRevisionItems,
        score: score
    });
    
    // Also add to hifz and revision arrays for dropdown population
    if (!sampleData.content[targetUser].hifz) {
        sampleData.content[targetUser].hifz = [];
    }
    if (!sampleData.content[targetUser].revision) {
        sampleData.content[targetUser].revision = [];
    }
    
    // Add new hifz items to the hifz array (avoid duplicates)
    processedHifzItems.forEach(newItem => {
        const exists = sampleData.content[targetUser].hifz.some(existingItem => 
            existingItem.surah === newItem.surah && existingItem.ayahRange === newItem.ayahRange
        );
        if (!exists) {
            sampleData.content[targetUser].hifz.push(newItem);
        }
    });
    
    // Add new revision items to the revision array (avoid duplicates)
    processedRevisionItems.forEach(newItem => {
        const exists = sampleData.content[targetUser].revision.some(existingItem => 
            existingItem.surah === newItem.surah && existingItem.ayahRange === newItem.ayahRange
        );
        if (!exists) {
            sampleData.content[targetUser].revision.push(newItem);
        }
    });
    
    console.log('Updated content for student:', targetUser);
    console.log('Hifz items:', sampleData.content[targetUser].hifz);
    console.log('Revision items:', sampleData.content[targetUser].revision);
    
    // Reload content
    loadStudentContent();
    
    // Update localStorage to persist changes
    saveAllDataToStorage();
    
    // Close modal and reset form
    closeModal('addSessionModal');
    resetSessionForm();
    
    console.log(getTranslation('notification.session_added'), 'success');
}

// Reset session form to initial state
function resetSessionForm() {
    const form = document.getElementById('addSessionForm');
    form.reset();
    
    // Reset hifz items to single row
    const hifzContainer = document.getElementById('hifzItemsContainer');
    hifzContainer.innerHTML = `
        <div class="session-item-row">
            <select class="session-hifz-surah" required onchange="toggleHifzAddButton(this)">
                <option value="">Select Hifz Item</option>
            </select>
            <button type="button" class="btn btn-small btn-secondary" onclick="addHifzItem()" style="display: none;">+</button>
        </div>
    `;
    
    // Reset revision items to single row
    const revisionContainer = document.getElementById('revisionItemsContainer');
    revisionContainer.innerHTML = `
        <div class="session-item-row">
            <select class="session-revision-surah" required onchange="toggleRevisionAddButton(this)">
                <option value="">Select Revision Item</option>
            </select>
            <button type="button" class="btn btn-small btn-secondary" onclick="addRevisionItem()" style="display: none;">+</button>
        </div>
    `;
    
    // Populate the selects with surah options
    const hifzSelect = hifzContainer.querySelector('.session-hifz-surah');
    const revisionSelect = revisionContainer.querySelector('.session-revision-surah');
    
    updateSurahOptions(hifzSelect);
    updateSurahOptions(revisionSelect);
    
    // Add event listeners to the reset selects
    if (hifzSelect) {
        hifzSelect.addEventListener('click', function(event) {
            if (event.target.options.length <= 1) {
                console.log('Reset hifz dropdown clicked, populating...');
                populateSessionContentOptions(event.target);
            }
        });
        hifzSelect.addEventListener('focus', function(event) {
            if (event.target.options.length <= 1) {
                console.log('Reset hifz dropdown focused, populating...');
                populateSessionContentOptions(event.target);
            }
        });
    }
    
    if (revisionSelect) {
        revisionSelect.addEventListener('click', function(event) {
            if (event.target.options.length <= 1) {
                console.log('Reset revision dropdown clicked, populating...');
                populateSessionContentOptions(event.target);
            }
        });
        revisionSelect.addEventListener('focus', function(event) {
            if (event.target.options.length <= 1) {
                console.log('Reset revision dropdown focused, populating...');
                populateSessionContentOptions(event.target);
            }
        });
    }
    
    // Populate immediately if content is available
    if (Object.keys(sampleData.content).length > 0) {
        if (hifzSelect) populateSessionContentOptions(hifzSelect);
        if (revisionSelect) populateSessionContentOptions(revisionSelect);
    }
}

// Handle logout function
// Show logout confirmation
function showLogoutConfirmation() {
    if (confirm(getTranslation('notification.confirm_logout'))) {
        handleLogout();
    }
}

// Handle logout
function handleLogout() {
    console.log('Logout initiated');
    
    // Clear session data
    localStorage.removeItem('quranUser');
    localStorage.removeItem('quranUserType');
    
    // Reset global variables
    currentUser = null;
    currentUserType = null;
    currentTeacher = null;
    
    // Hide options button on logout
    updateOptionsButtonVisibility();
    
    // Reset language to default
    setLanguage('en');
    
    // Reset body direction and classes
    document.body.setAttribute('dir', 'ltr');
    document.body.classList.remove('teacher-mode');
    document.body.style.direction = 'ltr';
    
    // Reset login container to original state after logout
    setTimeout(() => {
        const loginContainer = document.querySelector('.login-container');
        if (loginContainer) {
            // Reset to original CSS values
            loginContainer.style.position = 'fixed';
            loginContainer.style.top = '0';
            loginContainer.style.left = '0';
            loginContainer.style.width = '100%';
            loginContainer.style.height = '100%';
            loginContainer.style.transform = '';
            loginContainer.style.right = '';
            loginContainer.style.maxWidth = '';
            loginContainer.style.display = 'flex';
            loginContainer.style.flexDirection = 'column';
            loginContainer.style.justifyContent = 'center';
            loginContainer.style.alignItems = 'center';
        }
    }, 100);
    
    // Hide dashboard and show login
    const loginSection = document.getElementById('loginSection');
    const dashboardSection = document.getElementById('dashboardSection');
    
    if (dashboardSection) {
        dashboardSection.style.display = 'none';
        dashboardSection.classList.remove('show');
    }
    if (loginSection) {
        loginSection.style.display = 'block';
        loginSection.classList.add('show');
    }
    
    
    // Clear form inputs
    const userCodeInput = document.getElementById('userCode');
    if (userCodeInput) userCodeInput.value = '';
    
    // Reset main content if it was modified for admin
    const mainContent = document.querySelector('.main-content');
    if (mainContent && window.originalMainContent) {
        mainContent.innerHTML = window.originalMainContent;
    }
    
    // Reset display styles
    const topCards = document.querySelector('.top-cards');
    const pastSessionsCard = document.querySelector('.past-sessions-card');
    if (topCards) topCards.style.display = 'flex';
    if (pastSessionsCard) pastSessionsCard.style.display = 'block';
    
    console.log('Logout completed');
}

// Logout confirmation functions removed - direct logout now!

// Teacher Dashboard Functions
function testModal() {
    console.log('testModal called');
    const modal = document.getElementById('teacherOptionsModal');
    console.log('Modal element:', modal);
    if (modal) {
        modal.style.display = 'block';
        modal.classList.add('show');
        modal.style.visibility = 'visible';
        modal.style.opacity = '1';
        modal.style.zIndex = '2000';
        console.log('Modal should be visible now');
    } else {
        console.error('Modal not found!');
    }
}

function showTeacherOptions() {
    console.log('showTeacherOptions called');
    console.log('Looking for modal with ID: teacherOptionsModal');
    const modal = document.getElementById('teacherOptionsModal');
    console.log('Modal found:', modal);
    if (modal) {
        console.log('Modal exists, calling showModal');
        showModal('teacherOptionsModal');
    } else {
        console.error('teacherOptionsModal not found in DOM!');
    }
}

function showClassSelection() {
    closeModal('teacherOptionsModal');
    populateClassesList();
    showModal('classSelectionModal');
}

function populateClassesList() {
    const classesList = document.getElementById('classesList');
    if (!classesList) return;
    
    // Get all unique classes from students
    const classes = new Set();
    Object.values(sampleData.students).forEach(student => {
        if (student.class) {
            classes.add(student.class);
        }
    });
    
    classesList.innerHTML = '';
    
    if (classes.size === 0) {
        classesList.innerHTML = '<p style="text-align: center; color: #666;">No classes found</p>';
        return;
    }
    
    Array.from(classes).sort().forEach(className => {
        const classItem = document.createElement('div');
        classItem.className = 'class-item';
        classItem.onclick = () => selectClass(className);
        
        // Count students in this class
        const studentCount = Object.values(sampleData.students).filter(s => s.class === className).length;
        
        const studentText = currentLanguage === 'ar' ? 
            `${studentCount} ${studentCount === 1 ? 'طالب' : 'طالب'}` : 
            `${studentCount} student${studentCount !== 1 ? 's' : ''}`;
            
        classItem.innerHTML = `
            <h4>${className}</h4>
            <p>${studentText}</p>
        `;
        
        classesList.appendChild(classItem);
    });
}

function selectClass(className) {
    closeModal('classSelectionModal');
    populateStudentsList(className);
    showModal('studentSelectionModal');
}

function populateStudentsList(className) {
    const studentsList = document.getElementById('studentsList');
    const selectedClassInfo = document.getElementById('selectedClassInfo');
    const modalActions = document.querySelector('#studentSelectionModal .modal-actions');
    
    if (!studentsList || !selectedClassInfo) {
        console.error('studentsList or selectedClassInfo not found');
        return;
    }
    
    
    selectedClassInfo.textContent = `${getTranslation('teacher.students_in_class')} ${className}`;
    
    // Add selection counter
    const selectionCounter = document.createElement('div');
    selectionCounter.id = 'selectionCounter';
    selectionCounter.style.cssText = `
        text-align: center;
        margin: 10px 0;
        font-weight: bold;
        color: var(--primary-color);
    `;
    selectionCounter.textContent = '0 students selected';
    
    // Insert counter after selectedClassInfo
    selectedClassInfo.parentNode.insertBefore(selectionCounter, selectedClassInfo.nextSibling);
    
    // Get students in this class
    const studentsInClass = Object.entries(sampleData.students).filter(([id, student]) => student.class === className);
    
    console.log('Students in class', className, ':', studentsInClass);
    console.log('All students:', Object.keys(sampleData.students));
    
    studentsList.innerHTML = '';
    
    if (studentsInClass.length === 0) {
        studentsList.innerHTML = '<p style="text-align: center; color: #666;">No students in this class</p>';
        console.log('No students found in class:', className);
        return;
    }
    
    console.log('Found', studentsInClass.length, 'students in class', className);
    
    studentsInClass.forEach(([studentId, student]) => {
        const studentItem = document.createElement('div');
        studentItem.className = 'student-item';
        
        // Check if student is already assigned to current teacher
        const isAssigned = sampleData.teachers[currentUser] && 
                          sampleData.teachers[currentUser].students && 
                          sampleData.teachers[currentUser].students.includes(studentId);
        
        console.log('Checking assignment for student:', studentId);
        console.log('Teacher students array:', sampleData.teachers[currentUser]?.students);
        console.log('Is assigned:', isAssigned);
        
        if (isAssigned) {
            studentItem.classList.add('assigned');
        }
        
        studentItem.innerHTML = `
            <input type="checkbox" id="student_${studentId}" ${isAssigned ? 'disabled' : ''} class="student-checkbox">
            <div class="student-info">
                <span class="student-name">${student.name}</span>
                <span class="student-class">${student.class}</span>
            </div>
        `;
        
        
        // Make entire item clickable for selection
        if (!isAssigned) {
            studentItem.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
            const checkbox = studentItem.querySelector('.student-checkbox');
            if (checkbox && !checkbox.disabled) {
                checkbox.checked = !checkbox.checked;
                    // Add visual feedback
                    if (checkbox.checked) {
                        studentItem.style.backgroundColor = '#e8f5e8';
                        studentItem.style.borderColor = '#27ae60';
                        studentItem.style.borderWidth = '2px';
                    } else {
                        studentItem.style.backgroundColor = '';
                        studentItem.style.borderColor = '';
                        studentItem.style.borderWidth = '';
                    }
                    console.log('Toggled checkbox for student:', studentId, 'Checked:', checkbox.checked);
                    updateSelectionCounter();
                }
            });
        }
        
        studentsList.appendChild(studentItem);
    });
}

function updateSelectionCounter() {
    const counter = document.getElementById('selectionCounter');
    if (counter) {
        const checkedBoxes = document.querySelectorAll('#studentsList input[type="checkbox"]:checked:not(:disabled)');
        counter.textContent = `${checkedBoxes.length} student(s) selected`;
    }
}

function addSelectedStudents() {
    const checkboxes = document.querySelectorAll('#studentsList input[type="checkbox"]:checked:not(:disabled)');
    let addedCount = 0;
    
    console.log('Found checkboxes:', checkboxes.length);
    console.log('Current user:', currentUser);
    console.log('Teacher data:', sampleData.teachers[currentUser]);
    
    // Don't reset the teacher's students array - this was causing the issue!
    // if (sampleData.teachers[currentUser]) {
    //     sampleData.teachers[currentUser].students = [];
    //     console.log('Reset teacher students array for testing');
    // }
    
    if (checkboxes.length === 0) {
        alert(getTranslation('teacher.no_students_selected') || 'Please select at least one student.');
        return;
    }
    
    checkboxes.forEach(checkbox => {
        const studentId = checkbox.id.replace('student_', '');
        console.log('Processing student:', studentId);
        if (addStudentToTeacher(studentId)) {
            addedCount++;
            console.log('Successfully added student:', studentId);
        } else {
            console.log('Failed to add student:', studentId);
        }
    });
    
    console.log('Total added:', addedCount);
    console.log('Teacher students after:', sampleData.teachers[currentUser]?.students);
    
    if (addedCount > 0) {
        console.log(`Added ${addedCount} students to teacher ${currentUser}`);
        alert(`${addedCount} student(s) added successfully! You can now manage them in "Edit Students".`);
        
        // Close the modal
        closeModal('studentSelectionModal');
        closeModal('classSelectionModal');
        
        // Show assigned students (Edit Students view)
        showAssignedStudents();
        
        // Update button color
        updateEditStudentsButtonColor();
    } else {
        alert('No students were added. They may already be assigned to you.');
    }
}

function addStudentToTeacher(studentId) {
    console.log('assignStudentToTeacher called with:', studentId);
    console.log('Current user:', currentUser);
    console.log('Teacher exists:', !!sampleData.teachers[currentUser]);
    
    if (!sampleData.teachers[currentUser]) {
        console.log('Current teacher not found');
        return false;
    }
    
    // Initialize students array if it doesn't exist
    if (!sampleData.teachers[currentUser].students) {
        sampleData.teachers[currentUser].students = [];
        console.log('Initialized students array for teacher');
    }
    
    console.log('Current students before check:', sampleData.teachers[currentUser].students);
    console.log('Looking for student:', studentId);
    console.log('Array includes check:', sampleData.teachers[currentUser].students.includes(studentId));
    
    // Check if student is already assigned
    if (sampleData.teachers[currentUser].students.includes(studentId)) {
        console.log('Student already assigned to this teacher');
        return false;
    }
    
    // Add student to teacher
    sampleData.teachers[currentUser].students.push(studentId);
    console.log('Added student to array. New students:', sampleData.teachers[currentUser].students);
    
    // Save data
    saveAllDataToStorage();
    
    console.log(`Student ${studentId} assigned to teacher ${currentUser}`);
    return true;
}

function showAssignedStudents() {
    closeModal('teacherOptionsModal');
    
    if (!sampleData.teachers[currentUser] || !sampleData.teachers[currentUser].students || sampleData.teachers[currentUser].students.length === 0) {
        // Show empty state
        const hifzContent = document.getElementById('hifzContent');
        const revisionContent = document.getElementById('revisionContent');
        const sessionsList = document.getElementById('sessionsList');
        
        if (hifzContent) hifzContent.innerHTML = `<p style="text-align: center; color: #666; padding: 20px;">${getTranslation('teacher.no_students_assigned')}</p>`;
        if (revisionContent) revisionContent.innerHTML = `<p style="text-align: center; color: #666; padding: 20px;">${getTranslation('teacher.no_students_assigned')}</p>`;
        if (sessionsList) sessionsList.innerHTML = `<p style="text-align: center; color: #666; padding: 20px;">${getTranslation('teacher.no_students_assigned')}</p>`;
        
        // Show teacher options button
        showTeacherControls();
        return;
    }
    
    // Show assigned students list in a separate container, not in hifz content
    const hifzContent = document.getElementById('hifzContent');
    if (hifzContent) {
        hifzContent.innerHTML = `<p style="text-align: center; color: #666; padding: 20px;">${getTranslation('content.select_student')}</p>`;
    }
    
    // Remove existing container if it exists
    const existingContainer = document.getElementById('assignedStudentsContainer');
    if (existingContainer) {
        existingContainer.remove();
    }
    
    // Create a new dedicated container for assigned students
    const assignedStudentsContainer = document.createElement('div');
    assignedStudentsContainer.id = 'assignedStudentsContainer';
    assignedStudentsContainer.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        border: 2px solid var(--primary-color);
        border-radius: 15px;
        padding: 20px;
        width: 90%;
        max-width: 600px;
        max-height: 80%;
        overflow-y: auto;
        z-index: 1000;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    `;
    document.body.appendChild(assignedStudentsContainer);
    
    // Group students by class
    const studentsByClass = {};
    console.log('Teacher students array:', sampleData.teachers[currentUser].students);
    console.log('Total students assigned to teacher:', sampleData.teachers[currentUser].students.length);
    
    sampleData.teachers[currentUser].students.forEach((studentId, index) => {
        const student = sampleData.students[studentId];
        console.log(`Processing student ${index + 1}/${sampleData.teachers[currentUser].students.length}:`, studentId, student);
        if (student) {
            if (!studentsByClass[student.class]) {
                studentsByClass[student.class] = [];
                console.log('Created new class group:', student.class);
            }
            // Check if student is already in this class to avoid duplicates
            const alreadyExists = studentsByClass[student.class].some(s => s.id === student.id);
            if (!alreadyExists) {
                studentsByClass[student.class].push(student);
                console.log('Added student to class:', student.class, 'Total in class:', studentsByClass[student.class].length);
            } else {
                console.log('Student already exists in class:', student.class, 'Skipping duplicate');
            }
        } else {
            console.error('Student not found in sampleData.students:', studentId);
        }
    });
    
    console.log('Students by class:', studentsByClass);
    console.log('Class names:', Object.keys(studentsByClass));
    console.log('Number of classes:', Object.keys(studentsByClass).length);
    
    // Check if we have any classes
    if (Object.keys(studentsByClass).length === 0) {
        console.error('No classes found! This should not happen.');
        return;
    }
    
    assignedStudentsContainer.innerHTML = `
            <div style="text-align: center; margin-bottom: 20px;">
                <h3>${getTranslation('teacher.assigned_students')}</h3>
            <button onclick="closeAssignedStudents()" style="position: absolute; top: 10px; right: 15px; background: none; border: none; font-size: 24px; cursor: pointer;">&times;</button>
            </div>
        <div id="classesList">
            ${Object.keys(studentsByClass).map(className => `
                <div class="class-section" style="margin-bottom: 20px;">
                    <h4 onclick="toggleClassStudents('${className}')" style="cursor: pointer; padding: 10px; background: var(--primary-color); color: white; border-radius: 8px; margin: 0 0 10px 0; text-align: center; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='#0056b3';" onmouseout="this.style.backgroundColor='var(--primary-color)';">
                        Class ${className} (${studentsByClass[className].length} students) ▼
                    </h4>
                    <div id="students-${className}" class="students-grid" style="display: none; margin-left: 20px;">
                        ${studentsByClass[className].map(student => `
                            <div class="student-item" onclick="selectStudentForEditing('${student.id}')" style="cursor: pointer; padding: 12px 16px; margin: 2px 0; border: 1px solid var(--border-color); border-radius: 6px; background: var(--card-background); transition: all 0.3s ease; display: flex; align-items: center; gap: 16px;" onmouseover="this.style.borderColor='var(--primary-color)'; this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.1)';" onmouseout="this.style.borderColor='var(--border-color)'; this.style.transform='translateY(0)'; this.style.boxShadow='none';">
                                <div style="flex: 1; display: flex; align-items: center; gap: 8px;">
                                    <span style="font-weight: bold; color: var(--text-primary); font-size: 14px;">${student.name}</span>
                                    <span style="color: var(--primary-color); font-size: 14px; font-weight: 600;">${student.class}</span>
                        </div>
                                <button class="btn btn-danger btn-sm" onclick="event.stopPropagation(); removeStudentFromTeacher('${student.id}')" style="padding: 2px 6px; font-size: 10px; min-width: 50px;">×</button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
            </div>
        `;
    
    // Clear other content areas
    const revisionContent = document.getElementById('revisionContent');
    const sessionsList = document.getElementById('sessionsList');
    if (revisionContent) revisionContent.innerHTML = `<p style="text-align: center; color: #666; padding: 20px;">${getTranslation('content.select_student')}</p>`;
    if (sessionsList) sessionsList.innerHTML = `<p style="text-align: center; color: #666; padding: 20px;">${getTranslation('content.select_student')}</p>`;
    
    // Show teacher controls
    showTeacherControls();
}

function closeAssignedStudents() {
    const container = document.getElementById('assignedStudentsContainer');
    if (container) {
        container.remove();
    }
}

function updateEditStudentsButtonColor() {
    const editButton = document.querySelector('button[data-translate="teacher.edit_students"]');
    if (editButton) {
        // Always make it green (btn-success)
        editButton.classList.remove('btn-secondary', 'btn-primary');
        editButton.classList.add('btn-success');
        editButton.style.backgroundColor = 'var(--success-color)';
        editButton.style.borderColor = 'var(--success-color)';
        editButton.style.color = 'white';
    }
}

function toggleClassStudents(className) {
    const studentsDiv = document.getElementById(`students-${className}`);
    const classHeader = document.querySelector(`h4[onclick="toggleClassStudents('${className}')"]`);
    
    if (studentsDiv && classHeader) {
        if (studentsDiv.style.display === 'none') {
            studentsDiv.style.display = 'block';
            classHeader.innerHTML = classHeader.innerHTML.replace('▼', '▲');
        } else {
            studentsDiv.style.display = 'none';
            classHeader.innerHTML = classHeader.innerHTML.replace('▲', '▼');
        }
    }
}

function selectStudentForEditing(studentId) {
    console.log('Selecting student for editing:', studentId);
    editingStudent = studentId;
    
    // Close the assigned students modal
    closeAssignedStudents();
    
    // Show editing header
    showEditingStudentHeader(studentId);
    
    // Load the student's content
    loadStudentContent();
    
    // Populate past sessions dropdowns for this student
    populatePastSessionsDropdowns();
    
    console.log('Student editing mode activated for:', studentId);
}

function showEditingStudentHeader(studentId) {
    const student = sampleData.students[studentId];
    if (!student) return;
    
    // Create or update the editing header
    let editingHeader = document.getElementById('editingStudentHeader');
    if (!editingHeader) {
        editingHeader = document.createElement('div');
        editingHeader.id = 'editingStudentHeader';
        editingHeader.style.cssText = `
            background: var(--primary-color);
            color: white;
            padding: 15px 20px;
            margin-bottom: 20px;
            border-radius: 8px;
            text-align: center;
            position: relative;
        `;
        
        // Insert at the top of the main content
        const mainContent = document.querySelector('.main-content') || document.querySelector('#mainContent');
        if (mainContent) {
            mainContent.insertBefore(editingHeader, mainContent.firstChild);
        }
    }
    
    editingHeader.innerHTML = `
        <h3 style="margin: 0; color: white;">Editing Student: ${student.name} (${student.class})</h3>
        <button onclick="stopEditingStudent()" style="position: absolute; top: 10px; right: 15px; background: none; border: none; color: white; font-size: 20px; cursor: pointer;">&times;</button>
    `;
}

function stopEditingStudent() {
    editingStudent = null;
    const editingHeader = document.getElementById('editingStudentHeader');
    if (editingHeader) {
        editingHeader.remove();
    }
    
    // Reload content to show teacher options
    loadStudentContent();
}

function removeStudentFromTeacher(studentId) {
    if (!sampleData.teachers[currentUser] || !sampleData.teachers[currentUser].students) {
        return;
    }
    
    // Remove student from teacher's list
    sampleData.teachers[currentUser].students = sampleData.teachers[currentUser].students.filter(id => id !== studentId);
    
    // Save data
    saveAllDataToStorage();
    
    console.log(`Student ${studentId} removed from teacher ${currentUser}`);
    
    // Refresh the assigned students list
    showAssignedStudents();
    
    // Update button color
    updateEditStudentsButtonColor();
}

// Modal functions
function showModal(modalId) {
    console.log('showModal called with:', modalId);
    const modal = document.getElementById(modalId);
    console.log('Modal element found:', modal);
    if (modal) {
        console.log('Modal before changes:');
        console.log('- display:', modal.style.display);
        console.log('- classList:', modal.classList.toString());
        
        modal.style.display = 'block';
        modal.classList.add('show');
        
        console.log('Modal after changes:');
        console.log('- display:', modal.style.display);
        console.log('- classList:', modal.classList.toString());
        console.log('- computed display:', window.getComputedStyle(modal).display);
        
        // Force visibility
        modal.style.visibility = 'visible';
        modal.style.opacity = '1';
        modal.style.zIndex = '2000';
        
        console.log('Modal should now be visible');
        
        // If this is the session modal, populate past sessions dropdowns
        if (modalId === 'addSessionModal') {
            console.log('Session modal opened - populating past sessions dropdowns');
            setTimeout(() => {
                populatePastSessionsDropdowns();
            }, 100);
        }
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
        modal.classList.remove('show');
    }
}

// Helper function to get surah number from surah name
function getSurahNumberFromName(surahName) {
    // Map HTML surah names to surah numbers (matching the exact HTML values)
    const surahNameMap = {
        'Al Fatiha': 1, 'Al Baqarah': 2, 'Al Imran': 3, 'An Nisa': 4, 'Al Ma\'idah': 5,
        'Al An\'am': 6, 'Al A\'raf': 7, 'Al Anfal': 8, 'At Tawbah': 9, 'Yunus': 10,
        'Hud': 11, 'Yusuf': 12, 'Ar Ra\'d': 13, 'Ibrahim': 14, 'Al Hijr': 15,
        'An Nahl': 16, 'Al Isra': 17, 'Al Kahf': 18, 'Maryam': 19, 'Ta Ha': 20,
        'Al Anbiya': 21, 'Al Hajj': 22, 'Al Mu\'minun': 23, 'An Nur': 24, 'Al Furqan': 25,
        'Ash Shu\'ara': 26, 'An Naml': 27, 'Al Qasas': 28, 'Al \'Ankabut': 29, 'Ar Rum': 30,
        'Luqman': 31, 'As Sajdah': 32, 'Al Ahzab': 33, 'Saba': 34, 'Fatir': 35,
        'Ya Sin': 36, 'As Saffat': 37, 'Sad': 38, 'Az Zumar': 39, 'Ghafir': 40,
        'Fussilat': 41, 'Ash Shura': 42, 'Az Zukhruf': 43, 'Ad Dukhan': 44, 'Al Jathiyah': 45,
        'Al Ahqaf': 46, 'Muhammad': 47, 'Al Fath': 48, 'Al Hujurat': 49, 'Qaf': 50,
        'Adh Dhariyat': 51, 'At Tur': 52, 'An Najm': 53, 'Al Qamar': 54, 'Ar Rahman': 55,
        'Al Waqi\'ah': 56, 'Al Hadid': 57, 'Al Mujadilah': 58, 'Al Hashr': 59, 'Al Mumtahanah': 60,
        'As Saff': 61, 'Al Jumu\'ah': 62, 'Al Munafiqun': 63, 'At Taghabun': 64, 'At Talaq': 65,
        'At Tahrim': 66, 'Al Mulk': 67, 'Al Qalam': 68, 'Al Haqqah': 69, 'Al Ma\'arij': 70,
        'Nuh': 71, 'Al Jinn': 72, 'Al Muzzammil': 73, 'Al Muddathir': 74, 'Al Qiyamah': 75,
        'Al Insan': 76, 'Al Mursalat': 77, 'An Naba': 78, 'An Nazi\'at': 79, 'Abasa': 80,
        'At Takwir': 81, 'Al Infitar': 82, 'Al Mutaffifin': 83, 'Al Inshiqaq': 84, 'Al Buruj': 85,
        'At Tariq': 86, 'Al A\'la': 87, 'Al Ghashiyah': 88, 'Al Fajr': 89, 'Al Balad': 90,
        'Ash Shams': 91, 'Al Lail': 92, 'Ad Duha': 93, 'Ash Sharh': 94, 'At Tin': 95,
        'Al \'Alaq': 96, 'Al Qadr': 97, 'Al Bayyinah': 98, 'Az Zalzalah': 99, 'Al \'Adiyat': 100,
        'Al Qari\'ah': 101, 'At Takathur': 102, 'Al \'Asr': 103, 'Al Humazah': 104, 'Al Fil': 105,
        'Quraish': 106, 'Al Ma\'un': 107, 'Al Kawthar': 108, 'Al Kafirun': 109, 'An Nasr': 110,
        'Al Masad': 111, 'Al Ikhlas': 112, 'Al Falaq': 113, 'An Nas': 114
    };
    
    return surahNameMap[surahName] || null;
}

// Helper function to generate ayah range dropdowns
function generateAyahRangeDropdown(surahName, startId, endId) {
    const surahNumber = getSurahNumberFromName(surahName);
    if (!surahNumber) {
        console.error('Surah not found:', surahName);
        return '<p style="color: red;">Surah not found: ' + surahName + '</p>';
    }
    
    const surah = surahData[surahNumber];
    if (!surah) {
        console.error('Surah data not found for number:', surahNumber);
        return '<p style="color: red;">Surah data not found</p>';
    }
    
    console.log('Generating dropdown for surah:', surahName, '(#' + surahNumber + ') with', surah.ayahs, 'ayahs');
    
    const options = [];
    for (let i = 1; i <= surah.ayahs; i++) {
        options.push(`<option value="${i}">${i}</option>`);
    }
    
    return `
        <select id="${startId}" required style="flex: 1; min-width: 120px; padding: 8px 12px; border: 1px solid #ddd; border-radius: 4px; background-color: white; font-size: 14px;">
            <option value="">${getTranslation('form.start_ayah')}</option>
            ${options.join('')}
        </select>
        <span style="font-weight: 500; color: #333;">${getTranslation('form.to')}</span>
        <select id="${endId}" required style="flex: 1; min-width: 120px; padding: 8px 12px; border: 1px solid #ddd; border-radius: 4px; background-color: white; font-size: 14px;">
            <option value="">${getTranslation('form.end_ayah')}</option>
            ${options.join('')}
        </select>
    `;
}

// Helper function to populate past sessions dropdowns
function populatePastSessionsDropdowns() {
    const targetUser = getCurrentStudentId();
    console.log('Populating past sessions dropdowns for user:', targetUser);
    
    if (!targetUser) {
        console.log('No target user found');
        return;
    }
    
    if (!sampleData.content[targetUser]) {
        console.log('No content data found for user:', targetUser);
        return;
    }
    
    const userData = sampleData.content[targetUser];
    console.log('User data:', userData);
    console.log('Hifz items:', userData.hifz);
    console.log('Revision items:', userData.revision);
    
    // Populate hifz dropdown
    const hifzDropdown = document.getElementById('sessionHifzSurah');
    if (hifzDropdown) {
        console.log('Found hifz dropdown, populating with', userData.hifz.length, 'items');
        hifzDropdown.innerHTML = '<option value="">Select Hifz Item</option>';
        userData.hifz.forEach((item, index) => {
            const option = document.createElement('option');
            option.value = `${item.surah} ${item.ayahRange}`;
            option.textContent = formatContentItem(item, currentLanguage === 'ar');
            hifzDropdown.appendChild(option);
            console.log('Added hifz option:', option.textContent);
        });
    } else {
        console.log('Hifz dropdown not found');
    }
    
    // Populate revision dropdown
    const revisionDropdown = document.getElementById('sessionRevisionSurah');
    if (revisionDropdown) {
        console.log('Found revision dropdown, populating with', userData.revision.length, 'items');
        revisionDropdown.innerHTML = '<option value="">Select Revision Item</option>';
        userData.revision.forEach((item, index) => {
            const option = document.createElement('option');
            option.value = `${item.surah} ${item.ayahRange}`;
            option.textContent = formatContentItem(item, currentLanguage === 'ar');
            revisionDropdown.appendChild(option);
            console.log('Added revision option:', option.textContent);
        });
    } else {
        console.log('Revision dropdown not found');
    }
}

// Function to update ayah range dropdowns when surah is selected
function updateAyahRangeDropdowns(surahSelectId, containerId) {
    const surahSelect = document.getElementById(surahSelectId);
    const container = document.getElementById(containerId);
    
    if (!surahSelect || !container) return;
    
    // Set initial state
    container.innerHTML = `<p style="color: #666; text-align: center; padding: 10px;">${getTranslation('form.select_surah_first')}</p>`;
    
    surahSelect.addEventListener('change', function() {
        const surahName = this.value;
        if (surahName) {
            container.innerHTML = generateAyahRangeDropdown(surahName, `${surahSelectId.replace('Surah', 'StartAyah')}`, `${surahSelectId.replace('Surah', 'EndAyah')}`);
        } else {
            container.innerHTML = `<p style="color: #666; text-align: center; padding: 10px;">${getTranslation('form.select_surah_first')}</p>`;
        }
    });
}

// Function to initialize all dropdown functionality
function initializeDropdowns() {
    // Update hifz ayah range dropdown
    updateAyahRangeDropdowns('hifzSurah', 'hifzAyahRangeContainer');
    
    // Update revision ayah range dropdown
    updateAyahRangeDropdowns('revisionSurah', 'revisionAyahRangeContainer');
    
    // Populate past sessions dropdowns when session modal opens
    const sessionModal = document.getElementById('addSessionModal');
    if (sessionModal) {
        sessionModal.addEventListener('show.bs.modal', function() {
            populatePastSessionsDropdowns();
        });
    }
}

// Firebase sync functions
async function syncDeleteStudentToFirebase(studentId) {
    console.log('=== SYNC DELETE TO FIREBASE ===');
    console.log('Firebase service exists:', !!window.firebaseService);
    console.log('Firebase service initialized:', window.firebaseService?.initialized);
    
    if (window.firebaseService && window.firebaseService.initialized) {
        try {
            console.log('Attempting to delete student from Firebase:', studentId);
            await window.firebaseService.deleteStudent(studentId);
            console.log('Student deleted from Firebase:', studentId);
        } catch (error) {
            console.error('Error deleting student from Firebase:', error);
        }
    } else {
        console.log('Firebase service not available for deletion');
    }
}

async function deleteStudentContentFromFirebase(studentId) {
    console.log('=== DELETING STUDENT CONTENT FROM FIREBASE ===');
    console.log('Student ID:', studentId);
    
    if (window.firebaseService && window.firebaseService.initialized) {
        try {
            // Delete content from Firebase
            await window.firebaseService.deleteStudentContent(studentId);
            console.log('Student content deleted from Firebase:', studentId);
        } catch (error) {
            console.error('Error deleting student content from Firebase:', error);
        }
    } else {
        console.log('Firebase service not available for content deletion');
    }
}

async function verifyUserExistsInFirebase(userId, userType) {
    console.log('=== VERIFYING USER EXISTS IN FIREBASE ===');
    console.log('User ID:', userId, 'Type:', userType);
    
    if (window.firebaseService && window.firebaseService.initialized) {
        try {
            if (userType === 'student') {
                const student = await window.firebaseService.getStudent(userId);
                return student !== null;
            } else if (userType === 'teacher') {
                const teacher = await window.firebaseService.getTeacher(userId);
                return teacher !== null;
            } else if (userType === 'admin') {
                // Admin always exists (ADMINYNG9)
                return userId === 'ADMINYNG9';
            }
        } catch (error) {
            console.error('Error verifying user in Firebase:', error);
            return false;
        }
    }
    
    // If Firebase not available, allow login (fallback)
    return true;
}

async function syncCreateStudentToFirebase(studentData) {
    if (window.firebaseService && window.firebaseService.initialized) {
        try {
            await window.firebaseService.createStudent(studentData);
            console.log('Student created in Firebase:', studentData.id);
        } catch (error) {
            console.error('Error creating student in Firebase:', error);
        }
    }
}

async function syncUpdateStudentToFirebase(studentId, studentData) {
    if (window.firebaseService && window.firebaseService.initialized) {
        try {
            await window.firebaseService.updateStudent(studentId, studentData);
            console.log('Student updated in Firebase:', studentId);
        } catch (error) {
            console.error('Error updating student in Firebase:', error);
        }
    }
}

async function syncCreateTeacherToFirebase(teacherData) {
    if (window.firebaseService && window.firebaseService.initialized) {
        try {
            await window.firebaseService.createTeacher(teacherData);
            console.log('Teacher created in Firebase:', teacherData.id);
        } catch (error) {
            console.error('Error creating teacher in Firebase:', error);
        }
    }
}

async function syncDeleteTeacherToFirebase(teacherId) {
    if (window.firebaseService && window.firebaseService.initialized) {
        try {
            await window.firebaseService.deleteTeacher(teacherId);
            console.log('Teacher deleted from Firebase:', teacherId);
        } catch (error) {
            console.error('Error deleting teacher from Firebase:', error);
        }
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
    const locale = currentLanguage === 'ar' ? 'ar-SA' : 'en-US';
    return date.toLocaleDateString(locale, { 
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

// Notification function removed - no more popups!

// Save all data to Firebase
async function saveAllDataToStorage() {
    try {
        // Add timestamp to track when data was last saved
        sampleData.lastSaved = new Date().toISOString();
        
        // Save to Firebase if available
        if (window.firebaseService && window.firebaseService.initialized) {
            try {
                console.log('=== SAVING TO FIREBASE ===');
                console.log('Students to save:', Object.keys(sampleData.students));
                console.log('Teachers to save:', Object.keys(sampleData.teachers));
                
                // Save students
                for (const [id, studentData] of Object.entries(sampleData.students)) {
                    console.log('Saving student to Firebase:', id, studentData);
                    await window.firebaseService.createStudent(studentData);
                }
                
                // Save teachers
                for (const [id, teacherData] of Object.entries(sampleData.teachers)) {
                    console.log('Saving teacher to Firebase:', id, teacherData);
                    await window.firebaseService.createTeacher(teacherData);
                }
                
                // Save content
                for (const [id, contentData] of Object.entries(sampleData.content)) {
                    console.log('Saving content to Firebase:', id, contentData);
                    await window.firebaseService.saveContent(id, contentData);
                }
        
        console.log('All data saved to Firebase:', sampleData);
        
        // Show a subtle notification that data was saved (only for admin users)
        if (currentUserType === 'admin') {
            console.log('Data saved to cloud successfully!', 'success');
        }
            } catch (firebaseError) {
                console.error('Error saving to Firebase:', firebaseError);
        console.log('Error saving to cloud', 'error');
            }
        } else {
            console.log('Firebase not available, data not saved');
            console.log('Firebase service:', window.firebaseService);
        }
    } catch (e) {
        console.error('Error saving data:', e);
        console.log('Error saving data', 'error');
    }
}



// Load data from Firebase
async function loadDataFromStorage() {
    try {
        console.log('=== LOADING DATA FROM STORAGE ===');
        console.log('Firebase service exists:', !!window.firebaseService);
        console.log('Firebase service initialized:', window.firebaseService?.initialized);
        
        // Clear any existing data to ensure clean state
        sampleData.students = {};
        sampleData.teachers = {};
        sampleData.content = {};
        
        // Load from Firebase only (unless data was just cleared)
        if (!dataJustCleared && window.firebaseService && window.firebaseService.initialized) {
            try {
                console.log('Loading data from Firebase...');
                const students = await window.firebaseService.getAllStudents();
                const teachers = await window.firebaseService.getAllTeachers();
                const content = await window.firebaseService.getAllContent();
                
                console.log('Raw students from Firebase:', students);
                console.log('Raw teachers from Firebase:', teachers);
                console.log('Raw content from Firebase:', content);
                
                if (students && Object.keys(students).length > 0) {
                    console.log('Loading students from Firebase:', Object.keys(students).length);
                    sampleData.students = students;
                }
                if (teachers && Object.keys(teachers).length > 0) {
                    console.log('Loading teachers from Firebase:', Object.keys(teachers).length);
                    sampleData.teachers = teachers;
                }
                if (content && Object.keys(content).length > 0) {
                    console.log('Loading content from Firebase:', Object.keys(content).length);
                    sampleData.content = content;
                }
            
            console.log('Data loaded from Firebase:', sampleData);
            console.log('Students after Firebase load:', Object.keys(sampleData.students));
            console.log('Teachers after Firebase load:', Object.keys(sampleData.teachers));
            console.log('Content after Firebase load:', Object.keys(sampleData.content));
            } catch (firebaseError) {
                console.error('Error loading from Firebase:', firebaseError);
                console.log('Firebase error, using empty data');
            }
        } else if (dataJustCleared) {
            console.log('Data was just cleared, skipping Firebase reload');
            dataJustCleared = false; // Reset flag
        } else {
            console.log('Firebase not available, using empty data');
            console.log('Firebase service:', window.firebaseService);
        }
    } catch (e) {
        console.error('Error loading data:', e);
        console.log('Firebase error, using empty data');
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
    const topCards = document.querySelector('.top-cards');
    const pastSessionsCard = document.querySelector('.past-sessions-card');
    
    if (topCards) {
        topCards.style.display = 'none';
    }
    if (pastSessionsCard) {
        pastSessionsCard.style.display = 'none';
    }
    
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
                <button class="btn btn-secondary" onclick="showLogoutConfirmation()">
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
    if (modal) {
        modal.style.display = 'block';
    }
}

// Show assign students modal
function showAssignStudentsModal() {
    const modal = document.getElementById('assignStudentsModal');
    if (modal) {
        modal.style.display = 'block';
    }
    
    // Populate teacher dropdown
    populateTeacherDropdown();
    
    // Load current assignments
    loadCurrentAssignments();
}

// Show delete student modal
function showDeleteStudentModal() {
    const modal = document.getElementById('deleteStudentModal');
    if (modal) {
        modal.style.display = 'block';
    }
    
    // Populate student dropdown
    populateDeleteStudentDropdown();
    
    // Reset preview
    const studentPreview = document.getElementById('studentPreview');
    const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
    if (studentPreview) {
        studentPreview.style.display = 'none';
    }
    if (confirmDeleteBtn) {
        confirmDeleteBtn.disabled = true;
    }
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
            const studentPreview = document.getElementById('studentPreview');
            const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
            if (studentPreview) {
                studentPreview.style.display = 'none';
            }
            if (confirmDeleteBtn) {
                confirmDeleteBtn.disabled = true;
            }
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
    const studentPreview = document.getElementById('studentPreview');
    const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
    if (studentPreview) {
        studentPreview.style.display = 'block';
    }
    if (confirmDeleteBtn) {
        confirmDeleteBtn.disabled = false;
    }
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
    
    showConfirmationModal('Delete Student', confirmContent, async () => {
        console.log('=== DELETING STUDENT FROM FIREBASE ===');
        console.log('Student ID to delete:', studentId);
        console.log('Firebase service initialized:', window.firebaseService?.initialized);
        
        // Show loading screen
        showLoading('Deleting student...');
        
        try {
            // Use complete database clear for thorough deletion
            console.log('Using complete database clear for student deletion...');
            await clearCompleteDatabase();
            
            // Recreate admin account if it existed
            if (sampleData.admin) {
                const adminData = sampleData.admin;
                sampleData.admin = adminData;
                localStorage.setItem('sampleData', JSON.stringify(sampleData));
                console.log('Admin account restored after clear');
            }
            
            // Close modals
            closeModal('deleteStudentModal');
            closeModal('confirmationModal');
            
            // Refresh admin dashboard
            showAdminDashboard();
            
            console.log(`Student ${student.name} deleted successfully!`, 'success');
        } catch (error) {
            console.error('Error deleting student:', error);
            alert('Error deleting student. Please try again.');
        } finally {
            hideLoading();
        }
    });
}

// Show delete teacher modal
function showDeleteTeacherModal() {
    const modal = document.getElementById('deleteTeacherModal');
    if (modal) {
        modal.style.display = 'block';
    }
    
    // Populate teacher dropdown
    populateDeleteTeacherDropdown();
    
    // Reset preview
    const teacherPreview = document.getElementById('teacherPreview');
    const confirmDeleteTeacherBtn = document.getElementById('confirmDeleteTeacherBtn');
    if (teacherPreview) {
        teacherPreview.style.display = 'none';
    }
    if (confirmDeleteTeacherBtn) {
        confirmDeleteTeacherBtn.disabled = true;
    }
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
            const teacherPreview = document.getElementById('teacherPreview');
            const confirmDeleteTeacherBtn = document.getElementById('confirmDeleteTeacherBtn');
            if (teacherPreview) {
                teacherPreview.style.display = 'none';
            }
            if (confirmDeleteTeacherBtn) {
                confirmDeleteTeacherBtn.disabled = true;
            }
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
    const teacherPreview = document.getElementById('teacherPreview');
    const confirmDeleteTeacherBtn = document.getElementById('confirmDeleteTeacherBtn');
    if (teacherPreview) {
        teacherPreview.style.display = 'block';
    }
    if (confirmDeleteTeacherBtn) {
        confirmDeleteTeacherBtn.disabled = false;
    }
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
    
    showConfirmationModal('Delete Teacher', confirmContent, async () => {
        // Remove teacher from data
        delete sampleData.teachers[teacherId];
        
        // Update all students assigned to this teacher
        students.forEach(studentId => {
            if (sampleData.students[studentId]) {
                sampleData.students[studentId].teacher = 'Unassigned';
            }
        });
        
        // Clear entire Firebase database when deleting teacher
        console.log('=== DELETING TEACHER AND CLEARING FIREBASE ===');
        console.log('Teacher ID to delete:', teacherId);
        
        // Clear entire Firebase database
        await clearFirebaseDatabase();
        
        // Clear local data completely
        sampleData.students = {};
        sampleData.teachers = {};
        sampleData.content = {};
        dataJustCleared = true; // Set flag to prevent reloading
        
        // Close modals
        closeModal('deleteTeacherModal');
        closeModal('confirmationModal');
        
        // Refresh admin dashboard
        showAdminDashboard();
        
        console.log(`Teacher ${teacher.name} deleted successfully!`, 'success');
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
        console.log('Please fill in all required fields', 'error');
        return;
    }
    
    // Show loading screen
    showLoading('Creating account...');
    
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
    
    // Sync to Firebase
    if (accountType === 'student') {
        syncCreateStudentToFirebase(sampleData.students[newId]);
    } else if (accountType === 'teacher') {
        syncCreateTeacherToFirebase(sampleData.teachers[newId]);
    }
    
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
    
    console.log(`${accountType} account created successfully! ID: ${newId}`, 'success');
    
    // Refresh admin dashboard
    showAdminDashboard();
    
    // Hide loading screen
    hideLoading();
}

// Update class options based on selected grade
function updateClassOptions() {
    const gradeSelect = document.getElementById('grade');
    const classSelect = document.getElementById('className');
    const selectedGrade = gradeSelect.value;
    
    // Clear current options
    classSelect.innerHTML = `<option value="">${getTranslation('signup.select_class')}</option>`;
    
    if (!selectedGrade) {
        classSelect.innerHTML = `<option value="">${getTranslation('signup.select_grade_first')}</option>`;
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
        console.log('Please select both a teacher and a student', 'error');
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
    
    console.log(`Student assigned to teacher successfully!`, 'success');
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
    // Remove student assignment
    {
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
        
        console.log('Student assignment removed successfully!', 'success');
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
    
    showConfirmationModal('Delete All Teachers', confirmContent, async () => {
        try {
            console.log('=== DELETING ALL TEACHERS ===');
            
            // Show loading screen
            showLoading('Deleting all teachers...');
            
            // Use complete database clear for thorough deletion
            console.log('Using complete database clear for all teachers deletion...');
            await clearCompleteDatabase();
            
            // Recreate admin account if it existed
            if (sampleData.admin) {
                const adminData = sampleData.admin;
                sampleData.admin = adminData;
                localStorage.setItem('sampleData', JSON.stringify(sampleData));
                console.log('Admin account restored after clear');
            }
            
            // Refresh admin dashboard
            showAdminDashboard();
            
            console.log('All teachers deleted successfully!', 'success');
        } catch (error) {
            console.error('Error deleting all teachers:', error);
            alert('Error deleting teachers. Please try again.');
        } finally {
            hideLoading();
        }
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
    
    showConfirmationModal('Delete All Students', confirmContent, async () => {
        try {
            console.log('=== DELETING ALL STUDENTS ===');
            
            // Show loading screen
            showLoading('Deleting all students...');
            
            // Use complete database clear for thorough deletion
            console.log('Using complete database clear for all students deletion...');
            await clearCompleteDatabase();
            
            // Recreate admin account if it existed
            if (sampleData.admin) {
                const adminData = sampleData.admin;
                sampleData.admin = adminData;
                localStorage.setItem('sampleData', JSON.stringify(sampleData));
                console.log('Admin account restored after clear');
            }
            
            // Refresh admin dashboard
            showAdminDashboard();
            
            console.log('All students deleted successfully!', 'success');
        } catch (error) {
            console.error('Error deleting all students:', error);
            alert('Error deleting students. Please try again.');
        } finally {
            hideLoading();
        }
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
window.showLogoutConfirmation = showLogoutConfirmation;
window.skipToDashboard = skipToDashboard;
window.confirmLogout = confirmLogout;
window.updateClassOptions = updateClassOptions;
window.clearFirebaseDatabase = clearFirebaseDatabase;

// Load all data from storage
// Firebase-only data loading - localStorage removed

// Firebase-only data saving - localStorage removed

// Duplicate DOMContentLoaded listener removed - using the one above

// Logout confirmation function
function confirmLogout() {
    showLogoutConfirmation();
}

// Clear Firebase database (for testing)
async function clearFirebaseDatabase() {
    if (window.firebaseService && window.firebaseService.initialized) {
        try {
            console.log('Clearing Firebase database...');
            
            // Get all students and delete them
            const students = await window.firebaseService.getAllStudents();
            for (const studentId of Object.keys(students)) {
                await window.firebaseService.deleteStudent(studentId);
                console.log('Deleted student:', studentId);
            }
            
            // Get all teachers and delete them
            const teachers = await window.firebaseService.getAllTeachers();
            for (const teacherId of Object.keys(teachers)) {
                await window.firebaseService.deleteTeacher(teacherId);
                console.log('Deleted teacher:', teacherId);
            }
            
            console.log('Firebase database cleared!');
        } catch (error) {
            console.error('Error clearing Firebase database:', error);
        }
    }
}

// Helper function to control options button visibility based on user type
function updateOptionsButtonVisibility() {
    const optionsBtn = document.getElementById('testModalBtn');
    if (!optionsBtn) return;
    
    if (currentUserType === 'teacher') {
        optionsBtn.style.display = 'inline-block';
    } else {
        optionsBtn.style.display = 'none';
    }
}

// Loading screen functions
function showLoading(message = 'Loading...') {
    const loadingOverlay = document.getElementById('loadingOverlay');
    const loadingText = document.querySelector('.loading-text');
    
    if (loadingOverlay) {
        if (loadingText) {
            loadingText.textContent = message;
        }
        loadingOverlay.style.display = 'flex';
    }
}

function hideLoading() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        loadingOverlay.style.display = 'none';
    }
}

// Check for existing user session
function checkExistingSession() {
    const savedUser = localStorage.getItem('quranUser');
    const savedUserType = localStorage.getItem('quranUserType');
    
    if (savedUser && savedUserType) {
        console.log('Found existing session:', savedUser, savedUserType);
        
        currentUser = savedUser;
        currentUserType = savedUserType;
        
        let userData;
        if (currentUserType === 'admin') {
            userData = sampleData.admin[savedUser];
            console.log('Admin user data lookup:', savedUser, userData);
        } else if (currentUserType === 'student') {
            userData = sampleData.students[savedUser];
        } else if (currentUserType === 'teacher') {
            userData = sampleData.teachers[savedUser];
        }
        
        if (userData) {
            loginSuccess(userData);
        } else if (currentUserType === 'admin' && savedUser === 'ADMINYNG9') {
            // Fallback for ADMINYNG9 if not found in sampleData
            console.log('Creating fallback admin data for ADMINYNG9');
            const fallbackAdminData = {
                name: 'System Administrator',
                role: 'admin',
                id: 'ADMINYNG9',
                type: 'admin'
            };
            loginSuccess(fallbackAdminData);
        } else {
            // Clear invalid session
            console.log('No user data found, clearing session');
            localStorage.removeItem('quranUser');
            localStorage.removeItem('quranUserType');
        }
    }
}

// Set up all event listeners
// Duplicate setupEventListeners function removed - using the one above

