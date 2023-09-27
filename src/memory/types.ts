export interface INewCard {
  key: string
  value: string
}

export interface ICreateNewCardProps {
  value: string
  setValue: (value: string) => void
  onCreate: (value: string) => void
}

export interface INewCardsProps {
  cards: INewCard[]
  onDelete: (idx: number) => void
}
