const products = [
  {
    id: 1,
    type: 'Electrodomésticos',
    name: 'FREIDORA DE AIRE CRISTALFRY 7 LTS',
    image: './assets/freidora.webp',
    imageHoover: './assets/freidora_hoover.webp',
    price: 126.9,
    colour: 'black',
    stars: 5.0,
    productsSold: 282,
    availability: false
  },
  {
    id: 2,
    type: 'Electrodomésticos',
    name: 'CREPERA ELÉCTRICA',
    image: './assets/crepera.webp',
    imageHoover: './assets/crepera_hoover.webp',
    price: 55.14,
    offerPrice: 38.57,
    stars: 1,
    productsSold: 452,
    availability: true
  },
  {
    id: 3,
    type: 'Electrodomésticos',
    name: 'MANDOLINA VERTICAL 4 POSICIONES',
    image: './assets/mandolina.webp',
    imageHoover: './assets/mandolina_hoover.webp',
    price: 39.99,
    stars: 1,
    productsSold: 829,
    availability: true
  },
  {
    id: 4,
    type: 'Electrodomésticos',
    name: 'CORTADOR EN ESPIRAL DE VEGETALES',
    image: './assets/cortador.webp',
    imageHoover: './assets/cortador_hoover.webp',
    price: 17.99,
    stars: 0,
    productsSold: 904,
    availability: false
  },
  {
    id: 5,
    type: 'Electrodomésticos',
    name: 'MOLINILLO ELÉCTRICO',
    image: './assets/molinillo.webp',
    imageHoover: './assets/molinillo_hoover.webp',
    price: 36.47,
    stars: 3,
    productsSold: 1142,
    availability: true
  },
  {
    id: 6,
    type: 'Electrodomésticos',
    name: 'BATIDOR DE VARILLAS TITANPRO',
    image: './assets/batidor_varillas.webp',
    imageHoover: './assets/batidor_varillas_hoover.webp',
    price: 51.41,
    stars: 5,
    productsSold: 1099,
    availability: true
  },
  {
    id: 7,
    type: 'Electrodomésticos',
    name: 'BATIDORA ELÉCTRICA 1,5 LITROS LIBRE DE BPA',
    image: './assets/batidora_electrica.webp',
    imageHoover: './assets/batidora_electrica_hoover.webp',
    price: 156.4,
    offerPrice: 148.58,
    stars: 3,
    productsSold: 684,
    availability: false
  },
  {
    id: 8,
    type: 'Moldes',
    name: 'MOLDE DE GOFRES',
    image: './assets/goofres.webp',
    imageHoover: './assets/goofres_hoover.webp',
    price: 14.99,
    stars: 5,
    colour: 'yellow, purple',
    productsSold: 545,
    availability: true
  },
  {
    id: 9,
    type: 'Moldes',
    name: 'MOLDE DE TURRÓN/BARRITA',
    image: './assets/turron.webp',
    imageHoover: './assets/turron_hoover.webp',
    price: 14.99,
    stars: 1,
    colour: 'yellow, purple',
    productsSold: 1100,
    availability: true
  },
  {
    id: 10,
    type: 'Moldes',
    name: 'MOLDE RECTANGULAR 24 CM',
    image: './assets/rectangular.webp',
    imageHoover: './assets/rectangular_hoover.webp',
    price: 14.9,
    offerPrice: 14.155,
    stars: 1,
    colour: 'yellow, purple',
    productsSold: 339,
    availability: true
  },
  {
    id: 11,
    type: 'Moldes',
    name: 'PACK 4 MOLDES HELADO POLO PEQUEÑO SILICONA - LÉKUÉ',
    image: './assets/pack_moldes_helados.webp',
    imageHoover: './assets/pack_moldes_helados_hoover.webp',
    price: 18.5,
    offerPrice: 17.575,
    stars: 2,
    colour: 'yellow, purple',
    productsSold: 671,
    availability: true
  },
  {
    id: 12,
    type: 'Moldes',
    name: 'MOLDE DESMONTABLE RECTANGULAR 24 CM',
    image: './assets/molde_desmontable_rectangular.webp',
    imageHoover: './assets/molde_desmontable_rectangular_hoover.webp',
    price: 31.9,
    stars: 0,
    colour: 'yellow, purple',
    productsSold: 378,
    availability: true
  },
  {
    id: 13,
    type: 'Moldes',
    name: 'MOLDE HELADOS CALIPPO - COCUISINE',
    image: './assets/molde_calippo.webp',
    imageHoover: './assets/molde_calippo_hoover.webp',
    price: 14.99,
    stars: 2,
    colour: 'yellow, purple',
    productsSold: 1499,
    availability: true
  },
  {
    id: 14,
    type: 'Moldes',
    name: 'PACK 4 MOLDES HELADO FRUTAS TROPICALES SILICONA - LÉKUÉ',
    image: './assets/pack_moldes_helados_frutas.webp',
    imageHoover: './assets/pack_moldes_helados_frutas_hoover.webp',
    price: 18.5,
    offerPrice: 17.575,
    stars: 2,
    colour: 'yellow, purple',
    productsSold: 307,
    availability: false
  },
  {
    id: 15,
    type: 'Sartenes',
    name: 'SARTEN HIERRO MINERAL B - COCUISINE',
    image: './assets/sarten_hierro.webp',
    imageHoover: './assets/sarten_hierro_hoover.webp',
    price: 42.5,
    stars: 3,
    productsSold: 774,
    availability: true
  },
  {
    id: 16,
    type: 'Sartenes',
    name: 'SARTÉN PLANA HIERRO MINERAL B',
    image: './assets/sarten_hierro_plana.webp',
    imageHoover: './assets/sarten_hierro_plana_hoover.webp',
    price: 39.9,
    stars: 2,
    productsSold: 1260,
    availability: true
  },
  {
    id: 17,
    type: 'Sartenes',
    name: 'SARTEN FOODIE ANTIADHERENTE QUANTANIUM',
    image: './assets/sarten_antiadherente.webp',
    imageHoover: './assets/sarten_antiadherente_hoover.webp',
    price: 36.6,
    offerPrice: 34.77,
    stars: 4,
    productsSold: 237,
    availability: true
  },
  {
    id: 18,
    type: 'Sartenes',
    name: 'SARTEN ECO ACERO INOXIDABLE',
    image: './assets/sarten_acero_inoxidable.webp',
    imageHoover: './assets/sarten_acero_inoxidable_hoover.webp',
    price: 31.2,
    stars: 5,
    productsSold: 426,
    availability: true
  },
  {
    id: 19,
    type: 'Sartenes',
    name: 'SEPARADOR DE SARTENES 2 UDS',
    image: './assets/separador_sartenes.webp',
    imageHoover: './assets/separador_sartenes_hoover.webp',
    price: 5.99,
    stars: 3,
    productsSold: 1239,
    availability: true
  },
  {
    id: 20,
    type: 'Sartenes',
    name: 'PACK SARTENES ACERO INOXIDABLE',
    image: './assets/pack_sartenes_acero.webp',
    imageHoover: './assets/pack_sartenes_acero_hoover.webp',
    price: 112.1,
    offerPrice: 106.5,
    productsSold: 1380,
    availability: true
  },
  {
    id: 21,
    type: 'Cuchillos',
    name: 'CUCHILLO MULTIUSOS COCUISINE BY ARCOS',
    image: './assets/cuchillo_multiusos.webp',
    imageHoover: './assets/cuchillo_multiusos_hoover.webp',
    price: 11.4,
    stars: 5,
    colour: 'yellow, purple',
    productsSold: 180,
    availability: true
  },
  {
    id: 22,
    type: 'Cuchillos',
    name: 'CUCHILLO MONDADOR COCUISINE BY ARCOS',
    image: './assets/cuchillo_mondador.webp',
    imageHoover: './assets/cuchillo_mondador_hoover.webp',
    price: 8.6,
    stars: 1,
    colour: 'yellow, purple',
    productsSold: 199,
    availability: true
  },
  {
    id: 23,
    type: 'Cuchillos',
    name: 'CUCHILLO COCINERO COCUISINE BY ARCOS',
    image: './assets/cuchillo_cocinero.webp',
    imageHoover: './assets/cuchillo_cocinero_hoover.webp',
    price: 17.65,
    stars: 1,
    colour: 'yellow, purple',
    productsSold: 1108,
    availability: false
  },
  {
    id: 24,
    type: 'Cuchillos',
    name: 'CUCHILLO PANERO COCUISINE BY ARCOS',
    image: './assets/cuchillo_panero.webp',
    imageHoover: './assets/cuchillo_panero_hoover.webp',
    price: 12.5,
    stars: 2,
    colour: 'yellow, purple',
    productsSold: 1351,
    availability: true
  },
  {
    id: 25,
    type: 'Cuchillos',
    name: 'PACK MAESTROS DEL CORTE COCUISIN',
    image: './assets/pack_cuchillos.webp',
    imageHoover: './assets/pack_cuchillos_hoover.webp',
    price: 94.11,
    offerPrice: 89.4,
    stars: 1,
    colour: 'yellow, purple',
    productsSold: 1239,
    availability: true
  },
  {
    id: 26,
    type: 'Utensilios Cocina',
    name: 'PACK UTENSILIOS DE COCINA COCUISINE',
    image: './assets/pack_utensilios_cocina.webp',
    imageHoover: './assets/pack_utensilios_cocina_hoover.webp',
    price: 31.96,
    offerPrice: 30.36,
    stars: 4,
    colour: 'yellow, purple',
    productsSold: 478,
    availability: false
  },
  {
    id: 27,
    type: 'Utensilios Cocina',
    name: 'ESPÁTULA SILICONA 100% PLATINO',
    image: './assets/espatula.webp',
    imageHoover: './assets/espatula_hoover.webp',
    price: 7.99,
    stars: 4,
    colour: 'yellow, purple',
    productsSold: 734,
    availability: true
  },
  {
    id: 28,
    type: 'Utensilios Cocina',
    name: 'ESPÁTULA PERFORADA SILICONA 100% PLATINO',
    image: './assets/espatula_perforada.webp',
    imageHoover: './assets/espatula_perforada_hoover.webp',
    price: 7.99,
    stars: 3,
    colour: 'yellow, purple',
    productsSold: 557,
    availability: true
  },
  {
    id: 29,
    type: 'Utensilios Cocina',
    name: 'CACILLO SILICONA 100% PLATINO',
    image: './assets/cacillo.webp',
    imageHoover: './assets/cacillo_hoover.webp',
    price: 7.99,
    offerPrice: 7.5905,
    stars: 2,
    colour: 'yellow, purple',
    productsSold: 683,
    availability: true
  },
  {
    id: 30,
    type: 'Utensilios Cocina',
    name: 'ESPUMADERA SILICONA 100% PLATINO',
    image: './assets/espumadera_silicona.webp',
    imageHoover: './assets/espumadera_silicona_hoover.webp',
    price: 7.99,
    offerPrice: 7.5905,
    stars: 4,
    colour: 'yellow, purple',
    productsSold: 359,
    availability: false
  },
  {
    id: 31,
    type: 'Utensilios Cocina',
    name: 'TERMÓMETRO DIGITAL -40ºC A 230ºC',
    image: './assets/termometro_digital.webp',
    imageHoover: './assets/termometro_digital_hoover.webp',
    price: 20.48,
    stars: 4,
    productsSold: 575,
    availability: true
  }
]
const filterCategories = (productArray) => {
  const categoriesNotSorted = []
  for (const product of products) {
    if (!categoriesNotSorted.includes(product.type)) {
      categoriesNotSorted.push(product.type)
    }
  }
  const categoriesSorted = categoriesNotSorted.sort()
  categoriesNotSorted.unshift('Todas las categorías')
  return categoriesNotSorted
}
const maxPrice = (productArray) => {
  const arrayPrice = []
  for (const product of productArray) {
    arrayPrice.push(product.price)
  }
  const max = Math.max(...arrayPrice)
  return max
}
const filterProductsType = (productsArray, category) => {
  const productsFiltered = []
  for (const product of productsArray) {
    if (product.type === category) {
      productsFiltered.push(product)
    }
  }
  return productsFiltered
}
const filterProductsPrice = (productsArray, price) => {
  const productsFiltered = []
  for (const product of productsArray) {
    if (product.price <= price) {
      productsFiltered.push(product)
    }
  }
  return productsFiltered
}
const filterProductsOffer = (productsArray) => {
  const productsFiltered = []
  for (const product of productsArray) {
    //condicinal existe precio de oferta
    if (product.hasOwnProperty('offerPrice')) {
      productsFiltered.push(product)
    }
  }
  return productsFiltered
}
const printProductsOffer = (productsArray) => {
  // creamos elementos
  // productsSection.innerHTML = ''
  const productsSection = document.querySelector('#products')
  const productsOfferContainer = document.createElement('div')
  const productsOfferH1 = document.createElement('h1')
  const productsOfferH3 = document.createElement('h3')

  // damos contenido a los elementos y clases
  productsOfferContainer.className = 'offerContainer'
  productsOfferH1.textContent =
    'No hay productos con las condiciones seleccionadas'
  productsOfferH3.textContent = 'Productos en oferta sugeridos'

  // añadimos elementos al HTML
  productsOfferContainer.appendChild(productsOfferH1)
  productsOfferContainer.appendChild(productsOfferH3)
  // productsOfferContainer.appendChild(cardsContainer)
  productsSection.appendChild(productsOfferContainer)
  printProducts(productsArray)
}
// en esta funcion se pone funcion de productso o encontrados
const printFilters = (categoriesArray, arrayProducts) => {
  const filtersSection = document.querySelector('#filters')
  //creo los filtros
  const filterTypeDiv = document.createElement('div')
  const filterTypeLabel = document.createElement('label')
  const filterType = document.createElement('select')
  const filterPriceDiv = document.createElement('div')
  const filterPriceLabel = document.createElement('label')
  const filterPrice = document.createElement('input')
  const priceDiv = document.createElement('div')
  const priceRange = document.createElement('p')
  const buttonFilterDelete = document.createElement('button')
  //les pongo contenido y clases
  filterTypeDiv.className = 'filterTypeDiv'
  filterTypeLabel.textContent = 'Selecciona una opción: '
  filterPriceDiv.className = 'filterPriceDiv'
  filterPrice.type = 'range'
  priceDiv.className = 'priceDiv'
  filterPrice.min = 0
  filterPrice.max = maxPrice(arrayProducts)
  filterPrice.value = 0
  filterPriceLabel.textContent = 'Precio '
  priceRange.textContent = '0€ - ' + maxPrice(arrayProducts) + '€'
  buttonFilterDelete.textContent = 'Quita los filtros'
  // añado las opciones al select
  for (const category of categoriesArray) {
    const option = document.createElement('option')
    option.textContent = category
    filterType.appendChild(option)
  }
  //añado los filtros
  filterTypeDiv.appendChild(filterTypeLabel)
  filterTypeDiv.appendChild(filterType)
  filtersSection.appendChild(filterTypeDiv)
  filterPriceDiv.appendChild(filterPriceLabel)
  filterPriceDiv.appendChild(filterPrice)
  priceDiv.appendChild(priceRange)
  filterPriceDiv.appendChild(priceDiv)
  filtersSection.appendChild(filterPriceDiv)
  filtersSection.appendChild(buttonFilterDelete)
  // añado listeners
  filterType.addEventListener('input', (e) => {
    productsSection.innerHTML = ''
    const productsFilterdType = filterProductsType(
      arrayProducts,
      e.target.value
    )
    if (e.target.value === 'Todas las categorías') {
      printProducts(arrayProducts)
    } else if (productsFilterdType.length === 0) {
      printProductsOffer(productsOffer)
    } else {
      printProducts(productsFilterdType)
    }
  })
  filterPrice.addEventListener('input', (e) => {
    priceRange.textContent = '0€ - ' + e.target.value + '€'
    productsSection.innerHTML = ''
    const productsFilterdPrice = filterProductsPrice(products, e.target.value)
    if (productsFilterdPrice.length === 0) {
      console.log('No hay productos')
      printProductsOffer(productsOffer)
    } else {
      printProducts(productsFilterdPrice)
    }
  })
  buttonFilterDelete.addEventListener('click', function () {
    productsSection.innerHTML = ''
    //por aqui
    filterType.value = 'Todas las categorías'
    filterPrice.value = 0
    priceRange.textContent = '0€ - ' + maxPrice(arrayProducts) + '€'
    printProducts(products)
  })
}
const printProducts = (productArray) => {
  // where to print products
  productsSection = document.querySelector('#products')
  const cardsContainer = document.createElement('div')
  const productsH1 = document.createElement('h1')
  for (const productElement of productArray) {
    // create elements
    const product = document.createElement('div')
    const productImage = document.createElement('img')
    const productH3 = document.createElement('h3')
    const priceDiv = document.createElement('p')
    const productPrice = document.createElement('p')
    const starDiv = document.createElement('div')

    // add content
    cardsContainer.className = 'cardsContainer'
    starDiv.className = 'starDiv'
    priceDiv.className = 'productPriceDiv'
    product.className = 'card'
    productImage.src = productElement.image
    productH3.textContent = productElement.name
    productPrice.textContent = '€ ' + productElement.price
    for (i = 0; i <= 4; i++) {
      const star = document.createElement('img')
      if (productElement.stars > i) {
        star.src = './assets/estrella_amarilla.png'
      } else {
        star.src = './assets/estrella.png'
      }
      star.className = 'star'
      starDiv.appendChild(star)
    }

    // add to section
    product.appendChild(productImage)
    product.appendChild(productH3)
    // if the product has an offer
    if (productElement.hasOwnProperty('offerPrice')) {
      const productOfferPrice = document.createElement('p')
      productOfferPrice.className = 'offerPrice'
      productOfferPrice.textContent = '€ ' + productElement.offerPrice
      priceDiv.appendChild(productOfferPrice)
      productPrice.className = 'tachado'
    }
    // voy por aqui
    if (!productElement.availability) {
      console.log('Producto agotado')
      const productAvailability = document.createElement('p')
      productAvailability.className = 'availability'
      productAvailability.textContent = 'Producto agotado'
      product.appendChild(productAvailability)
    }
    priceDiv.appendChild(productPrice)
    product.appendChild(priceDiv)
    product.appendChild(starDiv)
    cardsContainer.appendChild(product)
  }
  productsH1.textContent = 'Colección Cocuisine'
  productsSection.appendChild(productsH1)
  productsSection.appendChild(cardsContainer)
}
const categories = filterCategories(products)
// Add an extra category to test "Productos no encontrados"
categories.push('Alimentación')
const productsOffer = filterProductsOffer(products)
printFilters(categories, products)
printProducts(products)
