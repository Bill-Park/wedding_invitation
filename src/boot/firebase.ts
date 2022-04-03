import firebaseConfig from '../../firebaseConfig'
import { initializeApp } from 'firebase/app'
import { getDatabase, connectDatabaseEmulator } from 'firebase/database'
import firebaseJson from '../../firebase.json'

const app = initializeApp(firebaseConfig)

const rtdb = getDatabase(app)
connectDatabaseEmulator(rtdb, 'localhost', firebaseJson.emulators.database.port)
export { rtdb }
