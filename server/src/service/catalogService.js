
const getCatalogData = () => {
  //access the database to get data
  const catalog = [
  {
    id: 1,
    name: 'A2 Full Cream Milk 1l',
    price: '2.50',
    stockAvailable: true,
    image: 'A2FullCreamMilk.jpg'
  },
  {
    id: 2,
    name: 'Dairy Farmer Full Cream Milk 1l',
    price: '3.00',
    stockAvailable: true,
    image: 'DairyFarmersFullCreamMilk.jpg'
  },
  {
    id: 3,
    name: 'Woolworths Lite Milk',
    price: '1.50',
    stockAvailable: true,
    image: 'WoolworthsLiteMilk.jpg'
  },
  {
    id: 4,
    name: 'Nestle Condensed Milk',
    price: '2.50',
    stockAvailable: false,
    image: 'NestleCondensedMilk.jpg'
  },
  {
    id: 5,
    name: 'Pop Tops Apple Drink 250ml x6 pack',
    price: '4.90',
    stockAvailable: true,
    image: 'PopTopsApple.jpg'
  },
  {
    id: 6,
    name: 'Golden Circle Mango Nectar Juice',
    price: '3.00',
    stockAvailable: true,
    image: 'GoldenCircleMango.jpg'
  },
  {
    id: 7,
    name: 'Daily Juice Pop Top Tropical',
    price: '5.00',
    stockAvailable: true,
    image: 'DailyJuicePopTopTropical.jpg'
  },
  {
    id: 8,
    name: 'Fuze Ice Tea Mango 1.25l',
    price: '2.60',
    stockAvailable: true,
    image: 'FuzeIceTea.jpg'
  },
  {
    id: 9,
    name: 'Moccona Mixes Cappuccino 10 pack',
    price: '4.50',
    stockAvailable: true,
    image: 'MocconaMixes.jpg'
  },
  {
    id: 10,
    name: 'Maximus Sports Drink Red 1l',
    price: '2.15',
    stockAvailable: true,
    image: 'MaximusSportsDrink.jpg'
  },
  {
    id: 11,
    name: 'Lindt Hot Chocolate Flakes Milk 210g',
    price: '7.50',
    stockAvailable: true,
    image: 'LindtHotChocolate.jpg'
  },
  {
    id: 12,
    name: 'Powerade Berry Ice 1.5l',
    price: '3.90',
    stockAvailable: true,
    image: 'PoweradeBerryIce.jpg'
  },
  {
    id: 13,
    name: 'Red Bull Energy Drink Sugar Free 4x250ml',
    price: 10.85,
    stockAvailable: true,
    image: 'RedBullEnergyDrink.jpg'
  },
  {
    id: 14,
    name: 'Carlton Draught Lager Stubbies 24x375ml case',
    price: '55.00',
    stockAvailable: true,
    image: 'CarltonDraughtLager.jpg'
  },
  {
    id: 15,
    name: 'Heineken Premium Lager Stubbies 6x330ml pack',
    price: '21.50',
    stockAvailable: true,
    image: 'HeinekenPremium.jpg'
  },
  {
    id: 16,
    name: 'Lipton Ice Green Team Citrus 500ml',
    price: '1.90',
    stockAvailable: false,
    image: 'LiptonIceGreenTea.jpg'
  }
]
  return catalog;
}

module.exports = { getCatalogData }
