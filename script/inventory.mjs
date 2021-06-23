export let inventory = {
  phone: {
    Pixel: {
      manufacturer: "Google",
      products: [
        {
          productID: 1,
          productName: "Pixel 5",
          quantity: 5,
          price_per_one: 1200,
          description: {
            storage: "128GB, no slot card",
            RAM: "8GB",
            battery: "4080mAh",
            display: "6.0"
          }
        },
        {
          productID: 2,
          productName: "Pixel 4a 5G",
          quantity: 12,
          price_per_one: 1005,
          description: {
            storage: "128GB, no slot card",
            RAM: "6GB",
            battery: "3885mAh",
            display: "6.2"
          }
        }
      ]
    },
    Galaxy: {
      manufacturer: "Samsung",
      products: [
        {
          productID: 3,
          productName: "Galaxy A22 5G",
          quantity: 2,
          price_per_one: 1500,
          description: {
            storage: "128GB",
            RAM: "8GB",
            battery: "5000mAh",
            display: "6.6"
          }
        },
        {
          productID: 4,
          productName: "Galaxy A22",
          quantity: 15,
          price_per_one: 1005,
          description: {
            storage: "128GB",
            RAM: "6GB",
            battery: "5000mAh",
            display: "6.4"
          }
        }
      ]
    },
    iPhone: {
      manufacturer: "Apple",
      products: [
        {
          productID: 5,
          productName: "iPhone 12 Pro Max",
          quantity: 3,
          price_per_one: 6000,
          description: {
            storage: "512GB",
            RAM: "6GB",
            battery: "3687mAh",
            display: "6.7"
          }
        },
        {
          productID: 6,
          productName: "iPhone 12 Pro",
          quantity: 21,
          price_per_one: 4890,
          description: {
            storage: "512GB",
            RAM: "6GB",
            battery: "2815mAh",
            display: "6.1"
          }
        },
        {
            productID: 8,
            productName: "iPhone 12 Mini",
            quantity: 10,
            price_per_one: 2890,
            description: {
              storage: "256GB",
              RAM: "4GB",
              battery: "2227mAh",
              display: "5.4"
            }
          },
        {
          productID: 7,
          productName: "iPhone 12",
          quantity: 12,
          price_per_one: 1005,
          description: {
            storage: "256GB",
            RAM: "4GB",
            battery: "2815mAh",
            display: "6.1"
          }
        }
      ]
    }
  },
  laptop: {},
  tablet: {}    
};
