
const Valid=(values)=> {
    let errors={};
    if(!values.fullName){
        errors.fullName="name is required"
    }
    if(!values.email){
        errors.email="email is required"
    } else if(!/\S+@\S+\.\S+/.text(values.email)){
        errors.email="email is invalid"
    }
    if(!values.password){
        errors.password="password is required"
    }else if(values.password.length<5){
        errors.password ="password must be more than five characters"
    }
    if(!values.mobile){
        errors.mobile="mobile number is required"
    }else if (values.mobile.length<12){
        errors.mobile="mobile number must be 10 digit number"
    }
    return errors;
}

export default Valid;
