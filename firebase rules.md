rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Validate string length and content
    function isValidString(str, minLen, maxLen) {
      return str is string 
        && str.size() >= minLen 
        && str.size() <= maxLen 
        && str.matches('^[\\S ]*$');
    }

    // Validate specialty number
    function isValidSpecialty(s) {
      return s is number && s >= -1 && s < 30;
    }

    // Validate word object
    function isValidWord(word) {
      return word.keys().hasAll(['word', 'clue', 'difficulty', 'specialties'])
        && isValidString(word.word, 1, 50)
        && isValidString(word.clue, 3, 500)
        && word.difficulty is number
        && word.difficulty >= 1
        && word.difficulty <= 3
        && word.specialties is list
        && word.specialties.size() > 0
        && word.specialties.size() <= 5;
    }

    // Validate complete user document
    function validateUser(data) {
      return data.keys().hasAll(['username', 'email', 'custom_vocabulary', 'default_difficulty', 'default_speciality'])
        && isValidString(data.username, 3, 30)
        && isValidString(data.email, 5, 100)
        && data.email.matches('^[^@]+@[^@]+\\.[^@]+$')
        && data.default_difficulty is number
        && data.default_speciality is number
        && ((data.default_difficulty == -1) || (data.default_difficulty >= 1 && data.default_difficulty <= 3))
        && ((data.default_speciality == -1) || (data.default_speciality >= 0 && data.default_speciality < 30))
        && data.custom_vocabulary is list
        && data.custom_vocabulary.size() <= 1500;
    }

    // Allow users to read and write only their own data
    match /users/{userId} {
      allow create: if request.auth != null 
                   && request.auth.uid == userId
                   && validateUser(request.resource.data);
      
      allow read: if request.auth != null 
                  && request.auth.uid == userId;
      
      allow update: if request.auth != null 
                    && request.auth.uid == userId
                    && validateUser(request.resource.data);
      
      allow delete: if request.auth != null 
                    && request.auth.uid == userId;
    }

    // Deny access to all other collections by default
    match /{document=**} {
      allow read, write: if false;
    }
  }
}

