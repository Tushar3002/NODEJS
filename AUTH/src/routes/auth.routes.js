import { Router } from "express";
import * as authController from '../controllers/auth.controller.js'

const authRouter=Router()

authRouter.post('/register',authController.register)
authRouter.get('/get-me',authController.getMe)

authRouter.get('/refresh-token',authController.refreshToken)
authRouter.get('/logout',authController.logout)

authRouter.get('/logout-all',authController.logoutAll)
authRouter.post('/login',authController.login)

export default authRouter





// api.interceptors.response.use(
//   res => res,
//   async (err) => {
//     if (err.response?.status === 401) {

//       // 🔄 call refresh
//       const res = await axios.post("/api/auth/refresh-token");

//       const newToken = res.data.accessToken;

//       localStorage.setItem("token", newToken);

//       // 🔁 retry original request
//       err.config.headers.Authorization = `Bearer ${newToken}`;
//       return axios(err.config);
//     }

//     return Promise.reject(err);
//   }
// );






// Login →
//   accessToken (15m)
//   refreshToken (7d)

// User uses app →
//   API calls with accessToken

// After 15 mins →
//   accessToken expires

// Next API call →
//   returns 401

// Frontend →
//   calls /refresh-token

// Backend →
//   verifies refreshToken
//   sends new accessToken

// Frontend →
//   retries original request