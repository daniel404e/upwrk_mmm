import { faker } from '@faker-js/faker';
 
 
 





const products = [
    {
      id: 1,
      name: 'Zip Tote Basket',
      color: 'White and black',
      href: '/mentorprofileview',
      imageSrc: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      price: 'Jack Dorsey',
    },
    {
        id: 2,
        name: 'Zip Tote Basket',
        color: 'White and black',
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        price: "tina turner",
      },
      {
        id: 3,
        name: faker.name.jobTitle(),
        color: faker.random.words(7),
        href: '#',
        imageSrc: faker.image.people(1234, 2345, true),
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        price: faker.name.firstName(),
      } ,
      {
        id: 4,
        name: faker.name.jobTitle(),
        color: faker.random.words(7),
        href: '#',
        imageSrc: faker.image.people(1234, 2345, true),
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        price: faker.name.firstName(),
      } 
       
  ]



  for (let index = 0; index < 20; index++) {

    
    const toloadintoprofile={
        id: index+5,
        name: faker.name.jobTitle(),
        color: faker.random.words(7),
        href: '#',
        imageSrc: faker.image.people(1234, 2345, true),
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        price: faker.name.firstName(),
      } 

      products.push(toloadintoprofile) 
    
  }








function Explorepagegrid() {

               
    
 
     
 
    return (
      
        <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-xl font-bold text-gray-900">Explore and Connect</h2>
  
          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 ">
            {products.map((product) => (
              <div key={product.id} className="   ">
                <div className="relative ">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg   ">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center  "
                    />
                  </div>
                  <div className="relative mt-4" style={{maxHeight:"50px"}}>
                    <h3 className="text-md font-medium text-gray-900">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-70 hover:opacity-40 transition-opacity duration-300 "  
                       
                    />
                    <p className="relative text-lg font-semibold text-white ">{product.price}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={product.href}
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200 hover:drop-shadow-md transition-shadow duration-500"
                  >
                    View profile<span className="sr-only">, {product.name}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default Explorepagegrid
  