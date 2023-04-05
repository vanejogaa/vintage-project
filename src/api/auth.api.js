const usuariosDB = [
    {email: 'manelrodriguez@gmail.com', pass: '123456'},
    {email: 'vanejover@gmail.com', pass: '654321'},
    {email: 'lunaperez@gmail.com', pass: '123450'},
    {email: 'dunala@gmail.com', pass: '622312'},
    {email: 'garcialia@gmail.com', pass: '987654'},
    {email: 'saraperez34@gmail.com', pass: '987653'},
    {email: 'laura@gmail.com', pass: '000001'},
    {email: 'gimena52@gmail.com', pass: '999876'},
    {email: 'sanchezjuan@gmail.com', pass: '000012'},
]


export function login(emailForm, passForm){
    const userMatch = usuariosDB.find(u=> u.email === emailForm && u.pass === passForm)

    if(userMatch){
        return userMatch
    }
    else{
        return null
    }
}