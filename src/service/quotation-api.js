import axios from "axios";

const QuotationApi = axios.create({
  baseURL: "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL",
});

export default QuotationApi;