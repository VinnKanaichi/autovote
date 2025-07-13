import { initializeApp } from "firebase/app"
import { getDatabase, ref, runTransaction } from "firebase/database"

// Ganti ini dengan konfigurasi Firebase kamu
const firebaseConfig = {
  apiKey: "ISI_API_KEY_MU",
  authDomain: "xxxx.firebaseapp.com",
  databaseURL: "https://xxxx.firebaseio.com",
  projectId: "xxxx",
  storageBucket: "xxxx.appspot.com",
  messagingSenderId: "xxxx",
  appId: "xxxx"
}

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

const voteType = "furina" // Ganti ke "multifungsi" kalau mau
async function vote() {
  const voteRef = ref(db, `votes/${voteType}`)
  await runTransaction(voteRef, (current) => {
    return (current || 0) + 1
  })
  console.log(`[✅] Voted: ${voteType}`)
}

vote().catch(err => {
  console.error("[❌] Gagal vote:", err)
})
