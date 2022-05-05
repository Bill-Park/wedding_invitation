import firebaseConfig from '../../firebaseConfig'
import { initializeApp } from 'firebase/app'
import { getAnalytics, logEvent } from 'firebase/analytics'
import { getDatabase } from 'firebase/database'
// import firebaseJson from '../../firebase.json'

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const rtdb = getDatabase(app)
// connectDatabaseEmulator(rtdb, 'localhost', firebaseJson.emulators.database.port)
logEvent(analytics, 'notification_received')
export { rtdb, analytics }
