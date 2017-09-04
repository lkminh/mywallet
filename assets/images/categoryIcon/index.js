/**
 * Created by minhluong on 8/25/17.
 */
const importAll = (r) => {
    return r.keys().reduce((acc, url) => {
        acc[imgName(url)] = r(url)
        return acc
    }, {})
}
const imgName = (url) => {
    // DEMO: url = "./path/to/image/example.1.png
    let fileName = url.split("/").pop()
    // DEMO: => fileName = "example.1.png"
    let parts = fileName.split(".")
    // DEMO: => parts = ["example", "1", "png"]
    parts.pop()
    // DEMO: => parts = ["example", "1"]
    return parts.join(".") // DEMO: => return "example.1"
}
export default importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
