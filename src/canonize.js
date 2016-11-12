export default function canonize(url){
    const reg = new RegExp('@?(https?:)?(\/\/)?((.*?)[^\/]*\/)?([@a-zA-z0-9._]*)','i');
    const username = url.match(reg);
    username[5] = username[5].replace('@',"");
    return '@' + username[5];
}