export const getProperties = async () => {
    // Mock data (replace with real API call in production)
    return [
      {
        id: 1,
        title: 'Cozy Downtown Apartment',
        location: 'New York, NY',
        price: 2500,
        description: 'A modern 1-bedroom apartment in the heart of the city.',
        image: 'https://via.placeholder.com/300x200.png?text=Apartment+1',
      },
      {
        id: 2,
        title: 'Spacious Suburban House',
        location: 'Austin, TX',
        price: 3200,
        description: 'A 3-bedroom house with a large backyard.',
        image: 'https://via.placeholder.com/300x200.png?text=House+1',
      },
      {
        id: 3,
        title: 'Luxury Condo',
        location: 'Miami, FL',
        price: 4500,
        description: 'A luxury condo with ocean views and amenities.',
        image: 'https://via.placeholder.com/300x200.png?text=Condo+1',
      },
    ];
  };