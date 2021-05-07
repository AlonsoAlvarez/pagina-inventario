import { firestore } from "../firebase";

export const getItem = async (uid, coleccion) => {
    let consulta = await firestore.collection(coleccion).doc(uid).get()
    return consulta
}

export const getByRef = async (ref) => {
    let consulta = await ref.get()
    return consulta
}

export const getItems = async (coleccion) => {
    let consulta = await firestore.collection(coleccion).orderBy("name", "asc").get()
    return consulta.docs
}

export const getRamas = async (coleccion) => {
    let consulta = await firestore.collection(coleccion).orderBy("index", "asc").get()
    return consulta.docs
}

export const getPromociones = async () => {
    let consulta = await firestore.collection("promociones").orderBy("fecha", "desc").get()
    return consulta.docs
}

export const getProductos = async (coleccion, uid) => {
    let reference = firestore.collection(coleccion).doc(uid)
    let campo = coleccion.slice(0, coleccion.length - 1)
    let consulta = await firestore.collection("productos").where(campo, "==", reference).orderBy("name", "asc").get()
    return consulta.docs
}

export const getProductosRamaCategoria = async (uidRama, uidCategoria) => {
    let ramaRef = firestore.collection("ramas").doc(uidRama)
    let categoriasRef = firestore.collection("categorias").doc(uidCategoria)
    let consulta = await firestore.collection("productos").where("rama", "==", ramaRef).where("categoria", "==", categoriasRef).orderBy("name", "asc").get()
    return consulta.docs
}

export const getEspecificaionesCategoria = async (uidCategoria) => {
    let categoriaRef = firestore.collection("categorias").doc(uidCategoria)
    let consulta = await firestore.collection("especificaciones").where("uidCategoria", "==", categoriaRef).limit(1).get()
    return 0 < consulta.docs.length? consulta.docs[0] : null
}

export const streamItems = (coleccion) => {
    firestore.collection(coleccion).onSnapshot((docs) => {
        let source = docs.metadata.hasPendingWrites ? "Local" : "Server";
        console.log(source, " data: ", docs.data());
        return docs
    })
}
