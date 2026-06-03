export const getLocation = async () => {
    return { longitude: 5.8, latitude: 53.2, city: "Leeuwarden" };
    // TODO
    // const ipDetails = await fetch(`https://ipapi.co/json/`)
    // const jsonData = await ipDetails.json()
    // if (jsonData) return { longitude: jsonData.longitude, latitude: jsonData.latitude, city: jsonData.city };
    // else return { longitude: 5.8, latitude: 53.2, city: "Leeuwarden"};;
}
