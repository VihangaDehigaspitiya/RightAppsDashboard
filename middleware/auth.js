import JwtService from "../common/jwt.service";

export default function ({store, redirect, route}) {
    const token = JwtService.getToken();
    if(token === undefined){
      if (route.path === '/'){
      }else{
        return redirect('/')
      }
    }
}
