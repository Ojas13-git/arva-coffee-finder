# Arva Coffee Shop Finder(http://13.127.31.253:5000/)

Coffee Shop Finder App that enables users to search for
and explore coffee shops, view their products, and get detailed information about each shop.
The app will include a robust backend built with Node.js, a dynamic frontend using React.js,
data storage managed by MongoDB, and deployment on AWS.

![image](https://github.com/Ojas13-git/arva-coffee-finder/assets/79032848/226d65a0-fed5-4442-a96d-b7b1034ffd51)


It includes the following:

- Backend API with Express & MongoDB
- Routes for coffeShop, product, search
- Custom middleware to check for secret and access key
- React frontend to HomePage, CoffeeShop, Map, ProductList, SearchBar
- Search Functionality by Name, Address, MinRating, Category
- Sorting by Name and Rating
- React Tailwind CSS
- OpenStreetMap API to fetch location of coffeeshops using latitude longitude

## Usage

- Create a MongoDB database and obtain your `MongoDB URI` - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)

### Env Variables

Rename the `.env.example` file to `.env` and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
```

### Install Dependencies (frontend & backend)

```
npm install
```

### Run

```

# Run frontend (:3000) & backend (:5000)
cd frontend
npm start

# Run backend only
cd backend
npm run dev
```

## Build & Deploy
## Deployed on AWS EC2 Instance

```
# Create frontend prod build
cd frontend
npm run build
```

## Demonstrated efficient load handling and security measures in the deployment.
