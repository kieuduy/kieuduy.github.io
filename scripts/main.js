// Sign In Form
let signInSubmit = document.querySelector('#signInModal')

signInSubmit.onsubmit = (e) => {
    e.preventDefault()
    let email = signInSubmit.email.value
    let pwd = signInSubmit.password.value
    let signInData = {
        email: email,
        password: pwd
    }
    signIn(signInData)
}

let thongBao = (status, content)=>{
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: status,
        title: content
      })
}

const signIn = async (signInInfo) => {

    try {
        let email = signInInfo.email
        let password = signInInfo.password
        let result = await firebase.auth().signInWithEmailAndPassword(email, password)
        let user = result.user
        if (user.emailVerified) {
            thongBao("success","Đăng Nhập Thành Công")
            document.getElementById("si").textContent = "Xin Chào"
            document.getElementById("su").textContent = firebase.auth().currentUser.displayName
        } else {
            throw new Error('Must verify email!')
        }

    } catch (error) {
        // console.log('error', error)
        // console.log(error.message)
        let message = error.message
        thongBao('error',message)
    }
}

// Sign Up Form
let signUpSubmit = document.querySelector('#signUpModal')

signUpSubmit.onsubmit = (f) => {
    f.preventDefault()
    let name = signUpSubmit.name.value
    let number = signUpSubmit.number.value
    let email = signUpSubmit.email.value
    let pwd = signUpSubmit.password.value
    let signUpData = {
        email: email,
        password: pwd,
        name: name,
        number: number
    }
    signUp(signUpData)
}

const signUp = async (signUpInfo) => {
    let email = signUpInfo.email
    let password = signUpInfo.password
    let name = signUpInfo.name
    let number = signUpInfo.number
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        await firebase.auth().currentUser.updateProfile({
            displayName: name,
            phoneNumber: number
        })
        await firebase.auth().currentUser.sendEmailVerification()
        thongBao('success',"Đăng kí thành công, bạn kiểm tra email nhé")
    } catch (error) {
        let message = error.message
        thongBao('error', message)
    }
}


