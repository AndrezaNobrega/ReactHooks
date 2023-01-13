export function login(dispacth, name){
    dispacth({ type: "login", payload: name })
}
          