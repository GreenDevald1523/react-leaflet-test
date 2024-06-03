import {
  DEFAULT_DIESEL_FUEL_CONSUMPTION,
  DEFAULT_DIESEL_PRICE,
} from "../constants"

// Фукнция подсчета цены за путь, пройденный грузовым автомобилем
export const calculatePrice = (path) =>
  (
    DEFAULT_DIESEL_PRICE *
    (DEFAULT_DIESEL_FUEL_CONSUMPTION / (100 / path))
  ).toFixed(0)
