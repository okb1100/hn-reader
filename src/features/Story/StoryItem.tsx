import React from 'react'

type StoryItemProps = {
    item: HNStory
}

const StoryItem: React.FC<StoryItemProps> = ({item}) => {
  return (
    <>
      <div>{item.title}</div>
    </>
  )
}

export default StoryItem
