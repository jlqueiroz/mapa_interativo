// =============================================
// CONFIGURAÇÃO DE CAMADAS PREDEFINIDAS
// =============================================

// Defina aqui os caminhos para seus arquivos KML
const CAMADAS_PREDEFINIDAS = [
    {
        nome: "Limites Municipais",
        url: "Users\d787887\Documents\AnaqMaps\QDRA_risco_MOOCA-ARICANDUVA.kml",
        visivel: true,
        cor: "#3498db"
    },
    {
        nome: "Áreas de Preservação", 
        url: "caminho/para/seu/arquivo2.kml",
        visivel: true,
        cor: "#27ae60"
    },
    {
        nome: "Zoneamento Urbano",
        url: "caminho/para/seu/arquivo3.kml",
        visivel: false,
        cor: "#e74c3c"
    }
    // Adicione mais camadas conforme necessário
];

// =============================================
// CONFIGURAÇÕES GLOBAIS
// =============================================

// Configurações padrão do mapa
const MAP_CONFIG = {
    center: [-23.5664559, -46.5776674],
    zoom: 18,
    tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> © AnaqMaps'
};

// Configurações de estilo
const STYLE_CONFIG = {
    polygon: {
        drawn: {
            color: '#808070',
            fillColor: '#808070',
            fillOpacity: 0.3,
            weight: 2
        },
        imported: {
            fillColor: 'transparent',
            fillOpacity: 0,
            color: 'transparent',
            weight: 0
        },
        selected: {
            fillColor: 'black',
            fillOpacity: 0.25,
            color: 'transparent',
            weight: 0
        }
    },
    label: {
        width: 150,
        height: 35,
        fontSize: '14px'
    }
};