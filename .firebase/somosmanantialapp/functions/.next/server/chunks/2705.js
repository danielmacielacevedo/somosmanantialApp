"use strict";
exports.id = 2705;
exports.ids = [2705];
exports.modules = {

/***/ 2705:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Aj": () => (/* binding */ onAuthStateChanged),
/* harmony export */   "Cb": () => (/* binding */ loginWithGoogle)
/* harmony export */ });
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3773);
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4826);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAz66xEzY8OyOBgtwZ1l77SH1AA83W0Fi8",
    authDomain: "somosmanantialapp.firebaseapp.com",
    projectId: "somosmanantialapp",
    storageBucket: "somosmanantialapp.appspot.com",
    messagingSenderId: "44951684744",
    appId: "1:44951684744:web:e700420475b857f169813d",
    measurementId: "G-728J7XXSDC"
};
// Verifica si ya hay una instancia de la aplicación
!firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].apps.length && firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(firebaseConfig);
const mapUserFromFirebaseAuthToUser = (user)=>{
    if (!user) {
        return null;
    }
    const { displayName , email , uid , photoURL  } = user;
    return {
        name: displayName,
        email,
        id: uid,
        picture: photoURL
    };
};
const onAuthStateChanged = (onChange)=>{
    firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().onAuthStateChanged((user)=>{
        const normalizedUser = mapUserFromFirebaseAuthToUser(user);
        onChange(normalizedUser);
    });
};
const loginWithGoogle = ()=>{
    const googleProvider = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth.GoogleAuthProvider();
    return firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().signInWithPopup(googleProvider);
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (firebase)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;