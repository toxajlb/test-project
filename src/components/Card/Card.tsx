import { useNavigate } from "react-router-dom"
import { ICard } from "../../models/models"
import classes from "./Card.module.scss"

interface CardProps {
  card: ICard
}

export function Card({ card }: CardProps) {
  
  const navigate = useNavigate();

  const clickHandler = () => navigate(`detail/${card.id}`)

  return (
    <div className={classes.container} onClick={clickHandler}>
      <p>{card.full_name}</p>
    </div>
  )
}
