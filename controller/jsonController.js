fs = require('fs').promises;

const getJsonData = async (req, res) => {     
    const data = await fs.readFile('./fuentes-datos/MUR.json', 'utf8');
    const jsonData = JSON.parse(data)
    res.status(200).json(jsonData);
}

module.exports = {getJsonData}