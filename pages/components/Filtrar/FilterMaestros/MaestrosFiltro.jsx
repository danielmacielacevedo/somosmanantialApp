import { useState, useEffect } from "react";
import ArticleList from "./ArticleListMaestros";
import ButtonList from "./ButtonListMaestros";
import ButtonDayList from "./ButtonDayListMaestros";

export default function MaestrosFiltro(props) {
  const [originalArticles, setOriginalArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [selectedDay, setSelectedDay] = useState(""); // Estado para el día seleccionado

  const fetchData = async () => {
    if (props.mes) {
      const response = await fetch(encodeURI(`/api/maestros/${props.mes}`));
      const data = await response.json();
      setOriginalArticles(data);
      setFilteredArticles(data);
    }
  };

  // Realizar la solicitud fetch cuando se monta el componente
  useEffect(() => {
    fetchData();
  }, [props.mes]);
  
  const filterCategory = (category) => {
    setSelectedDay(""); // Restablecer el día seleccionado al filtrar por categoría
    if (category === "Todos") {
      setFilteredArticles(originalArticles);
    } else {
      const filteredArticles = originalArticles
        .map((article) => ({
          ...article,
          classes: article.classes.filter(
            (clase) => clase.category === category && (!selectedDay || clase.dia === selectedDay)
          ),
        }))
        .filter((article) => article.classes.length > 0);
      setFilteredArticles(filteredArticles);
    }
  };
  

  const filterDay = (day) => {
    setSelectedDay(day); // Actualizar el día seleccionado
    if (day === "Todos") {
      setFilteredArticles(originalArticles);
    } else {
      const filteredArticles = originalArticles.filter((article) =>
        article.classes.some((clase) => clase.dia === day)
      );
      setFilteredArticles(filteredArticles);
    }
  };

  const categories = ["Todos", "Niños", "Jóvenes", "Adultos"];

  return (
    <>
      <div className="MaestrosFiltroContainer">
        <ButtonList categories={categories} filterCategory={filterCategory} />
        <ButtonDayList
          articles={originalArticles} // Pasar los artículos originales al componente ButtonDayList
          filterDay={filterDay}
        />
        <ArticleList articles={filteredArticles} selectedDay={selectedDay} />
      </div>
      <style jsx>{`
        .MaestrosFiltroContainer {
          display: flex;
          width: 100%;
          flex-direction: column;
          padding: 0 20px;
          gap: 20px;
        }
      `}</style>
    </>
  );
}
