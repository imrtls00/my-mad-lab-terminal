// /services/api.js
import axios from 'axios';

const fetchTodos = () => {
  return axios.get('https://jsonplaceholder.typicode.com/todos');
};

const fetchCities = async () => {
  const apiKey = '9db4e5a77fc8c78ef128cef25db24179';
  const cities = ['London', 'Paris', 'Berlin', 'Lahore', 'Tokyo'];
  const requests = cities.map(city =>
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  );
  const responses = await Promise.all(requests);
  return responses.map(response => ({
    name: response.data.name,
    temp: response.data.main.temp
  }));
};

export { fetchTodos, fetchCities };
