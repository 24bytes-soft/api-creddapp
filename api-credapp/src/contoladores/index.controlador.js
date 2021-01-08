import pkj from "../../package.json";


export const index = async(req, res) => {
    res.json({
        mensaje: "Bienvenidos a res api: " + pkj.name,
        version: pkj.version,
        autor: pkj.author,
        licencia: pkj.license
    });
}